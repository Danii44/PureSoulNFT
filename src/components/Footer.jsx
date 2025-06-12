import React from "react";
import logo from "../assets/logo.png";
import { BsTelegram,BsX } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import whitepaper from "../assets/Pure-Soul.pdf";

export default function Footer() {
  const links = [
    {
      title: "About",
      data: [
      { label: "About", href: "#about" },
      { label: "Whitepaper", href: whitepaper },
    ],
      
    },
    

    {
      title: "Social",
      data: [
      { label: "Telegram", href: "https://t.me/PureSoulUniverse" },
      { label: "X", href: "https://x.com/puresoultoken?s=21" },
    ],
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
  {links.map(({ title, data }) => (
    <div className="link" key={title}>
      <h4>{title}</h4>
      <ul>
        {data.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: title === "Social" ? "gold" : "inherit" }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>

        
      </div>
      <div className="lower">
        <span>&copy; Copyright 2025 Pour Soul Labs</span>
        {/* <span>Launching August 2022</span> */}
      </div>
    </footer>
  );
}
