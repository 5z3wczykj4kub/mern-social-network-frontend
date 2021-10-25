import avatar from '../../../../assets/avatar64x64.png';

import classes from './SearchListItem.module.scss';

function SearchListItem(props) {
  function className() {
    return props.isLoading
      ? `${classes.searchListItem} ${classes.loading}`
      : classes.searchListItem;
  }

  return (
    <li className={className()}>
      {props.avatarImageUrl ? (
        <img src={props.avatarImageUrl} alt="avatar" />
      ) : (
        <img src={avatar} alt="avatar" />
      )}
      <span>{`${props.firstName} ${props.lastName}`}</span>
    </li>
  );
}

export default SearchListItem;
