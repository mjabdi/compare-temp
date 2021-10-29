"use strict";
exports.id = 4405;
exports.ids = [4405];
exports.modules = {

/***/ 4405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ file_input)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/components/icons/upload-icon.tsx
const _excluded = ["color", "width", "height"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

const UploadIcon = _ref => {
  let {
    color = 'currentColor',
    width = '41px',
    height = '30px'
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/jsx_runtime_.jsx("svg", _objectSpread(_objectSpread({
    xmlns: "http://www.w3.org/2000/svg",
    width: width,
    height: height,
    viewBox: "0 0 40.909 30"
  }, rest), {}, {
    children: /*#__PURE__*/jsx_runtime_.jsx("g", {
      transform: "translate(0 -73.091)",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        "data-name": "Path 2125",
        d: "M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z",
        transform: "translate(0)",
        fill: "#e6e6e6"
      })
    })
  }));
};
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-dropzone"
var external_react_dropzone_ = __webpack_require__(2875);
// EXTERNAL MODULE: ./src/framework/rest/utils/base-service.ts + 2 modules
var base_service = __webpack_require__(3857);
// EXTERNAL MODULE: ./src/framework/rest/utils/endpoints.ts
var endpoints = __webpack_require__(874);
// EXTERNAL MODULE: external "react-query"
var external_react_query_ = __webpack_require__(2585);
;// CONCATENATED MODULE: ./src/framework/rest/upload/upload.query.ts




class UploadService extends base_service/* BaseService */.b {}

const uploadService = new UploadService(endpoints/* API_ENDPOINTS.UPLOAD */.P.UPLOAD);
const useUploadMutation = () => {
  return (0,external_react_query_.useMutation)(input => {
    let formData = new FormData();
    input.forEach(attachment => {
      formData.append('attachment[]', attachment);
    });
    return uploadService.create(formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  });
};
// EXTERNAL MODULE: ./src/components/ui/loaders/spinner/spinner.tsx
var spinner = __webpack_require__(9204);
// EXTERNAL MODULE: external "next-i18next"
var external_next_i18next_ = __webpack_require__(8475);
;// CONCATENATED MODULE: ./src/framework/rest/upload/uploader.tsx
function uploader_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function uploader_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { uploader_ownKeys(Object(source), true).forEach(function (key) { uploader_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { uploader_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function uploader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const getPreviewImage = value => {
  let images = [];

  if (value) {
    images = Array.isArray(value) ? value.map(({
      thumbnail
    }) => ({
      preview: thumbnail
    })) : [{
      preview: value.thumbnail
    }];
  }

  return images;
};

function Uploader({
  onChange,
  value,
  name,
  onBlur,
  multiple = false
}) {
  const {
    t
  } = (0,external_next_i18next_.useTranslation)('common');
  const {
    0: files,
    1: setFiles
  } = (0,external_react_.useState)(getPreviewImage(value));
  const {
    mutate: upload,
    isLoading: loading
  } = useUploadMutation();
  const onDrop = (0,external_react_.useCallback)(async acceptedFiles => {
    upload(acceptedFiles, // it will be an array of uploaded attachments
    {
      onSuccess: data => {
        if (onChange) {
          onChange(data);
        }
      }
    });
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, [onChange, upload]);
  const {
    getRootProps,
    getInputProps
  } = (0,external_react_dropzone_.useDropzone)({
    accept: 'image/*',
    multiple,
    onDrop
  });
  const thumbs = files.map((file, idx) => /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "inline-flex flex-col overflow-hidden border border-border-100 rounded mt-2 me-2 relative",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "flex items-center justify-center min-w-0 w-16 h-16 overflow-hidden",
      children: /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: file.preview,
        alt: file === null || file === void 0 ? void 0 : file.name
      })
    })
  }, idx));
  (0,external_react_.useEffect)(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("section", {
    className: "upload",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", uploader_objectSpread(uploader_objectSpread({}, getRootProps({
      className: 'border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none'
    })), {}, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", uploader_objectSpread({}, getInputProps({
        name,
        onBlur
      }))), /*#__PURE__*/jsx_runtime_.jsx(UploadIcon, {
        className: "text-muted-light"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "text-body text-sm mt-4 text-center",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-accent font-semibold",
          children: t('text-upload-highlight')
        }), ' ', t('text-upload-message'), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "text-xs text-body",
          children: t('text-img-format')
        })]
      })]
    })), (!!thumbs.length || loading) && /*#__PURE__*/(0,jsx_runtime_.jsxs)("aside", {
      className: "flex flex-wrap mt-2",
      children: [!!thumbs.length && thumbs, loading && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "h-16 flex items-center mt-2 ms-2",
        children: /*#__PURE__*/jsx_runtime_.jsx(spinner/* default */.Z, {
          text: t('text-loading'),
          simple: true,
          className: "w-6 h-6"
        })
      })]
    })]
  });
}
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
;// CONCATENATED MODULE: ./src/components/ui/forms/file-input.tsx
const file_input_excluded = ["ref"];

function file_input_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function file_input_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { file_input_ownKeys(Object(source), true).forEach(function (key) { file_input_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { file_input_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function file_input_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function file_input_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = file_input_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function file_input_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const FileInput = ({
  control,
  name,
  multiple
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_hook_form_.Controller, {
    control: control,
    name: name,
    defaultValue: [],
    render: _ref => {
      let {
        field: {
          ref
        }
      } = _ref,
          rest = file_input_objectWithoutProperties(_ref.field, file_input_excluded);

      return /*#__PURE__*/jsx_runtime_.jsx(Uploader, file_input_objectSpread(file_input_objectSpread({}, rest), {}, {
        multiple: multiple
      }));
    }
  });
};

/* harmony default export */ const file_input = (FileInput);

/***/ })

};
;