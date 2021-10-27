import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './navbarSlice';
import postReducer from './postSlice';
import likeDrawerReducer from './likeDrawer';

export default configureStore({
  reducer: {
    navbar: navbarReducer,
    post: postReducer,
    likeDrawer: likeDrawerReducer,
  },
});
