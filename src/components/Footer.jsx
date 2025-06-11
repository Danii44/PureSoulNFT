import React from "react";
import logo from "../assets/logo.png";
import { BsTelegram,BsX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
export default function Footer() {
  const links = [
    {
      title: "About",
      data: ["About", "Terms", "Legal"],
    },
    

    {
      title: "Social",
      data: [<a href="https://t.me/PureSoulUniverse" target="_blank" style={{ color: "gold" }}> Telegram </a>, <a href="https://x.com/puresoultoken?s=21" target="_blank" style={{ color: "gold" }}> X </a>],
    },
  ];
  const socialLink = [
    
    <a href="https://t.me/PureSoulUniverse" target="_blank"  style={{ color: 'gold' }}><BsTelegram size={24}/></a>,
    <a href="https://x.com/puresoultoken?s=21" target="_blank"  style={{ color: 'gold' }}><BsX size={24}/></a>,
    
    
  ];
  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Exclusive NFT Collection</p>
          <ul>
            {socialLink.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({ title, data }, index) => {
            return (
              <div className="link" key={index}>
                <h4>{title}</h4>
                <ul>
                  {data.map((link, index2) => (
                    <li key={index2}>{link}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2025 Pour Soul Labs</span>
        {/* <span>Launching August 2022</span> */}
      </div>
    </footer>
  );
}
