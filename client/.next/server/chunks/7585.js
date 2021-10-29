"use strict";
exports.id = 7585;
exports.ids = [7585];
exports.modules = {

/***/ 85:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MobileAuthorizedMenu)
/* harmony export */ });
/* harmony import */ var _settings_site__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5658);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9879);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5936);
/* harmony import */ var _framework_auth_use_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









function MobileAuthorizedMenu() {
  var _me$wallet, _me$wallet2, _me$wallet3;

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    me
  } = (0,_framework_auth_use_user__WEBPACK_IMPORTED_MODULE_6__/* .default */ .ZP)();
  const [_, closeSidebar] = (0,jotai__WEBPACK_IMPORTED_MODULE_4__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_5__/* .drawerAtom */ .P);

  function handleClick(path) {
    router.push(path);
    closeSidebar({
      display: false,
      view: ''
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ui_drawer_drawer_wrapper__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
      className: "flex-grow",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
        className: "flex justify-between items-center w-full pt-3 px-5 md:px-8 text-sm text-start font-semibold capitalize text-body focus:outline-none border-t border-dashed border-border-200 bg-gray-100",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          children: t('text-total-points')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          children: me === null || me === void 0 ? void 0 : (_me$wallet = me.wallet) === null || _me$wallet === void 0 ? void 0 : _me$wallet.total_points
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
        className: "flex justify-between items-center w-full pt-3 px-5 md:px-8 text-sm text-start font-semibold capitalize text-body focus:outline-none bg-gray-100",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          children: t('text-points-used')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          children: me === null || me === void 0 ? void 0 : (_me$wallet2 = me.wallet) === null || _me$wallet2 === void 0 ? void 0 : _me$wallet2.points_used
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
        className: "flex justify-between items-center w-full py-3 px-5 md:px-8 text-sm text-start font-semibold capitalize text-body focus:outline-none border-b border-dashed border-border-200 bg-gray-100",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          children: t('text-available-points')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          children: me === null || me === void 0 ? void 0 : (_me$wallet3 = me.wallet) === null || _me$wallet3 === void 0 ? void 0 : _me$wallet3.available_points
        })]
      }), _settings_site__WEBPACK_IMPORTED_MODULE_0__/* .siteSettings.authorizedLinksMobile.map */ .U.authorizedLinksMobile.map(({
        href,
        label
      }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          className: "block py-3 px-5 md:px-8 text-sm font-semibold capitalize text-heading transition duration-200 hover:text-accent cursor-pointer",
          onClick: () => handleClick(href),
          children: t(label)
        })
      }, `${href}${label}`))]
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