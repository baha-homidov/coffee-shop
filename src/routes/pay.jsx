import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Pay.css";
import bankCard from "../assets/bankCard.svg";

import BackButton from "../components/BackButton";
import GenericButton from "../components/GenericButton";
import emulator from "../utils/emulator"; // Import the emulator object

export default function Pay() {
  // Get the current location object
  const location = useLocation();
  const navigate = useNavigate();
  const [message, setMessage] = useState(""); // State to display the emulator messages

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

  // Handle keypress events to simulate card payment failure
  const handleKeyPress = (event) => {
    if (event.key === "f") {
      navigate("/fail");
    }
  };

  const handlePay = () => {
    // Simulate a bank card purchase using the emulator
    emulator.BankCardPurchase(
      price, // Amount to pay
      (result) => {
        if (result) {
          // If the transaction is successful, navigate to the countdown page
          navigate("/countdown");
        } else {
          // If the transaction fails, navigate to the fail page
          navigate("/fail");
        }
      },
      (displayMessage) => {
        // Display messages from the emulator
        setMessage(displayMessage);
      }
    );
  };

  useEffect(() => {
    // Start listening for the keyboard events for payment simulation
    const cardHandler = emulator.BankCardPurchase(
      price,
      (result) => {
        if (result) {
          navigate(`/countdown?id=${id}`);
        } else {
          navigate("/fail");
        }
      },
      (displayMessage) => setMessage(displayMessage)
    );

    // Cleanup function to remove the event listeners
    return () => {
      document.removeEventListener("keydown", cardHandler);
    };
  }, [price, navigate]);

  return (
    <div className="pay">
      <div className="main-container">
        <img
          className="backCard"
          onClick={handlePay} // Call handlePay when clicking on the card
          src={bankCard}
          alt="Bank Card"
        />
        <h1 className="title">Приложите карту к терминалу</h1>
        {/* <p>{message}</p> */}
        <p>'S' для успешной оплаты, 'F' для ошибки</p>
      </div>
      <div className="button-container">
        <GenericButton
          onClick={() => {

            navigate(-1);
          }}
          name="Отмена"
        />
      </div>
    </div>
  );
}
