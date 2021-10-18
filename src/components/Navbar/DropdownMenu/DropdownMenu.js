import { useState, useRef, useEffect } from 'react';

import Search from '../Search/Search';
import SearchList from '../SearchList/SearchList';
import NavbarControls from '../NavbarControls/NavbarControls';

import classes from './DropdownMenu.module.scss';

function DropdownMenu() {
  const dropdownMenuRef = useRef();
  const [timer, setTimer] = useState(null);
  const [users, setUsers] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [isSearchEmpty, setIsSearchEmpty] = useState(true);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [dropdownMenuHeight, setDropdownMenuHeight] = useState(null);

  useEffect(() => {
    setDropdownMenuHeight(dropdownMenuRef.current.clientHeight);
  }, []);

  function onInputHandler(event) {
    clearTimeout(timer);
    const inputValue = event.target.value.trim();
    if (inputValue.length === 0) {
      setIsSearchEmpty(true);
      setIsTyping(false);
      setUsers([]);
      return;
    }
    setIsTyping(true);
    setIsSearchEmpty(false);
    const timerId = setTimeout(async () => {
      const res = await fetch(`/users?query=${encodeURI(inputValue)}`);
      const users = await res.json();
      setUsers(users);
      setIsTyping(false);
    }, 1000);
    setTimer(timerId);
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
      {isSearchFocused && (
        <SearchList
          isLoading={isTyping}
          isSearchEmpty={isSearchEmpty}
          users={users}
        />
      )}
    </div>
  );
}

export default DropdownMenu;
