import React from "react";
export default function Card({ image, series, title, price, tag, time }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="super1" />
      </div>
      <div className="card-content">
        <div className="card-details">
          <h4 className="card-title">{title}</h4>
          <div className="card-price">
            <h4>{price}</h4>
          </div>
        </div>
        <div className="card-heading">
          <span className="card-series">{series}</span>
        </div>
        <div className="card-sub-details2">
          <span>{tag}</span>
        </div>
        <div className="card-details">
          <span>{time}</span>
        </div>
      </div>
    </div>
  );
}
