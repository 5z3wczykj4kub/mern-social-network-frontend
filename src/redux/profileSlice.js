import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseURL } from '../utils/constants/api';
import { toggleLike, toggleLikeHandler } from './postSlice';

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (profileId, { signal }) => {
    try {
      const res = await fetch(`${baseURL}/users/${profileId}`, {
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

export const fetchProfilePosts = createAsyncThunk(
  'profile/fetchProfilePosts',
  async ({ profileId, limit }, { signal, getState }) => {
    const cursor = getState().profile.cursor;
    try {
      const res = await fetch(
        `${baseURL}/users/${profileId}/posts?limit=${limit}${
          cursor ? `&cursor=${cursor}` : ''
        }`,
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
  },
  {
    condition: ({ onMount = false }, { getState }) => {
      const { cursor, hasMorePosts } = getState().profile;
      if ((cursor !== null && onMount) || !hasMorePosts) return false;
    },
  }
);

const initialState = {
  id: null,
  isLoading: true,
  firstName: null,
  lastName: null,
  email: null,
  avatarImageUrl: null,
  location: null,
  gender: null,
  dateOfBirth: null,
  profilePosts: [],
  cursor: null,
  hasMorePosts: true,
  arePorfilePostsLoading: true,
  profilePostsPage: 0,
  friendship: null,
  friends: null,
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    updateFriendshipStatus: (state, action) => {
      state.friendship = action.payload;
    },
    incrementProfilePostsPage: (state) => {
      state.profilePostsPage++;
    },
    cleanupProfile: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // fetchProfile
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.id = payload.id;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.email = payload.email;
        state.avatarImageUrl = payload.avatarImageUrl;
        state.gender = payload.gender;
        state.location = payload.domicile;
        state.dateOfBirth = payload.dateOfBirth;
        state.friendship = payload.friendship;
        state.friends = payload.friends;
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.isLoading = true;
      })
      // fetchProfilePosts
      .addCase(fetchProfilePosts.pending, (state) => {
        state.arePorfilePostsLoading = true;
      })
      .addCase(fetchProfilePosts.fulfilled, (state, action) => {
        const { count, rows: posts } = action.payload;

        state.arePorfilePostsLoading = false;
        state.hasMorePosts = count !== posts.length;

        if (posts.length === 0) return;

        state.profilePosts.push(
          ...posts.map((post) => ({
            id: post.id.toString(),
            author: post.author.id.toString(),
            firstName: post.author.firstName,
            lastName: post.author.lastName,
            avatarImageUrl: post.author.avatar,
            postImageUrl: post.media,
            textContent: post.content,
            likes: [], // REMOVE LATER
            isLiked: false,
            comments: post.comments,
          }))
        );
        state.cursor = posts[posts.length - 1].id;
      })
      .addCase(fetchProfilePosts.rejected, (state) => {
        state.arePorfilePostsLoading = false;
        if (state.profilePostsPage === 0) return;
        state.profilePostsPage--;
      })
      // toggleLike
      .addCase(toggleLike.fulfilled, (state, action) => {
        toggleLikeHandler(state.profilePosts, action);
      });
  },
});

export const {
  incrementProfilePostsPage,
  cleanupProfile,
  updateFriendshipStatus,
} = profileSlice.actions;

export default profileSlice.reducer;
