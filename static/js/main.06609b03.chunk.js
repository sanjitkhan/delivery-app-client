(this["webpackJsonpdelivery-app-client"]=this["webpackJsonpdelivery-app-client"]||[]).push([[0],{146:function(e,t,n){e.exports=n.p+"static/media/category_frozenfoods.0e9e97f3.jpg"},147:function(e,t,n){e.exports=n.p+"static/media/category_icecream.cad9b468.jpg"},148:function(e,t,n){e.exports=n.p+"static/media/category_confectionery.05dadc4d.jpg"},149:function(e,t,n){e.exports=n.p+"static/media/category_groceries.41b8cbc3.jpg"},167:function(e,t,n){e.exports=n(304)},172:function(e,t,n){},303:function(e,t,n){var r={"./bn.json":[306,3],"./en.json":[307,4]};function a(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],a=t[0];return n.e(t[1]).then((function(){return n.t(a,3)}))}a.keys=function(){return Object.keys(r)},a.id=303,e.exports=a},304:function(e,t,n){"use strict";n.r(t);var r=n(28),a=n.n(r);n(172),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(173);var i,c,o=n(96),u=n(6),s=n.n(u),l=n(0),d=n.n(l),m=n(19),p=n(314),f=n(22),E=n(30),b=n(156),h=n(5),v=n(17),g=n(15),A=n(16),x=n(155),O=n(45);function T(){var e=Object(v.a)(["\n  display: table-cell;\n  width: ","%;\n  color: ",";\n  padding: 2px;\n  vertical-align: middle;\n  ",";\n\n  &&&& i {\n    margin-right: 0;\n  }\n\n  label {\n    margin-top: 6px;\n    font-size: 0.9em;\n  }\n\n  .menu-item-content-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);return T=function(){return e},e}function F(){var e=Object(v.a)(["\n  position: fixed;\n  bottom: 0;\n  height: 10%;\n  width: 100%;\n  display: table;\n  padding: 2px;\n  border: 1px solid ",";\n  background-color: ",";\n"]);return F=function(){return e},e}!function(e){e.CATEGORIES="/categories",e.BRANDS="/brands"}(i||(i={})),function(e){e.ITEMS="/items",e.SEARCH="/search",e.ORDER="/order",e.PROFILE="/profile",e.PRODUCTS="/products"}(c||(c={}));var I,w,C,y=g.b.div(F(),(function(e){return e.theme.menu.border}),(function(e){return e.theme.menu.optionBackground})),R=g.b.div(T(),(function(e){return e.width}),(function(e){return e.theme.menu.text}),(function(e){return e.isActive&&"background-color: ".concat(e.theme.menu.activeOptionBackground)})),j=function(){var e=Object(l.useState)("items"),t=Object(x.a)(e,2),n=t[0],r=t[1],a=Object(A.g)(),i=[{value:"items",path:c.ITEMS,icon:"food",text:"Items"},{value:"search",path:c.SEARCH,icon:"search",text:"Search"},{value:"order",path:c.ORDER,icon:"shopping cart",text:"Order"},{value:"profile",path:c.PROFILE,icon:"user",text:"Profile"}];return d.a.createElement(y,null,i.map((function(e){return d.a.createElement(R,{key:e.value,width:100/i.length,isActive:n===e.value,onClick:function(){r(e.value),a.push(e.path)}},d.a.createElement("div",{className:"menu-item-content-container"},d.a.createElement(O.a,{name:e.icon,size:"large"}),d.a.createElement("label",null,e.text)))})))},D=function(){return d.a.createElement("div",null,"Page 3")},k=function(){return d.a.createElement("div",null,"Page 4")},L=function(){return d.a.createElement("div",null,"Page 2")},N=n(316),B=n(146),M=n.n(B),H=n(147),S=n.n(H),P=n(148),G=n.n(P),z=n(149),Z=n.n(z);!function(e){e.ICE_CREAM="Ice Cream",e.GROCERY="Grocery",e.CONFECTIONERY="Confectionery",e.FROZEN_FOOD="Frozen Food"}(I||(I={})),function(e){e.RIGHT="right",e.LEFT="left"}(w||(w={})),function(e){e.DARK="dark",e.LIGHT="light"}(C||(C={}));var U,Q={categories:[{id:I.ICE_CREAM,name:"Ice Cream",image:S.a,textPosition:w.RIGHT,backgroundTheme:C.DARK},{id:I.GROCERY,name:"Groceries",image:Z.a,textPosition:w.LEFT,backgroundTheme:C.LIGHT},{id:I.FROZEN_FOOD,name:"Frozen Foods",image:M.a,textPosition:w.RIGHT,backgroundTheme:C.DARK},{id:I.CONFECTIONERY,name:"Confectioneries",image:G.a,textPosition:w.LEFT,backgroundTheme:C.LIGHT}]};function W(e){return{type:U.ADD_FILTER,payload:e}}function V(){return{type:U.CLEAR_FILTERS}}function Y(){var e=Object(v.a)(["\n  width: ","%;\n  position: relative;\n  cursor: pointer;\n  height: 200px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  overflow: hidden;\n  img {\n    width: 100%;\n  }\n  > div {\n    position: absolute;\n    ",": 0;\n    padding: 20px;\n    font-weight: 500;\n    color: ",";\n  }\n  .name {\n    top: 0;\n    font-size: 26px;\n  }\n  .items {\n    bottom: 0;\n    font-size: 20px;\n  }\n"]);return Y=function(){return e},e}!function(e){e.ADD_FILTER="ADD_FILTER",e.DELETE_FILTER="DELETE_FILTER",e.CLEAR_FILTERS="CLEAR_FILTERS"}(U||(U={}));var X,K=g.b.div(Y(),(function(e){return e.width}),(function(e){return e.textPosition}),(function(e){return e.backgroundTheme===C.DARK?e.theme.content.pageBackground:e.theme.content.text})),J={addFilter:W,clearFilters:V},q=Object(A.h)(Object(f.b)(null,J)((function(e){var t=e.history,n=e.width,r=void 0===n?100:n,a=e.id,i=e.image,o=e.name,u=e.numItems,s=e.textPosition,l=void 0===s?w.LEFT:s,m=e.backgroundTheme,p=void 0===m?C.LIGHT:m,f=e.addFilter,E=e.clearFilters;return d.a.createElement(K,{width:r,textPosition:l,backgroundTheme:p,onClick:function(){E(),f({categories:[a]}),t.push(c.PRODUCTS)}},d.a.createElement("img",{alt:o+" image",src:i}),d.a.createElement("div",{className:"name"},o),d.a.createElement("div",{className:"items"},u," items"))})));function _(e){return{type:X.RECEIVE_CATEGORIES,payload:{categories:e}}}!function(e){e.ADD_CATEGORY="ADD_CATEGORY",e.DELETE_CATEGORY="DELETE_CATEGORY",e.FETCH_ALL_CATEGORIES="FETCH_ALL_CATEGORIES",e.RECEIVE_CATEGORIES="RECEIVE_CATEGORIES"}(X||(X={}));var $={addCategory:function(e){return{type:X.ADD_CATEGORY,payload:e}},fetchAllCategories:function(){return{type:X.FETCH_ALL_CATEGORIES}}},ee=Object(f.b)((function(e){return{categories:e.categories.categories}}),$)((function(e){var t=e.categories;return d.a.createElement("div",null,t.map((function(e){return d.a.createElement(q,Object.assign({key:e.id},e))})))}));function te(){var e=Object(v.a)(["\n  width: ","%;\n  border: 0.5px solid ",";\n  position: relative;\n  cursor: pointer;\n  padding: 20px 0px;\n  text-align: center;\n  align-content: center;\n  .image-container {\n    width: 70%;\n    position: relative;\n    left: 15%;\n    display: flex;\n    height: 65%;\n    img {\n      margin: auto;\n      width: 100%;\n    }\n  }\n  .name {\n    margin-top: 5px;\n    font-size: 110%;\n    font-weight: 700;\n  }\n  .items {\n    font-size: 80%;\n    font-weight: 400;\n  }\n  i {\n    position: absolute;\n    right: 15px;\n    bottom: 15px;\n    margin-right: 0;\n  }\n"]);return te=function(){return e},e}var ne,re=g.b.div(te(),(function(e){return e.width}),(function(e){return e.theme.content.border})),ae={addFilter:W,clearFilters:V},ie=Object(A.h)(Object(f.b)(null,ae)((function(e){var t=e.id,n=e.history,r=e.width,a=void 0===r?100:r,i=e.image,o=e.name,u=e.numItems,s=e.isFavourited,l=void 0!==s&&s,m=e.clearFilters,p=e.addFilter;return d.a.createElement(re,{width:a,onClick:function(){m(),p({brands:[t]}),n.push(c.PRODUCTS)}},d.a.createElement("div",{className:"image-container"},d.a.createElement("img",{alt:o+" image",src:i})),d.a.createElement("div",{className:"name"},o),d.a.createElement("div",{className:"items"},u," items"),d.a.createElement(O.a,{name:l?"heart":"heart outline",color:l?"red":"grey",size:"large",onClick:function(){}}))})));function ce(e){return{type:ne.RECEIVE_BRANDS,payload:{brands:e}}}function oe(){var e=Object(v.a)(["\n  display: flex;\n  flex-flow: wrap;\n"]);return oe=function(){return e},e}!function(e){e.ADD_BRAND="ADD_BRAND",e.DELETE_BRAND="DELETE_BRAND",e.FETCH_ALL_BRANDS="FETCH_ALL_BRANDS",e.RECEIVE_BRANDS="RECEIVE_BRANDS"}(ne||(ne={}));var ue=g.b.div(oe());var se={addBrand:function(e){return{type:ne.ADD_BRAND,payload:e}},fetchAllBrands:function(){return{type:ne.FETCH_ALL_BRANDS}}},le=Object(f.b)((function(e){return{brands:e.brands.brands}}),se)((function(e){var t=e.brands;e.addBrand,e.fetchAllBrands;return d.a.createElement(ue,null,t.map((function(e){return d.a.createElement(ie,Object.assign({key:e.id,width:50},e))})))}));function de(){var e=Object(v.a)(["\n  padding-top: 45px;\n"]);return de=function(){return e},e}function me(){var e=Object(v.a)(["\n  margin: 0 10px;\n  padding: 5px 5px;\n  border-bottom: 4px solid ",";\n  font-size: 110%;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n"]);return me=function(){return e},e}function pe(){var e=Object(v.a)(["\n  display: flex;\n  flex-direction: row; \n  vertical-align: middle;\n  height: 100%;\n"]);return pe=function(){return e},e}function fe(){var e=Object(v.a)(["\n  position: fixed;\n  width: 100%;\n  height: 45px;\n  z-index: 9;\n  align-items: center;\n  border: 0 !important;\n  border-bottom: 1px solid grey;\n  display: flex;\n  flex-direction: column;\n"]);return fe=function(){return e},e}var Ee=Object(g.b)(N.a)(fe()),be=g.b.div(pe()),he=g.b.div(me(),(function(e){return e.isActive?e.theme.colors.primary.normal:"transparent"})),ve=g.b.div(de()),ge=Object(A.h)((function(e){var t=e.history,n=e.match,r=n.url,a=n.params.tabName,i=[{value:"categories",path:"/categories",text:"Categories",render:d.a.createElement(ee,null)},{value:"brands",path:"/brands",text:"Brands",render:d.a.createElement(le,null)}];return d.a.createElement(d.a.Fragment,null,d.a.createElement(Ee,null,d.a.createElement(be,null,i.map((function(e){return d.a.createElement(he,{key:e.value,isActive:a===e.value,onClick:function(){t.push("".concat(function(e,t){return e.slice(0,e.lastIndexOf(t)-1)}(r,a)+e.path))}},e.text)})))),d.a.createElement(ve,null,d.a.createElement(Ae,null)))})),Ae=Object(A.h)((function(e){var t=e.match.path;return d.a.createElement(A.d,null,d.a.createElement(A.b,{path:"".concat(t,"/:tabName"),render:function(){return d.a.createElement(ge,null)}}),d.a.createElement(A.a,{from:c.ITEMS,exact:!0,to:c.ITEMS+i.CATEGORIES}),d.a.createElement(A.b,{path:c.ITEMS+i.CATEGORIES,exact:!0,component:ee}),d.a.createElement(A.b,{path:c.ITEMS+i.BRANDS,exact:!0,component:le}))})),xe=n(315),Oe=n(154);function Te(){var e=Object(v.a)(["\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n  border: 1px solid ",";\n  display: flex;\n  flex-direction: row;\n  .image-container {\n    width: 40%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    overflow: hidden;\n    > div {\n      position: relative;\n      top: 15px;\n      width: 80%;\n      height: 160px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      overflow: hidden;\n      box-shadow: 0 1px 4px ",", 0 0 4px ",";\n      border-radius: 4px;\n      img {\n        height: 100%;\n        width: auto;\n      }\n    }\n  }\n  .details-container {\n    width: 60%;\n    padding: 10px;\n    padding-left: 0;\n    position: relative;\n    i {\n      position: absolute;\n      top: 0;\n      right: 0;\n      margin: 20px;\n    }\n    .add-button-container {\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      margin: 0;\n      padding: 20px;\n      .label {\n        float: right;\n        font-size: 1.2rem;\n        padding: 0;\n        .detail {\n          padding: 10px 15px;\n          margin: 0;\n        }\n        .detail:nth-child(2n) {\n          font-size: 1rem;\n          border: 1px solid ",";\n        }\n        .detail:nth-child(2n+1) {\n          background-color: ",";\n          color: ",";\n        }\n      }\n      button {\n        background-color: ",";\n        color: ",";\n        font-weight: 100;\n      }\n    }\n    .name {\n      font-size: 120%;\n      padding-right: 40px;\n    }\n    .brand {\n      color: ",";\n      font-weight: 300;\n      font-size: 80%;\n    }\n    .stock {\n      color: ",";\n      font-size: 90%;\n      margin-top: 5px;\n    }\n    .price {\n      font-weight: 900;\n      margin-top: 10px;\n    }\n  }\n"]);return Te=function(){return e},e}var Fe=g.b.div(Te(),(function(e){return e.theme.content.border}),(function(e){return e.theme.content.border}),(function(e){return e.theme.content.border}),(function(e){return e.theme.colors.primary.normal}),(function(e){return e.theme.colors.primary.normal}),(function(e){return e.theme.colors.grey.white}),(function(e){return e.theme.colors.primary.normal}),(function(e){return e.theme.colors.grey.white}),(function(e){return e.theme.content.text.light}),(function(e){return e.theme.content.text.light})),Ie=function(e){var t=e.width,n=void 0===t?100:t,r=e.image,a=e.name,i=e.brand,c=e.stock,o=e.isFavourited,u=e.price;return d.a.createElement(Fe,{width:n},d.a.createElement("div",{className:"image-container"},d.a.createElement("div",null,d.a.createElement("img",{alt:a+" image",src:r}))),d.a.createElement("div",{className:"details-container"},d.a.createElement("div",{className:"brand"},i),d.a.createElement("div",{className:"name"},a),d.a.createElement("div",{className:"price"},"Rs. ",u),d.a.createElement(O.a,{name:o?"heart":"heart outline",color:o?"red":"grey",size:"large",onClick:function(){}}),d.a.createElement("div",{className:"add-button-container"},0===c?d.a.createElement(xe.a,null,"Add"):d.a.createElement(Oe.a,null,d.a.createElement(Oe.a.Detail,null,"-"),d.a.createElement(Oe.a.Detail,null,c),d.a.createElement(Oe.a.Detail,null,"+")))))};function we(){var e=Object(v.a)(["\n  display: flex;\n  flex-flow: wrap;\n"]);return we=function(){return e},e}var Ce=g.b.div(we());var ye={addFilter:W,deleteFilter:function(e){return{type:U.DELETE_FILTER,payload:e}},clearFilters:V},Re=Object(f.b)((function(e){var t=e.items,n=e.filters;return{items:t.items,filters:n.filters}}),ye)((function(e){var t=e.items,n=e.filters,r=(e.addFilter,e.deleteFilter,e.clearFilters,t.filter((function(e){var t=e.name,r=e.brand,a=e.price,i=e.categories;return!(n.priceFrom&&a<n.priceFrom)&&(!(n.priceTo&&a>n.priceTo)&&(!(n.brands&&!n.brands.includes(r))&&(!(n.name&&!t.trim().toLowerCase().includes(n.name.trim().toLowerCase()))&&!(n.categories&&!n.categories.some((function(e){return i.some((function(t){return t===e}))}))))))})));return d.a.createElement(Ce,null,r.map((function(e){return d.a.createElement(Ie,Object.assign({key:e.id,width:50},e))})))}));function je(){var e=Object(v.a)(["\n  height: 90%;\n  width: 100%;\n  overflow-y: scroll;\n  -ms-overflow-style: none;  /* IE and Edge */\n  scrollbar-width: none;  /* Firefox */\n\n  ::-webkit-scrollbar { /* Chrome, Safari and Opera */\n    display: none;\n  }\n"]);return je=function(){return e},e}function De(){var e=Object(v.a)(["\n  background-color: ",";\n  height: 100%;\n  width: 100%;\n"]);return De=function(){return e},e}var ke,Le=g.b.div(De(),(function(e){return e.theme.content.pageBackground})),Ne=g.b.div(je()),Be=function(){return d.a.createElement(Le,null,d.a.createElement(Ne,null,d.a.createElement(A.d,null,d.a.createElement(A.b,{path:c.ITEMS,component:Ae}),d.a.createElement(A.b,{exact:!0,path:"/"},d.a.createElement(A.a,{to:c.ITEMS})),d.a.createElement(A.b,{exact:!0,path:c.PRODUCTS,component:Re}),d.a.createElement(A.b,{exact:!0,path:c.SEARCH,component:L}),d.a.createElement(A.b,{exact:!0,path:c.ORDER,component:D}),d.a.createElement(A.b,{exact:!0,path:c.PROFILE,component:k}))),d.a.createElement(j,null))},Me=n(54),He=n.n(Me),Se=n(55),Pe=n.n(Se),Ge=n(43),ze=n.n(Ge),Ze=n(56),Ue=n.n(Ze);!function(e){e.MC_CAIN="McCain",e.BRITANNIA="Britannia",e.KWALITY_WALLS="Kwality walls",e.GODREJ="Godrej"}(ke||(ke={}));var Qe,We={brands:[{id:ke.KWALITY_WALLS,name:"Kwality Walls",image:He.a,numItems:3,isFavourited:!1},{id:ke.GODREJ,name:"Godrej",image:ze.a,numItems:8,isFavourited:!0},{id:ke.MC_CAIN,name:"McCain",image:Ue.a,numItems:5,isFavourited:!1},{id:ke.BRITANNIA,name:"Britannia",image:Pe.a,numItems:7,isFavourited:!1}]},Ve=(Qe=ne,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Qe.RECEIVE_BRANDS:return{brands:t.payload.brands};default:return e}}),Ye=n(41),Xe=function(e){return e.brands},Ke=s.a.mark(et),Je=s.a.mark(tt),qe=s.a.mark(nt),_e=s.a.mark(rt),$e=s.a.mark(at);function et(e){var t,n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.d)(Xe);case 3:return t=a.sent,n=t.brands,r={data:[].concat(Object(Ye.a)(n),[e.payload]),status:"",error:""},a.next=8,Object(h.c)(ce(r.data));case 8:a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}}),Ke,null,[[0,10]])}function tt(e){var t,n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.d)(Xe);case 3:return t=a.sent,n=t.brands,r={data:n.filter((function(t){return t.id!==e.payload})),status:"",error:""},a.next=8,Object(h.c)(ce(r.data));case 8:a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}}),Je,null,[[0,10]])}function nt(e){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.d)(Xe);case 3:return t=e.sent,n=t.brands,r={data:n,status:"",error:""},e.next=8,Object(h.c)(ce(r.data));case 8:e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),qe,null,[[0,10]])}function rt(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(ne.ADD_BRAND,et);case 2:return e.next=4,Object(h.e)(ne.DELETE_BRAND,tt);case 4:return e.next=6,Object(h.e)(ne.FETCH_ALL_BRANDS,nt);case 6:case"end":return e.stop()}}),_e)}function at(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(rt)]);case 2:case"end":return e.stop()}}),$e)}var it,ct=(it=X,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case it.RECEIVE_CATEGORIES:return{categories:t.payload.categories};default:return e}}),ot=function(e){return e.categories},ut=s.a.mark(pt),st=s.a.mark(ft),lt=s.a.mark(Et),dt=s.a.mark(bt),mt=s.a.mark(ht);function pt(e){var t,n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.d)(ot);case 3:return t=a.sent,n=t.categories,r={data:[].concat(Object(Ye.a)(n),[e.payload]),status:"",error:""},a.next=8,Object(h.c)(_(r.data));case 8:a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}}),ut,null,[[0,10]])}function ft(e){var t,n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.d)(ot);case 3:return t=a.sent,n=t.categories,r={data:n.filter((function(t){return t.id!==e.payload})),status:"",error:""},a.next=8,Object(h.c)(_(r.data));case 8:a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}}),st,null,[[0,10]])}function Et(e){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.d)(ot);case 3:return t=e.sent,n=t.categories,r={data:n,status:"",error:""},e.next=8,Object(h.c)(_(r.data));case 8:e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),lt,null,[[0,10]])}function bt(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(X.ADD_CATEGORY,pt);case 2:return e.next=4,Object(h.e)(X.DELETE_CATEGORY,ft);case 4:return e.next=6,Object(h.e)(X.FETCH_ALL_CATEGORIES,Et);case 6:case"end":return e.stop()}}),dt)}function ht(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(bt)]);case 2:case"end":return e.stop()}}),mt)}var vt,gt,At=n(104),xt={filters:{}},Ot=(vt=U,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case vt.ADD_FILTER:return{filters:Object(At.a)(Object(At.a)({},e.filters),t.payload)};case vt.DELETE_FILTER:return e.filters[t.payload]&&delete e.filters[t.payload],e;case vt.CLEAR_FILTERS:return xt;default:return e}}),Tt={items:[{id:"mccain-item1",image:Ue.a,name:"McCain item 1",brand:ke.MC_CAIN,categories:[I.FROZEN_FOOD],stock:5,price:100,isFavourited:!0},{id:"mccain-item2",image:Ue.a,name:"McCain item 2",brand:ke.MC_CAIN,categories:[I.FROZEN_FOOD],stock:15,price:150,isFavourited:!1},{id:"godrej-item1",image:ze.a,name:"Godrej item 1",brand:ke.GODREJ,categories:[I.FROZEN_FOOD],stock:3,price:200,isFavourited:!1},{id:"godrej-item2",image:ze.a,name:"Godrej item 2",brand:ke.GODREJ,categories:[I.FROZEN_FOOD],stock:32,price:250,isFavourited:!1},{id:"godrej-item3",image:ze.a,name:"Godrej item 3",brand:ke.GODREJ,categories:[I.GROCERY],stock:32,price:250,isFavourited:!1},{id:"kwalitywalls-item1",image:He.a,name:"Kwality Walls item 1",brand:ke.KWALITY_WALLS,categories:[I.ICE_CREAM],stock:12,price:50,isFavourited:!0},{id:"kwalitywalls-item2",image:He.a,name:"Kwality Walls item 2",brand:ke.KWALITY_WALLS,categories:[I.ICE_CREAM],stock:31,price:80,isFavourited:!1},{id:"britannia-item1",image:Pe.a,name:"Britannia item 1",brand:ke.BRITANNIA,categories:[I.CONFECTIONERY],stock:97,price:30,isFavourited:!1},{id:"britannia-item2",image:Pe.a,name:"Britannia item 2",brand:ke.BRITANNIA,categories:[I.CONFECTIONERY],stock:31,price:20,isFavourited:!0}]};!function(e){e.ADD_ITEM="ADD_ITEM",e.DELETE_ITEM="DELETE_ITEM",e.FETCH_ALL_ITEMS="FETCH_ALL_ITEMS",e.RECEIVE_ITEMS="RECEIVE_ITEMS"}(gt||(gt={}));var Ft,It=(Ft=gt,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Ft.RECEIVE_ITEMS:return{items:t.payload.items};default:return e}}),wt=Object(E.c)({items:It,categories:ct,brands:Ve,filters:Ot}),Ct=n(34),yt={body:"#FBFBFB",grey:{white:"#FFFFFF",15:"#F0F0F0",14:"#E0E0E0",13:"#D0D0D0",12:"#C0C0C0",11:"#B0B0B0",10:"#A0A0A0",9:"#909090",8:"#808080",7:"#707070",6:"#606060",5:"#505050",4:"#404040",3:"#303030",2:"#202020",1:"#101010",black:"#000000"},darkRed:"#8B0000",primary:{lighter:"#A9B3D4",light:"#7497BA",normal:"#446688"},secondary:{light:"#F0F0F0",normal:"#E0E0E0"}},Rt={colors:yt,content:{pageBackground:yt.body,text:{light:yt.grey[9],normal:yt.grey.black},border:yt.grey[13]},menu:{text:yt.primary.normal,border:yt.grey[13],optionBackground:yt.secondary.light,activeOptionBackground:yt.secondary.normal}};function jt(e){return{type:gt.RECEIVE_ITEMS,payload:{items:e}}}var Dt=function(e){return e.items},kt=s.a.mark(Ht),Lt=s.a.mark(St),Nt=s.a.mark(Pt),Bt=s.a.mark(Gt),Mt=s.a.mark(zt);function Ht(e){var t,n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.d)(Dt);case 3:return t=a.sent,n=t.items,r={data:[].concat(Object(Ye.a)(n),[e.payload]),status:"",error:""},a.next=8,Object(h.c)(jt(r.data));case 8:a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}}),kt,null,[[0,10]])}function St(e){var t,n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,Object(h.d)(Dt);case 3:return t=a.sent,n=t.items,r={data:n.filter((function(t){return t.id!==e.payload})),status:"",error:""},a.next=8,Object(h.c)(jt(r.data));case 8:a.next=12;break;case 10:a.prev=10,a.t0=a.catch(0);case 12:case"end":return a.stop()}}),Lt,null,[[0,10]])}function Pt(e){var t,n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(h.d)(Dt);case 3:return t=e.sent,n=t.items,r={data:n,status:"",error:""},e.next=8,Object(h.c)(jt(r.data));case 8:e.next=12;break;case 10:e.prev=10,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),Nt,null,[[0,10]])}function Gt(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.e)(gt.ADD_ITEM,Ht);case 2:return e.next=4,Object(h.e)(gt.DELETE_ITEM,St);case 4:return e.next=6,Object(h.e)(gt.FETCH_ALL_ITEMS,Pt);case 6:case"end":return e.stop()}}),Bt)}function zt(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(Gt)]);case 2:case"end":return e.stop()}}),Mt)}function Zt(e){return Ut.apply(this,arguments)}function Ut(){return(Ut=Object(o.a)(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(303)("./".concat(t,".json"));case 2:return r=e.sent,e.abrupt("return",r.default);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}(function(){var e=Object(o.a)(s.a.mark((function e(t,n){var r,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(m.c)(),e.next=3,Zt(t);case 3:return a=e.sent,i=Object(p.a)({locale:t,messages:a,defaultLocale:"bn"},r),e.abrupt("return",d.a.createElement(p.b,i,d.a.createElement(f.a,{store:n},d.a.createElement(g.a,{theme:Rt},d.a.createElement(Ct.a,null,d.a.createElement(Be,null))))));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}})()("en",function(){var e=s.a.mark(t);function t(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)([Object(h.b)(zt),Object(h.b)(at),Object(h.b)(ht)]);case 2:case"end":return e.stop()}}),e)}var n=Object(b.a)(),r=Object(E.e)(wt,Object(E.a)(n));return n.run(t),r}()).then((function(e){a.a.render(e,document.getElementById("root"))})),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},43:function(e,t){e.exports="data:image/png;base64,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"},54:function(e,t,n){e.exports=n.p+"static/media/brand_kwalitywalls.5fb410af.png"},55:function(e,t,n){e.exports=n.p+"static/media/brand_britannia.9170104b.png"},56:function(e,t,n){e.exports=n.p+"static/media/brand_mccain.8b146874.png"}},[[167,1,2]]]);
//# sourceMappingURL=main.06609b03.chunk.js.map