import { ChangeEvent, ReactNode } from "react";

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
  
  //move to extra file
export  type Trow = {
    attack: number;
    defense: number;
    hp: number;
    id: number;
    name: string;
    special_attack: number;
    special_defense: number;
    speed: number;
    type: [string];
  };
  