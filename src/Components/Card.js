import React from "react";

export const Card = () => {
  return (
    <>
      <div className="Header-Card">
        {itemData.map((item) => (
          <div className="card">
            <img className="i-1" src={`${item.img}`} alt={`${item.title}`} />
          </div>
        ))}
      </div>
      <div className="header-card-2">
        {itemData1.map((item) => (
          <div className="card">
            <img className="i-1" src={`${item.img}`} alt={`${item.title}`} />
          </div>
        ))}
      </div>
      <div className="header-card-3">
        {itemData2.map((item) => (
          <div className="card">
            <img className="i-1" src={`${item.img}`} alt={`${item.title}`} />
          </div>
        ))}
      </div>
    </>
  );
};
const itemData = [
  {
    img: "https://cardanocrocsclub.com/img/top/01.webp",
    title: "nft",
  },
  {
    img: "	https://cardanocrocsclub.com/img/top/04.webp",
    title: "nft",
  },
  {
    img: "	https://cardanocrocsclub.com/img/top/07.webp",
    title: "nft",
  },
];
const itemData1 = [
  {
    img: "https://cardanocrocsclub.com/img/top/02.webp",
    title: "nft",
  },
  {
    img: "	https://cardanocrocsclub.com/img/top/05.webp",
    title: "nft",
  },
  {
    img: "	https://cardanocrocsclub.com/img/top/08.webp",
    title: "nft",
  },
];
const itemData2 = [
  {
    img: "https://cardanocrocsclub.com/img/top/03.webp",
    title: "nft",
  },
  {
    img: "	https://cardanocrocsclub.com/img/top/06.webp",
    title: "nft",
  },
  {
    img: "	https://cardanocrocsclub.com/img/top/09.webp",
    title: "nft",
  },
];
