"use strict";
exports.id = 9056;
exports.ids = [9056];
exports.modules = {

/***/ 9056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6126);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1219);
/* harmony import */ var _components_ui_search_search_with_suggestion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8061);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const BannerWithoutSlider = ({
  banners,
  layout
}) => {
  var _$image$original, _, _$image, _$title, _2, _3, _4;

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('hidden lg:block relative', {
      '!block': layout === 'minimal'
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('relative w-full h-screen', {
        'max-h-140': layout === 'standard',
        'max-h-[320px] md:max-h-[680px]': layout === 'minimal'
      }),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
        className: "w-full h-full min-h-140",
        src: (_$image$original = (_ = banners[0]) === null || _ === void 0 ? void 0 : (_$image = _.image) === null || _$image === void 0 ? void 0 : _$image.original) !== null && _$image$original !== void 0 ? _$image$original : _lib_placeholders__WEBPACK_IMPORTED_MODULE_2__/* .productPlaceholder */ .Hb,
        alt: (_$title = (_2 = banners[0]) === null || _2 === void 0 ? void 0 : _2.title) !== null && _$title !== void 0 ? _$title : '',
        layout: "fill",
        objectFit: "cover"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('p-5 md:px-20 absolute inset-0 w-full flex flex-col items-center justify-center text-center lg:space-y-10', {
          'space-y-5 md:!space-y-8': layout === 'minimal'
        }),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h1", {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-tight text-heading font-bold', {
            '!text-accent': layout === 'minimal'
          }),
          children: (_3 = banners[0]) === null || _3 === void 0 ? void 0 : _3.title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
          className: "text-sm md:text-base xl:text-lg text-body",
          children: (_4 = banners[0]) === null || _4 === void 0 ? void 0 : _4.description
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: "max-w-3xl w-full",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_ui_search_search_with_suggestion__WEBPACK_IMPORTED_MODULE_3__.default, {
            label: "search",
            className: "hidden lg:block",
            variant: "with-shadow"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BannerWithoutSlider);

/***/ }),

/***/ 1219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Pb": () => (/* reexport */ avatar),
  "Qg": () => (/* reexport */ coupon),
  "Hb": () => (/* reexport */ product)
});

// UNUSED EXPORTS: logoPlaceholder

;// CONCATENATED MODULE: ./src/assets/placeholders/product.svg
/* harmony default export */ const product = ({"src":"/_next/static/image/src/assets/placeholders/product.b93f2cf45b80b3ffdfcdcbe72b038fd4.svg","height":210,"width":270});
;// CONCATENATED MODULE: ./src/assets/placeholders/coupon.svg
/* harmony default export */ const coupon = ({"src":"/_next/static/image/src/assets/placeholders/coupon.1d69ebf4508d9803c322897b9802928a.svg","height":240,"width":320});
;// CONCATENATED MODULE: ./src/assets/placeholders/avatar.svg
/* harmony default export */ const avatar = ({"src":"/_next/static/image/src/assets/placeholders/avatar.2a4ed68cad8ebe21317b04e155b6b245.svg","height":120,"width":120});
;// CONCATENATED MODULE: ./src/assets/placeholders/logo.svg
/* harmony default export */ const logo = ({"src":"/_next/static/image/src/assets/placeholders/logo.f7653fd47c1ec8f573559e524693e385.svg","height":18,"width":109});
;// CONCATENATED MODULE: ./src/lib/placeholders.tsx



 // export { default as logoPlaceholder } from '@assets/img/logo_CP.png';

/***/ })

};
;