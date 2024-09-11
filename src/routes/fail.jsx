import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Fail.css";
import failIcon from "../assets/icons/failIcon.svg";

import BackButton from "../components/BackButton";
import GenericButton from "../components/GenericButton";

export default function Fail() {
  // Get the current location object
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fail">
      <div className="main-container">
        <img className="failIcon" src={failIcon} alt="Fail icon" />
        <h1 className="title">Оплата не прошла</h1>
      </div>
      <div className="button-container">
        <div className="try-more-button-container">
          <GenericButton
            onClick={() => {
              console.log("SIGN UP");
              navigate(-1);
            }}
            name="Попробовать ещё раз"
          />
        </div>

        <div className="transparent-button-wrapper">
          <GenericButton
            onClick={() => {

              navigate("/menu");
            }}
            name="Отмена"
          />
        </div>
      </div>
    </div>
  );
}
