import React from "react";
import TextField from "../TextField";
import "./Desktop7.css";
import rspLogo1 from '../../img/rsp-logo-1@2x.png'
import line1 from '../../img/line-1@1x.png'
import sfondo_Schermata_Passerelle1 from '../../img/sfondo-schermata-passerelle-1@2x.png'
import sfondo_Schermata_Passerelle2 from '../../img/sfondo-schermata-passerelle-1@2x.png'
import sfondo_Schermata_Plancette1 from '../../img/sfondo-schermata-plancette-1@2x.png'
import sfondo_Schermata_Plancette2 from '../../img/sfondo-schermata-plancette-1@2x.png'


function Desktop7(props) {
  const {
    passerella,
    plancetta,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-7 inter-normal-black-24px screen">
        <div className="overlap-group">
          <div className="flex-row">
            <img className="rsp-logo-1" src={rspLogo1} alt="alt" />
            <TextField />
          </div>
          <img className="line-1" src={line1} alt="alt" />
        </div>
        <div className="sfondo_schermata_passerelle-container">
          <img className="sfondo_schermata_passerelle-1 animate-enter" src={sfondo_Schermata_Passerelle1} alt="alt" />
          <img className="sfondo_schermata_passerelle-2 animate-enter1" src={sfondo_Schermata_Passerelle2} alt="alt" />
        </div>
        <div className="passerella">{passerella}</div>
        <div className="sfondo_schermata_plancette-container">
          <img className="sfondo_schermata_plancette-1" src={sfondo_Schermata_Plancette1} alt="alt" />
          <img className="sfondo_schermata_plancette-2" src={sfondo_Schermata_Plancette2} alt="alt" />
        </div>
        <div className="plancetta">{plancetta}</div>
      </div>
    </div>
  );
}

export default Desktop7;
