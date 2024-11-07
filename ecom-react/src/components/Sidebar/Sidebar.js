import "./Sidebar.css";
import { BsCartCheckFill } from "react-icons/bs";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

function Sidebar() {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>
            <BsCartCheckFill />
          </h1>
        </div>

        <Category />
        <Price />
        <Colors />
      </section>
    </>
  );
}

export default Sidebar;
