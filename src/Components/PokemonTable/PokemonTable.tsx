import Table from "@mui/material/Table";
import { TablePagination } from "@mui/material";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import BodyRows from "./SubComponent/BodyRows";
import HeadRow from "./SubComponent/HeadRow";
import classes from "./PokemonTable.module.scss";

export default function PokemonTable() {
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [page, setPage] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const url =
        "https://raw.githubusercontent.com/legal-doctrine/frontend-LD-starter/main/public/pokemon.json";

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };
    fetchData();
  }, []);

  const handleChangePage = (_: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const visibleRows = useMemo(
    () => data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [page, rowsPerPage, data],
  );

  return (
    <div>
      <Table className={classes.table}>
        <HeadRow />
        <BodyRows visibleRows={visibleRows} />
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        sx={{ mt: "15px" }}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
