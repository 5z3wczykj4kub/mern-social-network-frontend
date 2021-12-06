import { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';
import { getAuthUser } from './redux/profileSlice';
import { closeLikeDrawer } from './redux/likeDrawerSlice';

import Preload from './pages/Preload/Preload';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import User from './pages/User/User';

import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar/Navbar';
import NavbarDesktop from './components/NavbarDesktop/NavbarDesktop';
import NavbarDefault from './components/NavbarDefault/NavbarDefault';
import DetailedPost from './pages/DetailedPost/DetailedPost';
import Backdrop, { backdropClassNames } from './components/Backdrop/Backdrop';
import LikeDrawer, {
  likeDrawerClassNames,
} from './components/Post/LikeDrawer/LikeDrawer';

import useNavbar from './hooks/useNavbar';

import classes from './App.module.scss';

function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  const { isAuth } = useSelector(({ profile }) => profile);
  const { isOpen } = useSelector(({ likeDrawer }) => likeDrawer);
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
          <User />
        </PrivateRoute>
      </Switch>
      <>
        <CSSTransition
          in={isOpen}
          timeout={200}
          classNames={backdropClassNames()}
          mountOnEnter
          unmountOnExit
        >
          <Backdrop
            className={classes.likeDrawerBackdrop}
            onClick={() => dispatch(closeLikeDrawer())}
          />
        </CSSTransition>
        <CSSTransition
          in={isOpen}
          timeout={200}
          classNames={likeDrawerClassNames()}
          mountOnEnter
          unmountOnExit
        >
          <LikeDrawer />
        </CSSTransition>
      </>
    </>
  );
}

export default App;
