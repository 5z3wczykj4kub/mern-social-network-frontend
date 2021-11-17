import { createSlice } from '@reduxjs/toolkit';

export const detailedPostSlice = createSlice({
  name: 'detailedPost',
  initialState: {
    isLoading: true,
    detailedPost: null,
    fetchedComments: [],
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setDetailedPost: (state, action) => {
      state.detailedPost = action.payload;
    },
    likeDetailedPost: (state, action) => {
      state.detailedPost.likes = action.payload.likes;
      state.detailedPost.isLiked = action.payload.isLiked;
    },
    setIsLikeLoading: (state, action) => {
      state.detailedPost.isLikeLoading = action.payload;
    },
  },
});

export const fetchDetailedPost = (postId) => async (dispatch) => {
  dispatch(setIsLoading(true));
  const res = await fetch(`/api/posts/${postId}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const post = await res.json();
  dispatch(setDetailedPost(post));
  dispatch(setIsLoading(false));
};

export const sendLikeDetailedPostReq = (postId, userId) => async (dispatch) => {
  dispatch(setIsLikeLoading(true));
  const res = await fetch(`/api/posts/like/${postId}/${userId}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
  const { likes, isLiked } = await res.json();
  dispatch(setIsLikeLoading(false));
  dispatch(likeDetailedPost({ likes, isLiked }));
};

export const {
  setIsLoading,
  setDetailedPost,
  likeDetailedPost,
  setIsLikeLoading,
} = detailedPostSlice.actions;

export default detailedPostSlice.reducer;
