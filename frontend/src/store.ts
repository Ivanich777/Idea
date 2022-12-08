import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import userSlice from './components/Auth/authSlice';
import productSlice from './components/ProductList/productSlice';
import orderSlice from './components/Orders/orderSlice';
import categorySlice from './components/ProductAddForm/categorySlice';
import orderItemSlice from './components/Orders/OrderItem/orderItemSlice';
import basketSlice from './components/ProductCard/basketSlice';
import feedbackSlice from './components/Feedback/feedbackSlice';

const store = configureStore({
  reducer: {
    users: userSlice,
    products: productSlice,
    orders: orderSlice,
    categories: categorySlice,
    orderItems: orderItemSlice,
    basket: basketSlice,
    feedbacks: feedbackSlice,
  },
});
export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
