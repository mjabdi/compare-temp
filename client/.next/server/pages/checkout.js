"use strict";
(() => {
var exports = {};
exports.id = 2222;
exports.ids = [2222];
exports.modules = {

/***/ 3931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports fetchMe, useCustomerQuery */
/* harmony import */ var _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3857);
/* harmony import */ var _framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);
/* harmony import */ var _store_authorization_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8879);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);






class CustomerService extends _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__/* .BaseService */ .b {}

const customerService = new CustomerService(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.CUSTOMER */ .P.CUSTOMER);
const fetchMe = async () => {
  const {
    data
  } = await customerService.findAll();
  return {
    me: data
  };
};
const useCustomerQuery = options => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.CUSTOMER */ .P.CUSTOMER, fetchMe, options);
};

const useUser = () => {
  const [isAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_2__/* .authorizationAtom */ .O);
  const {
    data,
    isLoading,
    error
  } = useCustomerQuery({
    enabled: isAuthorized,
    onError: err => {
      console.log(err);
    }
  });
  return {
    me: data === null || data === void 0 ? void 0 : data.me,
    loading: isLoading,
    error
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUser);

/***/ }),

/***/ 3749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ AddressType)
/* harmony export */ });
let AddressType;

(function (AddressType) {
  AddressType["Billing"] = "billing";
  AddressType["Shipping"] = "shipping";
})(AddressType || (AddressType = {}));

/***/ }),

/***/ 2736:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": () => (/* reexport safe */ _framework_ssr_common__WEBPACK_IMPORTED_MODULE_7__.b),
/* harmony export */   "default": () => (/* binding */ CheckoutPage)
/* harmony export */ });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7900);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5218);
/* harmony import */ var _components_layouts_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6578);
/* harmony import */ var _framework_auth_use_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3931);
/* harmony import */ var _framework_utils_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3749);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _framework_ssr_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(857);









const ScheduleGrid = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 7534).then(__webpack_require__.bind(__webpack_require__, 7534)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7534)],
    modules: ["checkout.tsx -> " + '@components/checkout/schedule/schedule-grid']
  }
});
const AddressGrid = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => Promise.all(/* import() */[__webpack_require__.e(2816), __webpack_require__.e(6098), __webpack_require__.e(3669), __webpack_require__.e(2844)]).then(__webpack_require__.bind(__webpack_require__, 2844)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2844)],
    modules: ["checkout.tsx -> " + '@components/checkout/address-grid']
  }
});
const ContactGrid = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => Promise.all(/* import() */[__webpack_require__.e(2816), __webpack_require__.e(954)]).then(__webpack_require__.bind(__webpack_require__, 954)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(954)],
    modules: ["checkout.tsx -> " + '@components/checkout/contact/contact-grid']
  }
});
const RightSideView = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__.default)(() => __webpack_require__.e(/* import() */ 7069).then(__webpack_require__.bind(__webpack_require__, 7069)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7069)],
    modules: ["checkout.tsx -> " + '@components/checkout/right-side-view']
  }
});
function CheckoutPage() {
  var _me$profile, _me$address, _me$address2;

  const {
    me
  } = (0,_framework_auth_use_user__WEBPACK_IMPORTED_MODULE_4__/* .default */ .ZP)();
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: "py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20 bg-gray-100",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "flex flex-col lg:flex-row items-center lg:items-start m-auto lg:space-s-8 w-full max-w-5xl",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "lg:max-w-2xl w-full space-y-6",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(ContactGrid, {
          className: "shadow-700 bg-light p-5 md:p-8" //@ts-ignore
          ,
          contact: me === null || me === void 0 ? void 0 : (_me$profile = me.profile) === null || _me$profile === void 0 ? void 0 : _me$profile.contact,
          label: t('text-contact-number'),
          count: 1
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(AddressGrid, {
          userId: me === null || me === void 0 ? void 0 : me.id,
          className: "shadow-700 bg-light p-5 md:p-8",
          label: t('text-billing-address'),
          count: 2 //@ts-ignore
          ,
          addresses: me === null || me === void 0 ? void 0 : (_me$address = me.address) === null || _me$address === void 0 ? void 0 : _me$address.filter(address => (address === null || address === void 0 ? void 0 : address.type) === _framework_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .AddressType.Billing */ .D.Billing),
          atom: _store_checkout__WEBPACK_IMPORTED_MODULE_1__/* .billingAddressAtom */ .Km,
          type: _framework_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .AddressType.Billing */ .D.Billing
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(AddressGrid, {
          userId: me === null || me === void 0 ? void 0 : me.id,
          className: "shadow-700 bg-light p-5 md:p-8",
          label: t('text-shipping-address'),
          count: 3 //@ts-ignore
          ,
          addresses: me === null || me === void 0 ? void 0 : (_me$address2 = me.address) === null || _me$address2 === void 0 ? void 0 : _me$address2.filter(address => (address === null || address === void 0 ? void 0 : address.type) === _framework_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .AddressType.Shipping */ .D.Shipping),
          atom: _store_checkout__WEBPACK_IMPORTED_MODULE_1__/* .shippingAddressAtom */ .du,
          type: _framework_utils_constants__WEBPACK_IMPORTED_MODULE_5__/* .AddressType.Shipping */ .D.Shipping
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(ScheduleGrid, {
          className: "shadow-700 bg-light p-5 md:p-8",
          label: t('text-delivery-schedule'),
          count: 4
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "w-full lg:w-96 mb-10 sm:mb-12 lg:mb-0 mt-10",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(RightSideView, {})
      })]
    })
  });
}
CheckoutPage.authenticate = true;
CheckoutPage.getLayout = _components_layouts_layout__WEBPACK_IMPORTED_MODULE_3__/* .getLayout */ .G;

/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 3317:
/***/ ((module) => {

module.exports = require("@stripe/react-stripe-js");

/***/ }),

/***/ 420:
/***/ ((module) => {

module.exports = require("@stripe/stripe-js");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3687:
/***/ ((module) => {

module.exports = require("camelcase-keys");

/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 8250:
/***/ ((module) => {

module.exports = require("jotai");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("jotai/utils");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 8718:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3295:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1958:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2662:
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9475:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4939,5218,9517,8926,2317,2395,6902,6578,857], () => (__webpack_exec__(2736)));
module.exports = __webpack_exports__;

})();