import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { toggleLike, toggleLikeHandler } from './postSlice';

export const fetchProfile = createAsyncThunk(
  'profile/fetchProfile',
  async (profileId, { signal }) => {
    try {
      const res = await fetch(`/api/profiles/${profileId}`, {
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
  async ({ profileId, page, limit }, { signal }) => {
    try {
      const res = await fetch(
        `/api/profiles/${profileId}/posts?page=${page}&limit=${limit}`,
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

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    // Profile
    id: null,
    isLoading: true,
    firstName: null,
    lastName: null,
    avatarImageUrl: null,
    // Posts
    profilePosts: [],
    arePorfilePostsLoading: true,
    profilePostsPage: 0,
    profilePostsTotalCount: null,
  },
  reducers: {
    incrementProfilePostsPage: (state) => {
      state.profilePostsPage++;
    },
    cleanupProfile: (state) => {
      // Profile
      state.id = null;
      state.isLoading = true;
      state.firstName = null;
      state.lastName = null;
      state.avatarImageUrl = null;
      // Posts
      state.profilePosts = [];
      state.arePorfilePostsLoading = true;
      state.profilePostsPage = 0;
      state.profilePostsTotalCount = null;
    },
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
        state.avatarImageUrl = payload.avatarImageUrl;
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.isLoading = true;
      })
      // fetchProfilePosts
      .addCase(fetchProfilePosts.pending, (state) => {
        state.arePorfilePostsLoading = true;
      })
      .addCase(fetchProfilePosts.fulfilled, (state, { payload }) => {
        state.profilePosts.push(...payload.posts);
        state.profilePostsTotalCount = payload.postsTotalCount;
        state.arePorfilePostsLoading = false;
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

export const { incrementProfilePostsPage, cleanupProfile } =
  profileSlice.actions;

export default profileSlice.reducer;
