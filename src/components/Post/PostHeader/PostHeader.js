import { useSelector } from 'react-redux';

import avatar from '../../../assets/avatar64x64.png';

import classes from './PostHeader.module.scss';

function PostHeader(props) {
  const fetchedPost = useSelector(({ post }) =>
    post.fetchedPosts.find(({ id }) => id === props.id)
  );
  const { detailedPost } = useSelector(({ detailedPost }) => detailedPost);

  let postHeader = null;
  if (fetchedPost) {
    postHeader = (
      <header className={classes.postHeader}>
        {fetchedPost.avatarImageUrl ? (
          <img src={fetchedPost.avatarImageUrl} alt="avatar" />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
        <h2>
          {`${fetchedPost.firstName} ${fetchedPost.lastName}`}
          <p>17.10.2021 23:38</p>
        </h2>
      </header>
    );
  }
  if (!fetchedPost && detailedPost) {
    postHeader = (
      <header className={classes.postHeader}>
        {detailedPost.avatarImageUrl ? (
          <img src={detailedPost.avatarImageUrl} alt="avatar" />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
        <h2>
          {`${detailedPost.firstName} ${detailedPost.lastName}`}
          <p>17.10.2021 23:38</p>
        </h2>
      </header>
    );
  }

  return postHeader;
}

export default PostHeader;
