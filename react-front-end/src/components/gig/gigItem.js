import React from "react";
import GigItemList from './gigItemList';
import { Divider } from "@material-ui/core";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const gigs = ["gig1", "gig2", "gig3", "gig4", "gig5", "gig6"];
export default function GigItem() {
  return (
    <>
      <h1>My Gigs</h1>
      <Divider style={{width: '90%', margin: "0 auto"}}/>
      {gigs.map(gig => {
        return <GigItemList />
      })}
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </>
  );
}
