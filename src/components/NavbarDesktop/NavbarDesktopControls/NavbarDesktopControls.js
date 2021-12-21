import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import avatarIcon from '../../../assets/avatar64x64.png';
import bellIcon from '../../../assets/bell.png';
import newPostIcon from '../../../assets/new-post.png';
import settingsIcon from '../../../assets/settings.png';
import signOutIcon from '../../../assets/sign-out.png';
import profileIcon from '../../../assets/user.png';
import { signOut } from '../../../redux/authProfileSlice';
import classes from './NavbarDesktopControls.module.scss';

function NavbarDesktopControls() {
  const { id, firstName, lastName, avatarImageUrl } = useSelector(
    ({ authProfile }) => authProfile
  );
  const dispatch = useDispatch();

  const location = useLocation();
  const history = useHistory();

  return (
    <div className={classes.navbarDesktopControls}>
      <button className={classes.avatar}>
        {avatarImageUrl ? (
          <img src={avatarImageUrl} alt='avatar' />
        ) : (
          <img src={avatarIcon} alt='avatar' />
        )}
        <p>
          {firstName} {lastName}
        </p>
        <FontAwesomeIcon icon={faChevronDown} />
        <div className={classes.profileMenu}>
          <p
            onClick={() => {
              if (location.pathname === `/profiles/${id}`) return;
              history.push(`/profiles/${id}`);
            }}
          >
            <img src={profileIcon} alt='authProfile' />
            See profile
          </p>
          <p>
            <img src={settingsIcon} alt='settings' />
            Settings
          </p>
          <p onClick={() => dispatch(signOut())}>
            <img src={signOutIcon} alt='sign out' />
            Sign out
          </p>
        </div>
      </button>
      <button>
        <img src={newPostIcon} alt='new post' />
      </button>
      <button>
        <img src={bellIcon} alt='bell' />
      </button>
    </div>
  );
}

export default NavbarDesktopControls;
