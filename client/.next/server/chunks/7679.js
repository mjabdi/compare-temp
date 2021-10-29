"use strict";
exports.id = 7679;
exports.ids = [7679];
exports.modules = {

/***/ 7679:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5218);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
const _excluded = ["product", "className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Helium = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(1817), __webpack_require__.e(2816), __webpack_require__.e(45), __webpack_require__.e(8328), __webpack_require__.e(7458), __webpack_require__.e(3317)]).then(__webpack_require__.bind(__webpack_require__, 9763)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9763)],
    modules: ["../components/products/cards/card.tsx -> " + '@components/products/cards/helium']
  }
});
const Neon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(1817), __webpack_require__.e(20)]).then(__webpack_require__.bind(__webpack_require__, 20)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(20)],
    modules: ["../components/products/cards/card.tsx -> " + '@components/products/cards/neon']
  }
}); // grocery-two

const Argon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(1817), __webpack_require__.e(2816), __webpack_require__.e(45), __webpack_require__.e(8328), __webpack_require__.e(7458), __webpack_require__.e(883)]).then(__webpack_require__.bind(__webpack_require__, 883)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(883)],
    modules: ["../components/products/cards/card.tsx -> " + '@components/products/cards/argon']
  }
}); // bakery

const Krypton = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(1817), __webpack_require__.e(6145)]).then(__webpack_require__.bind(__webpack_require__, 6145)) // furniture extra price
, {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6145)],
    modules: ["../components/products/cards/card.tsx -> " + '@components/products/cards/krypton']
  }
});
const Xenon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__.default)(() => Promise.all(/* import() */[__webpack_require__.e(1817), __webpack_require__.e(2816), __webpack_require__.e(45), __webpack_require__.e(8328), __webpack_require__.e(7458), __webpack_require__.e(5878)]).then(__webpack_require__.bind(__webpack_require__, 5878)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5878)],
    modules: ["../components/products/cards/card.tsx -> " + '@components/products/cards/xenon']
  }
}); // furniture-two

const MAP_PRODUCT_TO_CARD = {
  neon: Neon,
  helium: Helium,
  argon: Argon,
  krypton: Krypton,
  xenon: Xenon
};

const ProductCard = _ref => {
  var _MAP_PRODUCT_TO_CARD$, _product$type, _product$type$setting;

  let {
    product,
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const Component = (_MAP_PRODUCT_TO_CARD$ = MAP_PRODUCT_TO_CARD[product === null || product === void 0 ? void 0 : (_product$type = product.type) === null || _product$type === void 0 ? void 0 : (_product$type$setting = _product$type.settings) === null || _product$type$setting === void 0 ? void 0 : _product$type$setting.productCard]) !== null && _MAP_PRODUCT_TO_CARD$ !== void 0 ? _MAP_PRODUCT_TO_CARD$ : Helium;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Component, _objectSpread(_objectSpread({
    product: product
  }, props), {}, {
    className: className
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductCard);

/***/ })

};
;