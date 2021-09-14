import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import More from "./views/More";
import Calculator from "./views/Calculator";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
} from "react-router-dom";
import Copyright from "./components/CopyRight";

const useStyles = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
    height: "100vh",
    width: "100vw",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkButton: {
    color: "white",
    fontSize: 20,
  },
  link: {
    width: 100,
  },
  AppBar: {
    backgroundColor: "transparent",
    color: theme.primary.main,
    boxShadow: "none",
  },
  bottomBar: {
    paddingBottom: 32,
  },
}));

/** 给出路由配置, 并提取出每个页面公有部分, 在此项目中是导航栏和底部 footer */
export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        {/* 导航栏 */}
        <AppBar position="fixed" className={classes.AppBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Calculator
            </Typography>
            <Button color="inherit" component={RouterLink} size="large" to="/react-calculator/">
              普通
            </Button>
            <Button
              color="inherit"
              component={RouterLink}
              size="large"
              to="/react-calculator/more"
            >
              More
            </Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/react-calculator/more">
            <More />
          </Route>
          <Route path="/react-calculator/">
            <Calculator />
          </Route>
        </Switch>
        {/* 底部 footer */}
        <Box my={4} className={classes.bottomBar}>
          <Copyright />
        </Box>
      </Router>
    </div>
  );
}
