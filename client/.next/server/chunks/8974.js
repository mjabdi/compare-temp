"use strict";
exports.id = 8974;
exports.ids = [8974];
exports.modules = {

/***/ 8974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ JoinButton)
/* harmony export */ });
/* harmony import */ var _components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4652);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8475);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_1__);


function JoinButton() {
  const {
    t
  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)('common');
  const {
    openModal
  } = (0,_components_ui_modal_modal_context__WEBPACK_IMPORTED_MODULE_0__/* .useModalAction */ .SO)();

  function handleJoin() {
    return openModal('LOGIN_VIEW');
  }

  return null // <Button className="font-semibold" size="small" onClick={handleJoin}>
  //   {t('join-button')}
  // </Button>
  ;
}

/***/ })

};
;