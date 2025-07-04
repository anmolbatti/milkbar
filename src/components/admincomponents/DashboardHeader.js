import React from "react";
import { useNavigate, Link } from "react-router-dom";

function DashboardHeader({ onLogout }) {
  const navigate = useNavigate();
  const handleLogoutClick = () => {
    onLogout();
    navigate("/admin/login");
  };
  return (
    <nav className="dashboard-nav">
      <ul className="main-nav">
        <li>
          <Link to="/admin/dashboard">
            <span className="fa fa-home"></span>
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/projects">
          <span class="fas fa-project-diagram"></span>
            Projects
          </Link>
        </li>

        <li>
          <Link to="/admin/tabs">
          <span class="fas fa-project-diagram"></span>
            Tabs
          </Link>
        </li>
        <li>
          <a onClick={handleLogoutClick} className="logout-btn">
            <span className="fa fa-sign-out"></span>
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default DashboardHeader;
