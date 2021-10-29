"use strict";
(() => {
var exports = {};
exports.id = 1233;
exports.ids = [1233];
exports.modules = {

/***/ 6426:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HelpPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: ./src/components/icons/minus-icon.tsx
var minus_icon = __webpack_require__(45);
// EXTERNAL MODULE: ./src/components/icons/plus-icon.tsx
var plus_icon = __webpack_require__(2816);
;// CONCATENATED MODULE: ./src/lib/motion/height-collapse.ts
function heightCollapse() {
  return {
    from: {
      opacity: 0,
      height: 0,
      transition: {
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    },
    to: {
      opacity: 1,
      height: 'auto',
      transition: {
        ease: [0.04, 0.62, 0.23, 0.98]
      }
    }
  };
}
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/ui/accordion.tsx











const Collapse = ({
  i,
  expanded,
  setExpanded,
  title,
  content,
  translatorNS
}) => {
  const isOpen = i === expanded; // active state style

  const activeClass = isOpen ? 'shadow-sm' : '';
  const {
    t
  } = (0,external_next_i18next_.useTranslation)(translatorNS);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: external_classnames_default()('border border-solid border-border-200 bg-light rounded mb-2.5 transition-all hover:border-border-base', activeClass),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_framer_motion_.motion.header, {
      initial: false,
      onClick: () => setExpanded(isOpen ? false : i),
      className: "py-4 px-5 rounded cursor-pointer flex items-center justify-between transition-colors",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-sm md:text-base font-semibold leading-relaxed text-heading",
        children: t(title)
      }), isOpen ? /*#__PURE__*/jsx_runtime_.jsx(minus_icon/* MinusIcon */.V, {
        className: "flex-shrink-0 stroke-2",
        width: 18,
        height: 18
      }) : /*#__PURE__*/jsx_runtime_.jsx(plus_icon/* PlusIcon */.p, {
        className: "flex-shrink-0 stroke-2",
        width: 20,
        height: 20
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
      initial: false,
      children: isOpen && /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.div, {
        initial: "from",
        animate: "to",
        exit: "from",
        variants: heightCollapse(),
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "md:pt-1 pb-4 px-5 leading-7 text-sm md:text-base md:leading-loose text-body-dark",
          children: t(content)
        })
      }, "content")
    })]
  });
};

const Accordion = ({
  items,
  translatorNS
}) => {
  const {
    0: expanded,
    1: setExpanded
  } = (0,external_react_.useState)(0);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: items.map(({
      title,
      content
    }, index) => /*#__PURE__*/jsx_runtime_.jsx(Collapse, {
      i: index,
      title: title,
      content: content,
      expanded: expanded,
      setExpanded: setExpanded,
      translatorNS: translatorNS
    }, title))
  });
};

/* harmony default export */ const accordion = (Accordion);
;// CONCATENATED MODULE: ./src/settings/faq.ts
const faq = [{
  title: 'faq-one-title',
  content: 'faq-one-content'
}, {
  title: 'faq-two-title',
  content: 'faq-two-content'
}, {
  title: 'faq-three-title',
  content: 'faq-three-content'
}, {
  title: 'faq-four-title',
  content: 'faq-four-content'
}];
// EXTERNAL MODULE: external "next-i18next/serverSideTranslations"
var serverSideTranslations_ = __webpack_require__(3295);
// EXTERNAL MODULE: ./src/components/layouts/layout.tsx + 10 modules
var layout = __webpack_require__(6578);
;// CONCATENATED MODULE: ./src/pages/help.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








function HelpPage() {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)();
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20",
    children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
      className: "text-center mb-8",
      children: /*#__PURE__*/jsx_runtime_.jsx("h1", {
        className: "font-bold text-xl md:text-2xl xl:text-3xl",
        children: t('common:nav-menu-faq')
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "max-w-screen-lg w-full mx-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx(accordion, {
        items: faq,
        translatorNS: "faq"
      })
    })]
  });
}
HelpPage.getLayout = layout/* getLayout */.G;
const getStaticProps = async ({
  locale
}) => {
  return {
    props: _objectSpread({}, await (0,serverSideTranslations_.serverSideTranslations)(locale, ['common', 'faq']))
  };
};

/***/ }),

/***/ 4025:
/***/ ((module) => {

module.exports = require("@headlessui/react");

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

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

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
var __webpack_exports__ = __webpack_require__.X(0, [4939,5218,9517,8926,2317,2395,6902,6578,2816,45], () => (__webpack_exec__(6426)));
module.exports = __webpack_exports__;

})();