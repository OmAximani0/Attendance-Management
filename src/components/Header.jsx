import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Header(props) {
  return (
    <Container maxWidth="sm">
      <Typography component="div" style={props.style}>
        {props.title}
      </Typography>
    </Container>
  );
}
