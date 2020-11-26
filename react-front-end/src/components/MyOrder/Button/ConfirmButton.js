import React from "react";
import Fab from "@material-ui/core/Fab";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import BuildIcon from "@material-ui/icons/Build";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {  blue } from "@material-ui/core/colors";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500]
    },
  },
});

export default function OrderButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Fab variant="extended" color="primary">
        <BuildIcon style={{ marginRight: "0.3em" }} />
        Confirm
      </Fab>
      </ThemeProvider>
  );
}
