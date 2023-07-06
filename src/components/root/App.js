import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import BodyComponent from '../Body';
import Cart from '../Cart';
import FooterComponent from '../Footer';
import Help from '../Help';
import ProfileClass from '../ProfileClass';
import RestaurantDetails from '../RestaurantDetails';
import RouteError from '../RouteError';
import ToolBarComponent from '../Toolbar';

const About = lazy(() => import('../About'));

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
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
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
