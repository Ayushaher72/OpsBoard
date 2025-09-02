// Redux store setup using Redux Toolkit.
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/slices/authSlice';
import userReducer from '../features/users/slices/userSlice';
import formReducer from '../features/users/slices/formSlice';
import usersReducer from '../features/users/slices/createAsyncThunk'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    form: formReducer,
    users: usersReducer,
  },
});
