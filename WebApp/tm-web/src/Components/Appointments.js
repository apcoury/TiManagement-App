import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Title from "./Title";
import { ResponsiveContainer } from "recharts";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 225
  }
}));

export default function Appointments() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Appointments</Title>
      <ResponsiveContainer>
        <form className={classes.container} noValidate>
          <TextField
            id="datetime-local"
            label="Add New Appointment"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
          />
        </form>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
