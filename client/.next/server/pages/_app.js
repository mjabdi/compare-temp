(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 9879:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4386);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_drawer_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5936);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7831);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const DrawerWrapper = ({
  children
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
  const [_, closeSidebar] = (0,jotai__WEBPACK_IMPORTED_MODULE_1__.useAtom)(_store_drawer_atom__WEBPACK_IMPORTED_MODULE_2__/* .drawerAtom */ .P);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "flex flex-col h-full",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "flex items-center justify-between p-5 mb-4 md:mb-6 border-b border-border-200 border-opacity-75",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
        className: "w-24 md:w-auto"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("button", {
        onClick: () => closeSidebar({
          display: false,
          view: ''
        }),
        className: "w-7 h-7 flex items-center justify-center rounded-full text-body bg-gray-200 transition-all duration-200 focus:outline-none hover:bg-accent focus:bg-accent hover:text-light focus:text-light",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          className: "sr-only",
          children: t('text-close')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_3__/* .CloseIcon */ .T, {
          className: "w-2.5 h-2.5"
        })]
      })]
    }), children]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerWrapper);

/***/ }),

/***/ 5048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ login)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./src/framework/rest/auth/auth.query.ts + 1 modules
var auth_query = __webpack_require__(6838);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/components/ui/modal/modal.context.tsx
var modal_context = __webpack_require__(4652);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
// EXTERNAL MODULE: ./src/components/ui/logo.tsx
var logo = __webpack_require__(4386);
// EXTERNAL MODULE: ./src/components/ui/alert.tsx
var ui_alert = __webpack_require__(5013);
// EXTERNAL MODULE: ./src/components/ui/forms/input.tsx
var input = __webpack_require__(5549);
// EXTERNAL MODULE: ./src/components/ui/forms/password-input.tsx + 1 modules
var password_input = __webpack_require__(6149);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/google.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const GoogleIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  width: "19.986",
  height: "20.39",
  viewBox: "0 0 19.986 20.39"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    "data-name": "Path 2",
    d: "M10.195 20.39c5.883 0 9.791-4.13 9.791-9.958a8.711 8.711 0 00-.166-1.7H10.2v3.5h5.787a5.522 5.522 0 01-5.787 4.402 6.441 6.441 0 010-12.88 5.727 5.727 0 014.062 1.571l2.764-2.655A9.749 9.749 0 0010.195 0a10.195 10.195 0 000 20.39z",
    fill: "currentColor"
  })
}));
;// CONCATENATED MODULE: ./src/components/icons/mobile-icon.tsx
function mobile_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function mobile_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { mobile_icon_ownKeys(Object(source), true).forEach(function (key) { mobile_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { mobile_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function mobile_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const MobileIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", mobile_icon_objectSpread(mobile_icon_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 27.442 27.442"
}, props), {}, {
  fill: "currentColor",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M19.494 0H7.948a1.997 1.997 0 00-1.997 1.999v23.446c0 1.102.892 1.997 1.997 1.997h11.546a1.998 1.998 0 001.997-1.997V1.999A1.999 1.999 0 0019.494 0zm-8.622 1.214h5.7c.144 0 .261.215.261.481s-.117.482-.261.482h-5.7c-.145 0-.26-.216-.26-.482s.115-.481.26-.481zm2.85 24.255a1.275 1.275 0 110-2.55 1.275 1.275 0 010 2.55zm6.273-4.369H7.448V3.373h12.547V21.1z"
  })
}));
// EXTERNAL MODULE: ./src/components/ui/forms/form.tsx
var forms_form = __webpack_require__(6509);
;// CONCATENATED MODULE: ./src/components/auth/login-form.tsx
function login_form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function login_form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { login_form_ownKeys(Object(source), true).forEach(function (key) { login_form_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { login_form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function login_form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
















const loginFormSchema = external_yup_.object().shape({
  email: external_yup_.string().email('error-email-format').required('error-email-required'),
  password: external_yup_.string().required('error-password-required')
});

const LoginForm = ({
  onSubmit,
  loading,
  errorMessage
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    openModal
  } = (0,modal_context/* useModalAction */.SO)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-6 px-5 sm:p-8 bg-light w-screen md:max-w-[480px] min-h-screen md:min-h-0 h-full md:h-auto flex flex-col justify-center md:rounded-xl",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(logo/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-center text-sm md:text-base text-body mt-4 sm:mt-5 mb-8 sm:mb-10",
      children: t('login-helper')
    }), errorMessage && /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      variant: "error",
      message: t(errorMessage),
      className: "mb-6",
      closeable: true // onClose={() => setErrorMsg('')}

    }), /*#__PURE__*/jsx_runtime_.jsx(forms_form/* Form */.l, {
      onSubmit: onSubmit,
      validationSchema: loginFormSchema,
      children: ({
        register,
        formState: {
          errors
        }
      }) => {
        var _errors$email, _errors$password;

        return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, login_form_objectSpread(login_form_objectSpread({
            label: t('text-email')
          }, register('email')), {}, {
            type: "email",
            variant: "outline",
            className: "mb-5",
            error: t((_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message)
          })), /*#__PURE__*/jsx_runtime_.jsx(password_input/* default */.Z, login_form_objectSpread(login_form_objectSpread({
            label: t('text-password')
          }, register('password')), {}, {
            error: t((_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message),
            variant: "outline",
            className: "mb-5",
            forgotPageRouteOnClick: () => openModal('FORGOT_VIEW')
          })), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "mt-8",
            children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              className: "w-full h-11 sm:h-12",
              loading: loading,
              disabled: loading,
              children: t('text-login')
            })
          })]
        });
      }
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8",
      children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
        className: "w-full"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light",
        children: t('text-or')
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "grid grid-cols-1 gap-4 mt-2",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_button/* default */.Z, {
        className: "!bg-social-google hover:!bg-social-google-hover !text-light",
        disabled: loading,
        onClick: () => {
          (0,client_.signIn)('google');
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(GoogleIcon, {
          className: "w-4 h-4 me-3"
        }), t('text-login-google')]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_button/* default */.Z, {
        className: "w-full h-11 sm:h-12 !bg-gray-500 hover:!bg-gray-600 !text-light",
        disabled: loading,
        onClick: () => openModal('OTP_LOGIN'),
        children: [/*#__PURE__*/jsx_runtime_.jsx(MobileIcon, {
          className: "h-5 me-2 text-light"
        }), t('text-login-mobile')]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8",
      children: /*#__PURE__*/jsx_runtime_.jsx("hr", {
        className: "w-full"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-sm sm:text-base text-body text-center",
      children: [t('text-no-account'), ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => openModal('REGISTER'),
        className: "ms-1 underline text-accent font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover hover:no-underline focus:no-underline",
        children: t('text-register')
      })]
    })]
  });
};

/* harmony default export */ const login_form = (LoginForm);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/store/authorization-atom.ts
var authorization_atom = __webpack_require__(8879);
// EXTERNAL MODULE: ./src/lib/constants.ts
var constants = __webpack_require__(509);
;// CONCATENATED MODULE: ./src/framework/rest/auth/login.tsx











const Login = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,external_react_.useState)('');
  const [_, authorize] = (0,external_jotai_.useAtom)(authorization_atom/* authorizationAtom */.O);
  const {
    closeModal
  } = (0,modal_context/* useModalAction */.SO)();
  const {
    mutate: login,
    isLoading: loading
  } = (0,auth_query/* useLoginMutation */.YA)();

  function onSubmit({
    email,
    password
  }) {
    login({
      email,
      password
    }, {
      onSuccess: data => {
        var _data$permissions;

        if (data !== null && data !== void 0 && data.token && data !== null && data !== void 0 && (_data$permissions = data.permissions) !== null && _data$permissions !== void 0 && _data$permissions.length) {
          external_js_cookie_default().set(constants/* AUTH_TOKEN */.UA, data.token);
          authorize(true);
          closeModal();
          return;
        }

        if (!data.token) {
          setErrorMessage(t('error-credential-wrong'));
        }
      },
      onError: error => {
        console.log(error.message);
      }
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(login_form, {
    onSubmit: onSubmit,
    errorMessage: errorMessage,
    loading: loading
  });
};

/* harmony default export */ const login = (Login);

/***/ }),

/***/ 3931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports fetchMe, useCustomerQuery */
/* harmony import */ var _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3857);
/* harmony import */ var _framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);
/* harmony import */ var _store_authorization_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8879);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);






class CustomerService extends _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__/* .BaseService */ .b {}

const customerService = new CustomerService(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.CUSTOMER */ .P.CUSTOMER);
const fetchMe = async () => {
  const {
    data
  } = await customerService.findAll();
  return {
    me: data
  };
};
const useCustomerQuery = options => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.CUSTOMER */ .P.CUSTOMER, fetchMe, options);
};

const useUser = () => {
  const [isAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_2__/* .authorizationAtom */ .O);
  const {
    data,
    isLoading,
    error
  } = useCustomerQuery({
    enabled: isAuthorized,
    onError: err => {
      console.log(err);
    }
  });
  return {
    me: data === null || data === void 0 ? void 0 : data.me,
    loading: isLoading,
    error
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUser);

/***/ }),

/***/ 4111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ fadeInOut)
/* harmony export */ });
function fadeInOut(duration = 0.2) {
  return {
    from: {
      opacity: 0,
      transition: {
        type: 'easeInOut',
        duration: duration
      }
    },
    to: {
      opacity: 1,
      transition: {
        type: 'easeInOut',
        duration: duration
      }
    }
  };
}

/***/ }),

/***/ 1497:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: external "react-query/hydration"
var hydration_ = __webpack_require__(9475);
// EXTERNAL MODULE: ./src/components/settings/settings.context.tsx
var settings_context = __webpack_require__(7438);
// EXTERNAL MODULE: ./src/components/ui/error-message.tsx
var error_message = __webpack_require__(3315);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/ui/loaders/page-loader.tsx





const PageLoader = ({
  text = 'text-loading'
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: external_classnames_default()('w-full h-screen flex flex-col items-center justify-center'),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex relative",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "page_loader"
      }), /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-sm font-semibold text-body italic absolute top-1/2 -mt-2 w-full text-center",
        children: t(text)
      })]
    })
  });
};

/* harmony default export */ const page_loader = (PageLoader);
// EXTERNAL MODULE: ./src/framework/rest/app/settings.query.ts
var settings_query = __webpack_require__(6566);
;// CONCATENATED MODULE: ./src/framework/rest/app/settings.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const AppSettings = props => {
  var _data$settings;

  const {
    data,
    isLoading: loading,
    error
  } = (0,settings_query/* useSettingsQuery */.n)();
  if (loading) return /*#__PURE__*/jsx_runtime_.jsx(page_loader, {});
  if (error) return /*#__PURE__*/jsx_runtime_.jsx(error_message.default, {
    message: error.message
  });
  return /*#__PURE__*/jsx_runtime_.jsx(settings_context/* SettingsProvider */.mu, _objectSpread({
    initialValue: data === null || data === void 0 ? void 0 : (_data$settings = data.settings) === null || _data$settings === void 0 ? void 0 : _data$settings.options
  }, props));
};
;// CONCATENATED MODULE: ./src/framework/rest/app/providers.tsx






const AppProviders = ({
  pageProps,
  children
}) => {
  const queryClientRef = (0,external_react_.useRef)(null);

  if (!queryClientRef.current) {
    queryClientRef.current = new external_react_query_.QueryClient();
  }

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_query_.QueryClientProvider, {
    client: queryClientRef.current,
    children: /*#__PURE__*/jsx_runtime_.jsx(hydration_.Hydrate, {
      state: pageProps.dehydratedState,
      children: /*#__PURE__*/jsx_runtime_.jsx(AppSettings, {
        children: children
      })
    })
  });
};

/* harmony default export */ const providers = (AppProviders);
// EXTERNAL MODULE: ./src/store/quick-cart/cart.context.tsx + 2 modules
var cart_context = __webpack_require__(4436);
// EXTERNAL MODULE: ./src/components/ui/modal/modal.context.tsx
var modal_context = __webpack_require__(4652);
// EXTERNAL MODULE: ../node_modules/next/dynamic.js
var dynamic = __webpack_require__(5218);
// EXTERNAL MODULE: ./src/components/icons/close-icon.tsx
var close_icon = __webpack_require__(7831);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(4025);
;// CONCATENATED MODULE: ./src/components/ui/modal/modal.tsx






function Modal({
  open,
  onClose,
  children
}) {
  const cancelButtonRef = (0,external_react_.useRef)(null);
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx(react_.Transition, {
    show: open,
    as: external_react_.Fragment,
    children: /*#__PURE__*/jsx_runtime_.jsx(react_.Dialog, {
      as: "div",
      className: "fixed inset-0 z-50 overflow-y-auto",
      initialFocus: cancelButtonRef,
      static: true,
      open: open,
      onClose: onClose,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "min-h-full md:p-5 text-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Transition.Child, {
          as: external_react_.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0",
          enterTo: "opacity-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100",
          leaveTo: "opacity-0",
          children: /*#__PURE__*/jsx_runtime_.jsx(react_.Dialog.Overlay, {
            className: "fixed inset-0 bg-gray-900 bg-opacity-50 w-full h-full"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "inline-block h-screen align-middle",
          "aria-hidden": "true",
          children: "\u200B"
        }), /*#__PURE__*/jsx_runtime_.jsx(react_.Transition.Child, {
          as: external_react_.Fragment,
          enter: "ease-out duration-300",
          enterFrom: "opacity-0 scale-95",
          enterTo: "opacity-100 scale-100",
          leave: "ease-in duration-200",
          leaveFrom: "opacity-100 scale-100",
          leaveTo: "opacity-0 scale-95",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "inline-block min-w-content max-w-full text-start align-middle transition-all relative",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              onClick: onClose,
              "aria-label": "Close panel",
              ref: cancelButtonRef,
              className: "inline-block lg:hidden outline-none focus:outline-none absolute end-4 top-4 z-[60]",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                className: "sr-only",
                children: t('text-close')
              }), /*#__PURE__*/jsx_runtime_.jsx(close_icon/* CloseIcon */.T, {
                className: "w-4 h-4"
              })]
            }), children]
          })
        })]
      })
    })
  });
}
;// CONCATENATED MODULE: ./src/components/ui/modal/managed-modal.tsx





const OtpLoginView = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(3883), __webpack_require__.e(7640)]).then(__webpack_require__.bind(__webpack_require__, 7640)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7640)],
    modules: ["../components/ui/modal/managed-modal.tsx -> " + '@components/auth/otp-login-view']
  }
});
const Login = (0,dynamic.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 5048)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5048)],
    modules: ["../components/ui/modal/managed-modal.tsx -> " + '@framework/auth/login']
  }
});
const Register = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 5396).then(__webpack_require__.bind(__webpack_require__, 5396)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5396)],
    modules: ["../components/ui/modal/managed-modal.tsx -> " + '@framework/auth/register']
  }
});
const ForgotPassword = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 6598).then(__webpack_require__.bind(__webpack_require__, 6598)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6598)],
    modules: ["../components/ui/modal/managed-modal.tsx -> " + '@framework/auth/forget-password']
  }
});
const ProductDetailsModalView = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(9517), __webpack_require__.e(2317), __webpack_require__.e(1817), __webpack_require__.e(2816), __webpack_require__.e(45), __webpack_require__.e(8328), __webpack_require__.e(7458), __webpack_require__.e(9219), __webpack_require__.e(3993), __webpack_require__.e(3809)]).then(__webpack_require__.bind(__webpack_require__, 5093)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5093)],
    modules: ["../components/ui/modal/managed-modal.tsx -> " + '@framework/products/product']
  }
});
const ShopInfoCard = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(6098), __webpack_require__.e(8473), __webpack_require__.e(9219), __webpack_require__.e(8111), __webpack_require__.e(5928)]).then(__webpack_require__.bind(__webpack_require__, 5928)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5928)],
    modules: ["../components/ui/modal/managed-modal.tsx -> " + '@components/shops/sidebar']
  }
});
const CreateOrUpdateAddressForm = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(3883), __webpack_require__.e(2951), __webpack_require__.e(799), __webpack_require__.e(2945)]).then(__webpack_require__.bind(__webpack_require__, 2945)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2945)],
    modules: ["../components/ui/modal/managed-modal.tsx -> " + '@framework/address/create-or-update']
  }
});
const AddressDeleteView = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 3242).then(__webpack_require__.bind(__webpack_require__, 3242)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3242)],
    modules: ["../components/ui/modal/managed-modal.tsx -> " + '@framework/address/delete-view']
  }
});
const AddOrUpdateCheckoutContact = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(3883), __webpack_require__.e(9300), __webpack_require__.e(5356)]).then(__webpack_require__.bind(__webpack_require__, 5356)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5356)],
    modules: ["../components/ui/modal/managed-modal.tsx -> " + '@components/checkout/contact/add-or-update']
  }
});
const ProfileAddOrUpdateContact = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(3883), __webpack_require__.e(799), __webpack_require__.e(9300), __webpack_require__.e(7506)]).then(__webpack_require__.bind(__webpack_require__, 7506)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7506)],
    modules: ["../components/ui/modal/managed-modal.tsx -> " + '@framework/profile/profile-add-or-update-contact']
  }
});
const RefundRequestView = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(9517), __webpack_require__.e(3883), __webpack_require__.e(2951), __webpack_require__.e(4405), __webpack_require__.e(7037), __webpack_require__.e(4418)]).then(__webpack_require__.bind(__webpack_require__, 4418)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4418)],
    modules: ["../components/ui/modal/managed-modal.tsx -> " + '@framework/refunds/refund-request-view']
  }
});

const ManagedModal = () => {
  const {
    isOpen,
    view,
    data
  } = (0,modal_context/* useModalState */.X9)();
  const {
    closeModal
  } = (0,modal_context/* useModalAction */.SO)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Modal, {
    open: isOpen,
    onClose: closeModal,
    children: [view === 'LOGIN_VIEW' && /*#__PURE__*/jsx_runtime_.jsx(Login, {}), view === 'REGISTER' && /*#__PURE__*/jsx_runtime_.jsx(Register, {}), view === 'FORGOT_VIEW' && /*#__PURE__*/jsx_runtime_.jsx(ForgotPassword, {}), view === 'OTP_LOGIN' && /*#__PURE__*/jsx_runtime_.jsx(OtpLoginView, {}), view === 'REFUND_REQUEST' && /*#__PURE__*/jsx_runtime_.jsx(RefundRequestView, {}), view === 'ADD_OR_UPDATE_ADDRESS' && /*#__PURE__*/jsx_runtime_.jsx(CreateOrUpdateAddressForm, {}), view === 'ADD_OR_UPDATE_CHECKOUT_CONTACT' && /*#__PURE__*/jsx_runtime_.jsx(AddOrUpdateCheckoutContact, {}), view === 'ADD_OR_UPDATE_PROFILE_CONTACT' && /*#__PURE__*/jsx_runtime_.jsx(ProfileAddOrUpdateContact, {}), view === 'DELETE_ADDRESS' && /*#__PURE__*/jsx_runtime_.jsx(AddressDeleteView, {}), view === 'PRODUCT_DETAILS' && /*#__PURE__*/jsx_runtime_.jsx(ProductDetailsModalView, {
      productSlug: data
    }), view === 'SHOP_INFO' && /*#__PURE__*/jsx_runtime_.jsx(ShopInfoCard, {
      data: data,
      cardClassName: "!hidden",
      className: "!flex flex-col !w-screen !h-screen max-w-screen-sm"
    })]
  });
};

/* harmony default export */ const managed_modal = (ManagedModal);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ../node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify = __webpack_require__(7532);
// EXTERNAL MODULE: ./src/components/ui/drawer/drawer-wrapper.tsx
var drawer_wrapper = __webpack_require__(9879);
// EXTERNAL MODULE: ./src/framework/rest/categories/categories.tsx
var categories = __webpack_require__(527);
;// CONCATENATED MODULE: ./src/components/layouts/mobile-menu/mobile-category-menu.tsx



function MobileCategoryMenu() {
  return /*#__PURE__*/jsx_runtime_.jsx(drawer_wrapper/* default */.Z, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "h-full max-h-full overflow-hidden",
      children: /*#__PURE__*/jsx_runtime_.jsx(categories/* default */.Z, {
        layout: "classic",
        className: "!block"
      })
    })
  });
}
// EXTERNAL MODULE: ./src/store/drawer-atom.ts
var drawer_atom = __webpack_require__(5936);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
;// CONCATENATED MODULE: external "@reach/portal"
const portal_namespaceObject = require("@reach/portal");
var portal_default = /*#__PURE__*/__webpack_require__.n(portal_namespaceObject);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: external "body-scroll-lock"
const external_body_scroll_lock_namespaceObject = require("body-scroll-lock");
// EXTERNAL MODULE: ./src/components/ui/scrollbar.tsx
var scrollbar = __webpack_require__(1859);
;// CONCATENATED MODULE: ./src/lib/motion/fade-in-right.ts
function fadeInRight(duration = 0.3) {
  return {
    from: {
      right: '-100%',
      transition: {
        type: 'easeInOut',
        duration: duration
      }
    },
    to: {
      right: 0,
      transition: {
        type: 'easeInOut',
        duration: duration
      }
    }
  };
}
;// CONCATENATED MODULE: ./src/lib/motion/fade-in-left.ts
function fadeInLeft(duration = 0.3) {
  return {
    from: {
      left: '-100%',
      transition: {
        type: 'easeInOut',
        duration: duration
      }
    },
    to: {
      left: 0,
      transition: {
        type: 'easeInOut',
        duration: duration
      }
    }
  };
}
// EXTERNAL MODULE: ./src/lib/motion/fade-in-out.ts
var fade_in_out = __webpack_require__(4111);
;// CONCATENATED MODULE: ./src/components/ui/drawer/drawer.tsx












const Drawer = ({
  children,
  open = false,
  variant = 'right',
  useBlurBackdrop,
  onClose
}) => {
  const ref = (0,external_react_.useRef)();
  (0,external_react_.useEffect)(() => {
    if (ref.current) {
      if (open) {
        (0,external_body_scroll_lock_namespaceObject.disableBodyScroll)(ref.current);
      } else {
        (0,external_body_scroll_lock_namespaceObject.enableBodyScroll)(ref.current);
      }
    }

    return () => {
      (0,external_body_scroll_lock_namespaceObject.clearAllBodyScrollLocks)();
    };
  }, [open]);
  return /*#__PURE__*/jsx_runtime_.jsx((portal_default()), {
    children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
      children: open && /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.aside, {
        ref: ref,
        initial: "from",
        animate: "to",
        exit: "from",
        variants: variant === 'right' ? fadeInRight() : fadeInLeft(),
        className: "fixed inset-0 overflow-hidden h-full z-50",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "absolute inset-0 overflow-hidden",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
            initial: "from",
            animate: "to",
            exit: "from",
            variants: (0,fade_in_out/* fadeInOut */.I)(0.35),
            onClick: onClose,
            className: external_classnames_default()('absolute inset-0 bg-dark bg-opacity-40', useBlurBackdrop && 'use-blur-backdrop')
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: external_classnames_default()('absolute inset-y-0 max-w-full flex outline-none', variant === 'right' ? 'end-0' : 'start-0'),
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "h-full w-screen max-w-md",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "h-full flex flex-col text-base bg-light shadow-xl",
                children: /*#__PURE__*/jsx_runtime_.jsx(scrollbar/* default */.Z, {
                  className: "w-full h-full",
                  children: children
                })
              })
            })
          })]
        })
      }, "drawer")
    })
  });
};

/* harmony default export */ const drawer = (Drawer);
;// CONCATENATED MODULE: ./src/components/ui/drawer/managed-drawer.tsx







const CartSidebarView = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(1817), __webpack_require__.e(2816), __webpack_require__.e(5658), __webpack_require__.e(45), __webpack_require__.e(8328), __webpack_require__.e(482), __webpack_require__.e(5241)]).then(__webpack_require__.bind(__webpack_require__, 5241)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5241)],
    modules: ["../components/ui/drawer/managed-drawer.tsx -> " + '@components/cart/cart-sidebar-view']
  }
});
const MobileAuthorizedMenu = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(5658), __webpack_require__.e(7585)]).then(__webpack_require__.bind(__webpack_require__, 85)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(85)],
    modules: ["../components/ui/drawer/managed-drawer.tsx -> " + '@components/layouts/mobile-menu/mobile-authorized-menu']
  }
});
const MobileMainMenu = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 9265).then(__webpack_require__.bind(__webpack_require__, 9265)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9265)],
    modules: ["../components/ui/drawer/managed-drawer.tsx -> " + '@components/layouts/mobile-menu/mobile-main-menu']
  }
});
function ManagedDrawer() {
  const [{
    display,
    view
  }, setDrawerState] = (0,external_jotai_.useAtom)(drawer_atom/* drawerAtom */.P);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(drawer, {
    open: display,
    onClose: () => setDrawerState({
      display: false,
      view: ''
    }),
    variant: view === 'FILTER_VIEW' || view === 'MAIN_MENU_VIEW' || view === 'FILTER_LAYOUT_TWO_VIEW' ? 'left' : 'right',
    children: [view === 'cart' && /*#__PURE__*/jsx_runtime_.jsx(CartSidebarView, {}), view === 'FILTER_VIEW' && /*#__PURE__*/jsx_runtime_.jsx(MobileCategoryMenu, {}), view === 'MAIN_MENU_VIEW' && /*#__PURE__*/jsx_runtime_.jsx(MobileMainMenu, {}), view === 'AUTH_MENU_VIEW' && /*#__PURE__*/jsx_runtime_.jsx(MobileAuthorizedMenu, {})]
  });
}
// EXTERNAL MODULE: ./src/components/ui/loaders/spinner/spinner.tsx
var spinner = __webpack_require__(9204);
// EXTERNAL MODULE: ./src/framework/rest/auth/use-user.tsx
var use_user = __webpack_require__(3931);
// EXTERNAL MODULE: ./src/framework/rest/auth/login.tsx + 3 modules
var login = __webpack_require__(5048);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/store/authorization-atom.ts
var authorization_atom = __webpack_require__(8879);
;// CONCATENATED MODULE: ./src/components/icons/back-arrow-round.tsx
function back_arrow_round_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function back_arrow_round_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { back_arrow_round_ownKeys(Object(source), true).forEach(function (key) { back_arrow_round_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { back_arrow_round_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function back_arrow_round_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const BackArrowRound = _ref => {
  let props = Object.assign({}, _ref);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("svg", back_arrow_round_objectSpread(back_arrow_round_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 219.151 219.151",
    fill: "currentColor"
  }, props), {}, {
    children: [/*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M109.576 219.151c60.419 0 109.573-49.156 109.573-109.576C219.149 49.156 169.995 0 109.576 0S.002 49.156.002 109.575c0 60.42 49.155 109.576 109.574 109.576zm0-204.151c52.148 0 94.573 42.426 94.574 94.575 0 52.149-42.425 94.575-94.574 94.576-52.148-.001-94.573-42.427-94.573-94.577C15.003 57.427 57.428 15 109.576 15z"
    }), /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M94.861 156.507a7.502 7.502 0 0010.606 0 7.499 7.499 0 00-.001-10.608l-28.82-28.819 83.457-.008a7.5 7.5 0 00-.001-15l-83.46.008 28.827-28.825a7.5 7.5 0 00-10.607-10.608l-41.629 41.628a7.495 7.495 0 00-2.197 5.303 7.51 7.51 0 002.198 5.305l41.627 41.624z"
    })]
  }));
};
;// CONCATENATED MODULE: ./src/lib/private-route.tsx











const PrivateRoute = ({
  children
}) => {
  const router = (0,router_.useRouter)();
  const [isAuthorized] = (0,external_jotai_.useAtom)(authorization_atom/* authorizationAtom */.O);
  const {
    me
  } = (0,use_user/* default */.ZP)();
  const isUser = !!me;

  if (!isUser && !isAuthorized) {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex w-full justify-center py-5 md:py-8 relative",
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "w-8 md:w-16 h-8 md:h-16 flex items-center justify-center absolute top-5 md:top-1/2 start-5 md:start-10 md:-mt-8 text-gray-200 md:text-gray-300 hover:text-gray-400 transition-colors",
        onClick: router.back,
        children: /*#__PURE__*/jsx_runtime_.jsx(BackArrowRound, {})
      }), /*#__PURE__*/jsx_runtime_.jsx(login.default, {})]
    });
  }

  if (isUser && isAuthorized) {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: children
    });
  } // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.


  return /*#__PURE__*/jsx_runtime_.jsx(spinner/* default */.Z, {
    showText: false
  });
};

/* harmony default export */ const private_route = (PrivateRoute);
;// CONCATENATED MODULE: external "next-seo"
const external_next_seo_namespaceObject = require("next-seo");
;// CONCATENATED MODULE: ./src/components/seo/default-seo.tsx




const DefaultSeo = () => {
  var _settings$seo, _settings$seo2, _settings$seo3, _settings$seo4, _settings$seo5, _settings$seo6, _settings$seo7, _settings$seo7$ogImag, _settings$seo8, _settings$seo9, _settings$seo10;

  const settings = (0,settings_context/* useSettings */.rV)();
  return /*#__PURE__*/jsx_runtime_.jsx(external_next_seo_namespaceObject.DefaultSeo, {
    additionalMetaTags: [{
      name: 'viewport',
      content: 'width=device-width, initial-scale=1 maximum-scale=1'
    }, {
      name: 'apple-mobile-web-app-capable',
      content: 'yes'
    }, {
      name: 'theme-color',
      content: '#ffffff'
    }],
    additionalLinkTags: [{
      rel: 'apple-touch-icon',
      href: 'icons/apple-icon-180.png'
    }, {
      rel: 'manifest',
      href: '/manifest.json'
    }],
    title: settings === null || settings === void 0 ? void 0 : (_settings$seo = settings.seo) === null || _settings$seo === void 0 ? void 0 : _settings$seo.metaTitle,
    titleTemplate: `${(settings === null || settings === void 0 ? void 0 : (_settings$seo2 = settings.seo) === null || _settings$seo2 === void 0 ? void 0 : _settings$seo2.metaTitle) || (settings === null || settings === void 0 ? void 0 : settings.siteTitle) || 'E-Commerce'} | %s`,
    defaultTitle: "Compare Supplements",
    description: (settings === null || settings === void 0 ? void 0 : (_settings$seo3 = settings.seo) === null || _settings$seo3 === void 0 ? void 0 : _settings$seo3.metaDescription) || (settings === null || settings === void 0 ? void 0 : settings.siteSubtitle),
    canonical: settings === null || settings === void 0 ? void 0 : (_settings$seo4 = settings.seo) === null || _settings$seo4 === void 0 ? void 0 : _settings$seo4.canonicalUrl,
    openGraph: {
      title: settings === null || settings === void 0 ? void 0 : (_settings$seo5 = settings.seo) === null || _settings$seo5 === void 0 ? void 0 : _settings$seo5.ogTitle,
      description: settings === null || settings === void 0 ? void 0 : (_settings$seo6 = settings.seo) === null || _settings$seo6 === void 0 ? void 0 : _settings$seo6.ogDescription,
      type: 'website',
      locale: 'en_US',
      site_name: settings === null || settings === void 0 ? void 0 : settings.siteTitle,
      images: [{
        url: settings === null || settings === void 0 ? void 0 : (_settings$seo7 = settings.seo) === null || _settings$seo7 === void 0 ? void 0 : (_settings$seo7$ogImag = _settings$seo7.ogImage) === null || _settings$seo7$ogImag === void 0 ? void 0 : _settings$seo7$ogImag.original,
        width: 800,
        height: 600,
        alt: settings === null || settings === void 0 ? void 0 : (_settings$seo8 = settings.seo) === null || _settings$seo8 === void 0 ? void 0 : _settings$seo8.ogTitle
      }]
    },
    twitter: {
      handle: settings === null || settings === void 0 ? void 0 : (_settings$seo9 = settings.seo) === null || _settings$seo9 === void 0 ? void 0 : _settings$seo9.twitterHandle,
      site: settings === null || settings === void 0 ? void 0 : settings.siteTitle,
      cardType: settings === null || settings === void 0 ? void 0 : (_settings$seo10 = settings.seo) === null || _settings$seo10 === void 0 ? void 0 : _settings$seo10.twitterCardType
    }
  });
};

/* harmony default export */ const default_seo = (DefaultSeo);
// EXTERNAL MODULE: external "next-auth/client"
var client_ = __webpack_require__(8104);
// EXTERNAL MODULE: ./src/framework/rest/auth/auth.query.ts + 1 modules
var auth_query = __webpack_require__(6838);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: ./src/lib/constants.ts
var constants = __webpack_require__(509);
;// CONCATENATED MODULE: ./src/framework/rest/auth/social-login.tsx










const SocialLogin = () => {
  const [session, loading] = (0,client_.useSession)();
  const {
    mutate: socialLogin
  } = (0,auth_query/* useSocialLoginMutation */.u4)({
    onSuccess: data => {
      var _data$permissions;

      if (data !== null && data !== void 0 && data.token && data !== null && data !== void 0 && (_data$permissions = data.permissions) !== null && _data$permissions !== void 0 && _data$permissions.length) {
        external_js_cookie_default().set(constants/* AUTH_TOKEN */.UA, data.token);
        authorize(true);
      } else {
        setErrorMessage('error-credential-wrong');
      }
    }
  });
  const [_, authorize] = (0,external_jotai_.useAtom)(authorization_atom/* authorizationAtom */.O);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = (0,external_react_.useState)('');
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  (0,external_react_.useEffect)(() => {
    // is true when valid social login access token and provider is available in the session
    // but not authorize/logged in
    if (session !== null && session !== void 0 && session.accessToken && session !== null && session !== void 0 && session.provider) {
      socialLogin({
        provider: session === null || session === void 0 ? void 0 : session.provider,
        access_token: session === null || session === void 0 ? void 0 : session.accessToken
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [session]); // When rendering client side don't display anything until loading is complete

  if (false) {}
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: t(errorMessage)
  });
};

/* harmony default export */ const social_login = (SocialLogin);
// EXTERNAL MODULE: ./src/components/ui/search/search.context.tsx
var search_context = __webpack_require__(4464);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



















function CustomApp({
  Component,
  pageProps
}) {
  var _Component$getLayout;

  // Use the layout defined at the page level, if available
  const getLayout = (_Component$getLayout = Component.getLayout) !== null && _Component$getLayout !== void 0 ? _Component$getLayout : page => page;
  const authProps = Component.authenticate;
  return /*#__PURE__*/jsx_runtime_.jsx(providers, {
    pageProps: pageProps,
    children: /*#__PURE__*/jsx_runtime_.jsx(search_context/* SearchProvider */.X$, {
      children: /*#__PURE__*/jsx_runtime_.jsx(modal_context/* ModalProvider */.DY, {
        children: /*#__PURE__*/jsx_runtime_.jsx(cart_context/* CartProvider */.Zl, {
          children: /*#__PURE__*/jsx_runtime_.jsx(client_.Provider, {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(default_seo, {}), Boolean(authProps) ? /*#__PURE__*/jsx_runtime_.jsx(private_route, {
                children: getLayout( /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps)))
              }) : getLayout( /*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps))), /*#__PURE__*/jsx_runtime_.jsx(managed_modal, {}), /*#__PURE__*/jsx_runtime_.jsx(ManagedDrawer, {}), /*#__PURE__*/jsx_runtime_.jsx(external_react_toastify_.ToastContainer, {
                autoClose: 2000,
                theme: "colored"
              }), /*#__PURE__*/jsx_runtime_.jsx(social_login, {})]
            })
          })
        })
      })
    })
  });
}

/* harmony default export */ const _app = ((0,external_next_i18next_.appWithTranslation)(CustomApp));

/***/ }),

/***/ 7532:
/***/ (() => {



/***/ }),

/***/ 4025:
/***/ ((module) => {

"use strict";
module.exports = require("@headlessui/react");

/***/ }),

/***/ 2166:
/***/ ((module) => {

"use strict";
module.exports = require("@hookform/resolvers/yup");

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3687:
/***/ ((module) => {

"use strict";
module.exports = require("camelcase-keys");

/***/ }),

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 762:
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ 8250:
/***/ ((module) => {

"use strict";
module.exports = require("jotai");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("jotai/utils");

/***/ }),

/***/ 6155:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 3089:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/groupBy");

/***/ }),

/***/ 8718:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 6414:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEqual");

/***/ }),

/***/ 4661:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/pickBy");

/***/ }),

/***/ 8104:
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/client");

/***/ }),

/***/ 8475:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 1958:
/***/ ((module) => {

"use strict";
module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9081:
/***/ ((module) => {

"use strict";
module.exports = require("react-content-loader");

/***/ }),

/***/ 2875:
/***/ ((module) => {

"use strict";
module.exports = require("react-dropzone");

/***/ }),

/***/ 2662:
/***/ ((module) => {

"use strict";
module.exports = require("react-hook-form");

/***/ }),

/***/ 7789:
/***/ ((module) => {

"use strict";
module.exports = require("react-i18next");

/***/ }),

/***/ 2512:
/***/ ((module) => {

"use strict";
module.exports = require("react-otp-input");

/***/ }),

/***/ 5183:
/***/ ((module) => {

"use strict";
module.exports = require("react-phone-input-2");

/***/ }),

/***/ 2585:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 9475:
/***/ ((module) => {

"use strict";
module.exports = require("react-query/hydration");

/***/ }),

/***/ 3783:
/***/ ((module) => {

"use strict";
module.exports = require("react-scroll");

/***/ }),

/***/ 2034:
/***/ ((module) => {

"use strict";
module.exports = require("react-toastify");

/***/ }),

/***/ 173:
/***/ ((module) => {

"use strict";
module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 1199:
/***/ ((module) => {

"use strict";
module.exports = require("react-waypoint");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4074:
/***/ ((module) => {

"use strict";
module.exports = import("swiper");;

/***/ }),

/***/ 2156:
/***/ ((module) => {

"use strict";
module.exports = import("swiper/react");;

/***/ }),

/***/ 9440:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4939,5218,8926,2395,6902,7993,1859,9204,527,5549,1097,6838,6509,6149,4464,5013,5137], () => (__webpack_exec__(1497)));
module.exports = __webpack_exports__;

})();