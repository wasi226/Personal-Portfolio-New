import React from "react";

export const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`control-button px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition ${className}`}
    >
      {children}
    </button>
  );
};
