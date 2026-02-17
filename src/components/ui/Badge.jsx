import React from "react";

export const Badge = ({ children, className = "" }) => {
  return (
    <span
      className={`inline-block bg-red-100 text-red-700 text-xs font-semibold px-2 py-1 rounded-full ${className}`}
    >
      {children}
    </span>
  );
};
