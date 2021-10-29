"use strict";
exports.id = 1604;
exports.ids = [1604];
exports.modules = {

/***/ 1604:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_loaders_bakery_categories_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3764);
/* harmony import */ var _components_ui_not_found__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3229);
/* harmony import */ var _components_ui_solid_boxed_categoty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(662);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_solid_boxed_categoty__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui_solid_boxed_categoty__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const SlidingVerticalRectangleCategories = ({
  notFound,
  categories,
  loading
}) => {
  if (loading) {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "hidden xl:block",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: "w-full h-52 flex justify-center mt-8 px-2",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_ui_loaders_bakery_categories_loader__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {})
      })
    });
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: "w-full bg-gray-100",
    children: !notFound ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "pt-5 px-4 lg:p-8 lg:pb-0",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_ui_solid_boxed_categoty__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        items: categories,
        className: "py-8"
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: "min-h-full pt-6 pb-8 px-9 lg:p-8",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_ui_not_found__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
        text: "text-no-category",
        className: "h-96"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlidingVerticalRectangleCategories);
});

/***/ }),

/***/ 3764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9081);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_content_loader__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const BakeryCategoryLoader = props => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)((react_content_loader__WEBPACK_IMPORTED_MODULE_0___default()), _objectSpread(_objectSpread({
  speed: 2,
  width: 1000,
  height: 120,
  viewBox: "0 0 1000 120",
  backgroundColor: "#f3f3f3",
  foregroundColor: "#ecebeb"
}, props), {}, {
  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "74",
    cy: "45",
    r: "36"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
    x: "15",
    y: "95",
    rx: "0",
    ry: "0",
    width: "118",
    height: "21"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "220",
    cy: "45",
    r: "36"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
    x: "161",
    y: "95",
    rx: "0",
    ry: "0",
    width: "118",
    height: "21"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "370",
    cy: "45",
    r: "36"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
    x: "311",
    y: "95",
    rx: "0",
    ry: "0",
    width: "118",
    height: "21"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "517",
    cy: "46",
    r: "36"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
    x: "458",
    y: "96",
    rx: "0",
    ry: "0",
    width: "118",
    height: "21"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "657",
    cy: "45",
    r: "36"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
    x: "608",
    y: "95",
    rx: "0",
    ry: "0",
    width: "118",
    height: "21"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "807",
    cy: "45",
    r: "36"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
    x: "758",
    y: "95",
    rx: "0",
    ry: "0",
    width: "118",
    height: "21"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("circle", {
    cx: "957",
    cy: "46",
    r: "36"
  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("rect", {
    x: "908",
    y: "96",
    rx: "0",
    ry: "0",
    width: "118",
    height: "21"
  })]
}));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BakeryCategoryLoader);

/***/ }),

/***/ 662:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8972);
/* harmony import */ var _components_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8779);
/* harmony import */ var _components_icons_arrow_next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(971);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9975);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1219);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6126);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_7__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
const _excluded = ["category"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














const CategoryItem = ({
  item
}) => {
  var _ref, _item$image;

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    pathname,
    query
  } = router;
  const selectedQueries = query.category;

  const onCategoryClick = slug => {
    if (selectedQueries === slug) {
      const {
        category
      } = query,
            rest = _objectWithoutProperties(query, _excluded);

      router.push({
        pathname,
        query: _objectSpread({}, rest)
      }, undefined, {
        scroll: false
      });
      return;
    }

    router.push({
      pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        category: slug
      })
    }, undefined, {
      scroll: false
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('text-center rounded bg-light relative overflow-hidden cursor-pointer border-2', selectedQueries === item.slug ? 'border-accent' : 'border-light'),
    role: "button",
    onClick: () => onCategoryClick(item === null || item === void 0 ? void 0 : item.slug),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
      className: "flex items-center justify-center h-32 w-auto relative overflow-hidden mb-3 my-2",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_9__/* .Image */ .E, {
        src: (_ref = item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : _item$image.original) !== null && _ref !== void 0 ? _ref : _lib_placeholders__WEBPACK_IMPORTED_MODULE_8__/* .productPlaceholder */ .Hb,
        alt: item === null || item === void 0 ? void 0 : item.name,
        layout: "fill",
        objectFit: "contain"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
      className: "text-sm font-semibold text-heading text-center px-4 pb-4 block",
      children: item.name
    })]
  });
};

function SolidBoxedCategoryMenu({
  items
}) {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
  const {
    isRTL
  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_4__/* .useIsRTL */ .S)();
  const prevRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const nextRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const breakpoints = {
    320: {
      slidesPerView: 2
    },
    440: {
      slidesPerView: 3
    },
    620: {
      slidesPerView: 4
    },
    820: {
      slidesPerView: 5
    },
    1100: {
      slidesPerView: 6
    },
    1280: {
      slidesPerView: 7
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: "relative",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_7__/* .Swiper */ .tq, {
      id: "category-card-menu",
      modules: [_components_ui_slider__WEBPACK_IMPORTED_MODULE_7__/* .Navigation */ .W_],
      navigation: {
        prevEl: prevRef.current,
        // Assert non-null
        nextEl: nextRef.current // Assert non-null

      },
      breakpoints: breakpoints,
      slidesPerView: 7,
      spaceBetween: 10,
      children: items === null || items === void 0 ? void 0 : items.map((category, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_7__/* .SwiperSlide */ .o5, {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(CategoryItem, {
          item: category
        })
      }, idx))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      ref: prevRef,
      className: "banner-slider-prev w-8 h-8 flex items-center justify-center text-heading bg-light shadow-300 outline-none rounded-full absolute top-1/2 -mt-4 z-10 cursor-pointer -start-3 lg:-start-4 focus:outline-none",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
        className: "sr-only",
        children: t('text-previous')
      }), isRTL ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_icons_arrow_next__WEBPACK_IMPORTED_MODULE_6__/* .ArrowNextIcon */ .z, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_5__/* .ArrowPrevIcon */ .W, {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      ref: nextRef,
      className: "banner-slider-next w-8 h-8 flex items-center justify-center text-heading bg-light shadow-300 outline-none rounded-full absolute top-1/2 -mt-4 z-10 cursor-pointer -end-3 lg:-end-4 focus:outline-none",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
        className: "sr-only",
        children: t('text-next')
      }), isRTL ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_icons_arrow_prev__WEBPACK_IMPORTED_MODULE_5__/* .ArrowPrevIcon */ .W, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_icons_arrow_next__WEBPACK_IMPORTED_MODULE_6__/* .ArrowNextIcon */ .z, {})]
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SolidBoxedCategoryMenu);
});

/***/ }),

/***/ 8972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useIsRTL)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const localeRTLList = ['ar', 'he'];
function useIsRTL() {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  if (locale && localeRTLList.includes(locale)) {
    return {
      isRTL: true,
      alignLeft: 'right',
      alignRight: 'left'
    };
  }

  return {
    isRTL: false,
    alignLeft: 'left',
    alignRight: 'right'
  };
}

/***/ })

};
;