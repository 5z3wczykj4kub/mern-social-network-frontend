import PostHeader from './PostHeader/PostHeader';
import PostBody from './PostBody/PostBody';
import PostFooter from './PostFooter/PostFooter';

import classes from './Post.module.scss';

function Post(props) {
  function className() {
    return `${props.className} ${classes.post}`;
  }

  return (
    <div className={className()}>
      <PostHeader index={props.index} />
      <PostBody index={props.index} />
      <PostFooter index={props.index} />
    </div>
  );
}

export default Post;
