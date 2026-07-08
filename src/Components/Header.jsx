import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/thumbnails/011/874/816/small/chef-logo-design-illustration-restaurant-logo-vector.jpg"
          alt="Logo"
        />
      </div>

      <div className="nav-items">
        <ul>
         <li>{isOnline ? "✅ Online" : "❌ Offline"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/cart">Cart</Link>
          </li>

          <button
            className="login-btn"
            onClick={() =>
              setBtnName(btnName === "Login" ? "Logout" : "Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;