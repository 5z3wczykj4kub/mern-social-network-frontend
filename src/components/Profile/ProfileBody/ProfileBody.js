import Tabs from '../../Tabs/Tabs';
import ProfilePostsList from '../ProfilePostsList/ProfilePostsList';

import classes from './ProfileBody.module.scss';

const ProfileBody = (props) => {
  const labels = ['Posts', 'Friends', 'About'];
  const components = [
    <ProfilePostsList profile={props.profile} />,
    <p style={{ padding: '16px 0' }}>Friends</p>,
    <p style={{ padding: '16px 0' }}>About</p>,
  ];

  return (
    <div className={classes.profileBody}>
      <Tabs labels={labels} components={components} />
    </div>
  );
};

export default ProfileBody;
