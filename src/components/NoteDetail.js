import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../api";
import Loading from "./Loading";
import EditNote from "./EditNote";

const NoteDetail = () => {
  const { id } = useParams();
  const [note, setNote] = useState(null);
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/notes");
  };

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

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = (updatedNote) => {
    setNote(updatedNote);
    setEditing(false);
  };

  if (!note) {
    return <Loading />;
  }

  return (
    <div className="bg-neutral-600 min-h-screen text-white p-6 flex flex-col relative font-arimo">
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
        <EditNote note={note} onSave={handleSave} />
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
