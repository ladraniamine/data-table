import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { TableContextType, TableProviderProps } from "./Types/TableTypes";
import { TableContext } from "./TableContext";
import {
  calculatAllPowers,
  calculateMaximumNumber,
  calculateMinimumNumber,
  displayPerPage,
  filterByName,
  filterByPowerThreshold,
} from "../Utils/Helpers";
import UsePokemon from "../Hooks/UsePokemon";
import { Trow } from "../Types/Types";

export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  const { fetchData } = UsePokemon();
  const [data, setData] = useState<Trow[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);
  const [searchByName, setSearchByName] = useState<string>("");
  const [searchPowerThreshold, setSearchPowerThreshold] = useState<number>(0);

  useEffect(() => {
    if (!isFirstLoad) return;
    fetchData(setData);
    setIsFirstLoad(false);
  }, [fetchData, isFirstLoad]);

  const handleChangePage = (_: unknown, newPage: number) => setPage(newPage);

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchByName = (e: ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setSearchByName(e.target.value);
  };

  const handleSearchPowerThreshold = (e: ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    const { value } = e.target;
    if (isNaN(parseInt(value))) return;
    setSearchPowerThreshold(parseInt(value));
  };

  const SearchByNameResualt = useMemo(() => {
    if (searchByName === "") return data;
    return filterByName(data, searchByName);
  }, [data, searchByName]);

  const searchResualt = useMemo(() => {
    if (searchPowerThreshold === 0) return SearchByNameResualt;
    return filterByPowerThreshold(SearchByNameResualt, searchPowerThreshold);
  }, [SearchByNameResualt, searchPowerThreshold]);

  const displayPage = useMemo(
    () => displayPerPage(searchResualt, page, rowsPerPage),
    [page, rowsPerPage, searchResualt],
  );

  const allPowers = useMemo(
    () => calculatAllPowers(displayPage),
    [displayPage],
  );

  const maxPower = useMemo(() => {
    if (allPowers.length === 0) return 0;
    return calculateMaximumNumber(allPowers);
  }, [allPowers]);

  const minPower = useMemo(() => {
    if (allPowers.length === 0) return 0;
    return calculateMinimumNumber(allPowers);
  }, [allPowers]);

  const totalNumberOfRows = useMemo(
    () => searchResualt.length,
    [searchResualt],
  );

  const contextValues: TableContextType = {
    totalNumberOfRows,
    displayPage,
    handleChangeRowsPerPage,
    handleChangePage,
    rowsPerPage,
    page,
    handleSearchByName,
    handleSearchPowerThreshold,
    maxPower,
    minPower,
  };

  return (
    <TableContext.Provider value={contextValues}>
      {children}
    </TableContext.Provider>
  );
};
