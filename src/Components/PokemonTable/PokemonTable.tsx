import Table from "@mui/material/Table";
import { TablePagination } from "@mui/material";
import { useContext } from "react";
import BodyRows from "./SubComponent/BodyRows";
import HeadRow from "./SubComponent/HeadRow";
import classes from "./PokemonTable.module.scss";
import { TableContext } from "../../Context/TableContext";

export default function PokemonTable() {
  const {
    totalNumberOfRows,
    handleChangePage,
    handleChangeRowsPerPage,
    rowsPerPage,
    page,
  } = useContext(TableContext);

  return (
    <div>
      <Table className={classes.table}>
        <HeadRow />
        <BodyRows />
      </Table>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        sx={{ mt: "15px" }}
        component="div"
        count={totalNumberOfRows}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
