import React from "react";

const Button = ({ btnName, onClick, type, disabled }) => {
  return (
    <>
      <button
        type={type}
        className="btn btn-primary"
        style={{ marginRight: 10 }}
        onClick={onClick}
        disabled={disabled}
      >
        {btnName}
      </button>
    </>
  );
};

export default Button;
