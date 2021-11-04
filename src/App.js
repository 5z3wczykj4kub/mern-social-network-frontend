import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import SignIn from './pages/SignIn/SignIn';
import Home from './pages/Home/Home';

function App() {
  const { isAuth } = useSelector(({ profile }) => profile);

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
