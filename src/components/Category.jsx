import "../styles/CoffeeCategory.css";
import americano from "../assets/drinks/americano.webp";
import capuccino from "../assets/drinks/capuccino.webp";
import espresso from "../assets/drinks/espresso.webp";
import doubleEspresso from "../assets/drinks/doubleEspresso.webp";
import latte from "../assets/drinks/latte.webp";
import machiato from "../assets/drinks/machiato.webp";
import triangle from "../assets/triangle.svg";
import coffeeCategoryBackground from "../assets/coffeeCategoryBackground.svg";
import MenuCard from "./MenuCard";
import { useState } from "react";
import Overlay from "./Overlay";

export default function Category({ name, circleColor, triangleLeftMargin }) {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});
  const handleClick = (product) => {
    setShowOverlay(true);
    setCurrentProduct(product);
  };
  return (
    <div className="coffee-category">
      {showOverlay && (
        <Overlay
          product={currentProduct}
          onClose={() => setShowOverlay(false)}
        />
      )}
      <div className="triangle" style={{ left: triangleLeftMargin }}></div>
      <div className="header">
        <h1 className="title">{name}</h1>
        <div className="circle" style={{ backgroundColor: circleColor }}></div>
      </div>
      <div className="menu-category">
        <MenuCard
          onclick={() =>
            handleClick({
              image: espresso,
              name: "Эспрессо",
              price: "100",
              id: 1,
            })
          }
          image={espresso}
          name="Эспрессо"
          price="100"
        />
        <MenuCard
          onclick={() =>
            handleClick({
              image: doubleEspresso,
              name: "Эспрессо",
              price: "150",
              id: 2,
            })
          }
          image={doubleEspresso}
          name="Эспрессо"
          price="150"
        />
        <MenuCard
          onclick={() =>
            handleClick({
              image: americano,
              name: "Американо",
              price: "120",
              id: 3,
            })
          }
          image={americano}
          name="Американо"
          price="120"
        />
        <MenuCard
          onclick={() =>
            handleClick({
              image: latte,
              name: "Латте",
              price: "150",
              id: 4,
            })
          }
          image={latte}
          name="Латте"
          price="150"
        />
        <MenuCard
          onclick={() =>
            handleClick({
              image: capuccino,
              name: "Капучино",
              price: "150",
              id: 5,
            })
          }
          image={capuccino}
          name="Капучино"
          price="150"
        />
        <MenuCard
          onclick={() =>
            handleClick({
              image: machiato,
              name: "Макиато",
              price: "150",
              id: 6,
            })
          }
          image={machiato}
          name="Макиато"
          price="150"
        />
        {/* ß      
        <MenuCard image={espresso} name="Эспрессо" price="100" />
        <MenuCard image={americano} name="Американо" price="120" />
        <MenuCard image={latte} name="Латте" price="150" />
        <MenuCard image={capuccino} name="Капучино" price="150" />
        <MenuCard image={machiato} name="Макиато" price="150" /> */}
      </div>
    </div>
  );
}
