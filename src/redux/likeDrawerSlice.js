import { createSlice } from '@reduxjs/toolkit';

export const likeDrawerSlice = createSlice({
  name: 'likeDrawer',
  initialState: {
    isLoading: true,
    users: [],
    page: 0,
    hasMoreLikes: true,
  },
  reducers: {
    setLikeDrawerUsers: (state, action) => {
      state.users.push(...action.payload);
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

export const sendGetUsersWhoLikedThePostReq =
  (likes, signal) => async (dispatch) => {
    if (likes.length === 0) {
      dispatch(setIsLikeDrawerLoading(false));
      return;
    }
    dispatch(setIsLikeDrawerLoading(true));
    try {
      const res = await fetch(`/api/users?ids=${likes.join(',')}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        signal,
      });
      const users = await res.json();
      dispatch(setIsLikeDrawerLoading(false));
      if (users.length === 0) {
        dispatch(setHasMoreLikes(false));
        return;
      }
      dispatch(setLikeDrawerUsers(users));
      dispatch(incrementLikeDrawerPage());
    } catch (error) {
      console.log(error.message);
    }
  };

export const {
  setIsLikeDrawerLoading,
  setLikeDrawerUsers,
  cleanupLikeDrawer,
  setHasMoreLikes,
  incrementLikeDrawerPage,
} = likeDrawerSlice.actions;

export default likeDrawerSlice.reducer;
