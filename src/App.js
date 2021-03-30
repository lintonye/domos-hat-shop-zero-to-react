// Dependencies
import React from "react";

// Styles
import "./tailwind.output.css";

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
    <div className="relative m-1">
      <FiShoppingCart size={20} />
      <div
        className="absolute -right-2 -top-2 rounded-full w-4 h-4 flex justify-center items-center bg-pink-600"
        style={{ fontSize: "0.5rem", right: -8, top: -8 }}
      >
        <div className="absolute">{props.count}</div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header id="Header">
      <ul className="flex space-x-6 items-center p-3 text-sm bg-gray-900 text-white">
        <li>Home</li>
        <li>
          <SearchBar />
        </li>
        <li>Account</li>
        <li className="flex-1 flex justify-end">
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
    <div className="relative flex-shrink-0" id="DomoWithHat">
      <Domo />
      <Hat
        type={props.hat}
        className="absolute left-12 -top-1"
        style={{ left: 8, top: -10, transform: "translateX(40px)" }}
      />
    </div>
  );
}

function Main() {
  const hatNames = Object.keys(hats);
  const [activeHat, setActiveHat] = useState(hatNames[0]);
  return (
    <main className="p-3 flex justify-around items-start" id="Main">
      <DomoWithHat hat={activeHat} />
      <div className="flex flex-col justify-center space-y-6 items-start">
        <h2 className="text-2xl">{activeHat}</h2>
        <div>$50</div>
        <div className="grid gap-1 grid-cols-5">
          {hatNames.map(function (hat) {
            return (
              <div
                key={hat}
                className={`border border-indigo-200 rounded-sm flex justify-center items-center cursor-pointer hover:border-purple-500 ${
                  hat === activeHat ? "border-2 border-purple-700" : ""
                }`}
                onClick={function handleClick() {
                  setActiveHat(hat);
                }}
              >
                <Hat type={hat} small />
              </div>
            );
          })}
        </div>
        <p className="text-sm">
          A covering for the head usually having a shaped crown and brim.
        </p>
        <button className="rounded-sm bg-pink-600 text-white text-sm py-1 px-2">
          Add To Cart
        </button>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer
      className="mt-auto p-2 text-xs flex justify-around items-center bg-gray-900 text-white"
      id="Footer"
    >
      <div>© 2021 Domo's Hat Shop</div>
    </footer>
  );
}

function DomoHatShop() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

function App() {
  return <DomoHatShop />;
}

export default App;
