import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ProfilePostsSubpage from '../../../pages/subpages/ProfilePostsSubpage';
import Tabs from '../../Tabs/Tabs';
import ProfileAboutList from './ProfileAboutList/ProfileAboutList';
import classes from './ProfileBody.module.scss';
import ProfileFriendsList from './ProfileFriendsList/ProfileFriendsList';

const ProfileBody = ({ profile }) => {
  const authUserID = useSelector((state) => state.authProfile.id);
  const { url } = useRouteMatch();
  const disabled = !(
    profile.friendship?.status === 'accepted' || authUserID === profile.id
  );

  const labels = useMemo(
    () => [
      { label: 'Posts', to: `${url}/posts`, disabled },
      { label: 'Friends', to: `${url}/friends`, disabled },
      { label: 'About', to: `${url}/about` },
    ],
    [url, disabled]
  );

  return (
    <div className={classes.profileBody}>
      <Tabs labels={labels}></Tabs>
      <Switch>
        <Route path={`${url}/friends`} exact>
          <ProfileFriendsList profileId={profile.id} />
        </Route>
        <Route path={`${url}/about`} exact>
          <ProfileAboutList {...profile} />
        </Route>
        <Route path={`${url}/posts`} exact>
          <ProfilePostsSubpage profile={profile} disabled={disabled} />
        </Route>
      </Switch>
    </div>
  );
};

export default ProfileBody;
