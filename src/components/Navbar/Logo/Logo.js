import logo from '../../../assets/logo.png';

import classes from './Logo.module.scss';

function Logo(props) {
  return (
    <div className={`${classes.logo} ${props.className}`}>
      <p>
        SOCIA<b>L</b>IZE
      </p>
      <img src={logo} alt="logo" />
    </div>
  );
}

export default Logo;
