import { useHistory } from 'react-router';

import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/profileSlice';

import classes from './SignInForm.module.scss';

function SignInForm() {
  const dispatch = useDispatch();

  const history = useHistory();

  function submitHanlder(event) {
    event.preventDefault();
    dispatch(signIn());
    history.push('/');
  }

  return (
    <form className={classes.signInForm} onSubmit={submitHanlder}>
      <p>Connect with people from all around the world!</p>
      <input id="email" type="email" placeholder="Email" autoComplete="off" />
      <input id="password" type="password" placeholder="Password" />
      <button>Sign In</button>
      <p>
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </form>
  );
}

export default SignInForm;
