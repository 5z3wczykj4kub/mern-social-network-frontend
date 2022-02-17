import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseURL } from '../utils/constants/api';

export const getRecentFriendsQuery = createAsyncThunk(
  'recentFriendsSlice/getRecentFriendsQuery',
  async ({ profileId, limit }, { signal }) => {
    try {
      const res = await fetch(
        `${baseURL}/users/${profileId}/friends?limit=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          signal,
        }
      );
      let { rows: friends, count } = await res.json();
      friends = friends.map((friend) => ({
        id: friend.userId.toString(),
        firstName: friend.firstName,
        lastName: friend.lastName,
        avatarImageUrl: friend.avatar,
      }));
      return {
        entities: friends,
        entitiesCount: count,
      };
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
