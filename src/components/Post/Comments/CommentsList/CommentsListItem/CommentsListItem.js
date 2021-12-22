import { forwardRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementPage } from '../../../../../redux/commentsSlice';
import Avatar from '../../../../Avatar/Avatar';
import classes from './CommentsListItem.module.scss';

const CommentsListItem = forwardRef((props, lastCommentRef) => {
  const dispatch = useDispatch();

  const { hasMoreComments } = props;
  useEffect(() => {
    if (!lastCommentRef) return;
    const observer = new IntersectionObserver((entries) => {
      if (!hasMoreComments) return;
      if (!entries[0].isIntersecting) return;

      dispatch(incrementPage());
      observer.unobserve(lastCommentRef.current);
    });
    observer.observe(lastCommentRef.current);
    return () => observer.disconnect();
  }, [dispatch, hasMoreComments, lastCommentRef]);

  return (
    <li className={classes.commentsListItem} ref={lastCommentRef}>
      <Link to={`/profiles/${props.comment.author}`}>
        <Avatar className={classes.avatar} src={props.comment.avatarImageUrl} />
      </Link>{' '}
      <p>
        <Link to={`/profiles/${props.comment.author}`} className={classes.link}>
          {props.comment.firstName} {props.comment.lastName}
        </Link>{' '}
        {props.comment.textContent}
      </p>
    </li>
  );
});

export default CommentsListItem;
