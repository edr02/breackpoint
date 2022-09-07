import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Desktop7 from "./components/Desktop7";
import Desktop1 from "./components/Desktop1";
import Desktop2 from "./components/Desktop2";
import Desktop6 from "./components/Desktop6";
import Desktop3 from "./components/Desktop3";
import Desktop4 from "./components/Desktop4";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/desktop-7">
          <Desktop7 {...desktop7Data} />
        </Route>
        <Route path="/:path(|desktop-1)">
          <Desktop1 {...desktop1Data} />
        </Route>
        <Route path="/desktop-2-all-breakpoints">
          <Desktop2 {...desktop2Data} />
        </Route>
        <Route path="/desktop-6">
          <Desktop6 {...desktop6Data} />
        </Route>
        <Route path="/desktop-3">
          <Desktop3 {...desktop3Data} />
        </Route>
        <Route path="/desktop-4">
          <Desktop4 {...desktop4Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const desktop7Data = {
    rspLogo1: "/img/rsp-logo-1@2x.png",
    line1: "/img/line-1@1x.png",
    sfondo_Schermata_Passerelle1: "/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle2: "/img/sfondo-schermata-passerelle-1@2x.png",
    passerella: "Passerella",
    sfondo_Schermata_Plancette1: "/img/sfondo-schermata-plancette-1@2x.png",
    sfondo_Schermata_Plancette2: "/img/sfondo-schermata-plancette-1@2x.png",
    plancetta: "Plancetta",
};

const desktop1Data = {
    rspLogo1: "/img/rsp-logo-1@2x.png",
    line1: "/img/line-1-1@1x.png",
    sfondo_Schermata_Passerelle1: "/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle2: "/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle3: "/img/sfondo-schermata-passerelle-1@2x.png",
    title: "Passerella",
    sfondo_Schermata_Plancette1: "/img/sfondo-schermata-plancette-1@2x.png",
    plancetta: "Plancetta",
    sfondo_Schermata_Plancette3: "/img/sfondo-schermata-plancette-1@2x.png",
    sfondo_Schermata_Plancette2: "/img/sfondo-schermata-plancette-1@2x.png",
};

const textInput2Data = {
    className: "text-input-1",
};

const desktop2Data = {
    rspLogo1: "/img/rsp-logo-1@2x.png",
    line1: "/img/line-1-2@1x.png",
    sfondo_Schermata_Passerelle1: "/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle2: "/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle3: "/img/sfondo-schermata-passerelle-1@2x.png",
    passerella: "Passerella",
    sfondo_Schermata_Plancette1: "/img/sfondo-schermata-plancette-1@2x.png",
    plancetta: "Plancetta",
    sfondo_Schermata_Plancette3: "/img/sfondo-schermata-plancette-1@2x.png",
    sfondo_Schermata_Plancette2: "/img/sfondo-schermata-plancette-1@2x.png",
    textInputProps: textInput2Data,
};

const textInput3Data = {
    className: "text-input-2",
};

const desktop6Data = {
    rspLogo1: "/img/rsp-logo-1@2x.png",
    line1: "/img/line-1-3@1x.png",
    sfondo_Schermata_Passerelle1: "/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle2: "/img/sfondo-schermata-passerelle-1@2x.png",
    passerella: "Passerella",
    sfondo_Schermata_Plancette1: "/img/sfondo-schermata-plancette-1@2x.png",
    sfondo_Schermata_Plancette3: "/img/sfondo-schermata-plancette-1@2x.png",
    plancetta: "Plancetta",
    textInputProps: textInput3Data,
};

const textInput4Data = {
    className: "text-input-3",
};

const desktop3Data = {
    rspLogo1: "/img/rsp-logo-1@2x.png",
    line1: "/img/line-1-4@1x.png",
    sfondo_Schermata_Passerelle1: "/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle2: "/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle3: "/img/sfondo-schermata-passerelle-1@2x.png",
    passerella: "Passerella",
    sfondo_Schermata_Plancette1: "/img/sfondo-schermata-plancette-1@2x.png",
    plancetta: "Plancetta",
    sfondo_Schermata_Plancette3: "/img/sfondo-schermata-plancette-1@2x.png",
    sfondo_Schermata_Plancette2: "/img/sfondo-schermata-plancette-1@2x.png",
    textInputProps: textInput4Data,
};

const textInput5Data = {
    className: "text-input-4",
};

const desktop4Data = {
    rspLogo1: "/img/rsp-logo-1@2x.png",
    line1: "/img/line-1-5@1x.png",
    sfondo_Schermata_Passerelle1: "/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle2: "/img/sfondo-schermata-passerelle-1@2x.png",
    sfondo_Schermata_Passerelle3: "/img/sfondo-schermata-passerelle-1@2x.png",
    passerella: "Passerella",
    sfondo_Schermata_Plancette1: "/img/sfondo-schermata-plancette-1@2x.png",
    plancetta: "Plancetta",
    sfondo_Schermata_Plancette3: "/img/sfondo-schermata-plancette-1@2x.png",
    sfondo_Schermata_Plancette2: "/img/sfondo-schermata-plancette-1@2x.png",
    textInputProps: textInput5Data,
};

