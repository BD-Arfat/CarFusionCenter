import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/Products/ProductsSlice';
import filtersReducer from '../features/filters/FilterSlices';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filter : filtersReducer
  },
});
