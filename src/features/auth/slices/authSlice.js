import { createSlice } from '@reduxjs/toolkit';

const savedUser = JSON.parse(localStorage.getItem('authUser'));

const initialState = {
  isAuthenticated: !!savedUser,
  user: savedUser || null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem('authUser', JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem('authUser');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
