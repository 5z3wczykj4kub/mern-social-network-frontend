import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseURL } from '../utils/constants/api';

export const getFriendsQuery = createAsyncThunk(
  'friends/getFriendsQuery',
  async ({ profileId, limit }, { signal, getState }) => {
    const { cursor } = getState().friends;

    try {
      const res = await fetch(
        `${baseURL}/users/${profileId}/friends?limit=${limit}${
          cursor ? `&cursor=${cursor}` : ''
        }`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          signal,
        }
      );
      let { count, rows } = await res.json();
      rows = rows.map((row) => ({
        fid: row.id,
        id: row.userId,
        firstName: row.firstName,
        lastName: row.lastName,
        avatarImageUrl: row.avatar,
      }));
      return { count, rows };
    } catch (error) {
      console.log(error.message);
    }
  }
);

const initialState = {
  entities: [],
  entitiesCount: null,
  cursor: null,
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
        const { count, rows } = action.payload;

        state.isLoading = false;
        state.entities.push(...rows);
        state.entitiesCount = count;
        state.cursor = rows[rows.length - 1].fid;
      })
      .addCase(getFriendsQuery.rejected, (state) => {
        state.isLoading = false;
        if (state.page === 0) return;
        state.page--;
      });
  },
});

export const { incrementPage, purge } = friendsSlice.actions;

export default friendsSlice.reducer;
