import React from "react";
import TextInput from "../TextInput";
import "./Desktop2.css";

function Desktop2(props) {
  const {
    rspLogo1,
    line1,
    sfondo_Schermata_Passerelle1,
    sfondo_Schermata_Passerelle2,
    sfondo_Schermata_Passerelle3,
    passerella,
    sfondo_Schermata_Plancette1,
    plancetta,
    sfondo_Schermata_Plancette3,
    sfondo_Schermata_Plancette2,
    textInputProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-2-all-breakpoints screen">
        <div className="flex-col-1">
          <div className="overlap-group-2">
            <div className="flex-row-3">
              <img className="rsp-logo-1-2" src={rspLogo1} />
              <TextInput className={textInputProps.className} />
            </div>
            <img className="line-1-2" src={line1} />
          </div>
          <div className="sfondo_schermata_passerelle-container-2">
            <img className="sfondo_schermata_passerelle-1-2 animate-enter5" src={sfondo_Schermata_Passerelle1} />
            <img className="sfondo_schermata_passerelle-2-2 animate-enter6" src={sfondo_Schermata_Passerelle2} />
            <img className="sfondo_schermata_passerelle-3-1 animate-enter7" src={sfondo_Schermata_Passerelle3} />
          </div>
          <div className="passerella-1 inter-normal-black-24px">{passerella}</div>
        </div>
        <div className="flex-row-4">
          <div className="plancett-container-1">
            <img className="sfondo_schermata_plancette-1-2" src={sfondo_Schermata_Plancette1} />
            <div className="plancetta-2 inter-normal-black-24px">{plancetta}</div>
          </div>
          <img className="sfondo_schermata_plancette-3-1" src={sfondo_Schermata_Plancette3} />
          <img className="sfondo_schermata_plancette-2-2" src={sfondo_Schermata_Plancette2} />
        </div>
      </div>
    </div>
  );
}

export default Desktop2;
