import classNames from 'classnames';

import Avatar from '../../../Avatar/Avatar';

import send from '../../../../assets/send.png';

import classes from './CommentsForm.module.scss';

function CommentsForm(props) {
  const className = classNames(classes.commentsForm, {
    [classes.disabled]: props.disabled,
  });

  return (
    <form className={className}>
      <Avatar className={classes.avatar} />
      <input
        type="text"
        placeholder="Write a comment..."
        disabled={props.disabled}
      />
      <img className={classes.commentsFormSend} src={send} alt="send" />
    </form>
  );
}

export default CommentsForm;
