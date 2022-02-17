import { useSelector } from 'react-redux';
import addFriend from '../../../assets/add-friend.png';
import friends from '../../../assets/friends.png';
import Avatar from '../../Avatar/Avatar';
import classes from './ProfileHeader.module.scss';

const ProfileHeader = ({
  id,
  avatarImageUrl,
  firstName,
  lastName,
  friendship,
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
          <img src={friends} alt='friends' /> 128
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
