import React from "react";
import TextInput from "../TextInput";
import "./Desktop6.css";

function Desktop6(props) {
  const {
    rspLogo1,
    line1,
    sfondo_Schermata_Passerelle1,
    sfondo_Schermata_Passerelle2,
    passerella,
    sfondo_Schermata_Plancette1,
    sfondo_Schermata_Plancette3,
    plancetta,
    textInputProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-6 inter-normal-black-24px screen">
        <div className="overlap-group-3">
          <div className="flex-row-5">
            <img className="rsp-logo-1-3" src={rspLogo1} />
            <TextInput className={textInputProps.className} />
          </div>
          <img className="line-1-3" src={line1} />
        </div>
        <div className="sfondo_schermata_passerelle-container-3">
          <img className="sfondo_schermata_passerelle-1-3 animate-enter8" src={sfondo_Schermata_Passerelle1} />
          <img className="sfondo_schermata_passerelle-2-3 animate-enter9" src={sfondo_Schermata_Passerelle2} />
        </div>
        <div className="passerella-2">{passerella}</div>
        <div className="sfondo_schermata_plancette-container-1">
          <img className="sfondo_schermata_plancette-1-3" src={sfondo_Schermata_Plancette1} />
          <img className="sfondo_schermata_plancette-3-2" src={sfondo_Schermata_Plancette3} />
        </div>
        <div className="plancetta-3">{plancetta}</div>
      </div>
    </div>
  );
}

export default Desktop6;
