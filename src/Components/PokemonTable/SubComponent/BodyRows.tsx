import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useContext } from "react";
import { TableContext } from "../../../Context/TableContext";
import { calculatePower } from "../../../Utils/Helpers";

const BodyRows = () => {
  const { displayPage } = useContext(TableContext);

  return (
    <TableBody>
      {displayPage.map((row) => (
        <TableRow
          key={row.id}
          sx={{
            "&:last-child td, &:last-child th": { border: 0 },
            "& .MuiTableCell-body": {
              borderBottom: "1px solid rgba(224, 224, 224, 0.29)",
            },
          }}
        >
          <TableCell align="center">{row.id}</TableCell>
          <TableCell align="center">{row.name}</TableCell>
          <TableCell align="center">{row.type.join(",")}</TableCell>
          <TableCell align="center">{row.hp}</TableCell>
          <TableCell align="center">{row.attack}</TableCell>
          <TableCell align="center">{row.defense}</TableCell>
          <TableCell align="center">{row.special_attack}</TableCell>
          <TableCell align="center">{row.special_defense}</TableCell>
          <TableCell align="center">{row.speed}</TableCell>
          <TableCell align="center">{calculatePower(row)}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default BodyRows;
