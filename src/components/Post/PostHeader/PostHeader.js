import { Link } from 'react-router-dom';

import avatar from '../../../assets/avatar64x64.png';

import classes from './PostHeader.module.scss';

function PostHeader(props) {
  return (
    <header className={classes.postHeader}>
      {props.post.avatarImageUrl ? (
        <Link className={classes.link} to={`/profiles/${props.post.author}`}>
          <img src={props.post.avatarImageUrl} alt="avatar" />
        </Link>
      ) : (
        <Link className={classes.link} to={`/profiles/${props.post.author}`}>
          <img src={avatar} alt="avatar" />
        </Link>
      )}
      <h2>
        <Link
          className={classes.link}
          to={`/profiles/${props.post.author}`}
        >{`${props.post.firstName} ${props.post.lastName}`}</Link>
        <p>17.10.2021 23:38</p>
      </h2>
    </header>
  );
}

export default PostHeader;
