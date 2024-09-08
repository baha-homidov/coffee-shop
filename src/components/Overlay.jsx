import "../styles/Overlay.css";
import closeIcon from "../assets/icons/close.svg";
import coffeeSize from "../assets/coffeeSize.svg";
import { useState } from "react";
import PayButton from "./PayButton";
import GenericButton from "./GenericButton";
import SyrupButton from "./SyrupButton";
import { useNavigate } from "react-router-dom";
export default function Overlay({ onClose, product }) {
  const navigate = useNavigate();
  const [activeSize, setActiveSize] = useState("small");
  const [price, setPrice] = useState(product.price);
  const [syrupOverlay, setSyrupOverlay] = useState(false);
  const [syrupState, setSyrupState] = useState({
    vanilla: 0,
    mint: 0,
    caramel: 0,
    chocolate: 0,
  });

  return (
    <div className="overlay">
      {syrupOverlay && (
        <div className="syrup-overlay-wrapper">
          <div className="syrup-overlay">
            <button
              onClick={() => {
                setSyrupOverlay(false);
              }}
              className="close"
            >
              <img src={closeIcon} alt="close icon" className="closeIcon" />
            </button>
            <div className="button-container">
              <SyrupButton
                name="Ванильный сироп"
                syrupState={syrupState.vanilla}
                setSyrupState={(newState) => {
                  setSyrupState({ ...syrupState, vanilla: newState });
                }}
              />
              <SyrupButton
                name="Мятный сироп"
                syrupState={syrupState.mint}
                setSyrupState={(newState) => {
                  setSyrupState({ ...syrupState, mint: newState });
                }}
              />
              <SyrupButton
                name="Карамельный сироп"
                syrupState={syrupState.caramel}
                setSyrupState={(newState) => {
                  setSyrupState({ ...syrupState, caramel: newState });
                }}
              />
              <SyrupButton
                name="Шоколадный сироп"
                syrupState={syrupState.chocolate}
                setSyrupState={(newState) => {
                  setSyrupState({ ...syrupState, chocolate: newState });
                }}
              />
            </div>
            <PayButton
              price={price}
              onClick={() => {
                navigate(`/loyalty-system?id=${product.id}&price=${price}`);
              }}
            />
          </div>
        </div>
      )}
      <div className="content">
        <button onClick={onClose} className="close">
          <img src={closeIcon} alt="close icon" className="closeIcon" />
        </button>
        <img src={product.image} alt={product.name} className="productImage" />
        <div className="name">{product.name}</div>
        <div className="size-button-container">
          <button
            className={`size small ${activeSize === "small" ? "active" : ""}`}
            onClick={() => {
              setPrice(product.price);
              setActiveSize("small");
            }}
          >
            <div className="imageContainer">
              <img src={coffeeSize} alt="" />
            </div>
            <div className="text">200 мл.</div>
          </button>
          <button
            className={`size medium ${activeSize === "medium" ? "active" : ""}`}
            onClick={() => {
              setActiveSize("medium");
              setPrice(String(Number(product.price) + 50));
            }}
          >
            <div className="imageContainer">
              <img src={coffeeSize} alt="" />
            </div>

            <div className="text">300 мл.</div>
          </button>
          <button
            className={`size big ${activeSize === "big" ? "active" : ""}`}
            onClick={() => {
              setPrice(String(Number(product.price) + 100));

              setActiveSize("big");
            }}
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
              setSyrupOverlay(true);
            }}
          />
          <PayButton
            price={price}
            onClick={() => {
              navigate(`/loyalty-system?id=${product.id}&price=${price}`);
            }}
          />
        </div>
      </div>
    </div>
  );
}
