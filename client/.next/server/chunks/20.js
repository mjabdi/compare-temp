"use strict";
exports.id = 20;
exports.ids = [20];
exports.modules = {

/***/ 20:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6126);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1817);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4652);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1219);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const Neon = ({
  product,
  className
}) => {
  var _image$original;

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)('common'); // const { name, image, quantity } = product ?? {};
  // const { price, basePrice, discount } = usePrice({
  //   amount: product.sale_price ? product.sale_price : product.price!,
  //   baseAmount: product.price,
  // });

  const {
    name,
    image,
    quantity,
    min_price,
    max_price,
    product_type
  } = product !== null && product !== void 0 ? product : {};
  const {
    price,
    basePrice,
    discount
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)({
    amount: product.sale_price ? product.sale_price : product.price,
    baseAmount: product.price
  });
  const {
    price: minPrice
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)({
    amount: min_price
  });
  const {
    price: maxPrice
  } = (0,_lib_use_price__WEBPACK_IMPORTED_MODULE_2__/* .default */ .ZP)({
    amount: max_price
  });
  const {
    openModal
  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_4__/* .useModalAction */ .SO)();

  function handleProductQuickView() {
    return openModal('PRODUCT_DETAILS', product.slug);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("article", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card cart-type-neon border border-border-200 rounded h-full bg-light overflow-hidden shadow-sm transition-all duration-200 hover:shadow transform hover:-translate-y-0.5', className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "relative flex items-center justify-center cursor-pointer w-auto h-48 sm:h-64",
      onClick: handleProductQuickView,
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
        className: "sr-only",
        children: t('text-product-image')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_0__/* .Image */ .E, {
        src: (_image$original = image === null || image === void 0 ? void 0 : image.original) !== null && _image$original !== void 0 ? _image$original : _lib_placeholders__WEBPACK_IMPORTED_MODULE_5__/* .productPlaceholder */ .Hb,
        alt: name,
        layout: "fill",
        objectFit: "contain",
        className: "product-image"
      }), discount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "absolute top-3 end-3 md:top-4 md:end-4 rounded text-xs leading-6 font-semibold px-1.5 sm:px-2 md:px-2.5 bg-accent text-light",
        children: discount
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("header", {
      className: "p-3 md:p-6",
      children: [product_type.toLowerCase() === 'variable' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "mb-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          className: "text-sm md:text-base text-heading font-semibold",
          children: minPrice
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          children: " - "
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          className: "text-sm md:text-base text-heading font-semibold",
          children: maxPrice
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center mb-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          className: "text-sm md:text-base text-heading font-semibold",
          children: price
        }), basePrice && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("del", {
          className: "text-xs md:text-sm text-muted ms-2",
          children: basePrice
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h3", {
        className: "text-xs md:text-sm text-body truncate mb-4 cursor-pointer",
        onClick: handleProductQuickView,
        children: name
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Neon);

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