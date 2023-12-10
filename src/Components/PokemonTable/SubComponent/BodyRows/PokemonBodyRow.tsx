import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { BodyCellData } from "./BodyCellData";
import { memo } from "react";
import { Trow } from "../../../../Types/Types";

const rowStyle = {
  "&:last-child td, &:last-child th": { border: 0 },
  "& .MuiTableCell-body": {
    borderBottom: "0.0625rem solid rgba(224, 224, 224, 0.29)",
  },
};

function PokemonBodyRow({ row }: { row: Trow }) {
  return (
    <TableRow sx={rowStyle}>
      {BodyCellData(row).map(({ lable, data }) => (
        <TableCell align="center" key={lable}>
          {data}
        </TableCell>
      ))}
    </TableRow>
  );
}

const MemoizedPokemonBodyRow = memo(PokemonBodyRow);
export default MemoizedPokemonBodyRow;
