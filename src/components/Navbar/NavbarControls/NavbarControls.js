import user from '../../../assets/user.png';
import newPost from '../../../assets/new-post.png';
import bell from '../../../assets/bell.png';

import classes from './NavbarControls.module.scss';

function NavbarControls() {
  return (
    <div className={classes.navbarControls}>
      <button>
        <img src={user} alt="user icon" />
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
