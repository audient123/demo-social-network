(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{127:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(39),a=n(5),s="SEND-MESSAGE",c={dialogs:[{id:1,name:"Petya"},{id:2,name:"Vasya"},{id:3,name:"Sasha"},{id:4,name:"Katya"},{id:5,name:"Dasha"}],messages:[{id:1,message:"Hi"},{id:2,message:"Hey"},{id:3,message:"Yo"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},i=function(e){return{type:s,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])});default:return e}}},134:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__3CsIX",selectedPage:"Users_selectedPage__2qP70"}},14:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(135),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"adaf9e0f-2ef7-49c4-8460-29ac4169f075"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please profileAPI object."),c.getProfile(e)}},c={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})}},i={me:function(){return a.get("auth/me",{withCredentials:!0})},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},170:function(e,t,n){},171:function(e,t,n){},20:function(e,t,n){e.exports={nav:"Navbar_nav__yRjq7",item:"Navbar_item__1MQlV",a:"Navbar_a__1w_KJ",activeLink:"Navbar_activeLink__IQ_tq"}},297:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),s=n.n(a),c=n(64),i=n.n(c),o=(n(170),n(34)),u=n(35),l=n(38),g=n(37),A=(n(171),n(20)),j=n.n(A),h=n(22),p=function(){return Object(r.jsxs)("nav",{className:j.a.nav,children:[Object(r.jsx)("div",{className:j.a.item,children:Object(r.jsx)(h.b,{to:"/profile",activeClassName:j.a.activeLink,children:"Profile "})}),Object(r.jsx)("div",{className:j.a.item,children:Object(r.jsx)(h.b,{to:"/dialogs",activeClassName:j.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{className:j.a.item,children:Object(r.jsx)(h.b,{to:"/users",activeClassName:j.a.activeLink,children:"Users"})}),Object(r.jsx)("div",{className:j.a.item,children:Object(r.jsx)("a",{children:"News"})}),Object(r.jsx)("div",{className:j.a.item,children:Object(r.jsx)("a",{children:"Music"})}),Object(r.jsx)("div",{className:j.a.item,children:Object(r.jsx)("a",{children:"Settings"})})]})},d=n(11),f=n(16),b=n(55),O=n(66),I=n(129),B=n(69),w=n.n(B),C=n(133),E=n.n(C),Q=function(e){for(var t=e.totalItemsCount,n=e.pageSize,s=e.currentPage,c=e.onPageChanged,i=e.portionSize,o=void 0===i?10:i,u=Math.ceil(t/n),l=[],g=1;g<=u;g++)l.push(g);var A=Math.ceil(u/o),j=Object(a.useState)(1),h=Object(I.a)(j,2),p=h[0],d=h[1],f=(p-1)*o+1,b=p*o;return Object(r.jsxs)("div",{classname:w.a.paginator,children:[p>1&&Object(r.jsx)("button",{onClick:function(){d(p-1)},children:"PREV"}),l.filter((function(e){return e>=f&&e<=b})).map((function(e){return Object(r.jsx)("span",{className:E()(Object(O.a)({},w.a.selectedPage,s===e),w.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),A>p&&Object(r.jsx)("button",{onClick:function(){d(p+1)},children:"NEXT"})]})},m=n(98),x=n(134),R=n.n(x),F=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,s=e.follow;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:Object(r.jsx)(h.b,{to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:m.a,className:R.a.userPhoto})})}),Object(r.jsx)("div",{children:t.followed?Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"Unfollow "}):Object(r.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:" Follow "})})]}),Object(r.jsxs)("span",{children:[Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:t.name}),Object(r.jsx)("div",{children:t.status})]}),Object(r.jsxs)("span",{children:[Object(r.jsx)("div",{children:"u.location.country"}),Object(r.jsx)("div",{children:"u.location.city"})]})]})]})},S=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,s=e.onPageChanged,c=e.users,i=Object(b.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return Object(r.jsxs)("div",{children:[Object(r.jsx)(Q,{currentPage:t,onPageChanged:s,totalItemsCount:n,pageSize:a}),Object(r.jsx)("div",{children:c.map((function(e){return Object(r.jsx)(F,{user:e,followingInProgress:i.followingInProgress,unfollow:i.unfollow,follow:i.follow},e.id)}))})]})},D=n(10),K=n.n(D),U=n(19),Y=n(39),G=n(5),y=n(14),J=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(G.a)(Object(G.a)({},e),r):e}))},k="FOLLOW",M="UNFOLLOW",v="SET_USERS",H="SET_CURRENT_PAGE",T="SET_TOTAL_USERS_COUNT",N="TOGGLE_IS_FETCHING",L="TOGGLE_IS_FOLLOWING_PROGRESS",P={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},V=function(e){return{type:k,userId:e}},Z=function(e){return{type:M,userId:e}},q=function(e){return{type:H,currentPage:e}},W=function(e){return{type:T,count:e}},z=function(e){return{type:N,isFetching:e}},X=function(e,t){return{type:L,isFetching:e,userId:t}},_=function(){var e=Object(U.a)(K.a.mark((function e(t,n,r,a){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(X(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(X(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(G.a)(Object(G.a)({},e),{},{users:J(e.users,t.userId,"id",{followed:!0})});case M:return Object(G.a)(Object(G.a)({},e),{},{users:J(e.users,t.userId,"id",{followed:!1})});case v:return Object(G.a)(Object(G.a)({},e),{},{users:t.users});case H:return Object(G.a)(Object(G.a)({},e),{},{currentPage:t.currentPage});case T:return Object(G.a)(Object(G.a)({},e),{},{totalUsersCount:t.count});case N:return Object(G.a)(Object(G.a)({},e),{},{isFetching:t.isFetching});case L:return Object(G.a)(Object(G.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(Y.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},ee=n(40),te=n(9),ne=n(136),re=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ae=function(e){return e.usersPage.pageSize},se=function(e){return e.usersPage.totalUsersCount},ce=function(e){return e.usersPage.currentPage},ie=function(e){return e.usersPage.isFetching},oe=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(l.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(r.jsxs)(r.Fragment,{children:[this.props.isFetching?Object(r.jsx)(ee.a,{}):null,Object(r.jsx)(S,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(s.a.Component),le=Object(te.d)(Object(f.b)((function(e){return{users:re(e),pageSize:ae(e),totalUsersCount:se(e),currentPage:ce(e),isFetching:ie(e),followingInProgress:oe(e)}}),{follow:function(e){return function(){var t=Object(U.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,y.c.follow.bind(y.c),V);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(U.a)(K.a.mark((function t(n){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,y.c.unfollow.bind(y.c),Z);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:q,setTotalUsersCount:W,toggleIsFollowingProgress:X,getUsers:function(e,t){return function(){var n=Object(U.a)(K.a.mark((function n(r){var a;return K.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(z(!0)),r(q(e)),n.next=4,y.c.getUsers(e,t);case 4:a=n.sent,r(z(!1)),r((s=a.items,{type:v,users:s})),r(W(a.totalCount));case 8:case"end":return n.stop()}var s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ue),ge=n(93),Ae=n.n(ge),je=function(e){return Object(r.jsxs)("header",{className:Ae.a.header,children:[Object(r.jsx)("img",{src:""}),Object(r.jsx)("div",{className:Ae.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[e.login," - ",Object(r.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(r.jsx)(h.b,{to:"/login",children:"Login"})})]})},he=n(44),pe="01-first-project/my-app/SET_USER_DATA",de={userId:null,email:null,login:null,isAuth:!1},fe=function(e,t,n,r){return{type:pe,payload:{userId:e,email:t,login:n,isAuth:r}}},be=function(){return function(){var e=Object(U.a)(K.a.mark((function e(t){var n,r,a,s,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,s=r.login,c=r.email,t(fe(a,c,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case pe:return Object(G.a)(Object(G.a)({},e),t.payload);default:return e}},Ie=function(e){Object(l.a)(n,e);var t=Object(g.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(je,Object(G.a)({},this.props))}}]),n}(s.a.Component),Be=Object(f.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(U.a)(K.a.mark((function e(t){return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.logout();case 2:0===e.sent.data.resultCode&&t(fe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ie),we=n(128),Ce=n(33),Ee=n(86),Qe=n(52),me=n.n(Qe),xe=Object(we.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)("div",{children:[Object(Ce.c)("Email","email",[Ee.b],Ce.a),Object(Ce.c)("Password","password",[Ee.b],Ce.a,{type:"password"}),Object(Ce.c)(null,"rememberMe",[],Ce.a,{type:"checkbox"},"remember me")]}),n&&Object(r.jsx)("div",{className:me.a.formSummaryError,children:n}),Object(r.jsx)("div",{children:Object(r.jsx)("button",{children:"Login"})})]})})),Re=Object(f.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(U.a)(K.a.mark((function r(a){var s,c;return K.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,y.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?a(be()):(c=s.data.messages.length>0?s.data.messages[0]:"Some error",a(Object(he.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(r.jsx)(d.a,{to:"/profile"}):Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Login"}),Object(r.jsx)(xe,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),Fe="INITIALIZED_SUCCESS",Se={initialized:!1},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Fe:return Object(G.a)(Object(G.a)({},e),{},{initialized:!0});default:return e}},Ke=n(127),Ue=n(96),Ye={},Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ye;return e},ye=n(139),Je=n(130),ke=Object(te.c)({profilePage:Ue.b,dialogsPage:Ke.a,sidebar:Ge,usersPage:$,auth:Oe,form:Je.a,app:De}),Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,ve=Object(te.e)(ke,Me(Object(te.a)(ye.a)));window.__store__=ve;var He=ve,Te=function(e){return function(t){return Object(r.jsx)(s.a.Suspense,{fallback:Object(r.jsx)(ee.a,{}),children:Object(r.jsx)(e,Object(G.a)({},t))})}},Ne=s.a.lazy((function(){return n.e(4).then(n.bind(null,304))})),Le=s.a.lazy((function(){return n.e(3).then(n.bind(null,303))})),Pe=function(e){Object(l.a)(n,e);var t=Object(g.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(Be,{}),Object(r.jsx)(p,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(d.b,{path:"/dialogs",render:Te(Ne)}),Object(r.jsx)(d.b,{path:"/profile/:userId?",render:Te(Le)}),Object(r.jsx)(d.b,{path:"/users",render:function(){return Object(r.jsx)(le,{})}}),Object(r.jsx)(d.b,{path:"/login",render:function(){return Object(r.jsx)(Re,{})}})]})]}):Object(r.jsx)(ee.a,{})}}]),n}(s.a.Component),Ve=Object(te.d)(d.f,Object(f.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(be());Promise.all([t]).then((function(){e({type:Fe})}))}}}))(Pe),Ze=function(e){return Object(r.jsx)(h.a,{children:Object(r.jsx)(f.a,{store:He,children:Object(r.jsx)(Ve,{})})})};i.a.render(Object(r.jsx)(Ze,{}),document.getElementById("root"))},33:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return A}));var r=n(5),a=n(55),s=n(1),c=(n(0),n(52)),i=n.n(c),o=n(89),u=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(s.jsxs)("div",{className:i.a.formControl+" "+(c?i.a.error:""),children:[Object(s.jsx)("div",{children:a}),c&&Object(s.jsx)("span",{children:r})]})},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(s.jsxs)(u,Object(r.a)(Object(r.a)({},e),{},{children:[Object(s.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))," "]}))},g=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return Object(s.jsxs)(u,Object(r.a)(Object(r.a)({},e),{},{children:[Object(s.jsx)("input",Object(r.a)(Object(r.a)({},t),n))," "]}))},A=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(s.jsxs)("div",{children:[Object(s.jsx)(o.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},c)),i]})}},40:function(e,t,n){"use strict";var r=n(1);n(0),t.a=function(e){return Object(r.jsx)("div",{style:{backgroundColor:"white"},children:Object(r.jsx)("img",{src:"data:image/gif;base64,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"})})}},52:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3_mxp",error:"FormsControls_error__zG18R",formSummaryError:"FormsControls_formSummaryError__3KjQY"}},69:function(e,t,n){e.exports={paginator:"Paginator_paginator__2WOpB",pageNumber:"Paginator_pageNumber__1Tcnt",selectedPage:"Paginator_selectedPage__2G37R"}},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},93:function(e,t,n){e.exports={header:"Header_header__3dE0a",loginBlock:"Header_loginBlock__vrwBl"}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return f})),n.d(t,"e",(function(){return b}));var r=n(10),a=n.n(r),s=n(19),c=n(39),i=n(5),o=n(14),u="ADD-POST",l="SET_USER_PROFILE",g="SET_STATUS",A="DELETE_POST",j={posts:[{id:1,message:"Hi, how are you?",likesCount:12},{id:2,message:"Hey",likesCount:13},{id:3,message:"Yoo",likesCount:14},{id:4,message:"Yyyyyo",likesCount:14}],profile:null,status:""},h=function(e){return{type:u,newPostText:e}},p=function(e){return{type:g,status:e}},d=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:l,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[n]),newPostText:""});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case g:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case A:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});default:return e}}},98:function(e,t,n){"use strict";t.a=n.p+"static/media/user.81251c2b.png"}},[[297,1,2]]]);
//# sourceMappingURL=main.0748962c.chunk.js.map