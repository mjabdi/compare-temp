"use strict";
exports.id = 6578;
exports.ids = [6578];
exports.modules = {

/***/ 8244:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ SearchIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SearchIcon = props => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", _objectSpread(_objectSpread({
  viewBox: "0 0 17.048 18"
}, props), {}, {
  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
    d: "M380.321,383.992l3.225,3.218c.167.167.341.329.5.506a.894.894,0,1,1-1.286,1.238c-1.087-1.067-2.179-2.131-3.227-3.236a.924.924,0,0,0-1.325-.222,7.509,7.509,0,1,1-3.3-14.207,7.532,7.532,0,0,1,6,11.936C380.736,383.462,380.552,383.685,380.321,383.992Zm-5.537.521a5.707,5.707,0,1,0-5.675-5.72A5.675,5.675,0,0,0,374.784,384.513Z",
    transform: "translate(-367.297 -371.285)",
    fill: "currentColor"
  })
}));

/***/ }),

/***/ 6578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "G": () => (/* binding */ getLayout)
});

// UNUSED EXPORTS: default

// EXTERNAL MODULE: ./src/framework/rest/utils/use-layout.tsx
var use_layout = __webpack_require__(4778);
// EXTERNAL MODULE: ./src/components/ui/logo.tsx
var logo = __webpack_require__(4386);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/framework/rest/groups/dropdown-menu.tsx + 1 modules
var dropdown_menu = __webpack_require__(4579);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(1420);
// EXTERNAL MODULE: ./src/lib/routes.ts
var routes = __webpack_require__(1103);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/layouts/menu/static-menu.tsx






const headerLinks = [// { href: ROUTES.SHOPS, icon: null, label: 'nav-menu-shops' },
// { href: ROUTES.OFFERS, icon: null, label: 'nav-menu-offer' },
{
  href: routes/* ROUTES.HELP */.Z.HELP,
  label: 'nav-menu-faq',
  icon: null
}, {
  href: routes/* ROUTES.CONTACT */.Z.CONTACT,
  label: 'nav-menu-contact',
  icon: null
}];

const StaticMenu = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: headerLinks.map(({
      href,
      label,
      icon
    }) => /*#__PURE__*/jsx_runtime_.jsx("li", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_link/* default */.Z, {
        href: href,
        className: "font-normal text-heading flex items-center transition duration-200 no-underline hover:text-accent focus:text-accent",
        children: [icon && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "me-2",
          children: icon
        }), t(label)]
      })
    }, `${href}${label}`))
  });
};

/* harmony default export */ const static_menu = (StaticMenu);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
// EXTERNAL MODULE: ./src/store/display-header-search-atom.ts
var display_header_search_atom = __webpack_require__(5312);
;// CONCATENATED MODULE: ./src/store/display-mobile-header-search-atom.ts

const displayMobileHeaderSearchAtom = (0,external_jotai_.atom)(false);
// EXTERNAL MODULE: ../node_modules/next/dynamic.js
var dynamic = __webpack_require__(5218);
// EXTERNAL MODULE: ./src/store/authorization-atom.ts
var authorization_atom = __webpack_require__(8879);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/lib/use-is-homepage.ts

function useIsHomePage() {
  const router = (0,router_.useRouter)();
  return router.pathname === '/[[...pages]]';
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./src/components/layouts/header.tsx
















const Search = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(4464), __webpack_require__.e(7032)]).then(__webpack_require__.bind(__webpack_require__, 7032)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7032)],
    modules: ["../components/layouts/header.tsx -> " + '@components/ui/search/search']
  }
});
const SearchWithSuggestions = (0,dynamic.default)(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8061)],
    modules: ["../components/layouts/header.tsx -> " + '@components/ui/search/search-with-suggestion']
  }
});
const AuthorizedMenu = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(5658), __webpack_require__.e(4773)]).then(__webpack_require__.bind(__webpack_require__, 4773)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4773)],
    modules: ["../components/layouts/header.tsx -> " + './menu/authorized-menu']
  }
});
const JoinButton = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 8974).then(__webpack_require__.bind(__webpack_require__, 8974)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8974)],
    modules: ["../components/layouts/header.tsx -> " + './menu/join-button']
  }
});

const Header = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    layout
  } = (0,use_layout/* default */.Z)();
  const [displayHeaderSearch, setDisplayHeaderSearch] = (0,external_jotai_.useAtom)(display_header_search_atom/* displayHeaderSearchAtom */.y);
  const [displayMobileHeaderSearch] = (0,external_jotai_.useAtom)(displayMobileHeaderSearchAtom);
  const [isAuthorize] = (0,external_jotai_.useAtom)(authorization_atom/* authorizationAtom */.O);
  const isHomePage = useIsHomePage();
  (0,external_react_.useEffect)(() => {
    if (!isHomePage) {
      setDisplayHeaderSearch(false);
    }
  }, [isHomePage, setDisplayHeaderSearch]);
  const isFlattenHeader = !displayHeaderSearch && isHomePage && layout !== 'modern';
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: external_classnames_default()('site-header-with-search h-14 md:h-16 lg:h-22', {
      'lg:!h-auto': isFlattenHeader
    }),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()('flex justify-between items-center w-full h-14 md:h-16 lg:h-22 px-4 lg:px-8 py-5 z-50 fixed bg-light border-b border-border-200 shadow-sm transition-transform duration-300', {
        'lg:absolute lg:bg-transparent lg:shadow-none lg:border-0': isFlattenHeader
      }),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center w-full lg:w-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx(logo/* default */.Z, {
          className: "mx-auto lg:mx-0"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ms-10 me-auto hidden xl:block",
          children: /*#__PURE__*/jsx_runtime_.jsx(dropdown_menu/* default */.Z, {})
        })]
      }), isHomePage ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [(displayHeaderSearch || layout === 'modern') && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "hidden lg:block w-full xl:w-11/12 2xl:w-10/12 mx-auto px-10 overflow-hidden",
          children: /*#__PURE__*/jsx_runtime_.jsx(Search, {
            label: t('text-search-label'),
            variant: "minimal"
          })
        }), displayMobileHeaderSearch && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "block lg:hidden w-full absolute top-0 start-0 h-full bg-light pt-1.5 md:pt-2 px-5",
          children: /*#__PURE__*/jsx_runtime_.jsx(Search, {
            label: t('text-search-label'),
            variant: "minimal"
          })
        })]
      }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "hidden lg:flex items-center flex-shrink-0 space-s-10",
        children: [/*#__PURE__*/jsx_runtime_.jsx(static_menu, {}), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: isAuthorize ? /*#__PURE__*/jsx_runtime_.jsx(AuthorizedMenu, {}) : /*#__PURE__*/jsx_runtime_.jsx(JoinButton, {})
        })]
      })]
    })
  });
};

/* harmony default export */ const header = (Header);
// EXTERNAL MODULE: ./src/components/ui/search/search-with-suggestion.tsx + 1 modules
var search_with_suggestion = __webpack_require__(8061);
;// CONCATENATED MODULE: ./src/components/layouts/header-minimal.tsx
















const CartCounterIconButton = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 1276).then(__webpack_require__.bind(__webpack_require__, 1276)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1276)],
    modules: ["../components/layouts/header-minimal.tsx -> " + '@components/cart/cart-counter-icon-button']
  }
});
const header_minimal_AuthorizedMenu = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(5658), __webpack_require__.e(4773)]).then(__webpack_require__.bind(__webpack_require__, 4773)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4773)],
    modules: ["../components/layouts/header-minimal.tsx -> " + './menu/authorized-menu']
  }
});
const header_minimal_JoinButton = (0,dynamic.default)(() => __webpack_require__.e(/* import() */ 8974).then(__webpack_require__.bind(__webpack_require__, 8974)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8974)],
    modules: ["../components/layouts/header-minimal.tsx -> " + './menu/join-button']
  }
});

const HeaderMinimal = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const [_, setDisplayHeaderSearch] = (0,external_jotai_.useAtom)(display_header_search_atom/* displayHeaderSearchAtom */.y);
  const [displayMobileHeaderSearch] = (0,external_jotai_.useAtom)(displayMobileHeaderSearchAtom);
  const [isAuthorize] = (0,external_jotai_.useAtom)(authorization_atom/* authorizationAtom */.O);
  const isHomePage = useIsHomePage();
  (0,external_react_.useEffect)(() => {
    if (!isHomePage) {
      setDisplayHeaderSearch(false);
    }
  }, [isHomePage, setDisplayHeaderSearch]);
  return /*#__PURE__*/jsx_runtime_.jsx("header", {
    className: external_classnames_default()('site-header-with-search h-14 md:h-16 lg:h-22'),
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: external_classnames_default()('flex justify-between items-center w-full h-14 md:h-16 lg:h-22 px-4 lg:ps-12 lg:pe-8 py-5 z-50 fixed bg-light border-b border-border-200 shadow-sm transition-transform duration-300'),
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center w-full lg:w-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx(logo/* default */.Z, {
          className: "mx-auto lg:mx-0"
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: "ms-10 me-auto hidden lg:flex items-center flex-shrink-0 space-s-10",
          children: /*#__PURE__*/jsx_runtime_.jsx(static_menu, {})
        })]
      }), isHomePage ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: displayMobileHeaderSearch && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "block lg:hidden w-full absolute top-0 start-0 h-full bg-light pt-1.5 md:pt-2 px-5",
          children: /*#__PURE__*/jsx_runtime_.jsx(search_with_suggestion.default, {
            label: t('text-search-label'),
            variant: "minimal"
          })
        })
      }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "ms-10 hidden lg:flex items-center flex-shrink-0 space-s-9",
        children: [/*#__PURE__*/jsx_runtime_.jsx(dropdown_menu/* default */.Z, {
          variant: "minimal"
        }), /*#__PURE__*/jsx_runtime_.jsx(CartCounterIconButton, {}), isAuthorize ? /*#__PURE__*/jsx_runtime_.jsx(header_minimal_AuthorizedMenu, {
          minimal: true
        }) : /*#__PURE__*/jsx_runtime_.jsx(header_minimal_JoinButton, {})]
      })]
    })
  });
};

/* harmony default export */ const header_minimal = (HeaderMinimal);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: ./src/components/icons/navbar-icon.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const NavbarIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
  width: "25.567",
  height: "18",
  viewBox: "0 0 25.567 18"
}, props), {}, {
  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("g", {
    transform: "translate(-776 -462)",
    children: [/*#__PURE__*/jsx_runtime_.jsx("rect", {
      width: "12.749",
      height: "2.499",
      rx: "1.25",
      transform: "translate(776 462)",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      width: "25.567",
      height: "2.499",
      rx: "1.25",
      transform: "translate(776 469.75)",
      fill: "currentColor"
    }), /*#__PURE__*/jsx_runtime_.jsx("rect", {
      width: "17.972",
      height: "2.499",
      rx: "1.25",
      transform: "translate(776 477.501)",
      fill: "currentColor"
    })]
  })
}));
// EXTERNAL MODULE: ./src/components/icons/search-icon.tsx
var search_icon = __webpack_require__(8244);
;// CONCATENATED MODULE: ./src/components/icons/home-icon.tsx
function home_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function home_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { home_icon_ownKeys(Object(source), true).forEach(function (key) { home_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { home_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function home_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const HomeIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", home_icon_objectSpread(home_icon_objectSpread({
  width: "17.996",
  height: "20.442",
  viewBox: "0 0 17.996 20.442"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("g", {
    transform: "translate(-30.619 0.236)",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z",
      transform: "translate(0 0)",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: "0.4"
    })
  })
}));
;// CONCATENATED MODULE: ./src/components/icons/shopping-bag-icon.tsx
function shopping_bag_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function shopping_bag_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { shopping_bag_icon_ownKeys(Object(source), true).forEach(function (key) { shopping_bag_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { shopping_bag_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function shopping_bag_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ShoppingBagIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", shopping_bag_icon_objectSpread(shopping_bag_icon_objectSpread({
  width: "18",
  height: "18",
  viewBox: "0 0 18 18"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("g", {
    transform: "translate(-127 -122)",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M4.7,3.8H17.3a.9.9,0,0,1,.9.9V17.3a.9.9,0,0,1-.9.9H4.7a.9.9,0,0,1-.9-.9V4.7A.9.9,0,0,1,4.7,3.8ZM2,4.7A2.7,2.7,0,0,1,4.7,2H17.3A2.7,2.7,0,0,1,20,4.7V17.3A2.7,2.7,0,0,1,17.3,20H4.7A2.7,2.7,0,0,1,2,17.3ZM11,11C8.515,11,6.5,8.583,6.5,5.6H8.3c0,2.309,1.5,3.6,2.7,3.6s2.7-1.291,2.7-3.6h1.8C15.5,8.583,13.485,11,11,11Z",
      transform: "translate(125 120)",
      fill: "currentColor",
      fillRule: "evenodd"
    })
  })
}));
;// CONCATENATED MODULE: ./src/components/icons/user-icon.tsx
function user_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function user_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { user_icon_ownKeys(Object(source), true).forEach(function (key) { user_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { user_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function user_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const UserIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", user_icon_objectSpread(user_icon_objectSpread({
  width: "16.577",
  height: "18.6",
  viewBox: "0 0 16.577 18.6"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("g", {
    transform: "translate(-95.7 -121.203)",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z",
      transform: "translate(7819 -2793.5)",
      fill: "currentColor",
      stroke: "currentColor",
      strokeWidth: "0.6"
    })
  })
}));
// EXTERNAL MODULE: ./src/store/quick-cart/cart.context.tsx + 2 modules
var cart_context = __webpack_require__(4436);
// EXTERNAL MODULE: ./src/components/ui/modal/modal.context.tsx
var modal_context = __webpack_require__(4652);
// EXTERNAL MODULE: ./src/store/drawer-atom.ts
var drawer_atom = __webpack_require__(5936);
// EXTERNAL MODULE: ./src/lib/locals.tsx
var locals = __webpack_require__(8972);
;// CONCATENATED MODULE: ./src/components/layouts/mobile-navigation.tsx



















const MobileNavigation = () => {
  const router = (0,router_.useRouter)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    openModal
  } = (0,modal_context/* useModalAction */.SO)();
  const [isAuthorize] = (0,external_jotai_.useAtom)(authorization_atom/* authorizationAtom */.O);
  const [_, setDrawerView] = (0,external_jotai_.useAtom)(drawer_atom/* drawerAtom */.P);
  const isHomePage = useIsHomePage();
  const {
    isRTL
  } = (0,locals/* useIsRTL */.S)();
  const [, setDisplayMobileHeaderSearch] = (0,external_jotai_.useAtom)(displayMobileHeaderSearchAtom);
  const {
    totalUniqueItems
  } = (0,cart_context/* useCart */.jD)();

  function handleSidebar(view) {
    setDrawerView({
      display: true,
      view: view
    });
  }

  function handleJoin() {
    return openModal('LOGIN_VIEW');
  }

  function toggleMobileSearch() {
    setDisplayMobileHeaderSearch(prev => !prev);
  }

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "visible lg:hidden h-12 md:h-14",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("nav", {
      className: "h-12 md:h-14 w-full py-1.5 px-2 flex justify-between fixed start-0 bottom-0 z-10 bg-light shadow-400",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
        whileTap: {
          scale: 0.88
        },
        onClick: () => handleSidebar('MAIN_MENU_VIEW'),
        className: "flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-burger-menu')
        }), /*#__PURE__*/jsx_runtime_.jsx(NavbarIcon, {
          className: `${isRTL && 'transform rotate-180'}`
        })]
      }), isHomePage && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
        whileTap: {
          scale: 0.88
        },
        onClick: toggleMobileSearch,
        className: "flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-search')
        }), /*#__PURE__*/jsx_runtime_.jsx(search_icon/* SearchIcon */.W, {
          width: "17.05",
          height: "18"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
        whileTap: {
          scale: 0.88
        },
        onClick: () => router.push('/'),
        className: "flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-home')
        }), /*#__PURE__*/jsx_runtime_.jsx(HomeIcon, {})]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
        whileTap: {
          scale: 0.88
        },
        onClick: () => handleSidebar('cart'),
        className: "flex p-2 product-cart h-full relative items-center justify-center focus:outline-none focus:text-accent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-cart')
        }), /*#__PURE__*/jsx_runtime_.jsx(ShoppingBagIcon, {}), totalUniqueItems > 0 && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "bg-accent py-1 px-1.5 text-10px leading-none font-semibold text-light rounded-full absolute top-0 end-0 mt-0.5 -me-0.5",
          children: totalUniqueItems
        })]
      }), isAuthorize ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
        whileTap: {
          scale: 0.88
        },
        onClick: () => handleSidebar('AUTH_MENU_VIEW'),
        className: "flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-user')
        }), /*#__PURE__*/jsx_runtime_.jsx(UserIcon, {})]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.button, {
        whileTap: {
          scale: 0.88
        },
        onClick: handleJoin,
        className: "flex p-2 h-full items-center justify-center focus:outline-none focus:text-accent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "sr-only",
          children: t('text-user')
        }), /*#__PURE__*/jsx_runtime_.jsx(UserIcon, {})]
      })]
    })
  });
};

/* harmony default export */ const mobile_navigation = (MobileNavigation);
;// CONCATENATED MODULE: ./src/components/layouts/layout.tsx







const SiteLayout = ({
  children
}) => {
  const {
    layout
  } = (0,use_layout/* default */.Z)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex flex-col min-h-screen transition-colors duration-150 bg-gray-100",
    children: [layout === 'minimal' ? /*#__PURE__*/jsx_runtime_.jsx(header_minimal, {}) : /*#__PURE__*/jsx_runtime_.jsx(header, {}), children, /*#__PURE__*/jsx_runtime_.jsx(mobile_navigation, {})]
  });
};

const getLayout = page => /*#__PURE__*/jsx_runtime_.jsx(SiteLayout, {
  children: page
});
/* harmony default export */ const layout = ((/* unused pure expression or super */ null && (SiteLayout)));

/***/ }),

/***/ 4282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_icons_search_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8244);
/* harmony import */ var _components_icons_close_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7831);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
const _excluded = ["className", "label", "onSubmit", "onClearSearch", "variant", "value"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const classes = {
  normal: 'bg-light ps-6 pe-14 rounded-te-none rounded-be-none  border border-e-0 border-transparent focus:border-accent',
  minimal: 'bg-gray-100 ps-10 pe-12 md:ps-14 border border-border-200 focus:border-accent focus:bg-light',
  'with-shadow': 'bg-light ps-10 pe-12 md:ps-14 focus:bg-light '
};

const SearchBox = _ref => {
  let {
    className,
    label,
    onSubmit,
    onClearSearch,
    variant = 'normal',
    value
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("form", {
    onSubmit: onSubmit,
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('w-full', className),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('rounded md:rounded-lg flex relative', {
        'h-14 shadow-900': variant === 'normal',
        'h-11 md:h-12': variant === 'minimal',
        'h-16 shadow-downfall': variant === 'with-shadow'
      }),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("label", {
        htmlFor: label,
        className: "sr-only",
        children: label
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", _objectSpread({
        id: label,
        type: "text",
        value: value,
        autoComplete: "off",
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('w-full h-full flex item-center appearance-none transition duration-300 ease-in-out text-heading text-sm placeholder-gray-500 overflow-hidden rounded-lg focus:outline-none focus:ring-0', classes[variant])
      }, rest)), value && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        type: "button",
        onClick: onClearSearch,
        className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('cursor-pointer h-full w-10 md:w-14 flex items-center justify-center absolute text-body transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover', {
          'end-36': variant === 'normal',
          'end-0': variant !== 'normal'
        }),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          className: "sr-only",
          children: t('common:text-close')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_icons_close_icon__WEBPACK_IMPORTED_MODULE_2__/* .CloseIcon */ .T, {
          className: "w-3.5 h-3.5 md:w-3 md:h-3"
        })]
      }), variant === 'normal' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        className: "h-full px-8 flex items-center rounded-lg rounded-ts-none rounded-bs-none bg-accent text-light font-semibold transition-colors duration-200 focus:outline-none hover:bg-accent-hover focus:bg-accent-hover",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_icons_search_icon__WEBPACK_IMPORTED_MODULE_1__/* .SearchIcon */ .W, {
          className: "w-4 h-4 me-2.5"
        }), t('common:text-search')]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        className: "h-full w-10 md:w-14 flex items-center justify-center absolute start-0 text-body transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          className: "sr-only",
          children: t('common:text-search')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_icons_search_icon__WEBPACK_IMPORTED_MODULE_1__/* .SearchIcon */ .W, {
          className: "w-4 h-4"
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBox);

/***/ }),

/***/ 8061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search_with_suggestion)
});

// EXTERNAL MODULE: ./src/components/ui/search/search-box.tsx
var search_box = __webpack_require__(4282);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ../node_modules/next/dynamic.js
var dynamic = __webpack_require__(5218);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./src/components/ui/error-message.tsx
var error_message = __webpack_require__(3315);
// EXTERNAL MODULE: ./src/framework/rest/products/products.query.ts
var products_query = __webpack_require__(2317);
// EXTERNAL MODULE: ./src/framework/rest/utils/use-homepage.ts
var use_homepage = __webpack_require__(8025);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/framework/rest/suggestions/suggestion.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const AutoSuggestion = (0,dynamic.default)(() => Promise.all(/* import() */[__webpack_require__.e(1859), __webpack_require__.e(9204), __webpack_require__.e(4928)]).then(__webpack_require__.bind(__webpack_require__, 4928)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4928)],
    modules: ["../framework/rest/suggestions/suggestion.tsx -> " + '@components/ui/auto-suggestion']
  }
});

const AutoSuggestionBox = ({
  shopId,
  searchQuery,
  className,
  visible
}) => {
  var _ref, _query$pages, _data$pages, _data$pages$, _data$pages2, _data$pages2$, _data$pages2$$data, _data$pages3;

  const {
    query
  } = (0,router_.useRouter)();
  const {
    homePage
  } = (0,use_homepage/* default */.Z)();
  const group = (_ref = (_query$pages = query.pages) === null || _query$pages === void 0 ? void 0 : _query$pages[0]) !== null && _ref !== void 0 ? _ref : homePage === null || homePage === void 0 ? void 0 : homePage.slug;
  const {
    isFetching: loading,
    isError,
    data,
    error
  } = (0,products_query/* useProductsQuery */.kN)(_objectSpread(_objectSpread({}, Boolean(shopId) ? {
    shop_id: Number(shopId)
  } : {
    type: group
  }), {}, {
    name: searchQuery,
    categories: query === null || query === void 0 ? void 0 : query.category
  }), {
    enabled: Boolean(group)
  });
  if (isError && error) return /*#__PURE__*/jsx_runtime_.jsx(error_message.default, {
    message: error.message
  });
  return /*#__PURE__*/jsx_runtime_.jsx(AutoSuggestion, {
    suggestions: data === null || data === void 0 ? void 0 : (_data$pages = data.pages) === null || _data$pages === void 0 ? void 0 : (_data$pages$ = _data$pages[0]) === null || _data$pages$ === void 0 ? void 0 : _data$pages$.data,
    notFound: !loading && !(data !== null && data !== void 0 && (_data$pages2 = data.pages) !== null && _data$pages2 !== void 0 && (_data$pages2$ = _data$pages2[0]) !== null && _data$pages2$ !== void 0 && (_data$pages2$$data = _data$pages2$.data) !== null && _data$pages2$$data !== void 0 && _data$pages2$$data.length),
    visible: visible,
    className: className,
    showLoaders: loading && !(data !== null && data !== void 0 && (_data$pages3 = data.pages) !== null && _data$pages3 !== void 0 && _data$pages3.length)
  });
};

/* harmony default export */ const suggestion = (AutoSuggestionBox);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/ui/search/search-with-suggestion.tsx
const _excluded = ["label", "className", "variant"];

function search_with_suggestion_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function search_with_suggestion_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { search_with_suggestion_ownKeys(Object(source), true).forEach(function (key) { search_with_suggestion_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { search_with_suggestion_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function search_with_suggestion_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const SearchWithSuggestion = _ref => {
  let {
    label,
    className,
    variant
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  const {
    0: searchTerm,
    1: updateSearchTerm
  } = (0,external_react_.useState)('');

  const handleOnChange = e => {
    const {
      value: inputValue
    } = e.target;
    updateSearchTerm(inputValue);
  };

  const onSearch = e => {
    e.preventDefault();
    if (!searchTerm) return;
  };

  function clearSearch() {
    updateSearchTerm('');
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()('w-full relative', className),
    children: [/*#__PURE__*/jsx_runtime_.jsx(search_box/* default */.Z, search_with_suggestion_objectSpread({
      label: label,
      onSubmit: onSearch,
      onClearSearch: clearSearch,
      onChange: handleOnChange,
      value: searchTerm,
      name: "search" // placeholder={t('common:text-search-placeholder-minimal')}
      ,
      placeholder: "What are you looking for today?",
      variant: variant
    }, props)), /*#__PURE__*/jsx_runtime_.jsx(suggestion, {
      searchQuery: searchTerm,
      visible: Boolean(searchTerm.length > 2)
    })]
  });
};

/* harmony default export */ const search_with_suggestion = (SearchWithSuggestion);

/***/ }),

/***/ 4579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ dropdown_menu)
});

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/components/layouts/menu/groups-menu.tsx

const GroupsMenu = ({
  className,
  groups,
  defaultGroup,
  variant = 'colored'
}) => {
  var _groups$find;

  const router = (0,router_.useRouter)();
  const selectedMenu = (_groups$find = groups === null || groups === void 0 ? void 0 : groups.find(type => router.asPath.includes(type.slug))) !== null && _groups$find !== void 0 ? _groups$find : defaultGroup;
  return null // <Menu as="div" className="relative inline-block text-left">
  //   <Menu.Button
  //     className={cn(
  //       'flex items-center flex-shrink-0 text-sm md:text-base font-semibold h-11 focus:outline-none text-heading xl:px-4',
  //       {
  //         'bg-gray-50 border border-border-200 rounded-lg px-3':
  //           variant === 'minimal',
  //         'bg-light xl:border border-border-200 xl:text-accent xl:min-w-150 rounded':
  //           variant === 'colored',
  //       },
  //       className
  //     )}
  //   >
  //     {({ open }) => (
  //       <>
  //         {variant === 'colored' && selectedMenu?.icon && (
  //           <span className="flex w-5 h-5 me-2 items-center justify-center">
  //             {getIcon({
  //               iconList: groupIcons,
  //               iconName: selectedMenu?.icon,
  //               className: 'max-h-full max-w-full',
  //             })}
  //           </span>
  //         )}
  //         <span className="whitespace-nowrap">{selectedMenu?.name}</span>
  //         <span className="flex ps-2.5 pt-1 ms-auto">
  //           {variant === 'colored' && (
  //             <CaretDown
  //               className={open ? 'transform rotate-180' : undefined}
  //             />
  //           )}
  //           {variant === 'minimal' && (
  //             <ArrowDownIcon
  //               className={cn('h-3 w-3', {
  //                 'transform rotate-180': open,
  //               })}
  //             />
  //           )}
  //         </span>
  //       </>
  //     )}
  //   </Menu.Button>
  //   <Transition
  //     as={Fragment}
  //     enter="transition ease-out duration-100"
  //     enterFrom="transform opacity-0 scale-95"
  //     enterTo="transform opacity-100 scale-100"
  //     leave="transition ease-in duration-75"
  //     leaveFrom="transform opacity-100 scale-100"
  //     leaveTo="transform opacity-0 scale-95"
  //   >
  //     <Menu.Items
  //       as="ul"
  //       className={cn(
  //         'absolute  mt-2  py-2 w-48 h-56 lg:h-auto min-h-40 max-h-56 sm:max-h-72 bg-light rounded shadow-700 focus:outline-none',
  //         {
  //           'border border-border-200 end-0 origin-top-end':
  //             variant === 'minimal',
  //           'end-0 xl:end-auto xl:start-0 origin-top-end xl:origin-top-start':
  //             variant !== 'minimal',
  //         }
  //       )}
  //     >
  //       <Scrollbar
  //         className="w-full h-full"
  //         options={{
  //           scrollbars: {
  //             autoHide: 'never',
  //           },
  //         }}
  //       >
  //         {groups?.map(({ id, name, slug, icon }) => (
  //           <Menu.Item key={id}>
  //             {({ active }) => (
  //               <Link
  //                 href={`/${slug}`}
  //                 className={cn(
  //                   'flex space-s-4 items-center w-full px-5 py-2.5 text-sm font-semibold capitalize  transition duration-200 hover:text-accent focus:outline-none',
  //                   active ? 'text-accent' : 'text-body-dark'
  //                 )}
  //               >
  //                 {icon && variant === 'colored' && (
  //                   <span className="flex w-5 h-5 items-center justify-center">
  //                     {getIcon({
  //                       iconList: groupIcons,
  //                       iconName: icon,
  //                       className: 'max-h-full max-w-full',
  //                     })}
  //                   </span>
  //                 )}
  //                 <span>{name}</span>
  //               </Link>
  //             )}
  //           </Menu.Item>
  //         ))}
  //       </Scrollbar>
  //     </Menu.Items>
  //   </Transition>
  // </Menu>
  ;
};
// EXTERNAL MODULE: ./src/framework/rest/utils/use-homepage.ts
var use_homepage = __webpack_require__(8025);
// EXTERNAL MODULE: ./src/framework/rest/groups/groups.query.ts
var groups_query = __webpack_require__(6296);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/framework/rest/groups/dropdown-menu.tsx





const GroupsDropdownMenu = ({
  variant
}) => {
  const {
    isLoading: loading,
    data,
    error
  } = (0,groups_query/* useGroupsQuery */.RW)();
  const {
    homePage
  } = (0,use_homepage/* default */.Z)();
  return /*#__PURE__*/jsx_runtime_.jsx(GroupsMenu, {
    groups: data === null || data === void 0 ? void 0 : data.types,
    defaultGroup: homePage,
    variant: variant
  });
};

/* harmony default export */ const dropdown_menu = (GroupsDropdownMenu);

/***/ }),

/***/ 4778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _framework_groups_groups_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6296);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);



const useLayout = () => {
  var _page$settings;

  const {
    data
  } = (0,_framework_groups_groups_query__WEBPACK_IMPORTED_MODULE_0__/* .useGroupsQuery */ .RW)();
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const regex = /^\/$|^\/\?(.*)/;

  if (regex.test(router === null || router === void 0 ? void 0 : router.asPath)) {
    var _data$types$find, _data$types, _homePage$settings;

    const homePage = (_data$types$find = data === null || data === void 0 ? void 0 : data.types.find(type => {
      var _type$settings;

      return type === null || type === void 0 ? void 0 : (_type$settings = type.settings) === null || _type$settings === void 0 ? void 0 : _type$settings.isHome;
    })) !== null && _data$types$find !== void 0 ? _data$types$find : data === null || data === void 0 ? void 0 : (_data$types = data.types) === null || _data$types === void 0 ? void 0 : _data$types[0];
    return {
      layout: homePage === null || homePage === void 0 ? void 0 : (_homePage$settings = homePage.settings) === null || _homePage$settings === void 0 ? void 0 : _homePage$settings.layoutType,
      page: homePage
    };
  }

  const page = data === null || data === void 0 ? void 0 : data.types.find(type => router.asPath.includes(type.slug));
  return {
    layout: page === null || page === void 0 ? void 0 : (_page$settings = page.settings) === null || _page$settings === void 0 ? void 0 : _page$settings.layoutType,
    page
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useLayout);

/***/ }),

/***/ 8972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ useIsRTL)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const localeRTLList = ['ar', 'he'];
function useIsRTL() {
  const {
    locale
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();

  if (locale && localeRTLList.includes(locale)) {
    return {
      isRTL: true,
      alignLeft: 'right',
      alignRight: 'left'
    };
  }

  return {
    isRTL: false,
    alignLeft: 'left',
    alignRight: 'right'
  };
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

/***/ }),

/***/ 5312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ displayHeaderSearchAtom)
/* harmony export */ });
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_0__);

const displayHeaderSearchAtom = (0,jotai__WEBPACK_IMPORTED_MODULE_0__.atom)(false);

/***/ })

};
;