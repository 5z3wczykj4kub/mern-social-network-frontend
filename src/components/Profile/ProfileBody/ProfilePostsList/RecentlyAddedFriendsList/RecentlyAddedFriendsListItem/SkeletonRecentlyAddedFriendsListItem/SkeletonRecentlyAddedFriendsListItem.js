import styles from './SkeletonRecentlyAddedFriendsListItem.module.scss';

const SkeletonRecentlyAddedFriendsListItem = () => {
  return (
    <div className={styles.SkeletonRecentlyAddedFriendsListItem}>
      <div></div>
      <div></div>
    </div>
  );
};

export default SkeletonRecentlyAddedFriendsListItem;
