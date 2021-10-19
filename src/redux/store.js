import { configureStore } from '@reduxjs/toolkit';
import navbarReducer from './navbarSlice';
import postReducer from './postSlice';

export default configureStore({
  reducer: {
    navbar: navbarReducer,
    post: postReducer,
  },
});
