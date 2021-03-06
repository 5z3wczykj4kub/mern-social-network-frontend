import { useSelector } from 'react-redux';

import { Route, Redirect } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
  const { isAuth } = useSelector(({ authProfile }) => authProfile);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
