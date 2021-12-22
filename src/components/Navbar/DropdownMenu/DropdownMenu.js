import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanupSearch } from '../../../redux/navbarSlice';
import NavbarControls from '../NavbarControls/NavbarControls';
import Search from '../Search/Search';
import SearchList from '../SearchList/SearchList';
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

export const dropdownMenuClassNames = () => ({
  enter: classes.dropdownMenuEnter,
  enterActive: classes.dropdownMenuEnterActive,
  exit: classes.dropdownMenuExit,
  exitActive: classes.dropdownMenuExitActive,
});

export default DropdownMenu;
