import "../styles/PayButton.css";



export default function PayButton({ onClick, price }) {
  return (
    <button className="pay-button" onClick={onClick}>
      <div className="text">Оплатить</div>
      <div className="price">{price}₽</div>
    </button>
  );
}
