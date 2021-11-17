import { useSelector } from 'react-redux';

import classNames from 'classnames';

import classes from './Avatar.module.scss';

import defaultAvatarSmall from '../../assets/avatar64x64.png';

function Avatar(props) {
  const avatarImageUrl = useSelector(({ profile }) => profile.avatarImageUrl);

  const className = classNames(classes.avatar, {
    [props.className]: props.className,
  });

  return (
    <img
      className={className}
      src={avatarImageUrl ? avatarImageUrl : defaultAvatarSmall}
      alt="avatar"
    />
  );
}

export default Avatar;
