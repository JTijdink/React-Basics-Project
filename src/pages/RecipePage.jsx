import { Box, Flex, Grid, IconButton, Image } from "@chakra-ui/react";
import { RecipeInformation } from "../components/RecipeInfomation";
import { RecipeLabels } from "../components/RecipeLabels";
import { ChevronLeftIcon, StarIcon } from "@chakra-ui/icons";

export const RecipePage = ({ recipe, useRecipe, toggleRecipeFavourite }) => {
  return (
    <Box bg={"white"} w={["100%", null, "70%"]} mx={"auto"} maxW={800}>
      <Flex justify={"space-between"}>
        <IconButton
          icon={<ChevronLeftIcon fontSize={20} />}
          aria-label="Return to homepage"
          p={10}
          bg={"none"}
          onClick={() => useRecipe(null)}
        />
        <IconButton
          icon={
            <StarIcon
              fontSize={25}
              color={recipe.favourited ? "red" : "gray"}
            />
          }
          _hover={{ opacity: "0.7" }}
          aria-label="Favourite recipe"
          p={10}
          bg={"none"}
          onClick={() => toggleRecipeFavourite(recipe)}
        />
      </Flex>

      <Image
        src={recipe.image}
        w={"100%"}
        h={[200, 300, 400]}
        objectFit="cover"
      ></Image>

      <Grid templateColumns={["1fr", null, null, "5fr 4fr"]} p={10} gap={15}>
        <RecipeInformation recipe={recipe} />
        <RecipeLabels recipe={recipe} />
      </Grid>
    </Box>
  );
};