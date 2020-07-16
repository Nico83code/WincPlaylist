import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Aboutus from "./pages/Aboutus";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/Aboutus" component={Aboutus} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
