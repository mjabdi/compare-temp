"use strict";
exports.id = 6598;
exports.ids = [6598];
exports.modules = {

/***/ 6598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _framework_auth_auth_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6838);
/* harmony import */ var _components_ui_logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4386);
/* harmony import */ var _components_ui_alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5013);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5218);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4652);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const EnterEmailView = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__.default)(() => __webpack_require__.e(/* import() */ 1153).then(__webpack_require__.bind(__webpack_require__, 1153)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1153)],
    modules: ["../framework/rest/auth/forget-password.tsx -> " + '@components/auth/forget-password/enter-email-view']
  }
});
const EnterTokenView = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__.default)(() => __webpack_require__.e(/* import() */ 5986).then(__webpack_require__.bind(__webpack_require__, 5986)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5986)],
    modules: ["../framework/rest/auth/forget-password.tsx -> " + '@components/auth/forget-password/enter-token-view']
  }
});
const EnterNewPasswordView = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__.default)(() => __webpack_require__.e(/* import() */ 414).then(__webpack_require__.bind(__webpack_require__, 414)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(414)],
    modules: ["../framework/rest/auth/forget-password.tsx -> " + '@components/auth/forget-password/enter-new-password-view']
  }
});

const ForgetPassword = () => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common');
  const {
    openModal
  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_6__/* .useModalAction */ .SO)();
  const {
    mutate: forgetPassword,
    isLoading
  } = (0,_framework_auth_auth_query__WEBPACK_IMPORTED_MODULE_1__/* .useForgetPasswordMutation */ .xy)();
  const {
    mutate: verifyToken,
    isLoading: verifying
  } = (0,_framework_auth_auth_query__WEBPACK_IMPORTED_MODULE_1__/* .useVerifyForgetPasswordTokenMutation */ .AV)();
  const {
    mutate: resetPassword,
    isLoading: resetting
  } = (0,_framework_auth_auth_query__WEBPACK_IMPORTED_MODULE_1__/* .useResetPasswordMutation */ .gL)();
  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: verifiedEmail,
    1: setVerifiedEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: verifiedToken,
    1: setVerifiedToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');

  function handleEmailSubmit({
    email
  }) {
    forgetPassword({
      email
    }, {
      onSuccess: data => {
        if (data.success) {
          setVerifiedEmail(email);
        } else {
          setErrorMsg(data === null || data === void 0 ? void 0 : data.message);
        }
      }
    });
  }

  function handleTokenSubmit({
    token
  }) {
    verifyToken({
      email: verifiedEmail,
      token
    }, {
      onSuccess: data => {
        if (data.success) {
          setVerifiedToken(token);
        } else {
          setErrorMsg(data === null || data === void 0 ? void 0 : data.message);
        }
      }
    });
  }

  function handleResetPassword({
    password
  }) {
    resetPassword({
      email: verifiedEmail,
      token: verifiedToken,
      password
    }, {
      onSuccess: data => {
        if (data.success) {
          openModal('LOGIN_VIEW');
        } else {
          setErrorMsg(data === null || data === void 0 ? void 0 : data.message);
        }
      }
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: "py-6 px-5 sm:p-8 bg-light w-screen md:max-w-[480px] min-h-screen md:min-h-0 h-full md:h-auto flex flex-col justify-center md:rounded-xl",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: "flex justify-center",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ui_logo__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {})
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
      className: "text-center text-sm md:text-base leading-relaxed text-body mt-4 sm:mt-5 mb-7 sm:mb-10",
      children: t('forgot-password-helper')
    }), errorMsg && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_ui_alert__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
      variant: "error",
      message: errorMsg,
      className: "mb-6",
      closeable: true,
      onClose: () => setErrorMsg('')
    }), !verifiedEmail && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(EnterEmailView, {
      loading: isLoading,
      onSubmit: handleEmailSubmit
    }), verifiedEmail && !verifiedToken && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(EnterTokenView, {
      loading: verifying,
      onSubmit: handleTokenSubmit
    }), verifiedEmail && verifiedToken && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(EnterNewPasswordView, {
      loading: resetting,
      onSubmit: handleResetPassword
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "flex flex-col items-center justify-center relative text-sm text-heading mt-9 sm:mt-11 mb-7 sm:mb-8",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("hr", {
        className: "w-full"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
        className: "absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light",
        children: t('text-or')
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: "text-sm sm:text-base text-body text-center",
      children: [t('text-back-to'), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
        onClick: () => openModal('LOGIN_VIEW'),
        className: "ms-1 underline text-accent font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover hover:no-underline focus:no-underline",
        children: t('text-login')
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgetPassword);

/***/ })

};
;