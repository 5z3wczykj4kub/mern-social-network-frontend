import ProfileFriendsList from '../../components/Profile/ProfileBody/ProfileFriendsList/ProfileFriendsList';

const ProfileFriendsSubpage = ({ disabled, profile }) => {
  if (disabled) return null;

  return <ProfileFriendsList profileId={profile.id} />;
};

export default ProfileFriendsSubpage;
