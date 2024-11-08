import { useState } from "react";
import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  const [selected, setSelected] = useState("");

  const handleButtonClick = (value) => {
    setSelected(value);
    handleClick(value);
  };

  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button
            onClickHandler={handleButtonClick}
            value=""
            title="All Products"
            className={selected === "" ? "selected" : ""}
          />
          <Button
            onClickHandler={handleButtonClick}
            value="Nike"
            title="Nike"
            className={selected === "Nike" ? "selected" : ""}
          />
          <Button
            onClickHandler={handleButtonClick}
            value="Adidas"
            title="Adidas"
            className={selected === "Adidas" ? "selected" : ""}
          />
          <Button
            onClickHandler={handleButtonClick}
            value="Puma"
            title="Puma"
            className={selected === "Puma" ? "selected" : ""}
          />
          <Button
            onClickHandler={handleButtonClick}
            value="Vans"
            title="Vans"
            className={selected === "Vans" ? "selected" : ""}
          />
        </div>
      </div>
    </>
  );
};

export default Recommended;
