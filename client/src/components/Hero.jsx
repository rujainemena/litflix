import React from "react";
import "../styles/index.css";
import logo from '../styles/assets/LitFlix_Presentation/10.png';
import { Link } from "react-router-dom";


function Hero(){
  return (
      <div id="hero">
      <h2 as={Link} to="/">The Book Is Better</h2>
        <img id="logo"
          src={logo} 
          alt="Logo"
        />
      </div>
  );
};


export default Hero;
