import "../styles/Overlay.css";
import closeIcon from "../assets/icons/close.svg";
import coffeeSize from "../assets/coffeeSize.svg";
import { useState } from "react";
import PayButton from "./PayButton";
import GenericButton from "./GenericButton";
export default function Overlay({ onClose, product }) {
  const [activeSize, setActiveSize] = useState("medium");

  return (
    <div className="overlay">
      <div className="content">
        <button onClick={onClose} className="close">
          <img src={closeIcon} alt="close icon" className="closeIcon" />
        </button>
        <img src={product.image} alt={product.name} className="productImage" />
        <div className="name">{product.name}</div>
        <div className="size-button-container">
          <button
            className={`size small ${activeSize === "small" ? "active" : ""}`}
            onClick={() => setActiveSize("small")}
          >
            <div className="imageContainer">
              <img src={coffeeSize} alt="" />
            </div>
            <div className="text">200 мл.</div>
          </button>
          <button
            className={`size medium ${activeSize === "medium" ? "active" : ""}`}
            onClick={() => setActiveSize("medium")}
          >
            <div className="imageContainer">
              <img src={coffeeSize} alt="" />
            </div>

            <div className="text">300 мл.</div>
          </button>
          <button
            className={`size big ${activeSize === "big" ? "active" : ""}`}
            onClick={() => setActiveSize("big")}
          >
            <div className="imageContainer">
              <img src={coffeeSize} alt="" />
            </div>

            <div className="text">400 мл.</div>
          </button>
        </div>
        <div className="button-container">
          <GenericButton
            name="Хотите добавить сироп?"
            onClick={() => {
              console.log("ADD");
            }}
          />
          <PayButton
            price={product.price}
            onClick={() => {
              console.log("PAY");
            }}
          />
        </div>
      </div>
    </div>
  );
}
