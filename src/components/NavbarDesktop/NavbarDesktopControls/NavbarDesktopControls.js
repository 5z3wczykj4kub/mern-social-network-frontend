import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import USERS from '../../../mocks/users';

import avatar from '../../../assets/avatar64x64.png';
import profile from '../../../assets/user.png';
import newPost from '../../../assets/new-post.png';
import bell from '../../../assets/bell.png';
import settings from '../../../assets/settings.png';
import signOut from '../../../assets/sign-out.png';

import classes from './NavbarDesktopControls.module.scss';

function NavbarDesktopControls() {
  const { firstName, lastName, avatarImageUrl } = USERS[USERS.length - 1]; // remove later - mock logged in user

  return (
    <div className={classes.navbarDesktopControls}>
      <button className={classes.avatar}>
        {avatarImageUrl ? (
          <img src={avatarImageUrl} alt="avatar" />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
        <p>
          {firstName} {lastName}
        </p>
        <FontAwesomeIcon icon={faChevronDown} />
        <div className={classes.profileMenu}>
          <p>
            <img src={profile} alt="profile" />
            See profile
          </p>
          <p>
            <img src={settings} alt="settings" />
            Settings
          </p>
          <p>
            <img src={signOut} alt="sign out" />
            Sign out
          </p>
        </div>
      </button>
      <button>
        <img src={newPost} alt="new post" />
      </button>
      <button>
        <img src={bell} alt="bell" />
      </button>
    </div>
  );
}

export default NavbarDesktopControls;
