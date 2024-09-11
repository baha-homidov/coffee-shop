import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/CountDown.css";
import rubleIcon from "../assets/icons/rubleIcon.svg";

import BackButton from "../components/BackButton";
import GenericButton from "../components/GenericButton";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import emulator from "../utils/emulator"; // Import the emulator object

export default function CountDown() {
  const location = useLocation();
  const navigate = useNavigate();
  const duration = 20; // Set the timer duration dynamically
  const [message, setMessage] = useState(""); // State to display emulator messages

  // Get the product ID from the query parameters
  const searchParams = new URLSearchParams(location.search);
  const productId = searchParams.get("id"); // Assuming 'id' is the parameter name for the product

  useEffect(() => {
    if (productId) {
      // Start the vending process using the emulator
      emulator.Vend(productId, (result) => {
        if (result) {
          // If vending is successful, navigate to the success page
          navigate("/order-ready");
        } else {
          // If vending fails, navigate to the fail page
          navigate("/order-fail");
        }
      });
    } else {
      // If no product ID, navigate back to the menu
      navigate("/menu");
    }
  }, [productId, navigate]);

  // Function to format time in MM:SS
  const formatTime = (remainingTime) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    // Split minutes and seconds into separate digits
    const [min1, min2] = formattedMinutes;
    const [sec1, sec2] = formattedSeconds;

    return (
      <div className="time-container">
        <span className="digit">{min1}</span>
        <span className="digit">{min2}</span>
        <span className="colon">:</span>
        <span className="digit">{sec1}</span>
        <span className="digit">{sec2}</span>
      </div>
    );
  };

  return (
    <div className="countdown">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={duration}
          colors={["#F5D009"]}
          strokeWidth={2}
          size={300}
          onComplete={() => {
            // Here you could call some action after the timer completes
            console.log("Countdown completed");
          }}
        >
          {({ remainingTime, elapsedTime }) => (
            <>
              <div
                className="dot-wrapper"
                style={{
                  animation: `rotate ${duration}s linear infinite`, // Dynamic animation duration
                  transform: `rotate(${(360 * elapsedTime) / duration}deg)`, // Dynamic rotation
                }}
              >
                <div className="dot"></div>
              </div>
              <div className="timer-content">
                <div className="time">{formatTime(remainingTime)}</div>
                <div className="timer-label">Приготовление напитка</div>
                {message && <p>{message}</p>}{" "}
                {/* Display any emulator messages */}
              </div>
            </>
          )}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
