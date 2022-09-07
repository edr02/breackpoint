import React, { useEffect } from "react";
import * as EmotionReact from "@emotion/react";
import * as EmotionStyled from "@emotion/styled";
import * as MuiIconsMaterial from "@mui/icons-material";
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
