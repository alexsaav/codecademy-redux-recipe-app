import allRecipesData from '../../data.js';
import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';

// Action Creators //
export const loadData = () => {
    return { 
        type: 'allRecipes/loadData', 
        payload: allRecipesData
    };
};

// Initial State //
const initialState = allRecipesData;

// Reducer //
export const allRecipesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'allRecipes/loadData':
            return action.payload;
        case 'favoriteRecipes/addRecipe':
            return state.filter(recipe => recipe.id !== action.payload.id);
        case 'favoriteRecipes/removeRecipe':
            return [...state, action.payload]
        default:
            return state;
    }
};

// Selectors //

export const selectAllRecipes = state => state.allRecipes;

// Retrieves the recipes based on the searchTerm in the state.
export const selectFilteredAllRecipes = state => {
    const allRecipes = selectAllRecipes(state);
    const searchTerm = selectSearchTerm(state);
    return allRecipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
};

export default allRecipesReducer;