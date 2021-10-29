"use strict";
exports.id = 6902;
exports.ids = [6902];
exports.modules = {

/***/ 7831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ CloseIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const CloseIcon = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    fillRule: "evenodd",
    d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
    clipRule: "evenodd"
  })
}));

/***/ }),

/***/ 7438:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mu": () => (/* binding */ SettingsProvider),
/* harmony export */   "rV": () => (/* binding */ useSettings)
/* harmony export */ });
/* unused harmony export SettingsContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_logo_CP_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2695);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["initialValue"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




const siteSettings = {
  name: 'Compare Supplements',
  description: '',
  currencyCode: 'GBP',
  logo: _assets_img_logo_CP_png__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z
};
const initialState = {
  siteTitle: siteSettings.name,
  siteSubtitle: siteSettings.description,
  currency: siteSettings.currencyCode,
  logo: null,
  seo: {
    metaTitle: '',
    metaDescription: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: {
      id: 1,
      thumbnail: '',
      original: ''
    },
    twitterHandle: '',
    twitterCardType: '',
    metaTags: '',
    canonicalUrl: ''
  },
  google: {
    isEnable: false,
    tagManagerId: ''
  },
  facebook: {
    isEnable: false,
    appId: '',
    pageId: ''
  },
  contactDetails: {
    socials: [],
    contact: ''
  }
};
const SettingsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(initialState);
SettingsContext.displayName = 'SettingsContext';
const SettingsProvider = _ref => {
  let {
    initialValue
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [state] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(initialValue !== null && initialValue !== void 0 ? initialValue : initialState);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(SettingsContext.Provider, _objectSpread({
    value: state
  }, props));
};
const useSettings = () => {
  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(SettingsContext);

  if (context === undefined) {
    throw new Error(`useSettings must be used within a SettingsProvider`);
  }

  return context;
};

/***/ }),

/***/ 3315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Error": () => (/* binding */ Error),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


const Error = ({
  message
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)('common');
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
    className: "my-2 text-xs text-start text-red-500",
    children: t(message)
  });
};

const ErrorMessage = ({
  message
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)('common');
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
    className: "bg-red-400 p-5 mt-16 mx-auto max-w-sm min-w-min text-center text-lg text-light font-semibold rounded",
    children: t(message)
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorMessage);

/***/ }),

/***/ 4386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6126);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1420);
/* harmony import */ var _components_settings_settings_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7438);
/* harmony import */ var _assets_img_logo_CP_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2695);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
const _excluded = ["className"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








const Logo = _ref => {
  let {
    className
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    siteTitle
  } = (0,_components_settings_settings_context__WEBPACK_IMPORTED_MODULE_3__/* .useSettings */ .rV)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
    className: "w-20 sm:w-40",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, _objectSpread(_objectSpread({
      href: "/",
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('inline-flex', className)
    }, props), {}, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_0__/* .Image */ .E, {
        src: _assets_img_logo_CP_png__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z,
        alt: siteTitle || 'CompareSupplements Logo',
        loading: "eager"
      })
    }))
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ 4652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DY": () => (/* binding */ ModalProvider),
/* harmony export */   "X9": () => (/* binding */ useModalState),
/* harmony export */   "SO": () => (/* binding */ useModalAction)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const initialState = {
  view: undefined,
  isOpen: false,
  data: null
};

function modalReducer(state, action) {
  switch (action.type) {
    case 'open':
      return _objectSpread(_objectSpread({}, state), {}, {
        view: action.view,
        data: action.payload,
        isOpen: true
      });

    case 'close':
      return _objectSpread(_objectSpread({}, state), {}, {
        view: undefined,
        data: null,
        isOpen: false
      });

    default:
      throw new Error('Unknown Modal Action!');
  }
}

const ModalStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(initialState);
ModalStateContext.displayName = 'ModalStateContext';
const ModalActionContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(undefined);
ModalActionContext.displayName = 'ModalActionContext';
const ModalProvider = ({
  children
}) => {
  const [state, dispatch] = react__WEBPACK_IMPORTED_MODULE_0___default().useReducer(modalReducer, initialState);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ModalStateContext.Provider, {
    value: state,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(ModalActionContext.Provider, {
      value: dispatch,
      children: children
    })
  });
};
function useModalState() {
  const context = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(ModalStateContext);

  if (context === undefined) {
    throw new Error(`useModalState must be used within a ModalProvider`);
  }

  return context;
}
function useModalAction() {
  const dispatch = react__WEBPACK_IMPORTED_MODULE_0___default().useContext(ModalActionContext);

  if (dispatch === undefined) {
    throw new Error(`useModalAction must be used within a ModalProvider`);
  }

  return {
    openModal(view, payload) {
      dispatch({
        type: 'open',
        view,
        payload
      });
    },

    closeModal() {
      dispatch({
        type: 'close'
      });
    }

  };
}

/***/ }),

/***/ 6296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bt": () => (/* binding */ fetchGroups),
/* harmony export */   "RW": () => (/* binding */ useGroupsQuery),
/* harmony export */   "yi": () => (/* binding */ fetchGroup),
/* harmony export */   "xR": () => (/* binding */ useGroupQuery)
/* harmony export */ });
/* harmony import */ var _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3857);
/* harmony import */ var _framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);




class GroupService extends _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__/* .BaseService */ .b {}

const groupService = new GroupService(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.TYPE */ .P.TYPE);
const fetchGroups = async () => {
  const {
    data
  } = await groupService.findAll();
  return {
    types: data
  };
};
const useGroupsQuery = () => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.TYPE */ .P.TYPE, fetchGroups);
};
const fetchGroup = async slug => {
  const data = await groupService.findOne(slug);
  return {
    type: data
  };
};
const useGroupQuery = slug => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.TYPE */ .P.TYPE, slug], () => fetchGroup(slug), {
    enabled: Boolean(slug)
  });
};

/***/ }),

/***/ 8025:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_groups_groups_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6296);


const useHomepage = () => {
  var _data$types$find, _data$types, _data$types2;

  const {
    data
  } = (0,_framework_groups_groups_query__WEBPACK_IMPORTED_MODULE_0__/* .useGroupsQuery */ .RW)();
  const homePage = (_data$types$find = data === null || data === void 0 ? void 0 : (_data$types = data.types) === null || _data$types === void 0 ? void 0 : _data$types.find(type => {
    var _type$settings;

    return type === null || type === void 0 ? void 0 : (_type$settings = type.settings) === null || _type$settings === void 0 ? void 0 : _type$settings.isHome;
  })) !== null && _data$types$find !== void 0 ? _data$types$find : data === null || data === void 0 ? void 0 : (_data$types2 = data.types) === null || _data$types2 === void 0 ? void 0 : _data$types2[0];
  return {
    homePage
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useHomepage);

/***/ }),

/***/ 7900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hq": () => (/* binding */ checkoutAtom),
/* harmony export */   "y9": () => (/* binding */ clearCheckoutAtom),
/* harmony export */   "Km": () => (/* binding */ billingAddressAtom),
/* harmony export */   "du": () => (/* binding */ shippingAddressAtom),
/* harmony export */   "Gh": () => (/* binding */ deliveryTimeAtom),
/* harmony export */   "HA": () => (/* binding */ paymentGatewayAtom),
/* harmony export */   "_p": () => (/* binding */ verifiedTokenAtom),
/* harmony export */   "lu": () => (/* binding */ customerContactAtom),
/* harmony export */   "Jb": () => (/* binding */ verifiedResponseAtom),
/* harmony export */   "GO": () => (/* binding */ couponAtom),
/* harmony export */   "yw": () => (/* binding */ discountAtom),
/* harmony export */   "xc": () => (/* binding */ walletAtom),
/* harmony export */   "y2": () => (/* binding */ payableAmountAtom)
/* harmony export */ });
/* unused harmony export defaultCheckout */
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(509);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3837);
/* harmony import */ var jotai_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jotai_utils__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const defaultCheckout = {
  billing_address: null,
  shipping_address: null,
  delivery_time: null,
  payment_gateway: 'STRIPE',
  customer_contact: '',
  verified_response: null,
  coupon: null,
  payable_amount: 0,
  use_wallet: false
};
// Original atom.
const checkoutAtom = (0,jotai_utils__WEBPACK_IMPORTED_MODULE_1__.atomWithStorage)(_lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .CHECKOUT */ .iK, defaultCheckout);
const clearCheckoutAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(null, (_get, set, _data) => {
  return set(checkoutAtom, defaultCheckout);
});
const billingAddressAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => get(checkoutAtom).billing_address, (get, set, data) => {
  const prev = get(checkoutAtom);
  return set(checkoutAtom, _objectSpread(_objectSpread({}, prev), {}, {
    billing_address: data
  }));
});
const shippingAddressAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => get(checkoutAtom).shipping_address, (get, set, data) => {
  const prev = get(checkoutAtom);
  return set(checkoutAtom, _objectSpread(_objectSpread({}, prev), {}, {
    shipping_address: data
  }));
});
const deliveryTimeAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => get(checkoutAtom).delivery_time, (get, set, data) => {
  const prev = get(checkoutAtom);
  return set(checkoutAtom, _objectSpread(_objectSpread({}, prev), {}, {
    delivery_time: data
  }));
});
const paymentGatewayAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => get(checkoutAtom).payment_gateway, (get, set, data) => {
  const prev = get(checkoutAtom);
  return set(checkoutAtom, _objectSpread(_objectSpread({}, prev), {}, {
    payment_gateway: data
  }));
});
const verifiedTokenAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => get(checkoutAtom).token, (get, set, data) => {
  const prev = get(checkoutAtom);
  return set(checkoutAtom, _objectSpread(_objectSpread({}, prev), {}, {
    token: data
  }));
});
const customerContactAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => get(checkoutAtom).customer_contact, (get, set, data) => {
  const prev = get(checkoutAtom);
  return set(checkoutAtom, _objectSpread(_objectSpread({}, prev), {}, {
    customer_contact: data
  }));
});
const verifiedResponseAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => get(checkoutAtom).verified_response, (get, set, data) => {
  const prev = get(checkoutAtom);
  return set(checkoutAtom, _objectSpread(_objectSpread({}, prev), {}, {
    verified_response: data
  }));
});
const couponAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => get(checkoutAtom).coupon, (get, set, data) => {
  const prev = get(checkoutAtom);
  return set(checkoutAtom, _objectSpread(_objectSpread({}, prev), {}, {
    coupon: data
  }));
});
const discountAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => {
  var _get$coupon;

  return (_get$coupon = get(checkoutAtom).coupon) === null || _get$coupon === void 0 ? void 0 : _get$coupon.amount;
});
const walletAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => get(checkoutAtom).use_wallet, (get, set) => {
  const prev = get(checkoutAtom);
  return set(checkoutAtom, _objectSpread(_objectSpread({}, prev), {}, {
    use_wallet: !prev.use_wallet
  }));
});
const payableAmountAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(get => get(checkoutAtom).payable_amount, (get, set, data) => {
  const prev = get(checkoutAtom);
  return set(checkoutAtom, _objectSpread(_objectSpread({}, prev), {}, {
    payable_amount: data
  }));
});

/***/ }),

/***/ 5936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ drawerAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_0__);

const drawerAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)({
  display: false,
  view: ''
});

/***/ }),

/***/ 4436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Zl": () => (/* binding */ CartProvider),
  "jD": () => (/* binding */ useCart)
});

// UNUSED EXPORTS: cartContext

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/store/quick-cart/cart.utils.ts
var cart_utils = __webpack_require__(2075);
;// CONCATENATED MODULE: ./src/store/quick-cart/cart.reducer.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const initialState = {
  items: [],
  isEmpty: true,
  totalItems: 0,
  totalUniqueItems: 0,
  total: 0,
  meta: null
};
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM_WITH_QUANTITY":
      {
        const items = (0,cart_utils/* addItemWithQuantity */.Kv)(state.items, action.item, action.quantity);
        return generateFinalState(state, items);
      }

    case "REMOVE_ITEM_OR_QUANTITY":
      {
        const items = (0,cart_utils/* removeItemOrQuantity */.um)(state.items, action.id, action.quantity = 1);
        return generateFinalState(state, items);
      }

    case "ADD_ITEM":
      {
        const items = (0,cart_utils/* addItem */.jX)(state.items, action.item);
        return generateFinalState(state, items);
      }

    case "REMOVE_ITEM":
      {
        const items = (0,cart_utils/* removeItem */.cl)(state.items, action.id);
        return generateFinalState(state, items);
      }

    case "UPDATE_ITEM":
      {
        const items = (0,cart_utils/* updateItem */.$G)(state.items, action.id, action.item);
        return generateFinalState(state, items);
      }

    case "RESET_CART":
      return initialState;

    default:
      return state;
  }
}

const generateFinalState = (state, items) => {
  const totalUniqueItems = (0,cart_utils/* calculateUniqueItems */.tm)(items);
  return _objectSpread(_objectSpread({}, state), {}, {
    items: (0,cart_utils/* calculateItemTotals */.pQ)(items),
    totalItems: (0,cart_utils/* calculateTotalItems */.yL)(items),
    totalUniqueItems,
    total: (0,cart_utils/* calculateTotal */.tf)(items),
    isEmpty: totalUniqueItems === 0
  });
};
// EXTERNAL MODULE: external "react-use/lib/useLocalStorage"
var useLocalStorage_ = __webpack_require__(173);
var useLocalStorage_default = /*#__PURE__*/__webpack_require__.n(useLocalStorage_);
;// CONCATENATED MODULE: ./src/lib/use-local-storage.ts

// EXTERNAL MODULE: ./src/lib/constants.ts
var constants = __webpack_require__(509);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/store/checkout.ts
var checkout = __webpack_require__(7900);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/store/quick-cart/cart.context.tsx
function cart_context_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function cart_context_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { cart_context_ownKeys(Object(source), true).forEach(function (key) { cart_context_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { cart_context_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cart_context_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const cartContext = /*#__PURE__*/external_react_default().createContext(undefined);
cartContext.displayName = 'CartContext';
const useCart = () => {
  const context = external_react_default().useContext(cartContext);

  if (context === undefined) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
};
const CartProvider = props => {
  const [savedCart, saveCart] = useLocalStorage_default()(constants/* CART_KEY */.qW, JSON.stringify(initialState));
  const [state, dispatch] = external_react_default().useReducer(cartReducer, JSON.parse(savedCart));
  const [, emptyVerifiedResponse] = (0,external_jotai_.useAtom)(checkout/* verifiedResponseAtom */.Jb);
  external_react_default().useEffect(() => {
    emptyVerifiedResponse(null);
  }, [emptyVerifiedResponse, state]);
  external_react_default().useEffect(() => {
    saveCart(JSON.stringify(state));
  }, [state, saveCart]);

  const addItemToCart = (item, quantity) => dispatch({
    type: 'ADD_ITEM_WITH_QUANTITY',
    item,
    quantity
  });

  const removeItemFromCart = id => dispatch({
    type: 'REMOVE_ITEM_OR_QUANTITY',
    id
  });

  const clearItemFromCart = id => dispatch({
    type: 'REMOVE_ITEM',
    id
  });

  const isInCart = (0,external_react_.useCallback)(id => !!(0,cart_utils/* getItem */.rV)(state.items, id), [state.items]);
  const getItemFromCart = (0,external_react_.useCallback)(id => (0,cart_utils/* getItem */.rV)(state.items, id), [state.items]);
  const isInStock = (0,external_react_.useCallback)(id => (0,cart_utils/* inStock */.pz)(state.items, id), [state.items]);

  const resetCart = () => dispatch({
    type: 'RESET_CART'
  });

  const value = external_react_default().useMemo(() => cart_context_objectSpread(cart_context_objectSpread({}, state), {}, {
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    getItemFromCart,
    isInCart,
    isInStock,
    resetCart
  }), [getItemFromCart, isInCart, isInStock, state]);
  return /*#__PURE__*/jsx_runtime_.jsx(cartContext.Provider, cart_context_objectSpread({
    value: value
  }, props));
};

/***/ }),

/***/ 2075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kv": () => (/* binding */ addItemWithQuantity),
/* harmony export */   "um": () => (/* binding */ removeItemOrQuantity),
/* harmony export */   "jX": () => (/* binding */ addItem),
/* harmony export */   "rV": () => (/* binding */ getItem),
/* harmony export */   "$G": () => (/* binding */ updateItem),
/* harmony export */   "cl": () => (/* binding */ removeItem),
/* harmony export */   "pz": () => (/* binding */ inStock),
/* harmony export */   "pQ": () => (/* binding */ calculateItemTotals),
/* harmony export */   "tf": () => (/* binding */ calculateTotal),
/* harmony export */   "yL": () => (/* binding */ calculateTotalItems),
/* harmony export */   "tm": () => (/* binding */ calculateUniqueItems),
/* harmony export */   "eA": () => (/* binding */ calculatePaidTotal)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function addItemWithQuantity(items, item, quantity) {
  if (quantity <= 0) throw new Error("cartQuantity can't be zero or less than zero");
  const existingItemIndex = items.findIndex(existingItem => existingItem.id === item.id);

  if (existingItemIndex > -1) {
    const newItems = [...items];
    newItems[existingItemIndex].quantity += quantity;
    return newItems;
  }

  return [...items, _objectSpread(_objectSpread({}, item), {}, {
    quantity
  })];
}
function removeItemOrQuantity(items, id, quantity) {
  return items.reduce((acc, item) => {
    if (item.id === id) {
      const newQuantity = item.quantity - quantity;
      return newQuantity > 0 ? [...acc, _objectSpread(_objectSpread({}, item), {}, {
        quantity: newQuantity
      })] : [...acc];
    }

    return [...acc, item];
  }, []);
} // Simple CRUD for Item

function addItem(items, item) {
  return [...items, item];
}
function getItem(items, id) {
  return items.find(item => item.id === id);
}
function updateItem(items, id, item) {
  return items.map(existingItem => existingItem.id === id ? _objectSpread(_objectSpread({}, existingItem), item) : existingItem);
}
function removeItem(items, id) {
  return items.filter(existingItem => existingItem.id !== id);
}
function inStock(items, id) {
  const item = getItem(items, id);
  if (item) return item["quantity"] < item["stock"];
  return false;
}
const calculateItemTotals = items => items.map(item => _objectSpread(_objectSpread({}, item), {}, {
  itemTotal: item.price * item.quantity
}));
const calculateTotal = items => items.reduce((total, item) => total + item.quantity * item.price, 0);
const calculateTotalItems = items => items.reduce((sum, item) => sum + item.quantity, 0);
const calculateUniqueItems = items => items.length;
const calculatePaidTotal = ({
  totalAmount,
  tax,
  shipping_charge
}, discount) => {
  let paidTotal = totalAmount + tax + shipping_charge;

  if (discount) {
    paidTotal = paidTotal - discount;
  }

  return paidTotal;
};

/***/ }),

/***/ 2695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/src/assets/img/logo_CP.afb1479d917856459c204abdf4aefa3c.png","height":546,"width":800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAACVBMVEUTExMvLy9MaXEVq3JRAAAAA3RSTlMNGABwtc/UAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIUlEQVQImWNgYmBgAgEGBkYGBkZGBhiDkQHEhEiBSSADAAPcADKg2uRUAAAAAElFTkSuQmCC"});

/***/ })

};
;