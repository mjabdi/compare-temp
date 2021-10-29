"use strict";
exports.id = 5241;
exports.ids = [5241];
exports.modules = {

/***/ 5241:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ cart_sidebar_view)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/cart-check-bag.tsx




const CartCheckBag = ({
  width,
  height,
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: width,
    height: height,
    className: className,
    viewBox: "0 0 12.686 16",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
      transform: "translate(-27.023 -2)",
      children: [/*#__PURE__*/jsx_runtime_.jsx("g", {
        transform: "translate(27.023 5.156)",
        children: /*#__PURE__*/jsx_runtime_.jsx("g", {
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M65.7,111.043l-.714-9A1.125,1.125,0,0,0,63.871,101H62.459V103.1a.469.469,0,1,1-.937,0V101H57.211V103.1a.469.469,0,1,1-.937,0V101H54.862a1.125,1.125,0,0,0-1.117,1.033l-.715,9.006a2.605,2.605,0,0,0,2.6,2.8H63.1a2.605,2.605,0,0,0,2.6-2.806Zm-4.224-4.585-2.424,2.424a.468.468,0,0,1-.663,0l-1.136-1.136a.469.469,0,0,1,.663-.663l.8.8,2.092-2.092a.469.469,0,1,1,.663.663Z",
            transform: "translate(-53.023 -101.005)",
            fill: "currentColor"
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("g", {
        transform: "translate(30.274 2)",
        children: /*#__PURE__*/jsx_runtime_.jsx("g", {
          children: /*#__PURE__*/jsx_runtime_.jsx("path", {
            d: "M160.132,0a3.1,3.1,0,0,0-3.093,3.093v.063h.937V3.093a2.155,2.155,0,1,1,4.311,0v.063h.937V3.093A3.1,3.1,0,0,0,160.132,0Z",
            transform: "translate(-157.039)",
            fill: "currentColor"
          })
        })
      })]
    })
  });
};

/* harmony default export */ const cart_check_bag = (CartCheckBag);
// EXTERNAL MODULE: ./src/components/icons/empty-cart.tsx
var empty_cart = __webpack_require__(482);
// EXTERNAL MODULE: ./src/components/icons/close-icon.tsx
var close_icon = __webpack_require__(7831);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(6126);
// EXTERNAL MODULE: ./src/settings/site.ts
var site = __webpack_require__(5658);
// EXTERNAL MODULE: ./src/components/ui/counter.tsx
var counter = __webpack_require__(8328);
// EXTERNAL MODULE: ./src/lib/motion/fade-in-out.ts
var fade_in_out = __webpack_require__(4111);
// EXTERNAL MODULE: ./src/lib/use-price.tsx
var use_price = __webpack_require__(1817);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/store/quick-cart/cart.context.tsx + 2 modules
var cart_context = __webpack_require__(4436);
;// CONCATENATED MODULE: ./src/components/cart/cart-item.tsx












const CartItem = ({
  item
}) => {
  var _item$image, _siteSettings$product;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    isInStock,
    clearItemFromCart,
    addItemToCart,
    removeItemFromCart
  } = (0,cart_context/* useCart */.jD)();
  const {
    price
  } = (0,use_price/* default */.ZP)({
    amount: item.price
  });
  const {
    price: itemPrice
  } = (0,use_price/* default */.ZP)({
    amount: item.itemTotal
  });

  function handleIncrement(e) {
    e.stopPropagation();
    addItemToCart(item, 1);
  }

  const handleRemoveClick = e => {
    e.stopPropagation();
    removeItemFromCart(item.id);
  };

  const outOfStock = !isInStock(item.id);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
    layout: true,
    initial: "from",
    animate: "to",
    exit: "from",
    variants: (0,fade_in_out/* fadeInOut */.I)(0.25),
    className: "flex items-center py-4 px-4 sm:px-6 text-sm border-b border-solid border-border-200 border-opacity-75",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex-shrink-0",
      children: /*#__PURE__*/jsx_runtime_.jsx(counter/* default */.Z, {
        value: item.quantity,
        onDecrement: handleRemoveClick,
        onIncrement: handleIncrement,
        variant: "pillVertical",
        disabled: outOfStock
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-10 sm:w-16 h-10 sm:h-16 flex items-center justify-center overflow-hidden bg-gray-100 mx-4 flex-shrink-0 relative",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_image/* Image */.E, {
        src: (_item$image = item === null || item === void 0 ? void 0 : item.image) !== null && _item$image !== void 0 ? _item$image : site/* siteSettings */.U === null || site/* siteSettings */.U === void 0 ? void 0 : (_siteSettings$product = site/* siteSettings.product */.U.product) === null || _siteSettings$product === void 0 ? void 0 : _siteSettings$product.placeholderImage,
        alt: item.name,
        layout: "fill",
        objectFit: "contain"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "font-bold text-heading",
        children: item.name
      }), /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "my-2.5 font-semibold text-accent",
        children: price
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "text-xs text-body",
        children: [item.quantity, " X ", item.unit]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: "ms-auto font-bold text-heading",
      children: itemPrice
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: "w-7 h-7 ms-3 -me-2 flex items-center justify-center flex-shrink-0 rounded-full text-muted transition-all duration-200 focus:outline-none hover:bg-gray-100 focus:bg-gray-100 hover:text-red-600 focus:text-red-600",
      onClick: () => clearItemFromCart(item.id),
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "sr-only",
        children: t('text-close')
      }), /*#__PURE__*/jsx_runtime_.jsx(close_icon/* CloseIcon */.T, {
        className: "w-3 h-3"
      })]
    })]
  });
};

/* harmony default export */ const cart_item = (CartItem);
// EXTERNAL MODULE: ./src/lib/routes.ts
var routes = __webpack_require__(1103);
// EXTERNAL MODULE: ./src/lib/format-string.tsx
var format_string = __webpack_require__(858);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/store/drawer-atom.ts
var drawer_atom = __webpack_require__(5936);
;// CONCATENATED MODULE: ./src/components/cart/cart-sidebar-view.tsx

















const CartSidebarView = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    items,
    totalUniqueItems,
    total
  } = (0,cart_context/* useCart */.jD)();
  const [_, closeSidebar] = (0,external_jotai_.useAtom)(drawer_atom/* drawerAtom */.P);
  const router = (0,router_.useRouter)();

  function handleCheckout() {
    router.push(routes/* ROUTES.CHECKOUT */.Z.CHECKOUT);
    closeSidebar({
      display: false,
      view: ''
    });
  }

  const {
    price: totalPrice
  } = (0,use_price/* default */.ZP)({
    amount: total
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "flex flex-col h-full relative",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: "fixed max-w-md w-full top-0 z-10 bg-light py-4 px-6 flex items-center justify-between border-b border-border-200 border-opacity-75",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex text-accent font-semibold",
        children: [/*#__PURE__*/jsx_runtime_.jsx(cart_check_bag, {
          className: "flex-shrink-0",
          width: 24,
          height: 22
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "flex ms-2",
          children: (0,format_string/* formatString */.U)(totalUniqueItems, t('text-item'))
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        onClick: () => closeSidebar({
          display: false,
          view: ''
        }),
        className: "w-7 h-7 ms-3 -me-2 flex items-center justify-center rounded-full text-muted bg-gray-100 transition-all duration-200 focus:outline-none hover:bg-accent focus:bg-accent hover:text-light focus:text-light",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-close')
        }), /*#__PURE__*/jsx_runtime_.jsx(close_icon/* CloseIcon */.T, {
          className: "w-3 h-3"
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimateSharedLayout, {
      children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
        layout: true,
        className: "flex-grow pt-16",
        children: items.length > 0 ? items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/jsx_runtime_.jsx(cart_item, {
          item: item
        }, item.id)) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.div, {
          layout: true,
          initial: "from",
          animate: "to",
          exit: "from",
          variants: (0,fade_in_out/* fadeInOut */.I)(0.25),
          className: "h-full flex flex-col items-center justify-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(empty_cart/* default */.Z, {
            width: 140,
            height: 176
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "mt-6 text-base font-semibold",
            children: t('text-no-products')
          })]
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("footer", {
      className: "sticky start-0 bottom-0 w-full py-5 px-6 z-10 bg-light",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "flex justify-between w-full h-12 md:h-14 p-1 text-sm font-bold bg-accent rounded-full shadow-700 transition-colors focus:outline-none hover:bg-accent-hover focus:bg-accent-hover",
        onClick: handleCheckout,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "flex flex-1 items-center h-full px-5 text-light",
          children: t('text-checkout')
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "flex items-center flex-shrink-0 h-full bg-light text-accent rounded-full px-5",
          children: totalPrice
        })]
      })
    })]
  });
};

/* harmony default export */ const cart_sidebar_view = (CartSidebarView);

/***/ }),

/***/ 858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ formatString)
/* harmony export */ });
function formatString(count, string) {
  if (!count) return `${count} ${string}`;
  return count > 1 ? `${count} ${string}s` : `${count} ${string}`;
}

/***/ }),

/***/ 1103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = {
  HOME: '/grocery',
  CHECKOUT: '/checkout',
  PROFILE: '/profile',
  CHANGE_PASSWORD: '/change-password',
  ORDERS: '/orders',
  REFUNDS: '/refunds',
  HELP: '/help',
  LOGOUT: '/logout',
  OFFERS: '/offers',
  ORDER_RECEIVED: '/order-received',
  PRODUCT: '/products',
  ORDER: '/order',
  PRIVACY: '/privacy',
  TERMS: '/terms',
  CONTACT: '/contact',
  SHOPS: '/shops'
};

/***/ })

};
;