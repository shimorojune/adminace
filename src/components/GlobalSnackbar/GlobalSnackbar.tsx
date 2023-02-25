import { Alert, AlertColor, Snackbar } from "@mui/material";
import { nanoid } from "nanoid";
import { useCallback, useEffect, useState } from "react";

interface SnackbarState {
  isOpen: boolean;
  type: AlertColor;
  message: string;
}

export type DispatchSnackBarDetail = Pick<SnackbarState, "message" | "type">;

export const globalSnackbarDispatchEventName = "showGlobalSnackbar";

const snackBarStateInitialValues: SnackbarState = {
  isOpen: false,
  message: "",
  type: "success",
};

export const GlobalSnackbar = () => {
  // STATE
  const [snackbarState, setSnackbarState] = useState<SnackbarState>(
    snackBarStateInitialValues
  );

  // HANDLERS
  const snackbarDispatchHandler = useCallback(() => {}, []);
  const onCloseHandler = () => {
    setSnackbarState(snackBarStateInitialValues);
  };

  // EFFECTS
  useEffect(() => {
    document.addEventListener(
      globalSnackbarDispatchEventName,
      snackbarDispatchHandler
    );
    return () => {
      document.removeEventListener(
        globalSnackbarDispatchEventName,
        snackbarDispatchHandler
      );
    };
  }, []);

  // DRAW
  return (
    <Snackbar
      key={nanoid(4)}
      open={snackbarState.isOpen}
      onClose={onCloseHandler}
    >
      <Alert
        severity={snackbarState.type}
        onClose={onCloseHandler}
        sx={{ width: "100%" }}
      >
        {snackbarState.message}
      </Alert>
    </Snackbar>
  );
};
