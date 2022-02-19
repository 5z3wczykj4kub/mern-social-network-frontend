import ProfileBody from './ProfileBody/ProfileBody';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import SkeletonProfileHeader from './ProfileHeader/SkeletonProfileHeader/SkeletonProfileHeader';

const Profile = ({ profile, isLoading }) => {
  return isLoading ? (
    <SkeletonProfileHeader />
  ) : (
    <>
      <ProfileHeader {...profile} />
      <ProfileBody profile={profile} />
    </>
  );
};

export default Profile;
