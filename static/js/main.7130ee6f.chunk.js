(this["webpackJsonploading-ui"]=this["webpackJsonploading-ui"]||[]).push([[0],{38:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){"use strict";n.r(e);var c=n(1),s=n(0),o=n.n(s),r=n(5),i=n.n(r),a=(n(38),n(23)),u=n(24),l=n(32),d=n(31),j=n(25),p=n(7),b=n(3),h=n(12),O=n.n(h),f="GET_POSTS",g="GET_USERS",v=function(){return function(t){O.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){t({type:f,payload:e.data})})).catch((function(t){console.log(t)}))}},y=function(){return function(t){O.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){t({type:g,payload:e.data})})).catch((function(t){console.log(t)}))}},m=n(6),x=n(27),P=n.n(x),T=n(28),A=n.n(T);n(65);function S(){var t=Object(j.a)(["\n  display: block;\n  border-color: #00401A;\n"]);return S=function(){return t},t}var C=Object(m.css)(S()),I=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;Promise.allSettled([setTimeout((function(){t.props.getPostsAPI()}),5e3),setTimeout((function(){t.props.getUsersAPI()}),3e3)])}},{key:"render",value:function(){var t=this.props,e=t.users,n=t.posts;return Object(c.jsxs)("div",{className:"loadingContainer",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Users"}),e&&e.map((function(t,e){return Object(c.jsx)("p",{children:t.name.toUpperCase()},e)})),!e.length&&Object(c.jsx)("div",{children:Object(c.jsx)(P.a,{css:C,size:15,color:"#00401A"})})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Posts"}),n&&n.slice(0,10).map((function(t,e){return Object(c.jsx)("p",{style:{textTransform:"capitalize"},children:t.title},e)})),!n.length&&Object(c.jsx)("div",{children:Object(c.jsx)(A.a,{css:C,size:15,color:"#00401A"})})]})]})}}]),n}(o.a.Component);var k=Object(p.b)((function(t){return{users:t.users,posts:t.posts}}),(function(t){return Object(b.bindActionCreators)({getPostsAPI:v,getUsersAPI:y},t)}))(I),U=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(e){var n=e.getCLS,c=e.getFID,s=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),s(t),o(t),r(t)}))},w=n(29),E=n(4),F={posts:[],users:[]},z=n(30),D=Object(b.createStore)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return Object(E.a)(Object(E.a)({},t),{},{users:e.payload});case f:return Object(E.a)(Object(E.a)({},t),{},{posts:e.payload});default:return t}}),Object(z.composeWithDevTools)(Object(b.applyMiddleware)(w.a)));i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(p.a,{store:D,children:Object(c.jsx)(k,{})})}),document.getElementById("root")),U()}},[[66,1,2]]]);
//# sourceMappingURL=main.7130ee6f.chunk.js.map