import { MutationFunction } from "@apollo/client";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import { Field } from "@web/graphql/schema/definition";
import { Fragment, Model } from "@web/graphql/schema/types";
import { Payload } from "@web/hooks/reduction";
import { bindDialog, bindMenu, usePopupState } from "material-ui-popup-state/hooks";
import { Dispatch, MutableRefObject } from "react";

export interface CreationDialogProps<
  T extends Model,
  CreationInput extends Partial<T>,
  CreationMutationData extends { [key: string]: Fragment }
> extends ReturnType<typeof bindDialog> {
  close: () => void;
  children?: React.ReactNode;
  typeName: string;
  dataTuple: [Partial<CreationInput>, Dispatch<Payload<Partial<CreationInput>>>];
  fields: { [key in keyof CreationInput]: Field };
  create: MutableRefObject<MutationFunction<CreationMutationData, { data: CreationInput }>>;
  produceInitialData?: () => CreationInput;
}

export default function CreationDialog<
  T extends Model,
  CreationInput extends Partial<T>,
  CreationMutationData extends { [key: string]: Fragment }
>({
  children,
  typeName,
  dataTuple,
  create,
  produceInitialData,
  close,
  onClose,
  ...dialogProps
}: CreationDialogProps<T, CreationInput, CreationMutationData>) {
  const [data, dispatchData] = dataTuple;

  const menuState = usePopupState({
    variant: "popper",
    popupId: data.id ? `${typeName}-${data.id}-menu` : `new-${typeName}-menu`,
  });

  const menuProps = bindMenu(menuState);

  const saveAndExit = (): void => {
    // TODO: run validator!
    const validatedData = data as CreationInput;
    create.current?.({
      variables: { data: validatedData },
    });
    dispatchData({
      field: "init",
      value: produceInitialData ? produceInitialData() : {},
    }); // TODO...
    close();
  };

  return (
    <Dialog fullWidth onClose={onClose} {...dialogProps}>
      <DialogTitle
        sx={{
          borderBottom: "1px solid gray",
          display: "flex",
          py: 1,
          alignItems: "center",
        }}
      >
        {`Create new ${typeName}`}
        <Box ml={"auto"}>
          <Menu
            {...menuProps}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            MenuListProps={{
              "aria-labelledby": "calendar-menu-button-x",
            }}
          ></Menu>
          <IconButton aria-label="close" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={saveAndExit}>{"Save"}</Button>
      </DialogActions>
    </Dialog>
  );
}
