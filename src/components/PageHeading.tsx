import React from "react";
import { Typography } from "../styles/material-ui";

export default function PageHeading({ headingName }) {
  const headingStyle = {
    height: "100px",
    backgroundColor: "white",
    padding: "20px 0 0 7.4vw",
  };

  return (
    <div style={headingStyle}>
      <Typography variant="h1">{headingName}</Typography>
    </div>
  );
}
