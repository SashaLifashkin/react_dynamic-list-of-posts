(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(8),s=n.n(c),r=n(1),a=n.n(r),o=n(3),i=n(4),u=n(2),l=(n(15),n(16),"https://mate.academy/students-api"),d=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,c,s=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:{},e.next=3,fetch("".concat(l,"/").concat(t),n);case 3:if((c=e.sent).ok){e.next=6;break}throw new Error("Error of loading");case 6:return e.abrupt("return",c.json());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=(n(17),n(0)),b=function(e){var t=e.selectedUserId,n=e.selectedPostId,c=e.selectPostId,s=Object(u.useState)([]),r=Object(i.a)(s,2),l=r[0],b=r[1];Object(u.useEffect)((function(){Object(o.a)(a.a.mark((function e(){var n,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return e.next=3,d("/posts");case 3:return n=e.sent,b(n),e.abrupt("return");case 6:return e.next=8,d("/posts?userId=".concat(t));case 8:c=e.sent,b(c);case 10:case"end":return e.stop()}}),e)})))()}),[t]);return Object(j.jsxs)("div",{className:"PostsList",children:[Object(j.jsx)("h2",{children:"Posts:"}),l.length?Object(j.jsx)("ul",{className:"PostsList__list",children:l.map((function(e){return Object(j.jsxs)("li",{className:"PostsList__item",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("b",{children:"[User #".concat(e.userId,"]: ")}),e.title]}),Object(j.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return t=e.id,void c(n===t?0:t);var t},children:n===e.id?"Close":"Open"})]},e.id)}))}):Object(j.jsx)("h3",{children:"No posts yet"})]})},m=n(9),p=(n(19),function(e){var t=e.selectedPostId,n=e.addNewComment,c=Object(u.useState)(""),s=Object(i.a)(c,2),r=s[0],a=s[1],o=Object(u.useState)(""),l=Object(i.a)(o,2),d=l[0],b=l[1],m=Object(u.useState)(""),p=Object(i.a)(m,2),f=p[0],O=p[1];return Object(j.jsxs)("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),n({postId:t,name:r,email:d,body:f}),a(""),b(""),O("")},children:[Object(j.jsx)("div",{className:"form-field",children:Object(j.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:r,onChange:function(e){return a(e.target.value)}})}),Object(j.jsx)("div",{className:"form-field",children:Object(j.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:d,onChange:function(e){return b(e.target.value)}})}),Object(j.jsx)("div",{className:"form-field",children:Object(j.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:f,onChange:function(e){return O(e.target.value)}})}),Object(j.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),f=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){return d("/comments/".concat(e),{method:"DELETE"})},h=(n(20),function(e){var t=e.selectedPostId,n=Object(u.useState)(null),c=Object(i.a)(n,2),s=c[0],r=c[1],l=Object(u.useState)([]),b=Object(i.a)(l,2),h=b[0],x=b[1],v=Object(u.useState)(!0),_=Object(i.a)(v,2),N=_[0],w=_[1];Object(u.useEffect)((function(){Object(o.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/posts/".concat(t));case 2:n=e.sent,r(n);case 4:case"end":return e.stop()}}),e)})))(),Object(o.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/comments?postId=".concat(t));case 2:n=e.sent,x(n);case 4:case"end":return e.stop()}}),e)})))()}),[t]);var y=function(){var e=Object(o.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,x((function(e){return[].concat(Object(m.a)(e),[n])}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e=Object(o.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:x((function(e){return e.filter((function(e){return e.id!==t}))}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"PostDetails",children:[Object(j.jsx)("h2",{children:"Post details:"}),Object(j.jsx)("section",{className:"PostDetails__post",children:Object(j.jsx)("p",{children:null===s||void 0===s?void 0:s.body})}),Object(j.jsxs)("section",{className:"PostDetails__comments",children:[Object(j.jsx)("button",{type:"button",className:"button",onClick:function(){w(!N)},children:N?"Hide ".concat(h.length," comments"):"Show ".concat(h.length," comments")}),Object(j.jsx)("ul",{className:"PostDetails__list",children:N&&Object(j.jsx)(j.Fragment,{children:h.map((function(e){return Object(j.jsxs)("li",{className:"PostDetails__list-item",children:[Object(j.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return P(e.id)},children:"X"}),Object(j.jsx)("p",{children:e.body})]},e.id)}))})})]}),Object(j.jsx)("section",{children:Object(j.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(j.jsx)(p,{selectedPostId:t,addNewComment:y})})})]})}),x=function(){return d("/users")},v=function(){var e=Object(u.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(u.useState)(0),r=Object(i.a)(s,2),l=r[0],d=r[1],m=Object(u.useState)(0),p=Object(i.a)(m,2),f=p[0],O=p[1];Object(u.useEffect)((function(){Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))()}),[]),Object(u.useEffect)((function(){Object(o.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:t=e.sent,c(t);case 4:case"end":return e.stop()}}),e)})))()}),[]);return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"App__header",children:Object(j.jsxs)("label",{children:["Select a user: \xa0",Object(j.jsxs)("select",{className:"App__user-selector",onChange:function(e){d(+e.target.value)},children:[Object(j.jsx)("option",{value:"0",children:"All users"}),n.map((function(e){return Object(j.jsx)("option",{value:e.id,children:e.name},e.id)}))]})]})}),Object(j.jsxs)("main",{className:"App__main",children:[Object(j.jsx)("div",{className:"App__sidebar",children:Object(j.jsx)(b,{selectedUserId:l,selectedPostId:f,selectPostId:O})}),0!==f&&Object(j.jsx)("div",{className:"App__content",children:Object(j.jsx)(h,{selectedPostId:f})})]})]})};s.a.render(Object(j.jsx)(v,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.3aca586f.chunk.js.map