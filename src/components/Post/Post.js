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
      <PostHeader author={props.author} />
      <PostBody textContent={props.textContent} />
      <PostFooter />
    </div>
  );
}

export default Post;
