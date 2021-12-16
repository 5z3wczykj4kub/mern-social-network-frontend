import { Route, useRouteMatch } from 'react-router-dom';
import Tabs from '../../Tabs/Tabs';
import ProfilePostsList from '../ProfilePostsList/ProfilePostsList';
import classes from './ProfileBody.module.scss';

const ProfileBody = (props) => {
  const { url } = useRouteMatch();

  return (
    <div className={classes.profileBody}>
      <Tabs
        labels={[
          { label: 'Posts', to: url },
          { label: 'Friends', to: `${url}/friends` },
          { label: 'About', to: `${url}/about` },
        ]}
      >
        <Route path={url} exact>
          <ProfilePostsList profile={props.profile} />
        </Route>
        <Route path={`${url}/friends`} exact>
          <p style={{ padding: '16px 0' }}>Friends</p>
        </Route>
        <Route path={`${url}/about`} exact>
          <p style={{ padding: '16px 0' }}>About</p>
        </Route>
      </Tabs>
    </div>
  );
};

export default ProfileBody;
