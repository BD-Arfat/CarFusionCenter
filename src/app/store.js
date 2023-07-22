import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../features/Products/ProductsSlice';
import tagsReducer from '../features/Tags/TagsSlice';
import filtersReducer from '../features/filters/FilterSlices';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    tags : tagsReducer,
    filter : filtersReducer
  },
});
