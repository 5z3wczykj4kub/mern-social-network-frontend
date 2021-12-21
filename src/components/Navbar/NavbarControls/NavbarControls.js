import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/avatar64x64.png';
import bell from '../../../assets/bell.png';
import newPost from '../../../assets/new-post.png';
import classes from './NavbarControls.module.scss';

const NavbarControls = () => {
  const avatarImageUrl = useSelector(
    (state) => state.authProfile.avatarImageUrl
  );
  const id = useSelector((state) => state.authProfile.id);

  return (
    <div className={classes.navbarControls}>
      <Link className={classes.avatar} to={`/profiles/${id}`}>
        {avatarImageUrl ? (
          <img src={avatarImageUrl} alt='avatar' />
        ) : (
          <img src={avatar} alt='avatar' />
        )}
      </Link>
      <Link to='#'>
        <img src={newPost} alt='new post icon' />
      </Link>
      <Link to='#'>
        <img src={bell} alt='bell icon' />
      </Link>
    </div>
  );
};

export default NavbarControls;
