(this["webpackJsonpdelivery-app-client"]=this["webpackJsonpdelivery-app-client"]||[]).push([[0],{164:function(e,t,n){e.exports=n(286)},169:function(e,t,n){},285:function(e,t,n){var a={"./bn.json":[290,3],"./en.json":[291,4]};function r(e){if(!n.o(a,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=a[e],r=t[0];return n.e(t[1]).then((function(){return n.t(r,3)}))}r.keys=function(){return Object.keys(a)},r.id=285,e.exports=r},286:function(e,t,n){"use strict";n.r(t);var a=n(29),r=n.n(a);n(169),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(170);var c,u=n(94),o=n(18),l=n.n(o),i=n(0),s=n.n(i),E=n(15),p=n(88),d=n(68),m=n(31),f=n(149),b=n(26),v=n(134),h=n(135),O=n(150),C=n(147),y=n(136),j=n(67),w=n(13),g=n(49),k=n(24),x=Object(g.b)({car:{id:"vehicles.ford",defaultMessage:"Ford"},bus:{id:"vehicles.mercedes",defaultMessage:"Mercedes"}}),N=Object(k.c)((function(e){var t=e.intl.formatMessage;return s.a.createElement(F,null,s.a.createElement(g.a,{value:new Date(1459913574887),year:"numeric",month:"long",day:"numeric",weekday:"long"}),t(x.car),t(x.bus))})),T=n(148),U=n(289),_=n(300),R=n(101);function A(e){return{type:c.RECEIVE_COUNT,payload:e}}!function(e){e.INCREASE_COUNT="INCREASE_COUNT",e.DECREASE_COUNT="DECREASE_COUNT",e.RECEIVE_COUNT="RECEIVE_COUNT"}(c||(c={}));var S={increaseCounter:function(e){return{type:c.INCREASE_COUNT,payload:e}},decreaseCounter:function(e){return{type:c.DECREASE_COUNT,payload:e}}},D=Object(d.b)((function(e){return{count:e.count}}),S)((function(e){var t=e.count,n=e.increaseCounter,a=e.decreaseCounter,r=Object(i.useState)(0),c=Object(T.a)(r,2),u=c[0],o=c[1];return s.a.createElement(F,null,s.a.createElement(U.a,{primary:!0,onClick:function(){return n(u)}},"Increase"),s.a.createElement(_.a,{type:"number",value:u,onChange:function(e,t){var n=t.value;o(Number(n))}}),s.a.createElement(U.a,{primary:!0,onClick:function(){return a(u)}},"Decrease"),s.a.createElement(R.a,null,t.count),s.a.createElement("br",null))})),I=n(40),B=function(){return s.a.createElement("div",null,s.a.createElement("h5",null,"NAVBAR"),s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(I.b,{to:"/counter"},"Counter")),s.a.createElement("li",null,s.a.createElement(I.b,{to:"/datetime"},"Date & Time"))),s.a.createElement("hr",null))};function M(){var e=Object(y.a)(["\n  text-align: center;\n  background-color: ","\n"]);return M=function(){return e},e}var V,F=j.b.div(M(),(function(e){return e.theme.background.pageBackground})),J=function(e){Object(O.a)(n,e);var t=Object(C.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",null,s.a.createElement(B,null)),s.a.createElement(F,null,s.a.createElement(w.d,null,s.a.createElement(w.b,{exact:!0,path:"/counter"},s.a.createElement(D,null)),s.a.createElement(w.b,{exact:!0,path:"/"},s.a.createElement(w.a,{to:"/counter"})),s.a.createElement(w.b,{exact:!0,path:"/datetime"},s.a.createElement(N,null)),s.a.createElement(w.b,{path:"*"},s.a.createElement("div",null,"not found")))))}}]),n}(s.a.Component),L={count:0},W=(V=c,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V.RECEIVE_COUNT:switch(t.payload.op){case"add":return{count:e.count+t.payload.count};case"sub":default:return{count:e.count-t.payload.count}}case V.INCREASE_COUNT:case V.DECREASE_COUNT:default:return e}}),P=Object(m.c)({count:W}),$=l.a.mark(H),q=l.a.mark(K),z=l.a.mark(Q),G=l.a.mark(X);function H(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.c)(A({count:e.payload,op:"add"}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),$,null,[[0,5]])}function K(e){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(b.c)(A({count:e.payload,op:"sub"}));case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),q,null,[[0,5]])}function Q(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.d)(c.INCREASE_COUNT,H);case 2:return e.next=4,Object(b.d)(c.DECREASE_COUNT,K);case 4:case"end":return e.stop()}}),z)}function X(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.b)(Q)]);case 2:case"end":return e.stop()}}),G)}var Y={body:"#ABCDEF"},Z={colors:Y,background:{pageBackground:Y.body}};function ee(e){return te.apply(this,arguments)}function te(){return(te=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(285)("./".concat(t,".json"));case 2:return a=e.sent,e.abrupt("return",a.default);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){var e=Object(u.a)(l.a.mark((function e(t,n){var a,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object(E.c)(),e.next=3,ee(t);case 3:return r=e.sent,c=Object(p.a)({locale:t,messages:r,defaultLocale:"bn"},a),e.abrupt("return",s.a.createElement(p.b,c,s.a.createElement(d.a,{store:n},s.a.createElement(j.a,{theme:Z},s.a.createElement(I.a,null,s.a.createElement(s.a.StrictMode,null,s.a.createElement(J,null)))))));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}})()("en",function(){var e=l.a.mark(t);function t(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.a)([Object(b.b)(X)]);case 2:case"end":return e.stop()}}),e)}var n=Object(f.a)(),a=Object(m.e)(P,Object(m.a)(n));return n.run(t),a}()).then((function(e){r.a.render(e,document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[164,1,2]]]);
//# sourceMappingURL=main.62e39572.chunk.js.map