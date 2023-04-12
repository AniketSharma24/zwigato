import { NavLink, useRouteError } from 'react-router-dom';

const RouteError = () => {
  let error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Oops! you have provided wrong path</h1>
      <h3>
        Go back to{' '}
        <NavLink
          to={'/'}
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? 'bold' : '',
              color: isPending ? 'green' : 'red',
            };
          }}
        >
          home
        </NavLink>
      </h3>
    </div>
  );
};

export default RouteError;
