import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/LoyaltySystem.css";
import rubleIcon from "../assets/icons/rubleIcon.svg";

import BackButton from "../components/BackButton";
import GenericButton from "../components/GenericButton";

export default function LoyaltySystem() {
  // Get the current location object
  const location = useLocation();
  const navigate = useNavigate();

  // Use URLSearchParams to parse the query parameters
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id"); // Get the 'id' parameter
  const price = searchParams.get("price"); // Get the 'price' parameter

  // Check if parameters are missing and navigate to /menu
  useEffect(() => {
    if (!id || !price) {
      navigate("/menu");
    }
  }, [id, price, navigate]);

  return (
    <div className="loyalty-system">
      <BackButton />
      <div className="main-container">
        <img className="rubleIcon" src={rubleIcon} alt="rubleIcon" />
        <h1 className="title">Система лояльности</h1>
        <div className="subtitle">
          Вы можете зарегестрироваться и получать бонусы за каждый напиток. 1
          бонус = 1 рубль
        </div>
      </div>
      <div className="button-container">
        <div className="yellow-button-wrapper">
          <GenericButton
            onClick={() => console.log(id, price)}
            name="Зарегестрироваться"
          />
        </div>
        <div className="grey-button-wrapper">
          <GenericButton
            onClick={() => console.log(id, price)}
            name="Продолжить без регистрации"
          />
        </div>
      </div>
    </div>
  );
}
