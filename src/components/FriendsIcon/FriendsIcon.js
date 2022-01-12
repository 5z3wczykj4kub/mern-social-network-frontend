import styles from './FriendsIcon.module.scss';
import profile from '../../assets/profile.png';

const FriendsIcon = () => {
  return (
    <span className={styles.FriendsIcon}>
      <img src={profile} alt='profile' />
      <img src={profile} alt='profile' />
    </span>
  );
};

export default FriendsIcon;
