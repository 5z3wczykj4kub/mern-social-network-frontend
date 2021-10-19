import user from '../../../assets/user.png';
import newPost from '../../../assets/new-post.png';
import bell from '../../../assets/bell.png';

import classes from './NavbarControls.module.scss';

function NavbarControls() {
  return (
    <div className={classes.navbarControls}>
      <img src={user} alt="user icon" />
      <img src={newPost} alt="new post icon" />
      <img src={bell} alt="bell icon" />
    </div>
  );
}

export default NavbarControls;
