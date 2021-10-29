"use strict";
exports.id = 2469;
exports.ids = [2469];
exports.modules = {

/***/ 2469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FilterBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/filter-icon.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const FilterIcon = props => /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", _objectSpread(_objectSpread({}, props), {}, {
  viewBox: "0 0 18 14",
  children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M942.581,1295.564H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1295.564,942.581,1295.564Z",
    transform: "translate(-925 -1292.064)",
    fill: "currentColor"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M942.581,1951.5H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1951.5,942.581,1951.5Z",
    transform: "translate(-925 -1939.001)",
    fill: "currentColor"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M1163.713,1122.489a2.5,2.5,0,1,0,1.768.732A2.483,2.483,0,0,0,1163.713,1122.489Z",
    transform: "translate(-1158.213 -1122.489)",
    fill: "currentColor"
  }), /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M2344.886,1779.157a2.5,2.5,0,1,0,.731,1.768A2.488,2.488,0,0,0,2344.886,1779.157Z",
    transform: "translate(-2330.617 -1769.425)",
    fill: "currentColor"
  })]
}));
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/framework/rest/groups/dropdown-menu.tsx + 1 modules
var dropdown_menu = __webpack_require__(4579);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/store/drawer-atom.ts
var drawer_atom = __webpack_require__(5936);
;// CONCATENATED MODULE: ./src/components/layouts/filter-bar.tsx







function FilterBar() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const [_, setDrawerView] = (0,external_jotai_.useAtom)(drawer_atom/* drawerAtom */.P);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "sticky top-14 md:top-16 lg:top-22 h-14 md:h-16 z-10 flex xl:hidden items-center justify-between py-3 px-5 lg:px-7 bg-light border-t border-b border-border-200",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      onClick: () => setDrawerView({
        display: true,
        view: 'FILTER_VIEW'
      }),
      className: "flex items-center h-8 md:h-10 py-1 md:py-1.5 px-3 md:px-4 text-sm md:text-base bg-gray-100 bg-opacity-90 rounded border border-border-200 font-semibold text-heading transition-colors duration-200 focus:outline-none hover:border-accent-hover focus:border-accent-hover hover:bg-accent focus:bg-accent hover:text-light focus:text-light",
      children: [/*#__PURE__*/jsx_runtime_.jsx(FilterIcon, {
        width: "18",
        height: "14",
        className: "me-2"
      }), t('text-filter')]
    }), /*#__PURE__*/jsx_runtime_.jsx(dropdown_menu/* default */.Z, {})]
  });
}

/***/ })

};
;