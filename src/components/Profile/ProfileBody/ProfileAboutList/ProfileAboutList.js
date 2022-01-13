import { useRef, useState } from 'react';
import copyIcon from '../../../../assets/copy.png';
import profileIcon from '../../../../assets/profile.png';
import getAgeByDateOfBirth from '../../../../utils/getAgeByDateOfBirth';
import styles from './ProfileAboutList.module.scss';

const ProfileAboutList = ({
  id,
  firstName,
  lastName,
  email,
  gender,
  dateOfBirth,
  location,
}) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const timer = useRef();

  const profileLink = `http://localhost:3000/profiles/${id}`;

  const copyProfileLinkToClipboard = async () => {
    clearTimeout(timer.current);
    await navigator.clipboard.writeText(profileLink);
    setIsTooltipVisible(true);
    timer.current = setTimeout(() => setIsTooltipVisible(false), 1000);
  };

  return (
    <div className={styles.ProfileAboutList}>
      <h2>
        <img src={profileIcon} alt="Profile" /> Personal information
      </h2>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Gender: {gender}</p>
      <p>Age: {getAgeByDateOfBirth(dateOfBirth)}</p>
      <p>Date of birth: {dateOfBirth}</p>
      <p>Location: {location}</p>
      <p className={styles.profileLink}>
        Copy profile link:
        <span>
          <img
            className={styles.copyIcon}
            src={copyIcon}
            alt="copy"
            onClick={copyProfileLinkToClipboard}
          />
          {isTooltipVisible && <span className={styles.tooltip}>Copied!</span>}
        </span>
      </p>
    </div>
  );
};

export default ProfileAboutList;
