import avatar from '../../assets/avatar-64.png';

import classes from './SearchListItem.module.scss';

function SearchListItem(props) {
  function className() {
    return props.isLoading
      ? `${classes.searchListItem} ${classes.loading}`
      : classes.searchListItem;
  }

  return (
    <li className={className()}>
      <img src={avatar} alt="avatar" />
      <span>{props.name}</span>
    </li>
  );
}

export default SearchListItem;
