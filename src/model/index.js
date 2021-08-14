/* eslint-disable  no-eval */
import { create, all } from "mathjs";

const math = create(all);
const initialState = { res: "0" };
function reducer(state, action) {
  let ll = state.res;
  if (ll.indexOf("Error") !== -1) {
    return { res: "0" };
  }
  if (
    ll === "0" &&
    ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-"].indexOf(
      action.type
    ) !== -1
  ) {
    ll = "";
  }
  switch (action.type) {
    case "del":
      return { res: ll.length <= 1 ? "0" : ll.slice(0, -1) };
    case "1/x":
      try {
        return { res: math.evaluate(`1 / (${ll})`) + "" };
      } catch (e) {
        return { res: "Error" };
      }
    case "x^2":
      try {
        return { res: math.pow(math.evaluate(ll), 2) + "" };
      } catch (e) {
        return { res: "Error" };
      }
    case "2√x":
      try {
        return { res: math.sqrt(math.evaluate(ll)) + "" };
      } catch (e) {
        return { res: "Error" };
      }
    case "AC":
      return { res: "0" };
    case "=":
      try {
        ll = ll.replaceAll("%", "*0.01");
        return { res: math.evaluate(ll) + "" };
      } catch (e) {
        return { res: "Error" };
      }
    case "+/-":
      try {
        ll = math.evaluate(ll) + "";
        return { res: ll[0] === "-" ? ll.slice(1) : "-" + ll };
      } catch (e) {
        return { res: "Error" };
      }
    case "+":
    case "-":
    case "*":
    case "/":
      if (["+", "-", "*", "/"].indexOf(state.res.slice(-1)) !== -1)
        return { res: state.res.slice(0, -1) + action.type };
      else return { res: state.res + action.type };
    default:
      return { res: state.res === "0" ? action.type : state.res + action.type };
  }
}

export { initialState, reducer };
