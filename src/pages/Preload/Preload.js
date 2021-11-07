import { useEffect } from 'react';

import classes from './Preload.module.scss';

import Logo from '../../components/Navbar/Logo/Logo';

function Preload() {
  useEffect(() => {
    document.body.classList.add('whiteBackgroundColor');
    return () => document.body.classList.remove('whiteBackgroundColor');
  }, []);

  return (
    <div className={classes.preload}>
      <Logo className={classes.logo} />
    </div>
  );
}

export default Preload;
