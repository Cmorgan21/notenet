import React, { useState } from "react";

const EditPasswordModal = ({ onClose, onSave }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSave = () => {
    if (password === confirmPassword) {
      onSave(password);
      onClose();
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 font-arimo">
      <div className="bg-neutral-600 p-6 rounded shadow-md w-96">
        <h2 className="text-xl mb-4 text-white">Edit Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="New Password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
        />
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
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

export default EditPasswordModal;
