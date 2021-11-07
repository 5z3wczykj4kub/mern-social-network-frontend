import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getAuthUser } from './redux/profileSlice';

import Preload from './pages/Preload/Preload';
import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';
import Comments from './pages/Comments/Comments';

function App() {
  const [isPreloading, setIsPreloading] = useState(true);

  const { isAuth } = useSelector(({ profile }) => profile);
  const dispatch = useDispatch();

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
    <Router>
      <Switch>
        <Route path="/signin" exact>
          {!isAuth ? <SignIn /> : <Redirect to="/" />}
        </Route>
        <Route path="/" exact>
          {isAuth ? <Home /> : <Redirect to="/signin" />}
        </Route>
        <Route path="/comments/:postId" exact>
          {isAuth ? <Comments /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
