import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk(
  'detailedPost/fetchComments',
  async ({ id: postId, page, limit }, { signal }) => {
    try {
      const res = await fetch(
        `/api/posts/${postId}/comments?page=${page}&limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          signal,
        }
      );
      return await res.json();
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const detailedPostSlice = createSlice({
  name: 'detailedPost',
  initialState: {
    isLoading: true,
    detailedPost: null,
    comments: [],
    page: 0,
    hasMoreComments: true,
    areCommentsLoading: true,
  },
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    incrementPage: (state) => {
      state.page++;
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
    cleanupComments: (state) => {
      state.comments = [];
      state.page = 0;
      state.areCommentsLoading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.areCommentsLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.areCommentsLoading = false;
        state.comments.push(...action.payload);
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.areCommentsLoading = false;
      });
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
  cleanupComments,
  incrementPage,
} = detailedPostSlice.actions;

export default detailedPostSlice.reducer;
