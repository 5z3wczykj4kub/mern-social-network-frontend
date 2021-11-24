import { useEffect, useRef } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {
  fetchComments,
  cleanupComments,
} from '../../../../redux/commentsSlice';

import SkeletonCommentsListItem from './SkeletonCommentsListItem/SkeletonCommentsListItem';
import CommentsListItem from './CommentsListItem/CommentsListItem';

import classes from './CommentsList.module.scss';

function CommentsList({ post }) {
  const lastCommentRef = useRef();
  const commentsLengthRef = useRef();
  const slicedCommentsRef = useRef();

  const areCommentsLoading = useSelector(
    ({ comments }) => comments.areCommentsLoading
  );
  const comments = useSelector(({ comments }) => comments.comments);
  const page = useSelector(({ comments }) => comments.page);
  const addedCommentsCounter = useSelector(
    ({ comments }) => comments.addedCommentsCounter
  );
  const dispatch = useDispatch();

  // Fetch comments.
  const { id } = post;
  const limit = 10;
  const commentsLength = post.comments.length;
  const slicedComments = post.comments.slice(
    page * limit + addedCommentsCounter,
    (page + 1) * limit + addedCommentsCounter
  );

  commentsLengthRef.current = commentsLength;
  slicedCommentsRef.current = slicedComments;

  useEffect(() => {
    if (commentsLengthRef.current === 0) return;

    const promise = dispatch(
      fetchComments({
        id,
        comments: slicedCommentsRef.current,
      })
    );
    return () => promise.abort();
  }, [dispatch, id, page, commentsLengthRef, slicedCommentsRef]);

  // Clear comments on component unmount.
  useEffect(() => () => dispatch(cleanupComments()), [dispatch]);

  const hasMoreComments = commentsLength !== comments.length;

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
      {commentsLength > 0 && <p>Comments</p>}
      {commentsList}
      {areCommentsLoading && skeletonCommentsListItems}
    </ul>
  );
}

export default CommentsList;
