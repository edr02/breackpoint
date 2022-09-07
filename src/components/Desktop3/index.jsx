import React from "react";
import TextInput from "../TextInput";
import "./Desktop3.css";
import rspLogo1 from '../../img/rsp-logo-1@2x.png'
import line1 from '../../img/line-1-4@1x.png'
import sfondo_Schermata_Passerelle1 from '../../img/sfondo-schermata-passerelle-1@2x.png'
import sfondo_Schermata_Passerelle2 from '../../img/sfondo-schermata-passerelle-1@2x.png'
import sfondo_Schermata_Passerelle3 from '../../img/sfondo-schermata-passerelle-1@2x.png'
import sfondo_Schermata_Plancette1 from '../../img/sfondo-schermata-plancette-1@2x.png'
import sfondo_Schermata_Plancette2 from '../../img/sfondo-schermata-plancette-1@2x.png'
import sfondo_Schermata_Plancette3 from '../../img/sfondo-schermata-plancette-1@2x.png'

function Desktop3(props) {
  const {
  
    passerella,
    plancetta,
    textInputProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="desktop-3 screen">
        <div className="flex-col-2">
          <div className="overlap-group-4">
            <div className="flex-row-6">
              <img className="rsp-logo-1-4" src={rspLogo1} />
              <TextInput className={textInputProps.className} />
            </div>
            <img className="line-1-4" src={line1} />
          </div>
          <div className="sfondo_schermata_passerelle-container-4">
            <img className="sfondo_schermata_passerelle-1-4 animate-enter10" src={sfondo_Schermata_Passerelle1} />
            <img className="sfondo_schermata_passerelle-2-4 animate-enter11" src={sfondo_Schermata_Passerelle2} />
            <img className="sfondo_schermata_passerelle-3-2 animate-enter12" src={sfondo_Schermata_Passerelle3} />
          </div>
          <div className="passerella-3 inter-normal-black-24px">{passerella}</div>
        </div>
        <div className="flex-row-7">
          <div className="plancett-container-2">
            <img className="sfondo_schermata_plancette-1-4" src={sfondo_Schermata_Plancette1} />
            <div className="plancetta-4 inter-normal-black-24px">{plancetta}</div>
          </div>
          <img className="sfondo_schermata_plancette-3-3" src={sfondo_Schermata_Plancette3} />
          <img className="sfondo_schermata_plancette-2-3" src={sfondo_Schermata_Plancette2} />
        </div>
      </div>
    </div>
  );
}

export default Desktop3;
