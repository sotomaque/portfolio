(this["webpackJsonpportfolio-create-react-app"]=this["webpackJsonpportfolio-create-react-app"]||[]).push([[0],{41:function(e,n,t){e.exports=t(86)},46:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(32),c=t.n(l),o=(t(46),t(38)),i=t(11),u=t(10),m=t(12),s=t(2),d=t(3);function p(){var e=Object(s.a)(["\n  @media (max-width: 640px) {\n    display: none;\n  }\n"]);return p=function(){return e},e}var f=Object(d.a)(m.SideNav)(p()),E=[{name:"Me",path:"/"},{name:"Projects",path:"/projects"},{name:"Work",path:"/work"},{name:"Eduction",path:"/education"}],b=function(){var e=Object(u.f)();return r.a.createElement(f,{isFixedNav:!0,expanded:!0,isChildOfHeader:!1,"aria-label":"Side navigation"},r.a.createElement(m.SideNavItems,null,E.map((function(n){return r.a.createElement(m.SideNavLink,{isActive:"/"===e.pathname&&"/"===n.path||e.pathname===n.path,element:i.b,to:n.path,key:n.name},n.name)}))))},v=t(13);function h(){var e=Object(s.a)(["\n  display: flex;\n  text-decoration: none;\n  padding: 0.75rem 1.5rem;\n  font-weight: bold;\n  align-items: center;\n  margin-top: 1rem;\n  border: 2px solid #2ecc40;\n  background-color: rgba(46, 204, 64, 0.3);\n  transition: background-color 250ms ease;\n\n  &:hover {\n    background-color: #2ecc40;\n  }\n\n  svg {\n    fill: white;\n    margin-left: 8px;\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(s.a)(["\n  width: 200px;\n  margin-right: 1rem;\n  border-radius: 2px;\n"]);return g=function(){return e},e}function j(){var e=Object(s.a)(["\n  display: flex;\n\n  @media (max-width: 640px) {\n    flex-direction: column;\n  }\n"]);return j=function(){return e},e}function y(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n\n  @media (max-width: 640px) {\n    display: ",";\n    flex-direction: column;\n  }\n"]);return y=function(){return e},e}var k=d.a.div(y(),(function(e){return e.isHome?"flex":"none"})),O=d.a.div(j()),w=d.a.img(g()),x=d.a.a(h()),I=function(e){var n=e.user;Object(u.f)();return r.a.createElement(k,{isHome:!0},r.a.createElement(O,null,r.a.createElement(w,{src:n.basics.picture}),r.a.createElement("div",null,r.a.createElement("h2",null,n.basics.name),r.a.createElement("h4",null,r.a.createElement("a",{href:"https://gitconnected.com/".concat(n.basics.username),target:"_blank",rel:"noreferrer noopener"},"@",n.basics.username)),r.a.createElement("p",null,n.basics.label),r.a.createElement("p",null,"Coding in ",n.basics.region),r.a.createElement("p",null,n.basics.yearsOfExperience," years of experience as a developer"),r.a.createElement("p",null,n.basics.headline),n.basics.blog?r.a.createElement("p",null,"Blog:"," ",r.a.createElement("a",{href:n.basics.blog,target:"_blank",rel:"noreferrer noopener"},n.basics.blog)):r.a.createElement(r.a.Fragment,null))),r.a.createElement("div",null,r.a.createElement(x,{href:"https://gitconnected.com/".concat(n.basics.username,"/resume"),target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",null,"View R\xe9sum\xe9"),r.a.createElement(v.a,null))))},P=t(37),S=t.n(P);function _(){var e=Object(s.a)(["\n  width: 100%;\n  justify-content: center;\n"]);return _=function(){return e},e}function N(){var e=Object(s.a)(["\n  width: 25%;\n"]);return N=function(){return e},e}function W(){var e=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  z-index: 1;\n"]);return W=function(){return e},e}function D(){var e=Object(s.a)(["\n  height: 48px;\n"]);return D=function(){return e},e}function H(){var e=Object(s.a)(["\n  display: none;\n\n  @media (max-width: 640px) {\n    display: block;\n  }\n"]);return H=function(){return e},e}var B=d.a.div(H()),C=d.a.div(D()),F=d.a.div(W()),M=Object(d.a)(i.b)(N()),z=Object(d.a)(S.a)(_()),A=function(){return r.a.createElement(B,null,r.a.createElement(C,null),r.a.createElement(F,null,r.a.createElement(M,{to:"/"},r.a.createElement(z,{hasIconOnly:!0,renderIcon:v.e,iconDescription:"Me",tooltipPosition:"bottom"})),r.a.createElement(M,{to:"/projects"},r.a.createElement(z,{hasIconOnly:!0,renderIcon:v.b,iconDescription:"Projects",tooltipPosition:"bottom"})),r.a.createElement(M,{to:"/work"},r.a.createElement(z,{hasIconOnly:!0,renderIcon:v.d,iconDescription:"Work",tooltipPosition:"bottom"})),r.a.createElement(M,{to:"/education"},r.a.createElement(z,{hasIconOnly:!0,renderIcon:v.c,iconDescription:"Education",tooltipPosition:"bottom"}))))};function J(){var e=Object(s.a)(["\n  min-height: 100vh;\n\n  @media (max-width: 640px) {\n    margin-left: 0 !important;\n  }\n"]);return J=function(){return e},e}var L=Object(d.a)(m.Content)(J()),q=function(e){var n=e.user,t=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null),r.a.createElement(b,null),r.a.createElement(L,null,r.a.createElement(I,{user:n}),r.a.createElement("div",null,t)))},R=t(8);function T(){var e=Object(s.a)(["\n  display: inline-block;\n  margin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  padding: 0.5rem 1rem;\n  background-color: ",";\n  color: ",";\n  border: 3px solid ",";\n  border-radius: 2px;\n  font-weight: bold;\n"]);return T=function(){return e},e}function U(){var e=Object(s.a)(["\n  white-space: pre-wrap;\n"]);return U=function(){return e},e}function V(){var e=Object(s.a)(["\n  margin-top: 1.5rem;\n  margin-bottom: 0.5rem;\n"]);return V=function(){return e},e}var $=d.a.h3(V()),G=d.a.p(U()),K=d.a.span(T(),R.a[20],R.a[70],R.a[70]);function Q(){var e=Object(s.a)(["\n  margin-right: 0.5rem;\n  margin-bottom: 0.5rem;\n  display: inline-block;\n  font-size: 18px;\n"]);return Q=function(){return e},e}var X=d.a.li(Q()),Y=["drones","photoshop","web design","web development","app design","sketch","adobe xd","traveling"],Z=["English - 10/10 reading, 10/10 writing","Spanish - Native - 10/10 reading, 10/10 writing"],ee=function(e){var n=e.user;return r.a.createElement(q,{user:n},r.a.createElement("div",null,r.a.createElement($,null,"About Me"),r.a.createElement(G,null,n.basics.summary)),r.a.createElement("div",null,r.a.createElement($,null,"Skills"),r.a.createElement("div",null,n.skills.map((function(e){return r.a.createElement(K,{key:e.name},e.name)})))),r.a.createElement("div",null,r.a.createElement($,null,"Hobbies & Interests"),r.a.createElement("div",null,Y.map((function(e){return r.a.createElement(K,{key:e},e)})))),r.a.createElement("div",null,r.a.createElement($,null,"Spoken Languages"),r.a.createElement("div",null,Z.map((function(e){return r.a.createElement(K,{key:e},e)})))),r.a.createElement("div",null,r.a.createElement($,null,"Profiles"),r.a.createElement("ul",null,n.basics.profiles.map((function(e,n){return r.a.createElement(X,{key:e.network},0!==n&&" | ",r.a.createElement("a",{href:e.url,target:"_blank",rel:"noreferrer noopener"},e.network))})))))},ne=t(27);function te(){var e=Object(s.a)(["\n  margin-top: 1.2rem;\n"]);return te=function(){return e},e}function ae(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return ae=function(){return e},e}function re(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return re=function(){return e},e}var le=d.a.li(re(),R.b),ce=d.a.h4(ae()),oe=d.a.div(te()),ie=function(e){var n=e.user;return console.log(n),r.a.createElement(q,{user:n},r.a.createElement("div",null,r.a.createElement($,null,"Projects"),r.a.createElement("ul",null,n.projects.map((function(e,n){return r.a.createElement(le,{key:n},r.a.createElement("a",{href:e.githubUrl,target:"__blank"},r.a.createElement(ce,null,e.name)),r.a.createElement("p",null,e.summary),r.a.createElement(oe,null,[].concat(Object(ne.a)(e.languages),Object(ne.a)(e.libraries)).map((function(e,n){return r.a.createElement(K,{key:n},e)}))))})))))};function ue(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return ue=function(){return e},e}function me(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return me=function(){return e},e}function se(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return se=function(){return e},e}var de=d.a.li(se(),R.b),pe=d.a.h4(me()),fe=d.a.p(ue()),Ee=function(e){var n=e.user;return r.a.createElement(q,{user:n},r.a.createElement("div",null,r.a.createElement($,null,"Work"),r.a.createElement("ul",null,n.work.map((function(e,n){return r.a.createElement(de,{key:n},r.a.createElement(pe,null,e.position),r.a.createElement("div",null,r.a.createElement(fe,null,e.company)," ",r.a.createElement("span",null,e.location),r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(G,null,e.summary))})))))};function be(){var e=Object(s.a)(["\n  font-weight: bold;\n  display: inline-block;\n"]);return be=function(){return e},e}function ve(){var e=Object(s.a)(["\n  font-weight: bold;\n"]);return ve=function(){return e},e}function he(){var e=Object(s.a)(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ",";\n"]);return he=function(){return e},e}var ge=d.a.li(he(),R.b),je=d.a.h4(ve()),ye=d.a.p(be()),ke=function(e){var n=e.user;return r.a.createElement(q,{user:n},r.a.createElement("div",null,r.a.createElement($,null,"Education"),r.a.createElement("ul",null,n.education.map((function(e,n){return r.a.createElement(ge,{key:n},r.a.createElement(je,null,e.position),r.a.createElement("div",null,r.a.createElement(ye,null,e.studyType,", ",e.area)," ",r.a.createElement("span",null," \u22c5 "),r.a.createElement("span",null,e.start.year," to ",e.end.year)),r.a.createElement(G,null,e.description.replace("\n\n","\n")))})))))},Oe=function(e){var n=e.user;return r.a.createElement(i.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(ee,{user:n})),r.a.createElement(u.a,{path:"/portfolio/"},r.a.createElement(ee,{user:n})),r.a.createElement(u.a,{path:"/projects"},r.a.createElement(ie,{user:n})),r.a.createElement(u.a,{path:"/work"},r.a.createElement(Ee,{user:n})),r.a.createElement(u.a,{path:"/education"},r.a.createElement(ke,{user:n}))))};var we=function(){var e=Object(a.useState)(null),n=Object(o.a)(e,2),t=n[0],l=n[1];return Object(a.useEffect)((function(){fetch("https://gitconnected.com/v1/portfolio/sotomaque",{crossdomain:!0}).then((function(e){return e.json()})).then((function(e){l(e)}))}),[]),t?r.a.createElement(Oe,{user:t}):r.a.createElement("div",null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.38711f51.chunk.js.map