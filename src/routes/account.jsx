import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Account.css";
import backIcon from "../assets/backBlack.svg";
import latteImg from "../assets/drinks/capuccino.webp";
import rubleIcon from "../assets/icons/rubleIcon.svg";
import callOutIcon from "../assets/callOut.svg";
import OrderCard from "../components/OrderCard";
export default function Account() {
  // Get the current location object
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="account">
      <div className="header">
        <button className="back">
          <img src={backIcon} alt="" />
        </button>
        <div className="right-container">
          <button className="bonus-button">
            <img src={rubleIcon} alt="" />
            <div>127 бонусов</div>
          </button>
          <button className="call-out">
            <img src={callOutIcon} alt="" />

            <div>+7 921 420-00-14</div>
          </button>
        </div>
      </div>
      <div className="line"></div>
      <div className="main-container">
        <h1 className="title">История заказов</h1>
      </div>
      <OrderCard
        name={"Капучино"}
        price={150}
        size={"400"}
        syrupSize={"10"}
        syrupType={"Мятный"}
        img={latteImg}
        bonus={"12"}
      />
      <OrderCard
        name={"Капучино"}
        price={150}
        size={"400"}
        syrupSize={"10"}
        syrupType={"Мятный"}
        bonus={"12"}
        img={latteImg}
      />
      <OrderCard
        bonus={"12"}
        img={latteImg}
        name={"Капучино"}
        price={150}
        size={"400"}
        syrupSize={"10"}
        syrupType={"Мятный"}
      />
      <OrderCard
        bonus={"12"}
        img={latteImg}
        name={"Капучино"}
        price={150}
        size={"400"}
        syrupSize={"10"}
        syrupType={"Мятный"}
      />
      <OrderCard
        bonus={"12"}
        img={latteImg}
        name={"Капучино"}
        price={150}
        size={"400"}
        syrupSize={"10"}
        syrupType={"Мятный"}
      />
      <OrderCard
        bonus={"12"}
        img={latteImg}
        name={"Капучино"}
        price={150}
        size={"400"}
        syrupSize={"10"}
        syrupType={"Мятный"}
      />
      <OrderCard
        bonus={"12"}
        img={latteImg}
        name={"Капучино"}
        price={150}
        size={"400"}
        syrupSize={"10"}
        syrupType={"Мятный"}
      />
    </div>
  );
}
