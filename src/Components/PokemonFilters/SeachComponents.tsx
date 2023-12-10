import { SearchOutlined, FavoriteBorder } from "@mui/icons-material";
import InputController from "../../Common/InputController";
import classes from "./PokemonFilters.module.scss";
import { useContext, useEffect, useState } from "react";
import { TableContext } from "../../Context/TableContext";
import { useDebounce } from "../../Hooks/UseDebounce";
function SeachComponents() {
  const { handleSearchByName, handleSearchPowerThreshold } =
    useContext(TableContext);

  const [name, setName] = useState<string>("");
  const debounceNameValue = useDebounce(name, 500);
  const [powerThreshold, setPowerThreshold] = useState<string>("");
  const debouncePowerThresholdValue = useDebounce(powerThreshold, 500);

  useEffect(() => {
    handleSearchByName(debounceNameValue);
  }, [debounceNameValue, handleSearchByName]);

  useEffect(() => {
    handleSearchPowerThreshold(debouncePowerThresholdValue);
  }, [debouncePowerThresholdValue, handleSearchPowerThreshold]);

  return (
    <div className={classes.inputsContainer}>
      <InputController
        IconOfInput={SearchOutlined}
        placeholder="Search..."
        onChange={(e) => setName(e.target.value)}
      />
      <InputController
        IconOfInput={FavoriteBorder}
        placeholder="Power threshold"
        onChange={(e) => setPowerThreshold(e.target.value)}
      />
    </div>
  );
}

export default SeachComponents;
