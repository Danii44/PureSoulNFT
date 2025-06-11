import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";


export default function Release() {
  return (
    <div className="releases" id="faq">
      <div className="release orange">
        <div className="content">
  <h2 className="title">FAQS</h2>
  <p className="description">
    <strong>What is Pure Soul NFT?</strong><br />
    A collectible NFT project divided into three divine factions. Each faction contains its own characters and rarity structure.
  </p>
  <p className="description">
    <strong>How do I mint a Divine Ascendant?</strong><br />
    Click “Mint Now,” connect your wallet, and submit 0.1 BNB to mint a randomized NFT.
  </p>
  <p className="description">
    <strong> Is this a game?</strong><br />
   Not yet. However, physical cards and official rules will be introduced in Phase 3 for real-world gameplay.
  </p>
  <p className="description">
    <strong>Are the other factions available?</strong><br />
    Not yet — only Divine Ascendants are live. Primordial Deities and Fallen Titans will be released in future phases.
  </p>
  <p className="description">
    <strong>Where can I sell or trade my NFT?</strong><br />
    Once revealed, NFTs can be traded on compatible marketplaces such as TofuNFT and Element.
  </p>
  <p className="description">
    <strong>Why are there 16,667 Divine Ascendant NFTs if there aren’t that many characters?</strong><br />
    Because Pure Soul works like a trading card game. Each NFT you mint has a unique token ID, but characters can appear multiple times. There are only 50 unique Divine Ascendants characters in this drop, spread across the full supply of 16,667 NFTs. Think of it like opening card packs — you may pull the same character as someone else, but your NFT (and token ID) is one-of-a-kind.
  </p>
  <p className="description">
    <strong>Are rarities random when I mint?</strong><br />
    No — rarities are pre-assigned based on token ID ranges:
* #1–1667 = Legendary
* #1668–5000 = Epic
* #5001–10000 = Rare
* #10001–16667 = Common

  </p>
</div>

        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
    </div>
  );
}
