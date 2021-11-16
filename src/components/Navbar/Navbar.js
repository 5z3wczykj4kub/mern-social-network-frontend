import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';
import { closeDropdownMenu, cleanupNavbar } from '../../redux/navbarSlice';

import Logo from './Logo/Logo';
import Toggler from './Toggler/Toggler';
import Backdrop, { backdropClassNames } from '../Backdrop/Backdrop';
import DropdownMenu, {
  dropdownMenuClassNames,
} from './DropdownMenu/DropdownMenu';

import classes from './Navbar.module.scss';

function Navbar() {
  const { isDropdownMenuOpen } = useSelector(({ navbar }) => navbar);
  const dispatch = useDispatch();

  useEffect(() => () => dispatch(cleanupNavbar()), [dispatch]);

  return (
    <>
      <nav className={classes.navbar}>
        <Link to="/posts">
          <Logo />
        </Link>
        <Toggler />
      </nav>
      <CSSTransition
        in={isDropdownMenuOpen}
        timeout={400}
        classNames={backdropClassNames(true)}
        mountOnEnter
        unmountOnExit
      >
        <Backdrop onClick={() => dispatch(closeDropdownMenu())} />
      </CSSTransition>
      <CSSTransition
        in={isDropdownMenuOpen}
        timeout={400}
        classNames={dropdownMenuClassNames()}
        mountOnEnter
        unmountOnExit
      >
        <DropdownMenu />
      </CSSTransition>
    </>
  );
}

export default Navbar;
