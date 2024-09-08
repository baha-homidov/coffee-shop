import "../styles/BackButton.css";
import back from "../assets/back.svg";
import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate(-1)}>
      <img src={back} alt="back" />
    </button>
  );
}
