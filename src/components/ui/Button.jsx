import React from "react";

export const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition ${className}`}
    >
      {children}
    </button>
  );
};
