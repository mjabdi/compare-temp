"use strict";
exports.id = 1817;
exports.ids = [1817];
exports.modules = {

/***/ 1817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (/* binding */ usePrice)
/* harmony export */ });
/* unused harmony exports formatPrice, formatVariantPrice */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_settings_settings_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7438);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



function formatPrice({
  amount,
  currencyCode,
  locale
}) {
  const formatCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currencyCode
  });
  return formatCurrency.format(amount);
}
function formatVariantPrice({
  amount,
  baseAmount,
  currencyCode,
  locale
}) {
  const hasDiscount = baseAmount > amount;
  const formatDiscount = new Intl.NumberFormat(locale, {
    style: 'percent'
  });
  const discount = hasDiscount ? formatDiscount.format((baseAmount - amount) / baseAmount) : null;
  const price = formatPrice({
    amount,
    currencyCode,
    locale
  });
  const basePrice = hasDiscount ? formatPrice({
    amount: baseAmount,
    currencyCode,
    locale
  }) : null;
  return {
    price,
    basePrice,
    discount
  };
}
function usePrice(data) {
  const {
    currency
  } = (0,_components_settings_settings_context__WEBPACK_IMPORTED_MODULE_1__/* .useSettings */ .rV)();
  const {
    amount,
    baseAmount,
    currencyCode = currency
  } = data !== null && data !== void 0 ? data : {};
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const value = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (typeof amount !== 'number' || !currencyCode) return '';
    const currentLocale = locale ? locale : 'en';
    return baseAmount ? formatVariantPrice({
      amount,
      baseAmount,
      currencyCode,
      locale: currentLocale
    }) : formatPrice({
      amount,
      currencyCode,
      locale: currentLocale
    });
  }, [amount, baseAmount, currencyCode, locale]);
  return typeof value === 'string' ? {
    price: value,
    basePrice: null,
    discount: null
  } : value;
}

/***/ })

};
;