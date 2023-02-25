import { enqueueSnackbar } from "notistack";

interface ShowSnackbarProps {
  message: string;
}

export const showErrorSnackbar = (props: ShowSnackbarProps) => {
  // PROPS
  const { message } = props;

  // ENQUEUEING
  enqueueSnackbar({
    message,
    variant: "error",
  });
};

export const showSuccessSnackbar = (props: ShowSnackbarProps) => {
  // PROPS
  const { message } = props;

  // ENQUEUEING
  enqueueSnackbar({
    message,
    variant: "success",
  });
};
