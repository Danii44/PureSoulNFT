import React from "react";
import "../sass/sections/gallery.css";
import gallery1 from "../assets/gallery1.jpeg";
import gallery2 from "../assets/gallery2.png";
import gallery3 from "../assets/gallery3.jpeg";
import gallery4 from "../assets/gallery4.png";

export default function Gallery() {
  return (
    
    <div className="like">
      <h1 className="title1">Pure Soul Overview</h1>
      <br></br>
      <p className="description">Pure Soul is a decentralized NFT trading card ecosystem that blends spiritual mythology, ancient lore, and immersive gameplay. Built on the Binance Smart Chain, the project introduces a universe divided into three distinct factions — Divine Ascendants, Primordial Deities, and Fallen Titans — each representing a unique philosophy, energy, and lineage of characters.

Every NFT minted within the Pure Soul universe is more than just a collectible — it’s a soul with defined traits, a role in its faction’s mythology, and a function within the upcoming physical card game. Each character’s metadata includes rarity, power, and wisdom, forming the foundation for competitive and strategic gameplay.

While the full cross-faction storyline is still in development, each faction already holds deep thematic structure and symbolic meaning. Many characters are inspired by real-world mythologies, spiritual figures, and ancient systems of belief, while others are original creations designed to complement and expand the lore organically.

The long-term vision of Pure Soul is to evolve into a rich, player-driven universe where NFT holders can engage in faction wars, lore-building, and both digital and physical gameplay. The project emphasizes worldbuilding, narrative depth, and long-term value for collectors, players, and investors alike.
</p>
<br></br><br></br><br></br><br></br>
<h1 className="title1">Gallery</h1>
      <div className="roadmap-gallery">
  
  <div className="gallery-grid">
    <img src={gallery1} alt="Gallery 1" />
    <img src={gallery2} alt="Gallery 2" />
    <img src={gallery3} alt="Gallery 3" />
    <img src={gallery4} alt="Gallery 4" />
  </div>
</div>

    </div>
  );
}
