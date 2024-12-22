import React, { useState, useEffect, useRef } from "react";

export const DropDown = () => {
const [isOpen, setIsOpen] = useState(false);
const dropdownRef = useRef(null);

const toggleDropdown = () => {
  setIsOpen((prev) => !prev);
};

const handleClickOutside = (event) => {
  if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
    setIsOpen(false);
  }
};

useEffect(() => {
  document.addEventListener("mousedown", handleClickOutside);
  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, []);

return (
  <div ref={dropdownRef} className="relative inline-block w-full">
    <button
      onClick={toggleDropdown}
      id="dropdownDefaultButton"
      className="text-black w-full bg-gray-50 hover:bg-gray-100 focus:ring-1 focus:outline-none border border-gray-300 focus:ring-gray-300 rounded-lg text-sm p-2 text-center inline-flex justify-between items-center"
      type="button"
    >
      Current User
      <svg
        className="w-2.5 h-2.5 ms-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>

    {isOpen && (
      <div
        id="dropdown"
        className="absolute z-10 w-full bg-white divide-y divide-gray-100 rounded-lg shadow mt-2"
      >
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Earnings
            </a>
          </li>
          <li>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    )}
  </div>
);
};
