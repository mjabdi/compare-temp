"use strict";
exports.id = 1382;
exports.ids = [1382];
exports.modules = {

/***/ 1382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ unverified_item_list)
});

// EXTERNAL MODULE: ./src/store/quick-cart/cart.context.tsx + 2 modules
var cart_context = __webpack_require__(4436);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/components/checkout/item/item-card.tsx
var item_card = __webpack_require__(5927);
// EXTERNAL MODULE: ./src/components/icons/empty-cart.tsx
var empty_cart = __webpack_require__(482);
// EXTERNAL MODULE: ./src/lib/use-price.tsx
var use_price = __webpack_require__(1817);
// EXTERNAL MODULE: ./src/components/checkout/item/item-info-row.tsx
var item_info_row = __webpack_require__(9688);
// EXTERNAL MODULE: ./src/lib/format-ordered-product.ts
var format_ordered_product = __webpack_require__(7035);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/ui/validation-error.tsx
var validation_error = __webpack_require__(784);
// EXTERNAL MODULE: ./src/framework/rest/orders/order.service.ts
var order_service = __webpack_require__(5541);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/rest/checkout/checkout.query.ts


const useVerifyCheckoutMutation = () => {
  return (0,external_react_query_.useMutation)(input => order_service/* orderService.verifyCheckout */.X.verifyCheckout(input));
};
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/store/checkout.ts
var checkout = __webpack_require__(7900);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/framework/rest/checkout/check-availability-action.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const CheckAvailabilityAction = props => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const [billing_address] = (0,external_jotai_.useAtom)(checkout/* billingAddressAtom */.Km);
  const [shipping_address] = (0,external_jotai_.useAtom)(checkout/* shippingAddressAtom */.du);
  const [_, setVerifiedResponse] = (0,external_jotai_.useAtom)(checkout/* verifiedResponseAtom */.Jb);
  const {
    0: errorMessage,
    1: setError
  } = (0,external_react_.useState)('');
  const {
    items,
    total,
    isEmpty
  } = (0,cart_context/* useCart */.jD)();
  const {
    mutate: verifyCheckout,
    isLoading: loading
  } = useVerifyCheckoutMutation();

  function handleVerifyCheckout() {
    if (billing_address && shipping_address) {
      verifyCheckout({
        amount: total,
        products: items === null || items === void 0 ? void 0 : items.map(item => (0,format_ordered_product/* formatOrderedProduct */.Y)(item)),
        billing_address: _objectSpread({}, (billing_address === null || billing_address === void 0 ? void 0 : billing_address.address) && billing_address.address),
        shipping_address: _objectSpread({}, (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.address) && shipping_address.address)
      }, {
        onSuccess: data => {
          setVerifiedResponse(data);
        },
        onError: error => {
          var _error$response, _error$response$data;

          setError(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message);
        }
      });
    } else {
      setError('error-add-both-address');
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, _objectSpread({
      loading: loading,
      className: "w-full mt-5",
      onClick: handleVerifyCheckout,
      disabled: isEmpty
    }, props)), errorMessage && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-3",
      children: /*#__PURE__*/jsx_runtime_.jsx(validation_error/* default */.Z, {
        message: t(errorMessage)
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/components/checkout/item/unverified-item-list.tsx










const UnverifiedItemList = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    items,
    total,
    isEmpty
  } = (0,cart_context/* useCart */.jD)();
  const {
    price: subtotal
  } = (0,use_price/* default */.ZP)(items && {
    amount: total
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "w-full",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col items-center space-s-4 mb-4",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-base font-bold text-heading",
        children: t('text-your-order')
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col py-3 border-b border-border-200",
      children: isEmpty ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "h-full flex flex-col items-center justify-center mb-4",
        children: [/*#__PURE__*/jsx_runtime_.jsx(empty_cart/* default */.Z, {
          width: 140,
          height: 176
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: "mt-6 text-base font-semibold",
          children: t('text-no-products')
        })]
      }) : items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/jsx_runtime_.jsx(item_card/* default */.Z, {
        item: item
      }, item.id))
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-2 mt-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx(item_info_row/* ItemInfoRow */.m, {
        title: t('text-sub-total'),
        value: subtotal
      }), /*#__PURE__*/jsx_runtime_.jsx(item_info_row/* ItemInfoRow */.m, {
        title: t('text-tax'),
        value: t('text-calculated-checkout')
      }), /*#__PURE__*/jsx_runtime_.jsx(item_info_row/* ItemInfoRow */.m, {
        title: t('text-estimated-shipping'),
        value: t('text-calculated-checkout')
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(CheckAvailabilityAction, {
      children: t('text-check-availability')
    })]
  });
};

/* harmony default export */ const unverified_item_list = (UnverifiedItemList);

/***/ }),

/***/ 5541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ orderService)
/* harmony export */ });
/* harmony import */ var _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3857);
/* harmony import */ var _framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);



class OrderService extends _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__/* .BaseService */ .b {
  verifyCheckout(input) {
    return this.http.post(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.VERIFY_CHECKOUT */ .P.VERIFY_CHECKOUT, input).then(res => res.data);
  }

}

const orderService = new OrderService(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS);

/***/ })

};
;