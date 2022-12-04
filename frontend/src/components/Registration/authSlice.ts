import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State, User } from './types/state';

const initialState: State = {
  user: {
    id: 0,
    email: '',
    password: '',
    name: '',
    surname: '',
    admin: false,
    phone: '',
  },
  error: {
    message: '',
  }
};

export const addAsyncUser = createAsyncThunk('user/addAsyncUser', () => fetch('https://localhost:4000/auth/registration')
    .then((result) => result.json())
    .then((data) => data));

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addAsyncUser.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(addAsyncUser.rejected, (state, action) => {
      state.error.message = action.error.message;
    });
  },
});

export default userSlice.reducer;
