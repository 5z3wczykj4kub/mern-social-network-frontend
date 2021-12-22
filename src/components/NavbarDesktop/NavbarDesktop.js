import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cleanupNavbar } from '../../redux/navbarSlice';
import Logo from '../Navbar/Logo/Logo';
import Search from '../Navbar/Search/Search';
import SearchList from '../Navbar/SearchList/SearchList';
import classes from './NavbarDesktop.module.scss';
import NavbarDesktopControls from './NavbarDesktopControls/NavbarDesktopControls';

function NavbarDesktop() {
  const { isSearchListVisible, isSearchListEmpty } = useSelector(
    ({ navbar }) => navbar
  );
  const dispatch = useDispatch();

  useEffect(() => () => dispatch(cleanupNavbar()), [dispatch]);

  return (
    <nav className={classes.navbarDesktop}>
      <Link to='/posts'>
        <Logo />
      </Link>
      <Search />
      {isSearchListVisible && !isSearchListEmpty && <SearchList />}
      <NavbarDesktopControls />
    </nav>
  );
}

export default NavbarDesktop;
