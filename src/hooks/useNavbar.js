import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setIsNavbarDesktopUsed } from '../redux/navbarSlice';

function useNavbar() {
  const dispatch = useDispatch();

  // adjust navbar to viewport size
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 768px)');
    mql.matches
      ? dispatch(setIsNavbarDesktopUsed(true))
      : dispatch(setIsNavbarDesktopUsed(false));
    const changeHandler = () =>
      mql.matches
        ? dispatch(setIsNavbarDesktopUsed(true))
        : dispatch(setIsNavbarDesktopUsed(false));
    mql.addEventListener('change', changeHandler);
    return () => mql.removeEventListener('change', changeHandler);
  }, [dispatch]);
}

export default useNavbar;
