import CommentsForm from './CommentsForm/CommentsForm';

import classes from './Comments.module.scss';

function Comments() {
  return (
    <div className={classes.comments}>
      <hr />
      <CommentsForm />
    </div>
  );
}

export default Comments;
