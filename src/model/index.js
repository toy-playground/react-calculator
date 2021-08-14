/* eslint-disable  no-eval */
const initialState = { res: "0" };
function reducer(state, action) {
  let ll;
  switch (action.type) {
    case "del":
      ll = state.res;
      ll = ll.slice(0, -1);
      if (ll === "") ll = "0";
      return { res: ll };
    case "1/x":
      ll = state.res;
      try {
        ll = 1 / eval(ll) + "";
        return { res: ll };
      } catch (e) {
        return { res: "NAN" };
      }
    case "x^2":
      ll = state.res;
      try {
        ll = eval(ll) * eval(ll) + "";
        return { res: ll };
      } catch (e) {
        return { res: "NAN" };
      }
    case "2(x":
      ll = state.res;
      try {
        ll = Math.sqrt(eval(ll)) + "";
        return { res: ll };
      } catch (e) {
        return { res: "NAN" };
      }
    case "AC":
      return { res: "0" };
    case "=":
      try {
        ll = state.res;
        ll = ll.replace("%", "*0.01");
        return { res: eval(ll) + "" };
      } catch (e) {
        return { res: "NAN" };
      }
    case "+/-":
      ll = state.res;
      try {
        ll = eval(ll) + "";
        if (ll[0] === "-") ll = ll.slice(1);
        else ll = "-" + ll;
        return { res: ll };
      } catch (e) {
        return { res: "NAN" };
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
