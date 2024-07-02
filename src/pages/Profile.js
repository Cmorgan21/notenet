import React, { useState, useEffect } from "react";
import api from "../api";
import Loading from "../components/Loading";
import EditUsernameModal from "../components/EditUsernameModal";
import EditPasswordModal from "../components/EditPasswordModal";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get("/api/profile/");
        console.log(response.data);
        setProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleUsernameSave = async (username) => {
    try {
      const response = await api.patch(`/api/profile/`, { name: username });
      setProfile(response.data);
      console.log("Username updated:", response.data);
    } catch (error) {
      console.error("Error updating username:", error);
    }
  };

  const handlePasswordSave = async (password) => {
    try {
      const response = await api.patch(`/api/profile/change-password/`, {
        password: password,
      });
      console.log("Password updated successfully", response.data);
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      const response = await api.patch(`/api/profile/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProfile(response.data);
      console.log("Image updated:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="text-center flex flex-col items-center bg-neutral-600 text-white min-h-screen pt-4 relative md:justify-center">
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="text-white hover:text-orange-500 focus:outline-none"
        >
          <i className="fa-solid fa-ellipsis-vertical text-2xl md:text-4xl"></i>
        </button>
        {showOptions && (
          <div className="absolute right-0 mt-2 w-48 bg-neutral-600 rounded-lg shadow-lg z-30">
            <button
              onClick={() => setShowUsernameModal(true)}
              className="block w-full text-left px-4 py-2 text-white hover:bg-orange-500"
            >
              Edit Username
            </button>
            <button
              onClick={() => setShowPasswordModal(true)}
              className="block w-full text-left px-4 py-2 text-white hover:bg-orange-500"
            >
              Change Password
            </button>
          </div>
        )}
      </div>
      <div className="border-2 border-neutral-400 p-6  md:p-20 shadow-lg rounded-lg mt-14">
        <div className="relative flex items-center justify-center">
          <img
            src={profile.image}
            alt="Profile"
            className="rounded-full h-40 w-40 md:h-60 md:w-60 object-cover bg-orange-500 transform transition-transform hover:scale-105"
          />
          <label
            htmlFor="file-input"
            className="absolute bottom-0 right-0 bg-orange-500 rounded-full p-3 md:p-4 cursor-pointer hover:bg-orange-600"
          >
            <i className="fa-solid fa-arrow-up-from-bracket text-white md:text-4xl"></i>
          </label>
          <input
            id="file-input"
            type="file"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <h2 className="text-xl md:text-2xl mt-4">Your Profile</h2>
        <p className="mt-2">
          <strong>Name:</strong> {profile.name}
        </p>
        <p className="mt-2">
          <strong>Email:</strong> {profile.email}
        </p>
        <p className="mt-2">
          <strong>Created at:</strong>{" "}
          {new Date(profile.created_at).toLocaleDateString()}
        </p>
        <form onSubmit={handleSubmit} className="mt-4">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
          >
            Upload
          </button>
        </form>
      </div>

      {showUsernameModal && (
        <EditUsernameModal
          profile={profile}
          onClose={() => setShowUsernameModal(false)}
          onSave={handleUsernameSave}
        />
      )}
      {showPasswordModal && (
        <EditPasswordModal
          onClose={() => setShowPasswordModal(false)}
          onSave={handlePasswordSave}
        />
      )}
    </div>
  );
};

export default Profile;
