import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRecentFriendsQuery = createAsyncThunk(
  'recentFriendsSlice/getRecentFriendsQuery',
  async ({ profileId, page, limit }, { signal }) => {
    try {
      const res = await fetch(
        `/api/profiles/${profileId}/friends?page=${page}&limit=${limit}`,
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

const initialState = {
  entities: [],
  entitiesTotalCount: null,
  isLoading: false,
};

export const recentFriendsSlice = createSlice({
  name: 'recentFriends',
  initialState,
  reducers: {
    purge: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecentFriendsQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getRecentFriendsQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities.push(...action.payload.entities);
        state.entitiesTotalCount = action.payload.entitiesCount;
      })
      .addCase(getRecentFriendsQuery.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { purge } = recentFriendsSlice.actions;

export default recentFriendsSlice.reducer;
