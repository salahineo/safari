import React from "react";
import {Button} from "../Button/Button";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <video src="/videos/video-1.mp4" autoPlay muted />
      <h1>ADVENTURES AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large">GET STARTED</Button>
        <Button className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large">WATCH TRAILER <i className="far fa-play-circle" /></Button>
      </div>
    </div>
  );
};

export default Hero;
