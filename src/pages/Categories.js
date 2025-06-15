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

  // Track which category is being edited (by id)
  const [editingId, setEditingId] = useState(null);
  // Store edited category data here
  const [editCategoryData, setEditCategoryData] = useState({
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
      const data = Array.isArray(res.data) ? res.data : res.data.results || [];
      setCategories(data);
    } catch (error) {
      setMessage({
        text: error.response?.data?.detail || "Failed to fetch categories",
        type: "error",
      });
      setCategories([]);
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

  // Start editing a category
  const startEditing = (category) => {
    setEditingId(category.id);
    setEditCategoryData({
      name: category.name,
      description: category.description || "",
      color: category.color || "#ffffff",
    });
  };

  // Cancel editing
  const cancelEditing = () => {
    setEditingId(null);
    setEditCategoryData({ name: "", description: "", color: "#ffffff" });
  };

  // Handle input changes in edit form
  const handleEditChange = (e) => {
    setEditCategoryData({
      ...editCategoryData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit updated category
  const handleUpdateCategory = async (id) => {
    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      await api.put(`/api/categories/${id}/`, editCategoryData);
      setMessage({ text: "Category updated!", type: "success" });
      setEditingId(null);
      fetchCategories();
    } catch (error) {
      setMessage({
        text: error.response?.data.detail || "Failed to update category",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Delete category
  const handleDeleteCategory = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?"))
      return;

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      await api.delete(`/api/categories/${id}/`);
      setMessage({ text: "Category deleted!", type: "success" });
      fetchCategories();
    } catch (error) {
      setMessage({
        text: error.response?.data.detail || "Failed to delete category",
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
        {categories.map((cat) =>
          editingId === cat.id ? (
            <div
              key={cat.id}
              className="p-4 border rounded shadow flex flex-col bg-gray-100"
            >
              <input
                type="text"
                name="name"
                value={editCategoryData.name}
                onChange={handleEditChange}
                className="form-input mb-2 p-2 border rounded"
              />
              <textarea
                name="description"
                value={editCategoryData.description}
                onChange={handleEditChange}
                className="form-input mb-2 p-2 border rounded"
              />
              <label className="mb-2">
                Color:
                <input
                  type="color"
                  name="color"
                  value={editCategoryData.color}
                  onChange={handleEditChange}
                  className="ml-2"
                />
              </label>
              <div>
                <button
                  onClick={() => handleUpdateCategory(cat.id)}
                  disabled={loading}
                  className="bg-green-600 text-white py-1 px-4 rounded mr-2 hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={cancelEditing}
                  disabled={loading}
                  className="bg-gray-400 text-white py-1 px-4 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div
              key={cat.id}
              className="p-4 border rounded shadow flex items-center justify-between"
            >
              <div className="flex items-center">
                <div
                  className="w-8 h-8 rounded mr-4"
                  style={{ backgroundColor: cat.color }}
                  title={cat.name}
                ></div>
                <div>
                  <h3 className="font-semibold">{cat.name}</h3>
                  {cat.description && (
                    <p className="text-sm">{cat.description}</p>
                  )}
                </div>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => startEditing(cat)}
                  className="bg-blue-600 text-white py-1 px-3 rounded hover:bg-blue-700"
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
  );
}
