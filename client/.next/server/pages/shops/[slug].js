"use strict";
(() => {
var exports = {};
exports.id = 2601;
exports.ids = [2601];
exports.modules = {

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

/***/ 5740:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ShopPage),
  "getStaticPaths": () => (/* reexport */ getStaticPaths),
  "getStaticProps": () => (/* reexport */ getStaticProps)
});

// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(6126);
// EXTERNAL MODULE: ./src/lib/use-window-size.ts + 1 modules
var use_window_size = __webpack_require__(8572);
// EXTERNAL MODULE: ../node_modules/next/dynamic.js
var dynamic = __webpack_require__(5218);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/components/shops/sidebar.tsx
var sidebar = __webpack_require__(5928);
// EXTERNAL MODULE: ./src/framework/rest/app/settings.query.ts
var settings_query = __webpack_require__(6566);
// EXTERNAL MODULE: ./src/framework/rest/products/products.query.ts
var products_query = __webpack_require__(2317);
// EXTERNAL MODULE: ./src/framework/rest/shops/shops.query.ts
var shops_query = __webpack_require__(3788);
// EXTERNAL MODULE: ./src/framework/rest/utils/endpoints.ts
var endpoints = __webpack_require__(874);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: external "react-query/hydration"
var hydration_ = __webpack_require__(9475);
;// CONCATENATED MODULE: ./src/framework/rest/ssr/shop.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







 // This function gets called at build time

async function getStaticPaths({
  locales
}) {
  const {
    data
  } = await (0,shops_query/* fetchShops */.NB)({
    queryKey: [endpoints/* API_ENDPOINTS.SHOPS */.P.SHOPS, {
      is_active: 1
    }]
  });
  const paths = data === null || data === void 0 ? void 0 : data.flatMap(shop => locales === null || locales === void 0 ? void 0 : locales.map(locale => ({
    params: {
      slug: shop.slug
    },
    locale
  }))); // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.

  return {
    paths,
    fallback: 'blocking'
  };
} // This also gets called at build time

const getStaticProps = async ({
  params,
  locale
}) => {
  const queryClient = new external_react_query_.QueryClient();
  await queryClient.prefetchQuery(endpoints/* API_ENDPOINTS.SETTINGS */.P.SETTINGS, settings_query/* fetchSettings */.w);

  try {
    const shop = await (0,shops_query/* fetchShop */.Dh)(params.slug);
    await queryClient.prefetchInfiniteQuery([endpoints/* API_ENDPOINTS.PRODUCTS */.P.PRODUCTS, {
      shop_id: shop === null || shop === void 0 ? void 0 : shop.id
    }], products_query/* fetchProducts */.t2);
    return {
      props: _objectSpread(_objectSpread({
        data: {
          shop
        }
      }, await (0,serverSideTranslations_.serverSideTranslations)(locale, ['common'])), {}, {
        dehydratedState: JSON.parse(JSON.stringify((0,hydration_.dehydrate)(queryClient)))
      }),
      revalidate: 120
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};
// EXTERNAL MODULE: ./src/lib/placeholders.tsx + 4 modules
var placeholders = __webpack_require__(1219);
// EXTERNAL MODULE: ./src/framework/rest/products/products.tsx + 1 modules
var products = __webpack_require__(1225);
// EXTERNAL MODULE: ./src/components/layouts/layout.tsx + 10 modules
var layout = __webpack_require__(6578);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/pages/shops/[slug].tsx











const CartCounterButton = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(1817), __webpack_require__.e(7580)]).then(__webpack_require__.bind(__webpack_require__, 7580)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7580)],
    modules: ["shops/[slug].tsx -> " + '@components/cart/cart-counter-button']
  }
});
function ShopPage({
  data
}) {
  var _ref, _data$shop, _data$shop$cover_imag;

  const {
    width
  } = (0,use_window_size/* useWindowSize */.i)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('banner');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-gray-100 flex flex-col lg:flex-row lg:items-start lg:p-8",
    children: [/*#__PURE__*/jsx_runtime_.jsx(sidebar.default, {
      data: data,
      className: "sticky top-24 lg:top-28"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col w-full p-4 lg:p-0 lg:ps-8",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "relative rounded w-full overflow-hidden h-full",
        children: /*#__PURE__*/jsx_runtime_.jsx(ui_image/* Image */.E, {
          alt: t('heading'),
          src: (_ref = data === null || data === void 0 ? void 0 : (_data$shop = data.shop) === null || _data$shop === void 0 ? void 0 : (_data$shop$cover_imag = _data$shop.cover_image) === null || _data$shop$cover_imag === void 0 ? void 0 : _data$shop$cover_imag.original) !== null && _ref !== void 0 ? _ref : placeholders/* productPlaceholder */.Hb,
          layout: "responsive",
          width: 2340,
          height: 870,
          className: "w-full h-full"
        })
      }), (data === null || data === void 0 ? void 0 : data.shop) && /*#__PURE__*/jsx_runtime_.jsx(products/* default */.Z, {
        shopId: data === null || data === void 0 ? void 0 : data.shop.id,
        layout: "shop"
      })]
    }), width > 1023 && /*#__PURE__*/jsx_runtime_.jsx(CartCounterButton, {})]
  });
}
ShopPage.getLayout = layout/* getLayout */.G;

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

/***/ 8718:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

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

/***/ 9081:
/***/ ((module) => {

module.exports = require("react-content-loader");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9475:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4939,5218,9517,8926,2317,2395,6902,6578,7993,3229,6098,1859,1225,8473,9219,8111,5928,8717], () => (__webpack_exec__(5740)));
module.exports = __webpack_exports__;

})();