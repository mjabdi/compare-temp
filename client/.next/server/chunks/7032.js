"use strict";
exports.id = 7032;
exports.ids = [7032];
exports.modules = {

/***/ 7032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_search_search_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4282);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _search_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4464);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["label", "variant"],
      _excluded2 = ["text"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const Search = _ref => {
  let {
    label,
    variant
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    searchTerm,
    updateSearchTerm
  } = (0,_search_context__WEBPACK_IMPORTED_MODULE_3__/* .useSearch */ .Rx)();

  const handleOnChange = e => {
    const {
      value
    } = e.target;
    updateSearchTerm(value);
  };

  const onSearch = e => {
    e.preventDefault();
    if (!searchTerm) return;
    const {
      pathname,
      query
    } = router;
    router.push({
      pathname,
      query: _objectSpread(_objectSpread({}, query), {}, {
        text: searchTerm
      })
    }, undefined, {
      scroll: false
    });
  };

  function clearSearch() {
    updateSearchTerm('');
    const {
      pathname,
      query
    } = router;

    const {
      text
    } = query,
          rest = _objectWithoutProperties(query, _excluded2);

    if (text) {
      router.push({
        pathname,
        query: _objectSpread({}, rest)
      }, undefined, {
        scroll: false
      });
    }
  }

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_ui_search_search_box__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, _objectSpread({
    label: label,
    onSubmit: onSearch,
    onClearSearch: clearSearch,
    onChange: handleOnChange,
    value: searchTerm,
    name: "search",
    placeholder: 'Search your supplements',
    variant: variant
  }, props));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);

/***/ })

};
;