"use strict";
exports.id = 527;
exports.ids = [527];
exports.modules = {

/***/ 527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3315);
/* harmony import */ var _framework_categories_categories_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9492);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5218);
/* harmony import */ var _framework_utils_use_homepage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8025);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






const StickySidebarListCategories = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(3229), __webpack_require__.e(1859), __webpack_require__.e(8473), __webpack_require__.e(2005), __webpack_require__.e(8120), __webpack_require__.e(1832)]).then(__webpack_require__.bind(__webpack_require__, 1832)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1832)],
    modules: ["../framework/rest/categories/categories.tsx -> " + '@components/categories/sticky-sidebar-list-categories']
  }
});
const SlidingVerticalRectangleCategories = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(3229), __webpack_require__.e(2251), __webpack_require__.e(1604)]).then(__webpack_require__.bind(__webpack_require__, 1604)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1604)],
    modules: ["../framework/rest/categories/categories.tsx -> " + '@components/categories/sliding-vertical-rectangle-categories']
  }
});
const StickySidebarBoxedCategories = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(3229), __webpack_require__.e(1859), __webpack_require__.e(8473), __webpack_require__.e(2005), __webpack_require__.e(8120), __webpack_require__.e(2438)]).then(__webpack_require__.bind(__webpack_require__, 2438)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2438)],
    modules: ["../framework/rest/categories/categories.tsx -> " + '@components/categories/sticky-sidebar-boxed-categories']
  }
});
const FilterCategoryGrid = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__.default)(() => Promise.all(/* import() */[__webpack_require__.e(9517), __webpack_require__.e(2317), __webpack_require__.e(7993), __webpack_require__.e(3229), __webpack_require__.e(1859), __webpack_require__.e(1225), __webpack_require__.e(2005), __webpack_require__.e(9449)]).then(__webpack_require__.bind(__webpack_require__, 9449)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9449)],
    modules: ["../framework/rest/categories/categories.tsx -> " + '@components/categories/filter-category-grid']
  }
});
const MAP_CATEGORY_TO_GROUP = {
  classic: StickySidebarListCategories,
  modern: StickySidebarBoxedCategories,
  standard: SlidingVerticalRectangleCategories,
  minimal: FilterCategoryGrid,
  default: StickySidebarListCategories
};

const Categories = ({
  layout,
  className
}) => {
  var _ref, _query$pages, _data$categories, _data$categories$data, _data$categories2;

  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    homePage
  } = (0,_framework_utils_use_homepage__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)();
  const {
    data,
    isLoading: loading,
    error
  } = (0,_framework_categories_categories_query__WEBPACK_IMPORTED_MODULE_2__/* .useCategoriesQuery */ .E)({
    type: (_ref = (_query$pages = query.pages) === null || _query$pages === void 0 ? void 0 : _query$pages[0]) !== null && _ref !== void 0 ? _ref : homePage === null || homePage === void 0 ? void 0 : homePage.slug,
    limit: 1000,
    parent: layout === 'minimal' ? 'all' : 'null'
  });
  if (error) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_ui_error_message__WEBPACK_IMPORTED_MODULE_1__.default, {
    message: error.message
  });
  const Component = layout ? MAP_CATEGORY_TO_GROUP[layout] : MAP_CATEGORY_TO_GROUP['default'];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Component, {
    notFound: !Boolean(data === null || data === void 0 ? void 0 : (_data$categories = data.categories) === null || _data$categories === void 0 ? void 0 : (_data$categories$data = _data$categories.data) === null || _data$categories$data === void 0 ? void 0 : _data$categories$data.length),
    categories: data === null || data === void 0 ? void 0 : (_data$categories2 = data.categories) === null || _data$categories2 === void 0 ? void 0 : _data$categories2.data,
    loading: loading,
    className: className
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);

/***/ })

};
;