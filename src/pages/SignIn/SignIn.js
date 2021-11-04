import { useEffect } from 'react';

import NavbarDefault from '../../components/NavbarDefault/NavbarDefault';
import SignInForm from '../../components/SignInForm/SignInForm';

import classes from './SignIn.module.scss';

function SignIn() {
  useEffect(() => {
    document.body.classList.add('whiteBackgroundColor');
    return () => document.body.classList.remove('whiteBackgroundColor');
  }, []);

  return (
    <main className={classes.signIn}>
      <NavbarDefault />
      <SignInForm />
    </main>
  );
}

export default SignIn;
