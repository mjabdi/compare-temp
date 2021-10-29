"use strict";
exports.id = 7534;
exports.ids = [7534];
exports.modules = {

/***/ 7534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ScheduleGrid": () => (/* binding */ ScheduleGrid),
  "default": () => (/* binding */ schedule_grid)
});

// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(4025);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/checkout/schedule/schedule-card.tsx




const ScheduleCard = ({
  checked,
  schedule
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
  className: external_classnames_default()("relative p-4 rounded border cursor-pointer group hover:border-accent", {
    "border-accent shadow-sm": checked,
    "bg-gray-100 border-transparent": !checked
  }),
  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
    className: "text-sm text-heading font-semibold block mb-2",
    children: schedule.title
  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
    className: "text-sm text-heading block",
    children: schedule.description
  })]
});

/* harmony default export */ const schedule_card = (ScheduleCard);
// EXTERNAL MODULE: ./src/store/checkout.ts
var checkout = __webpack_require__(7900);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/components/settings/settings.context.tsx
var settings_context = __webpack_require__(7438);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/components/checkout/schedule/schedule-grid.tsx









const ScheduleGrid = ({
  label,
  className,
  count
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    deliveryTime: schedules
  } = (0,settings_context/* useSettings */.rV)();
  const [selectedSchedule, setSchedule] = (0,external_jotai_.useAtom)(checkout/* deliveryTimeAtom */.Gh);
  (0,external_react_.useEffect)(() => {
    setSchedule(schedules[0]); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-between mb-5 md:mb-8",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center space-s-3 md:space-s-4",
        children: [count && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "rounded-full w-8 h-8 bg-accent flex items-center justify-center text-base lg:text-xl text-light",
          children: count
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-lg lg:text-xl text-heading capitalize",
          children: label
        })]
      })
    }), schedules && schedules !== null && schedules !== void 0 && schedules.length ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(react_.RadioGroup, {
      value: selectedSchedule,
      onChange: setSchedule,
      children: [/*#__PURE__*/jsx_runtime_.jsx(react_.RadioGroup.Label, {
        className: "sr-only",
        children: label
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
        children: schedules === null || schedules === void 0 ? void 0 : schedules.map((schedule, idx) => /*#__PURE__*/jsx_runtime_.jsx(react_.RadioGroup.Option, {
          value: schedule,
          children: ({
            checked
          }) => /*#__PURE__*/jsx_runtime_.jsx(schedule_card, {
            checked: checked,
            schedule: schedule
          })
        }, idx))
      })]
    }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
      children: /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "relative px-5 py-6 text-base text-center bg-gray-100 rounded border border-border-200",
        children: t('text-no-delivery-time-found')
      })
    })]
  });
};
/* harmony default export */ const schedule_grid = (ScheduleGrid);

/***/ })

};
;