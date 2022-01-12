import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getFriendsQuery = createAsyncThunk(
  'friends/getFriendsQuery',
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
  entitiesCount: null,
  page: 0,
  isLoading: false,
};

export const friendsSlice = createSlice({
  name: 'friends',
  initialState,
  reducers: {
    incrementPage: (state) => {
      state.page++;
    },
    purge: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFriendsQuery.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFriendsQuery.fulfilled, (state, action) => {
        state.isLoading = false;
        state.entities.push(...action.payload.entities);
        state.entitiesCount = action.payload.entitiesCount;
      })
      .addCase(getFriendsQuery.rejected, (state, action) => {
        state.isLoading = false;
        if (state.page === 0) return;
        state.page--;
      });
  },
});

export const { incrementPage, purge } = friendsSlice.actions;

export default friendsSlice.reducer;
