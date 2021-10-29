"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7640],{77640:function(e,t,r){r.r(t),r.d(t,{default:function(){return q}});var n=r(94386),o=r(4652),s=r(21446),i=r(1717),c=r(38566),a=r(27378),l=r(31655),u=r(60071),d=r(44502),m=r.n(d),b=r(7993),f=r(95013),p=r(36838),x=(r(47559),r(50509)),j=r(39338),v=r(78879),g=r(34806),h=r(5549),O=r(43883),y=r(96509),w=r(93451),P=r(72479),S=r(24246);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=P.Ry().shape({email:P.Z_().email("error-email-format").required("error-email-required"),name:P.Z_().required("error-name-required"),code:P.Z_().required("error-code-required")}),C=function(e){var t=e.onSubmit,r=e.isContactExist,n=e.loading,s=(0,u.$)("common").t,i=(0,o.SO)().closeModal;return(0,S.jsx)("div",{className:"space-y-5 border border-gray-200 rounded p-5",children:(0,S.jsx)(y.l,{onSubmit:t,validationSchema:k,children:function(e){var t,o,c=e.register,a=e.control,l=e.formState.errors;return(0,S.jsxs)(S.Fragment,{children:[!r&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(h.Z,Z(Z({label:s("text-email")},c("email")),{},{type:"email",variant:"outline",className:"mb-5",error:s(null===(t=l.email)||void 0===t?void 0:t.message)})),(0,S.jsx)(h.Z,Z(Z({label:s("text-name")},c("name")),{},{variant:"outline",className:"mb-5",error:s(null===(o=l.name)||void 0===o?void 0:o.message)}))]}),(0,S.jsxs)("div",{children:[(0,S.jsx)(O.Z,{children:s("text-otp-code")}),(0,S.jsx)(w.Qr,{control:a,render:function(e){var t=e.field,r=t.onChange,n=(t.onBlur,t.value);return(0,S.jsx)(g.Z,{value:n,onChange:r,numInputs:6,separator:(0,S.jsx)("span",{className:"hidden sm:inline-block sm:mx-2",children:"-"}),containerStyle:"justify-center space-x-2 sm:space-x-0",inputStyle:"flex items-center justify-center !w-full sm:!w-11 appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base rounded focus:border-accent h-12",disabledStyle:"!bg-gray-100"})},name:"code",defaultValue:""})]}),(0,S.jsxs)("div",{className:"grid grid-cols-2 gap-5",children:[(0,S.jsx)(b.Z,{variant:"outline",onClick:i,children:s("text-cancel")}),(0,S.jsx)(b.Z,{loading:n,disabled:n,children:s("text-verify-code")})]})]})}})})};function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=function(){var e=(0,a.useState)(""),t=e[0],r=e[1],n=(0,a.useState)(""),s=n[0],i=n[1],d=(0,a.useState)(""),g=d[0],h=d[1],O=(0,a.useState)(!1),y=O[0],w=O[1],P=(0,a.useState)(!1),N=P[0],Z=P[1],k=(0,j.KO)(v.O),_=(0,c.Z)(k,2),D=(_[0],_[1]),q=(0,u.$)("common").t,M=(0,o.SO)().closeModal,I=(0,p.MZ)(),L=I.mutate,$=I.isLoading,F=(0,p._0)(),G=F.mutate,V=F.isLoading;return(0,S.jsxs)("div",{className:"mt-4",children:[t&&(0,S.jsx)(f.Z,{variant:"error",message:q(t),className:"mt-4",closeable:!0,onClose:function(){return r("")}}),y?(0,S.jsx)(C,{onSubmit:function(e){g&&G(E(E({},e),{},{phone_number:g,otp_id:s}),{onSuccess:function(e){var t;null!==e&&void 0!==e&&e.token&&null!==e&&void 0!==e&&null!==(t=e.permissions)&&void 0!==t&&t.length&&(l.Z.set(x.UA,e.token),D(!0),M()),null!==e&&void 0!==e&&e.token||r("text-otp-verify-failed")},onError:function(e){r(e.message)}})},loading:V,isContactExist:N}):(0,S.jsxs)("div",{className:"flex items-center",children:[(0,S.jsx)(m(),{country:"us",value:g,onChange:function(e){return h("+".concat(e))},inputClass:"!p-0 !pe-4 !ps-14 !flex !items-center !w-full !appearance-none !transition !duration-300 !ease-in-out !text-heading !text-sm focus:!outline-none focus:!ring-0 !border !border-border-base !border-e-0 !rounded !rounded-e-none focus:!border-accent !h-12",dropdownClass:"focus:!ring-0 !border !border-border-base !shadow-350"}),(0,S.jsx)(b.Z,{loading:$,disabled:$,onClick:function(){L({phone_number:g},{onSuccess:function(e){var t;(null!==e&&void 0!==e&&e.success&&(Z(null===e||void 0===e?void 0:e.is_contact_exist),w(!0),i(null===e||void 0===e?void 0:e.id)),null!==e&&void 0!==e&&e.success)||r(null===e||void 0===e||null===(t=e.sendOtpCode)||void 0===t?void 0:t.message)},onError:function(e){r(e.message)}})},className:"!rounded-s-none",children:q("text-send-otp")})]})]})},q=function(){var e=(0,s.$G)("common").t,t=(0,o.SO)().openModal;return(0,S.jsxs)("div",{className:"py-6 px-5 sm:p-8 bg-light w-screen md:max-w-md h-screen md:h-auto flex flex-col justify-center md:rounded-xl",children:[(0,S.jsx)("div",{className:"flex justify-center",children:(0,S.jsx)(n.Z,{})}),(0,S.jsx)("p",{className:"text-center text-sm md:text-base leading-relaxed text-body mt-4 sm:mt-5 mb-7 sm:mb-10",children:e("otp-login-helper")}),(0,S.jsx)(D,{}),(0,S.jsxs)("div",{className:"flex flex-col items-center justify-center relative text-sm text-heading mt-9 sm:mt-11 mb-7 sm:mb-8",children:[(0,S.jsx)("hr",{className:"w-full"}),(0,S.jsx)("span",{className:"absolute start-2/4 -top-2.5 px-2 -ms-4 bg-light",children:e("text-or")})]}),(0,S.jsxs)("div",{className:"text-sm sm:text-base text-body text-center",children:[e("text-back-to")," ",(0,S.jsx)("button",{onClick:function(){return t("LOGIN_VIEW")},className:"ms-1 underline text-accent font-semibold transition-colors duration-200 focus:outline-none hover:text-accent-hover focus:text-accent-hover hover:no-underline focus:no-underline",children:e("text-login")})]})]})}},43883:function(e,t,r){var n=r(1717),o=r(31750),s=r(60042),i=r.n(s),c=r(24246),a=["className"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.Z=function(e){var t=e.className,r=(0,o.Z)(e,a);return(0,c.jsx)("label",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({className:i()("block text-body-dark font-semibold text-sm leading-none mb-3",t)},r))}}}]);