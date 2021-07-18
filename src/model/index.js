const initialState = { res: "0" };
//TODO:
function reducer(state, action) {
  switch (action.type) {
    case "del":
      var ll = state.res;
      ll = ll.slice(0, -1);
      if (ll === "") ll = "0";
      return { res: ll };
    case "1/x":
      var ll = state.res;
      try {
        ll = 1 / eval(ll) + "";
        return { res: ll };
        // setRes(eval(res) + '');
      } catch (e) {
        return { res: "NAN" };
      }
    case "x^2":
      var ll = state.res;
      try {
        ll = eval(ll) * eval(ll) + "";
        return { res: ll };
        // setRes(eval(res) + '');
      } catch (e) {
        return { res: "NAN" };
      }
    case "2(x":
      var ll = state.res;
      try {
        ll = Math.sqrt(eval(ll)) + "";
        return { res: ll };
        // setRes(eval(res) + '');
      } catch (e) {
        return { res: "NAN" };
      }
    case "ww":
      return { res: "520" };
    case "c":
      return { res: "0" };
      break;
    case "=":
      try {
        var ll = state.res;
        ll = ll.replace("%", "*0.01");
        return { res: eval(ll) + "" };
        // setRes(eval(res) + '');
      } catch (e) {
        return { res: "NAN" };
      }
      break;
    case "+/-":
      var ll = state.res;
      try {
        ll = eval(ll) + "";
        if (ll[0] === "-") ll = ll.slice(1);
        else ll = "-" + ll;

        return { res: ll };
        // setRes(eval(res) + '');
      } catch (e) {
        return { res: "NAN" };
      }

    case "+":
    case "-":
    case "*":
    case "/":
      if (
        state.res.slice(-1) == "+" ||
        state.res.slice(-1) == "-" ||
        state.res.slice(-1) == "*" ||
        state.res.slice(-1) == "/"
      )
        return { res: state.res.slice(0, -1) + action.type };
      else return { res: state.res + action.type };
      break;
    default:
      return { res: state.res === "0" ? action.type : state.res + action.type };
      // setRes(res==='0'?type:res+type)
      break;
  }
}

export { initialState, reducer };
