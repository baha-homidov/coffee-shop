import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/OrderReady.css";
import rubleIcon from "../assets/coffeeReady.svg";

import BackButton from "../components/BackButton";
import GenericButton from "../components/GenericButton";

export default function OrderReady() {
  // Get the current location object
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="order-ready">
      <div className="main-container">
        <img className="rubleIcon" src={rubleIcon} alt="rubleIcon" />
        <div className="text-container">
          <h1 className="title">Напиток готов!</h1>
          <div className="subtitle">вы можете забрать его</div>
        </div>
      </div>
      <GenericButton
        onClick={() => navigate("/menu")}
        name="Вернуться на главную"
      />
    </div>
  );
}
