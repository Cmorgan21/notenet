import { useState, useEffect } from "react";
import api, { handleUnauthorized } from "../api"; // Import handleUnauthorized function
import { Link, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Loading from "../components/Loading";
import SuccessMessage from "../components/SuccessMessage";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const unauthorizedMessage = localStorage.getItem("unauthorizedMessage");
    if (unauthorizedMessage) {
      setMessage({ text: unauthorizedMessage, type: "error" });
      localStorage.removeItem("unauthorizedMessage");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      const res = await api.post("/api/token/", { username, password });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      setMessage({ text: "You have successfully signed in!", type: "success" });
      setTimeout(() => {
        setMessage({ text: "", type: "" });
        navigate("/");
      }, 3000);
    } catch (error) {
      setMessage({
        text: error.response ? error.response.data.detail : "Sign-in failed",
        type: "error",
      });
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
        <h1 className="text-2xl font-bold mb-6">Sign in</h1>
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
          Sign in
        </button>
        <p>Don't have an account?</p>
        <Link to="/signup">
          <span className="text-orange-500 hover:font-bold">Sign up here</span>
        </Link>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 bg-opacity-75 rounded">
            <Loading />
          </div>
        )}
      </form>
    </div>
  );
};

export default Signin;
