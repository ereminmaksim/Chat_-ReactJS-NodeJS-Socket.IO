/*! For license information please see main.c6a92bdb.chunk.js.LICENSE.txt */
(this.webpackJsonpchat=this.webpackJsonpchat||[]).push([[0],{104:function(e,a,t){},158:function(e,a,t){"use strict";t.r(a);var c=t(0),n=t.n(c),s=t(9),r=t.n(s),i=(t(104),t(13)),l=t(30),j=t.n(l),o=t(42),d=t(24),u=t(91),b=function(e,a){switch(a.type){case"JOINED":return Object(i.a)(Object(i.a)({},e),{},{joined:!0,roomId:a.payload.roomId,userName:a.payload.userName});case"SET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:a.payload});case"SET_DATA":return Object(i.a)(Object(i.a)({},e),{},{users:a.payload.users,messages:a.payload.messages});case"NEW_MESSAGE":return Object(i.a)(Object(i.a)({},e),{},{messages:[].concat(Object(u.a)(e.messages),[a.payload])});default:return e}},x=t(84),O=t.n(x)()(),h=t(44),m=t.n(h),p=t(204),g=t(197),y=t(4),f=function(e){var a=e.onLogin,t=n.a.useState(""),c=Object(d.a)(t,2),s=c[0],r=c[1],i=n.a.useState(""),l=Object(d.a)(i,2),u=l[0],b=l[1],x=n.a.useState(!1),O=Object(d.a)(x,2),h=O[0],f=O[1],v=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s&&u){e.next=2;break}return e.abrupt("return",alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435"));case 2:return t={roomId:s,userName:u},f(!0),e.next=6,m.a.post("/rooms",t);case 6:a(t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(y.jsx)("div",{className:"wrapper",children:Object(y.jsxs)("div",{className:"joinBlock",children:[Object(y.jsx)(p.a,{style:{backgroundColor:"white"},id:"outlined-basic2",onChange:function(e){r(e.target.value)},label:"\u041d\u043e\u043c\u0435\u0440 \u041a\u043e\u043c\u043d\u0430\u0442\u044b",variant:"outlined",type:"text",value:s}),Object(y.jsx)(p.a,{style:{display:"flex",marginTop:"10px",width:"222px",flexDirection:"column",backgroundColor:"white"},id:"outlined-basic1",onChange:function(e){b(e.target.value)},label:"\u0412\u0430\u0448\u0435 \u0418\u043c\u044f",variant:"outlined",type:"text",value:u}),Object(y.jsx)(g.a,{disabled:h,onClick:v,style:{display:"block",marginTop:"10px",padding:"6px 86px"},variant:"contained",color:"primary",children:h?"\u0412\u0425\u041e\u0414...":"\u0412\u041e\u0419\u0422\u0418"})]})})},v=t(195),S=t(198),E=t(201),N=t(50),k=t(196),R=t(199),w=t(200),A=t(202),M=t(205),C=t(203),I=t(49),T=t.n(I),_=t(90),D=t.n(_),B=function(e){var a=e.users,t=e.messages,c=e.userName,s=e.roomId,r=e.onAddMessage,i=n.a.useState(""),l=Object(d.a)(i,2),j=l[0],o=l[1],u=n.a.useRef(null),b=function(){O.emit("ROOM:NEW_MESSAGE",{userName:c,roomId:s,text:j}),r({userName:c,text:j}),o("")};n.a.useEffect((function(){u.current.scrollTo(0,999999)}),[t]);var x=D()().format("YYYY-MM-DD HH:mm");return Object(y.jsx)("div",{children:Object(y.jsxs)("div",{className:"shell",children:[Object(y.jsx)(S.a,{container:!0,children:Object(y.jsx)(S.a,{item:!0,xs:12,children:Object(y.jsx)(N.a,{variant:"h3",className:"header-message",children:"Chat"})})}),Object(y.jsxs)(S.a,{container:!0,component:v.a,className:T.a.chatSection,children:[Object(y.jsxs)(S.a,{item:!0,xs:3,className:T.a.borderRight500,children:[Object(y.jsxs)("div",{className:"chat-users",children:["\u041a\u043e\u043c\u043d\u0430\u0442\u0430: ",s,Object(y.jsx)("hr",{}),Object(y.jsxs)("b",{children:["\u041e\u043d\u043b\u0430\u0439\u043d : ",a.length]}),Object(y.jsx)("hr",{}),Object(y.jsx)("ul",{children:a.map((function(e,a){return Object(y.jsx)("li",{children:e},e+a)}))})]}),Object(y.jsx)(k.a,{style:{height:"10.5%"},children:Object(y.jsx)(R.a,{button:!0,children:Object(y.jsx)(w.a,{children:Object(y.jsx)(M.a,{alt:"Remy Sharp",src:"https://material-ui.com/static/images/avatar/1.jpg"})})},"RemySharp")}),Object(y.jsx)(E.a,{}),Object(y.jsx)(S.a,{item:!0,xs:12,style:{padding:"10px"},children:Object(y.jsx)(p.a,{id:"outlined-basic-email",label:"Search",variant:"outlined",fullWidth:!0})}),Object(y.jsx)(E.a,{}),Object(y.jsxs)(k.a,{children:[Object(y.jsxs)(R.a,{button:!0,children:[Object(y.jsx)(w.a,{children:Object(y.jsx)(M.a,{alt:"Remy Sharp",src:"https://material-ui.com/static/images/avatar/1.jpg"})}),Object(y.jsx)(A.a,{primary:"Remy Sharp",children:"Remy Sharp"}),Object(y.jsx)(A.a,{secondary:"online",align:"right"})]},"RemySharp"),Object(y.jsxs)(R.a,{button:!0,children:[Object(y.jsx)(w.a,{children:Object(y.jsx)(M.a,{alt:"Alice",src:"https://material-ui.com/static/images/avatar/3.jpg"})}),Object(y.jsx)(A.a,{primary:"Alice",children:"Alice"}),Object(y.jsx)(A.a,{secondary:"online",align:"right"})]},"Alice"),Object(y.jsxs)(R.a,{button:!0,children:[Object(y.jsx)(w.a,{children:Object(y.jsx)(M.a,{alt:"Cindy Baker",src:"https://material-ui.com/static/images/avatar/2.jpg"})}),Object(y.jsx)(A.a,{primary:"Cindy Baker",children:"Cindy Baker"}),Object(y.jsx)(A.a,{secondary:"online",align:"right"})]},"CindyBaker")]})]}),Object(y.jsxs)(S.a,{item:!0,xs:9,children:[Object(y.jsx)(k.a,{ref:u,className:T.a.messageArea,style:{overflowY:"scroll",height:"328px"},children:t.map((function(e,a){return Object(y.jsx)(R.a,{children:Object(y.jsxs)(S.a,{container:!0,children:[Object(y.jsx)(S.a,{item:!0,xs:12,children:Object(y.jsx)(A.a,{className:"list-text",align:"right",primary:e.text})}),Object(y.jsxs)(S.a,{item:!0,xs:12,children:[Object(y.jsx)("span",{children:e.userName}),Object(y.jsx)(A.a,{align:"right",secondary:x})]})]})},a)}))}),Object(y.jsx)(E.a,{}),Object(y.jsxs)(S.a,{container:!0,style:{padding:"20px",marginTop:"17%"},children:[Object(y.jsx)(S.a,{item:!0,xs:11,children:Object(y.jsx)(p.a,{value:j,onKeyDown:function(e){if("Enter"===e.key)return b()},onChange:function(e){return o(e.target.value)},id:"outlined-basic-email#2",label:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",fullWidth:!0})}),Object(y.jsx)(S.a,{item:!0,xs:1,align:"right",children:Object(y.jsx)(C.a,{onClick:b,color:"primary","aria-label":"add",children:"Send"})})]})]})]})]})})},W=function(){var e=n.a.useReducer(b,{joined:!1,roomId:null,userName:null,users:[],messages:[]}),a=Object(d.a)(e,2),t=a[0],c=a[1],s=function(){var e=Object(o.a)(j.a.mark((function e(a){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:"JOINED",payload:a}),O.emit("ROOM:JOIN",a),e.next=4,m.a.get("/rooms/".concat(a.roomId));case 4:t=e.sent,n=t.data,c({type:"SET_DATA",payload:n});case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),r=function(e){c({type:"SET_USERS",payload:e})},l=function(e){c({type:"NEW_MESSAGE",payload:e})};return n.a.useEffect((function(){O.on("ROOM:SET_USERS",r),O.on("ROOM:NEW_MESSAGE",l)}),[]),window.socket=O,Object(y.jsx)("div",{children:t.joined?Object(y.jsx)(B,Object(i.a)(Object(i.a)({},t),{},{onAddMessage:l})):Object(y.jsx)(f,{onLogin:s})})};r.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(W,{})}),document.getElementById("root"))},49:function(e,a,t){}},[[158,1,2]]]);
//# sourceMappingURL=main.c6a92bdb.chunk.js.map