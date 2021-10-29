"use strict";
exports.id = 6149;
exports.ids = [6149];
exports.modules = {

/***/ 6149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ password_input)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(1420);
// EXTERNAL MODULE: ./src/components/icons/eye-icon.tsx
var eye_icon = __webpack_require__(1097);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/eye-off-icon.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const EyeOff = props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
  })
}));
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/ui/forms/password-input.tsx
const _excluded = ["className", "inputClassName", "label", "name", "error", "children", "variant", "shadow", "type", "forgotPageLink", "forgotPageRouteOnClick"];

function password_input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function password_input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { password_input_ownKeys(Object(source), true).forEach(function (key) { password_input_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { password_input_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function password_input_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const variantClasses = {
  normal: 'bg-gray-100 border border-border-base focus:shadow focus:bg-light focus:border-accent',
  solid: 'bg-gray-100 border border-border-100 focus:bg-light focus:border-accent',
  outline: 'border border-border-base focus:border-accent'
};
const PasswordInput = /*#__PURE__*/external_react_default().forwardRef((_ref, ref) => {
  let {
    className,
    inputClassName,
    label,
    name,
    error,
    children,
    variant = 'normal',
    shadow = false,
    type = 'text',
    forgotPageLink = '',
    forgotPageRouteOnClick
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(false);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center justify-between mb-2",
      children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: name,
        className: "font-semibold text-sm text-body",
        children: label
      }), forgotPageLink && /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
        href: forgotPageLink,
        className: "text-xs text-accent transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover",
        children: t('common:text-forgot-password')
      }), forgotPageRouteOnClick && /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: forgotPageRouteOnClick,
        type: "button",
        className: "text-xs text-accent transition-colors duration-200 focus:outline-none focus:text-accent-700 focus:font-semibold hover:text-accent-hover",
        children: t('common:text-forgot-password')
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "relative",
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", password_input_objectSpread({
        id: name,
        name: name,
        type: show ? 'text' : 'password',
        ref: ref,
        className: external_classnames_default()('py-3 ps-4 pe-11 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0', shadow && 'focus:shadow', variantClasses[variant], inputClassName),
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: "false"
      }, rest)), /*#__PURE__*/jsx_runtime_.jsx("label", {
        htmlFor: name,
        className: "absolute end-4 top-5 -mt-2 text-body cursor-pointer",
        onClick: () => setShow(prev => !prev),
        children: show ? /*#__PURE__*/jsx_runtime_.jsx(EyeOff, {
          className: "w-6 h-6"
        }) : /*#__PURE__*/jsx_runtime_.jsx(eye_icon/* Eye */.b, {
          className: "w-6 h-6"
        })
      })]
    }), error && /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "my-2 text-xs text-red-500",
      children: error
    })]
  });
});
PasswordInput.displayName = 'PasswordInput';
/* harmony default export */ const password_input = (PasswordInput);

/***/ })

};
;