import React from "react";

const Alert = (props) => {
  return (
    <>
      <div style={props.style} className="alert alert-success alert-dismissible fade show" role="alert">
	  <strong>{props.message}</strong>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;