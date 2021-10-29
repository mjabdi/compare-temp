"use strict";
(() => {
var exports = {};
exports.id = 5125;
exports.ids = [5125];
exports.modules = {

/***/ 4220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_change_password),
  "getStaticProps": () => (/* reexport */ common/* getStaticProps */.b)
});

// EXTERNAL MODULE: ./src/components/ui/cards/card.tsx
var card = __webpack_require__(8177);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/components/dashboard/sidebar.tsx
var sidebar = __webpack_require__(5434);
// EXTERNAL MODULE: ./src/framework/rest/auth/auth.query.ts + 1 modules
var auth_query = __webpack_require__(6838);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/components/ui/forms/password-input.tsx + 1 modules
var password_input = __webpack_require__(6149);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/auth/change-password-form.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ChangePasswordForm = ({
  onSubmit,
  loading
}) => {
  var _errors$oldPassword, _errors$newPassword, _errors$passwordConfi;

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
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    onSubmit: handleSubmit(onSubmit),
    className: "flex flex-col",
    noValidate: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx(password_input/* default */.Z, _objectSpread(_objectSpread({
      label: t('text-old-password')
    }, register('oldPassword')), {}, {
      error: t((_errors$oldPassword = errors.oldPassword) === null || _errors$oldPassword === void 0 ? void 0 : _errors$oldPassword.message),
      className: "mb-5",
      variant: "outline"
    })), /*#__PURE__*/jsx_runtime_.jsx(password_input/* default */.Z, _objectSpread(_objectSpread({
      label: t('text-new-password')
    }, register('newPassword')), {}, {
      error: t((_errors$newPassword = errors.newPassword) === null || _errors$newPassword === void 0 ? void 0 : _errors$newPassword.message),
      className: "mb-5",
      variant: "outline"
    })), /*#__PURE__*/jsx_runtime_.jsx(password_input/* default */.Z, _objectSpread(_objectSpread({
      label: t('text-confirm-password')
    }, register('passwordConfirmation')), {}, {
      error: t((_errors$passwordConfi = errors.passwordConfirmation) === null || _errors$passwordConfi === void 0 ? void 0 : _errors$passwordConfi.message),
      className: "mb-5",
      variant: "outline"
    })), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
      loading: loading,
      disabled: loading,
      className: "ms-auto",
      children: t('text-submit')
    })]
  });
};

/* harmony default export */ const change_password_form = (ChangePasswordForm);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
;// CONCATENATED MODULE: ./src/components/auth/change-password-validation-schema.ts

const changePasswordSchema = external_yup_.object().shape({
  oldPassword: external_yup_.string().required('error-old-password-required'),
  newPassword: external_yup_.string().required('error-new-password-required'),
  passwordConfirmation: external_yup_.string().oneOf([external_yup_.ref('newPassword')], 'error-match-passwords').required('error-confirm-password')
});
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2166);
;// CONCATENATED MODULE: ./src/framework/rest/auth/change-password.tsx
function change_password_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function change_password_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { change_password_ownKeys(Object(source), true).forEach(function (key) { change_password_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { change_password_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function change_password_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const ChangePassword = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const methods = (0,external_react_hook_form_.useForm)({
    resolver: (0,yup_.yupResolver)(changePasswordSchema)
  });
  const {
    mutate: changePassword,
    isLoading: loading
  } = (0,auth_query/* useChangePasswordMutation */.$h)();

  function onSubmit({
    newPassword,
    oldPassword
  }) {
    changePassword({
      oldPassword: oldPassword,
      newPassword: newPassword
    }, {
      onSuccess: data => {
        if (!data.success) {
          methods.setError('oldPassword', {
            type: 'manual',
            message: data.message
          });
          return;
        }

        external_react_toastify_.toast.success(t('password-successful'));
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

  return /*#__PURE__*/jsx_runtime_.jsx(external_react_hook_form_.FormProvider, change_password_objectSpread(change_password_objectSpread({}, methods), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(change_password_form, {
      loading: loading,
      onSubmit: onSubmit
    })
  }));
};

/* harmony default export */ const change_password = (ChangePassword);
// EXTERNAL MODULE: ./src/components/layouts/layout.tsx + 10 modules
var layout = __webpack_require__(6578);
// EXTERNAL MODULE: ./src/framework/rest/ssr/common.ts
var common = __webpack_require__(857);
;// CONCATENATED MODULE: ./src/pages/change-password.tsx









const ChangePasswordPage = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(card/* default */.Z, {
    className: "w-full",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "mb-5 sm:mb-8 text-lg sm:text-xl text-heading font-semibold",
      children: t('change-password')
    }), /*#__PURE__*/jsx_runtime_.jsx(change_password, {})]
  });
};

const getLayout = page => (0,layout/* getLayout */.G)( /*#__PURE__*/jsx_runtime_.jsx("div", {
  className: "min-h-screen transition-colors duration-150 bg-gray-100",
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col lg:flex-row items-start max-w-1920 w-full mx-auto py-10 px-8 xl:py-14 xl:px-16 2xl:px-20 bg-gray-100",
    children: [/*#__PURE__*/jsx_runtime_.jsx(sidebar/* default */.Z, {
      className: "flex-shrink-0 hidden lg:block lg:w-80 me-10"
    }), page]
  })
}));

ChangePasswordPage.authenticate = true;
ChangePasswordPage.getLayout = getLayout;
/* harmony default export */ const pages_change_password = (ChangePasswordPage);

/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 2166:
/***/ ((module) => {

module.exports = require("@hookform/resolvers/yup");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3687:
/***/ ((module) => {

module.exports = require("camelcase-keys");

/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 8250:
/***/ ((module) => {

module.exports = require("jotai");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("jotai/utils");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3295:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1958:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2662:
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9475:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 2034:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9440:
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4939,5218,9517,8926,2317,2395,6902,6578,7993,857,5658,5434,1097,6838,333,6149], () => (__webpack_exec__(4220)));
module.exports = __webpack_exports__;

})();