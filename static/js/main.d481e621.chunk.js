(this["webpackJsonpelectron-app-static"]=this["webpackJsonpelectron-app-static"]||[]).push([[0],{126:function(e,t,n){e.exports={login:"Login_login__2zXTa",button:"Login_button__oe5B4"}},217:function(e,t,n){e.exports={card:"Card_card__3YFFs"}},227:function(e,t,n){},230:function(e,t){},254:function(e,t){},257:function(e,t){},261:function(e,t){},282:function(e,t){},284:function(e,t){},298:function(e,t){},300:function(e,t){},329:function(e,t){},331:function(e,t){},423:function(e,t){},424:function(e,t){},517:function(e,t,n){"use strict";n.r(t);var c=n(25),r=n.n(c),a=n(216),o=n.n(a),i=(n(227),n(64)),s=n(33),u=n(3),l=n.n(u),b=n(217),j=n.n(b),d=n(16),h=function(e){return Object(d.jsx)("div",{className:"".concat(j.a.card," ").concat(e.className),children:e.children})},f=n(89),O=n.n(f),x=n(221),p=function(e){var t=Object(c.useState)(),n=Object(s.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(),u=Object(s.a)(o,2),b=(u[0],u[1],Object(c.useState)()),j=Object(s.a)(b,2),f=j[0],p=j[1];function g(){return(g=Object(i.a)(l.a.mark((function e(t){var n,c,o,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new x.a.providers.Web3Provider(window.ethereum),c=n.getSigner(),o=new Date,e.next=5,c.getAddress();case 5:return e.t0=e.sent,e.t1=o.getDate(),i={signer:e.t0,date:e.t1},e.next=10,c.signMessage(btoa(JSON.stringify(i)));case 10:return s=e.sent,a(s),console.log(r),e.next=15,c.getAddress();case 15:e.sent,p(!0);case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsxs)(h,{className:O.a.home,children:[!f&&Object(d.jsx)("h1",{children:"Sign your wallet. No transaction will be made during the sign."}),f&&Object(d.jsx)("h1",{children:"Verify to continue."}),Object(d.jsx)("p",{children:e.currentAccount}),!f&&Object(d.jsx)("button",{className:O.a.button,onClick:function(e){return g.apply(this,arguments)},children:" sign "}),f&&Object(d.jsx)("a",{href:"testproto://"+r+"//"+e.currentAccount,target:"_blank",rel:"noreferrer",children:Object(d.jsx)("button",{className:O.a.button,children:" Verify "})})]})},g=n(126),w=n.n(g),m=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],a=n[1],o=function(){var e;return window.ethereum?e=window.ethereum:window.web3?e=window.web3.currentProvider:window.alert("No Ethereum browser detected! Check out MetaMask"),e},u=function(){var t=Object(i.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=o())){t.next=7;break}return n!==window.ethereum&&console.error("Not window.ethereum provider. Do you have multiple wallet installed ?"),a(!0),t.next=6,n.request({method:"eth_requestAccounts"});case 6:a(!1);case 7:e.onLogin(n);case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)(h,{className:w.a.login,children:Object(d.jsxs)("button",{onClick:u,className:w.a.button,type:"button",children:[!r&&"Connect",r&&"Loading..."]})})},v=n(220),_=n.n(v),k=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(null),u=Object(s.a)(o,2),b=u[0],j=u[1],h=Object(c.useState)(0),f=Object(s.a)(h,2),O=f[0],x=f[1],g=Object(c.useState)(""),w=Object(s.a)(g,2),v=(w[0],w[1],function(){var e=Object(i.a)(l.a.mark((function e(t){var n,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new _.a(t),e.next=3,n.eth.getAccounts();case 3:if(0!==(c=e.sent).length){e.next=8;break}console.log("Please connect to MetaMask!"),e.next=17;break;case 8:if(c[0]===b){e.next=17;break}return j(c[0]),e.t0=n.utils,e.next=13,n.eth.getBalance(c[0]);case 13:e.t1=e.sent,r=e.t0.fromWei.call(e.t0,e.t1,"ether"),x(Number(r).toFixed(6)),a(!0);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return Object(d.jsxs)("div",{children:[Object(d.jsxs)("header",{className:"main-header",children:[Object(d.jsx)("h1",{children:"Account verification"}),Object(d.jsx)("nav",{className:"nav",children:Object(d.jsx)("ul",{children:Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"/",children:b})})})})]}),Object(d.jsxs)("main",{children:[!r&&Object(d.jsx)(m,{onLogin:v,onLogout:function(){a(!1)}}),r&&Object(d.jsx)(p,{currentAccount:b,balance:O})]})]})};var N=function(){return Object(d.jsx)(k,{})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,521)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),S()},89:function(e,t,n){e.exports={home:"Home_home__25lM4",button:"Home_button__39yiO"}}},[[517,1,2]]]);
//# sourceMappingURL=main.d481e621.chunk.js.map