"use strict";
exports.id = 2702;
exports.ids = [2702];
exports.modules = {

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

/***/ }),

/***/ 2702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mU": () => (/* binding */ useOrdersQuery),
/* harmony export */   "OT": () => (/* binding */ useOrderQuery),
/* harmony export */   "Qk": () => (/* binding */ useOrderStatusesQuery),
/* harmony export */   "kD": () => (/* binding */ useCreateOrderMutation)
/* harmony export */ });
/* unused harmony exports fetchOrders, fetchOrder, fetchOrderStatuses */
/* harmony import */ var _framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9517);
/* harmony import */ var _framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5541);
const _excluded = ["data"],
      _excluded2 = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const fetchOrders = async ({
  queryKey,
  pageParam
}) => {
  const params = queryKey[1];
  let fetchedData = {};

  if (pageParam) {
    fetchedData = await _order_service__WEBPACK_IMPORTED_MODULE_3__/* .orderService.get */ .X.get(pageParam);
  } else {
    fetchedData = await _order_service__WEBPACK_IMPORTED_MODULE_3__/* .orderService.find */ .X.find(params);
  }

  const {
    data
  } = fetchedData,
        rest = _objectWithoutProperties(fetchedData, _excluded);

  return {
    data,
    paginatorInfo: (0,_framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_0__/* .mapPaginatorData */ .Q)(_objectSpread({}, rest))
  };
};

const useOrdersQuery = (params, options) => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useInfiniteQuery)([_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.ORDERS */ .P.ORDERS, params], fetchOrders, _objectSpread(_objectSpread({}, options), {}, {
    getNextPageParam: ({
      paginatorInfo
    }) => paginatorInfo.nextPageUrl
  }));
};


const fetchOrder = async trackingNumber => {
  const data = await _order_service__WEBPACK_IMPORTED_MODULE_3__/* .orderService.findOne */ .X.findOne(`${_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.ORDER_TRACKING_NUMBER */ .P.ORDER_TRACKING_NUMBER}/${trackingNumber}?with=wallet_point`);
  return {
    order: data
  };
};
const useOrderQuery = ({
  tracking_number
}) => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(['order', tracking_number], () => fetchOrder(tracking_number));
};
const fetchOrderStatuses = async () => {
  //@ts-ignore
  const _await$orderService$g = await _order_service__WEBPACK_IMPORTED_MODULE_3__/* .orderService.get */ .X.get(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.ORDER_STATUS */ .P.ORDER_STATUS),
        {
    data
  } = _await$orderService$g,
        rest = _objectWithoutProperties(_await$orderService$g, _excluded2);

  return {
    order_statuses: {
      data,
      paginatorInfo: (0,_framework_utils_data_mappers__WEBPACK_IMPORTED_MODULE_0__/* .mapPaginatorData */ .Q)(_objectSpread({}, rest))
    }
  };
};
const useOrderStatusesQuery = () => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.ORDER_STATUS */ .P.ORDER_STATUS, fetchOrderStatuses);
};
const useCreateOrderMutation = () => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)(input => _order_service__WEBPACK_IMPORTED_MODULE_3__/* .orderService.create */ .X.create(input));
};

/***/ })

};
;