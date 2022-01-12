import styles from './RecentlyAddedFriendsList.module.scss';
import FriendsIcon from '../../../../FriendsIcon/FriendsIcon';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRecentFriendsQuery } from '../../../../../redux/recentFriendsSlice';
import RecentlyAddedFriendsListItem from './RecentlyAddedFriendsListItem/RecentlyAddedFriendsListItem';
import { Link } from 'react-router-dom';
import SkeletonRecentlyAddedFriendsListItem from './RecentlyAddedFriendsListItem/SkeletonRecentlyAddedFriendsListItem/SkeletonRecentlyAddedFriendsListItem';
import classNames from 'classnames';

const RecentlyAddedFriendsList = () => {
  const profileId = useSelector((state) => state.profile.id);
  const { entities, entitiesTotalCount, isLoading } = useSelector(
    (state) => state.recentFriends
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (entities.length > 0 || entitiesTotalCount === 0) return;
    const page = 0;
    const limit = 9;
    const promise = dispatch(getRecentFriendsQuery({ profileId, page, limit }));
    return () => promise.abort();
  }, [dispatch, profileId, entities.length, entitiesTotalCount]);

  return (
    <section className={styles.RecentlyAddedFriendsList}>
      <p>
        <FriendsIcon /> Recently added
        <Link className={styles.Link} to={`/profiles/${profileId}/friends`}>
          See all
        </Link>
      </p>
      <div
        className={classNames({
          [styles.empty]: entitiesTotalCount === 0,
        })}
      >
        {entities.map((entity) => (
          <RecentlyAddedFriendsListItem key={entity.id} {...entity} />
        ))}
        {isLoading && (
          <>
            <SkeletonRecentlyAddedFriendsListItem />
            <SkeletonRecentlyAddedFriendsListItem />
            <SkeletonRecentlyAddedFriendsListItem />
            <SkeletonRecentlyAddedFriendsListItem />
            <SkeletonRecentlyAddedFriendsListItem />
            <SkeletonRecentlyAddedFriendsListItem />
            <SkeletonRecentlyAddedFriendsListItem />
            <SkeletonRecentlyAddedFriendsListItem />
            <SkeletonRecentlyAddedFriendsListItem />
          </>
        )}
        {entitiesTotalCount === 0 && (
          <p className={styles.noFriendsMessage}>This user has no friends</p>
        )}
      </div>
    </section>
  );
};

export default RecentlyAddedFriendsList;
