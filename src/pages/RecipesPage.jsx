import { Flex, Grid, Heading } from "@chakra-ui/react";
import { SearchBar } from "../components/ui/SearchBar";
import { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { Header } from "../components/Header";

export const RecipesPage = ({
  recipes,
  useRecipe,
  filterTerm,
  useFilterTerm,
}) => {
  const [searchTerm, useSearchTerm] = useState("");

  recipes = recipes.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Flex direction={"column"} align={"center"} p={10}>
      <Header useFilterTerm={useFilterTerm} filterTerm={filterTerm} />
      <Heading
        color="cyan.50"
        fontSize={["5xl", "6xl", "7xl", "8xl"]}
        letterSpacing={1.5}
        fontWeight={"hairline"}
        borderBottom={"1px solid white"}
        mt={10}
      >
        Food App
      </Heading>
      <SearchBar
        searchTerm={searchTerm}
        useSearchTerm={useSearchTerm}
        mt={10}
        w={["90%", "80%", "60%"]}
        fontWeight={"bold"}
        color={"gray.200"}
      />
      <Grid
        templateColumns={[
          "repeat(1, 1fr)",
          null,
          "repeat(2, 1fr)",
          null,
          "repeat(3, 1fr)",
          "repeat(4, 1fr)",
        ]}
        gap={20}
        justify="center"
      >
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.recipe.label}
            recipe={recipe.recipe}
            useRecipe={useRecipe}
          />
        ))}
      </Grid>
    </Flex>
  );
};