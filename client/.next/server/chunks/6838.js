"use strict";
exports.id = 6838;
exports.ids = [6838];
exports.modules = {

/***/ 6838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "$h": () => (/* binding */ useChangePasswordMutation),
  "xy": () => (/* binding */ useForgetPasswordMutation),
  "YA": () => (/* binding */ useLoginMutation),
  "_y": () => (/* binding */ useLogoutMutation),
  "_0": () => (/* binding */ useOtpLoginMutation),
  "l4": () => (/* binding */ useRegisterMutation),
  "gL": () => (/* binding */ useResetPasswordMutation),
  "MZ": () => (/* binding */ useSendOtpCodeMutation),
  "u4": () => (/* binding */ useSocialLoginMutation),
  "AV": () => (/* binding */ useVerifyForgetPasswordTokenMutation),
  "n5": () => (/* binding */ useVerifyOtpCodeMutation)
});

// UNUSED EXPORTS: useUpdateContactMutation

// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: ./src/framework/rest/utils/base-service.ts + 2 modules
var base_service = __webpack_require__(3857);
// EXTERNAL MODULE: ./src/framework/rest/utils/endpoints.ts
var endpoints = __webpack_require__(874);
;// CONCATENATED MODULE: ./src/framework/rest/auth/auth.service.ts



class Auth extends base_service/* BaseService */.b {
  login(input) {
    return this.http.post(endpoints/* API_ENDPOINTS.LOGIN */.P.LOGIN, input).then(res => res.data);
  }

  socialLogin(input) {
    return this.http.post(endpoints/* API_ENDPOINTS.SOCIAL_LOGIN */.P.SOCIAL_LOGIN, input).then(res => res.data);
  }

  sendOtpCode(input) {
    return this.http.post(endpoints/* API_ENDPOINTS.SEND_OTP_CODE */.P.SEND_OTP_CODE, input).then(res => res.data);
  }

  verifyOtpCode(input) {
    return this.http.post(endpoints/* API_ENDPOINTS.VERIFY_OTP_CODE */.P.VERIFY_OTP_CODE, input).then(res => res.data);
  }

  otpLogin(input) {
    return this.http.post(endpoints/* API_ENDPOINTS.OTP_LOGIN */.P.OTP_LOGIN, input).then(res => res.data);
  }

  updateContact(input) {
    return this.http.post(endpoints/* API_ENDPOINTS.UPDATE_CONTACT */.P.UPDATE_CONTACT, input).then(res => res.data);
  }

  register(input) {
    return this.http.post(endpoints/* API_ENDPOINTS.REGISTER */.P.REGISTER, input).then(res => res.data);
  }

  logout() {
    return this.http.post(endpoints/* API_ENDPOINTS.LOGOUT */.P.LOGOUT);
  }

  changePassword(input) {
    return this.http.post(endpoints/* API_ENDPOINTS.CHANGE_PASSWORD */.P.CHANGE_PASSWORD, input).then(res => res.data);
  }

  forgetPassword(input) {
    return this.http.post(endpoints/* API_ENDPOINTS.FORGET_PASSWORD */.P.FORGET_PASSWORD, input).then(res => res.data);
  }

  resetPassword(input) {
    return this.http.post(endpoints/* API_ENDPOINTS.RESET_PASSWORD */.P.RESET_PASSWORD, input).then(res => res.data);
  }

  verifyForgetPassword(input) {
    return this.http.post(endpoints/* API_ENDPOINTS.VERIFY_FORGET_PASSWORD */.P.VERIFY_FORGET_PASSWORD, input).then(res => res.data);
  }

}

const auth_service_AuthService = new Auth('auth');
;// CONCATENATED MODULE: ./src/framework/rest/auth/auth.query.ts
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useChangePasswordMutation = () => {
  return (0,external_react_query_.useMutation)(input => auth_service_AuthService.changePassword(input));
};
const useForgetPasswordMutation = () => {
  return (0,external_react_query_.useMutation)(input => auth_service_AuthService.forgetPassword(input));
};
const useLoginMutation = () => {
  return (0,external_react_query_.useMutation)(input => auth_service_AuthService.login(input));
};
const useLogoutMutation = () => {
  return (0,external_react_query_.useMutation)(() => auth_service_AuthService.logout());
};
const useOtpLoginMutation = () => {
  return (0,external_react_query_.useMutation)(input => auth_service_AuthService.otpLogin(input));
};
const useRegisterMutation = () => {
  return (0,external_react_query_.useMutation)(input => auth_service_AuthService.register(input));
};
const useResetPasswordMutation = () => {
  return (0,external_react_query_.useMutation)(input => auth_service_AuthService.resetPassword(input));
};
const useSendOtpCodeMutation = () => {
  return (0,external_react_query_.useMutation)(input => auth_service_AuthService.sendOtpCode(input));
};
const useSocialLoginMutation = options => {
  return (0,external_react_query_.useMutation)(input => auth_service_AuthService.socialLogin(input), _objectSpread({
    onError: error => {
      console.log(error.message);
    }
  }, options));
};
const useUpdateContactMutation = () => {
  return useMutation(input => AuthService.updateContact(input));
};
const useVerifyForgetPasswordTokenMutation = () => {
  return (0,external_react_query_.useMutation)(input => auth_service_AuthService.verifyForgetPassword(input));
};
const useVerifyOtpCodeMutation = () => {
  return (0,external_react_query_.useMutation)(input => auth_service_AuthService.verifyOtpCode(input));
};

/***/ })

};
;