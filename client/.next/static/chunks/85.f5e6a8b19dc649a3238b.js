"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85],{85:function(e,r,t){t.r(r),t.d(r,{default:function(){return f}});var l=t(38566),o=t(65658),a=t(86677),n=t(21446),i=t(19879),s=t(39338),d=t(556),u=t(73931),c=t(24246);function f(){var e,r,t,f=(0,n.$G)("common").t,h=(0,a.useRouter)(),p=(0,u.ZP)().me,b=(0,s.KO)(d.P),m=(0,l.Z)(b,2),x=(m[0],m[1]);return(0,c.jsx)(i.Z,{children:(0,c.jsxs)("ul",{className:"flex-grow",children:[(0,c.jsxs)("li",{className:"flex justify-between items-center w-full pt-3 px-5 md:px-8 text-sm text-start font-semibold capitalize text-body focus:outline-none border-t border-dashed border-border-200 bg-gray-100",children:[(0,c.jsx)("span",{children:f("text-total-points")}),(0,c.jsx)("span",{children:null===p||void 0===p||null===(e=p.wallet)||void 0===e?void 0:e.total_points})]}),(0,c.jsxs)("li",{className:"flex justify-between items-center w-full pt-3 px-5 md:px-8 text-sm text-start font-semibold capitalize text-body focus:outline-none bg-gray-100",children:[(0,c.jsx)("span",{children:f("text-points-used")}),(0,c.jsx)("span",{children:null===p||void 0===p||null===(r=p.wallet)||void 0===r?void 0:r.points_used})]}),(0,c.jsxs)("li",{className:"flex justify-between items-center w-full py-3 px-5 md:px-8 text-sm text-start font-semibold capitalize text-body focus:outline-none border-b border-dashed border-border-200 bg-gray-100",children:[(0,c.jsx)("span",{children:f("text-available-points")}),(0,c.jsx)("span",{children:null===p||void 0===p||null===(t=p.wallet)||void 0===t?void 0:t.available_points})]}),o.U.authorizedLinksMobile.map((function(e){var r=e.href,t=e.label;return(0,c.jsx)("li",{children:(0,c.jsx)("span",{className:"block py-3 px-5 md:px-8 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent cursor-pointer",onClick:function(){return e=r,h.push(e),void x({display:!1,view:""});var e},children:f(t)})},"".concat(r).concat(t))}))]})})}},31103:function(e,r,t){t.d(r,{Z:function(){return l}});var l={HOME:"/grocery",CHECKOUT:"/checkout",PROFILE:"/profile",CHANGE_PASSWORD:"/change-password",ORDERS:"/orders",REFUNDS:"/refunds",HELP:"/help",LOGOUT:"/logout",OFFERS:"/offers",ORDER_RECEIVED:"/order-received",PRODUCT:"/products",ORDER:"/order",PRIVACY:"/privacy",TERMS:"/terms",CONTACT:"/contact",SHOPS:"/shops"}},65658:function(e,r,t){t.d(r,{U:function(){return o}});var l=t(31103),o={name:"PickBazar",description:"",logo:{url:"/logo.svg",alt:"PickBazar",href:"/grocery",width:128,height:40},defaultLanguage:"en",currencyCode:"USD",product:{placeholderImage:"/product-placeholder.svg",cardMaps:{grocery:"Krypton",furniture:"Radon",bag:"Oganesson",makeup:"Neon",book:"Xenon",medicine:"Helium",default:"Argon"}},authorizedLinks:[{href:l.Z.PROFILE,label:"auth-menu-profile"},{href:l.Z.ORDERS,label:"auth-menu-my-orders"},{href:l.Z.CHECKOUT,label:"auth-menu-checkout"},{href:l.Z.LOGOUT,label:"auth-menu-logout"}],authorizedLinksMobile:[{href:l.Z.PROFILE,label:"auth-menu-profile"},{href:l.Z.ORDERS,label:"auth-menu-my-orders"},{href:l.Z.REFUNDS,label:"text-my-refunds"},{href:l.Z.CHECKOUT,label:"auth-menu-checkout"},{href:l.Z.CHANGE_PASSWORD,label:"profile-sidebar-password"},{href:l.Z.LOGOUT,label:"auth-menu-logout"}],dashboardSidebarMenu:[{href:l.Z.PROFILE,label:"profile-sidebar-profile"},{href:l.Z.CHANGE_PASSWORD,label:"profile-sidebar-password"},{href:l.Z.ORDERS,label:"profile-sidebar-orders"},{href:l.Z.REFUNDS,label:"text-my-refunds"},{href:l.Z.HELP,label:"profile-sidebar-help"},{href:l.Z.LOGOUT,label:"profile-sidebar-logout"}]}}}]);