import CommentsForm from './CommentsForm/CommentsForm';
import CommentsList from './CommentsList/CommentsList';

import classes from './Comments.module.scss';

function Comments(props) {
  return (
    <div className={classes.comments}>
      <hr />
      <CommentsForm postId={props.post.id} />
      {props.post.comments.length > 0 && <CommentsList post={props.post} />}
    </div>
  );
}

export default Comments;
