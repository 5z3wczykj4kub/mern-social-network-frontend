import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchComments,
  cleanupComments,
} from '../../../../redux/detailedPostSlice';

import SkeletonCommentsListItem from './SkeletonCommentsListItem/SkeletonCommentsListItem';
import CommentsListItem from './CommentsListItem/CommentsListItem';

import classes from './CommentsList.module.scss';

function CommentsList({ post: { id } }) {
  const areCommentsLoading = useSelector(
    ({ detailedPost }) => detailedPost.areCommentsLoading
  );
  const comments = useSelector(({ detailedPost }) => detailedPost.comments);
  const dispatch = useDispatch();

  // Fetch comments.
  useEffect(() => {
    const promise = dispatch(fetchComments(id));
    return () => {
      promise.abort();
      dispatch(cleanupComments());
    };
  }, [dispatch, id]);

  const skeletonCommentsListItems = (
    <>
      <SkeletonCommentsListItem className={classes.skeletonCommentsListItem} />
      <SkeletonCommentsListItem className={classes.skeletonCommentsListItem} />
    </>
  );

  return (
    <ul className={classes.commentsList}>
      <p>Comments</p>
      {areCommentsLoading && skeletonCommentsListItems}
      {!areCommentsLoading &&
        comments.map((comment) => (
          <CommentsListItem key={comment.id} comment={comment} />
        ))}
    </ul>
  );
}

export default CommentsList;
