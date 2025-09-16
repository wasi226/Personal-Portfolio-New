import React from "react";

export const Textarea = ({ placeholder, value, onChange, className = "" }) => {
  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`border rounded-lg p-2 w-full min-h-[100px] resize-none ${className}`}
    />
  );
};
