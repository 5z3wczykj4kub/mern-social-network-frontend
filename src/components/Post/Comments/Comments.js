import { useSelector } from 'react-redux';

import CommentsForm from './CommentsForm/CommentsForm';
import CommentsList from './CommentsList/CommentsList';

import classes from './Comments.module.scss';

function Comments(props) {
  const isCommentBeingAdded = useSelector(
    (state) => state.comments.isCommentBeingAdded
  );
  const areCommentsLoading = useSelector(
    (state) => state.comments.areCommentsLoading
  );

  return (
    <div className={classes.comments}>
      <hr />
      <CommentsForm
        postId={props.post.id}
        disabled={isCommentBeingAdded || areCommentsLoading}
      />
      <CommentsList post={props.post} />
    </div>
  );
}

export default Comments;
