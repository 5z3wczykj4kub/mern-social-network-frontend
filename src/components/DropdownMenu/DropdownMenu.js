import { useState, useRef, useEffect } from 'react';

import Search from '../Search/Search';
import NavbarControls from '../NavbarControls/NavbarControls';

import classes from './DropdownMenu.module.scss';

function DropdownMenu() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [dropdownMenuHeight, setDropdownMenuHeight] = useState(null);
  const dropdownMenuRef = useRef();

  // search
  // notifications
  // profile
  // add post
  // settings
  // log out

  useEffect(() => {
    setDropdownMenuHeight(dropdownMenuRef.current.clientHeight);
  }, []);

  function style() {
    return {
      height:
        isSearchFocused && dropdownMenuHeight
          ? 'calc(100vh - 3.5rem)'
          : dropdownMenuHeight,
    };
  }

  return (
    <div className={classes.dropdownMenu} style={style()} ref={dropdownMenuRef}>
      <Search
        isFocused={isSearchFocused}
        onFocus={() => setIsSearchFocused(true)}
        onBlur={() => setIsSearchFocused(false)}
      />
      {!isSearchFocused && <NavbarControls />}
      {isSearchFocused && (
        <ul>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
          <li>lorem ipsum</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;
