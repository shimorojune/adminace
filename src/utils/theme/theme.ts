import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          // margin top since the floating lable overlaps
          // disabled now since we are using the filled variant
          // marginTop: 10,
        },
      },
      defaultProps: {
        InputLabelProps: {
          // disabling label jump animation on focus
          shrink: true,
        },
      },
    },
  },
});
