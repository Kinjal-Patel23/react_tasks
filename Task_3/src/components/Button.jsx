import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-20 h-10 border border-gray-300 mt-10 rounded"
    >
      {text}
    </button>
  );
};

export default Button;
