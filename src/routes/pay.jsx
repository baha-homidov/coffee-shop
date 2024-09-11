import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Pay.css";
import bankCard from "../assets/bankCard.svg";

import BackButton from "../components/BackButton";
import GenericButton from "../components/GenericButton";

export default function Pay() {
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

  // Implement a function to navigate to page /fail when the button 'f' is pressed on the keyboard
  const handleKeyPress = (event) => {
    if (event.key === "f") {
      navigate("/fail");
    }
  };

  const handlePay = () => {
    navigate("/countdown");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [navigate]);

  return (
    <div className="pay">
      <div className="main-container">
        <img
          className="backCard"
          onClick={handlePay}
          src={bankCard}
          alt="Bank Card"
        />
        <h1 className="title">Приложите карту к терминалу</h1>
      </div>
      <div className="button-container">
        <GenericButton
          onClick={() => {
            console.log("SIGN UP");
            navigate(-1);
          }}
          name="Отмена"
        />
      </div>
    </div>
  );
}
