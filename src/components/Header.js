import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../api"; // Make sure to import your API service
import { ACCESS_TOKEN } from "../constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const isLoggedIn = !!localStorage.getItem(ACCESS_TOKEN);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      const fetchProfile = async () => {
        try {
          const response = await api.get("/api/profile/");
          setProfile(response.data);
        } catch (error) {
          console.error("Error fetching profile:", error);
        }
      };

      fetchProfile();
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    navigate("/signin");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-neutral-700 text-white shadow-md font-arimo">
      <nav className="h-16 md:h-20 lg:h-24 flex justify-between items-center px-4 md:px-8 lg:px-12 relative">
        <NavLink to="/">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold ">
            NoteNet<i class="fa-solid fa-hashtag mx-2 "></i>
          </h1>
        </NavLink>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          <i className={`fa ${isOpen ? "fa-times" : "fa-bars"} fa-lg`}></i>
        </button>
        <ul
          className={`md:flex md:items-center md:gap-4 z-50 md:static absolute top-16 left-0 w-full md:w-auto bg-neutral-700 md:bg-transparent font-sans ${
            isOpen ? "block border-y-2 border-y-slate-200" : "hidden"
          }`}
        >
          <li className="hover:font-bold p-2 md:p-0 lg:text-2xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              Home<i className="fa-solid fa-house ml-2"></i>
            </NavLink>
          </li>
          <li className="hover:font-bold p-2 md:p-0 lg:text-2xl">
            <NavLink
              to="/notes"
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
            >
              Notes<i className="fa-regular fa-note-sticky ml-2"></i>
            </NavLink>
          </li>
          {isLoggedIn ? (
            <>
              <li className="hover:font-bold p-2 md:p-0 lg:text-2xl">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : ""
                  }
                >
                  Profile<i className="fa-regular fa-user ml-2"></i>
                </NavLink>
              </li>
              <li className="hover:font-bold p-2 md:p-0 lg:text-2xl">
                <button onClick={handleLogout} className="cursor-pointer">
                  Logout
                  <i className="fa-solid fa-person-walking-arrow-right ml-2"></i>
                </button>
              </li>
              {profile && (
                <li className="hover:font-bold p-2 md:p-0">
                  <img
                    src={profile.image}
                    alt="Profile"
                    className="rounded-full h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 object-cover"
                  />
                </li>
              )}
            </>
          ) : (
            <li className="hover:font-bold p-2 md:p-0 lg:text-2xl">
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive ? "text-orange-500" : ""
                }
              >
                Login<i className="fa-regular fa-user ml-2"></i>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
