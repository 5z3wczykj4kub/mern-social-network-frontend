import { useSelector } from 'react-redux';

import classes from './PostBody.module.scss';

function PostBody(props) {
  const { fetchedPosts } = useSelector(({ post }) => post);

  return (
    <main className={classes.postBody}>
      <p>{fetchedPosts[props.index].textContent}</p>
      {fetchedPosts[props.index].imageUrl &&
        fetchedPosts[props.index].imageUrl.length > 0 && (
          <img src={fetchedPosts[props.index].imageUrl} alt="post" />
        )}
    </main>
  );
}

export default PostBody;
