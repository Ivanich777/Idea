import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State, FeedbackProduct } from './types/State';

// import { LoginUser } from './Login/types/state';
// import { RegUser, State, User } from './Registration/types/state';

const initialState:State = {
  feedbacks: [],
  error: {
    message: '',
  }
};

export const addAsyncFeedback = createAsyncThunk('feedbacks/addAsyncFeedback', (data:FeedbackProduct) => fetch('http://localhost:4000/feedback', {
    method: 'Post',
    headers: {
      'Content-type': 'Application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json()).then((req) => req));

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addAsyncFeedback.fulfilled, (state, action) => {
        state.feedbacks.push(action.payload.newReq);
      });
  },
});
export default feedbackSlice.reducer;
