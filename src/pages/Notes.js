import React, { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import logo from "../assets/notenetlogo.png";
import SuccessMessage from "../components/SuccessMessage";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [body, setBody] = useState("");
  const [title, setTitle] = useState("");
  const [isFormLoaded, setIsFormLoaded] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    try {
      const response = await api.get("/api/notes/");
      if (response === null) {
        setNotes([]);
        return "No notes found";
      }
      setNotes(response.data.results);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const deleteNote = async (id) => {
    try {
      console.log(`Attempting to delete note with id: ${id}`);
      const response = await api.delete(`/api/delete-note/${id}/`);
      if (response.status === 204) {
        setMessage({ text: "Note deleted!", type: "success" });
        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
        getNotes();
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
        { title, body },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 201) {
        setMessage({ text: "Note created successfully!", type: "success" });
        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
        setTitle(""); // Reset title field
        setBody(""); // Reset body field
        setIsFormLoaded(false); // Close the form
        getNotes();
      } else {
        setMessage({ text: "Failed to create note.", type: "error" });
        setTimeout(() => setMessage({ text: "", type: "" }), 3000);
      }
    } catch (err) {
      setMessage({ text: "Error creating note.", type: "error" });
      setTimeout(() => setMessage({ text: "", type: "" }), 3000);
    }
  };

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
          {notes.length === 0 ? (
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
                  {notes.map((note) => (
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
                    name="title"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="content"
                    className="block text-white text-sm font-bold mb-2"
                  >
                    Content:
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                  ></textarea>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    onClick={() => setIsFormLoaded(false)}
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
