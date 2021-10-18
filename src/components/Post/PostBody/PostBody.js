import classes from './PostBody.module.scss';

function PostBody(props) {
  return (
    <main className={classes.postBody}>
      <p>{props.textContent}</p>
      {props.imageUrl && props.imageUrl.length > 0 && (
        <img src={props.imageUrl} alt="post" />
      )}
    </main>
  );
}

export default PostBody;
