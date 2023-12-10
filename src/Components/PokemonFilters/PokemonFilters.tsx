import classes from "./PokemonFilters.module.scss";
import SeachComponents from "./SeachComponents";
import MinAndMax from "./MinAndMax";

function PokemonFilters() {
  return (
    <div className={classes.filtersContiner}>
      <SeachComponents />
      <MinAndMax />
    </div>
  );
}

export default PokemonFilters;
