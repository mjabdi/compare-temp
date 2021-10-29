"use strict";
(() => {
var exports = {};
exports.id = 4646;
exports.ids = [4646];
exports.modules = {

/***/ 6914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ShopsPage),
  "getStaticProps": () => (/* reexport */ getStaticProps)
});

// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/components/ui/not-found.tsx
var not_found = __webpack_require__(3229);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/lib/range-map.ts
var range_map = __webpack_require__(1088);
// EXTERNAL MODULE: ./src/components/ui/loaders/coupon-loader.tsx
var coupon_loader = __webpack_require__(4090);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/shops/grid-with-loader.tsx









const ShopsGridWithLoader = ({
  showLoaders,
  notFound,
  children,
  hasNextPage,
  isLoadingMore,
  onLoadMore,
  limit = 20
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');

  if (notFound) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg-gray-100 min-h-full pt-6 pb-8 px-4 lg:p-8",
      children: /*#__PURE__*/jsx_runtime_.jsx(not_found/* default */.Z, {
        text: "text-no-shops"
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "bg-light min-h-screen ",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "w-full max-w-6xl mx-auto flex flex-col p-8 pt-14",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-2xl text-heading font-bold mb-8",
        children: t('text-all-shops')
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
        children: showLoaders ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
          children: (0,range_map/* default */.Z)(limit, i => /*#__PURE__*/jsx_runtime_.jsx(coupon_loader/* default */.Z, {
            uniqueKey: `shops-${i}`
          }, i))
        }) : children
      }), hasNextPage && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex items-center justify-center mt-8 lg:mt-12",
        children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          onClick: onLoadMore,
          loading: isLoadingMore,
          children: t('text-load-more')
        })
      })]
    })
  });
};

/* harmony default export */ const grid_with_loader = (ShopsGridWithLoader);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(6126);
;// CONCATENATED MODULE: ./src/components/icons/map-pin.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const MapPin = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M256 0C161.896 0 85.333 76.563 85.333 170.667c0 28.25 7.063 56.26 20.49 81.104L246.667 506.5c1.875 3.396 5.448 5.5 9.333 5.5s7.458-2.104 9.333-5.5l140.896-254.813c13.375-24.76 20.438-52.771 20.438-81.021C426.667 76.563 350.104 0 256 0zm0 256c-47.052 0-85.333-38.281-85.333-85.333S208.948 85.334 256 85.334s85.333 38.281 85.333 85.333S303.052 256 256 256z",
      fill: "currentColor"
    })
  }));
};
// EXTERNAL MODULE: ./src/lib/format-address.ts
var format_address = __webpack_require__(2528);
// EXTERNAL MODULE: ./src/lib/routes.ts
var routes = __webpack_require__(1103);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(1420);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(8718);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
;// CONCATENATED MODULE: ./src/components/ui/cards/shop.tsx










const ShopCard = ({
  shop
}) => {
  var _shop$logo$thumbnail, _shop$logo;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const isNew = false;
  return /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
    href: `${routes/* ROUTES.SHOPS */.Z.SHOPS}/${shop.slug}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center p-5 border border-gray-200 rounded cursor-pointer relative",
      children: [isNew && /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-xs text-light px-2 py-1 rounded bg-blue-500 absolute top-2 end-2",
        children: t('common:text-new')
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-16 h-16 relative flex flex-shrink-0 items-center justify-center bg-gray-300 rounded-full overflow-hidden",
        children: /*#__PURE__*/jsx_runtime_.jsx(ui_image/* Image */.E, {
          alt: t('common:text-logo'),
          src: (_shop$logo$thumbnail = shop === null || shop === void 0 ? void 0 : (_shop$logo = shop.logo) === null || _shop$logo === void 0 ? void 0 : _shop$logo.thumbnail) !== null && _shop$logo$thumbnail !== void 0 ? _shop$logo$thumbnail : '/product-placeholder.svg',
          layout: "fill",
          objectFit: "cover"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col ms-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-lg font-semibold text-heading mb-2",
          children: shop === null || shop === void 0 ? void 0 : shop.name
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-xs text-body flex",
          children: [/*#__PURE__*/jsx_runtime_.jsx(MapPin, {
            className: "w-3.5 h-3.5 me-1 text-muted flex-shrink-0"
          }), !isEmpty_default()((0,format_address/* formatAddress */.T)(shop === null || shop === void 0 ? void 0 : shop.address)) ? (0,format_address/* formatAddress */.T)(shop === null || shop === void 0 ? void 0 : shop.address) : t('common:text-no-address')]
        })]
      })]
    })
  });
};

/* harmony default export */ const cards_shop = (ShopCard);
// EXTERNAL MODULE: ./src/components/ui/error-message.tsx
var error_message = __webpack_require__(3315);
// EXTERNAL MODULE: ./src/framework/rest/shops/shops.query.ts
var shops_query = __webpack_require__(3788);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/framework/rest/shops/shops.tsx






function Shops() {
  var _data$pages, _data$pages$, _data$pages$$data, _data$pages2, _data$pages3;

  const {
    data,
    isFetching: loading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    error
  } = (0,shops_query/* useShopsQuery */.uL)({
    is_active: 1
  });
  if (error) return /*#__PURE__*/jsx_runtime_.jsx(error_message.default, {
    message: error.message
  });

  function handleLoadMore() {
    fetchNextPage();
  }

  return /*#__PURE__*/jsx_runtime_.jsx(grid_with_loader, {
    notFound: !loading && !(data !== null && data !== void 0 && (_data$pages = data.pages) !== null && _data$pages !== void 0 && (_data$pages$ = _data$pages[0]) !== null && _data$pages$ !== void 0 && (_data$pages$$data = _data$pages$.data) !== null && _data$pages$$data !== void 0 && _data$pages$$data.length),
    isLoadingMore: loadingMore,
    hasNextPage: Boolean(hasNextPage),
    onLoadMore: handleLoadMore,
    showLoaders: loading && !(data !== null && data !== void 0 && (_data$pages2 = data.pages) !== null && _data$pages2 !== void 0 && _data$pages2.length),
    children: data === null || data === void 0 ? void 0 : (_data$pages3 = data.pages) === null || _data$pages3 === void 0 ? void 0 : _data$pages3.map((page, idx) => {
      var _page$data;

      return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
        children: page === null || page === void 0 ? void 0 : (_page$data = page.data) === null || _page$data === void 0 ? void 0 : _page$data.map(shop => /*#__PURE__*/jsx_runtime_.jsx(cards_shop, {
          shop: shop
        }, shop.id))
      }, idx);
    })
  });
}
// EXTERNAL MODULE: ./src/components/layouts/layout.tsx + 10 modules
var layout = __webpack_require__(6578);
// EXTERNAL MODULE: ./src/framework/rest/app/settings.query.ts
var settings_query = __webpack_require__(6566);
// EXTERNAL MODULE: ./src/framework/rest/groups/groups.query.ts
var groups_query = __webpack_require__(6296);
// EXTERNAL MODULE: ./src/framework/rest/utils/endpoints.ts
var endpoints = __webpack_require__(874);
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: external "react-query/hydration"
var hydration_ = __webpack_require__(9475);
;// CONCATENATED MODULE: ./src/framework/rest/ssr/shops.ts
function shops_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function shops_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { shops_ownKeys(Object(source), true).forEach(function (key) { shops_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { shops_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function shops_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const getStaticProps = async ({
  locale
}) => {
  const queryClient = new external_react_query_.QueryClient();
  await queryClient.prefetchQuery(endpoints/* API_ENDPOINTS.SETTINGS */.P.SETTINGS, settings_query/* fetchSettings */.w);
  await queryClient.prefetchQuery(endpoints/* API_ENDPOINTS.TYPE */.P.TYPE, groups_query/* fetchGroups */.bt, {
    staleTime: 60 * 1000
  });
  await queryClient.prefetchInfiniteQuery([endpoints/* API_ENDPOINTS.SHOPS */.P.SHOPS, {
    is_active: 1
  }], shops_query/* fetchShops */.NB);
  return {
    props: shops_objectSpread(shops_objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ['common', 'banner'])), {}, {
      dehydratedState: JSON.parse(JSON.stringify((0,hydration_.dehydrate)(queryClient)))
    })
  };
};
;// CONCATENATED MODULE: ./src/pages/shops/index.tsx




function ShopsPage() {
  return /*#__PURE__*/jsx_runtime_.jsx(Shops, {});
}
ShopsPage.getLayout = layout/* getLayout */.G;

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4939,5218,9517,8926,2317,2395,6902,6578,7993,3229,6098,8717,1794], () => (__webpack_exec__(6914)));
module.exports = __webpack_exports__;

})();