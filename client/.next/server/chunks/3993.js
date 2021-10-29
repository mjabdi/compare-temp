"use strict";
exports.id = 3993;
exports.ids = [3993];
exports.modules = {

/***/ 6445:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const ChevronLeft = ({
  width,
  height,
  strokeWidth = 2,
  className
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
    width: width,
    height: height,
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: strokeWidth,
      d: "M15 19l-7-7 7-7"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronLeft);

/***/ }),

/***/ 8390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const ChevronRight = ({
  width,
  height,
  strokeWidth = 2,
  className
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
    width: width,
    height: height,
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: strokeWidth,
      d: "M9 5l7 7-7 7"
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChevronRight);

/***/ }),

/***/ 9587:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iv": () => (/* binding */ AttributesProvider),
/* harmony export */   "Ch": () => (/* binding */ useAttributes)
/* harmony export */ });
/* unused harmony export AttributesContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {};
const AttributesContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(initialState);
AttributesContext.displayName = 'AttributesContext';
const AttributesProvider = props => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(initialState);
  const value = react__WEBPACK_IMPORTED_MODULE_0___default().useMemo(() => ({
    attributes: state,
    setAttributes: dispatch
  }), [state]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(AttributesContext.Provider, _objectSpread({
    value: value
  }, props));
};
const useAttributes = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(AttributesContext);

  if (context === undefined) {
    throw new Error(`useAttributes must be used within a SettingsProvider`);
  }

  return context;
};

/***/ }),

/***/ 8490:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





const CategoryBadges = ({
  onClose,
  categories,
  basePath
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');

  const handleClick = path => {
    next_router__WEBPACK_IMPORTED_MODULE_0___default().push(path);

    if (onClose) {
      onClose();
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "w-full mt-4 md:mt-6 pt-4 md:pt-6 flex flex-row items-start border-t border-border-200 border-opacity-60",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
      className: "text-sm font-semibold text-heading capitalize me-6 py-1",
      children: t('text-categories')
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: "flex flex-row flex-wrap",
      children: categories === null || categories === void 0 ? void 0 : categories.map(category => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
        onClick: () => handleClick(`${basePath}?category=${category.slug}`),
        className: "lowercase text-sm text-heading tracking-wider whitespace-nowrap py-1 px-2.5 bg-transparent border border-border-200 rounded me-2 mb-2 transition-colors hover:border-accent hover:text-accent focus:outline-none focus:bg-opacity-100",
        children: category.name
      }, category.id))
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CategoryBadges);

/***/ }),

/***/ 3993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6126);
/* harmony import */ var _components_ui_back_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5654);
/* harmony import */ var _components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7678);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1817);
/* harmony import */ var _components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3492);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_get_variations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7298);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6414);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8718);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_ui_truncate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9219);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3783);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _category_badges__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8490);
/* harmony import */ var _variation_price__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9816);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1103);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1219);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _variation_groups__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(3684);
/* harmony import */ var _lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7235);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(4652);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(1199);
/* harmony import */ var react_waypoint__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_waypoint__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(3818);
/* harmony import */ var _attributes_context__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(9587);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_4__]);
_components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






























const Details = ({
  product,
  backBtn = true,
  isModal = false
}) => {
  var _image$original, _selectedVariation;

  const {
    name,
    image,
    //could only had image we need to think it also
    description,
    unit,
    categories,
    gallery,
    type,
    quantity,
    shop,
    slug
  } = product !== null && product !== void 0 ? product : {};
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.useTranslation)('common');
  const [_, setShowStickyShortDetails] = (0,jotai__WEBPACK_IMPORTED_MODULE_17__.useAtom)(_store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_22__/* .stickyShortDetailsAtom */ .f);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
  const {
    closeModal
  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_20__/* .useModalAction */ .SO)();
  const {
    attributes
  } = (0,_attributes_context__WEBPACK_IMPORTED_MODULE_23__/* .useAttributes */ .Ch)();
  const {
    price,
    basePrice,
    discount
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_3__/* .default */ .ZP)({
    amount: product !== null && product !== void 0 && product.sale_price ? product === null || product === void 0 ? void 0 : product.sale_price : product === null || product === void 0 ? void 0 : product.price,
    baseAmount: product === null || product === void 0 ? void 0 : product.price
  });

  const navigate = path => {
    router.push(path);
    closeModal();
  };

  const variations = (0,react__WEBPACK_IMPORTED_MODULE_7__.useMemo)(() => (0,_lib_get_variations__WEBPACK_IMPORTED_MODULE_6__/* .getVariations */ .y)(product === null || product === void 0 ? void 0 : product.variations), [product === null || product === void 0 ? void 0 : product.variations]);
  const isSelected = (0,_lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_19__/* .isVariationSelected */ .V)(variations, attributes);
  let selectedVariation = {};

  if (isSelected) {
    var _product$variation_op;

    selectedVariation = product === null || product === void 0 ? void 0 : (_product$variation_op = product.variation_options) === null || _product$variation_op === void 0 ? void 0 : _product$variation_op.find(o => lodash_isEqual__WEBPACK_IMPORTED_MODULE_8___default()(o.options.map(v => v.value).sort(), Object.values(attributes).sort()));
  }

  const scrollDetails = () => {
    react_scroll__WEBPACK_IMPORTED_MODULE_11__.scroller.scrollTo('details', {
      smooth: true,
      offset: -80
    });
  };

  const onWaypointPositionChange = ({
    currentPosition
  }) => {
    if (!currentPosition || currentPosition === 'above') {
      setShowStickyShortDetails(true);
    }
  };

  const hasVariations = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_9___default()(variations);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("article", {
    className: "rounded-lg bg-light",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
      className: "flex flex-col md:flex-row border-b border-border-200 border-opacity-70",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
        className: "md:w-1/2 p-6 pt-10 lg:p-14 xl:p-16",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
          className: "flex items-center justify-between mb-8 lg:mb-10",
          children: [backBtn && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_ui_back_button__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {}), discount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
            className: "rounded-full text-xs leading-6 font-semibold px-3 bg-yellow-500 text-light ms-auto",
            children: discount
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
          className: "product-gallery h-full",
          children: !!(gallery !== null && gallery !== void 0 && gallery.length) ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_ui_thumb_carousel__WEBPACK_IMPORTED_MODULE_4__/* .ThumbsCarousel */ .X, {
            gallery: gallery
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
            className: "w-full h-full flex items-center justify-center",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_0__/* .Image */ .E, {
              src: (_image$original = image === null || image === void 0 ? void 0 : image.original) !== null && _image$original !== void 0 ? _image$original : _lib_placeholders__WEBPACK_IMPORTED_MODULE_16__/* .productPlaceholder */ .Hb,
              alt: name,
              width: 450,
              height: 450
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
        className: "flex flex-col items-start md:w-1/2 p-5 pt-10 lg:p-14 xl:p-16",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(react_waypoint__WEBPACK_IMPORTED_MODULE_21__.Waypoint, {
          onLeave: () => setShowStickyShortDetails(true),
          onEnter: () => setShowStickyShortDetails(false),
          onPositionChange: onWaypointPositionChange,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
            className: "w-full",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("h1", _objectSpread(_objectSpread({
              className: classnames__WEBPACK_IMPORTED_MODULE_24___default()(`font-semibold text-lg md:text-xl xl:text-2xl tracking-tight text-heading`, {
                'cursor-pointer transition-colors hover:text-accent': isModal
              })
            }, isModal && {
              onClick: () => navigate(`${_lib_routes__WEBPACK_IMPORTED_MODULE_15__/* .ROUTES.PRODUCT */ .Z.PRODUCT}/${slug}`)
            }), {}, {
              children: name
            })), unit && !hasVariations && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("span", {
              className: "text-sm font-normal text-body mt-2 md:mt-3 block",
              children: unit
            }), description && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
              className: "mt-3 md:mt-4 text-body text-sm leading-7",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_ui_truncate__WEBPACK_IMPORTED_MODULE_10__/* .default */ .Z, _objectSpread(_objectSpread({
                character: 150
              }, !isModal && {
                onClick: () => scrollDetails(),
                compressText: 'common:text-see-more'
              }), {}, {
                children: description
              }))
            }), hasVariations ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
                className: "my-5 md:my-10 flex items-center",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_variation_price__WEBPACK_IMPORTED_MODULE_13__/* .default */ .Z, {
                  selectedVariation: selectedVariation,
                  minPrice: product.min_price,
                  maxPrice: product.max_price
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_variation_groups__WEBPACK_IMPORTED_MODULE_18__/* .default */ .Z, {
                  variations: variations
                })
              })]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("span", {
              className: "my-5 md:my-10 flex items-center",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("ins", {
                className: "text-2xl md:text-3xl font-semibold text-accent no-underline",
                children: price
              }), basePrice && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("del", {
                className: "text-sm md:text-base font-normal text-muted ms-2",
                children: basePrice
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
              className: "mt-4 md:mt-6 flex flex-col lg:flex-row items-center",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("div", {
                className: "mb-3 lg:mb-0 w-full lg:max-w-[400px]",
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_2__/* .AddToCart */ .o, {
                  data: product,
                  variant: "big",
                  variation: selectedVariation,
                  disabled: ((_selectedVariation = selectedVariation) === null || _selectedVariation === void 0 ? void 0 : _selectedVariation.is_disable) || !isSelected
                })
              })
            })]
          })
        }), !!(categories !== null && categories !== void 0 && categories.length) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx(_category_badges__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
          categories: categories,
          basePath: `/${type === null || type === void 0 ? void 0 : type.slug}`,
          onClose: closeModal
        }), (shop === null || shop === void 0 ? void 0 : shop.name) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)("div", {
          className: "flex items-center mt-2",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("span", {
            className: "text-sm font-semibold text-heading capitalize me-6 py-1",
            children: t('common:text-sellers')
          }), shop === null || shop === void 0 ? void 0 : shop.name]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsxs)(react_scroll__WEBPACK_IMPORTED_MODULE_11__.Element, {
      name: "details",
      className: "py-4 px-5 lg:px-16 lg:py-14 border-b border-border-200 border-opacity-70",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("h2", {
        className: "text-lg text-heading tracking-tight font-semibold mb-4 md:mb-6",
        children: t('text-details')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__.jsx("p", {
        className: "text-sm text-body",
        children: description
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);
});

/***/ }),

/***/ 3684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ variation_groups)
});

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/ui/attribute.tsx
const _excluded = ["value", "active", "className", "color"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const Attribute = _ref => {
  let {
    value,
    active,
    className,
    color
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const classes = external_classnames_default()({
    'px-4 py-3 text-sm border rounded text-heading bg-gray-50 border-border-200': className !== 'color',
    '!text-light !bg-accent !border-accent': active && className !== 'color',
    'h-11 w-11 p-0.5 flex items-center justify-center border-2 rounded-full border-transparent': className === 'color',
    '!border-accent': active && className === 'color'
  }, 'cursor-pointer');
  return /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread({
    className: classes
  }, props), {}, {
    children: className === 'color' ? /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "w-full h-full rounded-full border border-border-200",
      style: {
        backgroundColor: color
      }
    }) : value
  }));
};

/* harmony default export */ const ui_attribute = (Attribute);
// EXTERNAL MODULE: ./src/components/products/details/attributes.context.tsx
var attributes_context = __webpack_require__(9587);
;// CONCATENATED MODULE: ./src/components/products/details/variation-groups.tsx
function variation_groups_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function variation_groups_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { variation_groups_ownKeys(Object(source), true).forEach(function (key) { variation_groups_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { variation_groups_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function variation_groups_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const VariationGroups = ({
  variations
}) => {
  const {
    attributes,
    setAttributes
  } = (0,attributes_context/* useAttributes */.Ch)();
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: Object.keys(variations).map((variationName, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "py-4 border-b border-border-200  border-opacity-70 first:pt-0 flex items-center",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-sm font-semibold text-heading leading-none capitalize me-4 min-w-[60px] inline-block",
        children: [variationName, ":"]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-full flex space-s-4 overflow-x-auto",
        children: variations[variationName].map(attribute => /*#__PURE__*/jsx_runtime_.jsx(ui_attribute, {
          className: variationName,
          color: attribute.meta ? attribute.meta : attribute === null || attribute === void 0 ? void 0 : attribute.value,
          active: attributes[variationName] === attribute.value,
          value: attribute.value,
          onClick: () => setAttributes(prev => variation_groups_objectSpread(variation_groups_objectSpread({}, prev), {}, {
            [variationName]: attribute.value
          }))
        }, attribute.id))
      })]
    }, index))
  });
};

/* harmony default export */ const variation_groups = (VariationGroups);

/***/ }),

/***/ 9816:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ VariationPrice)
/* harmony export */ });
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1817);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8718);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function VariationPrice({
  selectedVariation,
  minPrice,
  maxPrice
}) {
  const {
    price,
    basePrice
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_0__/* .default */ .ZP)(selectedVariation && {
    amount: selectedVariation.sale_price ? selectedVariation.sale_price : selectedVariation.price,
    baseAmount: selectedVariation.price
  });
  const {
    price: min_price
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_0__/* .default */ .ZP)({
    amount: minPrice
  });
  const {
    price: max_price
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_0__/* .default */ .ZP)({
    amount: maxPrice
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
    className: "flex items-center",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("ins", {
      className: "text-2xl md:text-3xl font-semibold text-accent no-underline",
      children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_1___default()(selectedVariation) ? `${price}` : `${min_price} - ${max_price}`
    }), basePrice && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("del", {
      className: "text-sm md:text-base font-normal text-muted ms-2",
      children: basePrice
    })]
  });
}

/***/ }),

/***/ 5654:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ back_button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/arrow-narrow-left.tsx


const ArrowNarrowLeft = ({
  width,
  height,
  strokeWidth = 2,
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: width,
    height: height,
    className: className,
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: strokeWidth,
      d: "M7 16l-4-4m0 0l4-4m-4 4h18"
    })
  });
};

/* harmony default export */ const arrow_narrow_left = (ArrowNarrowLeft);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/ui/back-button.tsx







const BackButton = () => {
  const router = (0,router_.useRouter)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
    className: "inline-flex items-center justify-center text-accent font-semibold transition-colors hover:text-accent-hover focus:text-accent-hover focus:outline-none",
    onClick: router.back,
    children: [/*#__PURE__*/jsx_runtime_.jsx(arrow_narrow_left, {
      className: external_classnames_default()('w-5 h-5 me-2', {
        'transform rotate-180': router.locale === 'ar' || router.locale === 'he'
      }),
      strokeWidth: 1.7
    }), t('text-back')]
  });
};

/* harmony default export */ const back_button = (BackButton);

/***/ }),

/***/ 9975:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W_": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation),
/* harmony export */   "o3": () => (/* reexport safe */ swiper__WEBPACK_IMPORTED_MODULE_0__.Thumbs),
/* harmony export */   "tq": () => (/* reexport safe */ swiper_react__WEBPACK_IMPORTED_MODULE_1__.Swiper),
/* harmony export */   "o5": () => (/* reexport safe */ swiper_react__WEBPACK_IMPORTED_MODULE_1__.SwiperSlide)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4074);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2156);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_0__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_1__, swiper__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





});

/***/ }),

/***/ 3492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ ThumbsCarousel)
/* harmony export */ });
/* harmony import */ var _components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6445);
/* harmony import */ var _components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8390);
/* harmony import */ var _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9975);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6126);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1219);
/* harmony import */ var _lib_locals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8972);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__]);
_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










// product gallery breakpoints
const galleryCarouselBreakpoints = {
  320: {
    slidesPerView: 2
  },
  480: {
    slidesPerView: 3
  },
  640: {
    slidesPerView: 3
  },
  800: {
    slidesPerView: 4
  }
};
const swiperParams = {
  slidesPerView: 1,
  spaceBetween: 0
};
const ThumbsCarousel = ({
  gallery
}) => {
  const {
    0: thumbsSwiper,
    1: setThumbsSwiper
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const {
    isRTL
  } = (0,_lib_locals__WEBPACK_IMPORTED_MODULE_6__/* .useIsRTL */ .S)();
  const prevRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const nextRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, _objectSpread(_objectSpread({
        id: "productGallery",
        modules: [_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Navigation */ .W_, _components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Thumbs */ .o3],
        thumbs: {
          swiper: thumbsSwiper
        },
        navigation: {
          prevEl: prevRef.current,
          // Assert non-null
          nextEl: nextRef.current // Assert non-null

        }
      }, swiperParams), {}, {
        children: gallery === null || gallery === void 0 ? void 0 : gallery.map(item => {
          var _item$original;

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
            className: "flex items-center justify-center selection:bg-transparent",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
              src: (_item$original = item === null || item === void 0 ? void 0 : item.original) !== null && _item$original !== void 0 ? _item$original : _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__/* .productPlaceholder */ .Hb,
              alt: `Product gallery ${item.id}`,
              width: 450,
              height: 450
            })
          }, `product-gallery-${item.id}`);
        })
      })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        ref: prevRef,
        className: "product-gallery-prev cursor-pointer absolute top-2/4 -start-4 md:-start-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-gray-100",
        children: isRTL ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
          className: "w-4 h-4"
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
          className: "w-4 h-4"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        ref: nextRef,
        className: "product-gallery-next cursor-pointer absolute top-2/4 -end-4 md:-end-5 z-10 -mt-4 md:-mt-5 w-8 h-8 md:w-9 md:h-9 rounded-full bg-light shadow-xl border border-border-200 border-opacity-70 flex items-center justify-center text-heading transition-all duration-200 hover:bg-gray-100",
        children: isRTL ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_icons_chevron_left__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
          className: "w-4 h-4"
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_icons_chevron_right__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {
          className: "w-4 h-4"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: "max-w-md mt-5 lg:mt-8 mx-auto relative lg:pb-2",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .Swiper */ .tq, {
        id: "productGalleryThumbs",
        onSwiper: setThumbsSwiper,
        spaceBetween: 20,
        watchSlidesProgress: true,
        freeMode: true,
        observer: true,
        observeParents: true,
        breakpoints: galleryCarouselBreakpoints,
        children: gallery === null || gallery === void 0 ? void 0 : gallery.map(item => {
          var _item$thumbnail;

          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ui_slider__WEBPACK_IMPORTED_MODULE_2__/* .SwiperSlide */ .o5, {
            className: "flex items-center justify-center cursor-pointer rounded overflow-hidden border border-border-200 border-opacity-75 hover:opacity-75",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
              src: (_item$thumbnail = item === null || item === void 0 ? void 0 : item.thumbnail) !== null && _item$thumbnail !== void 0 ? _item$thumbnail : _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__/* .productPlaceholder */ .Hb,
              alt: `Product thumb gallery ${item.id}`,
              width: 80,
              height: 80
            })
          }, `product-thumb-gallery-${item.id}`);
        })
      })
    })]
  });
};
});

/***/ }),

/***/ 7298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ getVariations)
/* harmony export */ });
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3089);
/* harmony import */ var lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_groupBy__WEBPACK_IMPORTED_MODULE_0__);

function getVariations(variations) {
  if (!variations) return {};
  return lodash_groupBy__WEBPACK_IMPORTED_MODULE_0___default()(variations, 'attribute.slug');
}

/***/ }),

/***/ 7235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ isVariationSelected)
/* harmony export */ });
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8718);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0__);

function isVariationSelected(variations, attributes) {
  if (lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(variations)) return true;

  if (!lodash_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(attributes)) {
    return Object.keys(variations).every(variation => attributes.hasOwnProperty(variation));
  }

  return false;
}

/***/ }),

/***/ 3818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ stickyShortDetailsAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_0__);

const stickyShortDetailsAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(false);

/***/ })

};
;