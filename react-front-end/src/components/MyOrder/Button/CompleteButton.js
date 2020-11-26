import React from "react";
import Fab from "@material-ui/core/Fab";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: green[500]
    }
  }
});

export default function CompleteButton(props) {
  return (
    <ThemeProvider theme={theme}>
      <Fab variant="extended" color="primary" disabled={props.status !== "completed"}>
        <CloudDoneIcon style={{ marginRight: "0.3em" }} />
        Complete
      </Fab>
      </ThemeProvider>
  );
}