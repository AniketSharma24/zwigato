import iconLogo from "../../assets/logo/iconLogo.png";
import {
  LifebuoyIcon,
  HomeIcon,
  UserIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const logo = <img className="logo" src={iconLogo} alt="app-logo" />;
const leftSideNav = (
  <div className="left-side-nav">
    {logo}
    <span>Silicon City, Banglore</span>
  </div>
);
const navList = (
  <ul className="nav-list">
    <li>
      {" "}
      <HomeIcon className="hero-icon text-blue-500" />
      Home
    </li>
    <li>
      <LifebuoyIcon className="hero-icon text-blue-500" />
      Help
    </li>
    <li>
      <UserIcon className="hero-icon text-blue-500" />
      Profile
    </li>
    <li>
      <ShoppingCartIcon className="hero-icon text-blue-500" />
      Cart
    </li>
  </ul>
);

const ToolBarComponet = () => {
  return (
    <div className="toolbar">
      {leftSideNav}
      {navList}
    </div>
  );
};

export default ToolBarComponet;
