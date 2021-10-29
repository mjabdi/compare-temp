"use strict";
exports.id = 2713;
exports.ids = [2713];
exports.modules = {

/***/ 2713:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_groups_groups_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6296);
/* harmony import */ var _framework_utils_use_homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8025);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5218);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const ErrorMessage = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 3315)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3315)],
    modules: ["../framework/rest/app/banner.tsx -> " + '@components/ui/error-message']
  }
});
const BannerWithSearch = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => __webpack_require__.e(/* import() */ 3853).then(__webpack_require__.bind(__webpack_require__, 3853)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3853)],
    modules: ["../framework/rest/app/banner.tsx -> " + '@components/banners/banner-with-search']
  }
});
const BannerShort = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(2251), __webpack_require__.e(4397)]).then(__webpack_require__.bind(__webpack_require__, 4397)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4397)],
    modules: ["../framework/rest/app/banner.tsx -> " + '@components/banners/banner-short']
  }
});
const BannerWithoutSlider = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => __webpack_require__.e(/* import() */ 9056).then(__webpack_require__.bind(__webpack_require__, 9056)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9056)],
    modules: ["../framework/rest/app/banner.tsx -> " + '@components/banners/banner-without-slider']
  }
});
const MAP_BANNER_TO_GROUP = {
  classic: BannerWithSearch,
  modern: BannerShort,
  standard: BannerWithSearch,
  minimal: BannerWithoutSlider,
  default: BannerWithSearch
};

const Banner = ({
  layout
}) => {
  var _data$type;

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    homePage
  } = (0,_framework_utils_use_homepage__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z)();
  const group = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(() => {
    var _router$query$pages$, _router$query$pages;

    return (_router$query$pages$ = (_router$query$pages = router.query.pages) === null || _router$query$pages === void 0 ? void 0 : _router$query$pages[0]) !== null && _router$query$pages$ !== void 0 ? _router$query$pages$ : homePage === null || homePage === void 0 ? void 0 : homePage.slug;
  }, [router.query.pages, homePage]);
  const {
    data,
    error
  } = (0,_framework_groups_groups_query__WEBPACK_IMPORTED_MODULE_0__/* .useGroupQuery */ .xR)(group === null || group === void 0 ? void 0 : group.toString());
  if (error) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ErrorMessage, {
    message: error.message
  });
  const Component = layout ? MAP_BANNER_TO_GROUP[layout] : MAP_BANNER_TO_GROUP['default'];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Component, {
    banners: data === null || data === void 0 ? void 0 : (_data$type = data.type) === null || _data$type === void 0 ? void 0 : _data$type.banners,
    layout: layout
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Banner);

/***/ })

};
;