import { useEffect, useState } from "react";
import api from "../api";
import Loading from "../components/Loading";
import SuccessMessage from "../components/SuccessMessage";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    color: "#ffffff",
  });

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const res = await api.get("/api/categories/");
      console.log("Categories API response:", res.data); // 👈 LOGGING HERE

      // Check if it's an array or wrapped in an object like { results: [...] }
      const data = Array.isArray(res.data) ? res.data : res.data.results || [];

      setCategories(data);
    } catch (error) {
      console.error("Category fetch error:", error); // 👈 ERROR LOGGING
      setMessage({
        text: error.response?.data?.detail || "Failed to fetch categories",
        type: "error",
      });
      setCategories([]); // prevent crash
    } finally {
      setLoading(false);
    }
  };

  const handleNewCategoryChange = (e) => {
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      await api.post("/api/categories/", newCategory);
      setMessage({ text: "Category added!", type: "success" });
      setNewCategory({ name: "", description: "", color: "#ffffff" });
      fetchCategories();
    } catch (error) {
      setMessage({
        text: error.response?.data.detail || "Failed to add category",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto font-arimo">
      <h1 className="text-3xl mb-6 font-bold">Categories</h1>

      {message.text && (
        <SuccessMessage
          message={message.text}
          type={message.type}
          onClose={() => setMessage({ text: "", type: "" })}
        />
      )}

      {loading && <Loading />}

      {/* Add new category form */}
      <form
        onSubmit={handleAddCategory}
        className="mb-6 p-4 border rounded bg-white shadow"
      >
        <h2 className="text-xl mb-4">Add New Category</h2>

        <input
          className="form-input mb-3 p-2 border rounded w-full"
          type="text"
          name="name"
          placeholder="Name"
          value={newCategory.name}
          onChange={handleNewCategoryChange}
          required
        />

        <textarea
          className="form-input mb-3 p-2 border rounded w-full"
          name="description"
          placeholder="Description (optional)"
          value={newCategory.description}
          onChange={handleNewCategoryChange}
        />

        <label className="block mb-3">
          Color:
          <input
            type="color"
            name="color"
            value={newCategory.color}
            onChange={handleNewCategoryChange}
            className="ml-2"
          />
        </label>

        <button
          type="submit"
          className="bg-neutral-600 text-white py-2 px-4 rounded hover:bg-neutral-700"
          disabled={loading}
        >
          Add Category
        </button>
      </form>

      {/* List categories */}
      <div className="space-y-4">
        {categories.length === 0 && <p>No categories found.</p>}
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="p-4 border rounded shadow flex items-center"
          >
            <div
              className="w-8 h-8 rounded mr-4"
              style={{ backgroundColor: cat.color }}
              title={cat.name}
            ></div>
            <div>
              <h3 className="font-semibold">{cat.name}</h3>
              {cat.description && <p className="text-sm">{cat.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
