import { useState } from "react";
import api from "../api";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import SuccessMessage from "../components/SuccessMessage";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      await api.post("/api/user/register/", { username, email, password });
      setMessage({ text: "You have successfully signed up!", type: "success" });
      setTimeout(() => {
        setMessage({ text: "", type: "" });
        navigate("/signin");
      }, 3000);
    } catch (error) {
      const errorMessage =
        error.response.data.username ||
        error.response.data.email ||
        error.response.data.password ||
        "An error occurred. Please try again.";
      setMessage({ text: errorMessage, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-neutral-600 font-arimo">
      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md flex flex-col justify-center items-center bg-white p-6 rounded shadow-md"
      >
        <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
        {message.text && (
          <SuccessMessage
            message={message.text}
            type={message.type}
            onClose={() => setMessage({ text: "", type: "" })}
          />
        )}
        <input
          className="form-input mb-4 p-2 border rounded w-full"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          className="form-input mb-4 p-2 border rounded w-full"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          className="form-input mb-4 p-2 border rounded w-full"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button
          className="form-button mt-4 p-2 bg-neutral-600 text-white rounded w-full hover:bg-neutral-700 disabled:bg-gray-300"
          type="submit"
          disabled={loading}
        >
          Sign up
        </button>
        <p>Already have an account?</p>
        <Link to="/signin">
          <span className="text-orange-500 hover:font-bold">Sign in here</span>
        </Link>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded">
            <Loading />
          </div>
        )}
      </form>
    </div>
  );
}
