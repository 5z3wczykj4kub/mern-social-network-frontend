import { createSlice } from '@reduxjs/toolkit';

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    fetchedPosts: [],
    arePostsLoading: true,
    likeDrawer: {
      isOpen: false,
      isLoading: true,
      postIndex: null,
      users: [],
    },
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

export const sendFetchPostsReq = () => async (dispatch) => {
  dispatch(setArePostsLoading(true));
  const res = await fetch('/posts');
  const posts = await res.json();
  dispatch(setArePostsLoading(false));
  dispatch(fetchPosts(posts));
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
  fetchPosts,
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
