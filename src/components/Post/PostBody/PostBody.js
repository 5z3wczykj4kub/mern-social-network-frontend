import classes from './PostBody.module.scss';

function PostBody(props) {
  return (
    <main className={classes.postBody}>
      <p>{props.textContent}</p>
      <img
        src="https://images.pexels.com/photos/9686076/pexels-photo-9686076.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt=""
      />
    </main>
  );
}

export default PostBody;
