import classes from "./PokemonFilters.module.scss";
import { useContext } from "react";
import { TableContext } from "../../Context/TableContext";
function MinAndMax() {
  const { maxPower, minPower } = useContext(TableContext);
  return (
    <div>
      <p className={classes.powerText}>min power: {minPower}</p>
      <p className={classes.powerText}>max power: {maxPower}</p>
    </div>
  );
}

export default MinAndMax;
