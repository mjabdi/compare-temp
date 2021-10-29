"use strict";
exports.id = 3242;
exports.ids = [3242];
exports.modules = {

/***/ 3242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ delete_view)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/trash.tsx



const Trash = ({
  width,
  height,
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("svg", {
    width: width,
    height: height,
    className: className,
    fill: "currentColor",
    viewBox: "0 0 1792 1792",
    children: /*#__PURE__*/jsx_runtime_.jsx("path", {
      d: "M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"
    })
  });
};

/* harmony default export */ const trash = (Trash);
// EXTERNAL MODULE: ./src/components/ui/button.tsx
var ui_button = __webpack_require__(7993);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./src/components/ui/cards/confirmation.tsx







const Confirmation = ({
  onCancel,
  onDelete,
  icon,
  title = 'button-delete',
  description = 'delete-item-confirm',
  cancelBtnText = 'button-cancel',
  deleteBtnText = 'button-delete',
  cancelBtnClassName,
  deleteBtnClassName,
  cancelBtnLoading,
  deleteBtnLoading
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "p-4 pb-6 bg-light m-auto max-w-sm w-full rounded-md md:rounded-xl sm:w-[24rem]",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "w-full h-full text-center",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex h-full flex-col justify-between",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "mt-4 m-auto text-accent",
          children: icon ? icon : /*#__PURE__*/jsx_runtime_.jsx(trash, {
            className: "w-12 h-12"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-heading text-xl font-bold mt-4",
          children: t(title)
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-body-dark dark:text-muted leading-relaxed py-2 px-6",
          children: t(description)
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "flex items-center justify-between space-s-4 w-full mt-8",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-1/2",
            children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              onClick: onCancel,
              loading: cancelBtnLoading,
              disabled: cancelBtnLoading,
              variant: "custom",
              className: external_classnames_default()('w-full py-2 px-4 bg-accent focus:outline-none hover:bg-accent-hover focus:bg-accent-hover text-light transition ease-in duration-200 text-center text-base font-semibold rounded shadow-md', cancelBtnClassName),
              children: t(cancelBtnText)
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "w-1/2",
            children: /*#__PURE__*/jsx_runtime_.jsx(ui_button/* default */.Z, {
              onClick: onDelete,
              loading: deleteBtnLoading,
              disabled: deleteBtnLoading,
              variant: "custom",
              className: external_classnames_default()('w-full py-2 px-4 bg-red-600 focus:outline-none hover:bg-red-700 focus:bg-red-700 text-light transition ease-in duration-200 text-center text-base font-semibold rounded shadow-md', deleteBtnClassName),
              children: t(deleteBtnText)
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const confirmation = (Confirmation);
// EXTERNAL MODULE: ./src/components/ui/modal/modal.context.tsx
var modal_context = __webpack_require__(4652);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
// EXTERNAL MODULE: external "react-toastify"
var external_react_toastify_ = __webpack_require__(2034);
// EXTERNAL MODULE: ./src/framework/rest/customer/customer.service.ts
var customer_service = __webpack_require__(5353);
;// CONCATENATED MODULE: ./src/framework/rest/address/address.query.ts



const useDeleteAddressMutation = () => {
  const queryClient = (0,external_react_query_.useQueryClient)();
  return (0,external_react_query_.useMutation)(input => customer_service/* CustomerService.deleteAddress */.v.deleteAddress(input), {
    onSuccess: data => {
      if (data.success) {
        external_react_toastify_.toast.success(data.message);
      } else {
        external_react_toastify_.toast.error(data.message);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries('me');
    }
  });
};
;// CONCATENATED MODULE: ./src/framework/rest/address/delete-view.tsx





const AddressDeleteView = () => {
  const {
    data
  } = (0,modal_context/* useModalState */.X9)();
  const {
    closeModal
  } = (0,modal_context/* useModalAction */.SO)();
  const {
    mutate: deleteAddressById,
    isLoading
  } = useDeleteAddressMutation();

  function handleDelete() {
    deleteAddressById({
      id: data === null || data === void 0 ? void 0 : data.addressId
    });
    closeModal();
  }

  return /*#__PURE__*/jsx_runtime_.jsx(confirmation, {
    onCancel: closeModal,
    onDelete: handleDelete,
    deleteBtnLoading: isLoading
  });
};

/* harmony default export */ const delete_view = (AddressDeleteView);

/***/ }),

/***/ 5353:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v": () => (/* binding */ CustomerService)
/* harmony export */ });
/* harmony import */ var _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3857);
/* harmony import */ var _framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(874);



class Customer extends _framework_utils_base_service__WEBPACK_IMPORTED_MODULE_0__/* .BaseService */ .b {
  updateCustomer(input) {
    return this.http.put(this.basePath + '/' + input.id, input).then(res => res.data);
  }

  contact(input) {
    return this.http.post(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.CONTACT */ .P.CONTACT, input).then(res => res.data);
  }

  deleteAddress({
    id
  }) {
    return this.http.delete(`${_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.ADDRESS */ .P.ADDRESS}/${id}`).then(res => res.data);
  }

}

const CustomerService = new Customer(_framework_utils_endpoints__WEBPACK_IMPORTED_MODULE_1__/* .API_ENDPOINTS.CUSTOMERS */ .P.CUSTOMERS);

/***/ })

};
;