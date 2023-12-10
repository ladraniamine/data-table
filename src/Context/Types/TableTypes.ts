import { ChangeEvent, ReactNode } from "react";
import { Trow } from "../../Types/Types";

export type TableContextType = {
    totalNumberOfRows: number
    displayPage: Trow[]
    handleChangeRowsPerPage: (event: ChangeEvent<HTMLInputElement>) => void
    handleChangePage: (_: unknown, newPage: number) => void
    rowsPerPage: number
    page: number
    handleSearchByName: (value:string) => void
    handleSearchPowerThreshold: (value:string) => void
    maxPower: number
    minPower: number
    loading: boolean
  };
  
 export type TableProviderProps = {
    children: ReactNode;
  };
