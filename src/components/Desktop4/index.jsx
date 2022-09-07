import React from "react";
import TextInput from "../TextInput";
import "./Desktop4.css";

import rspLogo1 from '../../img/rsp-logo-1@2x.png'
import line1 from '../../img/line-1-5@1x.png'
import sfondo_Schermata_Passerelle1 from '../../img/sfondo-schermata-passerelle-1@2x.png'
import sfondo_Schermata_Passerelle2 from '../../img/sfondo-schermata-passerelle-1@2x.png'
import sfondo_Schermata_Passerelle3 from '../../img/sfondo-schermata-passerelle-1@2x.png'
import sfondo_Schermata_Plancette1 from '../../img/sfondo-schermata-plancette-1@2x.png'
import sfondo_Schermata_Plancette2 from '../../img/sfondo-schermata-plancette-1@2x.png'
import sfondo_Schermata_Plancette3 from '../../img/sfondo-schermata-plancette-1@2x.png'

function Desktop4(props) {
  const {
  
    passerella,
    plancetta,
    textInputProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-4 screen">
        <div className="flex-col-3">
          <div className="overlap-group-5">
            <div className="flex-row-8">
              <img className="rsp-logo-1-5" src={rspLogo1} alt="alt" />
              <TextInput className={textInputProps.className} />
            </div>
            <img className="line-1-5" src={line1} alt="alt" />
          </div>
          <div className="sfondo_schermata_passerelle-container-5">
            <img className="sfondo_schermata_passerelle-1-5 animate-enter13" src={sfondo_Schermata_Passerelle1} alt="alt" />
            <img className="sfondo_schermata_passerelle-2-5 animate-enter14" src={sfondo_Schermata_Passerelle2} alt="alt" />
            <img className="sfondo_schermata_passerelle-3-3 animate-enter15" src={sfondo_Schermata_Passerelle3} alt="alt" />
          </div>
          <div className="passerella-4 inter-normal-black-24px">{passerella}</div>
        </div>
        <div className="flex-row-9">
          <div className="plancett-container-3">
            <img className="sfondo_schermata_plancette-1-5" src={sfondo_Schermata_Plancette1} alt="alt" />
            <div className="plancetta-5 inter-normal-black-24px">{plancetta}</div>
          </div>
          <img className="sfondo_schermata_plancette-3-4" src={sfondo_Schermata_Plancette3} alt="alt" />
          <img className="sfondo_schermata_plancette-2-4" src={sfondo_Schermata_Plancette2} alt="alt" />
        </div>
      </div>
    </div>
  );
}

export default Desktop4;
