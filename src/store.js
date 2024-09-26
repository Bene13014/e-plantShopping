import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice'; // Chemin correct selon votre structure

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // autres reducers si nécessaire
  },
});

export default store;
