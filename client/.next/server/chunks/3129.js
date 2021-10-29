exports.id = 3129;
exports.ids = [3129];
exports.modules = {

/***/ 3129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ verified_item_list)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/ui/forms/input.tsx
var input = __webpack_require__(5549);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./src/framework/rest/coupons/coupons.query.ts + 1 modules
var coupons_query = __webpack_require__(3146);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/store/checkout.ts
var checkout = __webpack_require__(7900);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/framework/rest/checkout/coupon.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const Coupon = () => {
  var _errors$code;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: hasCoupon,
    1: setHasCoupon
  } = (0,external_react_.useState)(false);
  const [coupon, applyCoupon] = (0,external_jotai_.useAtom)(checkout/* couponAtom */.GO);
  const {
    register,
    handleSubmit,
    setError,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)();
  const {
    mutate: verifyCoupon,
    isLoading: loading
  } = (0,coupons_query/* useVerifyCouponMutation */.Mu)();

  if (!hasCoupon && !coupon) {
    return /*#__PURE__*/jsx_runtime_.jsx("p", {
      role: "button",
      className: "text-xs font-bold text-body transition duration-200 hover:text-accent",
      onClick: () => setHasCoupon(true),
      children: t('text-have-coupon')
    });
  }

  function onSubmit({
    code
  }) {
    verifyCoupon({
      code
    }, {
      onSuccess: data => {
        if (data.is_valid) {
          applyCoupon(data.coupon);
          setHasCoupon(false);
        } else {
          setError('code', {
            type: 'manual',
            message: 'error-invalid-coupon'
          });
        }
      }
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    onSubmit: handleSubmit(onSubmit),
    noValidate: true,
    className: "w-full flex flex-col sm:flex-row",
    children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({}, register('code', {
      required: 'text-coupon-required'
    })), {}, {
      placeholder: t('text-enter-coupon'),
      variant: "outline",
      className: "mb-4 sm:mb-0 sm:me-4 flex-1",
      dimension: "small",
      error: t(errors === null || errors === void 0 ? void 0 : (_errors$code = errors.code) === null || _errors$code === void 0 ? void 0 : _errors$code.message)
    })), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
      loading: loading,
      disabled: loading,
      size: "small",
      className: "w-full sm:w-40 lg:w-auto",
      children: t('text-apply')
    })]
  });
};

/* harmony default export */ const checkout_coupon = (Coupon);
// EXTERNAL MODULE: ./src/lib/use-price.tsx
var use_price = __webpack_require__(1817);
// EXTERNAL MODULE: ./src/components/icons/empty-cart.tsx
var empty_cart = __webpack_require__(482);
// EXTERNAL MODULE: ./src/components/icons/close-icon.tsx
var close_icon = __webpack_require__(7831);
// EXTERNAL MODULE: ./src/store/quick-cart/cart.context.tsx + 2 modules
var cart_context = __webpack_require__(4436);
// EXTERNAL MODULE: ./src/store/quick-cart/cart.utils.ts
var cart_utils = __webpack_require__(2075);
// EXTERNAL MODULE: ./src/components/checkout/item/item-card.tsx
var item_card = __webpack_require__(5927);
// EXTERNAL MODULE: ./src/components/checkout/item/item-info-row.tsx
var item_info_row = __webpack_require__(9688);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(4025);
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(5013);
// EXTERNAL MODULE: external "@stripe/react-stripe-js"
var react_stripe_js_ = __webpack_require__(3317);
// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__(420);
;// CONCATENATED MODULE: ./src/lib/get-stripejs.ts
/**
 * This is a singleton to ensure we only instantiate Stripe once.
 */

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = (0,stripe_js_.loadStripe)(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
  }

  return stripePromise;
};

/* harmony default export */ const get_stripejs = (getStripe);
;// CONCATENATED MODULE: ./src/components/checkout/payment/stripe.tsx










const StripeForm = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const stripe = (0,react_stripe_js_.useStripe)();
  const elements = (0,react_stripe_js_.useElements)();
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const [_, setVerifiedToken] = (0,external_jotai_.useAtom)(checkout/* verifiedTokenAtom */._p);

  const handleSubmit = async e => {
    // Block native form submission.
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    setLoading(true); // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.

    const cardElement = elements.getElement(react_stripe_js_.CardElement); // Use your card Element with other Stripe.js APIs

    const {
      error,
      token
    } = await stripe.createToken(cardElement);

    if (error) {
      setLoading(false);
      return;
    }

    if (token) {
      setVerifiedToken(token.id);
    }

    setLoading(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    onSubmit: handleSubmit,
    className: "flex flex-col",
    children: [/*#__PURE__*/jsx_runtime_.jsx(react_stripe_js_.CardElement, {}), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
      type: "submit",
      loading: loading,
      disabled: !stripe,
      className: "StripePay mt-5 ms-auto",
      children: t('text-confirm')
    })]
  });
};

const StripePayment = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(react_stripe_js_.Elements, {
    stripe: get_stripejs(),
    children: /*#__PURE__*/jsx_runtime_.jsx(StripeForm, {})
  });
};

/* harmony default export */ const stripe = (StripePayment);
;// CONCATENATED MODULE: ./src/components/checkout/payment/cash-on-delivery.tsx




const CashOnDelivery = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "text-sm text-body block",
      children: t("text-cod-message")
    })
  });
};

/* harmony default export */ const cash_on_delivery = (CashOnDelivery);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/checkout/payment/payment-grid.tsx












// Payment Methods Mapping Object
const AVAILABLE_PAYMENT_METHODS_MAP = {
  STRIPE: {
    name: 'Stripe',
    value: 'STRIPE',
    icon: '/payment/stripe.png',
    component: stripe
  },
  CASH_ON_DELIVERY: {
    name: 'Cash On Delivery',
    value: 'CASH_ON_DELIVERY',
    icon: '',
    component: cash_on_delivery
  }
};

const PaymentGrid = ({
  className
}) => {
  var _PaymentMethod$compon;

  const [gateway, setGateway] = (0,external_jotai_.useAtom)(checkout/* paymentGatewayAtom */.HA);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,external_react_.useState)(null);
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const PaymentMethod = AVAILABLE_PAYMENT_METHODS_MAP[gateway];
  const Component = (_PaymentMethod$compon = PaymentMethod === null || PaymentMethod === void 0 ? void 0 : PaymentMethod.component) !== null && _PaymentMethod$compon !== void 0 ? _PaymentMethod$compon : stripe;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [errorMessage ? /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      message: t(`common:${errorMessage}`),
      variant: "error",
      closeable: true,
      className: "mt-5",
      onClose: () => setErrorMessage(null)
    }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.RadioGroup, {
      value: gateway,
      onChange: setGateway,
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.RadioGroup.Label, {
        className: "text-base text-heading font-semibold mb-5 block",
        children: t('text-choose-payment')
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grid gap-4 grid-cols-2 md:grid-cols-3 mb-8",
        children: Object.values(AVAILABLE_PAYMENT_METHODS_MAP).map(({
          name,
          icon,
          value
        }) => /*#__PURE__*/jsx_runtime_.jsx(react_.RadioGroup.Option, {
          value: value,
          children: ({
            checked
          }) => /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: external_classnames_default()('w-full h-full py-3 flex items-center justify-center border text-center rounded cursor-pointer relative', checked ? 'bg-light border-accent shadow-600' : 'bg-light border-gray-200'),
            children: icon ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: icon,
                alt: name,
                className: "h-[30px]"
              })
            }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-xs text-heading font-semibold",
              children: name
            })
          })
        }, value))
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(Component, {})
    })]
  });
};

/* harmony default export */ const payment_grid = (PaymentGrid);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/framework/rest/orders/orders.query.ts
var orders_query = __webpack_require__(2702);
// EXTERNAL MODULE: ./src/lib/routes.ts
var routes = __webpack_require__(1103);
// EXTERNAL MODULE: ./src/components/ui/validation-error.tsx
var validation_error = __webpack_require__(784);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(8718);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
// EXTERNAL MODULE: ./src/lib/format-ordered-product.ts
var format_ordered_product = __webpack_require__(7035);
;// CONCATENATED MODULE: ./src/framework/rest/checkout/place-order-action.tsx
function place_order_action_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function place_order_action_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { place_order_action_ownKeys(Object(source), true).forEach(function (key) { place_order_action_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { place_order_action_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function place_order_action_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const PlaceOrderAction = props => {
  const router = (0,router_.useRouter)();
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,external_react_.useState)(null);
  const {
    mutate: createOrder,
    isLoading: loading
  } = (0,orders_query/* useCreateOrderMutation */.kD)();
  const {
    data: orderStatusData
  } = (0,orders_query/* useOrderStatusesQuery */.Qk)();
  const {
    items
  } = (0,cart_context/* useCart */.jD)();
  const [{
    billing_address,
    shipping_address,
    delivery_time,
    coupon,
    verified_response,
    customer_contact,
    payment_gateway,
    token
  }] = (0,external_jotai_.useAtom)(checkout/* checkoutAtom */.hq);
  const [discount] = (0,external_jotai_.useAtom)(checkout/* discountAtom */.yw);
  const [use_wallet_points] = (0,external_jotai_.useAtom)(checkout/* walletAtom */.xc);
  (0,external_react_.useEffect)(() => {
    setErrorMessage(null);
  }, [payment_gateway]);
  const available_items = items === null || items === void 0 ? void 0 : items.filter(item => {
    var _verified_response$un;

    return !(verified_response !== null && verified_response !== void 0 && (_verified_response$un = verified_response.unavailable_products) !== null && _verified_response$un !== void 0 && _verified_response$un.includes(item.id));
  });
  const subtotal = (0,cart_utils/* calculateTotal */.tf)(available_items);
  const total = (0,cart_utils/* calculatePaidTotal */.eA)({
    totalAmount: subtotal,
    tax: verified_response === null || verified_response === void 0 ? void 0 : verified_response.total_tax,
    shipping_charge: verified_response === null || verified_response === void 0 ? void 0 : verified_response.shipping_charge
  }, Number(discount));

  const handlePlaceOrder = () => {
    var _orderStatusData$orde, _orderStatusData$orde2, _orderStatusData$orde3;

    if (!customer_contact) {
      setErrorMessage('Contact Number Is Required');
      return;
    }

    if (!use_wallet_points && !payment_gateway) {
      setErrorMessage('Gateway Is Required');
      return;
    }

    if (!use_wallet_points && payment_gateway === 'STRIPE' && !token) {
      setErrorMessage('Please Pay First');
      return;
    }

    let input = {
      //@ts-ignore
      products: available_items === null || available_items === void 0 ? void 0 : available_items.map(item => (0,format_ordered_product/* formatOrderedProduct */.Y)(item)),
      status: (_orderStatusData$orde = orderStatusData === null || orderStatusData === void 0 ? void 0 : (_orderStatusData$orde2 = orderStatusData.orderStatuses) === null || _orderStatusData$orde2 === void 0 ? void 0 : (_orderStatusData$orde3 = _orderStatusData$orde2.data[0]) === null || _orderStatusData$orde3 === void 0 ? void 0 : _orderStatusData$orde3.id) !== null && _orderStatusData$orde !== void 0 ? _orderStatusData$orde : '1',
      amount: subtotal,
      coupon_id: Number(coupon === null || coupon === void 0 ? void 0 : coupon.id),
      discount: discount !== null && discount !== void 0 ? discount : 0,
      paid_total: total,
      sales_tax: verified_response === null || verified_response === void 0 ? void 0 : verified_response.total_tax,
      delivery_fee: verified_response === null || verified_response === void 0 ? void 0 : verified_response.shipping_charge,
      total,
      delivery_time: delivery_time === null || delivery_time === void 0 ? void 0 : delivery_time.title,
      customer_contact,
      payment_gateway,
      use_wallet_points,
      billing_address: place_order_action_objectSpread({}, (billing_address === null || billing_address === void 0 ? void 0 : billing_address.address) && billing_address.address),
      shipping_address: place_order_action_objectSpread({}, (shipping_address === null || shipping_address === void 0 ? void 0 : shipping_address.address) && shipping_address.address)
    };

    if (payment_gateway === 'STRIPE') {
      //@ts-ignore
      input.token = token;
    }

    delete input.billing_address.__typename;
    delete input.shipping_address.__typename;
    createOrder(input, {
      onSuccess: order => {
        if (order !== null && order !== void 0 && order.tracking_number) {
          router.push(`${routes/* ROUTES.ORDERS */.Z.ORDERS}/${order === null || order === void 0 ? void 0 : order.tracking_number}`);
        }
      },
      onError: error => {
        var _error$response, _error$response$data;

        setErrorMessage(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message);
      }
    });
  };

  const isAllRequiredFieldSelected = [customer_contact, payment_gateway, billing_address, shipping_address, delivery_time, available_items].every(item => !isEmpty_default()(item));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, place_order_action_objectSpread({
      loading: loading,
      className: "w-full mt-5",
      onClick: handlePlaceOrder,
      disabled: !isAllRequiredFieldSelected
    }, props)), errorMessage && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "mt-3",
      children: /*#__PURE__*/jsx_runtime_.jsx(validation_error/* default */.Z, {
        message: errorMessage
      })
    })]
  });
};
;// CONCATENATED MODULE: ./src/lib/is-negative.ts
function isNegative(value) {
  return value < 0;
}
// EXTERNAL MODULE: ./src/components/ui/checkbox/checkbox.module.css
var checkbox_module = __webpack_require__(3879);
var checkbox_module_default = /*#__PURE__*/__webpack_require__.n(checkbox_module);
;// CONCATENATED MODULE: ./src/components/ui/checkbox/checkbox.tsx
const _excluded = ["className", "label", "name", "error"];

function checkbox_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function checkbox_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { checkbox_ownKeys(Object(source), true).forEach(function (key) { checkbox_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { checkbox_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function checkbox_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Checkbox = /*#__PURE__*/external_react_default().forwardRef((_ref, ref) => {
  let {
    className,
    label,
    name,
    error
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", checkbox_objectSpread({
        id: name,
        name: name,
        type: "checkbox",
        ref: ref,
        className: (checkbox_module_default()).checkbox
      }, rest)), /*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: name,
        className: "text-body text-sm",
        children: label
      })]
    }), error && /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "my-2 text-xs text-end text-red-500",
      children: error
    })]
  });
});
Checkbox.displayName = 'Checkbox';
/* harmony default export */ const checkbox_checkbox = (Checkbox);
;// CONCATENATED MODULE: ./src/components/checkout/wallet/wallet.tsx










const Wallet = ({
  totalPrice,
  walletAmount,
  walletCurrency
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const [use_wallet, setUseWallet] = (0,external_jotai_.useAtom)(checkout/* walletAtom */.xc);
  const [calculatePayableAmount, setCalculatePayableAmount] = (0,external_jotai_.useAtom)(checkout/* payableAmountAtom */.y2);
  const {
    0: calculateCurrentWalletCurrency,
    1: setCalculateCurrentWalletCurrency
  } = (0,external_react_.useState)(walletCurrency);
  const {
    price: currentWalletCurrency
  } = (0,use_price/* default */.ZP)({
    amount: Number(calculateCurrentWalletCurrency)
  });
  const {
    price: payableAmount
  } = (0,use_price/* default */.ZP)({
    amount: calculatePayableAmount
  });
  (0,external_react_.useEffect)(() => {
    if (use_wallet) {
      const calculatedCurrentWalletCurrencyAfterPayment = walletCurrency - totalPrice;

      if (isNegative(calculatedCurrentWalletCurrencyAfterPayment)) {
        setCalculateCurrentWalletCurrency(0);
        setCalculatePayableAmount(Math.abs(calculatedCurrentWalletCurrencyAfterPayment));
      } else {
        setCalculateCurrentWalletCurrency(calculatedCurrentWalletCurrencyAfterPayment);
        setCalculatePayableAmount(0);
      }
    } else {
      setCalculateCurrentWalletCurrency(walletCurrency);
      setCalculatePayableAmount(0);
    }
  }, [setCalculatePayableAmount, totalPrice, use_wallet, walletCurrency]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-2 mt-2",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between text-sm text-body",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [t('text-wallet'), ' ', /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "lowercase",
            children: t('text-points')
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: walletAmount
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between text-sm text-body",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          children: [t('text-wallet'), " ", t('text-currency')]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: currentWalletCurrency
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(checkbox_checkbox, {
      name: "use_wallet",
      label: t('text-wallet-use'),
      className: "mt-3",
      onChange: setUseWallet,
      checked: use_wallet,
      disabled: !walletAmount
    }), use_wallet && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-between border-t-4 border-double border-border-base pt-3 mt-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-base font-semibold text-heading",
        children: t('text-payable')
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-base font-semibold text-heading",
        children: payableAmount
      })]
    })]
  });
};

/* harmony default export */ const wallet = (Wallet);
;// CONCATENATED MODULE: ./src/components/checkout/item/verified-item-list.tsx

















const VerifiedItemList = ({
  className
}) => {
  var _verifiedResponse$tot, _verifiedResponse$shi;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    items,
    isEmpty: isEmptyCart
  } = (0,cart_context/* useCart */.jD)();
  const [verifiedResponse] = (0,external_jotai_.useAtom)(checkout/* verifiedResponseAtom */.Jb);
  const [coupon, setCoupon] = (0,external_jotai_.useAtom)(checkout/* couponAtom */.GO);
  const [discount] = (0,external_jotai_.useAtom)(checkout/* discountAtom */.yw);
  const [payableAmount] = (0,external_jotai_.useAtom)(checkout/* payableAmountAtom */.y2);
  const [use_wallet] = (0,external_jotai_.useAtom)(checkout/* walletAtom */.xc);
  const available_items = items === null || items === void 0 ? void 0 : items.filter(item => {
    var _verifiedResponse$una;

    return !(verifiedResponse !== null && verifiedResponse !== void 0 && (_verifiedResponse$una = verifiedResponse.unavailable_products) !== null && _verifiedResponse$una !== void 0 && _verifiedResponse$una.includes(item.id));
  });
  const {
    price: tax
  } = (0,use_price/* default */.ZP)(verifiedResponse && {
    amount: (_verifiedResponse$tot = verifiedResponse.total_tax) !== null && _verifiedResponse$tot !== void 0 ? _verifiedResponse$tot : 0
  });
  const {
    price: shipping
  } = (0,use_price/* default */.ZP)(verifiedResponse && {
    amount: (_verifiedResponse$shi = verifiedResponse.shipping_charge) !== null && _verifiedResponse$shi !== void 0 ? _verifiedResponse$shi : 0
  });
  const base_amount = (0,cart_utils/* calculateTotal */.tf)(available_items);
  const {
    price: sub_total
  } = (0,use_price/* default */.ZP)(verifiedResponse && {
    amount: base_amount
  });
  const {
    price: discountPrice
  } = (0,use_price/* default */.ZP)( //@ts-ignore
  discount && {
    amount: Number(discount)
  });
  const totalPrice = verifiedResponse ? (0,cart_utils/* calculatePaidTotal */.eA)({
    totalAmount: base_amount,
    tax: verifiedResponse === null || verifiedResponse === void 0 ? void 0 : verifiedResponse.total_tax,
    shipping_charge: verifiedResponse === null || verifiedResponse === void 0 ? void 0 : verifiedResponse.shipping_charge
  }, Number(discount)) : 0;
  const {
    price: total
  } = (0,use_price/* default */.ZP)(verifiedResponse && {
    amount: totalPrice
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col border-b pb-2 border-border-200",
      children: !isEmptyCart ? items === null || items === void 0 ? void 0 : items.map(item => {
        var _verifiedResponse$una2;

        const notAvailable = verifiedResponse === null || verifiedResponse === void 0 ? void 0 : (_verifiedResponse$una2 = verifiedResponse.unavailable_products) === null || _verifiedResponse$una2 === void 0 ? void 0 : _verifiedResponse$una2.find(d => d === item.id);
        return /*#__PURE__*/jsx_runtime_.jsx(item_card/* default */.Z, {
          item: item,
          notAvailable: !!notAvailable
        }, item.id);
      }) : /*#__PURE__*/jsx_runtime_.jsx(empty_cart/* default */.Z, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "space-y-2 mt-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx(item_info_row/* ItemInfoRow */.m, {
        title: t('text-sub-total'),
        value: sub_total
      }), /*#__PURE__*/jsx_runtime_.jsx(item_info_row/* ItemInfoRow */.m, {
        title: t('text-tax'),
        value: tax
      }), /*#__PURE__*/jsx_runtime_.jsx(item_info_row/* ItemInfoRow */.m, {
        title: t('text-shipping'),
        value: shipping
      }), discount && coupon ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-sm text-body me-4",
          children: t('text-discount')
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "text-xs font-semibold text-red-500 flex items-center me-auto",
          children: ["(", coupon === null || coupon === void 0 ? void 0 : coupon.code, ")", /*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: () => setCoupon(null),
            children: /*#__PURE__*/jsx_runtime_.jsx(close_icon/* CloseIcon */.T, {
              className: "w-3 h-3 ms-2"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-sm text-body",
          children: discountPrice
        })]
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex justify-between mt-5 !mb-4",
        children: /*#__PURE__*/jsx_runtime_.jsx(checkout_coupon, {})
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex justify-between border-t-4 border-double border-border-200 pt-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-base font-semibold text-heading",
          children: t('text-total')
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-base font-semibold text-heading",
          children: total
        })]
      })]
    }), verifiedResponse && /*#__PURE__*/jsx_runtime_.jsx(wallet, {
      totalPrice: totalPrice,
      walletAmount: verifiedResponse.wallet_amount,
      walletCurrency: verifiedResponse.wallet_currency
    }), use_wallet && !Boolean(payableAmount) ? null : /*#__PURE__*/jsx_runtime_.jsx(payment_grid, {
      className: "bg-light p-5 border border-gray-200 mt-10"
    }), /*#__PURE__*/jsx_runtime_.jsx(PlaceOrderAction, {
      children: t('text-place-order')
    })]
  });
};

/* harmony default export */ const verified_item_list = (VerifiedItemList);

/***/ }),

/***/ 3879:
/***/ ((module) => {

// Exports
module.exports = {
	"checkbox": "checkbox_checkbox__3Pae_"
};


/***/ })

};
;