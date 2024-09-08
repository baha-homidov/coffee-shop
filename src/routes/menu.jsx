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
import Category from "../components/Category";
import TeaCategory from "../components/TeaCategory";
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
        <MenuCategoryButton
          onClick={() => setMenuState("coffee")}
          active={menuState === "coffee"}
          name="Кофе"
          image={coffeeImg}
        />
        <div className="line"></div>
        <MenuCategoryButton
          onClick={() => setMenuState("tea")}
          active={menuState === "tea"}
          name="Чай"
          image={teaImg}
        />
        <div className="line"></div>

        <MenuCategoryButton
          onClick={() => setMenuState("milk")}
          active={menuState === "milk"}
          name="Молочный коктейл"
          image={milkShakeImg}
        />
        <div className="line"></div>

        <MenuCategoryButton
          onClick={() => setMenuState("sparkling")}
          active={menuState === "sparkling"}
          name="Морсы и газ. напитки"
          image={sparklingImg}
        />
      </div>

      {menuState === "coffee" && <Category name="Кофе" circleColor="#f0ccb9" triangleLeftMargin="8%" />}
      {menuState === "tea" && <Category name="Чай" circleColor="#CAEA94"  triangleLeftMargin="32.5%" />}
      {menuState === "milk" && <Category name="Молочный коктейл" circleColor="#F9ECD2" triangleLeftMargin="57.5%" />}
      
      {menuState === "sparkling" && <Category name="Морсы и газ. напитки" circleColor="#FFE664" triangleLeftMargin="82%" />}
    </div>
  );
}
