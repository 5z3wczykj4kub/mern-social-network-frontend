import { useSelector } from 'react-redux';
import birthdayCakeIcon from '../../../../../assets/birthday-cake.png';
import emailIcon from '../../../../../assets/email.png';
import genderIcon from '../../../../../assets/gender.png';
import pinIcon from '../../../../../assets/pin.png';
import profileIcon from '../../../../../assets/profile.png';
import capitalizeFirstLetter from '../../../../../utils/capitalizeFirstLetter';
import classes from './PersonalInfo.module.scss';

const PersonalInfo = () => {
  const { email, gender, location, dateOfBirth } = useSelector(
    (state) => state.profile
  );

  return (
    <section className={classes.PersonalInfo}>
      <h2>
        <img src={profileIcon} alt='Profile' /> Personal information
      </h2>
      <ul>
        <li>
          <img src={birthdayCakeIcon} alt='Birthday cake' />
          <p>{dateOfBirth}</p>
        </li>
        <li>
          <img src={genderIcon} alt='Gender' />
          <p>{capitalizeFirstLetter(gender)}</p>
        </li>
        <li>
          <img src={pinIcon} alt='Pin' />
          <p>{location}</p>
        </li>
        <li>
          <img src={emailIcon} alt='Email' />
          <p>{email}</p>
        </li>
      </ul>
    </section>
  );
};

export default PersonalInfo;
