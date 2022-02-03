import { useEffect, useRef, useState } from 'react';
import birthdayCakeIcon from '../../../../assets/birthday-cake.png';
import copyIcon from '../../../../assets/copy.png';
import emailIcon from '../../../../assets/email.png';
import genderIcon from '../../../../assets/gender.png';
import hourglassIcon from '../../../../assets/hourglass.png';
import idCardIcon from '../../../../assets/id-card.png';
import linkIcon from '../../../../assets/link.png';
import pinIcon from '../../../../assets/pin.png';
import profileIcon from '../../../../assets/profile.png';
import capitalizeFirstLetter from '../../../../utils/functions/capitalizeFirstLetter';
import getAgeByDateOfBirth from '../../../../utils/functions/getAgeByDateOfBirth';
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

  useEffect(() => () => clearTimeout(timer.current), []);

  return (
    <div className={styles.ProfileAboutList}>
      <h2>
        <img src={profileIcon} alt='Profile' /> Personal information
      </h2>
      <p>
        <img src={idCardIcon} alt='id card' /> {firstName} {lastName}
      </p>
      <p>
        <img src={emailIcon} alt='envelope' /> {email}
      </p>
      <p>
        <img src={genderIcon} alt='gender' /> {capitalizeFirstLetter(gender)}
      </p>
      <p>
        <img src={hourglassIcon} alt='hourglass' />{' '}
        {getAgeByDateOfBirth(dateOfBirth)}
      </p>
      <p>
        <img src={birthdayCakeIcon} alt='birthday cake' /> {dateOfBirth}
      </p>
      <p>
        <img src={pinIcon} alt='pin' /> {location}
      </p>
      <p className={styles.profileLink}>
        <img src={linkIcon} alt='link' /> Copy profile link:
        <span>
          <img
            className={styles.copyIcon}
            src={copyIcon}
            alt='copy'
            onClick={copyProfileLinkToClipboard}
          />
          {isTooltipVisible && <span className={styles.tooltip}>Copied!</span>}
        </span>
      </p>
    </div>
  );
};

export default ProfileAboutList;
