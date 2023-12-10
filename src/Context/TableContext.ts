import { createContext } from "react";
import { TableContextType } from "./Types/TableTypes";

const initialState = {
    totalNumberOfRows: 0,
    displayPage: [],
    handleChangeRowsPerPage: (): void => {},
    handleChangePage: (): void => {},
    rowsPerPage: 0,
    page: 0,
    handleSearchByName: (): void => {},
    handleSearchPowerThreshold: (): void => {},
    maxPower: 0,
    minPower: 0,
    loading: true
  };
export const TableContext = createContext<TableContextType>(initialState);
