import { configureStore } from '@reduxjs/toolkit';

import navbarReducer from './navbarSlice';
import postReducer from './postSlice';
import detailedPostReducer from './detailedPostSlice';
import likeDrawerReducer from './likeDrawerSlice';
import profileReducer from './profileSlice';

export default configureStore({
  reducer: {
    navbar: navbarReducer,
    post: postReducer,
    detailedPost: detailedPostReducer,
    likeDrawer: likeDrawerReducer,
    profile: profileReducer,
  },
});
