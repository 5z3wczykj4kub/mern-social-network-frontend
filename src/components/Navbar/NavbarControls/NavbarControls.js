import { useSelector } from 'react-redux';

import avatar from '../../../assets/avatar64x64.png';
import newPost from '../../../assets/new-post.png';
import bell from '../../../assets/bell.png';

import classes from './NavbarControls.module.scss';

function NavbarControls() {
  const { avatarImageUrl } = useSelector(({ authProfile }) => authProfile);

  return (
    <div className={classes.navbarControls}>
      <button className={classes.avatar}>
        {avatarImageUrl ? (
          <img src={avatarImageUrl} alt="avatar" />
        ) : (
          <img src={avatar} alt="avatar" />
        )}
      </button>
      <button>
        <img src={newPost} alt="new post icon" />
      </button>
      <button>
        <img src={bell} alt="bell icon" />
      </button>
    </div>
  );
}

export default NavbarControls;
