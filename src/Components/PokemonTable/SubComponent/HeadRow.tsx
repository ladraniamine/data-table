import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
const HeadRow = () => {
  return (
    <TableHead>
      <TableRow
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
          "& .MuiTableCell-head": { color: "#717F8C" },
          backgroundColor: "#F4F6F8",
        }}
      >
        <TableCell align="center">ID</TableCell>
        <TableCell align="center">name</TableCell>
        <TableCell align="center">type</TableCell>
        <TableCell align="center">health</TableCell>
        <TableCell align="center">attack</TableCell>
        <TableCell align="center">defense</TableCell>
        <TableCell align="center">special_attack</TableCell>
        <TableCell align="center">special_defense</TableCell>
        <TableCell align="center">speed</TableCell>
      </TableRow>
    </TableHead>
  );
};

export default HeadRow;
