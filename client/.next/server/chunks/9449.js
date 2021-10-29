"use strict";
exports.id = 9449;
exports.ids = [9449];
exports.modules = {

/***/ 9449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ filter_category_grid)
});

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/ui/not-found.tsx
var not_found = __webpack_require__(3229);
// EXTERNAL MODULE: ./src/components/ui/loaders/categories-loader.tsx
var categories_loader = __webpack_require__(2005);
// EXTERNAL MODULE: ./src/components/ui/image.tsx
var ui_image = __webpack_require__(6126);
// EXTERNAL MODULE: ./src/lib/placeholders.tsx + 4 modules
var placeholders = __webpack_require__(1219);
// EXTERNAL MODULE: ./src/lib/format-string.tsx
var format_string = __webpack_require__(858);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/ui/category-card.tsx







const CategoryCard = ({
  item,
  onClick
}) => {
  var _item$children, _item$children2, _item$children3, _item$image$original, _item$image, _item$name;

  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "relative w-full h-80 rounded-lg p-8 bg-light shadow-downfall-sm transition-shadow hover:shadow-downfall-lg group",
    onClick: onClick,
    role: "button",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "flex flex-col flex-1 h-full relative z-10",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-heading font-semibold text-lg mb-1",
        children: item.name
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: "text-body text-s",
        children: item !== null && item !== void 0 && (_item$children = item.children) !== null && _item$children !== void 0 && _item$children.length ? `${item === null || item === void 0 ? void 0 : (_item$children2 = item.children) === null || _item$children2 === void 0 ? void 0 : _item$children2.length} ${(item === null || item === void 0 ? void 0 : (_item$children3 = item.children) === null || _item$children3 === void 0 ? void 0 : _item$children3.length) > 1 ? t('text-categories') : t('text-category')}` : (0,format_string/* formatString */.U)(item === null || item === void 0 ? void 0 : item.products_count, 'Item')
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "mt-auto flex text-accent font-semibold text-sm underline opacity-100 lg:opacity-0 transition-opacity group-hover:opacity-100",
        children: t('text-view-more')
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "absolute bottom-0 end-0 w-full h-full rounded-lg overflow-hidden",
      children: /*#__PURE__*/jsx_runtime_.jsx(ui_image/* Image */.E, {
        className: "w-full h-full",
        src: (_item$image$original = item === null || item === void 0 ? void 0 : (_item$image = item.image) === null || _item$image === void 0 ? void 0 : _item$image.original) !== null && _item$image$original !== void 0 ? _item$image$original : placeholders/* productPlaceholder */.Hb,
        alt: (_item$name = item === null || item === void 0 ? void 0 : item.name) !== null && _item$name !== void 0 ? _item$name : '',
        layout: "responsive",
        width: 432,
        height: 336
      })
    })]
  });
};

/* harmony default export */ const category_card = (CategoryCard);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./src/assets/arrow-forward.png
/* harmony default export */ const arrow_forward = ({"src":"/_next/static/image/src/assets/arrow-forward.a0932ad04a4d1673fe4e0153e72bb2ec.png","height":32,"width":18,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAICAMAAAAGL8UJAAAAMFBMVEXt7e3w8PDy8vLh4eHV1dXm5ubn5+fs7Ozr6+va2trc3Nz39/fv7+/k5OTu7u7z8/Msao+fAAAADnRSTlMBYSGMDMLrVZdB9MPXsbS1pnsAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAqSURBVAiZBcEJAoAgCACwgXZoBf//bZvYC/M9J7I/iBq4+ibrwdHJqOAHEmEAwKN3a1MAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/components/ui/breadcrumb-button.tsx






const BreadcrumbButton = ({
  text,
  image,
  onClick
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
  className: external_classnames_default()('h-14 px-7 text-base font-semibold text-heading bg-light relative rounded-lg transition-shadow shadow-downfall-xs hover:shadow-downfall-sm', {
    'pe-24': image
  }),
  onClick: onClick,
  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
    className: "whitespace-nowrap",
    children: text
  }), image && /*#__PURE__*/jsx_runtime_.jsx("span", {
    className: "absolute bottom-0 end-0 w-14 h-full rounded-lg rounded-s-none overflow-hidden",
    children: /*#__PURE__*/jsx_runtime_.jsx(ui_image/* Image */.E, {
      className: "w-full h-full",
      src: image !== null && image !== void 0 ? image : placeholders/* productPlaceholder */.Hb,
      alt: text !== null && text !== void 0 ? text : '',
      layout: "responsive",
      width: 60,
      height: 60
    })
  })]
});

/* harmony default export */ const breadcrumb_button = (BreadcrumbButton);
;// CONCATENATED MODULE: ./src/components/ui/category-breadcrumb-card.tsx
const _excluded = ["category"],
      _excluded2 = ["category"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }










const BreadcrumbWithIndicator = ({
  text,
  image,
  onClick
}) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
  children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
    className: "relative w-[18px] h-[32px] flex-shrink-0",
    children: /*#__PURE__*/jsx_runtime_.jsx(ui_image/* Image */.E, {
      className: "w-full h-full",
      src: arrow_forward,
      alt: ">",
      layout: "responsive",
      width: 18,
      height: 32
    })
  }), /*#__PURE__*/jsx_runtime_.jsx(breadcrumb_button, {
    text: text,
    image: image,
    onClick: onClick
  })]
});

const CategoryBreadcrumb = ({
  categories
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const router = (0,router_.useRouter)();
  const {
    pathname,
    query
  } = router;

  const resetCategoryClick = () => {
    const {
      category
    } = query,
          rest = _objectWithoutProperties(query, _excluded);

    router.push({
      pathname,
      query: _objectSpread({}, rest)
    }, undefined, {
      scroll: false
    });
  };

  const onCategoryClick = slug => {
    const {
      category
    } = query,
          rest = _objectWithoutProperties(query, _excluded2);

    router.push({
      pathname,
      query: _objectSpread(_objectSpread({}, rest), {}, {
        category: slug
      })
    }, undefined, {
      scroll: false
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "flex items-center space-s-5",
    children: [/*#__PURE__*/jsx_runtime_.jsx(breadcrumb_button, {
      text: t('text-all-categories'),
      onClick: resetCategoryClick
    }), categories === null || categories === void 0 ? void 0 : categories.map(category => {
      var _category$image;

      return /*#__PURE__*/jsx_runtime_.jsx(BreadcrumbWithIndicator, {
        text: category === null || category === void 0 ? void 0 : category.name,
        image: category === null || category === void 0 ? void 0 : (_category$image = category.image) === null || _category$image === void 0 ? void 0 : _category$image.original,
        onClick: () => onCategoryClick(category === null || category === void 0 ? void 0 : category.slug)
      }, category === null || category === void 0 ? void 0 : category.slug);
    })]
  });
};

/* harmony default export */ const category_breadcrumb_card = (CategoryBreadcrumb);
// EXTERNAL MODULE: ./src/components/ui/scrollbar.tsx
var scrollbar = __webpack_require__(1859);
// EXTERNAL MODULE: external "lodash/isEmpty"
var isEmpty_ = __webpack_require__(8718);
var isEmpty_default = /*#__PURE__*/__webpack_require__.n(isEmpty_);
;// CONCATENATED MODULE: ./src/lib/find-nested-data.tsx
const findNestedData = (array, query, nestingKey) => array === null || array === void 0 ? void 0 : array.reduce((prev, curr) => {
  if (prev) return prev;
  if (curr.slug === query) return curr;
  if (curr[nestingKey]) return findNestedData(curr[nestingKey], query, nestingKey);
}, null);

/* harmony default export */ const find_nested_data = (findNestedData);
// EXTERNAL MODULE: ./src/framework/rest/products/products.tsx + 1 modules
var products = __webpack_require__(1225);
;// CONCATENATED MODULE: ./src/components/categories/filter-category-grid.tsx
function filter_category_grid_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function filter_category_grid_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { filter_category_grid_ownKeys(Object(source), true).forEach(function (key) { filter_category_grid_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { filter_category_grid_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function filter_category_grid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















function findParentCategories(treeItems, parentId = null, link = 'id') {
  let itemList = [];

  if (parentId) {
    const parentItem = treeItems === null || treeItems === void 0 ? void 0 : treeItems.find(item => item[link] === parentId);
    itemList = parentItem !== null && parentItem !== void 0 && parentItem.parent_id ? [...findParentCategories(treeItems, parentItem.parent_id), parentItem, ...itemList] : [parentItem, ...itemList];
  }

  return itemList;
}

const FilterCategoryGrid = ({
  notFound,
  categories,
  loading
}) => {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const router = (0,router_.useRouter)();
  const {
    pathname,
    query
  } = router;
  const selectedCategory = Boolean(query.category) && find_nested_data(categories, query.category, 'children');
  const parentCategories = findParentCategories(categories, selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.parent_id);
  const renderCategories = Boolean(selectedCategory) ? selectedCategory === null || selectedCategory === void 0 ? void 0 : selectedCategory.children : categories === null || categories === void 0 ? void 0 : categories.filter(category => !(category !== null && category !== void 0 && category.parent_id));

  const onCategoryClick = slug => {
    router.push({
      pathname,
      query: filter_category_grid_objectSpread(filter_category_grid_objectSpread({}, query), {}, {
        category: slug
      })
    }, undefined, {
      scroll: false
    });
  };

  if (loading) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "hidden xl:block",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "w-72 mt-8 px-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(categories_loader/* default */.Z, {})
      })
    });
  }

  if (notFound) {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "bg-light",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "min-h-full p-5 md:p-8 lg:p-12 2xl:p-16",
        children: /*#__PURE__*/jsx_runtime_.jsx(not_found/* default */.Z, {
          text: "text-no-category",
          className: "h-96"
        })
      })
    });
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "bg-light",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pt-3 md:pt-6 lg:pt-10 2xl:pt-14 px-3 md:px-6 lg:px-10 2xl:px-14",
      children: query !== null && query !== void 0 && query.category ? /*#__PURE__*/jsx_runtime_.jsx(scrollbar/* default */.Z, {
        className: "w-full",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: external_classnames_default()('pt-2 px-2 pb-7', {
            'border-b border-dashed divide-dashed border-gray-200 mb-8': query === null || query === void 0 ? void 0 : query.category
          }),
          children: /*#__PURE__*/jsx_runtime_.jsx(category_breadcrumb_card, {
            categories: [...parentCategories, selectedCategory]
          })
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "text-heading font-semibold text-2xl mb-8 px-2 pt-2",
        children: t('text-all-categories')
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "p-5 md:p-8 lg:p-12 2xl:p-16 !pt-0",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-6 gap-6",
        children: Array.isArray(renderCategories) && (renderCategories === null || renderCategories === void 0 ? void 0 : renderCategories.map((item, idx) => /*#__PURE__*/jsx_runtime_.jsx(category_card, {
          item: item,
          onClick: () => onCategoryClick(item === null || item === void 0 ? void 0 : item.slug)
        }, idx)))
      }), isEmpty_default()(renderCategories) && /*#__PURE__*/jsx_runtime_.jsx(products/* default */.Z, {
        layout: "minimal"
      })]
    })]
  });
};

/* harmony default export */ const filter_category_grid = (FilterCategoryGrid);

/***/ }),

/***/ 858:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ formatString)
/* harmony export */ });
function formatString(count, string) {
  if (!count) return `${count} ${string}`;
  return count > 1 ? `${count} ${string}s` : `${count} ${string}`;
}

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