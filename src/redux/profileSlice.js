import { createSlice } from '@reduxjs/toolkit';

import USERS from '../mocks/users';

// REMOVE LATER - mock signing in
const { id, firstName, lastName, avatarImageUrl } = USERS[USERS.length - 1];
const isAuth = !!localStorage.getItem('isAuth') || false;

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isAuth,
    id: isAuth ? id : null,
    firstName: isAuth ? firstName : null,
    lastName: isAuth ? lastName : null,
    avatarImageUrl: isAuth ? avatarImageUrl : null,
  },
  reducers: {
    signIn: (state) => {
      localStorage.setItem('isAuth', true);
      state.isAuth = !!localStorage.getItem('isAuth');

      state.id = id;
      state.firstName = firstName;
      state.lastName = lastName;
      state.avatarImageUrl = avatarImageUrl;
    },
    signOut: (state) => {
      localStorage.removeItem('isAuth');
      state.isAuth = !!localStorage.getItem('isAuth');

      state.id = null;
      state.firstName = null;
      state.lastName = null;
      state.avatarImageUrl = null;
    },
  },
});

export const { signIn, signOut } = profileSlice.actions;

export default profileSlice.reducer;
