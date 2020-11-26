import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import HomeIcon from "@material-ui/icons/Home";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 900,
    width: "25em",
    marginTop: "1em",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  header: {
    alignSelf: "center",
    width: "80%",
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { user, role } = props;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.header}
        avatar={
          <Avatar alt={role} src={user.avatar_img} className={classes.large} />
        }
        title={`${user.first_name} ${user.last_name}`}
        subheader={role}
      />

      <CardContent>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
          space={2}
          wrap="wrap"
        >
          <Grid item>
            <EmailIcon />
            <Typography variant="body2" color="textSecondary" component="p">
              {user.email}
            </Typography>
          </Grid>
          <Grid item>
            <PhoneIcon />
            <Typography variant="body2" color="textSecondary" component="p">
              {user.phone_number}
            </Typography>
          </Grid>
          <Grid item>
            <HomeIcon />
            <Typography variant="body2" color="textSecondary" component="p">
              {user.city}, {user.province}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
