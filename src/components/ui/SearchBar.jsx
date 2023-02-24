import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

export const SearchBar = ({ searchTerm, useSearchTerm, ...styling }) => {
  const handleChange = (e) => {
    useSearchTerm(e.target.value);
  };

  return (
    <InputGroup {...styling}>
      <InputLeftAddon bg={"white"}>
        <Search2Icon color={"black.600"} />
      </InputLeftAddon>
      <Input
        placeholder="Search"
        color={"white"}
        onChange={handleChange}
        value={searchTerm}
        fontWeight={"inherit"}
        bg={"black"}
      ></Input>
    </InputGroup>
  );
};
