import * as data from '../data.json';



export function FavoriteRecipeNames() {


    const keys = Object.keys(data.favorites);
    const recipeNames = keys.map((recipe) => 
                       data.favorites[recipe].name
                       );

                      return recipeNames;

}

export function RecommendedRecipeNames() {


    const keys = Object.keys(data.recommended);
    const recipeNames = keys.map((recipe) => 
                       data.recommended[recipe].name
                       );

                      return recipeNames;

}