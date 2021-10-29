"use strict";
exports.id = 3669;
exports.ids = [3669];
exports.modules = {

/***/ 4427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ address_card)
});

// EXTERNAL MODULE: ./src/components/icons/close-icon.tsx
var close_icon = __webpack_require__(7831);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/pencil-icon.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const PencilIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({}, props), {}, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
  })
}));
// EXTERNAL MODULE: ./src/components/ui/modal/modal.context.tsx
var modal_context = __webpack_require__(4652);
// EXTERNAL MODULE: ./src/lib/format-address.ts
var format_address = __webpack_require__(2528);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/address/address-card.tsx









const AddressCard = ({
  checked,
  address,
  userId
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const {
    openModal
  } = (0,modal_context/* useModalAction */.SO)();

  function onEdit() {
    openModal('ADD_OR_UPDATE_ADDRESS', {
      customerId: userId,
      address
    });
  }

  function onDelete() {
    openModal('DELETE_ADDRESS', {
      customerId: userId,
      addressId: address.id
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()('relative p-4 rounded border cursor-pointer group hover:border-accent', {
      'border-accent shadow-sm': checked,
      'bg-gray-100 border-transparent': !checked
    }),
    children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-sm text-heading font-semibold mb-3 capitalize",
      children: address.title
    }), /*#__PURE__*/jsx_runtime_.jsx("p", {
      className: "text-sm text-sub-heading",
      children: (0,format_address/* formatAddress */.T)(address.address)
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "absolute top-4 end-4 flex space-s-2 opacity-0 group-hover:opacity-100",
      children: [onEdit && /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "flex items-center justify-center w-5 h-5 rounded-full bg-accent text-light",
        onClick: onEdit,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-edit')
        }), /*#__PURE__*/jsx_runtime_.jsx(PencilIcon, {
          className: "w-3 h-3"
        })]
      }), onDelete && /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "flex items-center justify-center w-5 h-5 rounded-full bg-red-600 text-light",
        onClick: onDelete,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-delete')
        }), /*#__PURE__*/jsx_runtime_.jsx(close_icon/* CloseIcon */.T, {
          className: "w-3 h-3"
        })]
      })]
    })]
  });
};

/* harmony default export */ const address_card = (AddressCard);

/***/ }),

/***/ 493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ AddressHeader)
/* harmony export */ });
/* harmony import */ var _components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2816);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const AddressHeader = ({
  onAdd,
  count,
  label
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "flex items-center justify-between mb-5 md:mb-8",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "flex items-center space-s-3 md:space-s-4",
      children: [count && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
        className: "rounded-full w-8 h-8 bg-accent flex items-center justify-center text-base lg:text-xl text-light",
        children: count
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
        className: "text-lg lg:text-xl text-heading capitalize",
        children: label
      })]
    }), onAdd && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("button", {
      className: "flex items-center text-sm font-semibold text-accent transition-colors duration-200 focus:outline-none focus:text-accent-hover hover:text-accent-hover",
      onClick: onAdd,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_icons_plus_icon__WEBPACK_IMPORTED_MODULE_0__/* .PlusIcon */ .p, {
        className: "w-4 h-4 stroke-2 me-0.5"
      }), t('text-add')]
    })]
  });
};

/***/ })

};
;