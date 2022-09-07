import React from "react";
import TextField from "../TextField";
import "./Desktop7.css";

function Desktop7(props) {
  const {
    rspLogo1,
    line1,
    sfondo_Schermata_Passerelle1,
    sfondo_Schermata_Passerelle2,
    passerella,
    sfondo_Schermata_Plancette1,
    sfondo_Schermata_Plancette2,
    plancetta,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-7 inter-normal-black-24px screen">
        <div className="overlap-group">
          <div className="flex-row">
            <img className="rsp-logo-1" src={rspLogo1} />
            <TextField />
          </div>
          <img className="line-1" src={line1} />
        </div>
        <div className="sfondo_schermata_passerelle-container">
          <img className="sfondo_schermata_passerelle-1 animate-enter" src={sfondo_Schermata_Passerelle1} />
          <img className="sfondo_schermata_passerelle-2 animate-enter1" src={sfondo_Schermata_Passerelle2} />
        </div>
        <div className="passerella">{passerella}</div>
        <div className="sfondo_schermata_plancette-container">
          <img className="sfondo_schermata_plancette-1" src={sfondo_Schermata_Plancette1} />
          <img className="sfondo_schermata_plancette-2" src={sfondo_Schermata_Plancette2} />
        </div>
        <div className="plancetta">{plancetta}</div>
      </div>
    </div>
  );
}

export default Desktop7;
