import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/SignUp.css";

import triangle from "../assets/triangleFull.svg";
import curvyLine from "../assets/curvyLine.svg";
import BackButton from "../components/BackButton";
import GenericButton from "../components/GenericButton";
import RootCoffeeBeanA from "../assets/RootCoffeeBeanA.webp";
import RootCoffeeBeanB from "../assets/RootCoffeeBeanB.webp";
import RootCoffeeBeanC from "../assets/RootCoffeeBeanC.webp";
import RootCoffeeBeanD from "../assets/RootCoffeeBeanD.webp";
import RootCoffeeBeanE from "../assets/RootCoffeeBeanE.webp";
export default function SignUp() {
  // Get the current location object
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="sign-up">
      <BackButton />
      <div className="background-canvas">
        <img className="triangle" src={triangle} alt="" />
        <img className="curvy-line" src={curvyLine} alt="" />
        <img className="coffee-bean-b" src={RootCoffeeBeanB} alt="" />
        <img className="coffee-bean-a" src={RootCoffeeBeanA} alt="" />
        <img className="coffee-bean-c" src={RootCoffeeBeanC} alt="" />
        <img className="coffee-bean-d" src={RootCoffeeBeanA} alt="" />
        <img className="coffee-bean-e" src={RootCoffeeBeanC} alt="" />
      </div>
      <div className="main-container">
        <h1 className="title">Регистрация</h1>
        <div className="sub-title">
          Вы можете зарегистрироваться и получать бонусы за каждый напиток. 1
          бонус = 1 рубль
        </div>
        <div className="black-button-wrapper">
          <GenericButton
            name="Зарегистрироваться"
            onClick={() => {
              navigate("/phone-number-sign-up");
            }}
          />
        </div>
        <div className="alredy-signed-up">Уже зарегистрированы</div>
        <GenericButton
          name="Войти в аккаунт"
          onClick={() => {
            navigate("/phone-number-sign-in");
          }}
        />
      </div>
    </div>
  );
}
