import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import api from "../api";
import { ACCESS_TOKEN } from "../constants";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const isLoggedIn = !!localStorage.getItem(ACCESS_TOKEN);
  const navigate = useNavigate();
  const navRef = useRef(null);

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

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [isOpen]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    navigate("/signin");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-neutral-700 text-white shadow-md font-arimo relative w-full z-50">
      <nav
        ref={navRef}
        className="h-16 md:h-20 lg:h-24 flex justify-between items-center px-4 md:px-8 lg:px-12 relative"
      >
        <NavLink to="/" onClick={() => setIsOpen(false)}>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
            NoteNet<i className="fa-solid fa-hashtag mx-2"></i>
          </h1>
        </NavLink>
        <button className="text-white md:hidden" onClick={toggleMenu}>
          <i className={`fa ${isOpen ? "fa-times" : "fa-bars"} fa-lg`}></i>
        </button>
        <ul
          className={`md:flex md:items-center md:gap-4 z-50 md:static absolute top-full left-0 w-full md:w-auto bg-neutral-700 md:bg-transparent font-sans transition-all duration-300 overflow-hidden
            ${
              isOpen ? "max-h-96" : "max-h-0"
            } md:max-h-none md:overflow-visible`}
        >
          <li className="hover:font-bold p-2 md:p-0 lg:text-2xl">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
              onClick={() => setIsOpen(false)}
            >
              Home<i className="fa-solid fa-house ml-2"></i>
            </NavLink>
          </li>
          <li className="hover:font-bold p-2 md:p-0 lg:text-2xl">
            <NavLink
              to="/notes"
              className={({ isActive }) => (isActive ? "text-orange-500" : "")}
              onClick={() => setIsOpen(false)}
            >
              Notes<i className="fa-regular fa-note-sticky ml-2"></i>
            </NavLink>
          </li>
          {isLoggedIn ? (
            <>
              <li className="hover:font-bold p-2 md:p-0 lg:text-2xl">
                <NavLink
                  to="/categories"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : ""
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Categories<i className="fa-solid fa-folder-open ml-2"></i>
                </NavLink>
              </li>
              <li className="hover:font-bold p-2 md:p-0 lg:text-2xl">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive ? "text-orange-500" : ""
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Profile<i className="fa-regular fa-user ml-2"></i>
                </NavLink>
              </li>
              <li className="hover:font-bold p-2 md:p-0 lg:text-2xl">
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="cursor-pointer"
                >
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
                onClick={() => setIsOpen(false)}
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
