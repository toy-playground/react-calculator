import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import More from './More'
import CommonCal from './CommonCal'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouterLink,
  useRouteMatch,
  useParams
} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
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
  AppBar:{
    backgroundColor:theme.primary.main
  }
}));
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const classes = useStyles();
  return (
    // <Container maxWidth="sm">
    
      <div>
        <Router>
        <AppBar position="static" className={classes.AppBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Calculator
          </Typography>
            <Button color="inherit" component={RouterLink} size="large" to="/">
              Mode1
            </Button>
            <Button color="inherit" component={RouterLink} size="large" to="/mode">
              Mode2
            </Button>
            <Button color="inherit" component={RouterLink} size="large"  to="/more">
              More
            </Button>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/more">
            <More />
          </Route>
          <Route path="/mode">
            <h2>科学计算模式</h2>
            {/* <Mode /> */}
          </Route>
          <Route path="/">
          {/* <h2>普通计算模式</h2> */}
            <CommonCal />
          </Route>
        </Switch>
        <Box my={4}>
          {/* <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography> */}
          <Copyright />
        </Box>
        {/* </Container> */}
        </Router>
      </div>
   
  );
}
