import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    fetchedPosts: [],
  },
  reducers: {
    fetchPosts: (state, action) => {
      state.fetchedPosts = action.payload;
    },
    likePost: (state, action) => {
      const post = state.fetchedPosts.find(
        (post) => post.id === action.payload.postId
      );
      post.likes = action.payload.likes;
      post.isLiked = action.payload.isLiked;
    },
  },
});

export const sendFetchPostsReq = () => async (dispatch) => {
  const res = await fetch('/posts');
  const posts = await res.json();
  dispatch(fetchPosts(posts));
};

export const sendLikePostReq = (postId, userId) => async (dispatch) => {
  const res = await fetch(`posts/like/${postId}/${userId}`, {
    method: 'PUT',
  });
  const { likes, isLiked } = await res.json();
  dispatch(likePost({ postId, likes, isLiked }));
};

export const { fetchPosts, likePost } = postSlice.actions;

export default postSlice.reducer;
