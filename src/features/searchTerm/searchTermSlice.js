import { createSlice } from "@reduxjs/toolkit";


// Options Object //
const options = {
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => {
            return action.payload;
        },
        clearSearchTerm: (state, action) => {
            return '';
        } 
    }
};

// Slice //
export const searchTermSlice = createSlice(options);


// Selectors //
export const selectSearchTerm = (state) => state.searchTerm;

// Exports //
export const { setSearchTerm, clearSearchTerm } = searchTermSlice.actions;
export default searchTermSlice.reducer;