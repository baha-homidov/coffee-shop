import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Bonus.css";
import rubleIcon from "../assets/icons/rubleIcon.svg";

import BackButton from "../components/BackButton";
import GenericButton from "../components/GenericButton";
import PayButton from "../components/PayButton";
import { useState } from "react";
export default function Bonus() {
  // Get the current location object
  const location = useLocation();
  const navigate = useNavigate();
  const [spendBonus, setSpendBonus] = useState(false);
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
    <div className="bonus">
      <BackButton />
      <div className="main-container">
        <img className="rubleIcon" src={rubleIcon} alt="rubleIcon" />
        <h1 className="title">У вас имеется 120 бонусов</h1>
      </div>
      <div className="button-container">
        <div className="button-switcher">
          <div
            className={"spend-button" + (spendBonus ? " active" : "")}
            onClick={() => setSpendBonus(true)}
          >
            Списать 120
          </div>
          <div
            className={"spend-button" + (!spendBonus ? " active" : "")}
            onClick={() => setSpendBonus(false)}
          >
            Накопить 32
          </div>
        </div>
        <PayButton onClick={() => console.log("PAY")} price={price} />
      </div>
    </div>
  );
}
