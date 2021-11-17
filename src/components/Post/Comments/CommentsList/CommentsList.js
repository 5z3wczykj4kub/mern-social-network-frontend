import { useSelector, useDispatch } from 'react-redux';

import SkeletonCommentsListItem from './SkeletonCommentsListItem/SkeletonCommentsListItem';
import CommentsListItem from './CommentsListItem/CommentsListItem';

import classes from './CommentsList.module.scss';

function CommentsList() {
  const skeletonCommentsListItems = (
    <>
      <SkeletonCommentsListItem className={classes.skeletonCommentsListItem} />
      <SkeletonCommentsListItem className={classes.skeletonCommentsListItem} />
    </>
  );

  return (
    <ul className={classes.commentsList}>
      {/* {COMMENTS.map((comment) => (
        <CommentsListItem key={comment.id} comment={comment} />
      ))} */}
    </ul>
  );
}

export default CommentsList;
