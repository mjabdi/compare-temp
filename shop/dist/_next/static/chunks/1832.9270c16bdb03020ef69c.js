"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1832],{51832:function(e,t,r){r.r(t),r.d(t,{default:function(){return S}});var n=r(52088),s=r(3229),c=r(1717),o=r(38566),i=r(64337),l=r(26452),a=r(86677),u=r(60042),p=r.n(u),d=r(24246);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(e){return(0,d.jsx)("svg",h(h({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),{},{children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 9l-7 7-7-7"})}))};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){return(0,d.jsx)("svg",x(x({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},e),{},{children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 15l7-7 7 7"})}))},b=r(48473),O=r(8120),g=r(27378),v=r(556),w=r(39338);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=function e(t){var r,n,s=t.className,c=t.item,u=t.depth,f=void 0===u?0:u,h=(0,a.useRouter)(),j=null===h||void 0===h||null===(r=h.query)||void 0===r?void 0:r.category,x=j===c.slug||(null===c||void 0===c||null===(n=c.children)||void 0===n?void 0:n.some((function(e){return e.slug===j}))),N=(0,g.useState)(x),k=N[0],D=N[1];(0,g.useEffect)((function(){D(x)}),[x]);var E,S=c.slug,Z=c.name,A=c.children,C=c.icon,L=(0,w.KO)(v.P),q=(0,o.Z)(L,2),_=q[0].display,M=q[1];return Array.isArray(A)&&A.length&&(E=k?(0,d.jsx)(y,{className:"w-3 h-3"}):(0,d.jsx)(m,{className:"w-3 h-3"})),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.E.li,{initial:!1,animate:{backgroundColor:"#ffffff"},onClick:function(){var e=h.pathname,t=h.query,r=function(){return h.push({pathname:e,query:P(P({},t),{},{category:S})},void 0,{scroll:!1})};Array.isArray(A)&&A.length?(D((function(e){return!e})),r()):(r(),_&&M({display:!1,view:""}))},className:"py-1 rounded-md",children:(0,d.jsxs)("button",{className:p()("flex items-center w-full py-2 text-start outline-none text-body-dark font-semibold  focus:outline-none focus:ring-0 focus:text-accent transition-all ease-in-expo",k?"text-accent":"text-body-dark",s||"text-sm"),children:[C&&(0,d.jsx)("span",{className:"flex w-5 h-5 me-4 items-center justify-center",children:(0,b.q)({iconList:O,iconName:C,className:"h-full w-full"})}),(0,d.jsx)("span",{children:Z}),(0,d.jsx)("span",{className:"ms-auto",children:E})]})}),(0,d.jsx)(l.M,{initial:!1,children:Array.isArray(A)&&k?(0,d.jsx)("li",{children:(0,d.jsx)(i.E.ul,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.8,ease:[.04,.62,.23,.98]},className:"ms-4 text-xs",children:A.map((function(t){var r=f+1;return(0,d.jsx)(e,{item:t,depth:r,className:p()("text-sm text-body ms-5")},"".concat(t.name).concat(t.slug))}))},"content")}):null})]})};var D=function(e){var t=e.items,r=e.className;return(0,d.jsx)("ul",{className:p()("text-xs",r),children:null===t||void 0===t?void 0:t.map((function(e){return(0,d.jsx)(k,{item:e},"".concat(e.name).concat(e.slug))}))})},E=r(2005),S=function(e){var t=e.notFound,r=e.categories,c=e.loading,o=e.className;return c?(0,d.jsx)("div",{className:"hidden xl:block",children:(0,d.jsx)("div",{className:"w-72 mt-8 px-2",children:(0,d.jsx)(E.Z,{})})}):(0,d.jsx)("aside",{className:"lg:sticky lg:top-22 h-full xl:w-72 hidden xl:block bg-light ".concat(o),children:(0,d.jsx)("div",{className:"max-h-full overflow-hidden",children:(0,d.jsx)(n.Z,{className:"w-full max-h-screen",style:{height:"calc(100vh - 5.35rem)"},children:t?(0,d.jsx)("div",{className:"min-h-full w-full pt-6 pb-8 px-9 lg:p-8",children:(0,d.jsx)(s.Z,{text:"text-no-category",className:"h-96"})}):(0,d.jsx)("div",{className:"px-5",children:(0,d.jsx)(D,{items:r,className:"xl:py-8"})})})})})}}}]);