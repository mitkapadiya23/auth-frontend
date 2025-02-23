import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [userDetails, setUserDetails] = useState<{
    userName: string;
    email: string;
    contact: string;
    category: string;
  } | null>(null);

  const navigate = useNavigate();

  const fetchUserDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axiosInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setUserDetails(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      alert("Failed to fetch user details. Please try again.");
    }
  };

  useEffect(() => {
    if (userDropdownOpen && !userDetails) {
      fetchUserDetails();
    }
  }, [userDetails, userDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUserDropdownOpen(false);
    setUserDetails(null);
    navigate("/login");
  };

  return (
    <header className="bg-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <img
            src="/assets/images/logo.png"
            alt="Logo"
            className="hidden md:block w-24 h-8"
          />
          <img
            src="/assets/images/mobile_logo.png"
            alt="Mobile Logo"
            className="block md:hidden w-16 h-8"
          />
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-black font-medium hover:text-gray-700">
              Buy
            </a>
            <a href="#" className="text-black font-medium hover:text-gray-700">
              Curate
            </a>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative w-[300px]">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
              <img
                src="/assets/images/search.png"
                alt="Search Icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>
            <a href="#" className="text-black font-medium hover:text-gray-700">
              Contact Us
            </a>
          </div>

          <div className="relative">
            <button
              className="focus:outline-none"
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            >
              <img
                src="/assets/images/person_outline_24px.png"
                alt="Profile"
                className="w-6 h-6"
              />
            </button>
            {userDropdownOpen && (
              <div className="z-[20] absolute text-left right-0 mt-10 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                {userDetails ? (
                  <div className="p-4 space-y-2">
                    <p className="text-sm font-medium">
                      Name: {userDetails.userName}
                    </p>
                    <p className="text-xs text-gray-600">
                      Email: {userDetails.email}
                    </p>
                    <p className="text-xs text-gray-600">
                      Contact: {userDetails.contact}
                    </p>
                    <p className="text-xs text-gray-600">
                      Category: {userDetails.category}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="w-full mt-2 bg-pink-500 hover:bg-pink-600 text-white text-xs font-medium py-1 rounded"
                    >
                      Log out
                    </button>
                  </div>
                ) : (
                  <p className="p-4 text-sm text-gray-600">Loading...</p>
                )}
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3 md:hidden">
            <button className="focus:outline-none">
              <img
                src="/assets/images/image_search_24px.png"
                alt="Search"
                className="w-6 h-6"
              />
            </button>
            <button
              className="focus:outline-none"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6 text-black"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="mt-4 md:hidden">
          <nav className="flex flex-col space-y-2">
            <a href="#" className="text-black font-medium hover:text-gray-700">
              Buy
            </a>
            <a href="#" className="text-black font-medium hover:text-gray-700">
              Curate
            </a>
            <a href="#" className="text-black font-medium hover:text-gray-700">
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
