"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 4051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const ContactCard = ({
  checked,
  number
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('relative p-4 rounded border cursor-pointer group hover:border-accent', {
      'border-accent shadow-sm bg-light': checked,
      'bg-gray-100 border-transparent': !checked
    }),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      className: "text-sm text-heading font-semibold capitalize",
      children: number
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContactCard);

/***/ }),

/***/ 3749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ AddressType)
/* harmony export */ });
let AddressType;

(function (AddressType) {
  AddressType["Billing"] = "billing";
  AddressType["Shipping"] = "shipping";
})(AddressType || (AddressType = {}));

/***/ }),

/***/ 4808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ profile),
  "getStaticProps": () => (/* reexport */ common/* getStaticProps */.b)
});

// EXTERNAL MODULE: ./src/components/ui/modal/modal.context.tsx
var modal_context = __webpack_require__(4652);
// EXTERNAL MODULE: ./src/components/address/address-card.tsx + 1 modules
var address_card = __webpack_require__(4427);
// EXTERNAL MODULE: ./src/components/address/address-header.tsx
var address_header = __webpack_require__(493);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/framework/rest/utils/constants.ts
var constants = __webpack_require__(3749);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/profile/profile-address.tsx








const ProfileAddressGrid = ({
  addresses,
  label,
  className,
  userId
}) => {
  const {
    openModal
  } = (0,modal_context/* useModalAction */.SO)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common'); //TODO: no address found

  function onAdd() {
    openModal('ADD_OR_UPDATE_ADDRESS', {
      customerId: userId,
      type: constants/* AddressType.Billing */.D.Billing
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx(address_header/* AddressHeader */.V, {
      onAdd: onAdd,
      count: false,
      label: label
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
      children: addresses && addresses !== null && addresses !== void 0 && addresses.length ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: addresses === null || addresses === void 0 ? void 0 : addresses.map(address => /*#__PURE__*/jsx_runtime_.jsx(address_card/* default */.Z, {
          checked: false,
          address: address,
          userId: userId
        }, address.id))
      }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "relative px-5 py-6 text-base text-left bg-gray-100 rounded border border-border-200",
        children: t('text-no-address')
      })
    })]
  });
};
/* harmony default export */ const profile_address = (ProfileAddressGrid);
// EXTERNAL MODULE: ./src/components/ui/cards/card.tsx
var card = __webpack_require__(8177);
// EXTERNAL MODULE: ./src/components/dashboard/sidebar.tsx
var sidebar = __webpack_require__(5434);
// EXTERNAL MODULE: ./src/components/layouts/layout.tsx + 10 modules
var layout = __webpack_require__(6578);
// EXTERNAL MODULE: ./src/framework/rest/customer/customer.query.ts
var customer_query = __webpack_require__(799);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/components/ui/forms/file-input.tsx + 3 modules
var file_input = __webpack_require__(4405);
// EXTERNAL MODULE: ./src/components/ui/forms/input.tsx
var input = __webpack_require__(5549);
// EXTERNAL MODULE: ./src/components/ui/forms/text-area.tsx
var text_area = __webpack_require__(2951);
;// CONCATENATED MODULE: external "lodash/pick"
const pick_namespaceObject = require("lodash/pick");
var pick_default = /*#__PURE__*/__webpack_require__.n(pick_namespaceObject);
// EXTERNAL MODULE: ./src/components/ui/forms/form.tsx
var forms_form = __webpack_require__(6509);
;// CONCATENATED MODULE: ./src/components/profile/profile-form.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













const ProfileForm = ({
  user,
  loading,
  onSubmit
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx(forms_form/* Form */.l, {
    onSubmit: onSubmit,
    options: {
      defaultValues: _objectSpread({}, user && pick_default()(user, ['name', 'profile.bio', // 'profile.contact',
      'profile.avatar']))
    },
    children: ({
      register,
      control
    }) => /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "flex mb-8",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(card/* default */.Z, {
          className: "w-full",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "mb-8",
            children: /*#__PURE__*/jsx_runtime_.jsx(file_input/* default */.Z, {
              control: control,
              name: "profile.avatar"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex flex-row mb-6",
            children: /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
              className: "flex-1",
              label: t('text-name')
            }, register('name')), {}, {
              variant: "outline"
            }))
          }), /*#__PURE__*/jsx_runtime_.jsx(text_area/* default */.Z, _objectSpread(_objectSpread({
            label: t('text-bio') //@ts-ignore

          }, register('profile.bio')), {}, {
            variant: "outline",
            className: "mb-6"
          })), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex",
            children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              className: "ms-auto",
              loading: loading,
              disabled: loading,
              children: t('text-save')
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const profile_form = (ProfileForm);
// EXTERNAL MODULE: ./src/framework/rest/auth/use-user.tsx
var use_user = __webpack_require__(3931);
;// CONCATENATED MODULE: ./src/framework/rest/profile/profile-information.tsx
function profile_information_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function profile_information_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { profile_information_ownKeys(Object(source), true).forEach(function (key) { profile_information_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { profile_information_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function profile_information_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const ProfileInformation = () => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    me
  } = (0,use_user/* default */.ZP)();
  const {
    mutate: updateProfile,
    isLoading: updating
  } = (0,customer_query/* useUpdateCustomerMutation */.o)();

  function onSubmit(values) {
    var _me$profile, _values$profile$avata;

    if (!me) {
      return false;
    }

    updateProfile({
      id: me.id,
      name: values.name,
      profile: profile_information_objectSpread(profile_information_objectSpread({
        id: me === null || me === void 0 ? void 0 : (_me$profile = me.profile) === null || _me$profile === void 0 ? void 0 : _me$profile.id
      }, values.profile), {}, {
        avatar: (_values$profile$avata = values.profile.avatar) === null || _values$profile$avata === void 0 ? void 0 : _values$profile$avata[0]
      })
    }, {
      onSuccess: () => {
        external_react_toastify_.toast.success(t('profile-update-successful'));
      }
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(profile_form, {
    loading: updating,
    onSubmit: onSubmit,
    user: me
  });
};

/* harmony default export */ const profile_information = (ProfileInformation);
// EXTERNAL MODULE: ./src/components/icons/plus-icon.tsx
var plus_icon = __webpack_require__(2816);
// EXTERNAL MODULE: ./src/components/ui/contact-card.tsx
var contact_card = __webpack_require__(4051);
;// CONCATENATED MODULE: ./src/components/profile/profile-contact.tsx








const ProfileContact = ({
  userId,
  profileId,
  contact
}) => {
  const {
    openModal
  } = (0,modal_context/* useModalAction */.SO)();
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');

  function onAdd() {
    openModal('ADD_OR_UPDATE_PROFILE_CONTACT', {
      customerId: userId,
      profileId,
      contact
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(card/* default */.Z, {
    className: "w-full flex flex-col",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex items-center justify-between mb-5 md:mb-8",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "text-lg lg:text-xl text-heading capitalize",
        children: t('text-contact-number')
      }), onAdd && /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: "flex items-center text-sm font-semibold text-accent transition-colors duration-200 focus:outline-none focus:text-accent-hover hover:text-accent-hover",
        onClick: onAdd,
        children: [/*#__PURE__*/jsx_runtime_.jsx(plus_icon/* PlusIcon */.p, {
          className: "w-4 h-4 stroke-2 me-0.5"
        }), Boolean(contact) ? t('text-update') : t('text-add')]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
      children: /*#__PURE__*/jsx_runtime_.jsx(contact_card/* default */.Z, {
        number: Boolean(contact) ? contact : t('text-no-contact')
      })
    })]
  });
};

/* harmony default export */ const profile_contact = (ProfileContact);
// EXTERNAL MODULE: ./src/framework/rest/ssr/common.ts
var common = __webpack_require__(857);
;// CONCATENATED MODULE: ./src/pages/profile.tsx












const ProfilePage = () => {
  var _me$profile, _me$profile2;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    me
  } = (0,use_user/* default */.ZP)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "w-full overflow-hidden px-1 pb-1",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "mb-8",
      children: [/*#__PURE__*/jsx_runtime_.jsx(profile_information, {}), /*#__PURE__*/jsx_runtime_.jsx(profile_contact, {
        userId: me === null || me === void 0 ? void 0 : me.id,
        profileId: me === null || me === void 0 ? void 0 : (_me$profile = me.profile) === null || _me$profile === void 0 ? void 0 : _me$profile.id,
        contact: me === null || me === void 0 ? void 0 : (_me$profile2 = me.profile) === null || _me$profile2 === void 0 ? void 0 : _me$profile2.contact
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(card/* default */.Z, {
      className: "w-full",
      children: /*#__PURE__*/jsx_runtime_.jsx(profile_address, {
        userId: me === null || me === void 0 ? void 0 : me.id //@ts-ignore
        ,
        addresses: me === null || me === void 0 ? void 0 : me.address,
        label: t('text-addresses')
      })
    })]
  });
};

const getLayout = page => (0,layout/* getLayout */.G)( /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "bg-gray-100 flex flex-col lg:flex-row items-start max-w-1920 w-full mx-auto py-10 px-5 xl:py-14 xl:px-8 2xl:px-14",
  children: [/*#__PURE__*/jsx_runtime_.jsx(sidebar/* default */.Z, {
    className: "flex-shrink-0 hidden lg:block lg:w-80 me-8"
  }), page]
}));

ProfilePage.authenticate = true;
ProfilePage.getLayout = getLayout;
/* harmony default export */ const profile = (ProfilePage);

/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = require("@headlessui/react");

/***/ }),

/***/ 2166:
/***/ ((module) => {

module.exports = require("@hookform/resolvers/yup");

/***/ }),

/***/ 2376:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 3687:
/***/ ((module) => {

module.exports = require("camelcase-keys");

/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 8250:
/***/ ((module) => {

module.exports = require("jotai");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("jotai/utils");

/***/ }),

/***/ 6155:
/***/ ((module) => {

module.exports = require("js-cookie");

/***/ }),

/***/ 4661:
/***/ ((module) => {

module.exports = require("lodash/pickBy");

/***/ }),

/***/ 8475:
/***/ ((module) => {

module.exports = require("next-i18next");

/***/ }),

/***/ 3295:
/***/ ((module) => {

module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 1958:
/***/ ((module) => {

module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2875:
/***/ ((module) => {

module.exports = require("react-dropzone");

/***/ }),

/***/ 2662:
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9475:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 2034:
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ 173:
/***/ ((module) => {

module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4939,5218,9517,8926,2317,2395,6902,6578,7993,2816,6098,857,5658,9204,5434,5549,2951,799,6509,333,4405,3669], () => (__webpack_exec__(4808)));
module.exports = __webpack_exports__;

})();