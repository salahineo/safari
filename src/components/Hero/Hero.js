import React from "react";
import {Button} from "../Button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero" style={{
      background: `url('/images/img-home.jpg') center center/cover no-repeat`
    }}>
      <div className="hero-content">
        <h1>ADVENTURES AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className="hero-btns">
          <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
          <Button className="btns"
                  buttonStyle="btn--primary"
                  buttonSize="btn--large">WATCH TRAILER <i className="far fa-play-circle" /></Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
