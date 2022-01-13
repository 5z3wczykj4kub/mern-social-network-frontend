import styles from './ProfileAboutList.module.scss';
import getAgeByDateOfBirth from '../../../../utils/getAgeByDateOfBirth';
import { Link } from 'react-router-dom';
import copyIcon from '../../../../assets/copy.png';

const ProfileAboutList = ({ id, firstName, lastName, dateOfBirth }) => {
  getAgeByDateOfBirth(dateOfBirth);

  return (
    <div className={styles.ProfileAboutList}>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Age: {getAgeByDateOfBirth(dateOfBirth)}</p>
      <p>Date of birth: {dateOfBirth}</p>
      <p className={styles.profileLink}>
        Profile link:
        <Link
          className={styles.Link}
          to={`/profiles/${id}`}
        >{`http://localhost:3000/profiles/${id}`}</Link>
        <img className={styles.copyIcon} src={copyIcon} alt="copy" />
      </p>
    </div>
  );
};

export default ProfileAboutList;
