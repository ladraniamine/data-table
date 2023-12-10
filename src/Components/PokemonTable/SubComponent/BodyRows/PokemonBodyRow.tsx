import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { bodyCellData } from "./BodyCellData";
import react from "react";
import { Trow } from "../../../../Types/Types";

const rowStyle = {
  "&:last-child td, &:last-child th": { border: 0 },
  "& .MuiTableCell-body": {
    borderBottom: "1px solid rgba(224, 224, 224, 0.29)",
  },
};

const PokemonBodyRow = ({ row }: { row: Trow }) => {
  return (
    <TableRow sx={rowStyle}>
      {bodyCellData(row).map(({ lable, data }) => (
        <TableCell align="center" key={lable}>
          {data}
        </TableCell>
      ))}
    </TableRow>
  );
};

const MemoizedPokemonBodyRow = react.memo(PokemonBodyRow);
export default MemoizedPokemonBodyRow;
