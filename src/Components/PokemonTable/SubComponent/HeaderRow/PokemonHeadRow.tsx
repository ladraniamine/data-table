import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { headerCellData } from "./HeaderCellData";

const rowStyle = {
  "&:last-child td, &:last-child th": { border: 0 },
  "& .MuiTableCell-head": { color: "#717F8C" },
  backgroundColor: "#F4F6F8",
};

function PokemonHeadRow() {
  return (
    <TableHead component="thead">
      <TableRow sx={rowStyle}>
        {headerCellData.map((lable) => (
          <TableCell align="center" key={lable}>
            {lable}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default PokemonHeadRow;
