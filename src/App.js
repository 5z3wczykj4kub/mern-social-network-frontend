import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import NavbarDefault from './components/NavbarDefault/NavbarDefault';
import NavbarDesktop from './components/NavbarDesktop/NavbarDesktop';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import useNavbar from './hooks/useNavbar';
import DetailedPost from './pages/DetailedPost/DetailedPost';
import Home from './pages/Home/Home';
import Preload from './pages/Preload/Preload';
import Profile from './pages/Profile/Profile';
import SignIn from './pages/SignIn/SignIn';
import { getAuthUser } from './redux/authProfileSlice';
import { closeNavbar } from './redux/navbarSlice';

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

  // Close navbar on page change.
  const { pathname } = useLocation();
  useEffect(() => dispatch(closeNavbar()), [dispatch, pathname]);

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
        <Route path='/' exact>
          <Redirect to='/posts' />
        </Route>
        <Route path='/signin' exact>
          {!isAuth ? <SignIn /> : <Redirect to='/' />}
        </Route>
        <PrivateRoute path='/posts' exact>
          <Home />
        </PrivateRoute>
        <PrivateRoute path='/posts/:postId' exact>
          <DetailedPost />
        </PrivateRoute>
        <PrivateRoute path='/profiles/:profileId'>
          <Profile />
        </PrivateRoute>
      </Switch>
    </>
  );
}

export default App;
