import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { addComment } from './commentsSlice';

export const fetchDetailedPost = createAsyncThunk(
  'post/fetchDetailedPost',
  async (postId, { signal }) => {
    try {
      const res = await fetch(`/api/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        signal,
      });
      return await res.json();
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const toggleLike = createAsyncThunk(
  'post/toggleLike',
  async (postId, { signal }) => {
    try {
      const res = await fetch(`/api/posts/${postId}/likes`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        method: 'POST',
        signal,
      });
      return await res.json();
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const toggleLikeHandler = (entities, action) => {
  const likeIds = action.payload;
  const postId = action.meta.arg;
  const post = entities.find(({ id }) => id === postId);
  if (!post) return;
  post.likes = likeIds;
};

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    fetchedPosts: [],
    page: 0,
    cursor: null,
    hasMorePosts: true,
    arePostsLoading: true,
    isPostLoading: true,
  },
  reducers: {
    setFetchedPosts: {
      reducer: (state, action) => {
        state.fetchedPosts = [...state.fetchedPosts, ...action.payload];
      },
      prepare: (data) => {
        let { rows: posts } = data;
        posts = posts.map((post) => ({
          id: post.id.toString(),
          author: post.author.id.toString(),
          firstName: post.author.firstName,
          lastName: post.author.lastName,
          avatarImageUrl: post.author.avatar,
          postImageUrl: post.media,
          textContent: post.content,
          likes: [], // FIXME: Change likes to number
          isLiked: false,
          comments: post.comments,
        }));
        return { payload: posts };
      },
    },
    incrementPage: (state) => {
      state.page++;
    },
    setCursor: (state, action) => {
      state.cursor = action.payload;
    },
    setHasMorePosts: (state, action) => {
      state.hasMorePosts = action.payload;
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
      state.fetchedPosts[
        state.fetchedPosts.findIndex(({ id }) => id === action.payload.postId)
      ].isLikeLoading = action.payload.isLikeLoading;
    },
    cleanupPosts: (state) => {
      state.fetchedPosts = [];
      state.page = 0;
      state.hasMorePosts = true;
      state.arePostsLoading = true;
      state.isPostLoading = true;
      state.cursor = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchDetailedPost
      .addCase(fetchDetailedPost.pending, (state) => {
        state.isPostLoading = true;
      })
      .addCase(fetchDetailedPost.fulfilled, (state, action) => {
        state.isPostLoading = false;
        state.fetchedPosts = [{ ...action.payload }];
      })
      .addCase(fetchDetailedPost.rejected, (state, action) => {
        state.isPostLoading = false;
      })
      // toggleLike
      .addCase(toggleLike.fulfilled, (state, action) => {
        toggleLikeHandler(state.fetchedPosts, action);
      })
      // addComment
      .addCase(addComment.fulfilled, (state, action) => {
        const commentId = action.payload.comment.id;
        const commentedPostId = state.fetchedPosts.find(
          ({ id }) => id === action.payload.commentedPostId
        );
        commentedPostId.comments.unshift(commentId);
      });
  },
});

// Fetch many posts.
export const sendFetchPostsReq =
  (page, limit, signal) => async (dispatch, getState) => {
    const cursor = getState().post.cursor;
    dispatch(setArePostsLoading(true));
    try {
      const res = await fetch(
        `${
          'http://192.168.0.198:5000/api' || process.env.REACT_APP_BASE_URL
        }/posts?limit=${limit}${cursor ? `&cursor=${cursor}` : ''}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          signal,
        }
      );
      const posts = await res.json();
      dispatch(setArePostsLoading(false));
      if (posts.count === posts.rows.length) {
        dispatch(setHasMorePosts(false));
        return;
      }
      dispatch(setFetchedPosts(posts));
      dispatch(setCursor(posts.rows[posts.rows.length - 1].id));
      dispatch(incrementPage());
    } catch (error) {
      console.log(error.message);
    }
  };

export const {
  setFetchedPosts,
  incrementPage,
  setCursor,
  setHasMorePosts,
  likePost,
  setArePostsLoading,
  setIsLikeLoading,
  cleanupPosts,
  cleanupDetailedPost,
} = postSlice.actions;

export default postSlice.reducer;
