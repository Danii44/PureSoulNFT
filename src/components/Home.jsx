import React from "react";
import home from "../assets/home.png";
import home1 from "../assets/home1.png";
import home2 from "../assets/home2.png";

export default function Home() {
  return (
    <div className="home" id="home">
      <div className="container">
        <div className="content">
          
          <p className="sub-title">BECOME A <br/> DIVINE ASCENDANT</p>
          {/* <h1 className="title">An NFT like no other</h1> */}
          <p className="description">
          Pure Soul NFT is a mythic digital collectible universe featuring legendary characters, sacred relics, and divine
energies. Rooted in three celestial factions, the project bridges blockchain, high fantasy, and collectible
culture. The first phase begins with Divine Ascendants - radiant guardians drawn from prophecy, scripture,
and myth
          </p>
          <a href="/mint" target="_blank" >
          <button>Mint</button>
          </a>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={home} alt="home image" />
            {/* <img src={home1} alt="home image" />
            <img src={home2} alt="home image" /> */}
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
