import { LOGO_URL } from "../utils/contants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="YOUR_IMAGE_SRC_HERE" alt="Logo" />
      </div>

      <div className="nav-items">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};
export default Header;