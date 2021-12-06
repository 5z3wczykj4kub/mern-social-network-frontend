import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../../../../redux/commentsSlice';

import Avatar from '../../../Avatar/Avatar';

import classNames from 'classnames';

import classes from './CommentsForm.module.scss';

import send from '../../../../assets/send.png';

function CommentsForm(props) {
  const [commentInputValue, setCommentInputValue] = useState('');

  const avatarImageUrl = useSelector(({ profile }) => profile.avatarImageUrl);
  const dispatch = useDispatch();

  // Add comment on form submit.
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!commentInputValue) return;

    const comment = commentInputValue.trim();
    await dispatch(addComment({ postId: props.postId, comment }));
    setCommentInputValue('');
  };

  const className = classNames(classes.commentsForm, {
    [classes.disabled]: props.disabled,
  });

  return (
    <form className={className} onSubmit={onSubmitHandler}>
      <Avatar className={classes.avatar} src={avatarImageUrl} />
      <input
        type="text"
        placeholder="Write a comment..."
        disabled={props.disabled}
        value={commentInputValue}
        onChange={(event) => setCommentInputValue(event.target.value)}
      />
      <button disabled={props.disabled}>
        <img className={classes.addCommentIcon} src={send} alt="send" />
      </button>
    </form>
  );
}

export default CommentsForm;
