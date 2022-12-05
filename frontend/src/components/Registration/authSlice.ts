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
  },
};


export const addAsyncUser = createAsyncThunk('user/addAsyncUser', async (data) => {

  const res = await fetch('http://localhost:4000/auth/registration', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(data),
  });
   return res.json();
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAsyncUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(addAsyncUser.rejected, (state, action) => {
        state.error.message = action.error.message;
      });
  },
});

export default userSlice.reducer;
