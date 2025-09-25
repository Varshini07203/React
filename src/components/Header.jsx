import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img className="logo" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Menu</li>
          <li>About us</li>
          <li>Login</li>
          <li>🛒</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
