import classes from './PostHeader.module.scss';

import avatar from '../../assets/avatar-64.png';

function PostHeader(props) {
  return (
    <div className={classes.postHeader}>
      <img src={avatar} alt="avatar" />
      <h2>
        {props.name}
        <p>17.10.2021 23:38</p>
      </h2>
    </div>
  );
}

export default PostHeader;
