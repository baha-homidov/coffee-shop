import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/PhoneNumber.css";
import { useState } from "react";
import triangle from "../assets/triangleFull.svg";
import curvyLine from "../assets/curvyLine.svg";
import BackButton from "../components/BackButton";
import GenericButton from "../components/GenericButton";
import backIcon from "../assets/icons/backIcon.svg";
export default function PhoneNumber({ title }) {
  // State to manage the phone number input
  const [phoneNumber, setPhoneNumber] = useState("");

  // Get the current location object
  const location = useLocation();
  const navigate = useNavigate();

  // Handle numpad button clicks
  const handleButtonClick = (digit) => {
    if (phoneNumber.length === 10) return;
    setPhoneNumber((prev) => prev + digit);
  };

  // Handle backspace button click
  const handleBackspace = () => {
    setPhoneNumber((prev) => prev.slice(0, -1));
  };

  return (
    <div className="phone-number">
      <BackButton />

      <div className="main-container">
        <h1 className="title">{title}</h1>
        <div className="subtitle">Введите номер телефона</div>
        <div className="phone-number-container">
          <div className="prefix">+7</div>
          <div className="block">
            <div className={`digit ${phoneNumber[0] ? "active" : ""}`}>
              {phoneNumber[0] ? phoneNumber[0] : "0"}
            </div>
            <div className={`digit ${phoneNumber[1] ? "active" : ""}`}>
              {phoneNumber[1] ? phoneNumber[1] : "0"}
            </div>
            <div className={`digit ${phoneNumber[2] ? "active" : ""}`}>
              {phoneNumber[2] ? phoneNumber[2] : "0"}
            </div>
          </div>
          <div className="block">
            <div className={`digit ${phoneNumber[3] ? "active" : ""}`}>
              {phoneNumber[3] ? phoneNumber[3] : "0"}
            </div>
            <div className={`digit ${phoneNumber[4] ? "active" : ""}`}>
              {phoneNumber[4] ? phoneNumber[4] : "0"}
            </div>
            <div className={`digit ${phoneNumber[5] ? "active" : ""}`}>
              {phoneNumber[5] ? phoneNumber[5] : "0"}
            </div>
            <div className={`digit ${phoneNumber[6] ? "active" : ""}`}>-</div>

            <div className={`digit ${phoneNumber[6] ? "active" : ""}`}>
              {phoneNumber[6] ? phoneNumber[6] : "0"}
            </div>
            <div className={`digit ${phoneNumber[7] ? "active" : ""}`}>
              {phoneNumber[7] ? phoneNumber[7] : "0"}
            </div>
            <div className={`digit ${phoneNumber[8] ? "active" : ""}`}>-</div>

            <div className={`digit ${phoneNumber[8] ? "active" : ""}`}>
              {phoneNumber[8] ? phoneNumber[8] : "0"}
            </div>
            <div className={`digit ${phoneNumber[9] ? "active" : ""}`}>
              {phoneNumber[9] ? phoneNumber[9] : "0"}
            </div>
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
          name="Зарегистрироваться"
          disabled={phoneNumber.length !== 10}
        />
      </div>
    </div>
  );
}
