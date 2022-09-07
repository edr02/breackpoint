import React from "react";
import * as MuiMaterial from "@mui/material";
import "./TextField.css";

function TextField() {
  return (
    <div className="text-field">
      <MuiMaterial.TextField
        size="medium"
        label="Topic"
        disabled={false}
        variant="filled"
        color="secondary"
        sx={{ width: "250px" }}
      />
    </div>
  );
}

export default TextField;
