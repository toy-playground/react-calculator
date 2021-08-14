import React from "react";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import resContext from "../../context/resContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: "auto auto",
    textAlign: "center",
    boxSizing: "border-box",
  },
  text: {
    width: "100%",
    textAlign: "end",
    boxSizing: "border-box",
  },
}));

const Input = withStyles((theme) => ({
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 40,
    padding: "10px 12px",
    textAlign: "end",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    boxShadow: `${fade(theme.primary.main, 0.1)} 0 0 0 0.1rem`,
    borderColor: theme.primary.main,
  },
}))(InputBase);

export default function ResDisplay() {
  const classes = useStyles();
  const res = React.useContext(resContext);
  return (
    <div className={classes.root}>
      <Input disabled className={classes.text} value={res} variant="outlined" />
    </div>
  );
}
