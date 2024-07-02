import React, { useState } from "react";

const EditUsernameModal = ({ profile, onClose, onSave }) => {
  const [username, setUsername] = useState(profile.name);

  const handleSave = () => {
    onSave(username);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-arimo">
      <div className="bg-neutral-600 p-6 rounded shadow-md w-96">
        <h2 className="text-xl mb-4 text-white">Edit Username</h2>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="bg-gray-500 hover:bg-gray-700 text-white px-4 py-2 rounded mr-2 focus:outline-none focus:shadow-outline"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded focus:outline-none focus:shadow-outline"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUsernameModal;
