import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import ProfileComponent from '../../components/Profile/Profile';
import useTitle from '../../hooks/useTitle';
import { purge as purgeFriends } from '../../redux/friendsSlice';
import { purge as purgeRecentFriends } from '../../redux/recentFriendsSlice';
import { cleanupProfile, fetchProfile } from '../../redux/profileSlice';

const Profile = () => {
  const profile = useSelector(({ profile }) => profile);
  const dispatch = useDispatch();

  const { profileId } = useParams();

  useTitle('MERN Social Network - profile');

  useEffect(() => {
    const promise = dispatch(fetchProfile(profileId));
    return () => {
      promise.abort();
      dispatch(cleanupProfile());
      dispatch(purgeFriends());
      dispatch(purgeRecentFriends());
    };
  }, [dispatch, profileId]);

  return <ProfileComponent isLoading={profile.isLoading} profile={profile} />;
};

export default Profile;
