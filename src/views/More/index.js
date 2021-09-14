import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: theme.primary.title
  },
  desc: {
    color: theme.primary.desc
  }
}));

// 纯展示页面
export default function More() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1 align="center" className={classes.title}>Powered By Toy Playground</h1>
      <h2 align="center" className={classes.desc}>: )</h2>
    </div>
  );
}
