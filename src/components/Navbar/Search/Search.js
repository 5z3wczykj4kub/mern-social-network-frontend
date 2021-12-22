import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import arrow from '../../../assets/arrow.png';
import loupe from '../../../assets/loupe.png';
import {
  searchUsers,
  setIsSearchListVisible,
} from '../../../redux/navbarSlice';
import classes from './Search.module.scss';

const Search = () => {
  const inputRef = useRef();
  const timerIdRef = useRef();

  const { isSearchListVisible, isNavbarDesktopUsed } = useSelector(
    ({ navbar }) => navbar
  );
  const dispatch = useDispatch();

  const blurHandler = () => {
    if (!isNavbarDesktopUsed) return;

    clearInterval(timerIdRef.current);
    timerIdRef.current = setTimeout(
      () => dispatch(setIsSearchListVisible(false)),
      150
    );
  };

  const className = () =>
    isSearchListVisible
      ? `${classes.search} ${classes.focused}`
      : classes.search;

  return (
    <>
      <div
        className={className()}
        onClick={() => {
          if (isSearchListVisible) return;
          inputRef.current.focus();
        }}
      >
        <img
          src={arrow}
          alt='arrow'
          onClick={(event) => {
            event.stopPropagation();
            dispatch(setIsSearchListVisible(false));
          }}
        />
        <input
          type='text'
          placeholder='Search'
          ref={inputRef}
          onFocus={() => dispatch(setIsSearchListVisible(true))}
          onInput={(event) => dispatch(searchUsers(event))}
          onBlur={blurHandler}
        />
        <span>
          <img src={loupe} alt='loupe' />
        </span>
      </div>
    </>
  );
};

export default Search;
