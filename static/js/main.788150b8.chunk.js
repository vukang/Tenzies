(this.webpackJsonptenzies=this.webpackJsonptenzies||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(5),s=c.n(i),r=(c(13),c(3)),l=c(2),o=c(0);function u(e){var t={backgroundColor:e.isHeld?"#59E391":"white"};return Object(o.jsx)("div",{className:"die-face",style:t,onClick:e.holdDice,children:Object(o.jsx)("h2",{className:"die-num",children:e.value})})}var j=c(8),d=c(6),b=c(7),h=c.n(b);function f(){var e=a.a.useState(D()),t=Object(l.a)(e,2),c=t[0],n=t[1],i=a.a.useState(!1),s=Object(l.a)(i,2),b=s[0],f=s[1],O=a.a.useState(0),m=Object(l.a)(O,2),v=m[0],x=m[1],g=a.a.useState(JSON.parse(localStorage.getItem("highscore"))||{rolls:0,time:""}),p=Object(l.a)(g,2),S=p[0],N=p[1],H=a.a.useState(""),k=Object(l.a)(H,2),y=k[0],C=k[1],w=Object(d.useStopwatch)({autoStart:!1}),E=w.seconds,z=w.minutes,F=w.start,I=w.pause,J=w.reset;function T(){return{value:Math.ceil(6*Math.random()),isHeld:!1,id:Object(j.a)()}}function D(){for(var e=[],t=0;t<10;t++)e.push(T());return e}a.a.useEffect((function(){var e=c.every((function(e){return e.isHeld})),t=c[0].value,n=c.every((function(e){return e.value===t}));e&&n&&f(!0)}),[c]),a.a.useEffect((function(){b&&(I(),C("".concat(z,":").concat(E)),(v<S.rolls&&y<=S.time||0===S.rolls)&&N((function(e){return Object(r.a)(Object(r.a)({},e),{},{rolls:v,time:"".concat(z,":").concat(E)})})))}),[b,v,S,I,z,E,y]),a.a.useEffect((function(){localStorage.setItem("highscore",JSON.stringify(S))}),[S]);var M=c.map((function(e){return Object(o.jsx)(u,{value:e.value,isHeld:e.isHeld,holdDice:function(){return t=e.id,void n((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{isHeld:!e.isHeld}):e}))}));var t}},e.id)}));return Object(o.jsxs)("main",{children:[Object(o.jsxs)("div",{className:"stats",children:[Object(o.jsxs)("div",{className:"highscore",children:["Highscore:",Object(o.jsx)("br",{}),S.rolls>0?"".concat(S.rolls," rolls in (").concat(S.time,")  minutes"):"play your first game",Object(o.jsx)("br",{})]}),Object(o.jsxs)("div",{className:"currentScore",children:[Object(o.jsx)("span",{children:0!==v?"Time: ".concat(z,":").concat(E):"(pre-roll thinking time)"}),Object(o.jsx)("br",{}),"Rolls: ",v]})]}),b&&Object(o.jsx)(h.a,{}),Object(o.jsx)("h1",{className:"title",children:"Tenzies"}),Object(o.jsx)("p",{className:"instructions",children:"Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}),Object(o.jsx)("div",{className:"dice-container",children:M}),Object(o.jsx)("button",{className:"roll-dice",onClick:function(){0===v&&(J(),F()),b?(J(),f(!1),n(D()),x(0)):(x((function(e){return e+1})),n((function(e){return e.map((function(e){return e.isHeld?e:T()}))})))},children:b?"New Game":"Roll"})]})}var O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(f,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.788150b8.chunk.js.map