import { memo, useContext } from "react";
import { TableContext } from "../../../Context/TableContext";
import { TablePagination } from "@mui/material";

const rowsPerPageOptions = [10, 20, 30];
const TablePaginationStyle = { mt: "0.9375rem" };

function TablePaginationContainer() {
  const {
    totalNumberOfRows,
    handleChangePage,
    handleChangeRowsPerPage,
    rowsPerPage,
    page,
  } = useContext(TableContext);
  return (
    <TablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      sx={TablePaginationStyle}
      component="div"
      count={totalNumberOfRows}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}

const MemomizedTablePaginationContainer = memo(TablePaginationContainer);
export default MemomizedTablePaginationContainer;
