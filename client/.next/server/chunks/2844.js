"use strict";
exports.id = 2844;
exports.ids = [2844];
exports.modules = {

/***/ 2844:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressGrid": () => (/* binding */ AddressGrid),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4652);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4025);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_address_address_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4427);
/* harmony import */ var _components_address_address_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(493);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









const AddressGrid = ({
  addresses,
  label,
  atom,
  className,
  userId,
  count,
  type
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_6__.useTranslation)('common');
  const [selectedAddress, setAddress] = (0,jotai__WEBPACK_IMPORTED_MODULE_2__.useAtom)(atom);
  const {
    openModal
  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (addresses !== null && addresses !== void 0 && addresses.length) {
      if (selectedAddress !== null && selectedAddress !== void 0 && selectedAddress.id) {
        const index = addresses.findIndex(a => a.id === selectedAddress.id);
        setAddress(addresses[index]);
      } else {
        setAddress(addresses === null || addresses === void 0 ? void 0 : addresses[0]);
      }
    }
  }, [addresses, addresses === null || addresses === void 0 ? void 0 : addresses.length, selectedAddress === null || selectedAddress === void 0 ? void 0 : selectedAddress.id, setAddress]);

  function onAdd() {
    openModal('ADD_OR_UPDATE_ADDRESS', {
      customerId: userId,
      type
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_address_address_header__WEBPACK_IMPORTED_MODULE_5__/* .AddressHeader */ .V, {
      onAdd: onAdd,
      count: count,
      label: label
    }), addresses && addresses !== null && addresses !== void 0 && addresses.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup, {
      value: selectedAddress,
      onChange: setAddress,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup.Label, {
        className: "sr-only",
        children: label
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
        children: addresses === null || addresses === void 0 ? void 0 : addresses.map(address => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.RadioGroup.Option, {
          value: address,
          children: ({
            checked
          }) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_address_address_card__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
            checked: checked,
            address: address,
            userId: userId
          })
        }, address.id))
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
        className: "relative px-5 py-6 text-base text-center bg-gray-100 rounded border border-border-200",
        children: t('text-no-address')
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddressGrid);

/***/ })

};
;