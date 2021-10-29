"use strict";
exports.id = 7037;
exports.ids = [7037];
exports.modules = {

/***/ 7037:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "c": () => (/* binding */ useCreateRefundMutation),
  "m": () => (/* binding */ useRefundsQuery)
});

// EXTERNAL MODULE: ./src/framework/rest/utils/data-mappers.ts
var data_mappers = __webpack_require__(9517);
// EXTERNAL MODULE: ./src/framework/rest/utils/endpoints.ts
var endpoints = __webpack_require__(874);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/framework/rest/utils/base-service.ts + 2 modules
var base_service = __webpack_require__(3857);
;// CONCATENATED MODULE: ./src/framework/rest/refunds/refunds.service.ts



class RefundService extends base_service/* BaseService */.b {}

const refundService = new RefundService(endpoints/* API_ENDPOINTS.REFUNDS */.P.REFUNDS);
;// CONCATENATED MODULE: ./src/framework/rest/refunds/refunds.query.ts
const _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






async function fetchRefunds({
  queryKey,
  pageParam
}) {
  const params = queryKey[1];
  let fetchedData = {};

  if (pageParam) {
    fetchedData = await refundService.get(pageParam);
  } else {
    fetchedData = await refundService.find(params);
  }

  const {
    data
  } = fetchedData,
        rest = _objectWithoutProperties(fetchedData, _excluded);

  return {
    data,
    paginatorInfo: (0,data_mappers/* mapPaginatorData */.Q)(_objectSpread({}, rest))
  };
}

const useRefundsQuery = (params, options) => {
  return (0,external_react_query_.useInfiniteQuery)([endpoints/* API_ENDPOINTS.REFUNDS */.P.REFUNDS, params], fetchRefunds, _objectSpread(_objectSpread({}, options), {}, {
    getNextPageParam: ({
      paginatorInfo
    }) => paginatorInfo.nextPageUrl
  }));
};
const useCreateRefundMutation = () => {
  return (0,external_react_query_.useMutation)(input => refundService.create(input));
};

/***/ })

};
;