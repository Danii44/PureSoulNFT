import React from "react";
import Card from "./Card";
import icon from "../assets/icon.png";
import super1 from "../assets/super1.png";
import release2 from "../assets/release2.png";
import Trait from "../assets/Traits.png";

export default function Free() {
  return (
    <div className="free" id="about">
      <div className="container">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Visual Demonstration of our NFT card</h2>
          <div className="image2">
            <img src={Trait} alt="traits" />
          </div>
          <p className="description">
         <b> If you hold this NFT your utilities would be:</b><br/>
          Gold Background: 2xTickets for *Ball Type* events in total amount of $500<br/>
          Ball Type: Basketball<br/>
          Ball Color: Charity<br/>
          Basketball Sticker: Access to Basketball Fantasy League<br/>
          E Sports Sticker:  access to Basketball tournaments<br/>
          Round IV: 2222 holders get good Odds (approximately x2, x5 odds each day)<br/>
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="NFTips"
            title="Basket Ball"
            price="??"
            tag="1098"
            
          />
        </div>
        <div className="card2">
          <Card
            image={release2}
            series="NFTips"
            title="Soccer"
            price="??"
            tag="1094"
            
          />
        </div>
      </div>
    </div>
  );
}
