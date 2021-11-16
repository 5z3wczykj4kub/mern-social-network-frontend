import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { cleanupNavbar } from '../../redux/navbarSlice';

import Search from '../Navbar/Search/Search';
import SearchList from '../Navbar/SearchList/SearchList';
import NavbarDesktopControls from './NavbarDesktopControls/NavbarDesktopControls';
import Logo from '../Navbar/Logo/Logo';

import classes from './NavbarDesktop.module.scss';

function NavbarDesktop() {
  const { isSearchListVisible, isSearchListEmpty } = useSelector(
    ({ navbar }) => navbar
  );
  const dispatch = useDispatch();

  useEffect(() => () => dispatch(cleanupNavbar()), [dispatch]);

  return (
    <nav className={classes.navbarDesktop}>
      <Link to="/posts">
        <Logo />
      </Link>
      <Search />
      {isSearchListVisible && !isSearchListEmpty && <SearchList />}
      <NavbarDesktopControls />
    </nav>
  );
}

export default NavbarDesktop;
