(this.webpackJsonpinspery=this.webpackJsonpinspery||[]).push([[13],{110:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(79),i=a.n(r),l=a(102),s=a(81),u=a(4),o=a(14),m=a.n(o),f=a(66),p=a(67);var b=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(1),b=Object(u.a)(o,2),j=b[0],O=b[1],d=Object(n.useState)(4),E=Object(u.a)(d,1)[0],h=Object(n.useState)([]),v=Object(u.a)(h,2),g=v[0],k=v[1],y=Object(n.useState)(0),N=Object(u.a)(y,2),S=N[0],w=N[1],x=Object(n.useState)([]),H=Object(u.a)(x,2),J=H[0],M=H[1],T=Math.ceil(S/E);Object(n.useEffect)((function(){m.a.get("http://18.192.205.152/api/rescategorys/",{crossDomain:!0},{withCredentials:!0}).then((function(e){k(e.data),w(e.data.length)}))}),[]),Object(n.useEffect)((function(){(function(){var e=Object(s.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(!0),a=(t=j*E)-E,n=g.slice(a,t),M((function(e){return[].concat(Object(l.a)(e),Object(l.a)(n))})),r(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[j,g,E]);var A=J.map((function(e){return c.a.createElement(p.a,{key:e.id,item:e,link:"/rescategory/".concat(e.name)})}));return c.a.createElement("div",null,c.a.createElement("section",null,c.a.createElement("div",{className:"container-fluid",onScroll:function(e){var t=e.currentTarget,a=t.scrollTop,n=t.clientHeight,c=t.scrollHeight;j+1>T||c-a===n&&O((function(e){return e+1}))}},c.a.createElement("h1",{className:"page-name"},"MAIN"),c.a.createElement(f.a,null,A),a&&c.a.createElement("h1",null,"Loading ..."))))};t.default=function(){return c.a.createElement(b,null)}},67:function(e,t,a){"use strict";var n=a(0),c=a.n(n),r=a(65),i=a(10);t.a=function(e){return c.a.createElement(r.a,{xs:"6",lg:"3",key:e.item.id,className:"res-container"},c.a.createElement(i.b,{to:e.link,className:"product-card"},c.a.createElement("img",{src:e.item.picture?e.item.picture:e.item.profile_pic,alt:"nofoto",className:"w-100"}),c.a.createElement("div",{className:"product-title"},c.a.createElement("p",null,e.item.name))))}}}]);
//# sourceMappingURL=13.84f5406a.chunk.js.map