import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from './auth-operations';

export const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const handleRejected = (state, action) => {
  state.auth.error = action.payload;
}

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [register.rejected]: handleRejected,

    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.rejected]: handleRejected,

    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [logOut.rejected]: handleRejected,
    // [authOperations.fetchCurrentUser.pending](state) {
    //   state.isFetchingCurrentUser = true;
    // },
    // [authOperations.fetchCurrentUser.fulfilled](state, action) {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isFetchingCurrentUser = false;
    // },
    // [authOperations.fetchCurrentUser.rejected](state) {
    //   state.isFetchingCurrentUser = false;
    // },
  },
});

export const authReducer = authSlice.reducer;