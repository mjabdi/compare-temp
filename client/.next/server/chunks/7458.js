"use strict";
exports.id = 7458;
exports.ids = [7458];
exports.modules = {

/***/ 2415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const Cart = ({
  width,
  height,
  className
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("svg", {
    width: width,
    height: height,
    className: className,
    viewBox: "0 0 14.4 12",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("g", {
      transform: "translate(-288 -413.89)",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("path", {
        fill: "currentColor",
        d: "M298.7,418.289l-2.906-4.148a.835.835,0,0,0-.528-.251.607.607,0,0,0-.529.251l-2.905,4.148h-3.17a.609.609,0,0,0-.661.625v.191l1.651,5.84a1.336,1.336,0,0,0,1.255.945h8.588a1.261,1.261,0,0,0,1.254-.945l1.651-5.84v-.191a.609.609,0,0,0-.661-.625Zm-5.419,0,1.984-2.767,1.98,2.767Zm1.984,5.024a1.258,1.258,0,1,1,1.319-1.258,1.3,1.3,0,0,1-1.319,1.258Zm0,0"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);

/***/ }),

/***/ 7678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* binding */ AddToCart)
});

// EXTERNAL MODULE: ./src/components/ui/counter.tsx
var counter = __webpack_require__(8328);
// EXTERNAL MODULE: ./src/components/icons/plus-icon.tsx
var plus_icon = __webpack_require__(2816);
// EXTERNAL MODULE: ./src/components/icons/cart.tsx
var cart = __webpack_require__(2415);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/products/add-to-cart/add-to-cart-btn.tsx







const AddToCartBtn = ({
  variant,
  onClick,
  disabled
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)("common");

  switch (variant) {
    case "neon":
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        onClick: onClick,
        disabled: disabled,
        className: "group w-full h-7 md:h-9 flex items-center justify-between text-xs md:text-sm text-body-dark rounded bg-gray-100 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "flex-1",
          children: t("text-add")
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "w-7 h-7 md:w-9 md:h-9 bg-gray-200 grid place-items-center rounded-te rounded-be transition-colors duration-200 group-hover:bg-accent-600 group-focus:bg-accent-600",
          children: /*#__PURE__*/jsx_runtime_.jsx(plus_icon/* PlusIcon */.p, {
            className: "w-4 h-4 stroke-2"
          })
        })]
      });

    case "argon":
      return /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: onClick,
        disabled: disabled,
        className: "w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-sm text-heading bg-light rounded border border-border-200 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light",
        children: /*#__PURE__*/jsx_runtime_.jsx(plus_icon/* PlusIcon */.p, {
          className: "w-5 h-5 stroke-2"
        })
      });

    case "oganesson":
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        onClick: onClick,
        disabled: disabled,
        className: "w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-sm rounded-full text-light bg-accent shadow-500 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t("text-plus")
        }), /*#__PURE__*/jsx_runtime_.jsx(plus_icon/* PlusIcon */.p, {
          className: "w-5 h-5 md:w-6 md:h-6 stroke-2"
        })]
      });

    case "single":
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        onClick: onClick,
        disabled: disabled,
        className: "order-5 sm:order-4 py-2 px-3 sm:px-5 border-2 border-border-100 flex items-center justify-center sm:justify-start text-sm font-semibold rounded-full text-accent hover:text-light bg-light hover:bg-accent hover:border-accent transition-colors duration-300 focus:outline-none focus:bg-accent focus:border-accent focus:text-light",
        children: [/*#__PURE__*/jsx_runtime_.jsx(cart/* default */.Z, {
          className: "w-4 h-4 me-2.5"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: t("text-cart")
        })]
      });

    case "big":
      return /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: onClick,
        disabled: disabled,
        className: external_classnames_default()("py-4 px-5 w-full flex items-center justify-center text-sm lg:text-base font-light rounded text-light bg-accent hover:bg-accent-hover transition-colors duration-300 focus:outline-none focus:bg-accent-hover", {
          "border !bg-gray-300 hover:!bg-gray-300 border-border-400 !text-body cursor-not-allowed": disabled
        }),
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "Buy at Seller Website"
        })
      });

    default:
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        onClick: onClick,
        disabled: disabled,
        title: disabled ? "Out Of Stock" : "",
        className: "w-7 h-7 md:w-9 md:h-9 flex items-center justify-center text-sm text-accent bg-light rounded border border-border-200 transition-colors hover:bg-accent hover:border-accent hover:text-light focus:outline-none focus:bg-accent focus:border-accent focus:text-light",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t("text-plus")
        }), /*#__PURE__*/jsx_runtime_.jsx(plus_icon/* PlusIcon */.p, {
          className: "w-5 h-5 stroke-2"
        })]
      });
  }
};

/* harmony default export */ const add_to_cart_btn = (AddToCartBtn);
// EXTERNAL MODULE: ./src/store/quick-cart/cart.context.tsx + 2 modules
var cart_context = __webpack_require__(4436);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(8718);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
;// CONCATENATED MODULE: ./src/store/quick-cart/generate-cart-item.ts

function generateCartItem(item, variation) {
  const {
    id,
    name,
    slug,
    image,
    price,
    sale_price,
    quantity,
    unit
  } = item;

  if (!isEmpty_default()(variation)) {
    return {
      id: `${id}.${variation.id}`,
      productId: id,
      name: `${name} - ${variation.title}`,
      slug,
      unit,
      stock: variation.quantity,
      price: variation.sale_price ? variation.sale_price : variation.price,
      image: image === null || image === void 0 ? void 0 : image.thumbnail,
      variationId: variation.id
    };
  }

  return {
    id,
    name,
    slug,
    unit,
    image: image === null || image === void 0 ? void 0 : image.thumbnail,
    stock: quantity,
    price: sale_price ? sale_price : price
  };
}
;// CONCATENATED MODULE: ./src/components/products/add-to-cart/add-to-cart.tsx






const AddToCart = ({
  data,
  variant = 'helium',
  counterVariant,
  counterClass,
  variation,
  disabled
}) => {
  const {
    addItemToCart,
    removeItemFromCart,
    isInStock,
    getItemFromCart,
    isInCart
  } = (0,cart_context/* useCart */.jD)();
  const item = generateCartItem(data, variation);

  const handleAddClick = e => {
    e.stopPropagation(); // addItemToCart(item, 1);
    // if (!isInCart(item.id)) {
    //   cartAnimation(e);
    // }
  };

  const handleRemoveClick = e => {
    e.stopPropagation();
    removeItemFromCart(item.id);
  };

  const outOfStock = isInCart(item === null || item === void 0 ? void 0 : item.id) && !isInStock(item.id);
  return !isInCart(item === null || item === void 0 ? void 0 : item.id) ? /*#__PURE__*/jsx_runtime_.jsx("a", {
    href: data.url,
    target: "_blank",
    children: /*#__PURE__*/jsx_runtime_.jsx(add_to_cart_btn, {
      disabled: disabled || outOfStock,
      variant: variant,
      onClick: handleAddClick
    })
  }) : /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx(counter/* default */.Z, {
      value: getItemFromCart(item.id).quantity,
      onDecrement: handleRemoveClick,
      onIncrement: handleAddClick,
      variant: counterVariant || variant,
      className: counterClass,
      disabled: outOfStock
    })
  });
};

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