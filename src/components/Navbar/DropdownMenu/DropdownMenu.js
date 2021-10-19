import { useRef, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { calcDropdownMenuHeight } from '../../../redux/navbarSlice';

import Search from '../Search/Search';
import SearchList from '../SearchList/SearchList';
import NavbarControls from '../NavbarControls/NavbarControls';

import classes from './DropdownMenu.module.scss';

function DropdownMenu() {
  const dropdownMenuRef = useRef();

  const { dropdownMenuHeight, isSearchFocused } = useSelector(
    ({ navbar }) => navbar
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calcDropdownMenuHeight(dropdownMenuRef.current.clientHeight));
  }, [dispatch]);

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
      <Search />
      {!isSearchFocused && <NavbarControls />}
      {isSearchFocused && <SearchList />}
    </div>
  );
}

export default DropdownMenu;
