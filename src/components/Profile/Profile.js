import ProfileBody from './ProfileBody/ProfileBody';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import SkeletonProfileHeader from './ProfileHeader/SkeletonProfileHeader/SkeletonProfileHeader';
import { useSelector } from 'react-redux';

const Profile = ({ profile, isLoading }) => {
  const authUserID = useSelector((state) => state.authProfile.id);

  return isLoading ? (
    <SkeletonProfileHeader />
  ) : (
    <>
      <ProfileHeader {...profile} />
      {(profile.friendship?.status === 'accepted' ||
        authUserID === profile.id) && <ProfileBody profile={profile} />}
    </>
  );
};

export default Profile;
