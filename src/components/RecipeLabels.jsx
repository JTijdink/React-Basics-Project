import { Flex, Heading } from "@chakra-ui/react";
import { Labels } from "./Labels";
import { NutrientLabel } from "./NutrientLabel";

export const RecipeLabels = ({ recipe }) => {
  const relaventNutrientsKeys = [
    "ENERC_KCAL",
    "CHOCDF",
    "PROCNT",
    "FAT",
    "CHOLE",
    "NA",
  ];
  const nutrientLabels = relaventNutrientsKeys.map(
    (key) => recipe.totalNutrients[key]
  );

  const dietLabelsJSX = (
    <>
      <Heading>Diet:</Heading>
      <Labels labels={recipe.dietLabels} bg={"green.100"} />
    </>
  );
  const cautionLabelsJSX = (
    <>
      <Heading>Cautions:</Heading>
      <Labels labels={recipe.cautions} bg={"red.100"} />
    </>
  );

  return (
    <Flex direction="column" gap={3}>
      <Heading>Health Labels:</Heading>
      <Labels labels={recipe.healthLabels} bg={"purple.100"} />
      {recipe.dietLabels.length > 0 && dietLabelsJSX}
      {recipe.cautions.length > 0 && cautionLabelsJSX}
      <Heading>Total Nutrients:</Heading>
      <Flex wrap={"wrap"} gap={5}>
        {nutrientLabels.map((nutrient) => {
          return <NutrientLabel key={nutrient.label} nutrient={nutrient} />;
        })}
      </Flex>
    </Flex>
  );
};