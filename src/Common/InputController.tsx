import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FC } from "react";
import classes from "./InputController.module.scss";

type TInputController = {
  IconOfInput: OverridableComponent<SvgIconTypeMap<unknown, "svg">> & {
    muiName: string;
  };
  placeholder: string;
};
const InputController: FC<TInputController> = ({
  IconOfInput,
  placeholder,
}) => {
  return (
    <div className={classes.inputContainer}>
      <IconOfInput className={classes.icon} />
      <input type="text" className={classes.input} placeholder={placeholder} />
    </div>
  );
};

export default InputController;
