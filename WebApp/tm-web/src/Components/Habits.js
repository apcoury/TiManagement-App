import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Title from "./Title";

// Generate Habits Data
function createData(id, date, habit, goal, accomplished) {
  return { id, date, habit, goal, accomplished };
}

const rows = [
  createData(0, "April 22, 2020", "Drink Water", "2 gallons", "25%"),
  createData(1, "April 22, 2020", "Go for a run", "1 Mile", "Yes"),
  createData(2, "April 22, 2020", "Read", "25 pages", "No"),
  createData(3, "April 22, 2020", "Practice Golf", "30 minutes", "No")
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles(theme => ({
  seeMore: {
    marginTop: theme.spacing(3)
  }
}));

export default function Habits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Habits</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Habit</TableCell>
            <TableCell>Goal</TableCell>
            <TableCell>Accomplished?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.habit}</TableCell>
              <TableCell>{row.goal}</TableCell>
              <TableCell>{row.accomplished}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" href="#" onClick={preventDefault}>
          + Add New Habit
        </Link>
      </div>
    </React.Fragment>
  );
}
