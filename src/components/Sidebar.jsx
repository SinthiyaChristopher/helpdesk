import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">WORKSPACE</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/alltickets">All Tickets</Link>
        </li>
        <li>
          <Link to="/tickets">Create Ticket</Link>
        </li>
      </ul>

      <div className="sidebar-footer">
        <p className="help-text">Need help?</p>
        <p className="help-sub">Contact your support administrator</p>
        <div className="profile">
          <span className="profile-name">Support Admin</span>
          <span className="profile-role">Administrator</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;