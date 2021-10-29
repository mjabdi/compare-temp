"use strict";
exports.id = 8717;
exports.ids = [8717];
exports.modules = {

/***/ 6566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ fetchSettings),
/* harmony export */   "n": () => (/* binding */ useSettingsQuery)
/* harmony export */ });
/* harmony import */ var _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3857);
/* harmony import */ var _framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);




class SettingsService extends _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__/* .BaseService */ .b {}

const settingsService = new SettingsService(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS);
const fetchSettings = async () => {
  const {
    data
  } = await settingsService.findAll();
  return {
    settings: data
  };
};
const useSettingsQuery = () => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.SETTINGS */ .P.SETTINGS, fetchSettings);
};

/***/ }),

/***/ 3788:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "uL": () => (/* binding */ useShopsQuery),
/* harmony export */   "NB": () => (/* binding */ fetchShops),
/* harmony export */   "Dh": () => (/* binding */ fetchShop)
/* harmony export */ });
/* unused harmony export useShopQuery */
/* harmony import */ var _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3857);
/* harmony import */ var _framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9517);
/* harmony import */ var _framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(874);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






class ShopService extends _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__/* .BaseService */ .b {}

const shopService = new ShopService(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.SHOPS */ .P.SHOPS);

const fetchShops = async ({
  queryKey,
  pageParam
}) => {
  const params = queryKey[1];
  let fetchedData = {};

  if (pageParam) {
    fetchedData = await shopService.get(pageParam);
  } else {
    fetchedData = await shopService.find(params);
  }

  const {
    data
  } = fetchedData,
        rest = _objectWithoutProperties(fetchedData, _excluded);

  return {
    data,
    paginatorInfo: (0,_framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_1__/* .mapPaginatorData */ .Q)(_objectSpread({}, rest))
  };
};

const useShopsQuery = (params = {}, options) => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useInfiniteQuery)([_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_2__/* .API_ENDPOINTS.SHOPS */ .P.SHOPS, params], fetchShops, _objectSpread(_objectSpread({}, options), {}, {
    getNextPageParam: ({
      paginatorInfo
    }) => paginatorInfo.nextPageUrl
  }));
};


const fetchShop = slug => {
  return shopService.findOne(slug);
};
const useShopQuery = slug => {
  return useQuery([API_ENDPOINTS.SHOPS, slug], () => fetchShop(slug));
};

/***/ })

};
;