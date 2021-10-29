"use strict";
exports.id = 6098;
exports.ids = [6098];
exports.modules = {

/***/ 2528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ formatAddress)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function removeFalsy(obj) {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => Boolean(v)));
}

function formatAddress(address) {
  if (!address) return;
  const temp = ['street_address', 'state', 'city', 'zip', 'country'].reduce((acc, k) => _objectSpread(_objectSpread({}, acc), {}, {
    [k]: address[k]
  }), {});
  const formattedAddress = removeFalsy(temp);
  return Object.values(formattedAddress).join(', ');
}

/***/ })

};
;