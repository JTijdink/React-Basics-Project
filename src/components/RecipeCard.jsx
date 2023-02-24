import { Box, Image, Flex, Text } from "@chakra-ui/react";
import { Labels } from "./Labels";

export const RecipeCard = ({ recipe, useRecipe }) => {
  const healthLabels = recipe.healthLabels.filter(
    (label) => label === "Vegetarian" || label === "Vegan"
  );
  const dietLabels = recipe.dietLabels;
  const cautionLabels = recipe.cautions;
  const dishType =
    recipe.dishType[0][0].toUpperCase() + recipe.dishType[0].slice(1);

  return (
    <Box
      w={320}
      borderRadius="lg"
      borderWidth="1px"
      bg="white"
      boxShadow={"2xl"}
      overflow="hidden"
      mt={10}
      p={5}
      transition={"opacity 200ms ease"}
      _hover={{
        cursor: "pointer",
        opacity: "0.5",
      }}
      onClick={() => useRecipe(recipe)}
    >
      <Image
        src={recipe.image}
        h={160}
        w={"100%"}
        objectFit="cover"
        borderBottom={"3px solid black"}
      ></Image>
      <Flex
        direction="column"
        align={"center"}
        mt={4}
        textAlign="center"
        gap={3}
        color={"gray.700"}
        fontSize={"xs"}
      >
        <Text color="gray.400" fontWeight={"bold"}>
          {recipe.mealType[0].toUpperCase()}
        </Text>
        <Text color="gray.900" fontSize={"xl"} fontWeight="extrabold">
          {recipe.label}
        </Text>
        <Labels labels={healthLabels} bg="purple.100" />
        <Labels labels={dietLabels} bg="green.100" />
        <Text>
          Dish: <b>{dishType}</b>
        </Text>
        {cautionLabels.length > 0 && <Text>Cautions:</Text>}
        <Labels labels={cautionLabels} bg="red.100" />
      </Flex>
    </Box>
  );
};