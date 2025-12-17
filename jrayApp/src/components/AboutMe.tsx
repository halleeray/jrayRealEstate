import React from "react";
import "../assets/css/AboutMe.css";

interface Props {
  aboutme: string;
}

function AboutMe({ aboutme }: Props) {
  return (
    <div className="about-container">
      <img src="images/berkhath.png" id="headshotimg"></img>
      <div className="aboutInfo-container">
        About
        <div className="about-info">{aboutme}</div>
      </div>
    </div>
  );
}

export default AboutMe;
