import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import addFriendIcon from '../../../../assets/add-friend.png';
import addedFriendIcon from '../../../../assets/added-friend.png';
import removeFriendIcon from '../../../../assets/remove-friend.png';
import { updateFriendshipStatus } from '../../../../redux/profileSlice';
import Spinner from '../../../Spinner/Spinner';
import styles from './FriendButton.module.scss';

const FriendButton = ({
  friendship,
  cancelFriendRequest,
  sendFriendRequest,
  acceptFriendRequest,
}) => {
  const dispatch = useDispatch();
  const authProfileId = useSelector((state) => state.authProfile.id);

  const [isLoading, setIsLoading] = useState(false);

  const abortController = useRef(new AbortController());

  useEffect(() => () => abortController.current.abort(), []);

  // Add friend
  const sendFriendRequestOnClickHandler = async () => {
    try {
      setIsLoading(true);
      const res = await sendFriendRequest(abortController.current.signal);
      const friendship = await res.json();
      if (!res.ok) return;
      dispatch(updateFriendshipStatus(friendship));
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!friendship)
    return (
      <button
        className={styles.button}
        disabled={isLoading}
        onClick={sendFriendRequestOnClickHandler}
      >
        <img src={addFriendIcon} alt='add friend' />{' '}
        {!isLoading ? (
          'Add friend'
        ) : (
          <>
            Adding <Spinner className={styles.spinner} />
          </>
        )}
      </button>
    );

  // Cancel friend request
  const cancelFriendRequestOnClickHandler = async () => {
    try {
      setIsLoading(true);
      const res = await cancelFriendRequest(abortController.current.signal);
      if (!res.ok) return;
      dispatch(updateFriendshipStatus(null));
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (
    friendship.status === 'pending' &&
    friendship.requesterId === authProfileId
  )
    return (
      <button
        className={styles.button}
        disabled={isLoading}
        onClick={cancelFriendRequestOnClickHandler}
      >
        <img src={removeFriendIcon} alt='remove friend' />{' '}
        {!isLoading ? (
          'Cancel'
        ) : (
          <>
            Canceling <Spinner className={styles.spinner} />
          </>
        )}
      </button>
    );

  // Accept friend request
  const acceptFriendRequestOnClickHandler = async () => {
    try {
      setIsLoading(true);
      const res = await acceptFriendRequest(abortController.current.signal);
      const friendship = await res.json();
      if (!res.ok) return;
      dispatch(updateFriendshipStatus(friendship));
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  if (
    friendship.status === 'pending' &&
    friendship.receiverId === authProfileId
  )
    return (
      <button
        className={styles.button}
        disabled={isLoading}
        onClick={acceptFriendRequestOnClickHandler}
      >
        <img src={addedFriendIcon} alt='added friend' />{' '}
        {!isLoading ? (
          'Accept'
        ) : (
          <>
            Accepting <Spinner className={styles.spinner} />
          </>
        )}
      </button>
    );

  if (friendship.status === 'accepted')
    return (
      <button className={styles.button}>
        <img src={addedFriendIcon} alt='added friend' /> Friends
      </button>
    );
};

export default FriendButton;
