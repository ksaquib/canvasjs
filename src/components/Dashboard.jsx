import React, { useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Dashboard = () => {
  useEffect(() => {
    console.log("Hello dash");
    return () => {
      console.log("bye dash");
    };
  });
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            HOME
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/home">
            <Button size="small">Go to home</Button>
          </Link>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Live Charts
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/live-charts">
            <Button size="small">Go to Live Charts</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default Dashboard;
