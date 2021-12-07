import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

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

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    id: null,
    isLoading: true,
    firstName: null,
    lastName: null,
    avatarImageUrl: null,
  },
  reducers: {
    cleanupProfile: (state) => {
      state.id = null;
      state.isLoading = true;
      state.firstName = null;
      state.lastName = null;
      state.avatarImageUrl = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.avatarImageUrl = payload.avatarImageUrl;
      })
      .addCase(fetchProfile.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { cleanupProfile } = profileSlice.actions;

export default profileSlice.reducer;
