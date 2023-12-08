import { Box } from "@mui/material";
import PokemonFilters from "../Components/PokemonFilters/PokemonFilters";
import PokemonTable from "../Components/PokemonTable/PokemonTable";
import { TableProvider } from "../Context/TableProvider";
const Pokemon = () => {
  return (
    <Box display="flex" flexDirection="column" gap="150px" py="10px">
      <TableProvider>
        <PokemonFilters />
        <PokemonTable />
      </TableProvider>
    </Box>
  );
};

export default Pokemon;
