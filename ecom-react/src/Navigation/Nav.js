import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import AppURL from "../context/AppContext";
import "./Nav.css";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Search."
        />
      </div>
      <div className="profile-container">
        <a href={AppURL}>
          <FiHeart className="nav-icons" />
        </a>
        <a href={AppURL}>
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href={AppURL}>
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
