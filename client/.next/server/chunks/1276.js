"use strict";
exports.id = 1276;
exports.ids = [1276];
exports.modules = {

/***/ 1276:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart_counter_icon_button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/cart-outlined.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const CartOutlinedIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 17.6 19.6"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    "data-name": "Path 12",
    d: "M12.8 8.8v-4a4 4 0 00-8 0v4m-3-2h14l1 12H.8z",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.6"
  })
}));
// EXTERNAL MODULE: ./src/store/drawer-atom.ts
var drawer_atom = __webpack_require__(5936);
// EXTERNAL MODULE: ./src/store/quick-cart/cart.context.tsx + 2 modules
var cart_context = __webpack_require__(4436);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
;// CONCATENATED MODULE: ./src/components/cart/cart-counter-icon-button.tsx







const CartCounterIconButton = () => {
  const {
    totalUniqueItems
  } = (0,cart_context/* useCart */.jD)();
  const [_, setDisplayCart] = (0,external_jotai_.useAtom)(drawer_atom/* drawerAtom */.P);

  function handleCartSidebar() {
    setDisplayCart({
      display: true,
      view: 'cart'
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
    className: "hidden product-cart lg:flex relative",
    onClick: handleCartSidebar,
    children: [/*#__PURE__*/jsx_runtime_.jsx(CartOutlinedIcon, {
      className: "w-5 h-5"
    }), totalUniqueItems > 0 && /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "min-w-[20px] h-5 flex items-center justify-center rounded-full bg-accent text-light text-[10px] absolute -end-1/2 -top-1/2",
      children: totalUniqueItems
    })]
  });
};

/* harmony default export */ const cart_counter_icon_button = (CartCounterIconButton);

/***/ })

};
;