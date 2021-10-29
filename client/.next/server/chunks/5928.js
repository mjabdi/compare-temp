"use strict";
exports.id = 5928;
exports.ids = [5928];
exports.modules = {

/***/ 5928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4058);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6126);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_format_address__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2528);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8718);
/* harmony import */ var lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ui_truncate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9219);
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4652);
/* harmony import */ var _components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1859);
/* harmony import */ var _lib_get_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8473);
/* harmony import */ var _lib_placeholders__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1219);
/* harmony import */ var _components_icons_social__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8111);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);















const ShopSidebar = ({
  data,
  className,
  cardClassName
}) => {
  var _ref, _data$shop, _data$shop$logo, _data$shop2, _ref2, _data$shop3, _data$shop3$logo, _data$shop4, _data$shop5, _data$shop6, _data$shop7, _data$shop7$settings, _data$shop7$settings$, _data$shop8, _data$shop9, _data$shop10, _data$shop10$settings, _data$shop11, _data$shop11$settings, _data$shop12, _data$shop12$settings, _data$shop13, _data$shop13$settings, _data$shop14, _data$shop14$settings;

  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)('common');
  const {
    openModal
  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_5__/* .useModalAction */ .SO)();

  function handleMoreInfoModal() {
    return openModal('SHOP_INFO', data);
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('flex items-center lg:hidden w-full bg-light border-b border-gray-300 py-4 px-6 sticky top-[55px] z-10', cardClassName),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: "w-16 h-16 rounded-lg relative mx-auto border border-gray-100 bg-gray-200 overflow-hidden me-4 flex-shrink-0",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
          alt: t('logo'),
          src: (_ref = data === null || data === void 0 ? void 0 : (_data$shop = data.shop) === null || _data$shop === void 0 ? void 0 : (_data$shop$logo = _data$shop.logo) === null || _data$shop$logo === void 0 ? void 0 : _data$shop$logo.original) !== null && _ref !== void 0 ? _ref : _lib_placeholders__WEBPACK_IMPORTED_MODULE_8__/* .productPlaceholder */ .Hb,
          layout: "fill",
          objectFit: "cover"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: "w-full",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h3", {
          className: "text-base font-semibold text-heading",
          children: data === null || data === void 0 ? void 0 : (_data$shop2 = data.shop) === null || _data$shop2 === void 0 ? void 0 : _data$shop2.name
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("button", {
          className: "text-sm font-semibold transition text-accent hover:text-accent-hover",
          onClick: handleMoreInfoModal,
          children: t('text-more-info')
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("aside", {
      className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('bg-light md:rounded h-full w-full lg:w-80 2xl:w-96 hidden lg:block', className),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: "max-h-full overflow-hidden",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_components_ui_scrollbar__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, {
          className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('w-full', 'scrollbar_height'),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "w-full border-b border-gray-200 p-7 flex flex-col items-center",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
              className: "w-44 h-44 rounded-lg relative mx-auto border border-gray-100 bg-gray-200 overflow-hidden mb-8",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_ui_image__WEBPACK_IMPORTED_MODULE_1__/* .Image */ .E, {
                alt: t('logo'),
                src: (_ref2 = data === null || data === void 0 ? void 0 : (_data$shop3 = data.shop) === null || _data$shop3 === void 0 ? void 0 : (_data$shop3$logo = _data$shop3.logo) === null || _data$shop3$logo === void 0 ? void 0 : _data$shop3$logo.original) !== null && _ref2 !== void 0 ? _ref2 : _lib_placeholders__WEBPACK_IMPORTED_MODULE_8__/* .productPlaceholder */ .Hb,
                layout: "fill",
                objectFit: "cover"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("h3", {
              className: "text-lg font-semibold text-heading mb-2",
              children: data === null || data === void 0 ? void 0 : (_data$shop4 = data.shop) === null || _data$shop4 === void 0 ? void 0 : _data$shop4.name
            }), (data === null || data === void 0 ? void 0 : (_data$shop5 = data.shop) === null || _data$shop5 === void 0 ? void 0 : _data$shop5.description) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("p", {
              className: "text-sm text-body mb-2 text-center leading-relaxed",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx(_components_ui_truncate__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z, {
                character: 70,
                children: data === null || data === void 0 ? void 0 : (_data$shop6 = data.shop) === null || _data$shop6 === void 0 ? void 0 : _data$shop6.description
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
              className: "flex items-center justify-start mt-3",
              children: data === null || data === void 0 ? void 0 : (_data$shop7 = data.shop) === null || _data$shop7 === void 0 ? void 0 : (_data$shop7$settings = _data$shop7.settings) === null || _data$shop7$settings === void 0 ? void 0 : (_data$shop7$settings$ = _data$shop7$settings.socials) === null || _data$shop7$settings$ === void 0 ? void 0 : _data$shop7$settings$.map((item, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("a", {
                href: item.url,
                target: "_blank",
                className: `text-muted focus:outline-none me-6 last:me-0 transition-colors duration-300 hover:${item.hoverClass}`,
                rel: "noreferrer",
                children: (0,_lib_get_icon__WEBPACK_IMPORTED_MODULE_7__/* .getIcon */ .q)({
                  iconList: _components_icons_social__WEBPACK_IMPORTED_MODULE_9__,
                  iconName: item.icon,
                  className: 'w-4 h-4'
                })
              }, index))
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
            className: "p-7",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "mb-7 last:mb-0 flex flex-col",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
                className: "text-sm text-heading font-semibold mb-2",
                children: t('text-address')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
                className: "text-sm text-body",
                children: !lodash_isEmpty__WEBPACK_IMPORTED_MODULE_3___default()((0,_lib_format_address__WEBPACK_IMPORTED_MODULE_11__/* .formatAddress */ .T)(data === null || data === void 0 ? void 0 : (_data$shop8 = data.shop) === null || _data$shop8 === void 0 ? void 0 : _data$shop8.address)) ? (0,_lib_format_address__WEBPACK_IMPORTED_MODULE_11__/* .formatAddress */ .T)(data === null || data === void 0 ? void 0 : (_data$shop9 = data.shop) === null || _data$shop9 === void 0 ? void 0 : _data$shop9.address) : t('common:text-no-address')
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "mb-7 last:mb-0 flex flex-col",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
                className: "text-sm text-heading font-semibold mb-2",
                children: t('text-phone')
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
                className: "text-sm text-body",
                children: data !== null && data !== void 0 && (_data$shop10 = data.shop) !== null && _data$shop10 !== void 0 && (_data$shop10$settings = _data$shop10.settings) !== null && _data$shop10$settings !== void 0 && _data$shop10$settings.contact ? data === null || data === void 0 ? void 0 : (_data$shop11 = data.shop) === null || _data$shop11 === void 0 ? void 0 : (_data$shop11$settings = _data$shop11.settings) === null || _data$shop11$settings === void 0 ? void 0 : _data$shop11$settings.contact : t('text-no-contact')
              })]
            }), (data === null || data === void 0 ? void 0 : (_data$shop12 = data.shop) === null || _data$shop12 === void 0 ? void 0 : (_data$shop12$settings = _data$shop12.settings) === null || _data$shop12$settings === void 0 ? void 0 : _data$shop12$settings.website) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              className: "flex flex-col",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
                className: "text-sm text-heading font-semibold mb-2",
                children: t('text-website')
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("span", {
                  className: "text-sm text-body",
                  children: data === null || data === void 0 ? void 0 : (_data$shop13 = data.shop) === null || _data$shop13 === void 0 ? void 0 : (_data$shop13$settings = _data$shop13.settings) === null || _data$shop13$settings === void 0 ? void 0 : _data$shop13$settings.website
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("a", {
                  href: data === null || data === void 0 ? void 0 : (_data$shop14 = data.shop) === null || _data$shop14 === void 0 ? void 0 : (_data$shop14$settings = _data$shop14.settings) === null || _data$shop14$settings === void 0 ? void 0 : _data$shop14$settings.website,
                  target: "_blank",
                  className: "text-sm text-accent font-semibold hover:text-accent-hover focus:outline-none focus:text-accent-hover",
                  rel: "noreferrer",
                  children: t('text-visit-site')
                })]
              })]
            })]
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShopSidebar);

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