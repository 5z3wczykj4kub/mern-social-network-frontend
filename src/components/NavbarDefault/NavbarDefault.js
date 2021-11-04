import Logo from '../Navbar/Logo/Logo';

import classes from './NavbarDefault.module.scss';

function NavbarDefault() {
  return (
    <nav className={classes.navbarDefault}>
      <Logo />
    </nav>
  );
}

export default NavbarDefault;
