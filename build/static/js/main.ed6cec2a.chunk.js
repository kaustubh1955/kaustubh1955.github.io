(this["webpackJsonpkaustubh-website"]=this["webpackJsonpkaustubh-website"]||[]).push([[0],{20:function(e,t,n){"use strict";var c=n(1),i=n(16),a=n(3),l=n(12),s=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),r=s.NODE_ENV,b=s.REACT_APP_GA_TRACKING_ID;"production"===r&&l.a.initialize(b);var j=function(){var e=Object(a.f)().pathname;return Object(c.useEffect)((function(){"production"===r&&(l.a.set({page:e}),l.a.pageview(e))}),[e]),null},u=n(5),o=n(21),h=[{index:!0,label:"Kaustubh Dwivedi",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Contact",path:"/contact"}],d=n(0),O=Object(c.lazy)((function(){return n.e(3).then(n.t.bind(null,59,7))})),x=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),n=t[0],i=t[1];return Object(d.jsxs)("div",{className:"hamburger-container",children:[Object(d.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(d.jsx)("ul",{children:n?Object(d.jsx)("li",{className:"menu close-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2715"})}):Object(d.jsx)("li",{className:"menu open-menu",children:Object(d.jsx)("div",{onClick:function(){return i(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(d.jsx)(c.Suspense,{fallback:Object(d.jsx)(d.Fragment,{}),children:Object(d.jsx)(O,{right:!0,isOpen:n,children:Object(d.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:e.path,onClick:function(){return i(!n)},children:Object(d.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},m=function(){return Object(d.jsxs)("header",{id:"header",children:[Object(d.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(d.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(d.jsx)("nav",{className:"links",children:Object(d.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(d.jsx)(x,{})]})},p=function(){var e=Object(a.f)().pathname;return Object(c.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},f=n.p+"static/media/me.59875143.png",w=n(23),v=function(){return Object(d.jsxs)("section",{id:"sidebar",children:[Object(d.jsxs)("section",{id:"intro",children:[Object(d.jsx)(u.b,{to:"/",className:"logo",children:Object(d.jsx)("img",{src:f,alt:"photo"})}),Object(d.jsxs)("header",{children:[Object(d.jsx)("h2",{children:"Kaustubh Dwivedi"}),Object(d.jsx)("p",{children:Object(d.jsx)("a",{href:"mailto:kaustubh1955@gmail.com",children:"kaustubh1955@gmail.com"})})]})]}),Object(d.jsxs)("section",{className:"blurb",children:[Object(d.jsx)("h2",{children:"About"}),Object(d.jsxs)("p",{children:["Hi, I'm Kaustubh. I like building things. I am a student at"," ",Object(d.jsx)("a",{href:"https://www.bits-pilani.ac.in//",children:"BITS Pilani"}),". My major interestes lie in the domain of Software Development, Deep Learning and Blockchain technology, and I am always open to Learning new stuff. Previously, I have interned at"," ",Object(d.jsx)("a",{href:"https://flipkart.com",children:"Flipkart"}),","," ",Object(d.jsx)("a",{href:"https://newzera.com",children:"Newzera"}),", and"," ",Object(d.jsx)("a",{href:"https://www.helixtech.co/",children:"Helix Tech"}),"."]}),Object(d.jsx)("ul",{className:"actions",children:Object(d.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(d.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(d.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(d.jsxs)("section",{id:"footer",children:[Object(d.jsx)(w.a,{}),Object(d.jsxs)("p",{className:"copyright",children:["\xa9 Kaustubh Dwivedi ",Object(d.jsx)(u.b,{to:"/",children:"kaustubhdwivedi.com"}),"."]})]})]})},k=function(e){return Object(d.jsxs)(i.b,{children:[Object(d.jsx)(j,{}),Object(d.jsx)(p,{}),Object(d.jsxs)(i.a,{titleTemplate:"%s | Kaustubh Dwivedi",defaultTitle:"Kaustubh Dwivedi",defer:!1,children:[e.title&&Object(d.jsx)("title",{children:e.title}),Object(d.jsx)("meta",{name:"description",content:e.description})]}),Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)(m,{}),Object(d.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(d.jsx)(v,{})]})]})};k.defaultProps={children:null,fullPage:!1,title:null,description:"Kaustubh Dwivedi's personal website."};t.a=k},23:function(e,t,n){"use strict";n(1);var c=n(27),i=n(31),a=n(29),l=n(28),s=n(30),r=[{link:"https://github.com/kaustubh1955",label:"Github",icon:l.faGithub},{link:"https://www.facebook.com/kaustubh.dwivevdi.3",label:"Facebook",icon:a.faFacebookF},{link:"https://www.linkedin.com/in/kaustubh-dwivedi-29760919a/",label:"LinkedIn",icon:s.faLinkedinIn},{link:"https://angel.co/u/kaustubh-dwivedi",label:"Angel List",icon:i.faAngellist}],b=n(0);t.a=function(){return Object(b.jsx)("ul",{className:"icons",children:r.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:e.link,children:Object(b.jsx)(c.a,{icon:e.icon})})},e.label)}))})}},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(15),l=n(5),s=n(3),r=n(20),b=(n(44),n(0)),j=Object(c.lazy)((function(){return n.e(5).then(n.bind(null,56))})),u=Object(c.lazy)((function(){return n.e(7).then(n.bind(null,63))})),o=Object(c.lazy)((function(){return n.e(8).then(n.bind(null,57))})),h=Object(c.lazy)((function(){return n.e(9).then(n.bind(null,58))})),d=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,61))})),O=Object(c.lazy)((function(){return n.e(10).then(n.bind(null,60))})),x=Object(c.lazy)((function(){return Promise.all([n.e(4),n.e(11)]).then(n.bind(null,62))})),m=function(){return Object(b.jsx)(l.a,{basename:"",children:Object(b.jsx)(c.Suspense,{fallback:Object(b.jsx)(r.a,{}),children:Object(b.jsxs)(s.c,{children:[Object(b.jsx)(s.a,{exact:!0,path:"/",component:o}),Object(b.jsx)(s.a,{exact:!0,path:"/about",component:j}),Object(b.jsx)(s.a,{exact:!0,path:"/projects",component:d}),Object(b.jsx)(s.a,{path:"/stats",component:x}),Object(b.jsx)(s.a,{path:"/contact",component:u}),Object(b.jsx)(s.a,{path:"/resume",component:O}),Object(b.jsx)(s.a,{component:h,status:404})]})})})},p=function(){return Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(m,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(a.hydrate)(Object(b.jsx)(p,{}),f):Object(a.render)(Object(b.jsx)(p,{}),f)}},[[45,1,2]]]);
//# sourceMappingURL=main.ed6cec2a.chunk.js.map