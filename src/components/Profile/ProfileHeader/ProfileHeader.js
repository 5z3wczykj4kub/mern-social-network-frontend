import Avatar from '../../Avatar/Avatar';

import friends from '../../../assets/friends.png';
import addFriend from '../../../assets/add-friend.png';

import classes from './ProfileHeader.module.scss';

const ProfileHeader = (props) => {
  return (
    <header className={classes.profileHeader}>
      <div className={classes.backgroundImage}></div>
      <div className={classes.info}>
        <Avatar
          className={classes.avatar}
          src={props.profile.avatarImageUrl}
          large
        />
        <h1>
          {props.profile.firstName} {props.profile.lastName}
        </h1>
        <p>
          <img src={friends} alt='friends' /> 128
        </p>
        <button>
          <img src={addFriend} alt='add friend' /> Add friend
        </button>
      </div>
    </header>
  );
};

export default ProfileHeader;
