import { useSelector } from 'react-redux';

import avatar from '../../../assets/avatar64x64.png';

import classes from './PostHeader.module.scss';

function PostHeader(props) {
  const { fetchedPosts } = useSelector(({ post }) => post);

  return (
    <header className={classes.postHeader}>
      <img src={avatar} alt="avatar" />
      <h2>
        {fetchedPosts[props.index].author}
        <p>17.10.2021 23:38</p>
      </h2>
    </header>
  );
}

export default PostHeader;
