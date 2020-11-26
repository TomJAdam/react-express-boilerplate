import React from "react";
import Fab from '@material-ui/core/Fab';
import CloudDoneIcon from "@material-ui/icons/CloudDone";


export default function OrderButton() {
  

  return (
    
      <Fab variant="extended" icon={<CloudDoneIcon />}  color="primary">
        Confirm
      </Fab>
  );
}
