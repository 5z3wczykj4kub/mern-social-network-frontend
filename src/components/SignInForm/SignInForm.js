import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { signIn } from '../../redux/authProfileSlice';

import Spinner from '../Spinner/Spinner';

import classes from './SignInForm.module.scss';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const authStatus = useSelector(({ authProfile }) => authProfile.authStatus);
  const dispatch = useDispatch();

  function submitHanlder(event) {
    event.preventDefault();
    setShowErrorMessage(false);
    dispatch(signIn(email, password));
  }

  // Current input validation. Use Formik in the future.
  function isButtonDisabled() {
    const passwordMinLength = 6;
    return !(
      validateEmail(email) &&
      email.length > 0 &&
      password.length >= passwordMinLength &&
      authStatus !== 'pending'
    );
  }

  useEffect(() => {
    if (authStatus === 'rejected') setShowErrorMessage(true);
  }, [authStatus]);

  return (
    <form className={classes.signInForm} onSubmit={submitHanlder}>
      {showErrorMessage ? (
        <p className={classes.errorMessage}>Incorrect email or password</p>
      ) : authStatus === 'pending' ? (
        <p>Signing in, please wait...</p>
      ) : (
        <p>Connect with people from all around the world!</p>
      )}
      <input
        type="email"
        placeholder="Email"
        autoComplete="off"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button disabled={isButtonDisabled()}>
        {authStatus === 'pending' ? (
          <>
            <span>Signing in</span>
            <Spinner className={classes.spinner} />
          </>
        ) : (
          <span>Sign in</span>
        )}
      </button>
      <p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </form>
  );
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default SignInForm;
