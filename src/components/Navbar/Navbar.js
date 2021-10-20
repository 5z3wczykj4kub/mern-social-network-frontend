import { useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';

import { useSelector, useDispatch } from 'react-redux';
import { closeDropdownMenu } from '../../redux/navbarSlice';

import Logo from './Logo/Logo';
import Toggler from './Toggler/Toggler';
import Backdrop from '../Backdrop/Backdrop';
import DropdownMenu from './DropdownMenu/DropdownMenu';

import dropdownMenuClasses from './DropdownMenu/DropdownMenu.module.scss';
import backdropClasses from '../Backdrop/Backdrop.module.scss';
import classes from './Navbar.module.scss';

function Navbar() {
  const { isDropdownMenuOpen } = useSelector(({ navbar }) => navbar);
  const dispatch = useDispatch();

  useEffect(
    () =>
      isDropdownMenuOpen
        ? (document.body.style = 'overflow-y: hidden')
        : (document.body.style = null),
    [isDropdownMenuOpen]
  );

  return (
    <>
      <nav className={classes.navbar}>
        <Logo />
        <Toggler />
      </nav>
      <CSSTransition
        in={isDropdownMenuOpen}
        timeout={400}
        classNames={dropdownMenuClassNames()}
        mountOnEnter
        unmountOnExit
      >
        <DropdownMenu />
      </CSSTransition>
      <CSSTransition
        in={isDropdownMenuOpen}
        timeout={400}
        classNames={backdropClassNames()}
        mountOnEnter
        unmountOnExit
      >
        <Backdrop onClick={() => dispatch(closeDropdownMenu())} />
      </CSSTransition>
    </>
  );
}

function dropdownMenuClassNames() {
  return {
    enter: dropdownMenuClasses.dropdownMenuEnter,
    enterActive: dropdownMenuClasses.dropdownMenuEnterActive,
    exit: dropdownMenuClasses.dropdownMenuExit,
    exitActive: dropdownMenuClasses.dropdownMenuExitActive,
  };
}

function backdropClassNames() {
  return {
    enter: backdropClasses.backdropEnter,
    enterActive: backdropClasses.backdropEnterActive,
    exit: backdropClasses.backdropExit,
    exitActive: backdropClasses.backdropExitActive,
  };
}

export default Navbar;
