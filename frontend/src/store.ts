import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import userSlice from './components/Auth/authSlice';
import productSlice from './components/ProductList/productSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
    products: productSlice,
  },
});
export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
