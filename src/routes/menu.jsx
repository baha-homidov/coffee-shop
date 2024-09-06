import { Link } from "react-router-dom";
import "./../styles/Menu.css";
import phoneIcon from "../assets/icons/phone.svg";
import triangle from "../assets/triangle.svg";
import coffeeImg from "../assets/coffeeCategory.webp";
import milkShakeImg from "../assets/milkShakeCategory.webp";
import teaImg from "../assets/teaCategory.webp";
import sparklingImg from "../assets/sparklingCategory.webp";
import { useState } from "react";
import MenuCategoryButton from "../components/MenuCategoryButton";
export default function Menu() {
  const [menuState, setMenuState] = useState("coffee");

  return (
    <div className={`menu-container ${menuState}`}>
      <img className="triangle" src={triangle} alt="triangle" />
      <div className="header">
        <h1 className="title">Выбор напитка</h1>
        <Link to="/">
          <button className="authorize">
            <div className="phoneIconWrapper">
              <img className="phoneIcon" src={phoneIcon} alt="phoneIcon" />
            </div>
            <p>Вход / регистрация</p>
          </button>
        </Link>
      </div>

      <div className="categoryMenuContainer">
        <MenuCategoryButton onClick={() => setMenuState("coffee")} active={menuState === "coffee"} name="Кофе" image={coffeeImg} />
        <MenuCategoryButton onClick={() => setMenuState("tea")} active={menuState === "tea"} name="Чай" image={teaImg} />
        <MenuCategoryButton onClick={() => setMenuState("milk")} active={menuState === "milk"} name="Молочный коктейл" image={milkShakeImg} />
        <MenuCategoryButton onClick={() => setMenuState("sparkling")} active={menuState === "sparkling"} name="Морсы и газ. напитки" image={sparklingImg} />

      </div>
    </div>
  );
}
