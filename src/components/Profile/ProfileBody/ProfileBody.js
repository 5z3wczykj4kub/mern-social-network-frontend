import Tabs from '../../Tabs/Tabs';

import classes from './ProfileBody.module.scss';

const ProfileBody = () => {
  return (
    <div className={classes.profileBody}>
      <Tabs labels={['Posts', 'Friends', 'Images']} />
      <p style={{ padding: '16px 0' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, iure
        architecto doloremque alias recusandae et harum voluptatem tempora?
        Porro ex accusamus reprehenderit veniam aperiam consectetur. Voluptates
        eos quasi nemo laudantium?
      </p>
    </div>
  );
};

export default ProfileBody;
