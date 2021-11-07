import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    isAuth: false,
    id: null,
    firstName: null,
    lastName: null,
    avatarImageUrl: null,
  },
  reducers: {
    setProfile: (state, action) => {
      state.isAuth = action.payload.isAuth;
      state.id = action.payload.id;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.avatarImageUrl = action.payload.avatarImageUrl;
    },
    signOut: (state) => {
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
  const res = await fetch('/api/auth/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) {
    localStorage.removeItem('token');
    window.location.reload();
  }
  const { id, firstName, lastName, avatarImageUrl } = await res.json();
  dispatch(
    setProfile({ isAuth: true, id, firstName, lastName, avatarImageUrl })
  );
};

export const signIn = (email, password) => async (dispatch) => {
  const res = await fetch('/api/auth/signin', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) {
    alert('Signing in failed.'); // show custom error dialog
    return;
  }
  const { token } = await res.json();
  localStorage.setItem('token', token);
  dispatch(getAuthUser(localStorage.getItem('token')));
};

export const { signOut, setProfile } = profileSlice.actions;

export default profileSlice.reducer;
