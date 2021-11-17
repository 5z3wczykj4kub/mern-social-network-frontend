import classes from './PostBody.module.scss';

function PostBody(props) {
  return (
    <main className={classes.postBody}>
      <p>{props.post.textContent}</p>
      {props.post.postImageUrl && (
        <img src={props.post.postImageUrl} alt="post" />
      )}
    </main>
  );
}

export default PostBody;
