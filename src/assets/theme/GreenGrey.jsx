import { createMuiTheme } from "@material-ui/core/styles";

const GreenGrey = createMuiTheme({
  palette: {
    type: "dark",
    background: {
      default: "transparent",
      paper: "#000",
    },
    primary: {
      main: "#00e676",
      light: "#66ffa6",
      dark: "#00b248",
    },
    secondary: {
      main: "#424242",
      light: "#6d6d6d",
      dark: "#1b1b1b",
    },
  },
  typography: {
    fontFamily: "Montserrat, sans-serif",
    fontSize: 18,
  },
  overrides: {
    // MuiButton: {
    //   root: {
    //     transform: "skew(-20deg)",
    //   },
    // },
    MuiInput: {
      underline: {
        "&:after": {
          backgroundColor: "#00e676",
        },
      },
    },
    MuiAppBar: {
      root: {
        borderTop: "solid 2px #00e676",
      },
      colorDefault: {
        backgroundColor: "rgb(0,0,0)",
      },
    },
    MuiChip: {
      root: {
        backgroundColor: "#00b248",
      },
    },
  },
});

export default GreenGrey;
