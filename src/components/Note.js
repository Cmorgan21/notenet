// components/Note.js
import React from "react";
import { Link } from "react-router-dom";

const Note = ({ note, deleteNote }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.toLocaleDateString()}`;
  };

  return (
    <li className="w-full bg-neutral-600 text-white shadow-lg border-neutral-500 border-2 rounded-lg p-4 sm:p-6 lg:p-28 font-arimo">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-2xl sm:text-3xl lg:text-5xl">{note.title}</h3>

          {note.category && (
            <span className="inline-block mt-2 mb-4 text-xs px-2 py-1 bg-orange-500 text-white rounded-full">
              {note.category.name}
            </span>
          )}

          <p className="my-2 text-sm sm:text-base lg:text-3xl">
            {note.body ? `${note.body.substring(0, 30)}...` : ""}
          </p>
          <p className="my-2 text-sm sm:text-base lg:text-xl">
            Created on: {formatDate(note.created_on)}
          </p>
        </div>

        <div className="flex items-center mt-4">
          <Link
            to={`/notes/${note.id}`}
            className="text-orange-600 hover:underline mr-2"
          >
            <i className="fa-solid fa-arrow-right-from-bracket text-orange-500 hover:text-orange-600 text-xl sm:text-3xl lg:text-5xl"></i>
          </Link>
          <button
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-red-300 inline-block mt-2 ml-2 lg:text-2xl"
            onClick={() => deleteNote(note.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </li>
  );
};

export default Note;
