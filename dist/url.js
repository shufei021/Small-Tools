!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.url=t():e.url=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";function r(){}n.r(t),n.d(t,"serialize",(function(){return o})),n.d(t,"getUrlParms",(function(){return u}));var o=function(e,t){return Object.keys(t).reduce((function(n,r){return n+(n===e?"?":"&")+"".concat(r,"=").concat(t[r])}),e)},u=function(e){return(e||location.href).includes("?")?(e||location.href).split("?")[1].match(/([^&=]*)=([^&]*)/g).reduce((function(e,t){return e[t.split("=")[0]]=t.split("=")[1],e}),{}):{}};r.prototype={serialize:o,getUrlParms:u},t.default=new r}]).default}));
//# sourceMappingURL=url.js.map