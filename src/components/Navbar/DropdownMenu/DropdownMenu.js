import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { cleanupSearch } from '../../../redux/navbarSlice';

import Search from '../Search/Search';
import SearchList from '../SearchList/SearchList';
import NavbarControls from '../NavbarControls/NavbarControls';

import classes from './DropdownMenu.module.scss';

function DropdownMenu() {
  const { isSearchListVisible } = useSelector(({ navbar }) => navbar);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(cleanupSearch());
  }, [dispatch]);

  function className() {
    return isSearchListVisible
      ? `${classes.dropdownMenu} ${classes.dropdownMenuExpanded}`
      : classes.dropdownMenu;
  }

  return (
    <div className={className()}>
      <Search />
      {!isSearchListVisible && <NavbarControls />}
      {isSearchListVisible && <SearchList />}
    </div>
  );
}

export default DropdownMenu;
