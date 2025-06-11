import React, { useState, useEffect } from "react";

import Footer from "../components/Footer";
import Free from "../components/Free";
import Home from "../components/Home";
import Like from "../components/Like";
import Gallery from "../components/Gallery";
import Navbar from "../components/Navbar";
import Release from "../components/Release";
import ScrollToTop from "../components/ScrollToTop";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import scrollreveal from "scrollreveal";
import "../sass/index.scss";

function MainHome() {
  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .free,
        .clients,
        .super-rare,
        .releases,
        .like,
        .signup,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);
  window.setTimeout(() => {
    const home = document.getElementsByClassName("home");
    home[0].style.transform = "none";
    const nav = document.getElementsByTagName("nav");
    nav[0].style.transform = "none";
  }, 1500);
  return (
    <div data-theme={theme} className="app-container">
      <ScrollToTop />
      <Navbar changeTheme={changeTheme} currentTheme={theme} />
      <Home />
      <Gallery />
      <Like />
      {/* <Free />  */}
      <Roadmap />
      <Team />
      <Release />
      <Footer />
    </div>
  );
}

export default MainHome;
