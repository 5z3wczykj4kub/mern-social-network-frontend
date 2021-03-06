import { createSlice } from '@reduxjs/toolkit';
import { baseURL } from '../utils/constants/api';

export const navbarSclice = createSlice({
  name: 'navbar',
  initialState: {
    isTogglerTouched: false,
    isDropdownMenuOpen: false,
    isSearchListVisible: false,
    isSearchListEmpty: true,
    isLoading: false,
    debounceSearchTimerId: null,
    searchedUsers: [],
    isNavbarDesktopUsed: window.matchMedia('(min-width: 768px)').matches,
  },
  reducers: {
    toggleDropdownMenu: (state) => {
      state.isTogglerTouched = true;
      state.isDropdownMenuOpen = !state.isDropdownMenuOpen;
      if (state.isSearchListVisible) state.isSearchListVisible = false;
    },
    closeNavbar: (state) => {
      state.isDropdownMenuOpen = false;
      state.isSearchListVisible = false;
    },
    closeDropdownMenu: (state) => {
      state.isDropdownMenuOpen = false;
    },
    setIsSearchListVisible: (state, action) => {
      state.isSearchListVisible = action.payload;
    },
    setIsSearchListEmpty: (state, action) => {
      state.isSearchListEmpty = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setDebounceSearchTimerId: (state, action) => {
      state.debounceSearchTimerId = action.payload;
    },
    setSearchedUsers: (state, action) => {
      state.searchedUsers = action.payload;
    },
    cleanupSearch: (state) => {
      state.searchedUsers = [];
      state.isSearchListEmpty = true;
    },
    setIsNavbarDesktopUsed: (state, action) => {
      state.isNavbarDesktopUsed = action.payload;
    },
    cleanupNavbar: (state) => {
      state.isTogglerTouched = false;
      state.isDropdownMenuOpen = false;
      state.isSearchListVisible = false;
      state.isSearchListEmpty = true;
      state.isLoading = false;
      state.debounceSearchTimerId = null;
      state.searchedUsers = [];
      state.isNavbarDesktopUsed =
        window.matchMedia('(min-width: 768px)').matches;
    },
  },
});

let prevAbortController = null;

export const searchUsers = (event) => (dispatch, getState) => {
  const { debounceSearchTimerId } = getState().navbar;
  clearTimeout(debounceSearchTimerId);
  if (prevAbortController) prevAbortController.abort();
  const inputValue = event.target.value.trim();
  if (inputValue.length === 0) {
    dispatch(setIsSearchListEmpty(true));
    dispatch(setIsLoading(false));
    dispatch(setSearchedUsers([]));
    return;
  }
  dispatch(setIsLoading(true));
  dispatch(setIsSearchListEmpty(false));
  const timerId = setTimeout(async () => {
    prevAbortController = new AbortController();
    try {
      const res = await fetch(
        `${baseURL}/users?search=${encodeURI(inputValue)}&limit=5`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
          signal: prevAbortController.signal,
        }
      );
      const { rows: users } = await res.json();
      dispatch(setSearchedUsers(users));
      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error.message);
    }
  }, 500);
  dispatch(setDebounceSearchTimerId(timerId));
};

export const {
  toggleDropdownMenu,
  closeNavbar,
  closeDropdownMenu,
  setIsSearchListVisible,
  setIsSearchListEmpty,
  setIsLoading,
  setDebounceSearchTimerId,
  setSearchedUsers,
  cleanupSearch,
  setIsNavbarDesktopUsed,
  cleanupNavbar,
} = navbarSclice.actions;

export default navbarSclice.reducer;
