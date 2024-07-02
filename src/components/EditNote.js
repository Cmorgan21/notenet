import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const EditNote = ({ note, onSave }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  const handleSave = async () => {
    try {
      const response = await api.put(`/api/notes/update/${note.id}/`, {
        title,
        body,
      });
      onSave(response.data);
    } catch (error) {
      console.error(`Error updating note with ID ${note.id}:`, error);
    }
  };

  const handleBack = () => {
    navigate("/notes");
  };

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 z-50 flex items-center justify-center font-arimo">
      <div className="max-w-md w-full bg-neutral-600 shadow-md rounded px-8 pt-6 pb-8 mb-4 relative z-20">
        <div className="flex justify-between mb-4">
          <button
            className="text-white text-3xl ml-4 mt-4 hover:text-gray-300 focus:outline-none"
            onClick={handleBack}
          >
            <i className="fas fa-arrow-left"></i>{" "}
            {/* Assuming you have FontAwesome icons */}
          </button>
          <h2 className="text-3xl font-bold mb-4 text-center">Edit Note</h2>
        </div>
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
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
