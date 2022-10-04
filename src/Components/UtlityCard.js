import React from "react";
export const UtlityCard = () => {
  return (
    <>
      <div className="utlity-top-div">
        <div className="utlity-card-1">
          {itemData.map((item) => (
            <div className="utlity-card-div">
              <div className="utlity-card-header">
                <img src={`${item.img}`} alt={`${item.title}`} />
              </div>
              <div className="card-content">
                <p>{`${item.description}`}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="utlity-card-2">
          {itemData1.map((item) => (
            <div className="utlity-card-div">
              <div className="utlity-card-header">
                <img src={`${item.img}`} alt={`${item.title}`} />
              </div>
              <div className="card-content">
                <p>{`${item.description}`}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="utlity-card-3">
          {itemData2.map((item) => (
            <div className="utlity-card-div">
              <div className="utlity-card-header">
                <img src={`${item.img}`} alt={`${item.title}`} />
              </div>
              <div className="card-content">
                <p>{`${item.description}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

{/* /////////////////////FOR MOBILE RESPOSIVENES///////////////////////////////////// */}
      <div className="utlity-top-div-for-mobile">
        <div className="utlity-card-1-for-mobile">
          {itemDataMobile.map((item) => (
            <div className="utlity-card-div-for-mobile">
              <div className="utlity-card-header-for-mobile">
                <img src={`${item.img}`} alt={`${item.title}`} />
              </div>
              <div className="card-content-for-mobile">
                <p>{`${item.description}`}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="utlity-card-2-for-mobile">
          {itemDataMobile1.map((item) => (
            <div className="utlity-card-div-for-mobile">
              <div className="utlity-card-header-for-mobile">
                <img src={`${item.img}`} alt={`${item.title}`} />
              </div>
              <div className="card-content-for-mobile">
                <p>{`${item.description}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
const itemData = [
  {
    img: "https://cardanocrocsclub.com/img/utility/01.webp",
    title: "img",
    description: `Premium level membership access`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/04.webp",
    title: "img",
    description: `Highest Daily $C4
    Token Staking Rewards`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/07.webp",
    title: "img",
    description: `Metaverse`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/10.webp",
    title: "img",
    description: `Gaming Incubator`,
  },
];
const itemData1 = [
  {
    img: "https://cardanocrocsclub.com/img/utility/02.webp",
    title: "img",
    description: `Whitelist access
    to RA Crocs`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/05.webp",
    title: "img",
    description: `Access to the Croc
    Arcade, Play to Earn
    Games`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/08.webp",
    title: "img",
    description: `Croc Breeding Game`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/11.webp",
    title: "img",
    description: `OG Croc only
    merch drops`,
  },
];
const itemData2 = [
  {
    img: "https://cardanocrocsclub.com/img/utility/03.webp",
    title: "img",
    description: `One free parcel of land
    per OG Croc held`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/06.webp",
    title: "img",
    description: `$C4 Store`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/09.webp",
    title: "img",
    description: `Ability to breed
    Baby Crocs`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/12.webp",
    title: "img",
    description: `Voting on Croc
    Community Chest`,
  },
];
const itemDataMobile = [
  {
    img: "https://cardanocrocsclub.com/img/utility/01.webp",
    title: "img",
    description: `Premium level membership access`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/03.webp",
    title: "img",
    description: `One free parcel of land per OG Croc held`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/05.webp",
    title: "img",
    description: `Access to the Croc Arcade, Play to Earn Games`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/07.webp",
    title: "img",
    description: `Metaverse`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/09.webp",
    title: "img",
    description: `Ability to breed Baby Crocs`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/11.webp",
    title: "img",
    description: `OG Croc only merch drops`,
  },
];
const itemDataMobile1 = [
  {
    img: "https://cardanocrocsclub.com/img/utility/02.webp",
    title: "img",
    description: `Whitelist access to RA Crocs`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/04.webp",
    title: "img",
    description: `Highest Daily $C4 Token Staking Rewards`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/06.webp",
    title: "img",
    description: `$C4 Store`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/08.webp",
    title: "img",
    description: `Croc Breeding Game`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/10.webp",
    title: "img",
    description: `Gaming Incubator`,
  },
  {
    img: "https://cardanocrocsclub.com/img/utility/12.webp",
    title: "img",
    description: `Voting on Croc Community Chest`,
  },
];
