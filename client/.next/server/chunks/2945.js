exports.id = 2945;
exports.ids = [2945];
exports.modules = {

/***/ 2945:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ create_or_update)
});

// EXTERNAL MODULE: ./src/framework/rest/customer/customer.query.ts
var customer_query = __webpack_require__(799);
// EXTERNAL MODULE: ./src/components/ui/modal/modal.context.tsx
var modal_context = __webpack_require__(4652);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/components/ui/forms/input.tsx
var input = __webpack_require__(5549);
// EXTERNAL MODULE: ./src/components/ui/forms/label.tsx
var label = __webpack_require__(3883);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/ui/forms/radio/radio.module.css
var radio_module = __webpack_require__(7488);
var radio_module_default = /*#__PURE__*/__webpack_require__.n(radio_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/ui/forms/radio/radio.tsx
const _excluded = ["className", "label", "name", "id", "error"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Radio = /*#__PURE__*/external_react_default().forwardRef((_ref, ref) => {
  let {
    className,
    label,
    name,
    id,
    error
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
        id: id,
        name: name,
        type: "radio",
        ref: ref,
        className: (radio_module_default()).radio_input
      }, rest)), /*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: id,
        className: "text-body text-sm",
        children: label
      })]
    }), error && /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "my-2 text-xs text-end text-red-500",
      children: error
    })]
  });
});
Radio.displayName = 'Radio';
/* harmony default export */ const radio_radio = (Radio);
// EXTERNAL MODULE: ./src/components/ui/forms/text-area.tsx
var text_area = __webpack_require__(2951);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: ./src/components/ui/forms/form.tsx
var forms_form = __webpack_require__(6509);
// EXTERNAL MODULE: ./src/framework/rest/utils/constants.ts
var constants = __webpack_require__(3749);
;// CONCATENATED MODULE: ./src/components/address/address-form.tsx
function address_form_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function address_form_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { address_form_ownKeys(Object(source), true).forEach(function (key) { address_form_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { address_form_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function address_form_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const addressSchema = external_yup_.object().shape({
  type: external_yup_.string().oneOf([constants/* AddressType.Billing */.D.Billing, constants/* AddressType.Shipping */.D.Shipping]).required('error-type-required'),
  title: external_yup_.string().required('error-title-required'),
  address: external_yup_.object().shape({
    country: external_yup_.string().required('error-country-required'),
    city: external_yup_.string().required('error-city-required'),
    state: external_yup_.string().required('error-state-required'),
    zip: external_yup_.string().required('error-zip-required'),
    street_address: external_yup_.string().required('error-street-required')
  })
});

const AddressForm = ({
  onSubmit
}) => {
  var _address$title, _address$type;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    data: {
      address,
      type
    }
  } = (0,modal_context/* useModalState */.X9)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "p-5 sm:p-8 bg-light md:rounded-xl min-h-screen md:min-h-0",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
      className: "text-heading font-semibold text-lg text-center mb-4 sm:mb-6",
      children: [address ? t('text-update') : t('text-add-new'), " ", t('text-address')]
    }), /*#__PURE__*/jsx_runtime_.jsx(forms_form/* Form */.l, {
      onSubmit: onSubmit,
      className: "grid grid-cols-2 gap-5 h-full",
      validationSchema: addressSchema,
      options: {
        shouldUnregister: true,
        defaultValues: address_form_objectSpread({
          title: (_address$title = address === null || address === void 0 ? void 0 : address.title) !== null && _address$title !== void 0 ? _address$title : '',
          type: (_address$type = address === null || address === void 0 ? void 0 : address.type) !== null && _address$type !== void 0 ? _address$type : type
        }, (address === null || address === void 0 ? void 0 : address.address) && address)
      },
      children: ({
        register,
        formState: {
          errors
        }
      }) => {
        var _errors$title, _errors$address, _errors$address$count, _errors$address2, _errors$address2$city, _errors$address3, _errors$address3$stat, _errors$address4, _errors$address4$zip, _errors$address5, _errors$address5$stre;

        return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx(label/* default */.Z, {
              children: t('text-type')
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "space-s-4 flex items-center",
              children: [/*#__PURE__*/jsx_runtime_.jsx(radio_radio, address_form_objectSpread(address_form_objectSpread({
                id: "billing"
              }, register('type')), {}, {
                type: "radio",
                value: constants/* AddressType.Billing */.D.Billing,
                label: t('text-billing')
              })), /*#__PURE__*/jsx_runtime_.jsx(radio_radio, address_form_objectSpread(address_form_objectSpread({
                id: "shipping"
              }, register('type')), {}, {
                type: "radio",
                value: constants/* AddressType.Shipping */.D.Shipping,
                label: t('text-shipping')
              }))]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, address_form_objectSpread(address_form_objectSpread({
            label: t('text-title')
          }, register('title')), {}, {
            error: t((_errors$title = errors.title) === null || _errors$title === void 0 ? void 0 : _errors$title.message),
            variant: "outline",
            className: "col-span-2"
          })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, address_form_objectSpread(address_form_objectSpread({
            label: t('text-country')
          }, register('address.country')), {}, {
            error: t((_errors$address = errors.address) === null || _errors$address === void 0 ? void 0 : (_errors$address$count = _errors$address.country) === null || _errors$address$count === void 0 ? void 0 : _errors$address$count.message),
            variant: "outline"
          })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, address_form_objectSpread(address_form_objectSpread({
            label: t('text-city')
          }, register('address.city')), {}, {
            error: t((_errors$address2 = errors.address) === null || _errors$address2 === void 0 ? void 0 : (_errors$address2$city = _errors$address2.city) === null || _errors$address2$city === void 0 ? void 0 : _errors$address2$city.message),
            variant: "outline"
          })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, address_form_objectSpread(address_form_objectSpread({
            label: t('text-state')
          }, register('address.state')), {}, {
            error: t((_errors$address3 = errors.address) === null || _errors$address3 === void 0 ? void 0 : (_errors$address3$stat = _errors$address3.state) === null || _errors$address3$stat === void 0 ? void 0 : _errors$address3$stat.message),
            variant: "outline"
          })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, address_form_objectSpread(address_form_objectSpread({
            label: t('text-zip')
          }, register('address.zip')), {}, {
            error: t((_errors$address4 = errors.address) === null || _errors$address4 === void 0 ? void 0 : (_errors$address4$zip = _errors$address4.zip) === null || _errors$address4$zip === void 0 ? void 0 : _errors$address4$zip.message),
            variant: "outline"
          })), /*#__PURE__*/jsx_runtime_.jsx(text_area/* default */.Z, address_form_objectSpread(address_form_objectSpread({
            label: t('text-street-address')
          }, register('address.street_address')), {}, {
            error: t((_errors$address5 = errors.address) === null || _errors$address5 === void 0 ? void 0 : (_errors$address5$stre = _errors$address5.street_address) === null || _errors$address5$stre === void 0 ? void 0 : _errors$address5$stre.message),
            variant: "outline",
            className: "col-span-2"
          })), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_button/* default */.Z, {
            className: "w-full col-span-2",
            children: [address ? t('text-update') : t('text-save'), " ", t('text-address')]
          })]
        });
      }
    })]
  });
};

/* harmony default export */ const address_form = (AddressForm);
;// CONCATENATED MODULE: ./src/framework/rest/address/create-or-update.tsx
function create_or_update_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function create_or_update_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { create_or_update_ownKeys(Object(source), true).forEach(function (key) { create_or_update_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { create_or_update_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function create_or_update_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const CreateOrUpdateAddressForm = () => {
  const {
    data: {
      customerId,
      address
    }
  } = (0,modal_context/* useModalState */.X9)();
  const {
    closeModal
  } = (0,modal_context/* useModalAction */.SO)();
  const {
    mutate: updateProfile
  } = (0,customer_query/* useUpdateCustomerMutation */.o)();

  function onSubmit(values) {
    const formattedInput = {
      id: address === null || address === void 0 ? void 0 : address.id,
      customer_id: customerId,
      title: values.title,
      type: values.type,
      address: create_or_update_objectSpread(create_or_update_objectSpread({}, (address === null || address === void 0 ? void 0 : address.id) && {
        id: address.id
      }), values.address)
    };
    updateProfile({
      id: customerId,
      address: [formattedInput]
    });
    closeModal();
  }

  return /*#__PURE__*/jsx_runtime_.jsx(address_form, {
    onSubmit: onSubmit
  });
};

/* harmony default export */ const create_or_update = (CreateOrUpdateAddressForm);

/***/ }),

/***/ 3749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ AddressType)
/* harmony export */ });
let AddressType;

(function (AddressType) {
  AddressType["Billing"] = "billing";
  AddressType["Shipping"] = "shipping";
})(AddressType || (AddressType = {}));

/***/ }),

/***/ 7488:
/***/ ((module) => {

// Exports
module.exports = {
	"radio_input": "radio_radio_input__3cLhB"
};


/***/ })

};
;