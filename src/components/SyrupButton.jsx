import "../styles/SyrupButton.css";

export default function SyrupButton({ syrupState, setSyrupState, name }) {
  return (
    <div className="syrup-button">
      <div className="name">{name}</div>
      <div className="control-container">
        <button
          onClick={() => {
            if (syrupState > 0) setSyrupState(syrupState - 1);
          }}
        >
          -
        </button>
        <div className="syrup-amount">{syrupState} гр.</div>
        <button className="plus" onClick={() => setSyrupState(syrupState + 1)}>+</button>
      </div>
    </div>
  );
}
