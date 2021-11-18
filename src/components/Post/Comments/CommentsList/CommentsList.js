import { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchComments,
  cleanupComments,
} from '../../../../redux/detailedPostSlice';

import SkeletonCommentsListItem from './SkeletonCommentsListItem/SkeletonCommentsListItem';
import CommentsListItem from './CommentsListItem/CommentsListItem';

import classes from './CommentsList.module.scss';

function CommentsList({ post }) {
  const lastCommentRef = useRef();
  const areCommentsLoading = useSelector(
    ({ detailedPost }) => detailedPost.areCommentsLoading
  );
  const comments = useSelector(({ detailedPost }) => detailedPost.comments);
  const page = useSelector(({ detailedPost }) => detailedPost.page);
  const dispatch = useDispatch();

  // Fetch comments.
  const { id } = post;
  useEffect(() => {
    const promise = dispatch(fetchComments({ id, limit: 10, page }));
    return () => promise.abort();
  }, [dispatch, id, page]);

  // Clear comments on component unmount.
  useEffect(() => () => dispatch(cleanupComments()), [dispatch]);

  const hasMoreComments = post.comments.length !== comments.length;

  const skeletonCommentsListItems = (
    <>
      <SkeletonCommentsListItem className={classes.skeletonCommentsListItem} />
      <SkeletonCommentsListItem className={classes.skeletonCommentsListItem} />
    </>
  );
  const commentsList = comments.map((comment, index) => (
    <CommentsListItem
      key={comment.id}
      comment={comment}
      hasMoreComments={hasMoreComments}
      ref={index === comments.length - 1 ? lastCommentRef : null}
    />
  ));

  return (
    <ul className={classes.commentsList}>
      <p>Comments</p>
      {commentsList}
      {areCommentsLoading && skeletonCommentsListItems}
    </ul>
  );
}

export default CommentsList;
