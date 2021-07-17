import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ResDisplay from './ResDisplay.js'
import Button from '@material-ui/core/Button';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import resContext from './context/resContext'
const useStyles = makeStyles((theme) => ({
    root: {
        height: "100%",
        flex: 1
    },
    h1: {
        color: theme.primary.main,
    },
    root0: {
        width: 500,
        height: 500,
        margin: 'auto auto'
    },
    D0: {
        flex: 4,
        display: "flex",
        flexDirection: "row",
    },
    D1: {
        flex: 3,
        display: "flex",
        flexDirection: "column",
    },
    D2: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
    },
    D3: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
    },

    button: {
        // width:150,
        // height:100,
        margin: '10px 10px',
        flex: 1
    },
    button_b: {
        margin: '10px 10px',
        flex: 1,
        color: 'red',
    }

}));


const theme2 = createMuiTheme({
    overrides: {
        MuiButton: {
            // margin:'10 20px',
            // Name of the rule
            text: {
                // Some CSS
                background: 'linear-gradient(30deg, #ff8ba4 30%, #fda273 90%)',
                // background:'#ffebee',
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 50,
                padding: '0 30px',
                // width: 80,
                boxShadow: '0 2px 2px 0 rgba(255, 0, 0, .3)',
                fontSize: 18,
            },
        },
    },
});


const theme3 = createMuiTheme({
    overrides: {
        MuiButton: {
            // margin:'10 20px',
            // Name of the rule
            text: {
                // Some CSS
                background: 'white',
                borderRadius: 3,
                border: 0,
                //   color: 'white',
                height: 50,
                padding: '0 30px',
                // width: 80,
                boxShadow: '0 2px 2px 0 rgba(255, 0, 0, .3)',
                fontSize: 18,
            },
        },
    },
});


const initialState = { res: '0' };

function reducer(state, action) {
    switch (action.type) {
        case 'del':
            var ll = state.res;
            ll = ll.slice(0,-1)
            if(ll === "") ll = "0"
            return { res: ll }
        case '1/x':
            var ll = state.res;
            try {
                ll = 1/eval(ll) + ""
                return { res: ll }
                // setRes(eval(res) + '');
            } catch (e) {
                return { res: "NAN" }
            }
        case 'x^2':
            var ll = state.res;
            try {
                ll = eval(ll)*eval(ll) + ""
                return { res: ll }
                // setRes(eval(res) + '');
            } catch (e) {
                return { res: "NAN" }
            }
        case '2(x':
            var ll = state.res;
            try {
                ll = Math.sqrt(eval(ll)) + ""
                return { res: ll }
                // setRes(eval(res) + '');
            } catch (e) {
                return { res: "NAN" }
            }
        case 'ww':
            return {res:'520'}
        case 'c':
            return { res: '0' }
            break;
        case '=':
            try {
                var ll = state.res;
                ll = ll.replace("%","*0.01")
                return { res: eval(ll) + "" }
                // setRes(eval(res) + '');
            } catch (e) {
                return { res: "NAN" }
            }
            break;
        case '+/-':
            var ll = state.res;
            try {
                ll = eval(ll) + ""
                if(ll[0]==='-')
                ll = ll.slice(1);
                else
                ll = "-" + ll;

                return { res: ll }
                // setRes(eval(res) + '');
            } catch (e) {
                return { res: "NAN" }
            }

        case '+':
        case '-':
        case '*':
        case '/':
            if (state.res.slice(-1) == '+' || state.res.slice(-1) == '-' || state.res.slice(-1) == '*' || state.res.slice(-1) == '/')
                return { res: state.res.slice(0, -1) + action.type }
            else
                return { res: state.res + action.type }
            break;
        default:
            return { res: state.res === '0' ? action.type : state.res + action.type }
            // setRes(res==='0'?type:res+type)
            break;
    }
}

export default function SciCal() {
    const classes = useStyles();
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <div className={classes.root}>
            <br></br>
            <h1 align="center" className={classes.h1}>科学计算模式</h1>
            <resContext.Provider value={state.res}>
                <ResDisplay></ResDisplay>
                <div className={classes.root0} align="center">
                    <div className={classes.D0} >
                        <div className={classes.D1}>
                            <div className={classes.D3}>
                                <ThemeProvider theme={theme2}>
                                    <Button className={classes.button} onClick={() => dispatch({type: 'c'})}>AC</Button>
                                    <Button className={classes.button} onClick={() => dispatch({type: '+/-'})}>+/-</Button>
                                    <Button className={classes.button} onClick={() => dispatch({type: '%'})}>%</Button>
                                </ThemeProvider>
                            </div>
                            <div className={classes.D3}>
                                <ThemeProvider theme={theme2}>
                                    <Button className={classes.button} onClick={() => dispatch({type: '1/x'})}>1/x</Button>
                                    <Button className={classes.button} onClick={() => dispatch({type: 'x^2'})}>x^2</Button>
                                    <Button className={classes.button} onClick={() => dispatch({type: '2(x'})}>2√x</Button>
                                </ThemeProvider>
                            </div>
                            <div className={classes.D3}>
                                <ThemeProvider theme={theme3}>
                                    <Button className={classes.button} onClick={() => dispatch({type: '7'})}>7</Button>
                                    <Button className={classes.button} onClick={() => dispatch({type: '8'})}>8</Button>
                                    <Button className={classes.button} onClick={() => dispatch({type: '9'})}>9</Button>
                                </ThemeProvider>
                            </div>
                            <div className={classes.D3}>
                                <ThemeProvider theme={theme3}>
                                    <Button className={classes.button} onClick={() => dispatch({type: '4'})}>4</Button>
                                    <Button className={classes.button} onClick={() => dispatch({type: '5'})}>5</Button>
                                    <Button className={classes.button} onClick={() => dispatch({type: '6'})}>6</Button>
                                </ThemeProvider>
                            </div>
                            <div className={classes.D3}>
                                <ThemeProvider theme={theme3}>
                                    <Button className={classes.button} onClick={() => dispatch({type: '1'})}>1</Button>
                                    <Button className={classes.button} onClick={() => dispatch({type: '2'})}>2</Button>
                                    <Button className={classes.button} onClick={() => dispatch({type: '3'})}>3</Button>
                                </ThemeProvider>
                            </div>
                            <div className={classes.D3}>
                                <ThemeProvider theme={theme3}>
                                    <Button className={classes.button_b} onClick={() => dispatch({type: 'ww'})}>♥ ♥</Button>
                                    <Button className={classes.button} onClick={() => dispatch({type: '0'})}>0</Button>
                                    <Button className={classes.button} onClick={() => dispatch({type: '.'})}>.</Button>

                                </ThemeProvider>
                            </div>
                        </div>
                        <ThemeProvider theme={theme2}>
                            <div className={classes.D2}>
                            <Button className={classes.button} onClick={() => dispatch({type: 'del'})}>Del</Button>
                                <Button className={classes.button} onClick={() => dispatch({type: '/'})}>/</Button>
                                <Button className={classes.button} onClick={() => dispatch({type: '*'})}>*</Button>
                                <Button className={classes.button} onClick={() => dispatch({type: '-'})}>-</Button>
                                <Button className={classes.button} onClick={() => dispatch({type: '+'})}>+</Button>
                                <Button className={classes.button} onClick={() => dispatch({type: '='})}>=</Button>
                            </div>
                        </ThemeProvider>
                    </div>
                </div>
            </resContext.Provider>

        </div>
    )
}


