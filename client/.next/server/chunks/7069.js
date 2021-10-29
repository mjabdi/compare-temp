"use strict";
exports.id = 7069;
exports.ids = [7069];
exports.modules = {

/***/ 7069:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightSideView": () => (/* binding */ RightSideView),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7900);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8718);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5218);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





const UnverifiedItemList = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(1817), __webpack_require__.e(7993), __webpack_require__.e(482), __webpack_require__.e(4525), __webpack_require__.e(1382)]).then(__webpack_require__.bind(__webpack_require__, 1382)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1382)],
    modules: ["../components/checkout/right-side-view.tsx -> " + '@components/checkout/item/unverified-item-list']
  }
});
const VerifiedItemList = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(1817), __webpack_require__.e(7993), __webpack_require__.e(5549), __webpack_require__.e(482), __webpack_require__.e(2702), __webpack_require__.e(4525), __webpack_require__.e(3146), __webpack_require__.e(5013), __webpack_require__.e(3129)]).then(__webpack_require__.bind(__webpack_require__, 3129)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3129)],
    modules: ["../components/checkout/right-side-view.tsx -> " + '@components/checkout/item/verified-item-list']
  }
});
const RightSideView = () => {
  const [verifiedResponse] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_store_checkout__WEBPACK_IMPORTED_MODULE_0__/* .verifiedResponseAtom */ .Jb);

  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_2___default()(verifiedResponse)) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(UnverifiedItemList, {});
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(VerifiedItemList, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightSideView);

/***/ })

};
;