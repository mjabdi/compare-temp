"use strict";
exports.id = 5434;
exports.ids = [5434];
exports.modules = {

/***/ 5434:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_ui_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1420);
/* harmony import */ var _settings_site__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5658);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _framework_auth_use_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const DashboardSidebar = ({
  className
}) => {
  var _me$wallet$total_poin, _me$wallet, _me$wallet$points_use, _me$wallet2, _me$wallet$available_, _me$wallet3, _siteSettings$dashboa, _siteSettings$dashboa2;

  const {
    me
  } = (0,_framework_auth_use_user__WEBPACK_IMPORTED_MODULE_5__/* .default */ .ZP)();
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)();
  const {
    pathname
  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("aside", {
    className: className,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "bg-light rounded border border-border-200 overflow-hidden py-8 px-10 mb-5",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h3", {
        className: "text-heading font-semibold text-base pb-4 mb-4 border-b border-dashed border-border-200",
        children: t('text-wallet')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center justify-between text-sm text-heading font-semibold mb-2 capitalize",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          children: t('text-total-points')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          children: (_me$wallet$total_poin = me === null || me === void 0 ? void 0 : (_me$wallet = me.wallet) === null || _me$wallet === void 0 ? void 0 : _me$wallet.total_points) !== null && _me$wallet$total_poin !== void 0 ? _me$wallet$total_poin : 0
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center justify-between text-sm text-heading font-semibold mb-2 capitalize",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          children: t('text-points-used')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          children: (_me$wallet$points_use = me === null || me === void 0 ? void 0 : (_me$wallet2 = me.wallet) === null || _me$wallet2 === void 0 ? void 0 : _me$wallet2.points_used) !== null && _me$wallet$points_use !== void 0 ? _me$wallet$points_use : 0
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "flex items-center justify-between text-sm text-heading font-semibold capitalize",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          children: t('text-available-points')
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          children: (_me$wallet$available_ = me === null || me === void 0 ? void 0 : (_me$wallet3 = me.wallet) === null || _me$wallet3 === void 0 ? void 0 : _me$wallet3.available_points) !== null && _me$wallet$available_ !== void 0 ? _me$wallet$available_ : 0
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "bg-light rounded border border-border-200 overflow-hidden",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ul", {
        className: "py-8",
        children: (_siteSettings$dashboa = _settings_site__WEBPACK_IMPORTED_MODULE_1__/* .siteSettings.dashboardSidebarMenu */ .U.dashboardSidebarMenu) === null || _siteSettings$dashboa === void 0 ? void 0 : _siteSettings$dashboa.slice(0, -1).map((item, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
          className: "py-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            href: item.href,
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('block py-2 px-10 font-semibold text-heading transition-colors border-l-4 border-transparent hover:text-accent focus:text-accent', {
              'border-accent text-accent': pathname === item.href
            }),
            children: t(item.label)
          })
        }, idx))
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("ul", {
        className: "bg-light border-t border-border-200 py-4",
        children: (_siteSettings$dashboa2 = _settings_site__WEBPACK_IMPORTED_MODULE_1__/* .siteSettings.dashboardSidebarMenu */ .U.dashboardSidebarMenu) === null || _siteSettings$dashboa2 === void 0 ? void 0 : _siteSettings$dashboa2.slice(-1).map((item, idx) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
          className: "py-2",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_components_ui_link__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {
            href: item.href,
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('block py-2 px-10 font-semibold text-heading transition-colors hover:text-accent focus:text-accent', {
              'border-l-4 border-accent text-accent': pathname === item.href
            }),
            children: t(item.label)
          })
        }, idx))
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardSidebar);

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

/***/ })

};
;