import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/OrderFail.css";
import orderFail from "../assets/orderFail.svg";

import BackButton from "../components/BackButton";
import GenericButton from "../components/GenericButton";

export default function OrderFail() {
  // Get the current location object
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="order-fail">
      <div className="main-container">
        <img className="rubleIcon" src={orderFail} alt="rubleIcon" />
        <h1 className="title">Данного напитка нет в наличии</h1>
      </div>
      <div className="grey-button-wrapper">
        <GenericButton
          onClick={() => {
            navigate(`/menu`);

          }}
          name="Вернуться на главную"
        />
      </div>
    </div>
  );
}
