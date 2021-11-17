import { useSelector } from 'react-redux';

import Avatar from '../../../Avatar/Avatar';

import classNames from 'classnames';

import classes from './CommentsForm.module.scss';

import send from '../../../../assets/send.png';

function CommentsForm(props) {
  const avatarImageUrl = useSelector(({ profile }) => profile.avatarImageUrl);

  const className = classNames(classes.commentsForm, {
    [classes.disabled]: props.disabled,
  });

  return (
    <form className={className}>
      <Avatar className={classes.avatar} src={avatarImageUrl} />
      <input
        type="text"
        placeholder="Write a comment..."
        disabled={props.disabled}
      />
      <button>
        <img className={classes.addCommentIcon} src={send} alt="send" />
      </button>
    </form>
  );
}

export default CommentsForm;
