import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { TableContextType, TableProviderProps, Trow } from "./Types/TableTypes";
import { TableContext } from "./TableContext";
import {
  calculatAllPowers,
  calculateMaximumNumber,
  calculateMinimumNumber,
  displayPerPage,
  filterByName,
  filterByPowerThreshold,
} from "../Utils/Helpers";

export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  const [data, setData] = useState<Trow[]>([]);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [searchByName, setSearchByName] = useState<string>("");
  const [searchPowerThreshold, setSearchPowerThreshold] = useState<number>(0);

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
