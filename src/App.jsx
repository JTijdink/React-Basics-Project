import { useState } from "react";
import { Flex, useToast } from "@chakra-ui/react";
import { data } from "./utils/data";
import { RecipesPage } from "../src/pages/RecipesPage";
import { RecipePage } from "../src/pages/RecipePage";

export const App = () => {
  const [recipe, useRecipe] = useState(null);
  const [filterTerm, useFilterTerm] = useState("All");
  const [favouriteRecipes, useFavouriteRecipes] = useState([]);
  let recipes = data.hits;
  const toast = useToast();

  if (filterTerm === "Vegetarian") {
    recipes = recipes.filter((recipe) =>
      recipe.recipe.healthLabels.includes("Vegetarian")
    );
  } else if (filterTerm === "Vegan") {
    recipes = recipes.filter((recipe) =>
      recipe.recipe.healthLabels.includes("Vegan")
    );
  } else if (filterTerm === "Favourites") {
    recipes = favouriteRecipes;
  }

  const toggleRecipeFavourite = (recipeToToggle) => {
    const index = favouriteRecipes.findIndex(
      (recipe) => recipe.recipe.label === recipeToToggle.label
    );
    if (index < 0) {
      recipeToToggle.favourited = true;
      toast({
        title: "Item added",
        description: `${recipeToToggle.label} added to favourites`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      useFavouriteRecipes((prevRecipies) => {
        return [...prevRecipies, { recipe: recipeToToggle }];
      });
    } else {
      recipeToToggle.favourited = false;
      toast({
        title: "Item removed",
        description: `${recipeToToggle.label} removed from favourites`,
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      useFavouriteRecipes((prevRecipies) => {
        return [
          ...prevRecipies.slice(0, index),
          ...prevRecipies.slice(index + 1),
        ];
      });
    }
  };

  return (
    <Flex minHeight="100vh" direction="column" bg="gray.600">
      {recipe ? (
        <RecipePage
          recipe={recipe}
          useRecipe={useRecipe}
          toggleRecipeFavourite={toggleRecipeFavourite}
        />
      ) : (
        <RecipesPage
          recipes={recipes}
          useRecipe={useRecipe}
          favouriteRecipes={favouriteRecipes}
          filterTerm={filterTerm}
          useFilterTerm={useFilterTerm}
        />
      )}
    </Flex>
  );
};