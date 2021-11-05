import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { getAuthUser } from './redux/profileSlice';

import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';

function App() {
  const { isAuth } = useSelector(({ profile }) => profile);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return;
    dispatch(getAuthUser(token));
  }, [dispatch]);

  return (
    <Router>
      <Switch>
        <Route path="/signin" exact>
          {!isAuth ? <SignIn /> : <Redirect to="/" />}
        </Route>
        <Route path="/" exact>
          {isAuth ? <Home /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
