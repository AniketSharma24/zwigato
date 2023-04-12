import React from 'react';
import ReactDOM from 'react-dom/client';
import ToolBarComponent from '../Toolbar';
import BodyComponent from '../Body';
import FooterComponent from '../Footer';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import RouteError from '../RouteError';
import About from '../About';
import Help from '../Help';
import RestaurantDetails from '../RestaurantDetails';
import AboutClass from '../AboutClass';
import ProfileClass from '../ProfileClass';
import Cart from '../Cart';

const AppLayout = () => {
  return (
    <>
      <ToolBarComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <RouteError />,
    children: [
      {
        path: '/',
        element: <BodyComponent />,
      },
      {
        path: '/about',
        element: <AboutClass />,
      },
      {
        path: '/help',
        element: <Help />,
      },
      {
        path: '/profile',
        element: <ProfileClass />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: 'restaurant/:resId',
        element: <RestaurantDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={router} />);
