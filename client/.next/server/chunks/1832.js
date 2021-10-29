"use strict";
exports.id = 1832;
exports.ids = [1832];
exports.modules = {

/***/ 1832:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sticky_sidebar_list_categories)
});

// EXTERNAL MODULE: ./src/components/ui/scrollbar.tsx
var scrollbar = __webpack_require__(1859);
// EXTERNAL MODULE: ./src/components/ui/not-found.tsx
var not_found = __webpack_require__(3229);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/expand-less-icon.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ExpandLessIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M19 9l-7 7-7-7"
  })
}));
;// CONCATENATED MODULE: ./src/components/icons/expand-more-icon.tsx
function expand_more_icon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function expand_more_icon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { expand_more_icon_ownKeys(Object(source), true).forEach(function (key) { expand_more_icon_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { expand_more_icon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function expand_more_icon_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const ExpandMoreIcon = props => /*#__PURE__*/jsx_runtime_.jsx("svg", expand_more_icon_objectSpread(expand_more_icon_objectSpread({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, props), {}, {
  children: /*#__PURE__*/jsx_runtime_.jsx("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M5 15l7-7 7 7"
  })
}));
// EXTERNAL MODULE: ./src/lib/get-icon.tsx
var get_icon = __webpack_require__(8473);
// EXTERNAL MODULE: ./src/components/icons/category/index.tsx + 41 modules
var category = __webpack_require__(8120);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./src/store/drawer-atom.ts
var drawer_atom = __webpack_require__(5936);
// EXTERNAL MODULE: external "jotai"
var external_jotai_ = __webpack_require__(8250);
;// CONCATENATED MODULE: ./src/components/ui/tree-menu.tsx
function tree_menu_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function tree_menu_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { tree_menu_ownKeys(Object(source), true).forEach(function (key) { tree_menu_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { tree_menu_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function tree_menu_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const TreeMenuItem = ({
  className,
  item,
  depth = 0
}) => {
  var _router$query, _item$children;

  const router = (0,router_.useRouter)();
  const active = router === null || router === void 0 ? void 0 : (_router$query = router.query) === null || _router$query === void 0 ? void 0 : _router$query.category;
  const isActive = active === item.slug || (item === null || item === void 0 ? void 0 : (_item$children = item.children) === null || _item$children === void 0 ? void 0 : _item$children.some(_item => _item.slug === active));
  const {
    0: isOpen,
    1: setOpen
  } = (0,external_react_.useState)(isActive);
  (0,external_react_.useEffect)(() => {
    setOpen(isActive);
  }, [isActive]);
  const {
    slug,
    name,
    children: items,
    icon
  } = item;
  const [{
    display
  }, setDrawerState] = (0,external_jotai_.useAtom)(drawer_atom/* drawerAtom */.P);

  function toggleCollapse() {
    setOpen(prevValue => !prevValue);
  }

  function onClick() {
    const {
      pathname,
      query
    } = router;

    const navigate = () => router.push({
      pathname,
      query: tree_menu_objectSpread(tree_menu_objectSpread({}, query), {}, {
        category: slug
      })
    }, undefined, {
      scroll: false
    });

    if (Array.isArray(items) && !!items.length) {
      toggleCollapse();
      navigate();
    } else {
      navigate();
      display && setDrawerState({
        display: false,
        view: ''
      });
    }
  }

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !isOpen ? /*#__PURE__*/jsx_runtime_.jsx(ExpandLessIcon, {
      className: "w-3 h-3"
    }) : /*#__PURE__*/jsx_runtime_.jsx(ExpandMoreIcon, {
      className: "w-3 h-3"
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.li, {
      initial: false,
      animate: {
        backgroundColor: '#ffffff'
      },
      onClick: onClick,
      className: "py-1 rounded-md",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        className: external_classnames_default()('flex items-center w-full py-2 text-start outline-none text-body-dark font-semibold  focus:outline-none focus:ring-0 focus:text-accent transition-all ease-in-expo', isOpen ? 'text-accent' : 'text-body-dark', className ? className : 'text-sm'),
        children: [icon && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "flex w-5 h-5 me-4 items-center justify-center",
          children: (0,get_icon/* getIcon */.q)({
            iconList: category,
            iconName: icon,
            className: 'h-full w-full'
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: name
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "ms-auto",
          children: expandIcon
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.AnimatePresence, {
      initial: false,
      children: Array.isArray(items) && isOpen ? /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_framer_motion_.motion.ul, {
          initial: "collapsed",
          animate: "open",
          exit: "collapsed",
          variants: {
            open: {
              opacity: 1,
              height: 'auto'
            },
            collapsed: {
              opacity: 0,
              height: 0
            }
          },
          transition: {
            duration: 0.8,
            ease: [0.04, 0.62, 0.23, 0.98]
          },
          className: "ms-4 text-xs",
          children: items.map(currentItem => {
            const childDepth = depth + 1;
            return /*#__PURE__*/jsx_runtime_.jsx(TreeMenuItem, {
              item: currentItem,
              depth: childDepth,
              className: external_classnames_default()('text-sm text-body ms-5')
            }, `${currentItem.name}${currentItem.slug}`);
          })
        }, "content")
      }) : null
    })]
  });
};

function TreeMenu({
  items,
  className
}) {
  return /*#__PURE__*/jsx_runtime_.jsx("ul", {
    className: external_classnames_default()('text-xs', className),
    children: items === null || items === void 0 ? void 0 : items.map(item => /*#__PURE__*/jsx_runtime_.jsx(TreeMenuItem, {
      item: item
    }, `${item.name}${item.slug}`))
  });
}

/* harmony default export */ const tree_menu = (TreeMenu);
// EXTERNAL MODULE: ./src/components/ui/loaders/categories-loader.tsx
var categories_loader = __webpack_require__(2005);
;// CONCATENATED MODULE: ./src/components/categories/sticky-sidebar-list-categories.tsx






const StickySidebarListCategories = ({
  notFound,
  categories,
  loading,
  className
}) => {
  if (loading) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hidden xl:block",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-72 mt-8 px-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(categories_loader/* default */.Z, {})
      })
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx("aside", {
    className: `lg:sticky lg:top-22 h-full xl:w-72 hidden xl:block bg-light ${className}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "max-h-full overflow-hidden",
      children: /*#__PURE__*/jsx_runtime_.jsx(scrollbar/* default */.Z, {
        className: "w-full max-h-screen",
        style: {
          height: 'calc(100vh - 5.35rem)'
        },
        children: !notFound ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "px-5",
          children: /*#__PURE__*/jsx_runtime_.jsx(tree_menu, {
            items: categories,
            className: "xl:py-8"
          })
        }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "min-h-full w-full pt-6 pb-8 px-9 lg:p-8",
          children: /*#__PURE__*/jsx_runtime_.jsx(not_found/* default */.Z, {
            text: "text-no-category",
            className: "h-96"
          })
        })
      })
    })
  });
};

/* harmony default export */ const sticky_sidebar_list_categories = (StickySidebarListCategories);

/***/ })

};
;