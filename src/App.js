import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getAuthUser } from './redux/authProfileSlice';

import Preload from './pages/Preload/Preload';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Navbar from './components/Navbar/Navbar';
import NavbarDesktop from './components/NavbarDesktop/NavbarDesktop';
import NavbarDefault from './components/NavbarDefault/NavbarDefault';
import DetailedPost from './pages/DetailedPost/DetailedPost';

import useNavbar from './hooks/useNavbar';

function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  const { isAuth } = useSelector(({ authProfile }) => authProfile);
  const { isNavbarDesktopUsed } = useSelector(({ navbar }) => navbar);

  const dispatch = useDispatch();

  useNavbar();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setIsPreloading(false);
      return;
    }
    dispatch(getAuthUser(token));
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) setIsPreloading(false);
  }, [isAuth]);

  if (isPreloading) return <Preload />;

  return (
    <>
      {!isAuth ? (
        <NavbarDefault />
      ) : isNavbarDesktopUsed ? (
        <NavbarDesktop />
      ) : (
        <Navbar />
      )}
      <Switch>
        <Route path="/" exact>
          <Redirect to="/posts" />
        </Route>
        <Route path="/signin" exact>
          {!isAuth ? <SignIn /> : <Redirect to="/" />}
        </Route>
        <PrivateRoute path="/posts" exact>
          <Home />
        </PrivateRoute>
        <PrivateRoute path="/posts/:postId" exact>
          <DetailedPost />
        </PrivateRoute>
        <PrivateRoute path="/profiles/:profileId" exact>
          <Profile />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
