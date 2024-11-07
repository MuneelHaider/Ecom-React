import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import { GiConverseShoe } from "react-icons/gi";


const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1><a href="#"><GiConverseShoe /></a></h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
