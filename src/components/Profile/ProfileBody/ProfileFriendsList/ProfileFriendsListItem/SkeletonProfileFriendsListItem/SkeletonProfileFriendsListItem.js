import styles from './SkeletonProfileFriendsListItem.module.scss';

const SkeletonProfileFriendsListItem = () => {
  return (
    <div className={styles.SkeletonProfileFriendsListItem}>
      <div></div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default SkeletonProfileFriendsListItem;
