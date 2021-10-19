import { useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setIsSearchFocued, searchUsers } from '../../../redux/navbarSlice';

import loupe from '../../../assets/loupe.png';

import classes from './Search.module.scss';

function Search() {
  const inputRef = useRef();

  const { isSearchFocused } = useSelector(({ navbar }) => navbar);
  const dispatch = useDispatch();

  function className() {
    return isSearchFocused
      ? `${classes.search} ${classes.focused}`
      : classes.search;
  }

  return (
    <>
      <div className={className()} onClick={() => inputRef.current.focus()}>
        <input
          type="text"
          placeholder="Search"
          ref={inputRef}
          onBlur={() => dispatch(setIsSearchFocued(false))}
          onFocus={() => dispatch(setIsSearchFocued(true))}
          onInput={(event) => dispatch(searchUsers(event))}
        />
        <span>
          <img src={loupe} alt="loupe icon" />
        </span>
      </div>
    </>
  );
}

export default Search;
