import classNames from 'classnames';

import classes from './Avatar.module.scss';

import defaultAvatarSmall from '../../assets/avatar64x64.png';

function Avatar(props) {
  const className = classNames(classes.avatar, {
    [props.className]: props.className,
  });

  return (
    <img
      className={className}
      src={props.src ? props.src : defaultAvatarSmall}
      alt="avatar"
    />
  );
}

export default Avatar;
