import Table from "@mui/material/Table";
import BodyRows from "./SubComponent/BodyRows/BodyRows";
import PokemonHeadRow from "./SubComponent/HeaderRow/PokemonHeadRow";
import classes from "./PokemonTable.module.scss";
import TablePaginationContainer from "./SubComponent/TablePaginationContainer";

export default function PokemonTable() {
  return (
    <div>
      <Table className={classes.table}>
        <PokemonHeadRow />
        <BodyRows />
      </Table>
      <TablePaginationContainer />
    </div>
  );
}
