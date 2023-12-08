import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ChangeEvent, FC } from "react";
import classes from "./InputController.module.scss";

type TInputController = {
  IconOfInput: OverridableComponent<SvgIconTypeMap<unknown, "svg">> & {
    muiName: string;
  };
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
const InputController: FC<TInputController> = ({
  IconOfInput,
  placeholder,
  onChange,
}) => {
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
};

export default InputController;
