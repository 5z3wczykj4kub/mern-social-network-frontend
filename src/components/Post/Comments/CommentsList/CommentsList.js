import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  cleanupComments,
  fetchComments,
} from '../../../../redux/commentsSlice';
import classes from './CommentsList.module.scss';
import CommentsListItem from './CommentsListItem/CommentsListItem';
import SkeletonCommentsListItem from './SkeletonCommentsListItem/SkeletonCommentsListItem';

function CommentsList({ post }) {
  const areCommentsLoading = useSelector(
    ({ comments }) => comments.areCommentsLoading
  );
  const comments = useSelector(({ comments }) => comments.comments);
  const page = useSelector(({ comments }) => comments.page);

  const dispatch = useDispatch();

  // Fetch comments.
  const { id } = post;

  useEffect(() => {
    const promise = dispatch(
      fetchComments({
        id,
        limit: 10,
      })
    );
    return () => promise.abort();
  }, [dispatch, id, page]);

  // Clear comments on component unmount.
  useEffect(() => () => dispatch(cleanupComments()), [dispatch]);

  const lastCommentRef = useRef();
  const commentsLength = post.comments;
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
