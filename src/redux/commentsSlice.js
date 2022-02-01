import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async ({ id: postId }, { signal, getState }) => {
    const { cursor } = getState().comments;

    try {
      const res = await fetch(
        `${
          'http://192.168.0.198:5000/api' || process.env.REACT_APP_BASE_URL
        }/posts/${postId}/comments${cursor ? `?cursor=${cursor}` : ''}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          signal,
        }
      );
      const data = await res.json();

      let { count, rows: comments } = data;

      comments = comments.map((comment) => ({
        id: comment.id.toString(),
        author: comment.author.id.toString(),
        firstName: comment.author.firstName,
        lastName: comment.author.lastName,
        avatarImageUrl: comment.author.avatar,
        textContent: comment.content,
      }));

      return { count, comments };
    } catch (error) {
      console.log(error.message);
    }
  },
  {
    /**
     * FIXME:
     * Instead of this, use a flag as this will cause trouble after adding a comment
     * (incrementing the size of comments array).
     */
    condition: (_, { getState }) =>
      getState().comments.count === getState().comments.length ? false : true,
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
    cursor: null,
    count: null,
    addedCommentsCounter: 0,
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
      state.cursor = null;
      state.count = null;
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
        const { count, comments } = action.payload;

        state.areCommentsLoading = false;
        state.count = count;
        state.cursor = comments[comments.length - 1].id;
        state.comments.push(...comments);
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
