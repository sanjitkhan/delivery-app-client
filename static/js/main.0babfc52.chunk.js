(this["webpackJsonpdelivery-app-client"]=this["webpackJsonpdelivery-app-client"]||[]).push([[0],{138:function(e,n,t){e.exports=t.p+"static/media/frozenfoods.576f8d7f.jpg"},139:function(e,n,t){e.exports=t.p+"static/media/icecream.72c7ade6.jpg"},140:function(e,n,t){e.exports=t.p+"static/media/confectionary.38cedb4d.jpg"},141:function(e,n,t){e.exports=t.p+"static/media/groceries.853abf40.jpg"},157:function(e,n,t){e.exports=t(294)},162:function(e,n,t){},293:function(e,n,t){var r={"./bn.json":[296,3],"./en.json":[297,4]};function a(e){if(!t.o(r,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=r[e],a=n[0];return t.e(n[1]).then((function(){return t.t(a,3)}))}a.keys=function(){return Object.keys(r)},a.id=293,e.exports=a},294:function(e,n,t){"use strict";t.r(n);var r=t(27),a=t.n(r);t(162),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(163);var c=t(85),o=t(17),i=t.n(o),u=t(0),l=t.n(u),s=t(14),d=t(306),m=t(144),p=t(29),f=t(146),h=t(24),b=t(19),v=t(18),E=t(12),g=t(145),x=t(93);function O(){var e=Object(b.a)(["\n  display: table-cell;\n  width: ","%;\n  // text-align: center;\n  color: ",";\n  padding: 2px;\n  vertical-align: middle;\n  ",";\n\n  &&&& i {\n    margin-right: 0;\n  }\n\n  label {\n    margin-top: 6px;\n    font-size: 0.9em;\n  }\n\n  .menu-item-content-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return O=function(){return e},e}function y(){var e=Object(b.a)(["\n  position: fixed;\n  bottom: 0;\n  height: 10%;\n  width: 100%;\n  display: table;\n  padding: 2px;\n  border: 1px solid ",";\n  background-color: ",";\n"]);return y=function(){return e},e}var w=v.b.div(y(),(function(e){return e.theme.menu.border}),(function(e){return e.theme.menu.optionBackground})),j=v.b.div(O(),(function(e){return e.width}),(function(e){return e.theme.menu.text}),(function(e){return e.isActive&&"background-color: ".concat(e.theme.menu.activeOptionBackground)})),C=function(){var e=Object(u.useState)("items"),n=Object(g.a)(e,2),t=n[0],r=n[1],a=Object(E.g)(),c=[{value:"items",path:"/items",icon:"food",text:"Items"},{value:"search",path:"/search",icon:"search",text:"Search"},{value:"order",path:"/order",icon:"shopping cart",text:"Order"},{value:"profile",path:"/profile",icon:"user",text:"Profile"}];return l.a.createElement(w,null,c.map((function(e){return l.a.createElement(j,{key:e.value,width:100/c.length,isActive:t===e.value,onClick:function(){r(e.value),a.push(e.path)}},l.a.createElement("div",{className:"menu-item-content-container"},l.a.createElement(x.a,{name:e.icon,size:"large"}),l.a.createElement("label",null,e.text)))})))},k=function(){return l.a.createElement("div",null,"Page 3")},N=function(){return l.a.createElement("div",null,"Page 4")},B=function(){return l.a.createElement("div",null,"Page 2")},R=t(307),A=t(305),I=function(e){var n=e.image,t=e.name,r=e.numBrands;return l.a.createElement(A.a,{image:n,header:t,meta:"".concat(r," brands")})},T=t(138),S=t.n(T),U=t(139),_=t.n(U),F=t(140),D=t.n(F),z=t(141),P=t.n(z);function G(){var e=Object(b.a)(["\n  &&& {\n    margin: 15px;\n  }\n\n  && .card {\n    margin: 10px 0px;\n  }\n\n  && .card:first-child {\n    margin-top: 0px;\n  }\n\n  .card .image {\n    height:15vh;\n    overflow: hidden;\n\n    img {\n      position: relative;\n      top: 15vh;\n      margin-top: -50%;\n    }\n  }\n"]);return G=function(){return e},e}var L,V=Object(v.b)(A.a.Group)(G()),J=function(){var e=[{id:"ice-cream",name:"Ice Cream",image:_.a,numBrands:3},{id:"frozen-foods",name:"Frozen Foods",image:S.a,numBrands:5},{id:"groceries",name:"Groceries",image:D.a,numBrands:8},{id:"confectionaries",name:"Confectionaries",image:P.a,numBrands:7}];return l.a.createElement(V,{itemsPerRow:1},e.map((function(e){var n=e.id,t=e.name,r=e.image,a=e.numBrands;return l.a.createElement(I,{key:n,name:t,image:r,numBrands:a})})))},W=function(){return l.a.createElement("div",null,"Brands tab")};!function(e){e.CATEGORIES="categories",e.BRANDS="brands"}(L||(L={}));function M(){var e=Object(b.a)(["\n  padding-top: 40px;\n"]);return M=function(){return e},e}function $(){var e=Object(b.a)(["\n  margin: auto 10px;\n  padding: 10px 5px;\n  ","\n"]);return $=function(){return e},e}function q(){var e=Object(b.a)(["\n  display: flex;\n  flex-direction: row; \n  vertical-align: middle;\n  height: 100%;\n"]);return q=function(){return e},e}function H(){var e=Object(b.a)(["\n  position: fixed;\n  width: 100%;\n  height: 30px;\n  z-index: 9;\n  align-items: center;\n  border: 0 !important;\n  border-bottom: 1px solid grey;\n  display: flex;\n  flex-direction: column;\n"]);return H=function(){return e},e}var K=Object(v.b)(R.a)(H()),Q=v.b.div(q()),X=v.b.div($(),(function(e){return e.isActive&&"border-bottom: 3px solid ".concat(e.theme.colors.primary,";")})),Y=v.b.div(M()),Z=Object(E.h)((function(e){var n=e.history,t=e.match,r=t.url,a=t.params.tabName;console.log("url: ",r),console.log("tabName: ",a);var c=[{value:"categories",path:"/categories",text:"Categories",render:l.a.createElement(J,null)},{value:"brands",path:"/brands",text:"Brands",render:l.a.createElement(W,null)}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(K,null,l.a.createElement(Q,null,c.map((function(e){return l.a.createElement(X,{key:e.value,width:70/c.length,isActive:a===e.value,onClick:function(){n.push("".concat(function(e,n){return e.slice(0,e.lastIndexOf(n)-1)}(r,a)+e.path))}},l.a.createElement("label",null,e.text))})))),l.a.createElement(Y,null,c.find((function(e){return e.value===a})).render))})),ee=Object(E.h)((function(e){var n=e.match.path;return l.a.createElement(E.d,null,l.a.createElement(E.b,{path:"".concat(n,"/:tabName"),render:function(){return l.a.createElement(Z,null)}}),l.a.createElement(E.a,{from:n,exact:!0,to:"".concat(n,"/").concat(L.CATEGORIES)}),l.a.createElement(E.b,{path:"".concat(n,"/categories"),exact:!0,component:J}),l.a.createElement(E.b,{path:"".concat(n,"/brands"),exact:!0,component:W}))}));function ne(){var e=Object(b.a)(["\n  height: 90%;\n  width: 100%;\n  overflow-y: scroll;\n  -ms-overflow-style: none;  /* IE and Edge */\n  scrollbar-width: none;  /* Firefox */\n\n  ::-webkit-scrollbar { /* Chrome, Safari and Opera */\n    display: none;\n  }\n"]);return ne=function(){return e},e}function te(){var e=Object(b.a)(["\n  background-color: ",";\n  height: 100%;\n  width: 100%;\n"]);return te=function(){return e},e}var re,ae=v.b.div(te(),(function(e){return e.theme.background.pageBackground})),ce=v.b.div(ne()),oe=function(){return l.a.createElement(ae,null,l.a.createElement(ce,null,l.a.createElement(E.d,null,l.a.createElement(E.b,{path:"/items",component:ee}),l.a.createElement(E.b,{exact:!0,path:"/"},l.a.createElement(E.a,{to:"/items"})),l.a.createElement(E.b,{exact:!0,path:"/search",component:B}),l.a.createElement(E.b,{exact:!0,path:"/order",component:k}),l.a.createElement(E.b,{exact:!0,path:"/profile",component:N}))),l.a.createElement(C,null))};!function(e){e.INCREASE_COUNT="INCREASE_COUNT",e.DECREASE_COUNT="DECREASE_COUNT",e.RECEIVE_COUNT="RECEIVE_COUNT"}(re||(re={}));var ie,ue={count:0},le=(ie=re,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case ie.RECEIVE_COUNT:switch(n.payload.op){case"add":return{count:e.count+n.payload.count};case"sub":default:return{count:e.count-n.payload.count}}case ie.INCREASE_COUNT:case ie.DECREASE_COUNT:default:return e}}),se=Object(p.c)({count:le});function de(e){return{type:re.RECEIVE_COUNT,payload:e}}var me=i.a.mark(be),pe=i.a.mark(ve),fe=i.a.mark(Ee),he=i.a.mark(ge);function be(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(h.c)(de({count:e.payload,op:"add"}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),me,null,[[0,5]])}function ve(e){return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(h.c)(de({count:e.payload,op:"sub"}));case 3:n.next=8;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0);case 8:case"end":return n.stop()}}),pe,null,[[0,5]])}function Ee(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.d)(re.INCREASE_COUNT,be);case 2:return e.next=4,Object(h.d)(re.DECREASE_COUNT,ve);case 4:case"end":return e.stop()}}),fe)}function ge(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(Ee)]);case 2:case"end":return e.stop()}}),he)}var xe=t(38),Oe={body:"#FBFBFB",primary:"#446688",secondary:"#E0E0E0",secondaryLight:"#F0F0F0",grey:"#D0D0D0"},ye={colors:Oe,background:{pageBackground:Oe.body},menu:{text:Oe.primary,border:Oe.grey,optionBackground:Oe.secondaryLight,activeOptionBackground:Oe.secondary}};function we(e){return je.apply(this,arguments)}function je(){return(je=Object(c.a)(i.a.mark((function e(n){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(293)("./".concat(n,".json"));case 2:return r=e.sent,e.abrupt("return",r.default);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){var e=Object(c.a)(i.a.mark((function e(n,t){var r,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(s.c)(),e.next=3,we(n);case 3:return a=e.sent,c=Object(d.a)({locale:n,messages:a,defaultLocale:"bn"},r),e.abrupt("return",l.a.createElement(d.b,c,l.a.createElement(m.a,{store:t},l.a.createElement(v.a,{theme:ye},l.a.createElement(xe.a,null,l.a.createElement(oe,null))))));case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}})()("en",function(){var e=i.a.mark(n);function n(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(ge)]);case 2:case"end":return e.stop()}}),e)}var t=Object(f.a)(),r=Object(p.e)(se,Object(p.a)(t));return t.run(n),r}()).then((function(e){a.a.render(e,document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[157,1,2]]]);
//# sourceMappingURL=main.0babfc52.chunk.js.map