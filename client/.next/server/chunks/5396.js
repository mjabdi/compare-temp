"use strict";
exports.id = 5396;
exports.ids = [5396];
exports.modules = {

/***/ 5396:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ register)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "js-cookie"
var external_js_cookie_ = __webpack_require__(6155);
var external_js_cookie_default = /*#__PURE__*/__webpack_require__.n(external_js_cookie_);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./src/framework/rest/auth/auth.query.ts + 1 modules
var auth_query = __webpack_require__(6838);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2166);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: ./src/components/ui/modal/modal.context.tsx
var modal_context = __webpack_require__(4652);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
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
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/auth/register-form.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const RegisterForm = ({
  errorMessage,
  onSubmit,
  loading
}) => {
  var _errors$name, _errors$email, _errors$password;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useFormContext)();
  const router = (0,router_.useRouter)();
  const {
    closeModal,
    openModal
  } = (0,modal_context/* useModalAction */.SO)();

  function handleNavigate(path) {
    router.push(`/${path}`);
    closeModal();
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-6 px-5 sm:p-8 bg-light w-screen md:max-w-[480px] min-h-screen md:min-h-0 h-full md:h-auto flex flex-col justify-center md:rounded-xl",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex justify-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(logo/* default */.Z, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
      className: "text-center text-sm md:text-base leading-relaxed px-2 sm:px-0 text-body mt-4 sm:mt-5 mb-7 sm:mb-10",
      children: [t('registration-helper'), /*#__PURE__*/jsx_runtime_.jsx("span", {
        onClick: () => handleNavigate('terms'),
        className: "mx-1 underline cursor-pointer text-accent hover:no-underline",
        children: t('text-terms')
      }), "&", /*#__PURE__*/jsx_runtime_.jsx("span", {
        onClick: () => handleNavigate('privacy'),
        className: "ms-1 underline cursor-pointer text-accent hover:no-underline",
        children: t('text-policy')
      })]
    }), errorMessage && /*#__PURE__*/jsx_runtime_.jsx(ui_alert/* default */.Z, {
      variant: "error",
      message: t(errorMessage),
      className: "mb-6",
      closeable: true // onClose={() => setErrorMsg('')}

    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      onSubmit: handleSubmit(onSubmit),
      noValidate: true,
      children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
        label: t('text-name')
      }, register('name')), {}, {
        variant: "outline",
        className: "mb-5",
        error: t((_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message)
      })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
        label: t('text-email')
      }, register('email')), {}, {
        type: "email",
        variant: "outline",
        className: "mb-5",
        error: t((_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message)
      })), /*#__PURE__*/jsx_runtime_.jsx(password_input/* default */.Z, _objectSpread(_objectSpread({
        label: t('text-password')
      }, register('password')), {}, {
        error: t((_errors$password = errors.password) === null || _errors$password === void 0 ? void 0 : _errors$password.message),
        variant: "outline",
        className: "mb-5"
      })), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "mt-8",
        children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          className: "w-full h-12",
          loading: loading,
          disabled: loading,
          children: t('text-register')
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col items-center justify-center relative text-sm text-heading mt-8 sm:mt-11 mb-6 sm:mb-8",
      children: [/*#__PURE__*/jsx_runtime_.jsx("hr", {
        className: "w-full"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light",
        children: t('text-or')
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "text-sm sm:text-base text-body text-center",
      children: [t('text-already-account'), ' ', /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => openModal('LOGIN_VIEW'),
        className: "ms-1 underline text-accent font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover hover:no-underline focus:no-underline",
        children: t('text-login')
      })]
    })]
  });
};

/* harmony default export */ const register_form = (RegisterForm);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/store/authorization-atom.ts
var authorization_atom = __webpack_require__(8879);
// EXTERNAL MODULE: ./src/lib/constants.ts
var constants = __webpack_require__(509);
;// CONCATENATED MODULE: ./src/framework/rest/auth/register.tsx
function register_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function register_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { register_ownKeys(Object(source), true).forEach(function (key) { register_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { register_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function register_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const registerFormSchema = external_yup_.object().shape({
  name: external_yup_.string().required('error-name-required'),
  email: external_yup_.string().email('error-email-format').required('error-email-required'),
  password: external_yup_.string().required('error-password-required')
});

const Register = () => {
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
  const methods = (0,external_react_hook_form_.useForm)({
    resolver: (0,yup_.yupResolver)(registerFormSchema)
  });
  const {
    mutate,
    isLoading: loading
  } = (0,auth_query/* useRegisterMutation */.l4)();

  function onSubmit({
    name,
    email,
    password
  }) {
    mutate({
      name,
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
        const {
          response: {
            data
          }
        } = error !== null && error !== void 0 ? error : {};
        Object.keys(data).forEach(field => {
          methods.setError(field, {
            type: 'manual',
            message: data[field][0]
          });
        });
      }
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_hook_form_.FormProvider, register_objectSpread(register_objectSpread({}, methods), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(register_form, {
      onSubmit: onSubmit,
      loading: loading,
      errorMessage: errorMessage
    })
  }));
};

/* harmony default export */ const register = (Register);

/***/ })

};
;