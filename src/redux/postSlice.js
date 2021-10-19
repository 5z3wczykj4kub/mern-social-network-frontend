import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],
  },
  reducers: {
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
});

export const fetchPosts = (event) => async (dispatch, getState) => {
  const res = await fetch('/posts');
  const posts = await res.json();
  dispatch(setPosts(posts));
};

export const { setPosts } = postSlice.actions;

export default postSlice.reducer;
