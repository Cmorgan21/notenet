import React, { useState, useEffect, useMemo } from "react";
import api from "../api";
import Note from "../components/Note";
import logo from "../assets/notenetlogo.png";
import SuccessMessage from "../components/SuccessMessage";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    const getNotes = async () => {
      try {
        const response = await api.get("/api/notes/");
        const data = response?.data?.results || response?.data || [];
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    getNotes();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await api.get("/api/categories/");
      const data = Array.isArray(res.data) ? res.data : res.data.results || [];
      setCategories(data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await api.delete(`/api/delete-note/${id}/`);
      if (response.status === 204) {
        setMessage({ text: "Note deleted!", type: "success" });
        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
        const refreshedNotes = await api.get("/api/notes/");
        setNotes(refreshedNotes?.data?.results || []);
      } else {
        setMessage({ text: "Failed to delete note.", type: "error" });
        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
      }
    } catch (error) {
      console.error("Error deleting note:", error);
      setMessage({ text: "Error deleting note.", type: "error" });
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }
  };

  const createNote = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(
        "/api/create-note/",
        {
          title,
          body,
          category_id: selectedCategory || null,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setMessage({ text: "Note created successfully!", type: "success" });
        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
        setTitle("");
        setBody("");
        setSelectedCategory("");
        setIsFormLoaded(false);

        const refreshedNotes = await api.get("/api/notes/");
        setNotes(refreshedNotes?.data?.results || []);
      } else {
        setMessage({ text: "Failed to create note.", type: "error" });
        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
      }
    } catch (err) {
      setMessage({ text: "Error creating note.", type: "error" });
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }
  };

  const filteredNotes = useMemo(() => {
    if (filterCategory === "all") return notes;
    return notes.filter(
      (note) => note.category && note.category.id === parseInt(filterCategory)
    );
  }, [notes, filterCategory]);

  return (
    <div className="bg-neutral-600 min-h-screen flex items-center justify-center text-white py-8 md:py-16 font-arimo">
      <div className="max-w-screen-lg w-full md:px-8">
        {message.text && (
          <SuccessMessage
            message={message.text}
            type={message.type}
            onClose={() => setMessage({ text: "", type: "" })}
          />
        )}

        <div className="notes">
          <div className="mb-6 flex justify-center">
            <select
              className="shadow appearance-none border rounded w-64 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          {filteredNotes.length === 0 ? (
            <div className="text-center flex flex-col items-center justify-center">
              <p className="text-3xl">No notes found.</p>
              <img src={logo} alt="Notes" className="w-64 h-64 mt-4" />
              <p className="text-xl mt-4">
                Click the icon below to create a note!
              </p>
            </div>
          ) : (
            <div className="flex flex-col justify-center">
              <div className="bg-neutral-600 p-4">
                <h2 className="text-lg font-semibold text-center md:text-3xl lg:text-5xl">
                  Notes
                </h2>
              </div>
              <div className="overflow-y-scroll max-h-[80vh] bg-neutral-600 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-gray-200">
                <ul className="grid grid-cols-1 lg:grid-cols-1 gap-6 justify-items-center align-items-start">
                  {filteredNotes.map((note) => (
                    <Note key={note.id} note={note} deleteNote={deleteNote} />
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          <i
            className="fa-solid fa-circle-plus mb-4 cursor-pointer text-orange-500 hover:text-orange-600 text-5xl md:text-6xl fixed right-4 bottom-4 z-10"
            onClick={() => setIsFormLoaded(!isFormLoaded)}
          ></i>

          {isFormLoaded && (
            <div className="fixed inset-0 bg-white bg-opacity-50 z-50 flex items-center justify-center">
              <form
                className="max-w-md w-full bg-neutral-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 relative z-20"
                onSubmit={createNote}
              >
                {/* Title */}
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Title:
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                {/* Body */}
                <div className="mb-4">
                  <label
                    htmlFor="body"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Body:
                  </label>
                  <textarea
                    id="body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                    required
                  />
                </div>

                {/* Category */}
                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Category:
                  </label>
                  <select
                    id="category"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="">Select Category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Save + Cancel Buttons */}
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Save Note
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFormLoaded(false)}
                    className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;
