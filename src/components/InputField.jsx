import React from "react";
import TextField from "@material-ui/core/TextField";

const InputField = (props) => {
  return (
    <>
      <TextField
        error={props.error && props.touched ? true : false}
        name={props.name}
        type={props.type}
        label={props.title}
        variant="standard"
        style={props.style}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        helperText={ props.touched && props.error? props.helperText : ""}
        className={props.className}
      />
    </>
  );
};

export default InputField;
