import "./../styles/Root.css";
import RootCoffeeRight from "../assets/RootCoffeeRight.webp";
import RootCoffeeBottom from "../assets/RootCooffeeBottom.webp";
import RootCircle from "../assets/RootCircle.svg";
import RootCoffeeBeanA from "../assets/RootCoffeeBeanA.webp";
import RootCoffeeBeanB from "../assets/RootCoffeeBeanB.webp";
import RootCoffeeBeanC from "../assets/RootCoffeeBeanC.webp";
import RootCoffeeBeanD from "../assets/RootCoffeeBeanD.webp";
import RootCoffeeBeanE from "../assets/RootCoffeeBeanE.webp";
import { useNavigate } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  return (
    <div className="root-container" onClick={handleClick}>
      <div className="coffee-bean-top-container">
        <img className="bean-a" src={RootCoffeeBeanA} alt="Кофе" />
        <img className="bean-b" src={RootCoffeeBeanB} alt="Кофе" />
        <img className="bean-c" src={RootCoffeeBeanC} alt="Кофе" />
        <img className="bean-d" src={RootCoffeeBeanD} alt="Кофе" />
      </div>
      <h1 className="title">ЭТО ТВОЙ КОФЕ</h1>
      <img className="right-coffee" src={RootCoffeeRight} alt="Кофе" />
      <img className="bottom-coffee" src={RootCoffeeBottom} alt="Кофе" />
      <div className="coffee-bean-bottom-container">
        <img className="bean-f" src={RootCoffeeBeanE} alt="Кофе" />
        <img className="bean-g" src={RootCoffeeBeanD} alt="Кофе" />
      </div>
      <img className="bottom-circle" src={RootCircle} alt="Кофе" />
      <div className="bottom-text">
        <p>Коснитесь</p> <p>экрана</p>
      </div>
    </div>
  );
}
