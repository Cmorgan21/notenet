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

  const [editingId, setEditingId] = useState(null);
  const [editCategoryData, setEditCategoryData] = useState({
    name: "",
    description: "",
    color: "#ffffff",
  });

  // Helper to show message and clear it after a timeout
  const showMessage = (text, type = "success", duration = 3000) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), duration);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const res = await api.get("/api/categories/");
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.results || [];
        setCategories(data);
      } catch (error) {
        showMessage(
          error.response?.data?.detail || "Failed to fetch categories",
          "error"
        );
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleNewCategoryChange = (e) => {
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      await api.post("/api/categories/", newCategory);
      showMessage("Category added!", "success");
      setNewCategory({ name: "", description: "", color: "#ffffff" });
      // Fetch updated categories
      const res = await api.get("/api/categories/");
      const data = Array.isArray(res.data) ? res.data : res.data.results || [];
      setCategories(data);
    } catch (error) {
      showMessage(
        error.response?.data.detail || "Failed to add category",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const startEditing = (category) => {
    setEditingId(category.id);
    setEditCategoryData({
      name: category.name,
      description: category.description || "",
      color: category.color || "#ffffff",
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditCategoryData({ name: "", description: "", color: "#ffffff" });
  };

  const handleEditChange = (e) => {
    setEditCategoryData({
      ...editCategoryData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdateCategory = async (id) => {
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      await api.put(`/api/categories/${id}/`, editCategoryData);
      showMessage("Category updated!", "success");
      setEditingId(null);
      const res = await api.get("/api/categories/");
      const data = Array.isArray(res.data) ? res.data : res.data.results || [];
      setCategories(data);
    } catch (error) {
      showMessage(
        error.response?.data.detail || "Failed to update category",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      await api.delete(`/api/categories/${id}/`);
      showMessage("Category deleted!", "success");
      const res = await api.get("/api/categories/");
      const data = Array.isArray(res.data) ? res.data : res.data.results || [];
      setCategories(data);
    } catch (error) {
      showMessage(
        error.response?.data.detail || "Failed to delete category",
        "error"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-neutral-600 min-h-screen font-arimo text-white">
      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl mb-6 font-bold text-center">Categories</h1>

        {message.text && (
          <SuccessMessage
            message={message.text}
            type={message.type}
            onClose={() => setMessage({ text: "", type: "" })}
          />
        )}

        {loading && <Loading />}

        <form
          onSubmit={handleAddCategory}
          className="mb-6 p-4 border border-neutral-500 rounded bg-neutral-700 shadow"
        >
          <h2 className="text-xl mb-4 text-white font-semibold">
            Add New Category
          </h2>

          <input
            className="mb-3 p-2 border border-neutral-500 rounded w-full bg-neutral-800 text-white focus:outline-none"
            type="text"
            name="name"
            placeholder="Name"
            value={newCategory.name}
            onChange={handleNewCategoryChange}
            required
          />

          <textarea
            className="mb-3 p-2 border border-neutral-500 rounded w-full bg-neutral-800 text-white focus:outline-none"
            name="description"
            placeholder="Description (optional)"
            value={newCategory.description}
            onChange={handleNewCategoryChange}
          />

          <label className="block mb-3 text-white font-medium">
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
            className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600"
            disabled={loading}
          >
            Add Category
          </button>
        </form>

        <div className="space-y-4">
          {categories.length === 0 && <p>No categories found.</p>}
          {categories.map((cat) =>
            editingId === cat.id ? (
              <div
                key={cat.id}
                className="p-4 border border-neutral-500 rounded shadow bg-neutral-700 flex flex-col"
              >
                <input
                  type="text"
                  name="name"
                  value={editCategoryData.name}
                  onChange={handleEditChange}
                  className="mb-2 p-2 border border-neutral-500 rounded bg-neutral-800 text-white"
                />
                <textarea
                  name="description"
                  value={editCategoryData.description}
                  onChange={handleEditChange}
                  className="mb-2 p-2 border border-neutral-500 rounded bg-neutral-800 text-white"
                />
                <label className="mb-2 text-white font-medium">
                  Color:
                  <input
                    type="color"
                    name="color"
                    value={editCategoryData.color}
                    onChange={handleEditChange}
                    className="ml-2"
                  />
                </label>
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0 mt-2">
                  <button
                    onClick={() => handleUpdateCategory(cat.id)}
                    disabled={loading}
                    className="bg-green-600 text-white py-1 px-4 rounded hover:bg-green-700"
                  >
                    Save
                  </button>
                  <button
                    onClick={cancelEditing}
                    disabled={loading}
                    className="bg-gray-500 text-white py-1 px-4 rounded hover:bg-gray-600"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div
                key={cat.id}
                className="p-4 border border-neutral-500 rounded shadow bg-neutral-700 flex flex-col sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-center mb-2 sm:mb-0">
                  <div
                    className="w-8 h-8 rounded mr-4"
                    style={{ backgroundColor: cat.color }}
                    title={cat.name}
                  ></div>
                  <div>
                    <h3 className="font-semibold text-white">{cat.name}</h3>
                    {cat.description && (
                      <p className="text-sm text-white">{cat.description}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                  <button
                    onClick={() => startEditing(cat)}
                    className="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteCategory(cat.id)}
                    className="bg-red-600 text-white py-1 px-3 rounded hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
