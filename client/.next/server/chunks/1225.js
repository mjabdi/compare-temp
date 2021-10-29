"use strict";
exports.id = 1225;
exports.ids = [1225];
exports.modules = {

/***/ 1225:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ products)
});

// EXTERNAL MODULE: ../node_modules/next/dynamic.js
var dynamic = __webpack_require__(5218);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/ui/error-message.tsx
var error_message = __webpack_require__(3315);
// EXTERNAL MODULE: ./src/framework/rest/products/products.query.ts
var products_query = __webpack_require__(2317);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/components/ui/not-found.tsx
var not_found = __webpack_require__(3229);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/lib/range-map.ts
var range_map = __webpack_require__(1088);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/products/grids/grid-with-loader.tsx









const styles = {
  standard: 'md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7',
  shop: 'lg:grid-cols-2 xl:grid-cols-4 3xl:grid-cols-6',
  minimal: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6',
  default: 'md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6'
};
const ProductLoader = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 4466).then(__webpack_require__.bind(__webpack_require__, 4466)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4466)],
    modules: ["../components/products/grids/grid-with-loader.tsx -> " + '@components/ui/loaders/product-loader']
  }
});

const GridWithLoader = ({
  showLoaders,
  limit = 20,
  children,
  notFound,
  hasNextPage,
  onLoadMore,
  isLoadingMore,
  layout
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');

  if (notFound) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg-gray-100 w-full min-h-full pt-6 pb-8 px-4 lg:p-8",
      children: /*#__PURE__*/jsx_runtime_.jsx(not_found/* default */.Z, {
        text: "text-not-found",
        className: "w-7/12 mx-auto"
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()('flex-1 bg-gray-100 pt-6 pb-8 px-4 lg:p-8 ', {
      'px-0 lg:px-0': layout === 'shop' || layout === 'modern',
      '!bg-transparent !p-0': layout === 'minimal'
    }),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: external_classnames_default()('grid grid-cols-1 sm:grid-cols-2 gap-3', {
        [styles.standard]: layout === 'standard',
        [styles.shop]: layout === 'shop',
        [styles.minimal]: layout === 'minimal',
        [styles.default]: !layout || layout === 'modern'
      }),
      children: showLoaders ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: (0,range_map/* default */.Z)(limit, i => /*#__PURE__*/jsx_runtime_.jsx(ProductLoader, {
          uniqueKey: `product-${i}`
        }, i))
      }) : children
    }), hasNextPage && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-center mt-8 lg:mt-12",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        loading: isLoadingMore,
        onClick: onLoadMore,
        className: "text-sm md:text-base font-semibold h-11",
        children: t('text-load-more')
      })
    })]
  });
};

/* harmony default export */ const grid_with_loader = (GridWithLoader);
// EXTERNAL MODULE: ./src/framework/rest/utils/use-homepage.ts
var use_homepage = __webpack_require__(8025);
;// CONCATENATED MODULE: ./src/framework/rest/products/products.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const ProductCard = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 7679).then(__webpack_require__.bind(__webpack_require__, 7679)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7679)],
    modules: ["../framework/rest/products/products.tsx -> " + '@components/products/cards/card']
  }
});

const Products = ({
  shopId,
  layout
}) => {
  var _ref, _query$pages, _data$pages, _data$pages$, _data$pages$$data, _data$pages2, _data$pages3;

  const {
    query
  } = (0,router_.useRouter)();
  const {
    homePage
  } = (0,use_homepage/* default */.Z)();
  const group = (_ref = (_query$pages = query.pages) === null || _query$pages === void 0 ? void 0 : _query$pages[0]) !== null && _ref !== void 0 ? _ref : homePage === null || homePage === void 0 ? void 0 : homePage.slug;
  const {
    isFetching: loading,
    isFetchingNextPage: loadingMore,
    fetchNextPage,
    hasNextPage,
    isError,
    data,
    error
  } = (0,products_query/* useProductsQuery */.kN)(_objectSpread(_objectSpread({}, Boolean(shopId) ? {
    shop_id: Number(shopId)
  } : {
    type: group
  }), {}, {
    name: query === null || query === void 0 ? void 0 : query.text,
    categories: query === null || query === void 0 ? void 0 : query.category
  }), {
    enabled: Boolean(group)
  });
  if (isError && error) return /*#__PURE__*/jsx_runtime_.jsx(error_message.default, {
    message: error.message
  });

  function handleLoadMore() {
    fetchNextPage();
  }

  return /*#__PURE__*/jsx_runtime_.jsx(grid_with_loader, {
    notFound: !loading && !(data !== null && data !== void 0 && (_data$pages = data.pages) !== null && _data$pages !== void 0 && (_data$pages$ = _data$pages[0]) !== null && _data$pages$ !== void 0 && (_data$pages$$data = _data$pages$.data) !== null && _data$pages$$data !== void 0 && _data$pages$$data.length),
    showLoaders: loading && !(data !== null && data !== void 0 && (_data$pages2 = data.pages) !== null && _data$pages2 !== void 0 && _data$pages2.length),
    hasNextPage: Boolean(hasNextPage),
    isLoadingMore: loadingMore,
    onLoadMore: handleLoadMore,
    layout: layout,
    children: data === null || data === void 0 ? void 0 : (_data$pages3 = data.pages) === null || _data$pages3 === void 0 ? void 0 : _data$pages3.map((products, idx) => {
      var _products$data;

      return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
        children: products === null || products === void 0 ? void 0 : (_products$data = products.data) === null || _products$data === void 0 ? void 0 : _products$data.map(product => /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(ProductCard, {
            product: product
          })
        }, product.id))
      }, idx);
    })
  });
};

/* harmony default export */ const products = (Products);

/***/ }),

/***/ 1088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ rangeMap)
/* harmony export */ });
function rangeMap(n, fn) {
  const arr = [];

  while (n > arr.length) {
    arr.push(fn(arr.length));
  }

  return arr;
}

/***/ })

};
;