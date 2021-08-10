import React from "react";
import logo from "../assets/logo.svg";
import "../styles/App.css";
import Greetings from "../components/Greetings";

const Hello = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Greetings />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default Hello;
