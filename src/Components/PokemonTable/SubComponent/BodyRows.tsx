import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { FC } from "react";

type TBodyRows = {
  visibleRows: {
    attack: number;
    defense: number;
    hp: number;
    id: number;
    name: string;
    special_attack: number;
    special_defense: number;
    speed: number;
    type: [];
  }[];
};
const BodyRows: FC<TBodyRows> = ({ visibleRows }) => {
  return (
    <TableBody>
      {visibleRows.map((row) => (
        <TableRow
          key={row.name}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            "& .MuiTableCell-body": {
              borderBottom: "1px solid rgba(224, 224, 224, 0.29)",
            },
          }}
        >
          <TableCell align="center">{row.id}</TableCell>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center">{row.type}</TableCell>
          <TableCell align="center">{row.hp}</TableCell>
          <TableCell align="center">{row.attack}</TableCell>
          <TableCell align="center">{row.defense}</TableCell>
          <TableCell align="center">{row.special_attack}</TableCell>
          <TableCell align="center">{row.special_defense}</TableCell>
          <TableCell align="center">{row.speed}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BodyRows;
