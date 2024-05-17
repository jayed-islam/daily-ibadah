import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import FormProvider from "@/components/react-hook-form/form-provider";
import { RHFTextField } from "@/components/react-hook-form";

type IbadahEditDialogProps = {
  dialog: {
    value: boolean;
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
    setValue: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export default function IbadahEditDialog({ dialog }: IbadahEditDialogProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const methods = useForm({
    // resolver: yupResolver(NewUserSchema),
    // defaultValues,
  });

  const {
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Dialog
      fullScreen={fullScreen}
      open={dialog.value}
      onClose={dialog.setFalse}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle>Day 25</DialogTitle>
      <DialogContent>
        <FormProvider methods={methods} onSubmit={onSubmit}>
          <RHFTextField name="name" label="Full Name" />
          <RHFTextField name="email" label="Email Address" />
        </FormProvider>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={dialog.setFalse}>
          Disagree
        </Button>
        <Button onClick={dialog.setFalse} autoFocus>
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
}
