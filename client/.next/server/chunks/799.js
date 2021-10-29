"use strict";
exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 799:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ useUpdateCustomerMutation),
/* harmony export */   "c": () => (/* binding */ useContactMutation)
/* harmony export */ });
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2585);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2034);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5353);




const useUpdateCustomerMutation = () => {
  const queryClient = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();
  return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(input => _customer_service__WEBPACK_IMPORTED_MODULE_3__/* .CustomerService.updateCustomer */ .v.updateCustomer(input), {
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries('me');
    }
  });
};
const useContactMutation = () => {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_0__.useTranslation)('common');
  return (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)(input => _customer_service__WEBPACK_IMPORTED_MODULE_3__/* .CustomerService.contact */ .v.contact(input), {
    onSuccess: data => {
      if (data.success) {
        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.success(t(data.message));
      } else {
        react_toastify__WEBPACK_IMPORTED_MODULE_2__.toast.error(t(data.message));
      }
    }
  });
};

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