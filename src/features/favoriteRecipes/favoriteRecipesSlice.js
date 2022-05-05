import { selectSearchTerm } from "../searchTerm/searchTermSlice";
import { createSlice } from '@reduxjs/toolkit';

// Options Object //
const options = {
    name: 'favoriteRecipes',
    initialState: [],
    reducers: {
        addRecipe: (state, action) => {
            state.push(action.payload);
            return state;
        },
        removeRecipe: (state, action) => {
            return state.filter(recipe => recipe.id !== action.payload.id);
        }
    } 
};

// Slice //
export const favoriteRecipesSlice = createSlice(options);

// Selectors //
export const selectFavoriteRecipes = (state) => state.favoriteRecipes;

export const selectFilteredFavoriteRecipes = (state) => {
    const favoriteRecipes = selectFavoriteRecipes(state);
    const searchTerm = selectSearchTerm(state);

    return favoriteRecipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

// Exports //
export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;
export default favoriteRecipesSlice.reducer;
