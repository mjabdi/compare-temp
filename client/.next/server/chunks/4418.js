"use strict";
exports.id = 4418;
exports.ids = [4418];
exports.modules = {

/***/ 4418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ refund_request_view)
});

// EXTERNAL MODULE: ./src/components/ui/modal/modal.context.tsx
var modal_context = __webpack_require__(4652);
// EXTERNAL MODULE: ./src/framework/rest/refunds/refunds.query.ts + 1 modules
var refunds_query = __webpack_require__(7037);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/components/ui/forms/file-input.tsx + 3 modules
var file_input = __webpack_require__(4405);
// EXTERNAL MODULE: ./src/components/ui/forms/form.tsx
var forms_form = __webpack_require__(6509);
// EXTERNAL MODULE: ./src/components/ui/forms/input.tsx
var input = __webpack_require__(5549);
// EXTERNAL MODULE: ./src/components/ui/forms/label.tsx
var label = __webpack_require__(3883);
// EXTERNAL MODULE: ./src/components/ui/forms/text-area.tsx
var text_area = __webpack_require__(2951);
// EXTERNAL MODULE: external "react-i18next"
var external_react_i18next_ = __webpack_require__(7789);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/refunds/refund-form.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












const refundFormSchema = external_yup_.object().shape({
  title: external_yup_.string().required('error-title-required'),
  description: external_yup_.string().required('error-description-required')
});

const RefundForm = ({
  loading,
  onSubmit
}) => {
  const {
    t
  } = (0,external_react_i18next_.useTranslation)('common');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-6 px-5 sm:p-8 bg-light w-screen md:max-w-[480px] min-h-screen md:min-h-0 h-full md:h-auto flex flex-col justify-center md:rounded-xl",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
      className: "text-heading font-semibold text-lg text-center mb-5 sm:mb-6",
      children: [t('text-add-new'), " ", t('text-refund')]
    }), /*#__PURE__*/jsx_runtime_.jsx(forms_form/* Form */.l, {
      onSubmit: onSubmit,
      validationSchema: refundFormSchema,
      children: ({
        register,
        control,
        formState: {
          errors
        }
      }) => {
        var _errors$title, _errors$description;

        return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
            label: t('text-reason')
          }, register('title')), {}, {
            variant: "outline",
            className: "mb-5",
            error: t((_errors$title = errors.title) === null || _errors$title === void 0 ? void 0 : _errors$title.message)
          })), /*#__PURE__*/jsx_runtime_.jsx(text_area/* default */.Z, _objectSpread(_objectSpread({
            label: t('text-description')
          }, register('description')), {}, {
            variant: "outline",
            className: "mb-5",
            error: t((_errors$description = errors.description) === null || _errors$description === void 0 ? void 0 : _errors$description.message)
          })), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mb-8",
            children: [/*#__PURE__*/jsx_runtime_.jsx(label/* default */.Z, {
              htmlFor: "images",
              children: t('text-product-image')
            }), /*#__PURE__*/jsx_runtime_.jsx(file_input/* default */.Z, {
              control: control,
              name: "images",
              multiple: true
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "mt-8",
            children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              className: "w-full h-11 sm:h-12",
              loading: loading,
              disabled: loading,
              children: t('text-submit')
            })
          })]
        });
      }
    })]
  });
};

/* harmony default export */ const refund_form = (RefundForm);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
;// CONCATENATED MODULE: ./src/framework/rest/refunds/refund-request-view.tsx







const RefundRequestView = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    mutate: refundRequest,
    isLoading: loading
  } = (0,refunds_query/* useCreateRefundMutation */.c)();
  const {
    data
  } = (0,modal_context/* useModalState */.X9)();
  const {
    closeModal
  } = (0,modal_context/* useModalAction */.SO)();

  function handleRefundRequest({
    title,
    description,
    images
  }) {
    refundRequest({
      order_id: data,
      title,
      description,
      images
    });
    external_react_toastify_.toast.success(t('text-refund-request-submitted'));
    closeModal();
  } // need to handle server error


  return /*#__PURE__*/jsx_runtime_.jsx(refund_form, {
    onSubmit: handleRefundRequest,
    loading: loading
  });
};

/* harmony default export */ const refund_request_view = (RefundRequestView);

/***/ })

};
;