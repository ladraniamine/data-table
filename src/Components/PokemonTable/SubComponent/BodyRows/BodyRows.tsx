import TableBody from "@mui/material/TableBody";
import { useContext } from "react";
import { TableContext } from "../../../../Context/TableContext";
import PokemonBodyRow from "./PokemonBodyRow";
import { Box } from "@mui/material";

function BodyRows() {
  const { displayPage, loading } = useContext(TableContext);

  return loading ? (
    <Box padding="20px" fontSize="20px" fontWeight="600" color="#333">
      loading...
    </Box>
  ) : (
    <TableBody component="tbody">
      {displayPage.map((row) => (
        <PokemonBodyRow key={row.id} row={row} />
      ))}
    </TableBody>
  );
}

export default BodyRows;
