(this["webpackJsonpdelivery-app-client"]=this["webpackJsonpdelivery-app-client"]||[]).push([[0],{176:function(e,n,t){e.exports=t(309)},181:function(e,n,t){},308:function(e,n,t){var r={"./bn.json":[311,3],"./en.json":[312,4]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return t.e(n[1]).then((function(){return t.t(a,3)}))}a.keys=function(){return Object.keys(r)},a.id=308,e.exports=a},309:function(e,n,t){"use strict";t.r(n);var r=t(26),a=t.n(r);t(181),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(182);var c=t(99),o=t(17),u=t.n(o),i=t(0),l=t.n(i),s=t(16),d=t(323),p=t(163),f=t(28),m=t(165),h=t(24),E=t(43),b=t(31),v=t(13),g=t(322),O=t(164),x=t(47);function w(){var e=Object(E.a)(["\n  display: table-cell;\n  width: ","%;\n  // text-align: center;\n  color: ",";\n  padding: 2px;\n  vertical-align: middle;\n  ",";\n\n  &&&& i {\n    margin-right: 0;\n  }\n\n  label {\n    margin-top: 6px;\n    font-size: 0.9em;\n  }\n\n  .menu-item-content-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(E.a)(["\n  position: fixed;\n  bottom: 0;\n  height: 10%;\n  width: 100%;\n  display: table;\n  padding: 2px;\n  border: 1px solid ",";\n  background-color: ",";\n"]);return y=function(){return e},e}var j=b.b.div(y(),(function(e){return e.theme.menu.border}),(function(e){return e.theme.menu.optionBackground})),k=b.b.div(w(),(function(e){return e.width}),(function(e){return e.theme.menu.text}),(function(e){return e.isActive&&"background-color: ".concat(e.theme.menu.activeOptionBackground)})),C=function(){var e=Object(i.useState)("order"),n=Object(O.a)(e,2),t=n[0],r=n[1],a=Object(v.g)(),c=[{value:"order",path:"/order",icon:"food",text:"Order"},{value:"search",path:"/search",icon:"search",text:"Search"},{value:"cart",path:"/cart",icon:"shopping cart",text:"Cart"},{value:"profile",path:"/profile",icon:"user",text:"Profile"}];return l.a.createElement(j,null,c.map((function(e){return l.a.createElement(k,{width:100/c.length,isActive:t===e.value,onClick:function(){r(e.value),a.push(e.path)}},l.a.createElement("div",{className:"menu-item-content-container"},l.a.createElement(x.a,{name:e.icon,size:"large"}),l.a.createElement("label",null,e.text)))})))},N=function(){return l.a.createElement("div",null,"Page 1")},U=function(){return l.a.createElement("div",null,"Page 3")},_=function(){return l.a.createElement("div",null,"Page 4")};function T(){var e=Object(E.a)(["\n  height: 90%;\n  width: 100%;\n"]);return T=function(){return e},e}function R(){var e=Object(E.a)(["\n  background-color: ",";\n  height: 100%;\n  width: 100%;\n"]);return R=function(){return e},e}var B,A=b.b.div(R(),(function(e){return e.theme.background.pageBackground})),S=b.b.div(T()),D=function(){return l.a.createElement(A,null,l.a.createElement(S,null,l.a.createElement(v.d,null,l.a.createElement(v.b,{exact:!0,path:"/order"},l.a.createElement(N,null)),l.a.createElement(v.b,{exact:!0,path:"/"},l.a.createElement(v.a,{to:"/order"})),l.a.createElement(v.b,{exact:!0,path:"/search"},l.a.createElement(g.a,null)),l.a.createElement(v.b,{exact:!0,path:"/cart"},l.a.createElement(U,null)),l.a.createElement(v.b,{exact:!0,path:"/profile"},l.a.createElement(_,null)))),l.a.createElement(C,null))};!function(e){e.INCREASE_COUNT="INCREASE_COUNT",e.DECREASE_COUNT="DECREASE_COUNT",e.RECEIVE_COUNT="RECEIVE_COUNT"}(B||(B={}));var I,F={count:0},P=(I=B,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case I.RECEIVE_COUNT:switch(n.payload.op){case"add":return{count:e.count+n.payload.count};case"sub":default:return{count:e.count-n.payload.count}}case I.INCREASE_COUNT:case I.DECREASE_COUNT:default:return e}}),L=Object(f.c)({count:P});function V(e){return{type:B.RECEIVE_COUNT,payload:e}}var z=u.a.mark($),J=u.a.mark(q),W=u.a.mark(G),M=u.a.mark(H);function $(e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(h.c)(V({count:e.payload,op:"add"}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),z,null,[[0,5]])}function q(e){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(h.c)(V({count:e.payload,op:"sub"}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),J,null,[[0,5]])}function G(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)(B.INCREASE_COUNT,$);case 2:return e.next=4,Object(h.d)(B.DECREASE_COUNT,q);case 4:case"end":return e.stop()}}),W)}function H(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(G)]);case 2:case"end":return e.stop()}}),M)}var K=t(72),Q={body:"#FBFBFB",primary:"#446688",secondary:"#E0E0E0",secondaryLight:"#F0F0F0",grey:"#D0D0D0"},X={colors:Q,background:{pageBackground:Q.body},menu:{text:Q.primary,border:Q.grey,optionBackground:Q.secondaryLight,activeOptionBackground:Q.secondary}};function Y(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(c.a)(u.a.mark((function e(n){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(308)("./".concat(n,".json"));case 2:return r=e.sent,e.abrupt("return",r.default);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){var e=Object(c.a)(u.a.mark((function e(n,t){var r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(s.c)(),e.next=3,Y(n);case 3:return a=e.sent,c=Object(d.a)({locale:n,messages:a,defaultLocale:"bn"},r),e.abrupt("return",l.a.createElement(d.b,c,l.a.createElement(p.a,{store:t},l.a.createElement(b.a,{theme:X},l.a.createElement(K.a,null,l.a.createElement(D,null))))));case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}})()("en",function(){var e=u.a.mark(n);function n(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(H)]);case 2:case"end":return e.stop()}}),e)}var t=Object(m.a)(),r=Object(f.e)(L,Object(f.a)(t));return t.run(n),r}()).then((function(e){a.a.render(e,document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[176,1,2]]]);
//# sourceMappingURL=main.1b5cc442.chunk.js.map