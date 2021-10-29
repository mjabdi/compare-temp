(() => {
var exports = {};
exports.id = 6660;
exports.ids = [6660];
exports.modules = {

/***/ 7043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ OrdersPage),
  "getStaticProps": () => (/* reexport */ common/* getStaticProps */.b)
});

// EXTERNAL MODULE: ./src/components/dashboard/sidebar.tsx
var sidebar = __webpack_require__(5434);
;// CONCATENATED MODULE: external "rc-collapse"
const external_rc_collapse_namespaceObject = require("rc-collapse");
var external_rc_collapse_default = /*#__PURE__*/__webpack_require__.n(external_rc_collapse_namespaceObject);
// EXTERNAL MODULE: ./src/components/ui/error-message.tsx
var error_message = __webpack_require__(3315);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: ./src/components/ui/loaders/spinner/spinner.tsx
var spinner = __webpack_require__(9204);
// EXTERNAL MODULE: ./src/components/ui/not-found.tsx
var not_found = __webpack_require__(3229);
// EXTERNAL MODULE: ./src/components/ui/scrollbar.tsx
var scrollbar = __webpack_require__(1859);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: ./src/lib/use-price.tsx
var use_price = __webpack_require__(1817);
// EXTERNAL MODULE: ./src/lib/format-address.ts
var format_address = __webpack_require__(2528);
// EXTERNAL MODULE: ./src/components/icons/checkmark.tsx
var checkmark = __webpack_require__(8076);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/ui/progress-box/progress-box.module.css
var progress_box_module = __webpack_require__(1919);
var progress_box_module_default = /*#__PURE__*/__webpack_require__.n(progress_box_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/ui/progress-box/progress-box.tsx







const ProgressBox = ({
  status,
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(scrollbar/* default */.Z, {
    className: "w-full h-full",
    options: {
      scrollbars: {
        autoHide: "never"
      }
    },
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex flex-col py-7 md:items-start md:justify-start w-full md:flex-row",
      children: data === null || data === void 0 ? void 0 : data.map(item => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (progress_box_module_default()).progress_container,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: external_classnames_default()((progress_box_module_default()).progress_wrapper, status >= item.serial ? (progress_box_module_default()).checked : ""),
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (progress_box_module_default()).status_wrapper,
            children: status >= item.serial ? /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "w-3 h-4",
              children: /*#__PURE__*/jsx_runtime_.jsx(checkmark/* CheckMark */.Y, {
                className: "w-full"
              })
            }) : item.serial
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (progress_box_module_default()).bar
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex flex-col items-start ms-5 md:items-center md:ms-0",
          children: item && /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "text-base text-body-dark capitalize font-semibold text-start md:text-center md:px-2",
            children: item === null || item === void 0 ? void 0 : item.name
          })
        })]
      }, item.id))
    })
  });
};

/* harmony default export */ const progress_box = (ProgressBox);
// EXTERNAL MODULE: ./src/framework/rest/orders/orders.query.ts
var orders_query = __webpack_require__(2702);
;// CONCATENATED MODULE: ./src/framework/rest/orders/status.tsx






const OrderStatus = ({
  status
}) => {
  var _data$order_statuses;

  const {
    data,
    isLoading: loading,
    error
  } = (0,orders_query/* useOrderStatusesQuery */.Qk)();
  if (loading) return /*#__PURE__*/jsx_runtime_.jsx(spinner/* default */.Z, {
    showText: false
  });
  if (error) return /*#__PURE__*/jsx_runtime_.jsx(error_message.default, {
    message: error.message
  });
  return /*#__PURE__*/jsx_runtime_.jsx(progress_box, {
    data: data === null || data === void 0 ? void 0 : (_data$order_statuses = data.order_statuses) === null || _data$order_statuses === void 0 ? void 0 : _data$order_statuses.data,
    status: status
  });
};

/* harmony default export */ const orders_status = (OrderStatus);
// EXTERNAL MODULE: ./src/components/ui/link.tsx
var ui_link = __webpack_require__(1420);
// EXTERNAL MODULE: ./src/lib/routes.ts
var routes = __webpack_require__(1103);
// EXTERNAL MODULE: ./src/components/icons/eye-icon.tsx
var eye_icon = __webpack_require__(1097);
// EXTERNAL MODULE: ./src/components/orders/order-items.tsx
var order_items = __webpack_require__(6014);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(8718);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
// EXTERNAL MODULE: ./src/components/ui/modal/modal.context.tsx
var modal_context = __webpack_require__(4652);
;// CONCATENATED MODULE: ./src/components/icons/sad-face.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const SadFaceIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 106.059 106.059",
  fill: "currentColor"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    d: "M90.546 15.518c-20.688-20.69-54.347-20.69-75.031-.005-20.688 20.685-20.686 54.345.002 75.034 20.682 20.684 54.341 20.684 75.027-.004 20.686-20.685 20.685-54.343.002-75.025zm-5.789 69.24c-17.494 17.494-45.96 17.496-63.455.002-17.498-17.497-17.496-45.966 0-63.46 17.494-17.493 45.959-17.495 63.457.002 17.494 17.494 17.492 45.963-.002 63.456zm-7.74-10.757a2.998 2.998 0 0 1-1.562 3.943 2.998 2.998 0 0 1-3.944-1.562c-2.893-6.689-9.73-11.012-17.421-11.012-7.868 0-14.747 4.319-17.522 11.004a3.002 3.002 0 0 1-3.921 1.621 3 3 0 0 1-1.62-3.921c3.71-8.932 12.764-14.703 23.063-14.703 10.084 0 19.084 5.742 22.927 14.63zM33.24 38.671a6.201 6.201 0 1 1 12.4 0 6.201 6.201 0 0 1-12.4 0zm28.117 0a6.201 6.201 0 0 1 12.403 0c0 3.426-2.776 6.202-6.2 6.202s-6.203-2.776-6.203-6.202z"
  })
}));
// EXTERNAL MODULE: ./src/components/ui/badge.tsx
var badge = __webpack_require__(3350);
;// CONCATENATED MODULE: ./src/components/orders/order-details.tsx

















function RefundView({
  status,
  orderId
}) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    openModal
  } = (0,modal_context/* useModalAction */.SO)();

  const renderStatusBadge = status => {
    switch (status.toLowerCase()) {
      case 'approved':
        return /*#__PURE__*/jsx_runtime_.jsx(badge/* default */.Z, {
          text: `${t('text-refund')} ${t('text-approved')}`,
          color: "bg-accent",
          className: "me-4"
        });

      case 'pending':
        return /*#__PURE__*/jsx_runtime_.jsx(badge/* default */.Z, {
          text: `${t('text-refund')} ${t('text-pending')}`,
          color: "bg-purple-500",
          className: "me-4"
        });

      case 'rejected':
        return /*#__PURE__*/jsx_runtime_.jsx(badge/* default */.Z, {
          text: `${t('text-refund')} ${t('text-rejected')}`,
          color: "bg-red-500",
          className: "me-4"
        });

      case 'processing':
        return /*#__PURE__*/jsx_runtime_.jsx(badge/* default */.Z, {
          text: `${t('text-refund')} ${t('text-processing')}`,
          color: "bg-yellow-500",
          className: "me-4"
        });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: status ? renderStatusBadge(status) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
      className: "flex items-center text-sm font-semibold text-body transition-colors hover:text-accent me-4 disabled:text-gray-400 disabled:hover:text-gray-400 disabled:cursor-not-allowed",
      onClick: () => openModal('REFUND_REQUEST', orderId),
      disabled: Boolean(status),
      children: [/*#__PURE__*/jsx_runtime_.jsx(SadFaceIcon, {
        width: 18,
        className: "me-2"
      }), t('text-ask-refund')]
    })
  });
}

const OrderDetails = ({
  order
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    id,
    products,
    status,
    shipping_address,
    billing_address,
    tracking_number,
    refund
  } = order !== null && order !== void 0 ? order : {};
  const {
    price: amount
  } = (0,use_price/* default */.ZP)({
    amount: order === null || order === void 0 ? void 0 : order.amount
  });
  const {
    price: discount
  } = (0,use_price/* default */.ZP)({
    amount: order === null || order === void 0 ? void 0 : order.discount
  });
  const {
    price: total
  } = (0,use_price/* default */.ZP)({
    amount: order === null || order === void 0 ? void 0 : order.total
  });
  const {
    price: delivery_fee
  } = (0,use_price/* default */.ZP)({
    amount: order === null || order === void 0 ? void 0 : order.delivery_fee
  });
  const {
    price: sales_tax
  } = (0,use_price/* default */.ZP)({
    amount: order === null || order === void 0 ? void 0 : order.sales_tax
  });
  console.log(order, 'order');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex flex-col w-full lg:w-2/3 border border-border-200",
    children: !isEmpty_default()(order) ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col md:flex-row items-center md:justify-between p-5 border-b border-border-200",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
          className: "flex font-semibold text-sm md:text-lg text-heading mb-2",
          children: [t('text-order-details'), " ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: "px-2",
            children: "-"
          }), ' ', tracking_number]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/jsx_runtime_.jsx(RefundView, {
            status: refund === null || refund === void 0 ? void 0 : refund.status,
            orderId: id
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ui_link/* default */.Z, {
            href: `${routes/* ROUTES.ORDERS */.Z.ORDERS}/${tracking_number}`,
            className: "font-semibold text-sm text-accent flex items-center transition duration-200 no-underline hover:text-accent-hover focus:text-accent-hover",
            children: [/*#__PURE__*/jsx_runtime_.jsx(eye_icon/* Eye */.b, {
              width: 20,
              className: "me-2"
            }), t('text-sub-orders')]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col sm:flex-row border-b border-border-200",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "w-full md:w-3/5 flex flex-col px-5 py-4 border-b sm:border-b-0 sm:border-r border-border-200",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "mb-4",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-heading font-bold mb-2 block",
              children: t('text-shipping-address')
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-body",
              children: (0,format_address/* formatAddress */.T)(shipping_address)
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-heading font-bold mb-2 block",
              children: t('text-billing-address')
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-body",
              children: (0,format_address/* formatAddress */.T)(billing_address)
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "w-full md:w-2/5 flex flex-col px-5 py-4",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-between mb-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-body",
              children: t('text-sub-total')
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-heading",
              children: amount
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-between mb-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-body",
              children: t('text-discount')
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-heading",
              children: discount
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-between mb-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-body",
              children: t('text-delivery-fee')
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-heading",
              children: delivery_fee
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-between mb-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-body",
              children: t('text-tax')
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm text-heading",
              children: sales_tax
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-between",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm font-bold text-heading",
              children: t('text-total')
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: "text-sm font-bold text-heading",
              children: total
            })]
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-full flex justify-center items-center px-6",
          children: /*#__PURE__*/jsx_runtime_.jsx(orders_status, {
            status: status === null || status === void 0 ? void 0 : status.serial
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(order_items/* OrderItems */.t, {
          products: products
        })]
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "max-w-lg mx-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx(not_found/* default */.Z, {
        text: "text-no-order-found"
      })
    })
  });
};

/* harmony default export */ const order_details = (OrderDetails);
;// CONCATENATED MODULE: ./src/components/orders/orders-with-loader.tsx









const OrdersWithLoader = ({
  showLoaders,
  hasNextPage,
  isLoadingMore,
  onLoadMore,
  notFound,
  children,
  order
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "w-full hidden overflow-hidden lg:flex",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pe-5 lg:pe-8 w-full md:w-1/3",
      style: {
        height: 'calc(100vh - 60px)'
      },
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col h-full pb-5 md:border md:border-border-200",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: "text-xl font-semibold py-5 text-heading px-5",
          children: t('profile-sidebar-orders')
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(scrollbar/* default */.Z, {
          className: "w-full",
          style: {
            height: 'calc(100% - 80px)'
          },
          children: [showLoaders ? /*#__PURE__*/jsx_runtime_.jsx("p", {
            children: /*#__PURE__*/jsx_runtime_.jsx(spinner/* default */.Z, {
              showText: false
            })
          }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "px-5",
            children: [children, hasNextPage && /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "flex justify-center mt-8 lg:mt-12",
              children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
                loading: isLoadingMore,
                onClick: onLoadMore,
                className: "text-sm md:text-base font-semibold h-11",
                children: t('text-load-more')
              })
            })]
          }), notFound && /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-full h-full flex items-center justify-center my-auto",
            children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "text-sm font-semibold text-body text-center",
              children: t('error-no-orders')
            })
          })]
        })]
      })
    }), Boolean(order) ? /*#__PURE__*/jsx_runtime_.jsx(order_details, {
      order: order
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "max-w-lg mx-auto",
      children: /*#__PURE__*/jsx_runtime_.jsx(not_found/* default */.Z, {
        text: "text-no-order-found"
      })
    })]
  });
};

/* harmony default export */ const orders_with_loader = (OrdersWithLoader);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "dayjs"
var external_dayjs_ = __webpack_require__(8349);
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_);
;// CONCATENATED MODULE: ./src/components/orders/order-card.tsx







const OrderCard = ({
  onClick,
  order,
  isActive
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    id,
    status,
    created_at,
    delivery_time
  } = order;
  const {
    price: amount
  } = (0,use_price/* default */.ZP)({
    amount: order === null || order === void 0 ? void 0 : order.amount
  });
  const {
    price: total
  } = (0,use_price/* default */.ZP)({
    amount: order === null || order === void 0 ? void 0 : order.total
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onClick: onClick,
    role: "button",
    className: external_classnames_default()('bg-gray-100 rounded overflow-hidden w-full flex flex-shrink-0 flex-col mb-4 border-2 border-transparent cursor-pointer last:mb-0', isActive === true && '!border-accent'),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex justify-between items-center border-b border-border-200 py-3 px-5 md:px-3 lg:px-5 ",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: "flex font-bold text-sm lg:text-base text-heading me-4 flex-shrink-0",
        children: [t('text-order'), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: "font-normal",
          children: ["#", id]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-sm text-blue-500 bg-blue-100 px-3 py-2 rounded whitespace-nowrap truncate max-w-full",
        title: status.name,
        children: status.name
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col p-5 md:p-3 lg:px-4 lg:py-5",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-sm text-heading w-full flex justify-between items-center mb-4 last:mb-0",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "w-24 overflow-hidden flex-shrink-0",
          children: t('text-order-date')
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "me-auto",
          children: ":"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ms-1",
          children: external_dayjs_default()(created_at).format('MMMM D, YYYY')
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-sm text-heading w-full flex justify-between items-center mb-4 last:mb-0",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "w-24 overflow-hidden flex-shrink-0",
          children: t('text-deliver-time')
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "me-auto",
          children: ":"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ms-1 truncate",
          children: delivery_time
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-sm font-bold text-heading w-full flex justify-between items-center mb-4 last:mb-0",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "w-24 overflow-hidden flex-shrink-0",
          children: t('text-amount')
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "me-auto",
          children: ":"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ms-1",
          children: amount
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-sm font-bold text-heading w-full flex justify-between items-center mb-4 last:mb-0",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "w-24 overflow-hidden flex-shrink-0",
          children: t('text-total-price')
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "me-auto",
          children: ":"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ms-1",
          children: total
        })]
      })]
    })]
  });
};

/* harmony default export */ const order_card = (OrderCard);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(6126);
// EXTERNAL MODULE: ./src/assets/no-result.svg
var no_result = __webpack_require__(8465);
;// CONCATENATED MODULE: ./src/components/orders/order-list-mobile.tsx










const OrderListMobile = ({
  showLoaders,
  hasNextPage,
  isLoadingMore,
  onLoadMore,
  notFound,
  children,
  order
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "flex flex-col w-full lg:hidden",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col w-full h-full px-0 pb-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-xl font-semibold pb-5 text-heading",
        children: t('profile-sidebar-orders')
      }), Boolean(order) && /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_rc_collapse_default()), {
        accordion: true,
        defaultActiveKey: "active",
        expandIcon: () => null,
        children: [showLoaders ? /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: /*#__PURE__*/jsx_runtime_.jsx(spinner/* default */.Z, {
            showText: false
          })
        }) : children, hasNextPage && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "flex justify-center mt-8",
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
            loading: isLoadingMore,
            onClick: onLoadMore,
            className: "text-sm md:text-base font-semibold h-11",
            children: t('text-load-more')
          })
        })]
      }), notFound && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "w-full h-full flex flex-col items-center justify-center py-10 my-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "w-5/6 h-full flex items-center justify-center mb-7",
          children: /*#__PURE__*/jsx_runtime_.jsx(ui_image/* Image */.E, {
            src: no_result/* default */.Z,
            className: "w-full h-full object-contain",
            alt: "No Order Found"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: "text-sm font-semibold text-body text-center",
          children: t('error-no-orders')
        })]
      })]
    })
  });
};

/* harmony default export */ const order_list_mobile = (OrderListMobile);
;// CONCATENATED MODULE: ./src/framework/rest/orders/orders.tsx










function Orders() {
  var _data$pages2, _data$pages2$, _data$pages2$$data, _data$pages3, _data$pages4, _data$pages5, _data$pages5$, _data$pages5$$data, _data$pages6, _data$pages7;

  const {
    data,
    isFetching: loading,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage: loadingMore
  } = (0,orders_query/* useOrdersQuery */.mU)({
    fields: ['refund']
  });
  const {
    0: order,
    1: setOrder
  } = (0,external_react_.useState)({});
  (0,external_react_.useEffect)(() => {
    var _data$pages;

    if (data !== null && data !== void 0 && (_data$pages = data.pages) !== null && _data$pages !== void 0 && _data$pages[0].data.length) {
      setOrder(data.pages[0].data[0]);
    }
  }, [data === null || data === void 0 ? void 0 : data.pages, data === null || data === void 0 ? void 0 : data.pages.length]);
  if (error) return /*#__PURE__*/jsx_runtime_.jsx(error_message.default, {
    message: error.message
  });

  function handleLoadMore() {
    fetchNextPage();
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(orders_with_loader, {
      notFound: !loading && !(data !== null && data !== void 0 && (_data$pages2 = data.pages) !== null && _data$pages2 !== void 0 && (_data$pages2$ = _data$pages2[0]) !== null && _data$pages2$ !== void 0 && (_data$pages2$$data = _data$pages2$.data) !== null && _data$pages2$$data !== void 0 && _data$pages2$$data.length),
      isLoadingMore: loadingMore,
      onLoadMore: handleLoadMore,
      showLoaders: loading && !(data !== null && data !== void 0 && (_data$pages3 = data.pages) !== null && _data$pages3 !== void 0 && _data$pages3.length),
      hasNextPage: Boolean(hasNextPage),
      order: order,
      children: data === null || data === void 0 ? void 0 : (_data$pages4 = data.pages) === null || _data$pages4 === void 0 ? void 0 : _data$pages4.map((page, idx) => {
        var _page$data;

        return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
          children: page === null || page === void 0 ? void 0 : (_page$data = page.data) === null || _page$data === void 0 ? void 0 : _page$data.map((_order, index) => /*#__PURE__*/jsx_runtime_.jsx(order_card, {
            order: _order,
            onClick: () => setOrder(_order),
            isActive: (order === null || order === void 0 ? void 0 : order.id) === (_order === null || _order === void 0 ? void 0 : _order.id)
          }, index))
        }, idx);
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(order_list_mobile, {
      notFound: !loading && !(data !== null && data !== void 0 && (_data$pages5 = data.pages) !== null && _data$pages5 !== void 0 && (_data$pages5$ = _data$pages5[0]) !== null && _data$pages5$ !== void 0 && (_data$pages5$$data = _data$pages5$.data) !== null && _data$pages5$$data !== void 0 && _data$pages5$$data.length),
      isLoadingMore: loadingMore,
      onLoadMore: handleLoadMore,
      showLoaders: loading && !(data !== null && data !== void 0 && (_data$pages6 = data.pages) !== null && _data$pages6 !== void 0 && _data$pages6.length),
      hasNextPage: Boolean(hasNextPage),
      order: order,
      children: data === null || data === void 0 ? void 0 : (_data$pages7 = data.pages) === null || _data$pages7 === void 0 ? void 0 : _data$pages7.map((page, idx) => {
        var _page$data2;

        return /*#__PURE__*/jsx_runtime_.jsx(external_react_.Fragment, {
          children: page === null || page === void 0 ? void 0 : (_page$data2 = page.data) === null || _page$data2 === void 0 ? void 0 : _page$data2.map((_order, index) => /*#__PURE__*/jsx_runtime_.jsx((external_rc_collapse_default()).Panel, {
            header: /*#__PURE__*/jsx_runtime_.jsx(order_card, {
              order: _order,
              onClick: () => setOrder(_order),
              isActive: (order === null || order === void 0 ? void 0 : order.id) === (_order === null || _order === void 0 ? void 0 : _order.id)
            }, `mobile_${index}`),
            headerClass: "accordion-title",
            className: "mb-4",
            children: /*#__PURE__*/jsx_runtime_.jsx(order_details, {
              order: order
            })
          }, index))
        }, idx);
      })
    })]
  });
}
// EXTERNAL MODULE: ./src/components/layouts/layout.tsx + 10 modules
var layout = __webpack_require__(6578);
// EXTERNAL MODULE: ./src/framework/rest/ssr/common.ts
var common = __webpack_require__(857);
;// CONCATENATED MODULE: ./src/pages/orders/index.tsx






function OrdersPage() {
  return /*#__PURE__*/jsx_runtime_.jsx(Orders, {});
}

const getLayout = page => (0,layout/* getLayout */.G)( /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: "bg-light flex flex-col xl:flex-row items-start max-w-1920 w-full mx-auto py-10 px-5 xl:py-14 xl:px-8 2xl:px-14 min-h-screen",
  children: [/*#__PURE__*/jsx_runtime_.jsx(sidebar/* default */.Z, {
    className: "flex-shrink-0 hidden xl:block xl:w-80 me-8"
  }), page]
}));

OrdersPage.authenticate = true;
OrdersPage.getLayout = getLayout;

/***/ }),

/***/ 1919:
/***/ ((module) => {

// Exports
module.exports = {
	"progress_container": "progress-box_progress_container__3V3vU",
	"bar": "progress-box_bar__ReJij",
	"progress_wrapper": "progress-box_progress_wrapper__36diV",
	"checked": "progress-box_checked__ZaAO4",
	"status_wrapper": "progress-box_status_wrapper__30B4b"
};


/***/ }),

/***/ 4025:
/***/ ((module) => {

"use strict";
module.exports = require("@headlessui/react");

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3687:
/***/ ((module) => {

"use strict";
module.exports = require("camelcase-keys");

/***/ }),

/***/ 4058:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 8349:
/***/ ((module) => {

"use strict";
module.exports = require("dayjs");

/***/ }),

/***/ 762:
/***/ ((module) => {

"use strict";
module.exports = require("framer-motion");

/***/ }),

/***/ 8250:
/***/ ((module) => {

"use strict";
module.exports = require("jotai");

/***/ }),

/***/ 3837:
/***/ ((module) => {

"use strict";
module.exports = require("jotai/utils");

/***/ }),

/***/ 6155:
/***/ ((module) => {

"use strict";
module.exports = require("js-cookie");

/***/ }),

/***/ 8718:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/isEmpty");

/***/ }),

/***/ 4661:
/***/ ((module) => {

"use strict";
module.exports = require("lodash/pickBy");

/***/ }),

/***/ 8475:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 3295:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 8300:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 2307:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 1958:
/***/ ((module) => {

"use strict";
module.exports = require("overlayscrollbars-react");

/***/ }),

/***/ 6356:
/***/ ((module) => {

"use strict";
module.exports = require("rc-table");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2585:
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ 9475:
/***/ ((module) => {

"use strict";
module.exports = require("react-query/hydration");

/***/ }),

/***/ 173:
/***/ ((module) => {

"use strict";
module.exports = require("react-use/lib/useLocalStorage");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [4939,5218,9517,8926,2317,2395,6902,6578,1817,7993,3229,6098,1859,857,5658,9204,5434,1097,2702,3559], () => (__webpack_exec__(7043)));
module.exports = __webpack_exports__;

})();