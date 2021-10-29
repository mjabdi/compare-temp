"use strict";
exports.id = 7640;
exports.ids = [7640];
exports.modules = {

/***/ 7640:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ otp_login_view)
});

// EXTERNAL MODULE: ./src/components/ui/logo.tsx
var logo = __webpack_require__(4386);
// EXTERNAL MODULE: ./src/components/ui/modal/modal.context.tsx
var modal_context = __webpack_require__(4652);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(7789);
// EXTERNAL MODULE: external "react-phone-input-2"
var external_react_phone_input_2_ = __webpack_require__(5183);
var external_react_phone_input_2_default = /*#__PURE__*/__webpack_require__.n(external_react_phone_input_2_);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(5013);
// EXTERNAL MODULE: ./src/framework/rest/auth/auth.query.ts + 1 modules
var auth_query = __webpack_require__(6838);
// EXTERNAL MODULE: ./src/lib/constants.ts
var constants = __webpack_require__(509);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/store/authorization-atom.ts
var authorization_atom = __webpack_require__(8879);
// EXTERNAL MODULE: external "react-otp-input"
var external_react_otp_input_ = __webpack_require__(2512);
var external_react_otp_input_default = /*#__PURE__*/__webpack_require__.n(external_react_otp_input_);
// EXTERNAL MODULE: ./src/components/ui/forms/input.tsx
var input = __webpack_require__(5549);
// EXTERNAL MODULE: ./src/components/ui/forms/label.tsx
var label = __webpack_require__(3883);
// EXTERNAL MODULE: ./src/components/ui/forms/form.tsx
var forms_form = __webpack_require__(6509);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/auth/otp-login-form.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const otpLoginFormSchema = external_yup_.object().shape({
  email: external_yup_.string().email('error-email-format').required('error-email-required'),
  name: external_yup_.string().required('error-name-required'),
  code: external_yup_.string().required('error-code-required')
});

const OtpLoginForm = ({
  onSubmit,
  isContactExist,
  loading
}) => {
  const {
    t
  } = (0,external_react_i18next_.useTranslation)('common');
  const {
    closeModal
  } = (0,modal_context/* useModalAction */.SO)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "space-y-5 border border-gray-200 rounded p-5",
    children: /*#__PURE__*/jsx_runtime_.jsx(forms_form/* Form */.l, {
      onSubmit: onSubmit,
      validationSchema: otpLoginFormSchema,
      children: ({
        register,
        control,
        formState: {
          errors
        }
      }) => {
        var _errors$email, _errors$name;

        return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [!isContactExist && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
              label: t('text-email')
            }, register('email')), {}, {
              type: "email",
              variant: "outline",
              className: "mb-5",
              error: t((_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message)
            })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
              label: t('text-name')
            }, register('name')), {}, {
              variant: "outline",
              className: "mb-5",
              error: t((_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message)
            }))]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx(label/* default */.Z, {
              children: t('text-otp-code')
            }), /*#__PURE__*/jsx_runtime_.jsx(external_react_hook_form_.Controller, {
              control: control,
              render: ({
                field: {
                  onChange,
                  onBlur,
                  value
                }
              }) => /*#__PURE__*/jsx_runtime_.jsx((external_react_otp_input_default()), {
                value: value,
                onChange: onChange,
                numInputs: 6,
                separator: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: "hidden sm:inline-block sm:mx-2",
                  children: "-"
                }),
                containerStyle: "justify-center space-x-2 sm:space-x-0",
                inputStyle: "flex items-center justify-center !w-full sm:!w-11 appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base rounded focus:border-accent h-12",
                disabledStyle: "!bg-gray-100"
              }),
              name: "code",
              defaultValue: ""
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "grid grid-cols-2 gap-5",
            children: [/*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              variant: "outline",
              onClick: closeModal,
              children: t('text-cancel')
            }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              loading: loading,
              disabled: loading,
              children: t('text-verify-code')
            })]
          })]
        });
      }
    })
  });
};

/* harmony default export */ const otp_login_form = (OtpLoginForm);
;// CONCATENATED MODULE: ./src/framework/rest/auth/otp-login.tsx
function otp_login_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function otp_login_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { otp_login_ownKeys(Object(source), true).forEach(function (key) { otp_login_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { otp_login_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function otp_login_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const OtpLogin = () => {
  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)('');
  const {
    0: otpId,
    1: setOtpId
  } = (0,external_react_.useState)('');
  const {
    0: phoneNumber,
    1: setPhoneNumber
  } = (0,external_react_.useState)('');
  const {
    0: showOtpInput,
    1: setShowOtpInput
  } = (0,external_react_.useState)(false);
  const {
    0: isContactExist,
    1: setIsContactExist
  } = (0,external_react_.useState)(false);
  const [_, authorize] = (0,external_jotai_.useAtom)(authorization_atom/* authorizationAtom */.O);
  const {
    t
  } = (0,external_react_i18next_.useTranslation)('common');
  const {
    closeModal
  } = (0,modal_context/* useModalAction */.SO)();
  const {
    mutate: sendOtpCode,
    isLoading: loading
  } = (0,auth_query/* useSendOtpCodeMutation */.MZ)();
  const {
    mutate: otpLogin,
    isLoading: otpLoginLoading
  } = (0,auth_query/* useOtpLoginMutation */._0)();

  function onSendCodeSubmission() {
    sendOtpCode({
      phone_number: phoneNumber
    }, {
      onSuccess: data => {
        if (data !== null && data !== void 0 && data.success) {
          setIsContactExist(data === null || data === void 0 ? void 0 : data.is_contact_exist);
          setShowOtpInput(true);
          setOtpId(data === null || data === void 0 ? void 0 : data.id);
        }

        if (!(data !== null && data !== void 0 && data.success)) {
          var _data$sendOtpCode;

          setError(data === null || data === void 0 ? void 0 : (_data$sendOtpCode = data.sendOtpCode) === null || _data$sendOtpCode === void 0 ? void 0 : _data$sendOtpCode.message);
        }
      },
      onError: err => {
        setError(err.message);
      }
    });
  }

  function onOtpLoginSubmission(values) {
    if (phoneNumber) {
      otpLogin(otp_login_objectSpread(otp_login_objectSpread({}, values), {}, {
        phone_number: phoneNumber,
        otp_id: otpId
      }), {
        onSuccess: data => {
          var _data$permissions;

          if (data !== null && data !== void 0 && data.token && data !== null && data !== void 0 && (_data$permissions = data.permissions) !== null && _data$permissions !== void 0 && _data$permissions.length) {
            external_js_cookie_default().set(constants/* AUTH_TOKEN */.UA, data.token);
            authorize(true);
            closeModal();
          }

          if (!(data !== null && data !== void 0 && data.token)) {
            setError('text-otp-verify-failed');
          }
        },
        onError: err => {
          setError(err.message);
        }
      });
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "mt-4",
    children: [error && /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      variant: "error",
      message: t(error),
      className: "mt-4",
      closeable: true,
      onClose: () => setError('')
    }), !showOtpInput ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx((external_react_phone_input_2_default()), {
        country: 'us',
        value: phoneNumber,
        onChange: phone => setPhoneNumber(`+${phone}`),
        inputClass: "!p-0 !pe-4 !ps-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-border-base !border-e-0 !rounded !rounded-e-none focus:!border-accent !h-12",
        dropdownClass: "focus:!ring-0 !border !border-border-base !shadow-350"
      }), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
        loading: loading,
        disabled: loading,
        onClick: onSendCodeSubmission,
        className: "!rounded-s-none",
        children: t('text-send-otp')
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx(otp_login_form, {
      onSubmit: onOtpLoginSubmission,
      loading: otpLoginLoading,
      isContactExist: isContactExist
    })]
  });
};

/* harmony default export */ const otp_login = (OtpLogin);
;// CONCATENATED MODULE: ./src/components/auth/otp-login-view.tsx







const OtpLoginView = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    openModal
  } = (0,modal_context/* useModalAction */.SO)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-6 px-5 sm:p-8 bg-light w-screen md:max-w-md h-screen md:h-auto flex flex-col justify-center md:rounded-xl",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(logo/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-center text-sm md:text-base leading-relaxed text-body mt-4 sm:mt-5 mb-7 sm:mb-10",
      children: t('otp-login-helper')
    }), /*#__PURE__*/jsx_runtime_.jsx(otp_login, {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col items-center justify-center relative text-sm text-heading mt-9 sm:mt-11 mb-7 sm:mb-8",
      children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
        className: "w-full"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light",
        children: t('text-or')
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-sm sm:text-base text-body text-center",
      children: [t('text-back-to'), ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => openModal('LOGIN_VIEW'),
        className: "ms-1 underline text-accent font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover hover:no-underline focus:no-underline",
        children: t('text-login')
      })]
    })]
  });
};

/* harmony default export */ const otp_login_view = (OtpLoginView);

/***/ })

};
;