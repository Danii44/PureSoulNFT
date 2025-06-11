import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";
import eth3 from "../assets/eth3.png";
import eth4 from "../assets/eth4.png";

export default function Like() {
  return (
    
    <div className="like">
      <h2 className="title1">RARITY</h2>
      <br/><br/>
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1" />
          </div>
          <h2 className="title">Legendary</h2>
          <p className="description">1,667 NFTs (10%)</p>
          
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" />
          </div>
          <h2 className="title">Epic</h2>
          <p className="description">3,333 NFTs (20%)</p>
          
        </div>
        <div className="content">
          <div className="image">
            <img src={eth3} alt="eth2" />
          </div>
          <h2 className="title">Rare</h2>
          <p className="description">5,000 NFTs (30%)</p>
         
        </div>
        <div className="content">
          <div className="image">
            <img src={eth4} alt="eth2" />
          </div>
          <h2 className="title">Common</h2>
          <p className="description">6,667 NFTs (40%)</p>
          
        </div>
      </div>
    </div>
  );
}
