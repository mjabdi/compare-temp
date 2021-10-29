"use strict";
exports.id = 7580;
exports.ids = [7580];
exports.modules = {

/***/ 7580:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1817);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5936);
/* harmony import */ var _store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4436);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);






const CartCounterButton = () => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();
  const {
    totalUniqueItems,
    total
  } = (0,_store_quick_cart_cart_context__WEBPACK_IMPORTED_MODULE_2__/* .useCart */ .jD)();
  const [_, setDisplayCart] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_1__/* .drawerAtom */ .P);
  const {
    price: totalPrice
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_0__/* .default */ .ZP)({
    amount: total
  });

  function handleCartSidebar() {
    setDisplayCart({
      display: true,
      view: 'cart'
    });
  }

  return null // <button
  //   className="hidden product-cart lg:flex flex-col items-center justify-center p-3 pt-3.5 fixed top-1/2 -mt-12 end-0 z-40 shadow-900 rounded rounded-te-none rounded-be-none bg-accent text-light text-sm font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover"
  //   onClick={handleCartSidebar}
  // >
  //   <span className="flex pb-0.5">
  //     <CartCheckBagIcon className="flex-shrink-0" width={14} height={16} />
  //     <span className="flex ms-2">
  //       {formatString(totalUniqueItems, t('common:text-item'))}
  //     </span>
  //   </span>
  //   <span className="bg-light rounded w-full py-2 px-2 text-accent mt-3">
  //     {totalPrice}
  //   </span>
  // </button>
  ;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartCounterButton);

/***/ })

};
;