!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("React"));else if("function"==typeof define&&define.amd)define(["React"],t);else{var r=t("object"==typeof exports?require("React"):e.React);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(t.s=7)}([function(t,r){t.exports=e},function(e,t,r){"use strict";var n=r(4);Object.prototype.hasOwnProperty.call(n,"a")&&Object.defineProperty(t,"a",{configurable:!1,enumerable:!0,get:function(){return n.a}})},,,function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=r(0),i=c&&c.__esModule?function(){return c["default"]}:function(){return c};Object.defineProperty(i,"a",{get:i});var a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=function(e){function t(){return n(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),a(t,[{key:"render",value:function(){return i.a.createElement("h1",null,"Component 1 - h1")}}]),t}(i.a.Component);t.a=f},,,function(e,t,r){"use strict";var n=r(1);Object.prototype.hasOwnProperty.call(n,"a")&&Object.defineProperty(t,"Header",{configurable:!1,enumerable:!0,get:function(){return n.a}})}])});