import avatar from '../../../assets/avatar64x64.png';

import classes from './PostHeader.module.scss';

function PostHeader(props) {
  return (
    <header className={classes.postHeader}>
      {props.post.avatarImageUrl ? (
        <img src={props.post.avatarImageUrl} alt="avatar" />
      ) : (
        <img src={avatar} alt="avatar" />
      )}
      <h2>
        {`${props.post.firstName} ${props.post.lastName}`}
        <p>17.10.2021 23:38</p>
      </h2>
    </header>
  );
}

export default PostHeader;
