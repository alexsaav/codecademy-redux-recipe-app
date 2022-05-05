import { configureStore } from '@reduxjs/toolkit';
import { allRecipesReducer } from '../features/allRecipes/allRecipesSlice';
import { favoriteRecipesSlice } from '../features/favoriteRecipes/favoriteRecipesSlice';
import { searchTermSlice } from '../features/searchTerm/searchTermSlice';

// Reducer Object //
const reducer = {
    allRecipes: allRecipesReducer,
    favoriteRecipes: favoriteRecipesSlice.reducer,
    searchTerm: searchTermSlice.reducer
};

// Configure Store (configureStore()) Declaration //
/*
configureStore() accepts a single configuration object parameter. The input object should have a reducer property that defines 
either a function to be used as the root reducer, or an object of slice reducers which will be combined to create a root reducer.
*/
export const store = configureStore({reducer});
  
export default store;