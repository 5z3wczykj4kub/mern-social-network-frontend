import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    fetchedPosts: [],
    page: 0,
    fetchingMorePosts: false,
    hasMorePosts: true,
    arePostsLoading: true,
    likeDrawer: {
      isOpen: false,
      isLoading: true,
      postIndex: null,
      users: [],
    },
  },
  reducers: {
    setFetchedPosts: (state, action) => {
      state.fetchedPosts = [...state.fetchedPosts, ...action.payload];
    },
    incrementPage: (state) => {
      state.page++;
    },
    setFetchingMorePosts: (state, action) => {
      state.fetchingMorePosts = action.payload;
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
      state.fetchedPosts[action.payload.index].isLikeLoading =
        action.payload.isLikeLoading;
    },
    openLikeDrawer: (state, action) => {
      state.likeDrawer.isOpen = true;
      state.likeDrawer.postIndex = action.payload;
    },
    closeLikeDrawer: (state) => {
      state.likeDrawer.isOpen = false;
    },
    setLikeDrawerUsers: (state, action) => {
      state.likeDrawer.users = action.payload;
    },
    setIsLikeDrawerLoading: (state, action) => {
      state.likeDrawer.isLoading = action.payload;
    },
    cleanupLikeDrawer: (state) => {
      state.likeDrawer.isLoading = true;
      state.likeDrawer.users = [];
    },
  },
});

export const sendFetchPostsReq = (page, limit) => async (dispatch) => {
  dispatch(setArePostsLoading(true));
  dispatch(setFetchingMorePosts(false));
  const res = await fetch(`/posts?page=${page}&limit=${limit}`);
  const posts = await res.json();
  dispatch(setArePostsLoading(false));
  if (posts.length === 0) {
    dispatch(setHasMorePosts(false));
    return;
  }
  dispatch(setFetchedPosts(posts));
  dispatch(incrementPage());
  dispatch(setFetchingMorePosts(false));
};

export const sendLikePostReq = (postId, userId, index) => async (dispatch) => {
  dispatch(setIsLikeLoading({ index, isLikeLoading: true }));
  const res = await fetch(`posts/like/${postId}/${userId}`, {
    method: 'PUT',
  });
  const { likes, isLiked } = await res.json();
  dispatch(setIsLikeLoading({ index, isLikeLoading: false }));
  dispatch(likePost({ postId, likes, isLiked }));
};

export const sendGetUsersWhoLikedThePostReq = (likes) => async (dispatch) => {
  if (likes.length === 0) {
    dispatch(setIsLikeDrawerLoading(false));
    return;
  }
  dispatch(setIsLikeDrawerLoading(true));
  const res = await fetch(`/users?ids=${likes.join(',')}&limit=10`);
  const users = await res.json();
  dispatch(setIsLikeDrawerLoading(false));
  dispatch(setLikeDrawerUsers(users));
};

export const {
  setFetchedPosts,
  incrementPage,
  setFetchingMorePosts,
  setHasMorePosts,
  likePost,
  setArePostsLoading,
  setIsLikeLoading,
  openLikeDrawer,
  closeLikeDrawer,
  setIsLikeDrawerLoading,
  setLikeDrawerUsers,
  cleanupLikeDrawer,
} = postSlice.actions;

export default postSlice.reducer;
