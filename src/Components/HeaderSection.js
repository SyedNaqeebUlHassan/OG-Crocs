import React from "react";
import { Card } from "./Card";

export const HeaderSection = () => {
  
  return (
    <div className="Header-Section">
      <h1 className="Header-heading">
        WELCOME TO <br />{" "}
        <span className="span">
          THE <span>SWAMP</span>
        </span>
      </h1>
      <div className="Header-ParaGarph">
        <p className="p1">
          {" "}
          The web3 social swamp where your NFT doubles as your membership token
          to the Cardano Crocs Club.
        </p>
        <p className="p2">
          The CCC ecosystem is ever-expanding and new experiences are only
          available to CCC members. As the ecosystem grows, members will gain
          access to the Croc Arcade, gaming incubator, online poker game,
          exclusive merch drops, and Swamp-only digital & real-world
          experiences.
        </p>
        <p className="p3">
          $C4 policy ID:
          a00fdf4fb9ab6c8c2bd1533a2f14855edf12aed5ecbf96d4b5f5b939
        </p>
      </div>
      <div className="header-card">
        <Card />
      </div>
    </div>
  );
};
