import Axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import GigHeader from "./GigHeader";
import GigDetails from "./GigDetails";
import Grid from "@material-ui/core/Grid";
import GoogleMap from "./GoogleMap";
import ContactCard from "./ContactCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: "1rem",
  },

  card: {
    borderRadius: "8px",
    boxShadow: "0px 2px 5px 0.5px #E3E3E3",
  },
}));

export default function GigPage() {
  const classes = useStyles();

  const [gig, setGig] = useState({});
  const [contractor, setContractor] = useState({});
  const [user, setUser] = useState({});
  const [coords, setCoords] = useState({});
  console.log("coords :", coords);

  const params = useParams();

  const userAddy = `${user.address}, ${user.city}, ${user.province}`;

  const getCoords = (address) => {
    const splitAddy = address.split(" ");
    let searchString = splitAddy.join("+");
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${searchString}&key=AIzaSyCyMLV15CqMzB846p53qsoJP6g7d471hpo`
      )
      .then((res) => setCoords(res.data.results[0].geometry.location));
  };

  useEffect(() => {
    axios
      .get(`/api/gigs/${params.gig_id}`)
      .then((response) => {
        setGig(response.data[0]);
        const id = response.data[0].contractor_id;
        getCoords(userAddy);
        return axios(`/api/users/${id}`);
      })
      .then((response) => {
        setContractor(response.data[0]);
      });
  }, []);

  return (
    <div>
      <GigHeader
        first={contractor.first_name}
        last={contractor.last_name}
        title={gig.title}
        price={gig.price}
        image={gig.photo_one}
      />
      <div className={classes.root}>
        <Grid container spacing={3} justify="center" className={classes.root}>
          <Grid item sm={8}>
            <GigDetails
              bio={contractor.bio}
              education={contractor.education}
              description={gig.description}
            />
          </Grid>
          <Grid item sm={3}>
            <ContactCard
              city={contractor.city}
              phone={contractor.phone_number}
              email={contractor.email}
              contractor_id={contractor.id}
              gig_id={gig.id}
            />
            <GoogleMap coords={coords} />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
