import { FunctionComponent, PropsWithChildren } from "react";
import { Dialog } from "@mui/material";
import "./DialogBlur.css";

interface IDialogBlur extends PropsWithChildren {
  width?: string;
  heigh?: string;
  borderRadius?: string;
  showDialog: boolean;
}

export const DialogBlur: FunctionComponent<IDialogBlur> = (
  props: IDialogBlur
) => {
  const { width, heigh, showDialog, borderRadius, children } = props;

  let dialogStyle: React.CSSProperties | undefined = {
    backgroundColor: "rgb(51,51,51,0.4)",
    backdropFilter: "blur(48px)",
    borderRadius: `${borderRadius}`,
    width: `${width}`,
    height: `${heigh}`,
  };

  return (
    <Dialog
      className="dialogblur"
      open={showDialog}
      PaperProps={{ style: dialogStyle }}
    >
      {children}
    </Dialog>
  );
};
