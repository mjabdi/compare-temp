"use strict";
(() => {
var exports = {};
exports.id = 7905;
exports.ids = [7905];
exports.modules = {

/***/ 6566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ fetchSettings),
/* harmony export */   "n": () => (/* binding */ useSettingsQuery)
/* harmony export */ });
/* harmony import */ var _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3857);
/* harmony import */ var _framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);




class SettingsService extends _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__/* .BaseService */ .b {}

const settingsService = new SettingsService(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS);
const fetchSettings = async () => {
  const {
    data
  } = await settingsService.findAll();
  return {
    settings: data
  };
};
const useSettingsQuery = () => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS, fetchSettings);
};

/***/ }),

/***/ 8717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ getStaticPaths),
/* harmony export */   "b": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _framework_app_settings_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6566);
/* harmony import */ var _framework_products_products_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2317);
/* harmony import */ var _framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(874);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3295);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9475);
/* harmony import */ var react_query_hydration__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_query_hydration__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // This function gets called at build time

async function getStaticPaths({
  locales
}) {
  var _products$data;

  const products = await (0,_framework_products_products_query__WEBPACK_IMPORTED_MODULE_1__/* .fetchProducts */ .t2)({
    queryKey: [_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.PRODUCTS */ .P.PRODUCTS, {
      limit: 100
    }]
  });
  const paths = products === null || products === void 0 ? void 0 : (_products$data = products.data) === null || _products$data === void 0 ? void 0 : _products$data.flatMap(product => locales === null || locales === void 0 ? void 0 : locales.map(locale => ({
    params: {
      slug: product.slug
    },
    locale
  })));
  return {
    paths,
    fallback: 'blocking'
  };
}
const getStaticProps = async ({
  params,
  locale
}) => {
  const slug = params === null || params === void 0 ? void 0 : params.slug;
  const queryClient = new react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();
  await queryClient.prefetchQuery(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS, _framework_app_settings_query__WEBPACK_IMPORTED_MODULE_0__/* .fetchSettings */ .w);

  try {
    const product = await (0,_framework_products_products_query__WEBPACK_IMPORTED_MODULE_1__/* .fetchProduct */ .MX)(slug);
    return {
      props: _objectSpread(_objectSpread({
        product
      }, await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_3__.serverSideTranslations)(locale, ['common'])), {}, {
        dehydratedState: JSON.parse(JSON.stringify((0,react_query_hydration__WEBPACK_IMPORTED_MODULE_5__.dehydrate)(queryClient)))
      }),
      revalidate: 60
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};

/***/ }),

/***/ 8572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ (useWindowSize_default()))
});

;// CONCATENATED MODULE: external "react-use/lib/useWindowSize"
const useWindowSize_namespaceObject = require("react-use/lib/useWindowSize");
var useWindowSize_default = /*#__PURE__*/__webpack_require__.n(useWindowSize_namespaceObject);
;// CONCATENATED MODULE: ./src/lib/use-window-size.ts


/***/ }),

/***/ 1747:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticPaths": () => (/* reexport safe */ _framework_ssr_product__WEBPACK_IMPORTED_MODULE_6__.F),
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_ssr_product__WEBPACK_IMPORTED_MODULE_6__.b),
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6578);
/* harmony import */ var _components_products_details_attributes_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9587);
/* harmony import */ var _components_products_details_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3993);
/* harmony import */ var _lib_use_window_size__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8572);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5218);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _framework_ssr_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8717);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_products_details_details__WEBPACK_IMPORTED_MODULE_2__]);
_components_products_details_details__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];








const RelatedProducts = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__.default)(() => Promise.all(/* import() */[__webpack_require__.e(7679), __webpack_require__.e(9202)]).then(__webpack_require__.bind(__webpack_require__, 9202)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9202)],
    modules: ["products/[slug].tsx -> " + '@components/products/details/related-products']
  }
});
const CartCounterButton = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__.default)(() => __webpack_require__.e(/* import() */ 7580).then(__webpack_require__.bind(__webpack_require__, 7580)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7580)],
    modules: ["products/[slug].tsx -> " + '@components/cart/cart-counter-button']
  }
});
function Product({
  product
}) {
  var _product$related_prod;

  const {
    width
  } = (0,_lib_use_window_size__WEBPACK_IMPORTED_MODULE_3__/* .useWindowSize */ .i)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_components_products_details_attributes_context__WEBPACK_IMPORTED_MODULE_1__/* .AttributesProvider */ .iv, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "bg-light min-h-screen",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_products_details_details__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
        product: product
      }), (product === null || product === void 0 ? void 0 : (_product$related_prod = product.related_products) === null || _product$related_prod === void 0 ? void 0 : _product$related_prod.length) > 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: "p-5 lg:p-14 xl:p-16",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(RelatedProducts, {
          products: product === null || product === void 0 ? void 0 : product.related_products,
          currentProductId: product === null || product === void 0 ? void 0 : product.id,
          gridClassName: "lg:grid-cols-4 2xl:grid-cols-5 !gap-3"
        })
      })]
    }), width > 1023 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(CartCounterButton, {})]
  });
}
Product.getLayout = _components_layouts_layout__WEBPACK_IMPORTED_MODULE_0__/* .getLayout */ .G;
});

/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3687:
/***/ ((module) => {

module.exports = require("camelcase-keys");

/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 8250:
/***/ ((module) => {

module.exports = require("jotai");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("jotai/utils");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 3089:
/***/ ((module) => {

module.exports = require("lodash/groupBy");

/***/ }),

/***/ 8718:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 6414:
/***/ ((module) => {

module.exports = require("lodash/isEqual");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3295:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1958:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9475:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 3783:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 1199:
/***/ ((module) => {

module.exports = require("react-waypoint");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4074:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 2156:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4939,5218,9517,8926,2317,2395,6902,6578,1817,2816,45,8328,7458,9219,3993], () => (__webpack_exec__(1747)));
module.exports = __webpack_exports__;

})();