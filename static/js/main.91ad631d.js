(()=>{"use strict";var e={1698:(e,t,n)=>{n.r(t);var r=n(5629),o=n(5861),i=n(885),u=n(9526),a=n(3292),f=n(7370),c=n(5519),l=n(4942),d=n(8859),s=n(7132),p=n(1223),g=n(2030),h=n(3137);const x="@selectedMenu",y="@toDos";var b,v,j,m,O,w,k,P,T,S,D,z,E,I,N,_=n(1880),V=(0,f.css)(b||(b=(0,_.default)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.text})),W=f.default.Text(v||(v=(0,_.default)(["\n  ","\n"])),V),C=14,M=12,R=50,B=f.default.TouchableOpacity(j||(j=(0,_.default)(["\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 5px;\n"]))),H=(f.default.View(m||(m=(0,_.default)([""]))),f.default.TextInput.attrs((function(e){return{paddingVertical:10,paddingHorizontal:20,marginVertical:20}}))(O||(O=(0,_.default)(["\n  background-color: ",";\n  border-radius: 30px;\n  font-size: ","px;\n  /* for RNW */\n  padding: 5px 20px;\n  margin: 20px 0;\n"])),(function(e){return e.theme.colors.textInputBackground}),15)),A=f.default.ScrollView(w||(w=(0,_.default)([""]))),F=f.default.View.attrs((function(e){return{paddingLeft:10,paddingRight:15}}))(k||(k=(0,_.default)(["\n  min-height: ","px;\n  margin-bottom: 10px;\n  background-color: ",";\n  border-radius: 15px;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n  /* for RNW */\n  padding: 0 15px 0 10px;\n"])),R,(function(e){return e.theme.colors.deepGray})),G=f.default.View(P||(P=(0,_.default)(["\n  flex: 1;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: ","px;\n  margin-right: ","px;\n"])),M,M),J=f.default.TextInput.attrs((function(e){return{paddingHorizontal:10}}))(T||(T=(0,_.default)(["\n  flex: 1;\n  font-size: ","px;\n  background-color: ",";\n  border-radius: 12px;\n  /* for RNW */\n  padding: 0 10px;\n"])),C,(function(e){return e.theme.colors.textInputBackground})),K=(0,f.default)(B)(S||(S=(0,_.default)([""]))),L=(0,f.default)(B)(D||(D=(0,_.default)(["\n  flex: 1;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 7px;\n  margin-right: ","px;\n"])),M),q=(0,f.default)(W)(z||(z=(0,_.default)(["\n  font-size: ","px;\n  font-weight: 500;\n  ","\n"])),C,(function(e){return e.finished&&(0,f.css)(E||(E=(0,_.default)(["\n    color: ",";\n    text-decoration: ",";\n  "])),(function(e){return e.theme.colors.gray}),(function(e){return e.finished?"line-through":"none"}))})),Q=f.default.View(I||(I=(0,_.default)(["\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  gap: ","px;\n"])),M),U=(0,f.default)(B)(N||(N=(0,_.default)([""]))),X=n(7557);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const $=function(e){var t=e.data.working,n=(0,u.useState)(""),r=(0,i.default)(n,2),a=r[0],x=r[1],b=(0,u.useState)({}),v=(0,i.default)(b,2),j=v[0],m=v[1],O=(0,f.useTheme)();(0,u.useEffect)((function(){P()}),[]);var w=(0,u.useCallback)((0,o.default)((function*(){if(""!==a){var e=Z(Z({},j),{},(0,l.default)({},Date.now(),{text:a,work:t,finished:!1,editing:!1}));m(e),yield k(e),x("")}})),[a,j,t]),k=function(){var e=(0,o.default)((function*(e){yield c.default.setItem(y,JSON.stringify(e))}));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=(0,o.default)((function*(){var e=yield c.default.getItem(y);if(e)try{m(JSON.parse(e)||{})}catch(t){console.log(t)}}));return function(){return e.apply(this,arguments)}}(),T=function(){var e=(0,o.default)((function*(e){var t=Z(Z({},j),{},(0,l.default)({},e,Z(Z({},j[e]),{},{finished:!j[e].finished})));m(t),yield k(t)}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=(0,o.default)((function*(e){var t=Z(Z({},j),{},(0,l.default)({},e,Z(Z({},j[e]),{},{editing:!0,editText:j[e].text})));m(t)}));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=(0,o.default)((function*(e){var t=Z(Z({},j),{},(0,l.default)({},e,Z(Z({},j[e]),{},{text:j[e].editText,editing:!1})));m(t),yield k(t)}));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=(0,o.default)((function*(e){if("web"===s.default.OS){if(confirm("Do you want to delete this To Do?")){var t=Z({},j);delete t[e],m(t),yield k(t)}}else d.default.alert("Delete To Do?","Are you sure?",[{text:"Cancel"},{text:"Delete",style:"destructive",onPress:function(){var t=(0,o.default)((function*(){var t=Z({},j);delete t[e],m(t),yield k(t)}));return function(){return t.apply(this,arguments)}}()}])}));return function(t){return e.apply(this,arguments)}}();return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(H,{placeholder:t?"Add a To Do":"Where do you want to go?",returnKeyType:"done",onChangeText:function(e){return x(e)},value:a,onSubmitEditing:w}),(0,X.jsx)(A,{children:Object.keys(j).map((function(e){var n=j[e];return n.work===t?(0,X.jsxs)(F,{editing:n.editing,children:[n.editing?(0,X.jsxs)(G,{children:[(0,X.jsx)(J,{value:n.editText,onChangeText:function(t){return function(e,t){var n=Z(Z({},j),{},(0,l.default)({},e,Z(Z({},j[e]),{},{editText:t})));m(n)}(e,t)},onSubmitEditing:function(){return D(e)}}),(0,X.jsx)(K,{hitSlop:1.5,onPress:function(){return function(e){var t=Z(Z({},j),{},(0,l.default)({},e,Z(Z({},j[e]),{},{editing:!1})));m(t)}(e)},children:(0,X.jsx)(p.default,{name:"close",size:15,color:O.colors.gray})})]}):(0,X.jsxs)(L,{onPress:function(){return T(e)},children:[n.finished?(0,X.jsx)(g.default,{name:"check",size:12,color:O.colors.success}):(0,X.jsx)(g.default,{name:"check",size:10,color:O.colors.gray}),(0,X.jsx)(q,{finished:n.finished,children:n.text})]}),(0,X.jsxs)(Q,{children:[n.editing?null:(0,X.jsx)(U,{onPress:function(){return S(e)},children:(0,X.jsx)(h.default,{name:"edit",size:15,color:O.colors.gray})}),(0,X.jsx)(U,{onPress:function(){return z(e)},children:(0,X.jsx)(g.default,{name:"trash",size:15,color:O.colors.gray})})]})]},e):null}))})]})};function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne={mode:"light",colors:{primary:"#007bff",secondary:"#6c757d",success:"#28a745",danger:"#dc3545",warning:"#ffc107",info:"#17a2b8",light:"#f8f9fa",gray:"#6c757d",deepGray:"#212529",background:"#000",text:"#fff",textInputBackground:"#fff"}};const re=ne;var oe={mode:"dark",colors:te(te({},ne.colors),{},{text:"#fff",background:"#6c757d"})};const ie="work",ue="travel";var ae,fe,ce,le,de=f.default.View.attrs((function(e){return{paddingHorizontal:20}}))(ae||(ae=(0,_.default)(["\n  flex: 1;\n  background-color: ",";\n  /* for RNW */\n  padding: 0 20px;\n"])),(function(e){return e.theme.colors.background})),se=f.default.View(fe||(fe=(0,_.default)(["\n  justify-content: space-between;\n  flex-direction: row;\n  margin-top: 50px;\n"]))),pe=f.default.TouchableOpacity(ce||(ce=(0,_.default)([""]))),ge=f.default.Text(le||(le=(0,_.default)(["\n  color: ",";\n  font-size: 24px;\n  font-weight: 600;\n"])),(function(e){return"Work"===e.navName?e.working?e.theme.colors.text:e.theme.colors.gray:e.working?e.theme.colors.gray:e.theme.colors.text}));(0,r.default)((function(){var e=(0,u.useState)(!1),t=(0,i.default)(e,1)[0],n=(0,u.useState)(!0),r=(0,i.default)(n,2),l=r[0],d=r[1],s=function(){d(!1),c.default.setItem(x,ue)},p=function(){d(!0),c.default.setItem(x,ie)};(0,u.useEffect)((function(){var e=function(){var e=(0,o.default)((function*(){var e=yield c.default.getItem(x);e&&e!==ie?s():p()}));return function(){return e.apply(this,arguments)}}();e()}),[]);var g={working:l};return(0,X.jsx)(f.ThemeProvider,{theme:t?oe:re,children:(0,X.jsxs)(de,{children:[(0,X.jsx)(a.default,{style:"auto"}),(0,X.jsxs)(se,{children:[(0,X.jsx)(pe,{onPress:function(){return p()},children:(0,X.jsx)(ge,{navName:"Work",working:l,children:"Work"})}),(0,X.jsx)(pe,{onPress:function(){return s()},children:(0,X.jsx)(ge,{navName:"Travel",working:l,children:"Travel"})})]}),(0,X.jsx)($,{data:g})]})})}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,i)=>{if(!r){var u=1/0;for(l=0;l<e.length;l++){for(var[r,o,i]=e[l],a=!0,f=0;f<r.length;f++)(!1&i||u>=i)&&Object.keys(n.O).every((e=>n.O[e](r[f])))?r.splice(f--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var u={};e=e||[null,t({}),t([]),t(t)];for(var a=2&o&&r;"object"==typeof a&&!~e.indexOf(a);a=t(a))Object.getOwnPropertyNames(a).forEach((e=>u[e]=()=>r[e]));return u.default=()=>r,n.d(i,u),i}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,i,[u,a,f]=r,c=0;if(u.some((t=>0!==e[t]))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(f)var l=f(n)}for(t&&t(r);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0;var r=n.O(void 0,[916],(()=>n(1698)));r=n.O(r)})();
//# sourceMappingURL=main.91ad631d.js.map