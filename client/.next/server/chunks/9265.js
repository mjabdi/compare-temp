"use strict";
exports.id = 9265;
exports.ids = [9265];
exports.modules = {

/***/ 9265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileMainMenu)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1103);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9879);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5936);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







const headerLinks = [// { href: ROUTES.SHOPS, label: 'nav-menu-shops' },
// { href: ROUTES.OFFERS, label: 'nav-menu-offer' },
{
  href: _lib_routes__WEBPACK_IMPORTED_MODULE_1__/* .ROUTES.HELP */ .Z.HELP,
  label: 'nav-menu-faq'
}, {
  href: _lib_routes__WEBPACK_IMPORTED_MODULE_1__/* .ROUTES.CONTACT */ .Z.CONTACT,
  label: 'nav-menu-contact'
}];
function MobileMainMenu() {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const [_, closeSidebar] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_5__/* .drawerAtom */ .P);

  function handleClick(path) {
    router.push(path);
    closeSidebar({
      display: false,
      view: ''
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ul", {
      className: "flex-grow",
      children: headerLinks.map(({
        href,
        label
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          onClick: () => handleClick(href),
          className: "flex items-center py-3 px-5 md:px-8 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent cursor-pointer",
          children: t(label)
        })
      }, `${href}${label}`))
    })
  });
}

/***/ }),

/***/ 1103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = {
  HOME: '/grocery',
  CHECKOUT: '/checkout',
  PROFILE: '/profile',
  CHANGE_PASSWORD: '/change-password',
  ORDERS: '/orders',
  REFUNDS: '/refunds',
  HELP: '/help',
  LOGOUT: '/logout',
  OFFERS: '/offers',
  ORDER_RECEIVED: '/order-received',
  PRODUCT: '/products',
  ORDER: '/order',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  CONTACT: '/contact',
  SHOPS: '/shops'
};

/***/ })

};
;