"use strict";
exports.id = 8926;
exports.ids = [8926];
exports.modules = {

/***/ 3857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "b": () => (/* binding */ BaseService)
});

// EXTERNAL MODULE: external "lodash/pickBy"
var pickBy_ = __webpack_require__(4661);
var pickBy_default = /*#__PURE__*/__webpack_require__.n(pickBy_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
;// CONCATENATED MODULE: ./src/framework/rest/utils/get-token.ts

const getToken = () => {
  if (false) {}

  return external_js_cookie_default().get('auth_token');
};
;// CONCATENATED MODULE: ./src/framework/rest/utils/request.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const request = external_axios_default().create({
  baseURL: "https://www.compare-supplements.co.uk/api",
  // process.env.NEXT_PUBLIC_REST_API_ENDPOINT, // TODO: take this api URL from env
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
}); // Change request data/error here

request.interceptors.request.use(config => {
  const token = getToken();
  config.headers = _objectSpread(_objectSpread({}, config.headers), {}, {
    Authorization: `Bearer ${token ? token : ''}`
  });
  return config;
}, error => {
  return Promise.reject(error);
});
/* harmony default export */ const utils_request = (request);
;// CONCATENATED MODULE: ./src/framework/rest/utils/base-service.ts
const _excluded = ["limit", "page", "parent", "fields", "orderBy", "sortedBy"];

function base_service_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function base_service_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { base_service_ownKeys(Object(source), true).forEach(function (key) { base_service_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { base_service_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function base_service_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// const responseBody = (response: AxiosResponse) => response.data;
class BaseService {
  constructor(basePath) {
    this.basePath = basePath;

    base_service_defineProperty(this, "http", utils_request);
  }

  findAll() {
    return this.http.get(this.basePath);
  }

  find(params) {
    const {
      limit = 30,
      page = 1,
      parent = 'null',
      fields,
      orderBy,
      sortedBy
    } = params,
          restParams = _objectWithoutProperties(params, _excluded);

    const search = this.formatSearchString(base_service_objectSpread({}, restParams));
    const queryString = this.formatSearchParams({
      limit,
      page,
      search,
      parent,
      fields,
      orderBy,
      sortedBy
    });
    return this.http.get(`${this.basePath}?${queryString}`).then(res => res.data);
  }

  findOne(id) {
    return this.http.get(`${this.basePath}/${id}`).then(res => res.data);
  }

  create(data, options) {
    return this.http.post(this.basePath, data, options).then(res => res.data);
  }

  update(id, data) {
    return this.http.put(`${this.basePath}/${id}`, data).then(res => res.data);
  }

  delete(id) {
    return this.http.delete(`${this.basePath}/${id}`);
  } // get<T = never, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig<T>): Promise<R>;


  get(url) {
    return this.http.get(url).then(res => res.data);
  }

  post(url, data) {
    return this.http.post(url, data);
  }

  put(url, data) {
    return this.http.put(url, data);
  }

  formatSearchParams({
    limit,
    page,
    search,
    parent,
    fields,
    orderBy,
    sortedBy
  }) {
    return new URLSearchParams(base_service_objectSpread(base_service_objectSpread(base_service_objectSpread(base_service_objectSpread({
      searchJoin: 'and',
      limit: limit.toString(),
      page: page.toString(),
      parent: parent === null || parent === void 0 ? void 0 : parent.toString()
    }, Boolean(sortedBy) && {
      sortedBy
    }), Boolean(orderBy) && {
      orderBy
    }), Boolean(search) && {
      search
    }), Boolean(fields) && {
      with: fields === null || fields === void 0 ? void 0 : fields.join(';')
    })).toString();
  }

  formatSearchString(values) {
    const parsedValues = pickBy_default()(values);
    return Object.keys(parsedValues).map(k => {
      if (['type', 'categories'].includes(k)) {
        return `${k}.slug:${parsedValues[k]}`;
      }

      return `${k}:${parsedValues[k]}`;
    }).join(';');
  }

}

/***/ }),

/***/ 874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ API_ENDPOINTS)
/* harmony export */ });
const API_ENDPOINTS = {
  PRODUCTS: 'products',
  SETTINGS: 'settings',
  CUSTOMER: 'me',
  CUSTOMERS: 'users',
  COUPONS: 'coupons',
  CATEGORIES: 'categories',
  TYPE: 'types',
  UPLOAD: 'attachments',
  ORDERS: 'orders',
  ORDER_STATUS: 'order-status',
  LOGIN: 'token',
  SOCIAL_LOGIN: 'social-login-token',
  SEND_OTP_CODE: 'send-otp-code',
  VERIFY_OTP_CODE: 'verify-otp-code',
  OTP_LOGIN: 'otp-login',
  UPDATE_CONTACT: 'update-contact',
  REGISTER: 'register',
  FORGET_PASSWORD: 'forget-password',
  LOGOUT: 'logout',
  CHANGE_PASSWORD: 'change-password',
  RESET_PASSWORD: 'reset-password',
  VERIFY_FORGET_PASSWORD: 'verify-forget-password-token',
  VERIFY_CHECKOUT: 'orders/checkout/verify',
  CONTACT: 'contact-us',
  ADDRESS: 'address',
  SHOPS: 'shops',
  ORDER_TRACKING_NUMBER: 'tracking-number',
  REFUNDS: 'refunds'
};

/***/ }),

/***/ 509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "qW": () => (/* binding */ CART_KEY),
/* harmony export */   "UA": () => (/* binding */ AUTH_TOKEN),
/* harmony export */   "iK": () => (/* binding */ CHECKOUT)
/* harmony export */ });
/* unused harmony exports TOKEN, AUTH_PERMISSIONS, LIMIT, SUPER_ADMIN, CUSTOMER */
const CART_KEY = 'pick-cart';
const TOKEN = 'token';
const AUTH_TOKEN = 'auth_token';
const AUTH_PERMISSIONS = 'auth_permissions';
const LIMIT = 10;
const SUPER_ADMIN = 'super_admin';
const CUSTOMER = 'customer';
const CHECKOUT = 'pickbazar-checkout';

/***/ }),

/***/ 8879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ authorizationAtom)
/* harmony export */ });
/* unused harmony export checkIsLoggedIn */
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(509);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6155);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);



function checkIsLoggedIn() {
  const token = js_cookie__WEBPACK_IMPORTED_MODULE_1___default().get(_lib_constants__WEBPACK_IMPORTED_MODULE_2__/* .AUTH_TOKEN */ .UA);
  if (!token) return false;
  return true;
}
const authorizationAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(checkIsLoggedIn());

/***/ })

};
;