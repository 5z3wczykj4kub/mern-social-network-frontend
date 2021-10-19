import { useSelector } from 'react-redux';

import avatar from '../../../../assets/avatar64x64.png';

import classes from './SearchListItem.module.scss';

function SearchListItem(props) {
  const { isSearchUsed } = useSelector(({ navbar }) => navbar);

  function className() {
    return isSearchUsed
      ? `${classes.searchListItem} ${classes.loading}`
      : classes.searchListItem;
  }

  return (
    <li className={className()}>
      <img src={avatar} alt="avatar" />
      <span>{props.children}</span>
    </li>
  );
}

export default SearchListItem;
