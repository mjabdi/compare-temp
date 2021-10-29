"use strict";
exports.id = 5658;
exports.ids = [5658];
exports.modules = {

/***/ 5658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ siteSettings)
/* harmony export */ });
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1103);

const siteSettings = {
  name: 'PickBazar',
  description: '',
  logo: {
    url: '/logo.svg',
    alt: 'PickBazar',
    href: '/grocery',
    width: 128,
    height: 40
  },
  defaultLanguage: 'en',
  currencyCode: 'USD',
  product: {
    placeholderImage: '/product-placeholder.svg',
    cardMaps: {
      grocery: 'Krypton',
      furniture: 'Radon',
      bag: 'Oganesson',
      makeup: 'Neon',
      book: 'Xenon',
      medicine: 'Helium',
      default: 'Argon'
    }
  },
  authorizedLinks: [{
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.PROFILE */ .Z.PROFILE,
    label: 'auth-menu-profile'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.ORDERS */ .Z.ORDERS,
    label: 'auth-menu-my-orders'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.CHECKOUT */ .Z.CHECKOUT,
    label: 'auth-menu-checkout'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.LOGOUT */ .Z.LOGOUT,
    label: 'auth-menu-logout'
  }],
  authorizedLinksMobile: [{
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.PROFILE */ .Z.PROFILE,
    label: 'auth-menu-profile'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.ORDERS */ .Z.ORDERS,
    label: 'auth-menu-my-orders'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.REFUNDS */ .Z.REFUNDS,
    label: 'text-my-refunds'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.CHECKOUT */ .Z.CHECKOUT,
    label: 'auth-menu-checkout'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.CHANGE_PASSWORD */ .Z.CHANGE_PASSWORD,
    label: 'profile-sidebar-password'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.LOGOUT */ .Z.LOGOUT,
    label: 'auth-menu-logout'
  }],
  dashboardSidebarMenu: [{
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.PROFILE */ .Z.PROFILE,
    label: 'profile-sidebar-profile'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.CHANGE_PASSWORD */ .Z.CHANGE_PASSWORD,
    label: 'profile-sidebar-password'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.ORDERS */ .Z.ORDERS,
    label: 'profile-sidebar-orders'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.REFUNDS */ .Z.REFUNDS,
    label: 'text-my-refunds'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.HELP */ .Z.HELP,
    label: 'profile-sidebar-help'
  }, {
    href: _lib_routes__WEBPACK_IMPORTED_MODULE_0__/* .ROUTES.LOGOUT */ .Z.LOGOUT,
    label: 'profile-sidebar-logout'
  }]
};

/***/ })

};
;