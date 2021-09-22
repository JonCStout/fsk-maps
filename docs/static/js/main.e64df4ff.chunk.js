(this["webpackJsonpurt-maps"]=this["webpackJsonpurt-maps"]||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),a=n(24),i=n.n(a),r=(n(73),n(12)),o=n(29),l=n(50),u=(n(80),n(122)),d=n(2);function j(e){var t=e.map,n=e.cb,c=t.screenShots,s="ss/".concat(t._id,"/"),a=t._id.replace(/_/g," ");return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"card",children:[Object(d.jsx)("button",{className:"bare-button-main",onClick:function(){return n(t,0)},children:Object(d.jsx)("img",{className:"main-ss",src:s+c[0],alt:"main screenshot"})}),Object(d.jsxs)("span",{children:[Object(d.jsx)("button",{className:"bare-button-sub bare-button-sub-left",onClick:function(){return n(t,1)},children:Object(d.jsx)("img",{className:"sub-ss",src:s+c[1],alt:"screenshot 2"})}),Object(d.jsx)("button",{className:"bare-button-sub bare-button-sub-right",onClick:function(){return n(t,2)},children:Object(d.jsx)("img",{className:"sub-ss",src:s+c[2],alt:"screenshot 3"})})]}),Object(d.jsxs)(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center",children:[Object(d.jsx)(u.a,{item:!0,xs:2,children:"\xa0"}),Object(d.jsx)(u.a,{item:!0,xs:8,children:Object(d.jsx)("h2",{id:"title",children:a})}),Object(d.jsx)(u.a,{item:!0,xs:2,children:c.length>3?Object(d.jsx)("button",{className:"more-button",onClick:function(){return n(t,3)},title:"more screenshots",children:"+more screenshots"}):null})]})]})})}var b=n(127),h=n(123);function O(e){var t=e.visibleTagsList,n=e.clickedTagsList,c=e.callBackFunc;return!t||t.length<0||!c?Object(d.jsx)("div",{children:"Making tags..."}):Object(d.jsx)("div",{style:{paddingLeft:".2rem"},children:t.map((function(e){var t=Object(r.a)(e,2),s=t[0],a=t[1],i=n&&!n.has(s);return Object(d.jsx)(b.a,{variant:i&&a>1?"outlined":"contained",color:i?"default":"primary",size:"small",onClick:function(){return c(s)},style:{marginRight:"5px",marginBottom:"5px",paddingBottom:"1px"},children:Object(d.jsxs)(h.a,{badgeContent:a,color:"primary",children:[s," \xa0"]})},s+"_button")}))})}n(86);var m=n(128),f=n(130),x=n(129);function g(e){var t=e.updateViewCB,n="IS connected",s=Object(c.useState)("is NOT connected"),a=Object(r.a)(s,2),i=a[0],u=a[1],b=Object(c.useRef)([]),g=Object(c.useRef)([]),p=Object(c.useState)([]),v=Object(r.a)(p,2),S=v[0],w=v[1],k=Object(c.useState)([]),y=Object(r.a)(k,2),N=y[0],C=y[1],T=Object(c.useState)(new Set),E=Object(r.a)(T,2),M=E[0],R=E[1],F=Object(c.useState)(""),_=Object(r.a)(F,2),B=_[0],A=_[1];function L(e,n){t(e,n)}return Object(c.useEffect)((function(){if(g.current.length<1){u("is connecting..."),b.current=new l.a({id:"urt-maps-realmapp-xjuqv"});try{b.current.logIn(l.b.anonymous()).then((function(e){e.functions.getAllMapData().then((function(e){g.current=e.result,R(new Set),u(n)}))}))}catch(e){console.error("Failed to log in to db",e),u("DB ERROR")}}}),[]),Object(c.useEffect)((function(){var e=[];!M||M.size<1?g&&g.current&&(e=g.current):e=g.current.filter((function(e){var t=!0;return M.forEach((function(n){t&=e.featureTags.includes(n)})),t?e:null})),e.sort((function(e,t){return e._id<t._id?-1:e._id>t._id?1:0})),w(e);var t=new Map;e.forEach((function(e){e.featureTags.forEach((function(e){var n=t.get(e);n?n+=1:n=1,t.set(e,n)}))})),C(Object(o.a)(t).sort((function(e,t){return e[0]>t[0]?1:e[0]<t[0]?-1:0})))}),[M]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)("h1",{children:Object(d.jsx)(h.a,{badgeContent:"db "+i+" | "+(S?S.length:"0")+(S&&1===S.length?" map visible":" maps visible"),color:i===n?"secondary":"error",children:"URT MAP FINDER"})})}),Object(d.jsx)("div",{id:"search-bar",children:Object(d.jsx)(m.a,{placeholder:"start typing map keywords here, separated by commas",id:"search-box",inputProps:{"aria-label":"naked"},startAdornment:Object(d.jsx)(f.a,{position:"start",children:Object(d.jsx)(x.a,{})}),value:B,onChange:function(e){A(e.target.value)},fullWidth:!0})}),Object(d.jsxs)("div",{style:{paddingLeft:".5em"},children:["Realtime test, showing your ",Object(d.jsx)("em",{children:"typed text or clicked tag:"}),"\xa0 ",B.toString()]}),Object(d.jsx)("h2",{style:{paddingLeft:"1rem"},children:Object(d.jsx)(h.a,{badgeContent:N.length+" visible",color:"secondary",children:"Map feature tags"})}),Object(d.jsx)(O,{visibleTagsList:N,clickedTagsList:M,callBackFunc:function(e){var t=new Set(M);t.has(e)?t.delete(e):t.add(e),R(t),A(Object(o.a)(t).toString())}}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{id:"card-list",children:S.length>0?S.map((function(e){return Object(d.jsx)(j,{map:e,cb:L},e._id)})):"loading maps..."})]})}var p=n(7),v=n(10),S=n(22),w=n(23),k=n(52),y=n.n(k),N=(n(102),n(103),n(126)),C=(n(104),function(e){Object(S.a)(n,e);var t=Object(w.a)(n);function n(e){var c;return Object(p.a)(this,n),(c=t.call(this,e)).state={nav1:null,nav2:null},c}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.setState({nav1:this.slider1,nav2:this.slider2})}},{key:"render",value:function(){var e=this,t=this.props,n=t.map,c=t.ssClicked;if(!n||void 0===c)return Object(d.jsx)("p",{children:"EMPTY PARAMETERS PASSED"});var s="ss/".concat(n._id,"/"),a=n.screenShots;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(N.a,{height:"75%",width:"80%",children:Object(d.jsx)(y.a,{className:"gentle-flex",asNavFor:this.state.nav2,ref:function(t){return e.slider1=t},variableWidth:!0,slidesToShow:1,initialSlide:c,slider:"img",infinite:!1,centerMode:!0,adaptiveHeight:!0,children:a.map((function(e,t){return Object(d.jsx)("img",{className:"detail-main-ss",src:s+e,alt:"screenshot "+(t+1)})}))})}),Object(d.jsxs)("section",{className:"detail-bottom-area",children:[Object(d.jsx)("div",{className:"detail-carousel-section",children:Object(d.jsx)(y.a,{asNavFor:this.state.nav1,ref:function(t){return e.slider2=t},variableWidth:!0,slidesToShow:1,swipeToSlide:!0,focusOnSelect:!0,arrows:!0,initialSlide:c,infinite:!1,children:a.map((function(e,t){return Object(d.jsx)("img",{className:"detail-sub-ss",src:s+e,alt:"thumbnail "+(t+1)})}))})}),Object(d.jsx)("section",{className:"detail-info-section",children:"Map details here..."})]})]})}}]),n}(c.Component)),T=n(124);function E(){var e=Object(c.useState)(1),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(),i=Object(r.a)(a,2),o=i[0],l=i[1],u=Object(c.useState)(),j=Object(r.a)(u,2),b=j[0],h=j[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(T.a,{}),1===n?Object(d.jsx)(g,{updateViewCB:function(e,t){l(e),h(t),s(2)}}):Object(d.jsx)(C,{map:o,ssClicked:b})]})}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,n){},80:function(e,t,n){},86:function(e,t,n){}},[[105,1,2]]]);
//# sourceMappingURL=main.e64df4ff.chunk.js.map