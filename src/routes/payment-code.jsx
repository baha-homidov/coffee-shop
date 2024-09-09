import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/PaymentCode.css";
import { useState } from "react";
import triangle from "../assets/triangleFull.svg";
import curvyLine from "../assets/curvyLine.svg";
import BackButton from "../components/BackButton";
import GenericButton from "../components/GenericButton";
import backIcon from "../assets/icons/backIcon.svg";
export default function PaymentCode({ title }) {
  // State to manage the phone number input
  const [phoneNumber, setPhoneNumber] = useState("");

  // Get the current location object
  const location = useLocation();
  const navigate = useNavigate();

  // Handle numpad button clicks
  const handleButtonClick = (digit) => {
    if (phoneNumber.length === 4) return;
    setPhoneNumber((prev) => prev + digit);
  };

  // Handle backspace button click
  const handleBackspace = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  return (
    <div className="payment-code">
      <BackButton />

      <div className="main-container">
        <div className="subtitle">
          Введите код-смс которое пришло вам на телефон для подтверждения оплаты
        </div>
        <div className="phone-number-container">
          <div className={`digit ${phoneNumber[0] ? "active" : ""}`}>
            {phoneNumber[0] ? phoneNumber[0] : "0"}
          </div>
          <div className={`digit ${phoneNumber[1] ? "active" : ""}`}>
            {phoneNumber[1] ? phoneNumber[1] : "0"}
          </div>
          <div className={`digit ${phoneNumber[2] ? "active" : ""}`}>
            {phoneNumber[2] ? phoneNumber[2] : "0"}
          </div>
          <div className={`digit ${phoneNumber[3] ? "active" : ""}`}>
            {phoneNumber[3] ? phoneNumber[3] : "0"}
          </div>
        </div>
        <div className="numpad">
          <button onClick={() => handleButtonClick("1")}>1</button>
          <button onClick={() => handleButtonClick("2")}>2</button>
          <button onClick={() => handleButtonClick("3")}>3</button>
          <button onClick={() => handleButtonClick("4")}>4</button>
          <button onClick={() => handleButtonClick("5")}>5</button>
          <button onClick={() => handleButtonClick("6")}>6</button>
          <button onClick={() => handleButtonClick("7")}>7</button>
          <button onClick={() => handleButtonClick("8")}>8</button>
          <button onClick={() => handleButtonClick("9")}>9</button>
          <button className="hide"></button>
          <button onClick={() => handleButtonClick("0")}>0</button>

          <button onClick={handleBackspace}>
            <img src={backIcon} alt="" className="back" />
          </button>
        </div>
        <GenericButton
          onClick={() =>
            phoneNumber.length === 10 && navigate("/phone-number-verification")
          }
          name="Отправить"
          disabled={phoneNumber.length !== 4}
        />
      </div>
    </div>
  );
}
