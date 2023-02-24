import { Flex, Heading, Text } from "@chakra-ui/react";

export const RecipeInformation = ({ recipe }) => {
  return (
    <Flex className="recipe-information" direction={"column"} gap={4}>
      <Text color={"gray.500"} fontWeight={"bold"}>
        {recipe.dishType[0].toUpperCase()}
      </Text>
      <Heading>{recipe.label}</Heading>
      <Text>
        Total cooking time: <b>{recipe.totalTime} minutes</b>
      </Text>
      <Text>
        Servings: <b>{recipe.yield}</b>
      </Text>
      <Text>
        <b>Ingredients:</b>
      </Text>
      {recipe.ingredientLines.map((line) => {
        return (
          <Text key={line} mb={2} color={"gray.500"}>
            {line}
          </Text>
        );
      })}
    </Flex>
  );
};