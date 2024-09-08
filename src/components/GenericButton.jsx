
import "../styles/GenericButton.css";

export default function GenericButton({ onClick, name }) {
  return (
    <button className="generic-button" onClick={onClick}>
      {name}
    </button>
  );
}
