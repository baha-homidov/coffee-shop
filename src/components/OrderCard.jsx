import "../styles/OrderCard.css";
import rubleIcon from "../assets/icons/rubleIcon.svg";
import back from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
import GenericButton from "./GenericButton";

export default function OrderCard({
  name,
  price,
  size,
  syrupType,
  syrupSize,
  bonus,
  img,
}) {
  const navigate = useNavigate();

  return (
    <div className="order-card">
      <img src={img} alt={name} className="product-img" />
      <div className="info-container">
        <div className="name">{name}</div>
        <div className="price">{price}₽</div>
        <div className="size">{size}мл</div>
        <div className="syrup">
          {syrupType} сироп {syrupSize} гр.
        </div>
        <div className="bonus-container">
          <img src={rubleIcon} alt="" />
          <div className="text"> + {bonus} бонусов</div>
        </div>
      </div>
      <div className="button-container">
        <div className="yellow-button-wrapper">
          <GenericButton
            name={"Повторить"}
            onClick={() => {
              navigate("/menu");
            }}
          />
        </div>
        <div className="white-button-wrapper">
          <GenericButton
            name={"Редактировать"}
            onClick={() => {
              navigate("/menu");
            }}
          />
        </div>
      </div>
    </div>
  );
}
