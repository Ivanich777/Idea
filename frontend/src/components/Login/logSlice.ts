import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State, User } from './types/state';

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

export async function checkUser():Promise<
| {
  isLoggedIn:true;
  user:User;
}
| {
  isLoggedIn: false;
  user: User;
}
> {
  return (await fetch('http://localhost:4000/auth/user', {credentials:'include'})).json()
}

export const getUser = createAsyncThunk('auth/user', ()=> checkUser())

export const logout = createAsyncThunk('users/logout', async (data)=> {
  const result = await fetch('http://localhost:4000/auth/logout',{
    method:'POST'
  })
})

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
    .addCase(getUser.fulfilled,(state,action)=> {
      // console.log(action.payload.user)
      state.user = action.payload.user;
      console.log(state.user);
      
    })
    .addCase(checkAsyncUser.fulfilled, (state, action) => {
      state.user = action.payload.user;
      console.log(state.user);
      
    })
    .addCase(checkAsyncUser.rejected, (state, action) => {
      state.error.message = action.error.message;
    })
    .addCase(logout.fulfilled, (state, action) => {
      state.user.id = 0;
    });
  }
})


export default loginUserSlice.reducer;
