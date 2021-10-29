"use strict";
(() => {
var exports = {};
exports.id = 9335;
exports.ids = [9335];
exports.modules = {

/***/ 3170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ContactPage": () => (/* binding */ ContactPage),
  "default": () => (/* binding */ pages_contact),
  "getStaticProps": () => (/* reexport */ common/* getStaticProps */.b)
});

// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/framework/rest/customer/customer.query.ts
var customer_query = __webpack_require__(799);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/components/ui/forms/form.tsx
var forms_form = __webpack_require__(6509);
// EXTERNAL MODULE: ./src/components/ui/forms/input.tsx
var input = __webpack_require__(5549);
// EXTERNAL MODULE: ./src/components/ui/forms/text-area.tsx
var text_area = __webpack_require__(2951);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/contact/contact-form.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const contactFormSchema = external_yup_.object().shape({
  name: external_yup_.string().required('error-name-required'),
  email: external_yup_.string().email('error-email-format').required('error-email-required'),
  subject: external_yup_.string().required('error-subject-required'),
  description: external_yup_.string().required('error-description-required')
});

const ContactForm = ({
  onSubmit,
  loading
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx(forms_form/* Form */.l, {
    onSubmit: onSubmit,
    validationSchema: contactFormSchema,
    children: ({
      register,
      formState: {
        errors
      }
    }) => {
      var _errors$name, _errors$email, _errors$subject, _errors$description;

      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
          children: [/*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
            label: t('text-name')
          }, register('name')), {}, {
            variant: "outline",
            error: t((_errors$name = errors.name) === null || _errors$name === void 0 ? void 0 : _errors$name.message)
          })), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
            label: t('text-email')
          }, register('email')), {}, {
            type: "email",
            variant: "outline",
            error: t((_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.message)
          }))]
        }), /*#__PURE__*/jsx_runtime_.jsx(input/* default */.Z, _objectSpread(_objectSpread({
          label: t('text-subject')
        }, register('subject')), {}, {
          variant: "outline",
          className: "my-6",
          error: t((_errors$subject = errors.subject) === null || _errors$subject === void 0 ? void 0 : _errors$subject.message)
        })), /*#__PURE__*/jsx_runtime_.jsx(text_area/* default */.Z, _objectSpread(_objectSpread({
          label: t('text-description')
        }, register('description')), {}, {
          variant: "outline",
          className: "my-6",
          error: t((_errors$description = errors.description) === null || _errors$description === void 0 ? void 0 : _errors$description.message)
        })), /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
          loading: loading,
          disabled: loading,
          children: t('text-submit')
        })]
      });
    }
  });
};

/* harmony default export */ const contact_form = (ContactForm);
;// CONCATENATED MODULE: ./src/framework/rest/contact/contact.tsx



const Contact = () => {
  const {
    mutate,
    isLoading
  } = (0,customer_query/* useContactMutation */.c)();

  function onSubmit(values) {
    mutate(values); // reset();
  }

  return /*#__PURE__*/jsx_runtime_.jsx(contact_form, {
    onSubmit: onSubmit,
    loading: isLoading
  });
};
/* harmony default export */ const contact = (Contact);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(6126);
;// CONCATENATED MODULE: ./src/assets/contact-illustration.svg
/* harmony default export */ const contact_illustration = ({"src":"/_next/static/image/src/assets/contact-illustration.d03e6026d8e2aacf97c45d6a67c24857.svg","height":232,"width":299});
// EXTERNAL MODULE: ./src/components/layouts/layout.tsx + 10 modules
var layout = __webpack_require__(6578);
// EXTERNAL MODULE: ./src/components/settings/settings.context.tsx
var settings_context = __webpack_require__(7438);
// EXTERNAL MODULE: ./src/lib/format-address.ts
var format_address = __webpack_require__(2528);
// EXTERNAL MODULE: ./src/lib/get-icon.tsx
var get_icon = __webpack_require__(8473);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(8718);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
// EXTERNAL MODULE: ./src/components/icons/social/index.tsx + 4 modules
var social = __webpack_require__(8111);
// EXTERNAL MODULE: ./src/framework/rest/ssr/common.ts
var common = __webpack_require__(857);
;// CONCATENATED MODULE: ./src/pages/contact.tsx













const ContactPage = () => {
  var _settings$contactDeta, _settings$contactDeta2, _settings$contactDeta3, _settings$contactDeta4, _settings$contactDeta5, _settings$contactDeta6, _settings$contactDeta7, _settings$contactDeta8, _settings$contactDeta9, _settings$contactDeta10;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const settings = (0,settings_context/* useSettings */.rV)();
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "w-full bg-gray-100",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col md:flex-row max-w-7xl w-full mx-auto py-10 px-5 xl:py-14 xl:px-8 2xl:px-14",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full md:w-72 lg:w-96 bg-light p-5 flex-shrink-0 order-2 md:order-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-full flex items-center justify-center overflow-hidden mb-8",
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_image/* Image */.E, {
            src: contact_illustration,
            alt: t('nav-menu-contact'),
            className: "w-full h-auto"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col mb-8",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "font-semibold text-heading mb-3",
            children: t('text-address')
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-sm text-body",
            children: !isEmpty_default()((0,format_address/* formatAddress */.T)(settings === null || settings === void 0 ? void 0 : (_settings$contactDeta = settings.contactDetails) === null || _settings$contactDeta === void 0 ? void 0 : _settings$contactDeta.location)) ? (0,format_address/* formatAddress */.T)(settings === null || settings === void 0 ? void 0 : (_settings$contactDeta2 = settings.contactDetails) === null || _settings$contactDeta2 === void 0 ? void 0 : _settings$contactDeta2.location) : t('common:text-no-address')
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col mb-8",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "font-semibold text-heading mb-3",
            children: t('text-phone')
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-sm text-body",
            children: settings !== null && settings !== void 0 && (_settings$contactDeta3 = settings.contactDetails) !== null && _settings$contactDeta3 !== void 0 && _settings$contactDeta3.contact ? settings === null || settings === void 0 ? void 0 : (_settings$contactDeta4 = settings.contactDetails) === null || _settings$contactDeta4 === void 0 ? void 0 : _settings$contactDeta4.contact : t('text-no-contact')
          })]
        }), (settings === null || settings === void 0 ? void 0 : (_settings$contactDeta5 = settings.contactDetails) === null || _settings$contactDeta5 === void 0 ? void 0 : _settings$contactDeta5.website) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col mb-8",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "font-semibold text-heading mb-3",
            children: t('text-website')
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex items-center justify-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-body",
              children: settings === null || settings === void 0 ? void 0 : (_settings$contactDeta6 = settings.contactDetails) === null || _settings$contactDeta6 === void 0 ? void 0 : _settings$contactDeta6.website
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: (_settings$contactDeta7 = settings === null || settings === void 0 ? void 0 : (_settings$contactDeta8 = settings.contactDetails) === null || _settings$contactDeta8 === void 0 ? void 0 : _settings$contactDeta8.website) !== null && _settings$contactDeta7 !== void 0 ? _settings$contactDeta7 : '#',
              target: "_blank",
              rel: "noreferrer",
              className: "text-sm text-accent font-semibold hover:text-accent-hover focus:outline-none focus:text-blue-500",
              children: t('text-visit-site')
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex flex-col mb-8",
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "font-semibold text-heading mb-4",
            children: t('text-follow-us')
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "flex items-center justify-start",
            children: settings === null || settings === void 0 ? void 0 : (_settings$contactDeta9 = settings.contactDetails) === null || _settings$contactDeta9 === void 0 ? void 0 : (_settings$contactDeta10 = _settings$contactDeta9.socials) === null || _settings$contactDeta10 === void 0 ? void 0 : _settings$contactDeta10.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: item === null || item === void 0 ? void 0 : item.url,
              target: "_blank",
              rel: "noreferrer",
              className: `text-muted focus:outline-none me-8 last:me-0 transition-colors duration-300 hover:${item.hoverClass}`,
              children: (0,get_icon/* getIcon */.q)({
                iconList: social,
                iconName: item === null || item === void 0 ? void 0 : item.icon,
                className: 'w-4 h-4'
              })
            }, index))
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full order-1 md:order-2 mb-8 md:mb-0 md:ms-7 lg:ms-9 p-5 md:p-8 bg-light",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "mb-7 text-xl md:text-2xl font-body font-bold text-heading",
          children: t('text-questions-comments')
        }), /*#__PURE__*/jsx_runtime_.jsx(contact, {})]
      })]
    })
  });
};
ContactPage.getLayout = layout/* getLayout */.G;
/* harmony default export */ const pages_contact = (ContactPage);

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

/***/ 8718:
/***/ ((module) => {

module.exports = require("lodash/isEmpty");

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

/***/ }),

/***/ 9440:
/***/ ((module) => {

module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4939,5218,9517,8926,2317,2395,6902,6578,7993,6098,857,8473,5549,2951,799,8111,6509], () => (__webpack_exec__(3170)));
module.exports = __webpack_exports__;

})();