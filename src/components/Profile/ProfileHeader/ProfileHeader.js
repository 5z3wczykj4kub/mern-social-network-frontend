import { useSelector } from 'react-redux';
import addFriend from '../../../assets/add-friend.png';
import friendsIcon from '../../../assets/friends.png';
import Avatar from '../../Avatar/Avatar';
import classes from './ProfileHeader.module.scss';

const ProfileHeader = ({
  id,
  avatarImageUrl,
  firstName,
  lastName,
  friends,
}) => {
  const authProfileID = useSelector((state) => state.authProfile.id);
  const isAuthProfile = authProfileID === id;

  return (
    <header className={classes.profileHeader}>
      <div className={classes.backgroundImage}></div>
      <div className={classes.info}>
        <Avatar className={classes.avatar} src={avatarImageUrl} large />
        <h1>
          {firstName} {lastName}
        </h1>
        <p>
          <img src={friendsIcon} alt='friends' /> {friends}
        </p>
        {!isAuthProfile && (
          <button>
            <img src={addFriend} alt='add friend' /> Add friend
          </button>
        )}
      </div>
    </header>
  );
};

export default ProfileHeader;
