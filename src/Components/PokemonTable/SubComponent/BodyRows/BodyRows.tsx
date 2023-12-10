import TableBody from "@mui/material/TableBody";
import { useContext } from "react";
import { TableContext } from "../../../../Context/TableContext";
import PokemonBodyRow from "./PokemonBodyRow";

const BodyRows = () => {
  const { displayPage } = useContext(TableContext);

  return (
    <TableBody>
      {displayPage.map((row) => (
        <PokemonBodyRow key={row.id} row={row} />
      ))}
    </TableBody>
  );
};

export default BodyRows;
