import { configureStore } from '@reduxjs/toolkit';
import authProfile from './authProfileSlice';
import comments from './commentsSlice';
import likeDrawer from './likeDrawerSlice';
import navbar from './navbarSlice';
import post from './postSlice';
import profile from './profileSlice';
import friends from './friendsSlice';
import recentFriends from './recentFriendsSlice';

export default configureStore({
  reducer: {
    navbar,
    post,
    comments,
    likeDrawer,
    authProfile,
    profile,
    friends,
    recentFriends,
  },
});
