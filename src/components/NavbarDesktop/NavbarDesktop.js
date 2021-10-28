import NavbarDesktopControls from './NavbarDesktopControls/NavbarDesktopControls';
import Logo from '../Navbar/Logo/Logo';

import classes from './NavbarDesktop.module.scss';

function NavbarDesktop() {
  return (
    <nav className={classes.navbarDesktop}>
      <Logo />
      <NavbarDesktopControls />
    </nav>
  );
}

export default NavbarDesktop;
