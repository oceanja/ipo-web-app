import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faList,
  faClipboard,
  faDownload,
  faCog,
  faPlug,
  faUser,
  faQuestionCircle
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/images/logo1.jpeg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src={logo} alt="Bluestock Logo" className="sidebar-logo" />
        <span className="sidebar-title">Bluestock Fintech</span>
      </div>

      <ul className="menu-section">
        <li>
          <NavLink to="/admin-dashboard" activeclassname="active">
            <FontAwesomeIcon icon={faChartBar} />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/manage-ipo" activeclassname="active">
            <FontAwesomeIcon icon={faList} />
            <span>Manage IPO</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/ipo-subscription" activeclassname="active">
            <FontAwesomeIcon icon={faClipboard} />
            <span>IPO Subscription</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/ipo-allotment" activeclassname="active">
            <FontAwesomeIcon icon={faDownload} />
            <span>IPO Allotment</span>
          </NavLink>
        </li>
      </ul>

      <div className="menu-heading">OTHERS</div>

      <ul className="menu-section">
        <li>
          <NavLink to="/settings" activeclassname="active">
            <FontAwesomeIcon icon={faCog} />
            <span>Settings</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/api-manager" activeclassname="active">
            <FontAwesomeIcon icon={faPlug} />
            <span>API Manager</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/accounts" activeclassname="active">
            <FontAwesomeIcon icon={faUser} />
            <span>Accounts</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" activeclassname="active">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span>Help</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
