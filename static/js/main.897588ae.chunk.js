(this["webpackJsonpreact-recipe-finder-app"]=this["webpackJsonpreact-recipe-finder-app"]||[]).push([[0],{52:function(e,n,t){},77:function(e,n,t){"use strict";t.r(n);var c,i,r,a,o,s,d,l,p,j,b,x,h,u,g,O=t(0),f=t.n(O),w=t(11),m=t.n(w),v=(t(52),t(27)),y=t.n(v),k=t(41),C=t(13),S=t(6),F=t(42),I=t.n(F),z=t(7),T=t(104),R=t(102),B=t(105),J=t(103),L=t(3),M=z.a.div(c||(c=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  width: 300px;\n  box-shadow: 0 3px 10px 0 #aaa;\n"]))),P=z.a.img(i||(i=Object(S.a)(["\n  object-fit: cover;\n  height: 200px;\n"]))),_=z.a.span(r||(r=Object(S.a)(["\n  font-size: 18px;\n  font-weight: 600;\n  color: black;\n  margin: 10px 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n"]))),q=z.a.span(a||(a=Object(S.a)(["\n  color: #eb3300;\n  font-size: 18px;\n  text-align: center;\n  border: solid 1px #eb3300;\n  border-radius: 3px;\n  padding: 10px 15px;\n  cursor: pointer;\n"]))),D=Object(z.a)(q)(o||(o=Object(S.a)(["\n  color: green;\n  border: solid 1px green;\n  margin-bottom: 12px;\n"]))),E=Object(z.a)(q)(s||(s=Object(S.a)(["\n  color: green;\n  border: solid 1px green;\n"]))),N=function(e){var n=Object(O.useState)(""),t=Object(C.a)(n,2),c=t[0],i=t[1],r=e.recipe,a=r.label,o=r.image,s=r.ingredients,d=r.url;return Object(L.jsxs)(M,{children:[Object(L.jsxs)(T.a,{onClose:function(){return console.log("adsadad")},"aria-labelledby":"simple-dialog-title",open:!!c,children:[Object(L.jsx)(B.a,{children:"Ingredients"}),Object(L.jsxs)(R.a,{children:[Object(L.jsx)(_,{children:a}),Object(L.jsxs)("table",{children:[Object(L.jsxs)("thead",{children:[Object(L.jsx)("th",{children:"Ingredient"}),Object(L.jsx)("th",{children:"Weight"})]}),Object(L.jsx)("tbody",{children:s.map((function(e,n){return Object(L.jsxs)("tr",{className:"ingredient-list",children:[Object(L.jsx)("td",{children:e.text}),Object(L.jsx)("td",{children:e.weight})]},n)}))})]})]}),Object(L.jsxs)(J.a,{children:[Object(L.jsx)(E,{onClick:function(){return window.open(d)},children:"See More"}),Object(L.jsx)(q,{onClick:function(){return i("")},children:"Close"})]})]}),Object(L.jsx)(P,{src:o,alt:a}),Object(L.jsx)(_,{children:a}),Object(L.jsx)(D,{onClick:function(){return i(!c)},children:"Ingredients"}),Object(L.jsx)(q,{onClick:function(){return window.open(d)},children:"See Complete Recipe"})]})},W=z.a.div(d||(d=Object(S.a)(["\n  display: flex;\n  flex-direction: column;\n"]))),A=z.a.div(l||(l=Object(S.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"]))),G=z.a.div(p||(p=Object(S.a)(["\n  background-color: black;\n  color: white;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row;\n  align-items: center;\n  padding: 20px;\n  font-size: 25px;\n  font-weight: bold;\n  box-shadow: 0 3px 6px 0 #555;\n"]))),H=z.a.div(j||(j=Object(S.a)(["\n  display: flex;\n  flex-direction: row;\n  padding: 10px 10px;\n  border-radius: 6px;\n  margin-left: 20px;\n  width: 50%;\n  background-color: white;\n"]))),K=z.a.img(b||(b=Object(S.a)(["\n  width: 32px;\n  height: 32px;\n"]))),Q=z.a.img(x||(x=Object(S.a)(["\n  width: 36px;\n  height: 36px;\n  margin: 15px;\n"]))),U=z.a.img(h||(h=Object(S.a)(["\n  width: 120px;\n  height: 120px;\n  margin: 200px;\n  opacity: 50%;\n"]))),V=z.a.input(u||(u=Object(S.a)(["\n  color: black;\n  font-size: 16px;\n  font-weight: bold;\n  border: none;\n  outline: none;\n  margin-left: 15px;\n"]))),X=z.a.div(g||(g=Object(S.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  padding: 30px;\n  gap: 20px;\n  justify-content: space-evenly;\n"]))),Y=function(){var e=Object(O.useState)(""),n=Object(C.a)(e,2),t=n[0],c=n[1],i=Object(O.useState)([]),r=Object(C.a)(i,2),a=r[0],o=r[1],s=Object(O.useState)(),d=Object(C.a)(s,2),l=d[0],p=d[1],j=function(){var e=Object(k.a)(y.a.mark((function e(n){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.a.get("https://api.edamam.com/search?q=".concat(n,"&app_id=").concat("e6d2298d","&app_key=").concat("53bf8c56caacb2f65ed45183a919b7ea\t"));case 2:t=e.sent,o(t.data.hits);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(L.jsxs)(W,{children:[Object(L.jsxs)(G,{children:[Object(L.jsxs)(A,{children:[Object(L.jsx)(Q,{src:"hamburger.svg"}),"Recipe Finder"]}),Object(L.jsxs)(H,{children:[Object(L.jsx)(K,{src:"search-icon.svg"}),Object(L.jsx)(V,{placeholder:"Search Recipe",value:t,onChange:function(e){clearTimeout(l),c(e.target.value);var n=setTimeout((function(){return j(e.target.value)}),1e3);p(n)}})]})]}),Object(L.jsx)(X,{children:(null===a||void 0===a?void 0:a.length)?a.map((function(e,n){return Object(L.jsx)(N,{recipe:e.recipe},n)})):Object(L.jsx)(U,{src:"hamburger.svg"})})]})},Z=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,107)).then((function(n){var t=n.getCLS,c=n.getFID,i=n.getFCP,r=n.getLCP,a=n.getTTFB;t(e),c(e),i(e),r(e),a(e)}))};m.a.render(Object(L.jsx)(f.a.StrictMode,{children:Object(L.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[77,1,2]]]);
//# sourceMappingURL=main.897588ae.chunk.js.map