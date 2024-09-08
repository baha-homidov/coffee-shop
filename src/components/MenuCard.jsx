import "../styles/MenuCard.css";

const MenuCard = ({ image, name, price }) => (
  <div className="menu-card">
    <img className="menu-card-image" src={image} alt={name} />
    <div className="menu-card-name">{name}</div>
    <div className="price">
      <p className="from">от</p>
      <p className="number">{price}₽</p>
    </div>
  </div>
);

export default MenuCard;
