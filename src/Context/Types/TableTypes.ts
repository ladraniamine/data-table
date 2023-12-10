import { ChangeEvent, ReactNode } from "react";
import { Trow } from "../../Types/Types";

export type TableContextType = {
    totalNumberOfRows: number
    displayPage: Trow[]
    handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void
    handleChangePage: (_: unknown, newPage: number) => void
    rowsPerPage: number
    page: number
    handleSearchByName: (e: ChangeEvent<HTMLInputElement>) => void
    handleSearchPowerThreshold: (e: ChangeEvent<HTMLInputElement>) => void
    maxPower: number
    minPower: number
  };
  
 export type TableProviderProps = {
    children: ReactNode;
  };
