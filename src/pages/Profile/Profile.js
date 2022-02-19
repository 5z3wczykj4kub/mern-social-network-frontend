import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ProfileBody from '../../components/Profile/ProfileBody/ProfileBody';
import ProfileHeader from '../../components/Profile/ProfileHeader/ProfileHeader';
import SkeletonProfileHeader from '../../components/Profile/ProfileHeader/SkeletonProfileHeader/SkeletonProfileHeader';
import useTitle from '../../hooks/useTitle';
import { purge as purgeFriends } from '../../redux/friendsSlice';
import { cleanupProfile, fetchProfile } from '../../redux/profileSlice';
import { purge as purgeRecentFriends } from '../../redux/recentFriendsSlice';

const Profile = () => {
  const profile = useSelector(({ profile }) => profile);
  const dispatch = useDispatch();

  const { profileId } = useParams();

  useTitle(`Sociallize - ${profile.firstName} ${profile.lastName} profile`);

  useEffect(() => {
    const promise = dispatch(fetchProfile(profileId));
    return () => {
      promise.abort();
      dispatch(cleanupProfile());
      dispatch(purgeFriends());
      dispatch(purgeRecentFriends());
    };
  }, [dispatch, profileId]);

  return profile.isLoading ? (
    <SkeletonProfileHeader />
  ) : (
    <>
      <ProfileHeader {...profile} />
      <ProfileBody profile={profile} />
    </>
  );
};

export default Profile;
