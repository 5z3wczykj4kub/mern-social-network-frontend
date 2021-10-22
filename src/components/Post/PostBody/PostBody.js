import { useSelector } from 'react-redux';

import classes from './PostBody.module.scss';

function PostBody(props) {
  const { fetchedPosts } = useSelector(({ post }) => post);
  const { textContent, postImageUrl } = fetchedPosts[props.index];

  return (
    <main className={classes.postBody}>
      <p>{textContent}</p>
      {postImageUrl && <img src={postImageUrl} alt="post" />}
    </main>
  );
}

export default PostBody;
