import ProfilePostsList from '../../components/Profile/ProfileBody/ProfilePostsList/ProfilePostsList';

const ProfilePostsSubpage = ({ disabled, profile }) => {
  if (disabled) return null;

  return <ProfilePostsList profile={profile} />;
};

export default ProfilePostsSubpage;
