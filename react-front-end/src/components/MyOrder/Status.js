
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    margin: "1em auto"
  },
}));

export default function OrderStatus(props) {
  const classes = useStyles();
  const status = props.order.status;

  return (
    <div className={classes.root}>
      {false && <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert — <strong>check it out!</strong>
      </Alert>}
      {false && <Alert severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>}
      {status === "pending" && <Alert severity="info">
        <AlertTitle>Order Status</AlertTitle>
         {status.toUpperCase()}
      </Alert>}
      {false && <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>}
    </div>
  );
}
