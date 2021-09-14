import { create, all } from "mathjs"; // 使用 mathjs 来进行精确的数学计算

// model 层一般用来存储和管理全局状态,当然比较复杂的时候可以借助 Redux, Mobx 等来管理
// 在计算器这个例子中，使用的是 React 官方提供的 hook:useReducer  https://reactjs.org/docs/hooks-reference.html#usereducer
const math = create(all);
const initialState = { res: "0" };// 全局状态
// reducer就是传到 useReducer 里的函数，基于不同 action 给出不同状态的结果
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
