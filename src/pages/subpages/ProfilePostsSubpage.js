import ProfilePostsList from '../../components/Profile/ProfileBody/ProfilePostsList/ProfilePostsList';

const ProfilePostsSubpage = ({ disabled, profile, setSelectedTabIndex }) => {
  if (disabled) return null;

  return (
    <ProfilePostsList
      profile={profile}
      setSelectedTabIndex={setSelectedTabIndex}
    />
  );
};

export default ProfilePostsSubpage;
