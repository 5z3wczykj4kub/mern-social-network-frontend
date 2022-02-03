import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseURL } from '../utils/constants/api';
import { syncNumberOfCommentsAfterFirstFetch } from './postSlice';

export const fetchComments = createAsyncThunk(
  'comments/fetchComments',
  async ({ id: postId, limit }, { signal, getState, dispatch }) => {
    const { cursor, comments: alreadyFetchedComments } = getState().comments;

    try {
      const res = await fetch(
        `${baseURL}/posts/${postId}/comments?limit=${limit}${
          cursor ? `&cursor=${cursor}` : ''
        }`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          signal,
        }
      );
      const data = await res.json();

      let { count, rows: comments } = data;

      if (alreadyFetchedComments.length === 0)
        dispatch(syncNumberOfCommentsAfterFirstFetch({ postId, count }));

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
  }
);

export const addComment = createAsyncThunk(
  'comments/addComment',
  async ({ postId, comment }, { getState }) => {
    try {
      const res = await fetch(`${baseURL}/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ content: comment }),
      });
      const data = await res.json();
      const {
        authProfile: { firstName, lastName, avatarImageUrl },
      } = getState();
      const commentObj = {
        comment: {
          id: data.id.toString(),
          author: data.authorId.toString(),
          firstName,
          lastName,
          avatarImageUrl,
          textContent: data.content,
          date: data.createdAt,
        },
        commentedPostId: data.postId.toString(),
      };
      return commentObj;
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
        state.cursor =
          comments.length > 1 ? comments[comments.length - 1].id : null;
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
