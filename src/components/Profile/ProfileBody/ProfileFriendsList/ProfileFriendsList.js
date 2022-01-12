import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFriendsQuery } from '../../../../redux/friendsSlice';
import styles from './ProfileFriendsList.module.scss';
import ProfileFriendsListItem from './ProfileFriendsListItem/ProfileFriendsListItem';
import SkeletonProfileFriendsListItem from './ProfileFriendsListItem/SkeletonProfileFriendsListItem/SkeletonProfileFriendsListItem';

const ProfileFriendsList = ({ profileId }) => {
  const lastFriendRef = useRef();

  const page = useSelector((state) => state.friends.page);
  const friends = useSelector((state) => state.friends.entities);
  const friendsCount = useSelector((state) => state.friends.entitiesCount);
  const isLoading = useSelector((state) => state.friends.isLoading);

  const dispatch = useDispatch();

  const limit = 10;

  // Fetch friends when:
  // - component mounts for the first time,
  // - page variable changes.
  const hasInitiallyMountedRef = useRef(false);
  const friendsLengthRef = useRef(friends.length);
  const friendsCountRef = useRef(friendsCount);
  useEffect(() => {
    if (
      (friendsLengthRef.current > 0 || friendsCountRef.current === 0) &&
      !hasInitiallyMountedRef.current
    ) {
      hasInitiallyMountedRef.current = true;
      return;
    }
    const promise = dispatch(getFriendsQuery({ profileId, page, limit }));
    hasInitiallyMountedRef.current = true;
    return () => promise.abort();
  }, [dispatch, profileId, page, limit]);

  if (friendsCount === 0)
    return <p className={styles.noFriendsMessage}>This user has no friends</p>;

  return (
    <div className={styles.ProfileFriendsList}>
      {friends &&
        friends.map((friend, index) => (
          <ProfileFriendsListItem
            key={friend.id}
            friend={friend}
            ref={index === friends.length - 1 ? lastFriendRef : null}
          />
        ))}
      {isLoading && (
        <>
          <SkeletonProfileFriendsListItem />
          <SkeletonProfileFriendsListItem />
          <SkeletonProfileFriendsListItem />
        </>
      )}
    </div>
  );
};

export default ProfileFriendsList;
