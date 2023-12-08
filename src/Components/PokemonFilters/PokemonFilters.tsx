import { SearchOutlined, FavoriteBorder } from "@mui/icons-material";
import InputController from "../../Common/InputController";
import classes from "./PokemonFilters.module.scss";

const PokemonFilters = () => {
  return (
    <div className={classes.filtersContiner}>
      <div className={classes.inputsContainer}>
        <InputController
          IconOfInput={SearchOutlined}
          placeholder={"Search..."}
        />
        <InputController
          IconOfInput={FavoriteBorder}
          placeholder={"Power threshold"}
        />
      </div>
      <div>
        <p className={classes.powerText}>min power: 300</p>
        <p className={classes.powerText}>max power: 300</p>
      </div>
    </div>
  );
};

export default PokemonFilters;
