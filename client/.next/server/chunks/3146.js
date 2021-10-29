"use strict";
exports.id = 3146;
exports.ids = [3146];
exports.modules = {

/***/ 3146:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ID": () => (/* binding */ useCouponsQuery),
  "Mu": () => (/* binding */ useVerifyCouponMutation)
});

// UNUSED EXPORTS: fetchCoupons

// EXTERNAL MODULE: ./src/framework/rest/utils/data-mappers.ts
var data_mappers = __webpack_require__(9517);
// EXTERNAL MODULE: ./src/framework/rest/utils/endpoints.ts
var endpoints = __webpack_require__(874);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/framework/rest/utils/base-service.ts + 2 modules
var base_service = __webpack_require__(3857);
;// CONCATENATED MODULE: ./src/framework/rest/coupons/coupon.service.ts



class Coupon extends base_service/* BaseService */.b {
  verifyCoupon(input) {
    return this.http.post(this.basePath + '/verify', input).then(res => res.data);
  }

}

const couponService = new Coupon(endpoints/* API_ENDPOINTS.COUPONS */.P.COUPONS);
;// CONCATENATED MODULE: ./src/framework/rest/coupons/coupons.query.ts
const _excluded = ["data"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const fetchCoupons = async ({
  queryKey,
  pageParam
}) => {
  const params = queryKey[1];
  let fetchedData = {};

  if (pageParam) {
    fetchedData = await couponService.get(pageParam);
  } else {
    fetchedData = await couponService.find(params);
  }

  const {
    data
  } = fetchedData,
        rest = _objectWithoutProperties(fetchedData, _excluded);

  return {
    data,
    paginatorInfo: (0,data_mappers/* mapPaginatorData */.Q)(_objectSpread({}, rest))
  };
};
const useCouponsQuery = (options = {
  limit: 15
}) => {
  return (0,external_react_query_.useInfiniteQuery)([endpoints/* API_ENDPOINTS.COUPONS */.P.COUPONS, options], fetchCoupons, {
    getNextPageParam: ({
      paginatorInfo
    }) => paginatorInfo.nextPageUrl
  });
};
const useVerifyCouponMutation = () => {
  return (0,external_react_query_.useMutation)(input => couponService.verifyCoupon(input));
};

/***/ })

};
;