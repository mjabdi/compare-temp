"use strict";
(() => {
var exports = {};
exports.id = 4185;
exports.ids = [4185];
exports.modules = {

/***/ 3350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const Badge = ({
  className,
  color: colorOverride,
  textColor: textColorOverride,
  text,
  style
}) => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();
  const classes = {
    root: 'px-3 py-1 rounded-full text-sm',
    default: 'bg-accent',
    text: 'text-light'
  };
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(classes.root, {
      [classes.default]: !colorOverride,
      [classes.text]: !textColorOverride
    }, colorOverride, textColorOverride, className),
    style: style,
    children: t(text)
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Badge);

/***/ }),

/***/ 5178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* reexport default from dynamic */ rc_table__WEBPACK_IMPORTED_MODULE_0___default.a)
/* harmony export */ });
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6356);
/* harmony import */ var rc_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_table__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ 5894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RefundsPage),
  "getStaticProps": () => (/* reexport */ common/* getStaticProps */.b)
});

// EXTERNAL MODULE: ./src/components/dashboard/sidebar.tsx
var sidebar = __webpack_require__(5434);
// EXTERNAL MODULE: ./src/components/layouts/layout.tsx + 10 modules
var layout = __webpack_require__(6578);
// EXTERNAL MODULE: ./src/components/ui/table.tsx
var table = __webpack_require__(5178);
// EXTERNAL MODULE: ./src/lib/use-price.tsx
var use_price = __webpack_require__(1817);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/lib/locals.tsx
var locals = __webpack_require__(8972);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(8349);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: external "dayjs/plugin/relativeTime"
const relativeTime_namespaceObject = require("dayjs/plugin/relativeTime");
var relativeTime_default = /*#__PURE__*/__webpack_require__.n(relativeTime_namespaceObject);
;// CONCATENATED MODULE: external "dayjs/plugin/utc"
const utc_namespaceObject = require("dayjs/plugin/utc");
var utc_default = /*#__PURE__*/__webpack_require__.n(utc_namespaceObject);
;// CONCATENATED MODULE: external "dayjs/plugin/timezone"
const timezone_namespaceObject = require("dayjs/plugin/timezone");
var timezone_default = /*#__PURE__*/__webpack_require__.n(timezone_namespaceObject);
// EXTERNAL MODULE: ./src/components/ui/badge.tsx
var badge = __webpack_require__(3350);
// EXTERNAL MODULE: ./src/components/ui/cards/card.tsx
var card = __webpack_require__(8177);
// EXTERNAL MODULE: ./src/components/icons/eye-icon.tsx
var eye_icon = __webpack_require__(1097);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(1420);
// EXTERNAL MODULE: ./src/lib/routes.ts
var routes = __webpack_require__(1103);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/refunds/refund-view.tsx
















const RefundView = ({
  refund
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    alignLeft,
    alignRight
  } = (0,locals/* useIsRTL */.S)();

  const renderStatusBadge = status => {
    switch (status.toLowerCase()) {
      case 'approved':
        return /*#__PURE__*/jsx_runtime_.jsx(badge/* default */.Z, {
          text: t('text-approved'),
          color: "bg-accent"
        });

      case 'pending':
        return /*#__PURE__*/jsx_runtime_.jsx(badge/* default */.Z, {
          text: t('text-pending'),
          color: "bg-purple-500"
        });

      case 'rejected':
        return /*#__PURE__*/jsx_runtime_.jsx(badge/* default */.Z, {
          text: t('text-rejected'),
          color: "bg-red-500"
        });

      case 'processing':
        return /*#__PURE__*/jsx_runtime_.jsx(badge/* default */.Z, {
          text: t('text-processing'),
          color: "bg-yellow-500"
        });
    }
  };

  const refundTableColumns = (0,external_react_.useMemo)(() => [{
    title: t('text-id'),
    dataIndex: 'id',
    key: 'id',
    align: 'center',
    ellipsis: true,
    className: '!text-sm',
    width: 75
  }, {
    title: t('text-reason'),
    dataIndex: 'title',
    key: 'title',
    align: alignLeft,
    ellipsis: true,
    className: '!text-sm',
    width: 220,
    render: function renderQuantity(title) {
      return /*#__PURE__*/jsx_runtime_.jsx("p", {
        className: "whitespace-nowrap",
        children: title
      });
    }
  }, {
    title: t('text-status'),
    dataIndex: 'status',
    key: 'status',
    align: 'center',
    ellipsis: true,
    className: '!text-sm',
    width: 160,
    render: function renderQuantity(status) {
      return renderStatusBadge(status);
    }
  }, {
    title: t('text-tracking-number'),
    dataIndex: '',
    key: 'pivot',
    align: 'center',
    className: '!text-sm',
    width: 160,
    render: function renderTrackingNumber(pivot) {
      var _pivot$order;

      return /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: pivot === null || pivot === void 0 ? void 0 : (_pivot$order = pivot.order) === null || _pivot$order === void 0 ? void 0 : _pivot$order.tracking_number
      });
    }
  }, {
    title: t('text-amount'),
    dataIndex: 'amount',
    key: 'amount',
    align: alignRight,
    className: '!text-sm',
    width: 150,
    render: function RenderPrice(amount) {
      const {
        price
      } = (0,use_price/* default */.ZP)({
        amount: amount
      });
      return /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: price
      });
    }
  }, {
    title: t('text-date'),
    dataIndex: 'created_at',
    key: 'created_at',
    align: 'center',
    className: '!text-sm',
    width: 160,
    render: date => {
      external_dayjs_default().extend((relativeTime_default()));
      external_dayjs_default().extend((utc_default()));
      external_dayjs_default().extend((timezone_default()));
      return /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "whitespace-nowrap",
        children: external_dayjs_default().utc(date).tz(external_dayjs_default().tz.guess()).fromNow()
      });
    }
  }, {
    title: t('text-details'),
    dataIndex: 'order',
    key: 'order',
    align: 'center',
    className: '!text-sm',
    width: 100,
    render: order => /*#__PURE__*/jsx_runtime_.jsx(ui_link/* default */.Z, {
      href: `${routes/* ROUTES.ORDERS */.Z.ORDERS}/${order === null || order === void 0 ? void 0 : order.tracking_number}`,
      className: "inline-block text-body transition duration-200 hover:text-accent-hover focus:text-accent-hover",
      title: t('text-view-order'),
      children: /*#__PURE__*/jsx_runtime_.jsx(eye_icon/* Eye */.b, {
        width: 20
      })
    })
  }], [alignLeft, alignRight, renderStatusBadge, t]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(card/* default */.Z, {
    className: "w-full overflow-hidden self-stretch min-h-screen lg:min-h-0",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
      className: "text-2xl text-heading font-semibold text-center mb-8",
      children: t('text-my-refunds')
    }), /*#__PURE__*/jsx_runtime_.jsx(table/* Table */.i //@ts-ignore
    , {
      columns: refundTableColumns,
      data: refund,
      rowKey: record => record.created_at,
      className: "orderDetailsTable w-full border border-gray-200",
      scroll: {
        x: 500,
        y: 700
      }
    })]
  });
};
// EXTERNAL MODULE: ./src/components/ui/error-message.tsx
var error_message = __webpack_require__(3315);
// EXTERNAL MODULE: ./src/framework/rest/refunds/refunds.query.ts + 1 modules
var refunds_query = __webpack_require__(7037);
;// CONCATENATED MODULE: ./src/framework/rest/refunds/refunds.tsx





const Refunds = () => {
  var _data$pages$;

  const {
    data,
    isFetching: loading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage: loadingMore
  } = (0,refunds_query/* useRefundsQuery */.m)({
    orderBy: 'created_at',
    sortedBy: 'desc'
  });
  if (error) return /*#__PURE__*/jsx_runtime_.jsx(error_message.default, {
    message: error.message
  });

  function handleLoadMore() {
    fetchNextPage();
  }

  console.log(data, 'refund data');
  return (
    /*#__PURE__*/
    // <div />
    jsx_runtime_.jsx(RefundView, {
      refund: data === null || data === void 0 ? void 0 : (_data$pages$ = data.pages[0]) === null || _data$pages$ === void 0 ? void 0 : _data$pages$.data
    }) // <div>
    //   <pre>{JSON.stringify(data, null, 2)}</pre>
    // </div>

  );
};

/* harmony default export */ const refunds = (Refunds);
// EXTERNAL MODULE: ./src/framework/rest/ssr/common.ts
var common = __webpack_require__(857);
;// CONCATENATED MODULE: ./src/pages/refunds.tsx






function RefundsPage() {
  return /*#__PURE__*/jsx_runtime_.jsx(refunds, {});
}

const getLayout = page => (0,layout/* getLayout */.G)( /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "bg-gray-100 flex flex-col lg:flex-row items-start max-w-1920 w-full mx-auto md:py-10 md:px-5 xl:py-14 xl:px-8 2xl:px-14 min-h-screen lg:min-h-0",
  children: [/*#__PURE__*/jsx_runtime_.jsx(sidebar/* default */.Z, {
    className: "flex-shrink-0 hidden lg:block lg:w-80 me-8"
  }), page]
}));

RefundsPage.authenticate = true;
RefundsPage.getLayout = getLayout;

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

/***/ 8349:
/***/ ((module) => {

module.exports = require("dayjs");

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

/***/ 6356:
/***/ ((module) => {

module.exports = require("rc-table");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 2585:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9475:
/***/ ((module) => {

module.exports = require("react-query/hydration");

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
var __webpack_exports__ = __webpack_require__.X(0, [4939,5218,9517,8926,2317,2395,6902,6578,1817,857,5658,5434,1097,333,7037], () => (__webpack_exec__(5894)));
module.exports = __webpack_exports__;

})();