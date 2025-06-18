import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api";
import Loading from "./Loading";
import EditNote from "./EditNote";
import SuccessMessage from "../components/SuccessMessage";

const NoteDetail = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [editing, setEditing] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" }); // NEW
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await api.get(`/api/notes/${id}/`);
        setNote(response.data);
      } catch (error) {
        console.error(`Error fetching note with ID ${id}:`, error);
      }
    };

    fetchNote();
  }, [id]);

  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => setMessage({ text: "", type: "" }), 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleBack = () => {
    navigate("/notes");
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = (updatedNote) => {
    setNote(updatedNote);
    setEditing(false);
    setMessage({ text: "Note updated successfully!", type: "success" }); // SET message here
  };

  if (!note) {
    return <Loading />;
  }

  return (
    <div className="bg-neutral-600 min-h-screen text-white p-6 flex flex-col relative font-arimo">
      {message.text && (
        <SuccessMessage
          message={message.text}
          type={message.type}
          onClose={() => setMessage({ text: "", type: "" })}
        />
      )}

      <i
        onClick={handleBack}
        className="fas fa-arrow-left text-3xl text-orange-500 hover:text-orange-600 cursor-pointer"
      ></i>

      <button>
        <i
          className="fa-regular fa-pen-to-square bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded text-3xl absolute right-4 bottom-28 cursor-pointer"
          onClick={handleEdit}
        ></i>
      </button>

      {editing ? (
        <EditNote
          note={note}
          onSave={handleSave}
          setParentMessage={setMessage}
        />
      ) : (
        <>
          <h2 className="text-3xl font-bold mb-4 text-center">{note.title}</h2>
          <p className="text-lg whitespace-pre-line px-2 lg:px-28">
            {note.body}
          </p>
        </>
      )}
    </div>
  );
};

export default NoteDetail;
