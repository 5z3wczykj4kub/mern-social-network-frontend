import classNames from 'classnames';
import defaultAvatarLarge from '../../assets/avatar.png';
import defaultAvatarSmall from '../../assets/avatar64x64.png';
import classes from './Avatar.module.scss';

function Avatar(props) {
  const className = classNames(classes.avatar, {
    [props.className]: props.className,
  });

  return (
    <img
      className={className}
      src={
        props.src
          ? props.src
          : props.large
          ? defaultAvatarLarge
          : defaultAvatarSmall
      }
      alt='avatar'
    />
  );
}

export default Avatar;
