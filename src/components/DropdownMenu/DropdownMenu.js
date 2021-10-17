import { useState, useRef, useEffect } from 'react';

import Search from '../Search/Search';
import SearchList from '../SearchList/SearchList';
import NavbarControls from '../NavbarControls/NavbarControls';

import classes from './DropdownMenu.module.scss';

function DropdownMenu() {
  const dropdownMenuRef = useRef();
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [dropdownMenuHeight, setDropdownMenuHeight] = useState(null);

  useEffect(() => {
    setDropdownMenuHeight(dropdownMenuRef.current.clientHeight);
  }, []);

  useEffect(() => {
    if (inputValue.length > 0) setIsTyping(true);
    const id = setTimeout(() => setIsTyping(false), 1000);
    return () => clearTimeout(id);
  }, [inputValue]);

  function onInputHandler(event) {
    setInputValue(event.target.value.trim());
  }

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
        onBlur={() => setIsSearchFocused(false)}
        onFocus={() => setIsSearchFocused(true)}
        onInput={onInputHandler}
      />
      {!isSearchFocused && <NavbarControls />}
      {isSearchFocused && <SearchList isLoading={isTyping} />}
    </div>
  );
}

export default DropdownMenu;
