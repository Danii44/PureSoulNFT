import React from "react";
import signup from "../assets/signup.png";
import "../sass/timeline.css";

export default function Roadmap() {
  return (
    <div className="roadmap-section" id="roadmap">
      <h2 className="title1">ROADMAP</h2>
      <div className="roadmap-content">
        <div className="roadmap-image">
          <img src={signup} alt="roadmap" />
        </div>

        <div className="vertical-timeline">
          <div className="timeline-line" />
          {[
            {
              title: "Phase 1: Divine Ascendants Launch",
              points: [
                "Launch Divine Ascendants mint",
                "Reach 100 followers on X",
                "Grow Telegram to 300",
                "Marketing push",
                "Reach 100 NFTs sold",
              ],
            },
            {
              title: "Phase 2: Primordial Deities",
              points: [
                "Launch second faction",
                "Reach 500 followers",
                "Reach 1,000 Telegram members",
                "Enable marketplace listings",
                "Reach 1,000 total NFTs minted",
              ],
            },
            {
              title: "Phase 3: Fallen Titans & Physical Game",
              points: [
                "Launch third faction",
                "Release official Pure Soul lore",
                "Reach 2,500 mints",
                "Launch physical playing cards & rules",
                "Enable real-world gameplay & collection",
              ],
            },
          ].map((phase, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <h3>{phase.title}</h3>
                <ul>
                  {phase.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
