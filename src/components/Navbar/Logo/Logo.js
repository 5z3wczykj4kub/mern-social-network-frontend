import logo from '../../../assets/logo.png';

import classes from './Logo.module.scss';

function Logo() {
  return (
    <div className={classes.logo}>
      <p>
        SOCIA<b>L</b>IZE
      </p>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
