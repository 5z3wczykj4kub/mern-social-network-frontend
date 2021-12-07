import { configureStore } from '@reduxjs/toolkit';

import navbarReducer from './navbarSlice';
import postReducer from './postSlice';
import commentsReducer from './commentsSlice';
import likeDrawerReducer from './likeDrawerSlice';
import authProfileReducer from './authProfileSlice';
import profileReducer from './profileSclice';

export default configureStore({
  reducer: {
    navbar: navbarReducer,
    post: postReducer,
    comments: commentsReducer,
    likeDrawer: likeDrawerReducer,
    authProfile: authProfileReducer,
    profile: profileReducer,
  },
});
