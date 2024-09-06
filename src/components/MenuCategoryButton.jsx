import "../styles/MenuCategoryButton.css";

const MenuCategoryButton = ({ active, name, image, onClick }) => (
  <button
    className={"menuCategoryButton" + (active ? " active" : "")}
    onClick={onClick}
  >
    <img
      className="menuCategoryButtonImage"
      src={image}
      alt="Фотография напитка"
    />
    <p className="menuCategoryButtonName">{name}</p>
    {active && <div className="menuCategoryButtonCircle" />}
  </button>
);

export default MenuCategoryButton;
