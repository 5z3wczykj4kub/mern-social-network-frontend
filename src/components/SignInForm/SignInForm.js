import { useRef } from 'react';

import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/profileSlice';

import classes from './SignInForm.module.scss';

function SignInForm() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();

  function submitHanlder(event) {
    event.preventDefault();
    dispatch(signIn(emailRef.current.value, passwordRef.current.value));
  }

  return (
    <form className={classes.signInForm} onSubmit={submitHanlder}>
      <p>Connect with people from all around the world!</p>
      <input
        ref={emailRef}
        type="email"
        placeholder="Email"
        autoComplete="off"
      />
      <input ref={passwordRef} type="password" placeholder="Password" />
      <button>Sign In</button>
      <p>
        Don't have an account? <a href="#">Sign up</a>
      </p>
    </form>
  );
}

export default SignInForm;
