import { forwardRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { incrementPage } from '../../../../../redux/friendsSlice';
import Avatar from '../../../../Avatar/Avatar';
import styles from './ProfileFriendsListItem.module.scss';
import { useSelector } from 'react-redux';

const ProfileFriendsListItem = forwardRef(
  ({ friend: { id, firstName, lastName, avatarImageUrl } }, lastFriendRef) => {
    const dispatch = useDispatch();
    const entitiesCachedCount = useSelector(
      (state) => state.friends.entities.length
    );
    const entitiesTotalCount = useSelector(
      (state) => state.friends.entitiesCount
    );

    const hasMoreEntities = entitiesCachedCount !== entitiesTotalCount;

    useEffect(() => {
      if (!lastFriendRef) return;
      if (!hasMoreEntities) return;
      const observer = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) return;
        dispatch(incrementPage());
        observer.unobserve(lastFriendRef.current);
      });
      observer.observe(lastFriendRef.current);
      return () => observer.disconnect();
    }, [dispatch, lastFriendRef, hasMoreEntities]);

    return (
      <Link
        className={styles.ProfileFriendsListItem}
        ref={lastFriendRef}
        to={`/profiles/${id}`}
      >
        <Avatar className={styles.Avatar} src={avatarImageUrl} />
        <div>
          <p>
            {firstName} {lastName}
          </p>
          <p>3 mutal friends</p>
        </div>
      </Link>
    );
  }
);

export default ProfileFriendsListItem;
