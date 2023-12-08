import { Box } from "@mui/material";
import PokemonFilters from "../Components/PokemonFilters/PokemonFilters";
import PokemonTable from "../Components/PokemonTable/PokemonTable";
const Pokemon = () => {
  return (
    <Box display="flex" flexDirection="column" gap="150px" py="10px">
      <PokemonFilters />
      <PokemonTable />
    </Box>
  );
};

export default Pokemon;
