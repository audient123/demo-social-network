(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{298:function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));var n=s(5),o=s(1),c=s(34),r=s(35),i=s(38),a=s(37),u=s(0),p=s.n(u),j=s(11),b=s(16),l=function(t){return{isAuth:t.auth.isAuth}},d=function(t){var e=function(e){Object(i.a)(u,e);var s=Object(a.a)(u);function u(){return Object(c.a)(this,u),s.apply(this,arguments)}return Object(r.a)(u,[{key:"render",value:function(){return this.props.isAuth?Object(o.jsx)(t,Object(n.a)({},this.props)):Object(o.jsx)(j.a,{to:"/login"})}}]),u}(p.a.Component);return Object(b.b)(l)(e)}},299:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3ZasY"}},300:function(t,e,s){t.exports={postsBlock:"MyPosts_postsBlock__30Sh3",posts:"MyPosts_posts__3ZfH7"}},301:function(t,e,s){t.exports={item:"Post_item__2A4ZV"}},302:function(t,e,s){"use strict";s.r(e);var n=s(5),o=s(1),c=s(34),r=s(35),i=s(38),a=s(37),u=s(0),p=s.n(u),j=s(299),b=s.n(j),l=s(40),d=s(128),f=function(t){var e=Object(u.useState)(!1),s=Object(d.a)(e,2),n=s[0],c=s[1],r=Object(u.useState)(t.status),i=Object(d.a)(r,2),a=i[0],p=i[1];Object(u.useEffect)((function(){p(t.status)}),[t.status]);return Object(o.jsxs)("div",{children:[!n&&Object(o.jsx)("div",{children:Object(o.jsx)("span",{onDoubleClick:c,children:t.status||"-------"})}),n&&Object(o.jsx)("div",{children:Object(o.jsx)("input",{onChange:function(t){p(t.currentTarget.value)},autoFocus:!0,onBlur:function(){c(!1),t.updateStatus(a)},value:a})})]})},h=function(t){var e=t.profile,s=t.status,n=t.updateStatus;return e?Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:b.a.descriptionBlock,children:[Object(o.jsx)("img",{src:e.photos.large}),Object(o.jsx)(f,{status:s,updateStatus:n})]})}):Object(o.jsx)(l.a,{})},O=s(96),x=s(39),m=s(300),v=s.n(m),P=s(301),g=s.n(P),k=function(t){return Object(o.jsxs)("div",{className:g.a.item,children:[Object(o.jsx)("img",{src:""}),"Post ",t.message," like",t.likesCount]})},S=s(89),_=s(127),y=s(86),A=s(33),w=Object(y.a)(10),B=function(t){return Object(o.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(o.jsx)("div",{children:Object(o.jsx)(S.a,{name:"newPostText",component:A.b,placeholder:"Post message",validate:[y.b,w]})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{children:"Add post"})})]})};B=Object(_.a)({form:"ProfileAddNewPostForm"})(B);var C=p.a.memo((function(t){var e=Object(x.a)(t.posts).reverse().map((function(t){return Object(o.jsx)(k,{message:t.message,likesCount:t.likesCount})}));return Object(o.jsxs)("div",{className:v.a.postsBlock,children:[Object(o.jsx)("h3",{children:"My posts"}),Object(o.jsx)(B,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(o.jsx)("div",{className:v.a.posts,children:e})]})})),I=s(16),N=Object(I.b)((function(t){return{posts:t.profilePage.posts,newPostText:t.profilePage.newPostText}}),(function(t){return{addPost:function(e){t(Object(O.a)(e))}}}))(C),T=function(t){return Object(o.jsxs)("div",{children:[Object(o.jsx)(h,{profile:t.profile,status:t.status,updateStatus:t.updateStatus}),Object(o.jsx)(N,{})]})},M=s(11),U=(s(298),s(9)),Z=function(t){Object(i.a)(s,t);var e=Object(a.a)(s);function s(){return Object(c.a)(this,s),e.apply(this,arguments)}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var t=this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(t),this.props.getStatus(t)}},{key:"render",value:function(){return Object(o.jsx)(T,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),s}(p.a.Component);e.default=Object(U.d)(Object(I.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:O.d,getStatus:O.c,updateStatus:O.e}),M.f)(Z)}}]);
//# sourceMappingURL=3.574bd4f3.chunk.js.map