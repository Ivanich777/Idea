import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

const initialState: State = {
  user: {
    id: 0,
    email: '',
    password: '',
    name: '',
  },
  error: {
    message: '',
  },
};

export const checkAsyncUser = createAsyncThunk('users/checkAsyncUser', async (data)=> {

const res = await fetch('http://localhost:4000/auth/login',{
  method:'POST',
  credentials:'include',
  headers: {
    'Content-Type': 'Application/json',
  },
  body: JSON.stringify(data),
});
return res.json();
});


const loginUserSlice = createSlice({
  name:'user',
  initialState,
  reducers:{},
  extraReducers:(builder)=> {
    builder
    .addCase(checkAsyncUser.fulfilled, (state, action) => {
      state.user = action.payload;
    })
    .addCase(checkAsyncUser.rejected, (state, action) => {
      state.error.message = action.error.message;
    });
  }
})


export default loginUserSlice.reducer;
