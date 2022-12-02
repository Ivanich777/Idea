import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State, User } from './types/state';

const initialState: State = {
  // users: [],
  user: {
    id: 0,
    email: '',
    password: '',
    name: '',
    surname: '',
    admin: false,
    phone: '',
  },
};

export const addAsyncUser = createAsyncThunk('users/addAsyncUsers', () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then((result) => result.json())
    .then((data) => data);
});

// export const regAsyncUser = createAsyncThunk('users/addAsyncUsers', () => {
//   return fetch('https://jsonplaceholder.typicode.com/users')
//     .then((result) => result.json())
//     .then((data) => data);
// });

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addAsyncUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    // builder.addCase(regAsyncUser.fulfilled, (state, action) => {
    //   state.user = action.payload;
    // });
  },
});

export default userSlice.reducer;
// export const { addAsyncUser } = userSlice.actions;
