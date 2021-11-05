import { createSlice } from '@reduxjs/toolkit';

export const likeDrawerSlice = createSlice({
  name: 'likeDrawer',
  initialState: {
    isOpen: false,
    isLoading: true,
    postIndex: null,
    users: [],
    page: 0,
    hasMoreLikes: true,
  },
  reducers: {
    openLikeDrawer: (state, action) => {
      state.isOpen = true;
      state.postIndex = action.payload;
    },
    closeLikeDrawer: (state) => {
      state.isOpen = false;
    },
    setLikeDrawerUsers: (state, action) => {
      state.users = [...state.users, ...action.payload];
    },
    incrementLikeDrawerPage: (state) => {
      state.page++;
    },
    setHasMoreLikes: (state, action) => {
      state.hasMoreLikes = action.payload;
    },
    setIsLikeDrawerLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    cleanupLikeDrawer: (state) => {
      state.isLoading = true;
      state.users = [];
      state.page = 0;
    },
  },
});

export const sendGetUsersWhoLikedThePostReq = (likes) => async (dispatch) => {
  if (likes.length === 0) {
    dispatch(setIsLikeDrawerLoading(false));
    return;
  }
  dispatch(setIsLikeDrawerLoading(true));
  const res = await fetch(`/api/users?ids=${likes.join(',')}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const users = await res.json();
  dispatch(setIsLikeDrawerLoading(false));
  if (users.length === 0) {
    dispatch(setHasMoreLikes(false));
    return;
  }
  dispatch(setLikeDrawerUsers(users));
  dispatch(incrementLikeDrawerPage());
};

export const {
  openLikeDrawer,
  closeLikeDrawer,
  setIsLikeDrawerLoading,
  setLikeDrawerUsers,
  cleanupLikeDrawer,
  setHasMoreLikes,
  incrementLikeDrawerPage,
} = likeDrawerSlice.actions;

export default likeDrawerSlice.reducer;
