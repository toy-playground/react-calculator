(this.webpackJsonpcc=this.webpackJsonpcc||[]).push([[0],{24:function(_,e,t){"use strict";var a=t(0),r=t.n(a).a.createContext();e.a=r},35:function(_,e,t){"use strict";t.d(e,"a",(function(){return s}));var a=t(0),r=t.n(a),l=t(40),c=t(8),n=t(13),E=t(67),o=t(24),u=Object(l.a)((function(_){return{root:{width:500,margin:"auto auto"},text:{width:480,textAlign:"end"}}})),i=Object(c.a)((function(_){return{input:{borderRadius:4,position:"relative",backgroundColor:_.palette.common.white,border:"1px solid #ced4da",fontSize:40,padding:"10px 12px",textAlign:"end",transition:_.transitions.create(["border-color","box-shadow"]),boxShadow:"".concat(Object(n.b)(_.primary.main,.1)," 0 0 0 0.1rem"),borderColor:_.primary.main}}}))(E.a);function s(){var _=u(),e=r.a.useContext(o.a);return r.a.createElement("div",{className:_.root,align:"center"},r.a.createElement(i,{disabled:!0,className:_.text,value:e,variant:"outlined"}))}},46:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CommonCal}));var _Users_bytedance_Desktop_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(36),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40),_ResDisplay_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(35),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(26),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(14),_context_resContext__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(24),useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.a)((function(_){return{root:{height:"100%",flex:1},h1:{color:_.primary.main},root0:{width:500,height:500,margin:"auto auto"},D0:{flex:4,display:"flex",flexDirection:"row"},D1:{flex:3,display:"flex",flexDirection:"column"},D2:{flex:1,display:"flex",flexDirection:"column"},D3:{flex:1,display:"flex",flexDirection:"row"},button:{margin:"10px 10px",flex:1},button_b:{margin:"10px 10px",flex:1,color:"red"}}})),theme2=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.a)({overrides:{MuiButton:{text:{background:"linear-gradient(30deg, #ff8ba4 30%, #fda273 90%)",borderRadius:3,border:0,color:"white",height:50,padding:"0 30px",boxShadow:"0 2px 2px 0 rgba(255, 0, 0, .3)",fontSize:18}}}}),theme3=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.a)({overrides:{MuiButton:{text:{background:"white",borderRadius:3,border:0,height:50,padding:"0 30px",boxShadow:"0 2px 2px 0 rgba(255, 0, 0, .3)",fontSize:18}}}}),initialState={res:"0"};function reducer(state,action){switch(action.type){case"ww":return{res:"520"};case"c":return{res:"0"};case"=":try{var ll=state.res;return ll=ll.replace("%","*0.01"),{res:eval(ll)+""}}catch(e){return{res:"NAN"}}break;case"+/-":var ll=state.res;try{return ll=eval(ll)+"",ll="-"===ll[0]?ll.slice(1):"-"+ll,{res:ll}}catch(e){return{res:"NAN"}}case"+":case"-":case"*":case"/":return"+"==state.res.slice(-1)||"-"==state.res.slice(-1)||"*"==state.res.slice(-1)||"/"==state.res.slice(-1)?{res:state.res.slice(0,-1)+action.type}:{res:state.res+action.type};default:return{res:"0"===state.res?action.type:state.res+action.type}}}function CommonCal(){var _=useStyles(),e=react__WEBPACK_IMPORTED_MODULE_1___default.a.useReducer(reducer,initialState),t=Object(_Users_bytedance_Desktop_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(e,2),a=t[0],r=t[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.root},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",{align:"center",className:_.h1},"\u666e\u901a\u8ba1\u7b97\u6a21\u5f0f"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_context_resContext__WEBPACK_IMPORTED_MODULE_7__.a.Provider,{value:a.res},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ResDisplay_js__WEBPACK_IMPORTED_MODULE_3__.a,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.root0,align:"center"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D1},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme2},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"c"})}},"AC"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"+/-"})}},"+/-"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"%"})}},"%"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"7"})}},"7"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"8"})}},"8"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"9"})}},"9"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"4"})}},"4"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"5"})}},"5"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"6"})}},"6"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"1"})}},"1"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"2"})}},"2"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"3"})}},"3"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button_b,onClick:function(){return r({type:"ww"})}},"\u2665 \u2665"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"0"})}},"0"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"."})}},".")))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme2},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D2},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"/"})}},"/"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"*"})}},"*"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"-"})}},"-"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"+"})}},"+"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"="})}},"=")))))))}},47:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return SciCal}));var _Users_bytedance_Desktop_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(36),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(40),_ResDisplay_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(35),_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(2),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(26),_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(14),_context_resContext__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(24),useStyles=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.a)((function(_){return{root:{height:"100%",flex:1},h1:{color:_.primary.main},root0:{width:500,height:500,margin:"auto auto"},D0:{flex:4,display:"flex",flexDirection:"row"},D1:{flex:3,display:"flex",flexDirection:"column"},D2:{flex:1,display:"flex",flexDirection:"column"},D3:{flex:1,display:"flex",flexDirection:"row"},button:{margin:"10px 10px",flex:1},button_b:{margin:"10px 10px",flex:1,color:"red"}}})),theme2=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.a)({overrides:{MuiButton:{text:{background:"linear-gradient(30deg, #ff8ba4 30%, #fda273 90%)",borderRadius:3,border:0,color:"white",height:50,padding:"0 30px",boxShadow:"0 2px 2px 0 rgba(255, 0, 0, .3)",fontSize:18}}}}),theme3=Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.a)({overrides:{MuiButton:{text:{background:"white",borderRadius:3,border:0,height:50,padding:"0 30px",boxShadow:"0 2px 2px 0 rgba(255, 0, 0, .3)",fontSize:18}}}}),initialState={res:"0"};function reducer(state,action){switch(action.type){case"del":var ll=state.res;return ll=ll.slice(0,-1),""===ll&&(ll="0"),{res:ll};case"1/x":var ll=state.res;try{return ll=1/eval(ll)+"",{res:ll}}catch(e){return{res:"NAN"}}case"x^2":var ll=state.res;try{return ll=eval(ll)*eval(ll)+"",{res:ll}}catch(e){return{res:"NAN"}}case"2(x":var ll=state.res;try{return ll=Math.sqrt(eval(ll))+"",{res:ll}}catch(e){return{res:"NAN"}}case"ww":return{res:"520"};case"c":return{res:"0"};case"=":try{var ll=state.res;return ll=ll.replace("%","*0.01"),{res:eval(ll)+""}}catch(e){return{res:"NAN"}}break;case"+/-":var ll=state.res;try{return ll=eval(ll)+"",ll="-"===ll[0]?ll.slice(1):"-"+ll,{res:ll}}catch(e){return{res:"NAN"}}case"+":case"-":case"*":case"/":return"+"==state.res.slice(-1)||"-"==state.res.slice(-1)||"*"==state.res.slice(-1)||"/"==state.res.slice(-1)?{res:state.res.slice(0,-1)+action.type}:{res:state.res+action.type};default:return{res:"0"===state.res?action.type:state.res+action.type}}}function SciCal(){var _=useStyles(),e=react__WEBPACK_IMPORTED_MODULE_1___default.a.useReducer(reducer,initialState),t=Object(_Users_bytedance_Desktop_projects_react_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(e,2),a=t[0],r=t[1];return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.root},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",{align:"center",className:_.h1},"\u79d1\u5b66\u8ba1\u7b97\u6a21\u5f0f"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_context_resContext__WEBPACK_IMPORTED_MODULE_7__.a.Provider,{value:a.res},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ResDisplay_js__WEBPACK_IMPORTED_MODULE_3__.a,null),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.root0,align:"center"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D0},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D1},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme2},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"c"})}},"AC"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"+/-"})}},"+/-"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"%"})}},"%"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme2},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"1/x"})}},"1/x"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"x^2"})}},"x^2"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"2(x"})}},"2\u221ax"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"7"})}},"7"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"8"})}},"8"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"9"})}},"9"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"4"})}},"4"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"5"})}},"5"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"6"})}},"6"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"1"})}},"1"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"2"})}},"2"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"3"})}},"3"))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme3},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button_b,onClick:function(){return r({type:"ww"})}},"\u2665 \u2665"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"0"})}},"0"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"."})}},".")))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__.a,{theme:theme2},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:_.D2},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"del"})}},"Del"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"/"})}},"/"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"*"})}},"*"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"-"})}},"-"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"+"})}},"+"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__.a,{className:_.button,onClick:function(){return r({type:"="})}},"=")))))))}},53:function(_,e,t){_.exports=t(63)},63:function(_,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),l=t(22),c=t.n(l),n=t(14),E=t(83),o=t(85),u=t(40),i=t(87),s=t(84),D=t(2),O=Object(u.a)((function(_){return{root:{height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},title:{color:_.primary.title},desc:{color:_.primary.desc}}}));function M(){var _=O();return r.a.createElement("div",{className:_.root},r.a.createElement("h1",{align:"center",className:_.title},"Powered By Toy Playground"),r.a.createElement("h2",{align:"center",className:_.desc},": )"))}var m=t(46),P=t(47),d=t(30),C=t(6),B=function(){return r.a.createElement(E.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 2020-".concat((new Date).getFullYear()," Dreamerryao"))},f=Object(u.a)((function(_){return{root:{flexGrow:1,height:"100vh",width:"100vw"},menuButton:{marginRight:_.spacing(2)},title:{flexGrow:1},linkButton:{color:"white",fontSize:20},link:{width:100},AppBar:{backgroundColor:"transparent",color:_.primary.main,boxShadow:"none"},bottomBar:{position:"fixed",bottom:0,right:0,left:0}}}));function A(){var _=f();return r.a.createElement("div",{className:_.root},r.a.createElement(d.a,null,r.a.createElement(i.a,{position:"fixed",className:_.AppBar},r.a.createElement(s.a,null,r.a.createElement(E.a,{variant:"h6",className:_.title},"Calculator"),r.a.createElement(D.a,{color:"inherit",component:d.b,size:"large",to:"/"},"\u666e\u901a"),r.a.createElement(D.a,{color:"inherit",component:d.b,size:"large",to:"/mode"},"\u79d1\u5b66"),r.a.createElement(D.a,{color:"inherit",component:d.b,size:"large",to:"/more"},"More"))),r.a.createElement(C.c,null,r.a.createElement(C.a,{path:"/more"},r.a.createElement(M,null)),r.a.createElement(C.a,{path:"/mode"},r.a.createElement(P.a,null)),r.a.createElement(C.a,{path:"/"},r.a.createElement(m.a,null))),r.a.createElement(o.a,{my:4,className:_.bottomBar},r.a.createElement(B,null))))}var R=t(37),p=t(26),T=Object(p.a)({primary:{main:"#777777",title:"thistle",desc:"burlywood"},secondary:{main:"#19857b"},error:{main:R.a.A400},buttonE:{main:"#19857b"},background:{default:"#fff"}});c.a.render(r.a.createElement(n.a,{theme:T},r.a.createElement(A,null)),document.querySelector("#root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.50ccb7ce.chunk.js.map