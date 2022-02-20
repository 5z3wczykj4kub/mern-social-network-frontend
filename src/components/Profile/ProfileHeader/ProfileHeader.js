import { useSelector } from 'react-redux';
import friendsIcon from '../../../assets/friends.png';
import { baseURL } from '../../../utils/constants/api';
import Avatar from '../../Avatar/Avatar';
import FriendButton from './FriendButton/FriendButton';
import classes from './ProfileHeader.module.scss';

const ProfileHeader = ({
  id,
  avatarImageUrl,
  firstName,
  lastName,
  friends,
  friendship,
}) => {
  const authProfileID = useSelector((state) => state.authProfile.id);
  const isAuthProfile = authProfileID === id;

  // Friend requests handlers
  const url = `${baseURL}/users/${authProfileID}/friends/${id}`;
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  };

  const sendFriendRequest = async (signal) =>
    fetch(url, {
      headers,
      signal,
      method: 'POST',
    });

  const cancelFriendRequest = async (signal) =>
    fetch(url, {
      headers,
      signal,
      method: 'DELETE',
    });

  const acceptFriendRequest = async (signal) =>
    fetch(url, {
      headers,
      signal,
      method: 'PUT',
      body: JSON.stringify({ response: 'accepted' }), // TODO: It can also be 'rejected'
    });

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
          <FriendButton
            friendship={friendship}
            cancelFriendRequest={cancelFriendRequest}
            sendFriendRequest={sendFriendRequest}
            acceptFriendRequest={acceptFriendRequest}
          />
        )}
      </div>
    </header>
  );
};

export default ProfileHeader;
