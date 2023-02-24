import { Flex, Text } from "@chakra-ui/react";

export const Header = ({ filterTerm, useFilterTerm }) => {
  
  const selectedTabStyles = {
    textDecoration: "underline",
    color: "white",
  };
 
  const filterTabStyles = {
    _hover: { textDecor: "underline dotted", cursor: "pointer" },
    borderBottom: ["2px solid black", null, "none"],
    py: 3,
  };

  return (
    <Flex
      color="white"
      justify={"space-evenly"}
      w={"100%"}
      direction={["column", null, "row"]}
    >
      <Text
        onClick={() => useFilterTerm("All")}
        {...filterTabStyles}
        style={filterTerm === "All" ? selectedTabStyles : {}}
      >
        All
      </Text>
      <Text
        onClick={() => useFilterTerm("Vegetarian")}
        {...filterTabStyles}
        style={filterTerm === "Vegetarian" ? selectedTabStyles : {}}
      >
        Vegetarian
      </Text>
      <Text
        onClick={() => useFilterTerm("Vegan")}
        {...filterTabStyles}
        style={filterTerm === "Vegan" ? selectedTabStyles : {}}
      >
        Vegan
      </Text>
      <Text
        onClick={() => useFilterTerm("Favourites")}
        {...filterTabStyles}
        style={filterTerm === "Favourites" ? selectedTabStyles : {}}
      >
        Favourites
      </Text>
    </Flex>
  );
};