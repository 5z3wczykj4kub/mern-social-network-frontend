import classNames from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecentFriendsQuery } from '../../../../../redux/recentFriendsSlice';
import FriendsIcon from '../../../../FriendsIcon/FriendsIcon';
import styles from './RecentlyAddedFriendsList.module.scss';
import RecentlyAddedFriendsListItem from './RecentlyAddedFriendsListItem/RecentlyAddedFriendsListItem';
import SkeletonRecentlyAddedFriendsListItem from './RecentlyAddedFriendsListItem/SkeletonRecentlyAddedFriendsListItem/SkeletonRecentlyAddedFriendsListItem';

const RecentlyAddedFriendsList = ({ setSelectedTabIndex }) => {
  const profileId = useSelector((state) => state.profile.id);
  const { entities, entitiesTotalCount, isLoading } = useSelector(
    (state) => state.recentFriends
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (entities.length > 0 || entitiesTotalCount === 0) return;
    const limit = 9;
    const promise = dispatch(getRecentFriendsQuery({ profileId, limit }));
    return () => promise.abort();
  }, [dispatch, profileId, entities.length, entitiesTotalCount]);

  return (
    <section className={styles.RecentlyAddedFriendsList}>
      <p>
        <FriendsIcon /> Recently added
        <span className={styles.Link} onClick={() => setSelectedTabIndex(1)}>
          See all
        </span>
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
