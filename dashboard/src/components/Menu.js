import axios from "axios";
import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setselectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setselectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const handleLogout = async () => {
    try {
      await axios.get("/logout",{
        withCredentials: true,
      });

      window.location.href = "http://localhost:3000";
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="menu-container">
      <img src="10_kite-logo.svg" alt="" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <button
          onClick={handleLogout}
          style={{
            marginTop: "10px",
            padding: "6px 12px",
            cursor: "pointer",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#f6465d",
            color: "white",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Menu;
