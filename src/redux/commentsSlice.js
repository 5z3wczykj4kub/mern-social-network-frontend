import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async ({ id: postId, comments }, { signal }) => {
    try {
      const res = await fetch(
        `/api/posts/${postId}/comments?ids=${comments.join(',')}`,
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

export const addComment = createAsyncThunk(
  'comments/addComment',
  async ({ postId, comment: textContent }) => {
    try {
      const res = await fetch(`/api/posts/${postId}/comments`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ comment: { textContent } }),
      });
      return await res.json();
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const commentsSlice = createSlice({
  name: 'comments',
  initialState: {
    comments: [],
    page: 0,
    addedCommentsCounter: 0,
    hasMoreComments: true,
    areCommentsLoading: false,
    isCommentBeingAdded: false,
  },
  reducers: {
    incrementPage: (state) => {
      state.page++;
    },
    cleanupComments: (state) => {
      state.comments = [];
      state.page = 0;
      state.hasMoreComments = true;
      state.areCommentsLoading = false;
      state.addedCommentsCounter = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch comments.
      .addCase(fetchComments.pending, (state) => {
        state.areCommentsLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.areCommentsLoading = false;
        state.comments.push(...action.payload.comments);
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.areCommentsLoading = false;
      })
      // Add comment.
      .addCase(addComment.pending, (state) => {
        state.isCommentBeingAdded = true;
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.isCommentBeingAdded = false;
        state.comments.unshift(action.payload.comment);
        state.addedCommentsCounter++;
      })
      .addCase(addComment.rejected, (state, action) => {
        state.isCommentBeingAdded = false;
      });
  },
});

export const { cleanupComments, incrementPage } = commentsSlice.actions;

export default commentsSlice.reducer;
