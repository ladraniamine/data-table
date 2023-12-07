import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TablePagination } from "@mui/material";
import { ChangeEvent, useMemo, useState } from "react";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function TableComponent() {
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = useMemo(
    () => rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage],
  );

  return (
    <>
      <Table
        sx={{
          backgroundColor: "#fff",
          borderRadius: "15px",
          mt: "40px",
          boxShadow: "0px 0px 44px -5px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        <TableHead>
          <TableRow
            sx={{
              "&:last-child td, &:last-child th": { border: 0 },
              "& .MuiTableCell-head": { color: "#717F8C" },
              backgroundColor: "#F4F6F8",
            }}
          >
            <TableCell align="center">Dessert (100g serving)</TableCell>
            <TableCell align="center">Calories</TableCell>
            <TableCell align="center">Fat&nbsp;(g)</TableCell>
            <TableCell align="center">Carbs&nbsp;(g)</TableCell>
            <TableCell align="center">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
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
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">{row.fat}</TableCell>
              <TableCell align="center">{row.carbs}</TableCell>
              <TableCell align="center">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        sx={{ mt: "15px" }}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
}
