import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl border p-4 shadow-md 
                  bg-transparent backdrop-blur-xl 
                  border-gray-700/50 ${className}`}
    >
      {children}
    </div>
  );
};

export const CardContent = ({ children, className = "" }) => {
  return <div className={`p-2 ${className}`}>{children}</div>;
};
