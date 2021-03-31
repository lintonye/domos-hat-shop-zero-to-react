// Dependencies
import React from "react";

// Styles
import "./styles.css";

import imgThinker from "./thinker.png";

import imgXmas from "./hat_xmas.png";
import imgWool from "./hat_wool.png";
import imgPolice from "./hat_police.png";
import imgPirate from "./hat_pirate.png";
import imgFlower from "./hat_ladyFlower.png";
import imgHarry from "./hat_Harry.png";
import imgElegant from "./hat_elegant.png";
import imgChef from "./hat_chef.png";
import imgCap from "./hat_cap.png";
import imgBall from "./hat_ball.png";

import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

function SearchBar() {
  return (
    <form
      className="space-x-0.5 flex"
      onSubmit={function handleSubmit(e) {
        e.preventDefault();
        alert("Hang on, I'll search it for you!");
      }}
    >
      <input type="string" className="text-black px-1" />
      <button className="border-white border p-0.5 px-2 rounded-sm">
        Search
      </button>
    </form>
  );
}

function ShoppingCart(props) {
  return (
    <div className="cart">
      <FiShoppingCart size={20} />
      <div className="number">
        <div className="absolute">{props.count}</div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <ul>
        <li>Home</li>
        <li>
          <SearchBar />
        </li>
        <li>Account</li>
        <li className="cart">
          <ShoppingCart count={2} />
        </li>
      </ul>
    </header>
  );
}

function Domo() {
  return <img alt="Domo" src={imgThinker} width={220} height={220} />;
}

const hats = {
  Cap: imgCap,
  Christmas: imgXmas,
  Wool: imgWool,
  Police: imgPolice,
  Pirate: imgPirate,
  Flower: imgFlower,
  "Harry Potter": imgHarry,
  Elegant: imgElegant,
  Chef: imgChef,
  Ball: imgBall,
};

function Hat(props) {
  const ratio = 396 / 865;
  const smallWidth = 80;
  const largeWidth = 200;
  return (
    <div className={props.className} style={props.style}>
      <img
        alt={props.type}
        src={hats[props.type]}
        width={props.small ? smallWidth : largeWidth}
        height={props.small ? smallWidth * ratio : largeWidth * ratio}
      />
    </div>
  );
}

function DomoWithHat(props) {
  return (
    <div className="domo-with-hat">
      <Domo />
      <Hat type={props.hat} className="hat" />
    </div>
  );
}

function Main() {
  const hatNames = Object.keys(hats);
  const [activeHat, setActiveHat] = useState(hatNames[0]);
  return (
    <main className="main">
      <DomoWithHat hat={activeHat} />
      <div className="container">
        <h2>{activeHat}</h2>
        <div>$50</div>
        <div className="grid">
          {hatNames.map(function (hat) {
            return (
              <div
                key={hat}
                className="hat"
                onClick={function handleClick() {
                  setActiveHat(hat);
                }}
              >
                <Hat type={hat} small />
              </div>
            );
          })}
        </div>
        <p>A covering for the head usually having a shaped crown and brim.</p>
        <button className="rounded-sm bg-pink-600 text-white text-sm py-1 px-2">
          Add To Cart
        </button>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>© 2021 Domo's Hat Shop</div>
    </footer>
  );
}

function DomoHatShop() {
  return (
    <div className="root">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default function App() {
  return <DomoHatShop />;
}
