import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    fetchedPosts: [],
    arePostsLoading: false,
    isLikeLoading: false,
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
    setArePostsLoading: (state, action) => {
      state.arePostsLoading = action.payload;
    },
    setIsLikeLoading: (state, action) => {
      state.isLikeLoading = action.payload;
    },
  },
});

export const sendFetchPostsReq = () => async (dispatch) => {
  dispatch(setArePostsLoading(true));
  const res = await fetch('/posts');
  const posts = await res.json();
  dispatch(setArePostsLoading(false));
  dispatch(fetchPosts(posts));
};

export const sendLikePostReq = (postId, userId) => async (dispatch) => {
  dispatch(setIsLikeLoading(true));
  const res = await fetch(`posts/like/${postId}/${userId}`, {
    method: 'PUT',
  });
  const { likes, isLiked } = await res.json();
  dispatch(setIsLikeLoading(false));
  dispatch(likePost({ postId, likes, isLiked }));
};

export const { fetchPosts, likePost, setArePostsLoading, setIsLikeLoading } =
  postSlice.actions;

export default postSlice.reducer;
