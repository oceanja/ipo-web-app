import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faChevronDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Search box */}
      <div className="navbar-search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input
          type="text"
          placeholder="Search"
          className="navbar-search"
        />
      </div>

        <div className="navbar-bell">
          <FontAwesomeIcon icon={faBell} />
          <span className="notification-dot"></span>
        </div>
      </div>
  );
};

export default Navbar;
