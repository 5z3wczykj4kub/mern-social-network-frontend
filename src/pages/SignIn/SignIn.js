import { useEffect } from 'react';

import SignInForm from '../../components/SignInForm/SignInForm';

import classes from './SignIn.module.scss';

function SignIn() {
  useEffect(() => {
    document.body.classList.add('whiteBackgroundColor');
    return () => document.body.classList.remove('whiteBackgroundColor');
  }, []);

  return (
    <main className={classes.signIn}>
      <SignInForm />
    </main>
  );
}

export default SignIn;
