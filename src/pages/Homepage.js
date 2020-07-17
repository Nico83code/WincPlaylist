import React from "react";
import "../App.css";
import InputFields from "../components/InputFields";
import Container from "../components/Container";

function Homepage() {
  return (
    <div >
      <h1 className="header">Winc Lil'Playlist</h1>
      <InputFields />
      <Container />
    </div>
  );
}

export default Homepage;
