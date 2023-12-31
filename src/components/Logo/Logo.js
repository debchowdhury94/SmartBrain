import React from "react";
import Tilt from "react-parallax-tilt";
import './Logo.css';
import brain from './brain.png';

function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2">
        <div className="Tilt-inner pa3">
          <img src={brain} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
