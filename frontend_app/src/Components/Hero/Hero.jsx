import React from 'react';
import './Hero.css';
import { FaHandPointDown } from "react-icons/fa";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_img.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>
          New Arrivals <FaHandPointDown size={30} color="black" style={{ opacity: 0.8 }} />
        </h2>
        <p>New Collections</p>
        <p>For Everyone</p>
        <div className="hero-lates-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
