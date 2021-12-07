import ProfileHeader from './ProfileHeader/ProfileHeader';
import ProfileBody from './ProfileBody/ProfileBody';
import SkeletonProfileHeader from './ProfileHeader/SkeletonProfileHeader/SkeletonProfileHeader';

const Profile = (props) => {
  return props.isLoading ? (
    <SkeletonProfileHeader />
  ) : (
    <>
      <ProfileHeader profile={props.profile} />
      <ProfileBody profile={props.profile} />
    </>
  );
};

export default Profile;