import { Link } from 'react-router-dom';
import avatar from '../../../../assets/avatar64x64.png';
import classes from './SearchListItem.module.scss';

function SearchListItem(props) {
  function className() {
    return props.isLoading
      ? `${classes.searchListItem} ${classes.loading}`
      : classes.searchListItem;
  }

  if (props.isLoading)
    return (
      <li className={className()}>
        {props.avatarImageUrl ? (
          <img src={props.avatarImageUrl} alt='avatar' />
        ) : (
          <img src={avatar} alt='avatar' />
        )}
        <span>{`${props.firstName} ${props.lastName}`}</span>
      </li>
    );

  return (
    <Link to={`/profiles/${props.id}`} tabIndex='-1'>
      <li className={className()}>
        {props.avatarImageUrl ? (
          <img src={props.avatarImageUrl} alt='avatar' />
        ) : (
          <img src={avatar} alt='avatar' />
        )}
        <span>{`${props.firstName} ${props.lastName}`}</span>
      </li>
    </Link>
  );
}

export default SearchListItem;
