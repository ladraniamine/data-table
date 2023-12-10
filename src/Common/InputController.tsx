import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ChangeEvent, memo } from "react";
import classes from "./InputController.module.scss";

type TInputController = {
  IconOfInput: OverridableComponent<SvgIconTypeMap<unknown, "svg">> & {
    muiName: string;
  };
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
function InputController({
  IconOfInput,
  placeholder,
  onChange,
}: TInputController) {
  return (
    <div className={classes.inputContainer}>
      <IconOfInput className={classes.icon} />
      <input
        type="text"
        className={classes.input}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
const MemomizedInputController = memo(InputController);
export default MemomizedInputController;
