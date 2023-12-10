import { SearchOutlined, FavoriteBorder } from "@mui/icons-material";
import InputController from "../../Common/InputController";
import classes from "./PokemonFilters.module.scss";
import { useContext } from "react";
import { TableContext } from "../../Context/TableContext";
const SeachComponents = () => {
  const { handleSearchByName, handleSearchPowerThreshold } =
    useContext(TableContext);
  return (
    <div className={classes.inputsContainer}>
      <InputController
        IconOfInput={SearchOutlined}
        placeholder="Search..."
        onChange={handleSearchByName}
      />
      <InputController
        IconOfInput={FavoriteBorder}
        placeholder="Power threshold"
        onChange={handleSearchPowerThreshold}
      />
    </div>
  );
};

export default SeachComponents;
