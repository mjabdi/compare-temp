"use strict";
exports.id = 7506;
exports.ids = [7506];
exports.modules = {

/***/ 7506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4652);
/* harmony import */ var _framework_customer_customer_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(799);
/* harmony import */ var _framework_otp_otp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9300);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const ProfileAddOrUpdateContact = () => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common');
  const {
    data: {
      customerId,
      contactNumber,
      profileId
    }
  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalState */ .X9)();
  const {
    closeModal
  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
  const {
    mutate: updateProfile
  } = (0,_framework_customer_customer_query__WEBPACK_IMPORTED_MODULE_1__/* .useUpdateCustomerMutation */ .o)();

  function onContactUpdate(newPhoneNumber) {
    if (!customerId) {
      return false;
    }

    updateProfile({
      id: customerId,
      profile: {
        id: profileId,
        contact: newPhoneNumber
      }
    }, {
      onSuccess: () => {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.success(t('profile-update-successful'));
      },
      onError: err => {
        react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.error(t('error-something-wrong'));
      }
    });
    closeModal();
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "p-5 sm:p-8 bg-light md:rounded-xl min-h-screen flex flex-col justify-center md:min-h-0",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("h1", {
      className: "text-heading font-semibold text-sm text-center mb-5 sm:mb-6",
      children: [contactNumber ? t('text-update') : t('text-add-new'), ' ', t('text-contact-number')]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_framework_otp_otp__WEBPACK_IMPORTED_MODULE_2__/* .OTP */ .M, {
      defaultValue: contactNumber,
      onVerify: onContactUpdate
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfileAddOrUpdateContact);

/***/ })

};
;