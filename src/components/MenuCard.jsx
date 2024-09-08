import "../styles/MenuCard.css";

const MenuCard = ({ image, name, price, onclick }) => (
  <button onClick={onclick} className="menu-card">
    <img className="menu-card-image" src={image} alt={name} />
    <div className="menu-card-name">{name}</div>
    <div className="price">
      <p className="from">от</p>
      <p className="number">{price}₽</p>
    </div>
  </button>
);

export default MenuCard;
