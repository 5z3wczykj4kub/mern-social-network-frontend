import { useSelector } from 'react-redux';

import classes from './PostBody.module.scss';

function PostBody(props) {
  const fetchedPost = useSelector(({ post }) =>
    post.fetchedPosts.find(({ id }) => id === props.id)
  );
  const { detailedPost } = useSelector(({ detailedPost }) => detailedPost);

  let postBody = null;
  if (fetchedPost) {
    postBody = (
      <main className={classes.postBody}>
        <p>{fetchedPost.textContent}</p>
        {fetchedPost.postImageUrl && (
          <img src={fetchedPost.postImageUrl} alt="post" />
        )}
      </main>
    );
  }
  if (!fetchedPost && detailedPost) {
    postBody = (
      <main className={classes.postBody}>
        <p>{detailedPost.textContent}</p>
        {detailedPost.postImageUrl && (
          <img src={detailedPost.postImageUrl} alt="post" />
        )}
      </main>
    );
  }

  return postBody;
}

export default PostBody;
