import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    user: null,
    error: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { loginSuccess, loginFailure, logout } = userSlice.actions;

export const login = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8080/api/users/login', credentials);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure('Login failed. Please check your credentials.'));
  }
};

export default userSlice.reducer;

