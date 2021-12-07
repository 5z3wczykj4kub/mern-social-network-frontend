import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../../redux/authProfileSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import avatarIcon from '../../../assets/avatar64x64.png';
import profileIcon from '../../../assets/user.png';
import newPostIcon from '../../../assets/new-post.png';
import bellIcon from '../../../assets/bell.png';
import settingsIcon from '../../../assets/settings.png';
import signOutIcon from '../../../assets/sign-out.png';

import classes from './NavbarDesktopControls.module.scss';

function NavbarDesktopControls() {
  const { firstName, lastName, avatarImageUrl } = useSelector(
    ({ authProfile }) => authProfile
  );
  const dispatch = useDispatch();

  return (
    <div className={classes.navbarDesktopControls}>
      <button className={classes.avatar}>
        {avatarImageUrl ? (
          <img src={avatarImageUrl} alt="avatar" />
        ) : (
          <img src={avatarIcon} alt="avatar" />
        )}
        <p>
          {firstName} {lastName}
        </p>
        <FontAwesomeIcon icon={faChevronDown} />
        <div className={classes.profileMenu}>
          <p>
            <img src={profileIcon} alt="authProfile" />
            See authProfile
          </p>
          <p>
            <img src={settingsIcon} alt="settings" />
            Settings
          </p>
          <p onClick={() => dispatch(signOut())}>
            <img src={signOutIcon} alt="sign out" />
            Sign out
          </p>
        </div>
      </button>
      <button>
        <img src={newPostIcon} alt="new post" />
      </button>
      <button>
        <img src={bellIcon} alt="bell" />
      </button>
    </div>
  );
}

export default NavbarDesktopControls;
