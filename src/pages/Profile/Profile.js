import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { Redirect } from 'react-router-dom';
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

  const authUserID = useSelector((state) => state.authProfile.id);
  const disabled = !(
    profile.friendship?.status === 'accepted' || authUserID === profile.id
  );

  return profile.isLoading ? (
    <SkeletonProfileHeader />
  ) : (
    <>
      {!disabled ? (
        <Redirect to={`/profiles/${profileId}/posts`} />
      ) : (
        <Redirect to={`/profiles/${profileId}/about`} />
      )}
      <ProfileHeader {...profile} />
      <ProfileBody profile={profile} />
    </>
  );
};

export default Profile;
