(this.webpackJsonptodotype=this.webpackJsonptodotype||[]).push([[0],{25:function(n,t,e){n.exports=e(37)},37:function(n,t,e){"use strict";e.r(t);var r,o=e(0),a=e.n(o),i=e(7),c=e.n(i),u=e(3),l=e(9),s=e(18),d=e(4);!function(n){n.ADD_TASK="@tasks/ADD_TASK",n.EDIT_TASK="@tasks/EDIT_TASK",n.DELETE_TASK="@tasks/DELETE_TASK",n.TOGGLE_COMPLETED="@tasks/TOGGLE_COMPLETED",n.SET_FILTER="@task/SET_FILTER"}(r||(r={}));var f={tasks:function(){for(var n=[],t=1;t<=100;t++)n.push({id:t,name:"task "+t,completed:!1});return n}(),filter:"ALL",notify:null},p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.ADD_TASK:return""===t.task.name.trim()||n.tasks.some((function(n){return n.name.toUpperCase()===t.task.name.toUpperCase()}))?Object(d.a)({},n,{notify:{color:"negative",mesasge:"La tarea Ya existe"}}):Object(d.a)({},n,{tasks:n.tasks.concat(t.task),notify:{color:"positive",mesasge:"Tarea crada con exito"}});case r.EDIT_TASK:var e=n.tasks.findIndex((function(n){return n.id===t.task.id}));if(""===t.task.name.trim()||-1===e||n.tasks.some((function(n){return n.name===t.task.name&&n.id!==t.task.id})))return Object(d.a)({},n,{notify:{color:"negative",mesasge:"La tarea ya existe o no puede ser vacia"}});var o=Object(s.a)(n.tasks);return o[e]=t.task,Object(d.a)({},n,{tasks:o,notify:{color:"positive",mesasge:"Tarea editada con exito"}});case r.DELETE_TASK:return Object(d.a)({},n,{tasks:n.tasks.filter((function(n){return n.id!==t.id})),notify:{color:"positive",mesasge:"Tarea eliminada !!!"}});case r.TOGGLE_COMPLETED:var a=n.tasks.findIndex((function(n){return n.id===t.id})),i=Object(s.a)(n.tasks);return i[a].completed=!i[a].completed,Object(d.a)({},n,{tasks:i});case r.SET_FILTER:return Object(d.a)({},n,{filter:t.option});default:return n}},m=Object(l.b)({tasks:p}),v=Object(l.c)(m),b=e(1),h=e(2);function g(){var n=Object(b.a)(["\n  display: grid;\n  \n  grid-template-columns:240px auto 240px;\n  grid-template-rows:55px  auto 75px;\n  \n  grid-template-areas:\n  'HE HE HE'\n  'LT LT LT'\n  'FO FO FO';\n\n  height: 100vh;\n\n  @media (max-width: 320px){\n    grid-template-areas:\n    'HE'\n    'LT'\n    'FO';\n\n    zoom: 10 !important;\n    user-zoom: 10;\n  }\n"]);return g=function(){return n},n}var x=h.b.div(g());function E(){var n=Object(b.a)(["\n  grid-area: HE;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  background-color: var(--secondary);\n\n  height:55px;\n\n  > h2 {\n    color: var(--white);\n  }\n"]);return E=function(){return n},n}var y=h.b.header(E()),O=function(n){var t=n.title;return a.a.createElement(y,null,a.a.createElement("h2",null,t))},k=e(11),w=function(n){return{type:r.SET_FILTER,option:n}},j=e(38),T=e(39);function L(){var n=Object(b.a)(["\n  width: 20px;\n  height: 20px;\n"]);return L=function(){return n},n}function C(){var n=Object(b.a)(["\n  width: 20px;\n  height: 20px;\n"]);return C=function(){return n},n}function D(){var n=Object(b.a)(["\n  padding: 5px;\n\n  border-radius: 50%;\n  cursor: pointer;\n  background-color: var(--focus);\n\n  border: 1px solid transparent;\n\n  transition: all .3s ease-in-out;\n\n\n  &:last-child{\n    margin-left: 4px;\n    background-color: var(--negative);\n\n  }\n\n  &:last-child:hover{\n    border: 1px solid var(--negative);\n    box-shadow: 0 0 5px var(--negative);\n\n  }\n\n  &:hover {\n    border: 1px solid var(--focus);\n    box-shadow: 0 0 5px var(--focus);\n  }\n  \n "]);return D=function(){return n},n}function A(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  min-width: 400px;\n\n  padding: 8px 20px;\n  margin: 0 2px 8px 0;\n\n  background-color: var(--quaternary);\n\n  border-radius: 4px;\n \n &:last-child {\n  margin: 0 2px 0 0;\n }\n\n > div:first-child   {\n   padding: 10px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  cursor: pointer;\n\n  > span {\n    -webkit-user-select: none;\n    margin-left: 4px;\n\n    color: var(--white);\n\n    width: 300px;\n\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    font-size: 1rem;\n    opacity: .9;\n    text-decoration: ",";\n    font-style: ",";\n  }\n\n  > input {\n    cursor: pointer;\n  }\n\n \n }"]);return A=function(){return n},n}var S=h.b.li(A(),(function(n){return n.task.completed?"line-through":"normal"}),(function(n){return n.task.completed?"italic":"normal"})),M=h.b.button(D()),N=Object(h.b)(j.a)(C()),_=Object(h.b)(T.a)(L()),I=e(15),R=e(16),F=e(40),H=e(41),K=e(42);function B(){var n=Object(b.a)(["\n width: 24px;\n height: 24px;\n"]);return B=function(){return n},n}function P(){var n=Object(b.a)(["\n width: 24px;\n height: 24px;\n"]);return P=function(){return n},n}function z(){var n=Object(b.a)(["\n  width: 20px;\n  height: 20px;\n  cursor: pointer;\n"]);return z=function(){return n},n}function G(){var n=Object(b.a)(["\n\tdisplay: flex;\n\tjustify-content: flex-end;\n\n\tpadding: 10px 20px;\n\t> button {\n\t\tpadding: 5px 10px;\n\t\tborder-radius: 4px;\n\n\t\tcursor: pointer;\n\t}\n\t> button:last-child {\n\t\tmargin-left: 8px;\n\t\tbackground-color: var(--negative);\n\t}\n\n\t> button:first-child {\n\t\tbackground-color: var(--focus);\n\t}\n\n\t> button > svg {\n\t\tmargin-right: 4px;\n\t}\n"]);return G=function(){return n},n}function q(){var n=Object(b.a)(["\n\tpadding: 20px 20px;\n\tmargin-left: 5px;\n"]);return q=function(){return n},n}function U(){var n=Object(b.a)(["\n\tbackground-color: var(--secondary);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\n\tpadding: 10px 20px;\n\n\tuser-select: none;\n\tcursor: move;\n"]);return U=function(){return n},n}function W(){var n=Object(b.a)(["\n\t/* position: absolute;\n\ttop: 30%;\n\tleft: 50%;\n\n\ttransform: translate(-50%, -50%); */\n\tz-index: 10;\n\n\tmin-width: 400px;\n\n\tbackground-color: var(--primary);\n\tcolor: var(--white);\n\n\tborder-radius: 4px;\n\n\topacity: 0;\n\n\ttransition: all 0.3s ease-in-out;\n\n\t&.show {\n\t\topacity: 1;\n\t}\n\t&.hide {\n\t\topacity: 0;\n\t}\n"]);return W=function(){return n},n}var Y,V,J=h.b.div(W()),X=h.b.div(U()),Q=h.b.div(q()),Z=h.b.div(G()),$=Object(h.b)(F.a)(z()),nn=Object(h.b)(H.a)(P()),tn=Object(h.b)(K.a)(B()),en=function(n){var t=n.title,e=n.content,r=n.type,i=n.onOk,c=n.onCancel,u=Object(o.useState)(""),l=Object(k.a)(u,2),s=l[0],d=l[1],f=Object(o.useRef)(null);Object(o.useEffect)((function(){var n=f.current;if(n){var t,r=null===(t=n.parentElement)||void 0===t?void 0:t.id;r&&d(r),n.classList.add("show");var o=n.querySelector(".body");o&&(o.innerHTML=e)}}),[e]);var p=function(){console.log("hide",s);var n=document.getElementById(s);if(null!==n){var t=n.querySelector(".show");null===t||void 0===t||t.classList.remove(".show"),null===t||void 0===t||t.classList.add("hide"),document.querySelectorAll(".back-cover").forEach((function(n){return n.remove()})),setTimeout((function(){n.remove()}),300)}};return a.a.createElement(J,{ref:f},a.a.createElement(X,null,a.a.createElement("h3",null,t),a.a.createElement($,{onClick:function(){c(),p()}})),a.a.createElement(Q,{className:"body"}," ",e),r===V.CONFIRM?a.a.createElement(Z,null,a.a.createElement("button",{onClick:function(){c(),p()}},a.a.createElement(nn,null),a.a.createElement("span",null,"Cancel")),a.a.createElement("button",{onClick:function(){i(),p()}},a.a.createElement(tn,null),a.a.createElement("span",null,"Ok"))):"")};!function(n){n.REMOVE="remove",n.CANCEL="cancel",n.OK="ok"}(Y||(Y={})),function(n){n.FORM="form",n.CONFIRM="confirm",n.ALERT=""}(V||(V={}));var rn=function(){function n(t){Object(I.a)(this,n),this.props=void 0,this.id=void 0,this.props=t,this.props.draggable=t.draggable||!0,this.props.type=t.type||V.CONFIRM,this.id=Math.random().toString(),this.show()}return Object(R.a)(n,[{key:"show",value:function(){var n=this,t=a.a.createElement(en,Object(d.a)({},this.props)),e=document.createElement("div");e.style.cssText="position: absolute;\n    top: 30%;\n    left: 50%;\n    transform: translate(-50%, -50%);z-index: 10;",e.id=this.id;var r=document.getElementById("root");if(r){var o=document.createElement("div");if(o.style.cssText="\n      position: fixed;\n      top: 0;\n      left: 0;\n      background-color: black;\n      opacity: 0.6;\n      width: 100vw;\n      height: 100vh;\n      z-index: 0;",o.classList.add("back-cover"),document.body.appendChild(o),r.appendChild(e),this.props.draggable){r.addEventListener("mousedown",(function(t){n.onMouseDown(t,e,!1)}))}c.a.render(t,e)}}},{key:"onMouseDown",value:function(n,t,e){var r,o;t&&(n.preventDefault(),t.ondragstart=function(){return!1},function(n,t,u){if(e)return;e=!0,document.addEventListener("mousemove",i),n.addEventListener("mouseup",a),r=t-n.getBoundingClientRect().left,o=u-n.getBoundingClientRect().top,n&&(n.style.position="fixed",n.style.transform="none");c(t,u)}(t,n.clientX,n.clientY));function a(n){!function(){if(!e)return;e=!1,t.style.top=parseInt(t.style.top)+window.pageYOffset+"px",t.style.position="absolute",document.removeEventListener("mousemove",i),t.removeEventListener("mouseup",a)}()}function i(n){c(n.clientX,n.clientY)}function c(n,e){var a=n-r,i=e-o,c=i+t.offsetHeight;if(c>document.documentElement.clientHeight){var u=document.documentElement.getBoundingClientRect().bottom,l=Math.min(u-c,10);l<0&&(l=0),window.scrollBy(0,l),i=Math.min(i,document.documentElement.clientHeight-t.offsetHeight)}if(i<0){var s=Math.min(-i,10);s<0&&(s=0),window.scrollBy(0,-s),i=Math.max(i,0)}a<0&&(a=0),a>document.documentElement.clientWidth-t.offsetWidth&&(a=document.documentElement.clientWidth-t.offsetWidth),t.style.left=a+"px",t.style.top=i+"px"}}}]),n}(),on=function(n){var t=n.task,e=n.editHandler,o=Object(u.b)(),i=function(n){new rn({title:"Test",content:"\xbf Seguro elimar la tarea <strong>".concat(n.name,"</strong> ?"),onOk:function(){var t;o((t=n.id,{type:r.DELETE_TASK,id:t}))},onCancel:function(){console.log("cancel")}})};return a.a.createElement(S,{task:t},a.a.createElement("div",{onClick:function(){return o((n=t.id,{type:r.TOGGLE_COMPLETED,id:n}));var n}},a.a.createElement("input",{type:"checkbox",checked:t.completed,onChange:function(){}}),a.a.createElement("span",null,t.name)),a.a.createElement("div",null,a.a.createElement(M,{onClick:function(){return e(t)}},a.a.createElement(_,null)),a.a.createElement(M,{onClick:function(){return i(t)}},a.a.createElement(N,null))))};function an(){var n=Object(b.a)(["\n  width: 18px;\n  height: 18px;\n  cursor: pointer;\n"]);return an=function(){return n},n}function cn(){var n=Object(b.a)(["\n \n  min-height: 35px;\n\n  padding: 10px 20px;\n\n  margin-bottom: 4px;\n\n  background-color: ",";\n  color: var(--white);\n\n  border-radius: 4px;\n\n  font-weight: 300px;\n  font-size: 0.9rem;\n\n  position: relative;\n\n  transition: all 0.3s ease-in-out;\n\n  opacity:0;\n\n  border: 1px solid ",";\n  box-shadow: 0 0 5px ",";\n  \n  > span:first-child {\n    position: absolute;\n    top: 1px;\n    right: 1px;\n  }\n  \n > span.content-notify {\n  line-height: 35px;\n  padding: 5px 0;\n }\n\n &.show{\n  opacity: 1;\n }\n\n &.hide{\n   opacity: 0;\n }\n"]);return cn=function(){return n},n}var un=h.b.div(cn(),(function(n){return"var(--".concat(n.notify.color,")")}),(function(n){return"var(--".concat(n.notify.color,")")}),(function(n){return"var(--".concat(n.notify.color,")")})),ln=Object(h.b)(F.a)(an()),sn=function(n){var t=n.notify,e=n.removeNotify,r=n.id,i=Object(o.useRef)(null);Object(o.useEffect)((function(){var n;null===(n=i.current)||void 0===n||n.classList.add("show")}),[i]);return a.a.createElement(un,{notify:t,ref:i},a.a.createElement("span",{onClick:function(){e(r)}},a.a.createElement(ln,null)),a.a.createElement("span",{className:"content-notify"},t.mesasge))},dn=function(){function n(t){Object(I.a)(this,n),this.notify=void 0,this.id=(new Date).getTime()+"",this.notify=t,this.createNotify()}return Object(R.a)(n,[{key:"createNotify",value:function(){var n=this,t=document.getElementById("wrapper-notifications");t||((t=document.createElement("div")).id="wrapper-notifications",t.classList.add("wrapper-notifications"),document.body.appendChild(t));var e=document.createElement("div");e.id=this.id,t.prepend(e);var r=a.a.createElement(sn,{notify:this.notify,removeNotify:this.removeNotify,id:this.id});c.a.render(r,e);var o=this.notify.lifeTime||7e3;setTimeout((function(){n.removeNotify(n.id)}),o)}},{key:"removeNotify",value:function(n){var t=document.getElementById(n);if(t){var e=t.querySelector("div");null===e||void 0===e||e.classList.remove("show"),null===e||void 0===e||e.classList.add("hide"),setTimeout((function(){c.a.unmountComponentAtNode(t),t.remove()}),300)}}}]),n}();function fn(){var n=Object(b.a)(["\n  padding: 12.5px 10px;\n  border-radius: 4px;\n\n  background-color: var(--focus);\n\n  font-weight: 500;\n\n  border: 1px solid transparent;\n\n  transition: all 0.3s ease-in-out;\n\n  cursor: pointer;\n\n  &:hover, &:focus {\n    border: 1px solid var(--focus);\n    box-shadow: 0 0 5px var(--focus);\n  }\n"]);return fn=function(){return n},n}function pn(){var n=Object(b.a)(["\n  padding:10px;\n  border-radius: 4px;\n  \n  font-size: 1.1rem;\n  font-weight: 500;\n  color: var(--primary);\n  border: 1px solid transparent;\n  \n  min-width: 328px;\n  \n\n  transition: all 0.3s ease-in-out;\n  &:hover, &:focus {\n    border: 1px solid var(--focus);\n    box-shadow: 0 0 5px var(--focus);\n  }\n \n"]);return pn=function(){return n},n}function mn(){var n=Object(b.a)(["\n  height: 1px;\n  width: ",";\n\n  background-color: var(--white);\n  \n  margin: 15px 0; \n  opacity: .1;\n\n"]);return mn=function(){return n},n}function vn(){var n=Object(b.a)(["\n  display: flex;\n  flex-direction: row;\n\n  justify-content: start;\n  align-items: center;\n  \n  padding: 10px 0;\n\n\n  > button {\n    margin-left: 4px;\n  }\n"]);return vn=function(){return n},n}function bn(){var n=Object(b.a)(["\n  grid-area: LT;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  background-color: var(--tertiary);\n\n  padding-bottom: 10px;\n\n\n  min-height: calc(100vh - 130px);\n\n  > ul {\n    /* min-height: calc(100vh - 55px - 45px - 75px -20px -10px); */\n\n    overflow-y: scroll;\n\n    ::-webkit-scrollbar {\n      width: 4px;\n    }\n    ::-webkit-scrollbar-thumb {\n      background-color: var(--focus);\n      border-radius: 4px;\n    }\n\n    ::-webkit-scrollbar-track {\n      background-color: var(--secondary);\n    }\n\n  }\n"]);return bn=function(){return n},n}var hn=h.b.div(bn()),gn=h.b.form(vn()),xn=(h.b.div(mn(),(function(n){return n.insets?"80%":"100%"})),h.b.input(pn())),En=h.b.button(fn()),yn=function(){var n=Object(u.c)((function(n){return n.tasks.tasks})),t=Object(u.c)((function(n){return n.tasks.notify})),e=Object(u.c)((function(n){return n.tasks.filter})),i=Object(u.b)(),c=Object(o.useState)(""),l=Object(k.a)(c,2),s=l[0],f=l[1],p=Object(o.useState)("ADD"),m=Object(k.a)(p,2),v=m[0],b=m[1],h=Object(o.useState)(),g=Object(k.a)(h,2),x=g[0],E=g[1],y=Object(o.useRef)(null),O=Object(o.useRef)(null);Object(o.useEffect)((function(){if(t){var n;if("negative"!==t.color)f(""),null===(n=y.current)||void 0===n||n.focus(),"SAVE"===v&&b("ADD");var e=O.current;"Tarea crada con exito"===t.mesasge&&e&&e.scrollTo({top:e.scrollHeight,behavior:"smooth"}),new dn(t)}}),[t]);var w=Object(o.useMemo)((function(){switch(e){case"COMPLETED":return n.filter((function(n){return n.completed}));case"UNCOMPLETED":return n.filter((function(n){return!n.completed}));default:return n}}),[e,n]),j=function(n){if(n.preventDefault(),"ADD"===v){var t={id:(new Date).getTime(),name:s,completed:!1};i((e=t,{type:r.ADD_TASK,task:e}))}else x&&i(function(n){return{type:r.EDIT_TASK,task:n}}(Object(d.a)({},x,{name:s})));var e},T=function(n){b("SAVE"),f(n.name),E(n),setTimeout((function(){var n=y.current;n&&(n.selectionStart=n.value.length,n.selectionEnd=n.value.length,n.focus())}),10)};return a.a.createElement(hn,null,a.a.createElement(gn,{onSubmit:function(n){return j(n)}},a.a.createElement(xn,{autoFocus:!0,type:"text",value:s,onChange:function(n){return f(n.target.value)},ref:y}),a.a.createElement(En,{type:"submit"},v),a.a.createElement(En,{type:"button",onClick:function(){return function(){var n;b("ADD"),f(""),null===(n=y.current)||void 0===n||n.focus()}()}},"Cancel")),a.a.createElement("ul",{ref:O},w.map((function(n){return a.a.createElement(on,{key:n.id,task:n,editHandler:T})}))))};function On(){var n=Object(b.a)(["\n  margin-left: 4px;\n\n  padding: 5px;\n\n  border-radius: 4px;\n\n  cursor: pointer;\n\n  font-weight: 500;\n\n  border: 1px solid transparent;\n\n  &.active{\n    background-color: var(--focus);\n    border: 1px solid  var(--focus);\n    box-shadow: 0 0 5px var(--focus);\n  }\n  &:hover {\n    background-color: var(--focus);\n    border: 1px solid  var(--focus);\n    box-shadow: 0 0 5px var(--focus);\n  }\n\n  &:last-child {\n    margin-left: none;\n  }\n\n"]);return On=function(){return n},n}function kn(){var n=Object(b.a)(["\n  grid-area: FO;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n\n  background-color: var(--secondary);\n\n  height: 75px;\n\n > span {\n   color: var(--white);\n   font-weight: 300;\n }\n"]);return kn=function(){return n},n}var wn=h.b.footer(kn()),jn=h.b.button(On()),Tn=function(){var n=Object(u.b)(),t=Object(u.c)((function(n){return n.tasks.filter}));return a.a.createElement(wn,null,a.a.createElement(jn,{onClick:function(){return n(w("ALL"))},className:"ALL"===t?"active":""},a.a.createElement("span",null,"All")),a.a.createElement(jn,{onClick:function(){return n(w("COMPLETED"))},className:"COMPLETED"===t?"active":""},a.a.createElement("span",null,"Completed")),a.a.createElement(jn,{onClick:function(){return n(w("UNCOMPLETED"))},className:"UNCOMPLETED"===t?"active":""},a.a.createElement("span",null,"Uncompleted")))},Ln=function(){return a.a.createElement(x,null,a.a.createElement(O,{title:"TaskApp"}),a.a.createElement(yn,null),a.a.createElement(Tn,null))};function Cn(){var n=Object(b.a)(["\n  *{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  html, body, #root {\n   height: 100vh; \n  }\n  *, button, input{\n    border: 0;\n    outline: 0;\n\n\n    font-family: 'Roboto', sans-serif;\n  }\n\n  .wrapper-notifications{\n    position: absolute;\n    right: 2rem;\n    bottom:5rem;\n  }\n\n  :root {\n    --primary: #36393f;\n    --secondary: #2f3136;\n    --tertiary: rgb(32, 34, 37);\n    --quaternary: #292b2f;\n    --quinary: #393d42\n    --senary: #828386;\n\n    --negative: #f84a4b;\n    --positive: #21ba45;\n\n    --white: #ffffff;\n\n    --focus: #51cbee;\n  }\n\n  \n"]);return Cn=function(){return n},n}var Dn=Object(h.a)(Cn()),An=function(){return a.a.createElement(u.a,{store:v},a.a.createElement(Ln,null),a.a.createElement(Dn,null))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(An,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.194c05b8.chunk.js.map