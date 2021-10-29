"use strict";
exports.id = 5013;
exports.ids = [5013];
exports.modules = {

/***/ 5013:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7831);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const variantClasses = {
  info: 'bg-blue-100 text-blue-600',
  warning: 'bg-yellow-100 text-yellow-600',
  error: 'bg-red-100 text-red-500',
  success: 'bg-green-100 text-accent',
  infoOutline: 'border border-blue-200 text-blue-600',
  warningOutline: 'border border-yellow-200 text-yellow-600',
  errorOutline: 'border border-red-200 text-red-600',
  successOutline: 'border border-green-200 text-green-600'
};

const Alert = ({
  message,
  closeable = false,
  variant = 'info',
  className,
  onClose
}) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('flex items-center justify-between relative rounded py-4 px-5 shadow-sm', variantClasses[variant], className),
    role: "alert",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
      className: "text-sm",
      children: message
    }), closeable && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
      "data-dismiss": "alert",
      "aria-label": "Close",
      onClick: onClose,
      title: "Close alert",
      className: "-me-0.5 -mt-3 flex items-center justify-center rounded-full flex-shrink-0 w-6 h-6 text-red-500 absolute end-2 top-1/2 transition-colors duration-200 hover:bg-gray-300 hover:bg-opacity-25 focus:outline-none focus:bg-gray-300 focus:bg-opacity-25",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        "aria-hidden": "true",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_1__/* .CloseIcon */ .T, {
          className: "w-3 h-3"
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ })

};
;