import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FavoriteButton from "../../components/FavoriteButton";
import Recipe from "../../components/Recipe";
import { favoriteRecipesSlice, selectFilteredFavoriteRecipes } from './favoriteRecipesSlice';

const unfavoriteIconUrl = 'https://static-assets.codecademy.com/Courses/Learn-Redux/Recipes-App/icons/unfavorite.svg'

const { removeRecipe } = favoriteRecipesSlice.actions;

export const FavoriteRecipes = () =>{
    const favoriteRecipes = useSelector(selectFilteredFavoriteRecipes);
    const dispatch = useDispatch();
  
    //Removes favorite recipe
    const onRemoveRecipeHandler = (recipe) => {
        dispatch(removeRecipe(recipe));
    };
    
    
    //Checks to see if favoriteRecipes is empty.
    const isEmpty = favoriteRecipes.length === 0;
    if (isEmpty) {
        return (
            <div className = "recipes-container">
                <p> Choose Your Favorites Recipes! </p>
            </div>
        );
    }
    
    return (
        <div className="recipes-container">
            {favoriteRecipes.map(createRecipeComponent)}
        </div>
    );
    
    // Helper Function
    function createRecipeComponent(recipe) {
        return (
            <Recipe recipe={recipe} key={recipe.id}>
                <FavoriteButton
                onClickHandler={() => onRemoveRecipeHandler(recipe)}
                icon={unfavoriteIconUrl}
                >
                    Remove Favorite
                </FavoriteButton>
            </Recipe>
        );
    }
};