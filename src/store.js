import { configureStore, createSlice } from '@reduxjs/toolkit';
import loadImages from './images';

const imageSlice = createSlice({
  name: 'images',
  initialState: loadImages(),
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    images: imageSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export const { addToCart } = cartSlice.actions;
export default store;
