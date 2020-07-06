import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  
    primary: {
      main: '#ff5252',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    buttonE:{
      main: '#19857b',
    },
    background: {
      default: '#fff',
    },
    
});

export default theme;
