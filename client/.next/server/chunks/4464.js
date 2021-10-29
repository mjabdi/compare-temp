"use strict";
exports.id = 4464;
exports.ids = [4464];
exports.modules = {

/***/ 4464:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X$": () => (/* binding */ SearchProvider),
/* harmony export */   "Rx": () => (/* binding */ useSearch)
/* harmony export */ });
/* unused harmony export SearchContext */
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const initialState = {
  searchTerm: ''
};
const SearchContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createContext(initialState);
SearchContext.displayName = 'SearchContext';
const SearchProvider = props => {
  const {
    query
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    0: searchTerm,
    1: updateSearchTerm
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (query !== null && query !== void 0 && query.text) {
      updateSearchTerm(query === null || query === void 0 ? void 0 : query.text);
    } else {
      updateSearchTerm('');
    }
  }, [query]);
  const value = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => ({
    searchTerm,
    updateSearchTerm
  }), [searchTerm]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(SearchContext.Provider, _objectSpread({
    value: value
  }, props));
};
const useSearch = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(SearchContext);

  if (context === undefined) {
    throw new Error(`useSearch must be used within a SearchProvider`);
  }

  return context;
};

/***/ })

};
;