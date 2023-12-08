import { SearchOutlined, FavoriteBorder } from "@mui/icons-material";
import InputController from "../../Common/InputController";
import classes from "./PokemonFilters.module.scss";
import { useContext } from "react";
import { TableContext } from "../../Context/TableContext";

const PokemonFilters = () => {
  const { handleSearchByName, handleSearchPowerThreshold, maxPower, minPower } =
    useContext(TableContext);

  return (
    <div className={classes.filtersContiner}>
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
      <div>
        <p className={classes.powerText}>min power: {minPower}</p>
        <p className={classes.powerText}>max power: {maxPower}</p>
      </div>
    </div>
  );
};

export default PokemonFilters;
