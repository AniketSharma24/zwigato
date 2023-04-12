import iconLogo from '../../assets/logo/iconLogo.png';
import {
  LifebuoyIcon,
  HomeIcon,
  UserIcon,
  ShoppingCartIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const logo = <img className='logo' src={iconLogo} alt='app-logo' />;
const leftSideNav = (
  <div className='left-side-nav'>
    {logo}
    <span>Silicon City, Banglore</span>
  </div>
);
const navList = (
  <ul className='nav-list'>
    <li>
      <NavLink
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? '#f3484b' : '#3d4152',
          };
        }}
        to={'/'}
      >
        <HomeIcon className='hero-icon text-blue-500' />
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? '#f3484b' : '#3d4152',
          };
        }}
        to={'/help'}
      >
        <LifebuoyIcon className='hero-icon text-blue-500' />
        Help
      </NavLink>
    </li>
    <li>
      <NavLink
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? '#f3484b' : '#3d4152',
          };
        }}
        to={'/about'}
      >
        <InformationCircleIcon className='hero-icon text-blue-500' />
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? '#f3484b' : '#3d4152',
          };
        }}
        to={'/profile'}
      >
        <UserIcon className='hero-icon text-blue-500' />
        Profile
      </NavLink>
    </li>
    <li>
      <NavLink
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? '#f3484b' : '#3d4152',
          };
        }}
        to={'/cart'}
      >
        <ShoppingCartIcon className='hero-icon text-blue-500' />
        Cart
      </NavLink>
    </li>
  </ul>
);

const ToolBarComponent = () => {
  return (
    <div className='toolbar'>
      {leftSideNav}
      {navList}
    </div>
  );
};

export default ToolBarComponent;
