import styles from './RecentlyAddedFriendsListItem.module.scss';
import { Link } from 'react-router-dom';
import Avatar from '../../../../../Avatar/Avatar';

const RecentlyAddedFriendsListItem = ({
  id,
  firstName,
  lastName,
  avatarImageUrl,
}) => {
  return (
    <Link
      className={styles.RecentlyAddedFriendsListItem}
      to={`/profiles/${id}`}
    >
      <div>
        <Avatar className={styles.Avatar} src={avatarImageUrl} />
        <p>
          {firstName} {lastName}
        </p>
      </div>
    </Link>
  );
};

export default RecentlyAddedFriendsListItem;
