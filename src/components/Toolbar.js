import {
  HomeIcon,
  InformationCircleIcon,
  LifebuoyIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import iconLogo from '../../assets/logo/iconLogo.png';
import UserContext from '../constants/UserContext';

const logo = <img className='w-12 h-10' src={iconLogo} alt='app-logo' />;

const leftSideNav = (
  <div className='flex items-center justify-center gap-5 text-sm'>
    {logo}
    <span>Silicon City, Banglore</span>
  </div>
);

const navList = (
  <ul className='flex items-center justify-center gap-5'>
    <li>
      <NavLink
        className='flex items-center justify-center gap-2 flex-row text-sm'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? '#f3484b' : '#3d4152',
          };
        }}
        to={'/'}
      >
        <HomeIcon className='hero-icon w-4 h-4' />
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        className='flex items-center justify-center gap-2 flex-row text-sm'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? '#f3484b' : '#3d4152',
          };
        }}
        to={'/help'}
      >
        <LifebuoyIcon className='hero-icon w-4 h-4' />
        Help
      </NavLink>
    </li>
    <li>
      <NavLink
        className='flex items-center justify-center gap-2 flex-row text-sm'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? '#f3484b' : '#3d4152',
          };
        }}
        to={'/about'}
      >
        <InformationCircleIcon className='hero-icon w-4 h-4' />
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        className='flex items-center justify-center gap-2 flex-row text-sm'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? '#f3484b' : '#3d4152',
          };
        }}
        to={'/profile'}
      >
        <UserIcon className='hero-icon w-4 h-4' />
        Profile
      </NavLink>
    </li>
    <li>
      <NavLink
        className='flex items-center justify-center gap-2 flex-row text-sm'
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? '#f3484b' : '#3d4152',
          };
        }}
        to={'/cart'}
      >
        <ShoppingCartIcon className='hero-icon w-4 h-4' />
        Cart
      </NavLink>
    </li>
  </ul>
);

const ToolBarComponent = () => {
  const { user } = useContext(UserContext);

  console.log(user);

  return (
    <div className='flex items-center justify-between px-12 py-3 shadow-sm'>
      {leftSideNav}
      <div>{user?.name}</div>
      {navList}
    </div>
  );
};

export default ToolBarComponent;
