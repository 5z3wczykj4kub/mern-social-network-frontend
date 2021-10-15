import logo from '../../assets/paper-plane.png';

import classes from './Logo.module.scss';

function Logo() {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="MERN Logo" />
      <p>
        <span>Social</span>
        <span>Network</span>
      </p>
    </div>
  );
}

export default Logo;
