import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { cleanupSearch } from '../../../redux/navbarSlice';

import Search from '../Search/Search';
import SearchList from '../SearchList/SearchList';
import NavbarControls from '../NavbarControls/NavbarControls';

import classes from './DropdownMenu.module.scss';

function DropdownMenu() {
  const { isSearchFocused } = useSelector(({ navbar }) => navbar);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(cleanupSearch());
  }, [dispatch]);

  function className() {
    return isSearchFocused
      ? `${classes.dropdownMenu} ${classes.dropdownMenuExpanded}`
      : classes.dropdownMenu;
  }

  return (
    <div className={className()}>
      <Search />
      {!isSearchFocused && <NavbarControls />}
      {isSearchFocused && <SearchList />}
    </div>
  );
}

export default DropdownMenu;
