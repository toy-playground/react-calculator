import { useReducer, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ResDisplay from "../../components/Display/index.js";
import Button from "@material-ui/core/Button";
import resContext from "../../context/resContext";
import { initialState, reducer } from "../../model/index.js";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 64,
    flex: 1,
    maxWidth: 500,
    margin: "auto",
  },
  h1: {
    color: theme.primary.main,
  },
  container: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    marginTop: 24,
  },
  item: {
    flex: "0 0 calc(25% - 20px)",
    textAlign: "center",
    borderRadius: 3,
    border: 0,
    color: theme.primary.main,
    height: 50,
    padding: "0 30px",
    boxShadow: "0 2px 2px 0 rgba(100, 100, 100, .3)",
    margin: 10,
    fontSize: 18,
  },
}));

const Calculator = () => {
  const classes = useStyles();
  const BUTTON_LIST = [
    "del",
    "1/x",
    "x^2",
    "2√x",
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  useEffect(() => {
    document.onkeydown = (event) => {
      const e = event || window.event || arguments.callee.caller.arguments[0];
      const key = e.keyCode;
      if (
        e &&
        ((key >= 96 && key <= 105) || (key >= 48 && key <= 57 && !e.shiftKey))
      ) {
        dispatch({ type: (key >= 96 ? key - 96 : key - 48) + "" });
      } else if (e && key == 106) {
        dispatch({ type: "*" });
      } else if (e && (key === 107 || (key === 187 && e.shiftKey))) {
        dispatch({ type: "+" });
      } else if (
        e &&
        (key === 108 || key === 13 || (key === 187 && !e.shiftKey))
      ) {
        dispatch({ type: "=" });
      } else if (e && (key == 109 || (key === 189 && !e.shiftKey))) {
        dispatch({ type: "-" });
      } else if (e && (key == 110 || (key === 190 && !e.shiftKey))) {
        dispatch({ type: "." });
      } else if (e && (key == 111 || (key === 191 && !e.shiftKey))) {
        dispatch({ type: "/" });
      } else if (e && key === 8) {
        dispatch({ type: "del" });
      }
    };
    // useEffect 注销函数，在组件销毁时触发
    return () => {
      document.onkeydown = undefined;
    };
    // dep为[] 时，只触发一次
  }, []);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className={classes.root}>
      <h1 align="center" className={classes.h1}>
        普通计算模式
      </h1>
      <resContext.Provider value={state.res}>
        <ResDisplay></ResDisplay>
        <div className={classes.container}>
          {BUTTON_LIST.map((button, i) => {
            return (
              <Button
                className={classes.item}
                onClick={() => dispatch({ type: button })}
                key={button}
                style={
                  i === BUTTON_LIST.length - 1 ? { flex: "1 1 25%" } : undefined
                }
              >
                {button}
              </Button>
            );
          })}
        </div>
      </resContext.Provider>
    </div>
  );
};
export default Calculator;
