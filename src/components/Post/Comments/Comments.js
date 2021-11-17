import CommentsForm from './CommentsForm/CommentsForm';
import CommentsList from './CommentsList/CommentsList';

import classes from './Comments.module.scss';

function Comments() {
  return (
    <div className={classes.comments}>
      <hr />
      <CommentsForm />
      <CommentsList />
    </div>
  );
}

export default Comments;
