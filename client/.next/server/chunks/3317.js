"use strict";
exports.id = 3317;
exports.ids = [3317];
exports.modules = {

/***/ 9763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6126);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_use_price__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1817);
/* harmony import */ var _components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7678);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4652);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1219);
/* harmony import */ var _components_icons_cart__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2415);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












const Helium = ({
  product,
  className
}) => {
  var _image$original;

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)('common'); // const { name, image, unit, quantity } = product ?? {};
  // const { price, basePrice, discount } = usePrice({
  //   amount: product.sale_price ? product.sale_price : product.price!,
  //   baseAmount: product.price,
  // });

  const {
    name,
    image,
    unit,
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
  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_5__/* .useModalAction */ .SO)();

  function handleProductQuickView() {
    return openModal('PRODUCT_DETAILS', product.slug);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("article", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('product-card cart-type-helium rounded border border-border-200 h-full bg-light overflow-hidden transition-shadow duration-200 hover:shadow-sm', className),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      onClick: handleProductQuickView,
      className: "relative flex items-center justify-center w-auto h-48 sm:h-64",
      role: "button",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
        className: "sr-only",
        children: t('text-product-image')
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_0__/* .Image */ .E, {
        src: (_image$original = image === null || image === void 0 ? void 0 : image.original) !== null && _image$original !== void 0 ? _image$original : _lib_placeholders__WEBPACK_IMPORTED_MODULE_6__/* .productPlaceholder */ .Hb,
        alt: name,
        layout: "fill",
        objectFit: "contain",
        className: "product-image"
      }), discount && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: "absolute top-3 end-3 md:top-4 md:end-4 rounded-full text-xs leading-6 font-semibold px-1.5 sm:px-2 md:px-2.5 bg-yellow-500 text-light",
        children: discount
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("header", {
      className: "p-3 md:py-6 md:p-5 relative",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h3", {
        onClick: handleProductQuickView,
        role: "button",
        className: "text-heading text-sm font-semibold truncate mb-2",
        children: name
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        className: "text-muted text-xs",
        children: unit
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: "flex items-center justify-between min-h-6 mt-7 md:mt-8 relative",
        children: [product_type.toLowerCase() === 'variable' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "text-accent text-sm md:text-[15px] font-semibold",
              children: minPrice
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              children: " - "
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "text-accent text-sm md:text-[15px] font-semibold",
              children: maxPrice
            })]
          }), Number(quantity) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
            onClick: handleProductQuickView,
            className: "order-5 sm:order-4 py-2 px-3 sm:px-4 border-2 border-border-100 flex items-center justify-center sm:justify-start text-sm font-semibold rounded-full text-accent hover:text-light bg-light hover:bg-accent hover:border-accent transition-colors duration-300 focus:outline-none focus:bg-accent focus:border-accent focus:text-light",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_icons_cart__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z, {
              className: "w-4 h-4 me-2"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              children: t('text-cart')
            })]
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: "relative",
            children: [basePrice && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("del", {
              className: "text-xs text-muted text-opacity-75 absolute -top-4 md:-top-5 italic",
              children: basePrice
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: "text-accent text-sm md:text-base font-semibold",
              children: price
            })]
          }), Number(quantity) > 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_products_add_to_cart_add_to_cart__WEBPACK_IMPORTED_MODULE_3__/* .AddToCart */ .o, {
            data: product,
            variant: "single"
          })]
        }), Number(quantity) <= 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: "bg-red-500 rounded text-xs text-light px-2 py-1",
          children: t('text-out-stock')
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Helium);

/***/ })

};
;