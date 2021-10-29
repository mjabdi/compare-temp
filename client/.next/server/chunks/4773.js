"use strict";
exports.id = 4773;
exports.ids = [4773];
exports.modules = {

/***/ 4773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ authorized_menu)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(4025);
// EXTERNAL MODULE: ./src/settings/site.ts
var site = __webpack_require__(5658);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(6126);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/ui/avatar.tsx
const _excluded = ["src", "className", "title"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Avatar = _ref => {
  let {
    src,
    className,
    title
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("div", _objectSpread(_objectSpread({
    className: external_classnames_default()('relative cursor-pointer overflow-hidden rounded-full border border-border-100', className)
  }, rest), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx(ui_image/* Image */.E, {
      alt: title,
      src: src,
      layout: "fill",
      priority: true
    })
  }));
};

/* harmony default export */ const avatar = (Avatar);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/lib/placeholders.tsx + 4 modules
var placeholders = __webpack_require__(1219);
// EXTERNAL MODULE: ./src/framework/rest/auth/use-user.tsx
var use_user = __webpack_require__(3931);
;// CONCATENATED MODULE: ./src/components/icons/user-outlined.tsx
function user_outlined_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function user_outlined_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { user_outlined_ownKeys(Object(source), true).forEach(function (key) { user_outlined_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { user_outlined_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function user_outlined_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const UserOutlinedIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", user_outlined_objectSpread(user_outlined_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 15.6 19.6"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    id: "Path_11",
    "data-name": "Path 11",
    d: "M16,7a4,4,0,1,1-4-4A4,4,0,0,1,16,7Zm-4,7a7,7,0,0,0-7,7H19a7,7,0,0,0-7-7Z",
    transform: "translate(-4.2 -2.2)",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "1.6"
  })
}));
;// CONCATENATED MODULE: ./src/components/layouts/menu/authorized-menu.tsx













const AuthorizedMenu = ({
  minimal
}) => {
  var _me$profile$avatar$th, _me$profile, _me$profile$avatar, _me$wallet$available_, _me$wallet;

  const {
    me
  } = (0,use_user/* default */.ZP)();
  const router = (0,router_.useRouter)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');

  function handleClick(path) {
    router.push(path);
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Menu, {
    as: "div",
    className: "relative inline-block text-left",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Menu.Button, {
      className: "flex items-center focus:outline-none",
      children: [minimal ? /*#__PURE__*/jsx_runtime_.jsx(UserOutlinedIcon, {
        className: "w-5 h-5"
      }) : /*#__PURE__*/jsx_runtime_.jsx(avatar, {
        src: (_me$profile$avatar$th = me === null || me === void 0 ? void 0 : (_me$profile = me.profile) === null || _me$profile === void 0 ? void 0 : (_me$profile$avatar = _me$profile.avatar) === null || _me$profile$avatar === void 0 ? void 0 : _me$profile$avatar.thumbnail) !== null && _me$profile$avatar$th !== void 0 ? _me$profile$avatar$th : placeholders/* avatarPlaceholder */.Pb,
        title: "user name",
        className: "w-10 h-10"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "sr-only",
        children: t('user-avatar')
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(react_.Transition, {
      as: external_react_.Fragment,
      enter: "transition ease-out duration-100",
      enterFrom: "transform opacity-0 scale-95",
      enterTo: "transform opacity-100 scale-100",
      leave: "transition ease-in duration-75",
      leaveFrom: "transform opacity-100 scale-100",
      leaveTo: "transform opacity-0 scale-95",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.Menu.Items, {
        as: "ul",
        className: external_classnames_default()('absolute end-0 w-48 pb-4 mt-1 origin-top-end bg-white rounded shadow-700 focus:outline-none', {
          '!mt-2': minimal
        }),
        children: [/*#__PURE__*/jsx_runtime_.jsx(react_.Menu.Item, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: "flex justify-between items-center w-full py-4 px-6 text-xs text-start font-semibold capitalize text-light focus:outline-none bg-accent-500",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: t('text-points')
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: (_me$wallet$available_ = me === null || me === void 0 ? void 0 : (_me$wallet = me.wallet) === null || _me$wallet === void 0 ? void 0 : _me$wallet.available_points) !== null && _me$wallet$available_ !== void 0 ? _me$wallet$available_ : 0
            })]
          })
        }), site/* siteSettings.authorizedLinks.map */.U.authorizedLinks.map(({
          href,
          label
        }) => /*#__PURE__*/jsx_runtime_.jsx(react_.Menu.Item, {
          children: ({
            active
          }) => /*#__PURE__*/jsx_runtime_.jsx("li", {
            children: /*#__PURE__*/jsx_runtime_.jsx("button", {
              onClick: () => handleClick(href),
              className: external_classnames_default()('block w-full py-2.5 px-6 text-sm text-start font-semibold capitalize text-heading transition duration-200 hover:text-accent focus:outline-none', active ? 'text-accent' : 'text-heading'),
              children: t(label)
            })
          })
        }, `${href}${label}`))]
      })
    })]
  });
};

/* harmony default export */ const authorized_menu = (AuthorizedMenu);

/***/ }),

/***/ 3931:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports fetchMe, useCustomerQuery */
/* harmony import */ var _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3857);
/* harmony import */ var _framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);
/* harmony import */ var _store_authorization_atom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8879);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8250);
/* harmony import */ var jotai__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jotai__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);






class CustomerService extends _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__/* .BaseService */ .b {}

const customerService = new CustomerService(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.CUSTOMER */ .P.CUSTOMER);
const fetchMe = async () => {
  const {
    data
  } = await customerService.findAll();
  return {
    me: data
  };
};
const useCustomerQuery = options => {
  return (0,react_query__WEBPACK_IMPORTED_MODULE_4__.useQuery)(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.CUSTOMER */ .P.CUSTOMER, fetchMe, options);
};

const useUser = () => {
  const [isAuthorized] = (0,jotai__WEBPACK_IMPORTED_MODULE_3__.useAtom)(_store_authorization_atom__WEBPACK_IMPORTED_MODULE_2__/* .authorizationAtom */ .O);
  const {
    data,
    isLoading,
    error
  } = useCustomerQuery({
    enabled: isAuthorized,
    onError: err => {
      console.log(err);
    }
  });
  return {
    me: data === null || data === void 0 ? void 0 : data.me,
    loading: isLoading,
    error
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useUser);

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