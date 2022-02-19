import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ProfileFriendsSubpage from '../../../pages/subpages/ProfileFriendsSubpage';
import ProfilePostsSubpage from '../../../pages/subpages/ProfilePostsSubpage';
import Tabs from '../../Tabs/Tabs';
import ProfileAboutList from './ProfileAboutList/ProfileAboutList';
import classes from './ProfileBody.module.scss';

const ProfileBody = ({ profile }) => {
  const authUserID = useSelector((state) => state.authProfile.id);
  const disabled = !(
    profile.friendship?.status === 'accepted' || authUserID === profile.id
  );

  const labels = useMemo(
    () => [
      { label: 'Posts', disabled },
      { label: 'Friends', disabled },
      { label: 'About' },
    ],
    [disabled]
  );

  /**
   * Gonna leave it as it is.
   * This project is already a huge mess.
   * Once finished, I will refactor whole codebase.
   * Planning to:
   * 1. Rethink every peace of code.
   * 2. Use TypeScript.
   * 3. Document code (maybe with JSDoc).
   * 4. Cover as much components with tests (all kinds).
   */
  return (
    <div className={classes.profileBody}>
      <Tabs labels={labels} disabled={disabled}>
        {(selectedTabIndex, setSelectedTabIndex) =>
          [
            <ProfilePostsSubpage
              profile={profile}
              disabled={disabled}
              setSelectedTabIndex={setSelectedTabIndex}
            />,
            <ProfileFriendsSubpage profile={profile} disabled={disabled} />,
            <ProfileAboutList {...profile} />,
          ][selectedTabIndex]
        }
      </Tabs>
    </div>
  );
};

export default ProfileBody;
