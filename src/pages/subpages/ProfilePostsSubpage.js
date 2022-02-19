import { useRouteMatch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import ProfilePostsList from '../../components/Profile/ProfileBody/ProfilePostsList/ProfilePostsList';

const ProfilePostsSubpage = ({ disabled, profile }) => {
  const { url } = useRouteMatch();

  // if (disabled) return <Redirect to={`${url}/about`} />;

  return <ProfilePostsList profile={profile} />;
};

export default ProfilePostsSubpage;
