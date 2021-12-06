import Avatar from '../../components/Avatar/Avatar';

import classes from './User.module.scss';

const User = () => {
  return (
    <div className={classes.user}>
      <div className={classes.backgroundImage}>
        <Avatar className={classes.avatar} large />
      </div>
    </div>
  );
};

export default User;
