"use strict";
exports.id = 9300;
exports.ids = [9300];
exports.modules = {

/***/ 9300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ OTP)
/* harmony export */ });
/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7993);
/* harmony import */ var _framework_auth_auth_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6838);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5183);
/* harmony import */ var react_phone_input_2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_phone_input_2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5013);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2512);
/* harmony import */ var react_otp_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_otp_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ui_forms_label__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3883);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












const OTP = ({
  defaultValue,
  onVerify
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_7__.useTranslation)('common');
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const {
    0: number,
    1: setNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(defaultValue !== null && defaultValue !== void 0 ? defaultValue : '');
  const {
    0: otp,
    1: setOtp
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: hasOTP,
    1: setHasOTP
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: otpId,
    1: setOtpId
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    mutate: verifyOtpCode,
    isLoading: otpVerifyLoading
  } = (0,_framework_auth_auth_query__WEBPACK_IMPORTED_MODULE_1__/* .useVerifyOtpCodeMutation */ .n5)();
  const {
    mutate: sendOtpCode,
    isLoading: loading
  } = (0,_framework_auth_auth_query__WEBPACK_IMPORTED_MODULE_1__/* .useSendOtpCodeMutation */ .MZ)();

  function onSendCodeSubmission() {
    sendOtpCode({
      phone_number: number
    }, {
      onSuccess: data => {
        if (data !== null && data !== void 0 && data.success) {
          var _data$sendOtpCode;

          setHasOTP(true);
          setOtpId(data === null || data === void 0 ? void 0 : (_data$sendOtpCode = data.sendOtpCode) === null || _data$sendOtpCode === void 0 ? void 0 : _data$sendOtpCode.id);
        }

        if (!(data !== null && data !== void 0 && data.success)) {
          console.log('text-otp-failed');
          setErrorMessage(data === null || data === void 0 ? void 0 : data.message);
        }
      },
      onError: error => {
        var _error$response, _error$response$data;

        setErrorMessage(error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : (_error$response$data = _error$response.data) === null || _error$response$data === void 0 ? void 0 : _error$response$data.message);
      }
    });
  }

  function onVerifyCodeSubmission() {
    verifyOtpCode({
      phone_number: number,
      code: otp,
      otp_id: otpId
    }, {
      onSuccess: data => {
        if (data !== null && data !== void 0 && data.success) {
          onVerify(number);
        } else {
          setErrorMessage(data === null || data === void 0 ? void 0 : data.message);
        }

        setHasOTP(false);
      },
      onError: error => {
        var _error$response2, _error$response2$data;

        setErrorMessage(error === null || error === void 0 ? void 0 : (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : (_error$response2$data = _error$response2.data) === null || _error$response2$data === void 0 ? void 0 : _error$response2$data.message);
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [!hasOTP ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((react_phone_input_2__WEBPACK_IMPORTED_MODULE_3___default()), {
        country: 'us',
        value: number,
        onChange: phone => setNumber(`+${phone}`),
        inputClass: "!p-0 !pe-4 !ps-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-border-base !border-e-0 !rounded !rounded-e-none focus:!border-accent !h-12",
        dropdownClass: "focus:!ring-0 !border !border-border-base !shadow-350"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        loading: loading,
        disabled: loading,
        onClick: onSendCodeSubmission,
        className: "!rounded-s-none",
        children: t('text-send-otp')
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "w-full flex flex-col md:flex-row md:items-center md:space-x-5",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ui_forms_label__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
        className: "md:mb-0",
        children: t('text-otp-code')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((react_otp_input__WEBPACK_IMPORTED_MODULE_5___default()), {
        value: otp,
        onChange: value => setOtp(value),
        numInputs: 6,
        separator: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          className: "hidden sm:inline-block sm:mx-2",
          children: "-"
        }),
        containerStyle: "justify-center space-x-2 sm:space-x-0 mb-5 md:mb-0",
        inputStyle: "flex items-center justify-center !w-full sm:!w-11 appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base rounded focus:border-accent h-12",
        disabledStyle: "!bg-gray-100"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ui_button__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        loading: otpVerifyLoading,
        disabled: otpVerifyLoading,
        onClick: onVerifyCodeSubmission,
        children: t('text-verify-code')
      })]
    }), errorMessage && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ui_alert__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
      variant: "error",
      message: t(errorMessage),
      className: "mt-4",
      closeable: true,
      onClose: () => setErrorMessage(null)
    })]
  });
};

/***/ })

};
;