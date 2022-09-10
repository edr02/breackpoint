import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Desktop7 from "./components/Desktop7";
import Desktop1 from "./components/Desktop1";
import Desktop2 from "./components/Desktop2";
import Desktop6 from "./components/Desktop6";
import Desktop3 from "./components/Desktop3";
import Desktop4 from "./components/Desktop4";



import { useMediaQuery } from "react-responsive";
import Desktop001 from "./components/Desktop-breackpoint";
import Desktop002 from "./components/Desktop-breackpoint - 2";



function App() {
  return (
  <div>
    <Router>
     <div className="App">
        <Switch>
           <Route exact path="/" component={Desktop001}/>
           <Route path="/plancetta">
             <Desktop002/>
           </Route>
        </Switch>
     </div>
    </Router>
    </div>

  
  
  );
}

export default App;

