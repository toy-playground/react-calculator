import React  from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
    ServerStyleSheets,
  } from '@material-ui/core/styles';
  import InputBase from '@material-ui/core/InputBase';
import Input from '@material-ui/core/Input';
import resContext from './resContext'

const useStyles = makeStyles((theme) => ({
    root: {
       width:500,
       margin:'auto auto'
    },
    text: {
        width:480,
        textAlign:'end',
    },

}));

const BootstrapInput = withStyles((theme) => ({
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 40,
    //   width: 'auto',
      padding: '10px 12px',
      textAlign:'end',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      boxShadow: `${fade(theme.primary.main, 0.1)} 0 0 0 0.1rem`,
      borderColor: theme.primary.main,
      // Use the system font instead of the default Roboto font.
    //   '&:focus': {
    //     boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
    //     borderColor: theme.palette.primary.main,
    //   },
    },
  }))(InputBase);

export default function ResDisplay() {
    const classes = useStyles();
    const res = React.useContext(resContext) 
    // var res="0"
    return (
        <div className={classes.root} align="center">
            <BootstrapInput disabled className={classes.text} value={res} variant="outlined"/>
        </div>
    );
}