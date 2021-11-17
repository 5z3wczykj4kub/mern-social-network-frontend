import { Link } from 'react-router-dom';

import Avatar from '../../../../Avatar/Avatar';

import classes from './CommentsListItem.module.scss';

function CommentsListItem(props) {
  return (
    <li className={classes.commentsListItem}>
      <Avatar className={classes.avatar} src={props.comment.avatarImageUrl} />
      <p>
        <Link to="#" className={classes.link}>
          {props.comment.firstName} {props.comment.lastName}
        </Link>{' '}
        {props.comment.textContent}
      </p>
    </li>
  );
}

export default CommentsListItem;
