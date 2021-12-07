import { useEffect } from 'react';
import { useParams } from 'react-router';

import { useSelector, useDispatch } from 'react-redux';
import { cleanupProfile, fetchProfile } from '../../redux/profileSclice';

import ProfileComponent from '../../components/Profile/Profile';

const Profile = () => {
  const profile = useSelector(({ profile }) => profile);
  const dispatch = useDispatch();

  const { profileId } = useParams();

  useEffect(() => {
    const promise = dispatch(fetchProfile(profileId));
    return () => {
      promise.abort();
      dispatch(cleanupProfile());
    };
  }, [dispatch, profileId]);

  return <ProfileComponent isLoading={profile.isLoading} profile={profile} />;
};

export default Profile;
