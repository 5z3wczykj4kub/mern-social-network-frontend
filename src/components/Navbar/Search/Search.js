import { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  setIsSearchListVisible,
  searchUsers,
} from '../../../redux/navbarSlice';

import arrow from '../../../assets/arrow.png';
import loupe from '../../../assets/loupe.png';

import classes from './Search.module.scss';

function Search() {
  const inputRef = useRef();

  const { isSearchListVisible } = useSelector(({ navbar }) => navbar);
  const dispatch = useDispatch();

  function className() {
    return isSearchListVisible
      ? `${classes.search} ${classes.focused}`
      : classes.search;
  }

  return (
    <>
      <div className={className()} onClick={() => inputRef.current.focus()}>
        <img
          src={arrow}
          alt="arrow"
          onClick={(event) => {
            event.stopPropagation();
            dispatch(setIsSearchListVisible(false));
          }}
        />
        <input
          type="text"
          placeholder="Search"
          ref={inputRef}
          onFocus={() => dispatch(setIsSearchListVisible(true))}
          onInput={(event) => dispatch(searchUsers(event))}
        />
        <span>
          <img src={loupe} alt="loupe" />
        </span>
      </div>
    </>
  );
}

export default Search;
