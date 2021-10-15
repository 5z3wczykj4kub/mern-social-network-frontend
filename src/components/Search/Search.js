import { useRef } from 'react';

import loupe from '../../assets/loupe.png';

import classes from './Search.module.scss';

function Search(props) {
  const inputRef = useRef();

  function className() {
    return props.isFocused
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
          onFocus={props.onFocus}
          onBlur={props.onBlur}
        />
        <span>
          <img src={loupe} alt="search loupe" />
        </span>
      </div>
    </>
  );
}

export default Search;
