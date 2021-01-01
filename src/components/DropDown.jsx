import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

export default function SimpleSelect(props) {
  return (
    <TextField
      select
      error={props.error && props.touched ? true : false}
      label={props.label}
      variant="standard"
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      helperText={ props.touched && props.error ? props.helperText : ""}
      onBlur={props.onBlur}
      style={props.style}
      className={props.className}
    >
      {props.data.map((element) => (
        <MenuItem key={element} value={element}>
          {element}
        </MenuItem>
      ))}
    </TextField>
  );
}
