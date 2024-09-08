import "../styles/CoffeeCategory.css";
import americano from "../assets/drinks/americano.webp";
import capuccino from "../assets/drinks/capuccino.webp";
import espresso from "../assets/drinks/espresso.webp";
import doubleEspresso from "../assets/drinks/doubleEspresso.webp";
import latte from "../assets/drinks/latte.webp";
import machiato from "../assets/drinks/machiato.webp";
import triangle from "../assets/triangle.svg";
import coffeeCategoryBackground from "../assets/coffeeCategoryBackground.svg";
import MenuCard from "./MenuCard";

const Category = ({name, circleColor, triangleLeftMargin}) => (
  <div className="coffee-category" >
    <div className="triangle" style={{left: triangleLeftMargin}}></div>
    <div className="header">
      <h1 className="title">{name}</h1>
      <div className="circle" style={{ backgroundColor: circleColor }} ></div>
    </div>
    <div className="menu-category">
      <MenuCard image={espresso} name="Эспрессо" price="100" />
      <MenuCard image={doubleEspresso} name="Эспрессо" price="150" />
      <MenuCard image={americano} name="Американо" price="120" />
      <MenuCard image={latte} name="Латте" price="150" />
      <MenuCard image={capuccino} name="Капучино" price="150" />
      <MenuCard image={machiato} name="Макиато" price="150" />
    </div>
  </div>
);

export default Category;
