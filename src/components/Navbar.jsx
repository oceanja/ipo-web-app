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

      {/* Right side */}
      <div className="navbar-right">
        <div className="navbar-user">
          <div className="navbar-avatar">V</div>
          <span className="navbar-username">Hi, Vishal</span>
          <FontAwesomeIcon icon={faChevronDown} className="dropdown-icon" />
        </div>

        <div className="navbar-bell">
          <FontAwesomeIcon icon={faBell} />
          <span className="notification-dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
