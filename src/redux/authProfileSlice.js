import { createSlice } from '@reduxjs/toolkit';
import { baseURL } from '../utils/constants/api';
import { cleanupPosts } from './postSlice';

export const authProfileSlice = createSlice({
  name: 'authProfile',
  initialState: {
    isAuth: false,
    authStatus: 'idle' || 'pending' || 'fulfilled' || 'rejected',
    id: null,
    firstName: null,
    lastName: null,
    avatarImageUrl: null,
  },
  reducers: {
    setAuthProfile: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.avatarImageUrl = action.payload.avatarImageUrl;
    },
    setAuthStatus: (state, action) => {
      state.authStatus = action.payload;
    },
    cleanupAuthProfile: (state) => {
      localStorage.removeItem('token');
      state.isAuth = false;
      state.id = null;
      state.firstName = null;
      state.lastName = null;
      state.avatarImageUrl = null;
    },
  },
});

export const getAuthUser = (token) => async (dispatch) => {
  const res = await fetch(`${baseURL}/auth`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    dispatch(setAuthStatus('rejected'));
    localStorage.removeItem('token');
    window.location.reload();
  }
  const { id, firstName, lastName, avatar: avatarImageUrl } = await res.json();
  dispatch(
    setAuthProfile({ isAuth: true, id, firstName, lastName, avatarImageUrl })
  );
  dispatch(setAuthStatus('fulfilled'));
};

export const signIn = (email, password) => async (dispatch) => {
  dispatch(setAuthStatus('pending'));
  const res = await fetch(`${baseURL}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    dispatch(setAuthStatus('rejected'));
    return;
  }
  const { jwt } = await res.json();
  localStorage.setItem('token', jwt);
  dispatch(getAuthUser(localStorage.getItem('token')));
};

export const signOut = () => (dispatch) => {
  dispatch(cleanupAuthProfile());
  dispatch(cleanupPosts());
};

export const { setAuthProfile, setAuthStatus, cleanupAuthProfile } =
  authProfileSlice.actions;

export default authProfileSlice.reducer;
