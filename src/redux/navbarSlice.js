import { createSlice } from '@reduxjs/toolkit';

export const navbarSclice = createSlice({
  name: 'navbar',
  initialState: {
    isTogglerTouched: false,
    isDropdownMenuOpen: false,
    isSearchFocused: false,
    isSearchEmpty: true,
    isSearchUsed: false,
    debounceSearchTimerId: null,
    searchedUsers: [],
  },
  reducers: {
    toggleDropdownMenu: (state) => {
      state.isTogglerTouched = true;
      state.isDropdownMenuOpen = !state.isDropdownMenuOpen;
      if (state.isSearchFocused) state.isSearchFocused = false;
    },
    closeDropdownMenu: (state) => {
      state.isDropdownMenuOpen = false;
    },
    setIsSearchFocued: (state, action) => {
      state.isSearchFocused = action.payload;
    },
    setIsSearchEmpty: (state, action) => {
      state.isSearchEmpty = action.payload;
    },
    setIsSearchUsed: (state, action) => {
      state.isSearchUsed = action.payload;
    },
    setDebounceSearchTimerId: (state, action) => {
      state.debounceSearchTimerId = action.payload;
    },
    setSearchedUsers: (state, action) => {
      state.searchedUsers = action.payload;
    },
    cleanupSearch: (state) => {
      state.searchedUsers = [];
      state.isSearchEmpty = true;
    },
  },
});

export const searchUsers = (event) => (dispatch, getState) => {
  const { debounceSearchTimerId } = getState().navbar;
  clearTimeout(debounceSearchTimerId);
  const inputValue = event.target.value.trim();
  if (inputValue.length === 0) {
    dispatch(setIsSearchEmpty(true));
    dispatch(setIsSearchUsed(false));
    dispatch(setSearchedUsers([]));
    return;
  }
  dispatch(setIsSearchUsed(true));
  dispatch(setIsSearchEmpty(false));
  const timerId = setTimeout(async () => {
    const res = await fetch(`/users?query=${encodeURI(inputValue)}`);
    const users = await res.json();
    dispatch(setSearchedUsers(users));
    dispatch(setIsSearchUsed(false));
  }, 1000);
  dispatch(setDebounceSearchTimerId(timerId));
};

export const {
  toggleDropdownMenu,
  closeDropdownMenu,
  setIsSearchFocued,
  setIsSearchEmpty,
  setIsSearchUsed,
  setDebounceSearchTimerId,
  setSearchedUsers,
  cleanupSearch,
} = navbarSclice.actions;

export default navbarSclice.reducer;
