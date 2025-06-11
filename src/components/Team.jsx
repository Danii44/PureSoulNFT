import React from "react";
import Card from "./TeamCard";
import super1 from "../assets/super1.png";
import super2 from "../assets/super2.png";
import super3 from "../assets/super3.png";
import super4 from "../assets/super4.png";

export default function Team() {
  const data = [
    
    {
      image: super2,
      series: "",
      title: "Created by Pour Soul Labs",
      price: "",
      tag: "",
    },

  ];
  return (
    <div className="super-rare" id="team">
      <div className="title-container">
        <br/>
        <h2 className="title">Team</h2>
        {/* <p className="description">
          We have released four limited edition NFT's early which which can be
          bid on via <a href="#">OpenSea</a>.
        </p> */}
      </div>
      <div className="cards">
        {data.map(({ image, series, title, price, tag, time }, index) => (
          <Card
            image={image}
            series={series}
            title={title}
            price={price}
            tag={tag}
            time={time}
            key={index}
          />
        ))}
      </div>
      <br/><br/>
    </div>
  );
}
