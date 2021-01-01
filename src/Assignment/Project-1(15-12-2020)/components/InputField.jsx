import React from "react";
import TextField from "@material-ui/core/TextField";

const InputField = (props) => {
  return (
    <>
      <TextField
        name={props.name}
        type={props.type}
        label={props.title}
        variant="standard"
        style={props.style}
        value={props.value}
        onChange={props.onChange}
        className={props.className}
      />
    </>
  );
};

export default InputField;
