import React from "react";
import TextInput from "../TextInput";
import "./Desktop1.css";

function Desktop1(props) {
  const {
    rspLogo1,
    line1,
    sfondo_Schermata_Passerelle1,
    sfondo_Schermata_Passerelle2,
    sfondo_Schermata_Passerelle3,
    title,
    sfondo_Schermata_Plancette1,
    plancetta,
    sfondo_Schermata_Plancette3,
    sfondo_Schermata_Plancette2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-1 screen">
        <div className="flex-col">
          <div className="overlap-group-1">
            <div className="flex-row-1">
              <img className="rsp-logo-1-1" src={rspLogo1} alt="alt" />
              <TextInput />
            </div>
            <img className="line-1-1" src={line1} alt="alt"/>
          </div>
          <div className="sfondo_schermata_passerelle-container-1">
            <img className="sfondo_schermata_passerelle-1-1 animate-enter2" src={sfondo_Schermata_Passerelle1} alt="alt"/>
            <img className="sfondo_schermata_passerelle-2-1 animate-enter3" src={sfondo_Schermata_Passerelle2} alt="alt"/>
            <img className="sfondo_schermata_passerelle-3 animate-enter4" src={sfondo_Schermata_Passerelle3} alt="alt"/>
          </div>
          <h1 className="title inter-normal-black-36px">{title}</h1>
        </div>
        <div className="flex-row-2">
          <div className="plancett-container">
            <img className="sfondo_schermata_plancette-1-1" src={sfondo_Schermata_Plancette1} alt="alt"/>
            <div className="plancetta-1 inter-normal-black-36px">{plancetta}</div>
          </div>
          <img className="sfondo_schermata_plancette-3" src={sfondo_Schermata_Plancette3} alt="alt"/>
          <img className="sfondo_schermata_plancette-2-1" src={sfondo_Schermata_Plancette2} alt="alt"/>
        </div>
      </div>
    </div>
  );
}

export default Desktop1;
