"use strict";
exports.id = 3809;
exports.ids = [3809];
exports.modules = {

/***/ 4920:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9204);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5218);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3993);
/* harmony import */ var _short_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3203);
/* harmony import */ var _store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3818);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _attributes_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9587);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_details__WEBPACK_IMPORTED_MODULE_3__]);
_details__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];










const RelatedProducts = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__.default)(() => Promise.all(/* import() */[__webpack_require__.e(7679), __webpack_require__.e(9202)]).then(__webpack_require__.bind(__webpack_require__, 9202)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9202)],
    modules: ["../components/products/details/popup.tsx -> " + './related-products']
  }
});

const Popup = ({
  product,
  loading
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
  const [showStickyShortDetails] = (0,jotai__WEBPACK_IMPORTED_MODULE_6__.useAtom)(_store_sticky_short_details_atom__WEBPACK_IMPORTED_MODULE_5__/* .stickyShortDetailsAtom */ .f);
  const {
    id,
    related_products
  } = product !== null && product !== void 0 ? product : {};
  if (loading || !product) return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    className: "w-96 flex justify-center items-center h-96 bg-light relative",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ui_loaders_spinner_spinner__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
      text: t('common:text-loading')
    })
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_attributes_context__WEBPACK_IMPORTED_MODULE_7__/* .AttributesProvider */ .iv, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("article", {
      className: "bg-light w-full max-w-6xl xl:min-w-[1152px] relative z-[51] md:rounded-xl",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_short_details__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
        product: product,
        isSticky: showStickyShortDetails
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_details__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
        product: product,
        backBtn: false,
        isModal: true
      }), (related_products === null || related_products === void 0 ? void 0 : related_products.length) > 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "p-5 md:pb-10 lg:p-14 xl:p-16",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(RelatedProducts, {
          products: related_products,
          currentProductId: id
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);
});

/***/ }),

/***/ 3203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8579);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7678);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1817);
/* harmony import */ var _lib_get_variations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7298);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6414);
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8718);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _variation_price__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9816);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1103);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4652);
/* harmony import */ var _variation_groups__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3684);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1219);
/* harmony import */ var _lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7235);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _attributes_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(9587);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__);




















const ShortDetails = ({
  product,
  isSticky
}) => {
  var _ref, _selectedVariation;

  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_9__.useTranslation)('common');
  const {
    closeModal
  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_11__/* .useModalAction */ .SO)();
  const {
    attributes
  } = (0,_attributes_context__WEBPACK_IMPORTED_MODULE_16__/* .useAttributes */ .Ch)();
  const {
    name,
    slug,
    image,
    unit,
    quantity,
    min_price,
    max_price
  } = product !== null && product !== void 0 ? product : {};

  const navigate = path => {
    router.push(path);
    closeModal();
  };

  const {
    price,
    basePrice,
    discount
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP)({
    amount: product !== null && product !== void 0 && product.sale_price ? product === null || product === void 0 ? void 0 : product.sale_price : product === null || product === void 0 ? void 0 : product.price,
    baseAmount: product === null || product === void 0 ? void 0 : product.price
  });
  const variations = (0,react__WEBPACK_IMPORTED_MODULE_15__.useMemo)(() => (0,_lib_get_variations__WEBPACK_IMPORTED_MODULE_5__/* .getVariations */ .y)(product === null || product === void 0 ? void 0 : product.variations), [product === null || product === void 0 ? void 0 : product.variations]);
  const isSelected = (0,_lib_is_variation_selected__WEBPACK_IMPORTED_MODULE_14__/* .isVariationSelected */ .V)(variations, attributes);
  let selectedVariation = {};

  if (isSelected) {
    var _product$variation_op;

    selectedVariation = product === null || product === void 0 ? void 0 : (_product$variation_op = product.variation_options) === null || _product$variation_op === void 0 ? void 0 : _product$variation_op.find(o => lodash_isEqual__WEBPACK_IMPORTED_MODULE_6___default()(o.options.map(v => v.value).sort(), Object.values(attributes).sort()));
  }

  const hasVariations = !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_7___default()(variations);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('max-w-6xl h-auto w-full hidden md:block bg-light fixed top-0 left-1/2 transform -translate-x-1/2 z-50 px-8 py-6 shadow transition-all duration-300', {
      'invisible opacity-0 -translate-y-1/2': !isSticky,
      'visible opacity-100 translate-y-0': isSticky
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('border border-border-200 border-opacity-70 rounded relative flex items-center justify-center overflow-hidden flex-shrink-0', {
          'w-28 h-28': !hasVariations,
          'w-40 lg:w-52 h-40 lg:h-52': hasVariations
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__.default, {
          src: (_ref = image === null || image === void 0 ? void 0 : image.original) !== null && _ref !== void 0 ? _ref : _lib_placeholders__WEBPACK_IMPORTED_MODULE_13__/* .productPlaceholder */ .Hb,
          alt: name,
          layout: "fill",
          objectFit: "contain",
          className: "product-image"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: "px-8 flex flex-col justify-center me-auto overflow-hidden",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("h3", {
          className: "font-semibold text-lg lg:text-xl tracking-tight text-heading truncate cursor-pointer transition-colors hover:text-accent",
          onClick: () => navigate(`${_lib_routes__WEBPACK_IMPORTED_MODULE_10__/* .ROUTES.PRODUCT */ .Z.PRODUCT}/${slug}`),
          title: name,
          children: name
        }), unit && !hasVariations ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
          className: "text-sm font-normal text-body mt-2 block",
          children: unit
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("span", {
          className: "flex items-center mt-2",
          children: hasVariations && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_variation_price__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
            selectedVariation: selectedVariation,
            minPrice: min_price,
            maxPrice: max_price
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('w-full flex flex-shrink-0', {
          'max-w-max': !hasVariations,
          'max-w-[40%]': hasVariations
        }),
        children: [!hasVariations && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("span", {
          className: "me-8 flex items-center ",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("ins", {
            className: "text-xl lg:text-2xl font-semibold text-accent no-underline",
            children: price
          }), basePrice && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("del", {
            className: "text-sm lg:text-base font-normal text-muted ms-2",
            children: basePrice
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)("div", {
          className: "w-full",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()('flex flex-col overflow-y-auto justify-center', {
              'h-[140px]': hasVariations
            }),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_variation_groups__WEBPACK_IMPORTED_MODULE_12__/* .default */ .Z, {
              variations: variations
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
              'mt-4': hasVariations
            }),
            children: quantity > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx(_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_3__/* .AddToCart */ .o, {
              data: product,
              variant: "big",
              variation: selectedVariation,
              disabled: ((_selectedVariation = selectedVariation) === null || _selectedVariation === void 0 ? void 0 : _selectedVariation.is_disable) || !isSelected
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx("div", {
              className: "bg-red-500 rounded text-sm text-light px-3 py-2",
              children: t('text-out-stock')
            })
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShortDetails);

/***/ }),

/***/ 5093:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_products_details_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4920);
/* harmony import */ var _framework_products_products_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2317);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_products_details_popup__WEBPACK_IMPORTED_MODULE_0__]);
_components_products_details_popup__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];




const ProductPopup = ({
  productSlug
}) => {
  const {
    data,
    isLoading: loading
  } = (0,_framework_products_products_query__WEBPACK_IMPORTED_MODULE_1__/* .useProductQuery */ .FA)(productSlug);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_products_details_popup__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
    product: data,
    loading: loading
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPopup);
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