import React from "react";
import classNames from "classnames";

export const Button = ({ children, className, onClick, type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames(
        "px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-200",
        className
      )}
    >
      {children}
    </button>
  );
};
