import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from '../types';

const initialState: AuthState = {
  isLogin: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, { payload }) {
      if (payload.user) {
        state.user = payload.user;
        state.isLogin = true;
      }
    },
    logOut(state) {
      state.user = null;
      state.isLogin = false;
    },
  },
});

export const authAction = authSlice.actions;

export default authSlice.reducer;
