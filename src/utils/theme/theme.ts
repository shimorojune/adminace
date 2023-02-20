import { blue, indigo } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: "#1e1e1e",
        // },
        secondary: {
          main: "#ef6c00",
        },
      },
    },
  },
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
