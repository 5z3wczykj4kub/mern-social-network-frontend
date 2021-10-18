import classes from './PostHeader.module.scss';

import avatar from '../../../assets/avatar-64.png';

function PostHeader(props) {
  return (
    <header className={classes.postHeader}>
      <img src={avatar} alt="avatar" />
      <h2>
        {props.author}
        <p>17.10.2021 23:38</p>
      </h2>
    </header>
  );
}

export default PostHeader;
