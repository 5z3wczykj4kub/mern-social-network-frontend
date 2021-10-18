import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import Logo from './Logo/Logo';
import Toggler from './Toggler/Toggler';
import Backdrop from '../Backdrop/Backdrop';
import DropdownMenu from './DropdownMenu/DropdownMenu';

import dropdownMenuClasses from './DropdownMenu/DropdownMenu.module.scss';
import backdropClasses from '../Backdrop/Backdrop.module.scss';
import classes from './Navbar.module.scss';

function Navbar() {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  function toggleDropdownMenuHandler() {
    setIsDropdownMenuOpen((prevIsDropdownMenuOpen) => !prevIsDropdownMenuOpen);
  }

  function closeDropdownMenuHandler() {
    setIsDropdownMenuOpen(false);
  }

  return (
    <>
      <nav className={classes.navbar}>
        <Logo />
        <Toggler
          isToggled={isDropdownMenuOpen}
          onClick={toggleDropdownMenuHandler}
        />
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
        <Backdrop onClick={closeDropdownMenuHandler} />
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
