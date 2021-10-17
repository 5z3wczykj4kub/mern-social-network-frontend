import PostBody from '../PostBody/PostBody';
import PostHeader from '../PostHeader/PostHeader';
import classes from './Post.module.scss';

function Post(props) {
  function className() {
    return `${props.className} ${classes.post}`;
  }

  return (
    <div className={className()}>
      <PostHeader name={props.name} />
      <PostBody textContent={props.textContent} />
    </div>
  );
}

export default Post;
