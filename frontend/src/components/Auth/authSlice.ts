import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { LoginUser } from './Login/types/state';
import { RegUser, State, User } from './Registration/types/state';

const initialState: State = {
  user: undefined,
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
  return (await fetch('http://localhost:4000/auth/user', { credentials: 'include' })).json();
}

export const getUser = createAsyncThunk('auth/user', () => checkUser());

  export const logout = createAsyncThunk('users/logout', async () => {
    const result = await fetch('http://localhost:4000/auth/logout', { credentials: 'include' }
    );
    return result.json();
  });

  export const checkAsyncUser = createAsyncThunk('users/checkAsyncUser', async (data:LoginUser) => {
  const res = await fetch('http://localhost:4000/auth/login', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'Application/json',
    },
    body: JSON.stringify(data),
  });
  return res.json();
  });

  export const addAsyncUser = createAsyncThunk('users/addAsyncUser', async (data:RegUser) => {
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
  reducers: {
   errorOff: (state) => {
      state.error.message = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAsyncUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.error.message = action.payload.message;
      })
      .addCase(addAsyncUser.rejected, (state, action) => {
        state.error.message = action.error.message;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(checkAsyncUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.error.message = action.payload.message;
      })
      .addCase(checkAsyncUser.rejected, (state, action) => {
        state.error.message = action.error.message;
      })
      .addCase(logout.fulfilled, (state, action) => {
        if (action.payload.message = 'Session destroy') { state.user = initialState.user; state.error.message = ''; }
      });
  },
});

export const { errorOff } = userSlice.actions;
export default userSlice.reducer;
