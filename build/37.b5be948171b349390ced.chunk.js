(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"5646978b20792fc2b0bc":function(t,e,r){"use strict";r.r(e);var n=r("8af190b70a6bc55c6f1b"),o=r("d7dd51e1bf6bfc2c9c3d"),i=r("a28fc3c963a1d4d1a2e5"),a=r("ab4cb61bcb2dc161defb"),c=r("adc20f99e57c573c589c"),u=r("d95b0cf107403b178365"),l=r("ea5a8737dcc1e62b0258"),s=r("a444b8d423fb8737d1fa"),f=r("54f683fcda7806277002"),p="app/BtcPrice/GET_BTC_PRICE_REQUEST",h="app/BtcPrice/GET_BTC_PRICE_FAILURE",y=Object(f.fromJS)({error:null,requesting:!1,success:!1,btcPriceList:{dataList:[],currentPage:1,totalItems:0}});var d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return t.merge({btcPriceList:{dataList:[],currentPage:1,totalItems:0},error:"",success:!1,requesting:!0});case"app/BtcPrice/GET_BTC_PRICE_SUCCESS":return t.merge({btcPriceList:{dataList:e.response.data,currentPage:e.response.pagination.currentPage,totalItems:e.response.pagination.totalItems},error:"",success:!0,requesting:!1});case h:return t.merge({error:"",success:!1,requesting:!0});default:return t}},b=function(t){return t.get("btcPrice",y)},v=function(){return Object(i.a)(b,(function(t){return t.toJS()}))},g=r("3ad3c1378076e862aab0"),m=r("6c68d13fe9e3e77d8fc4"),w=r("8636a5b0e6ac43ae8b4d"),O=r("371a6f90cf4b090759be");var j=Object(O.a)(p,"payload"),P=Object(O.a)("app/BtcPrice/GET_BTC_PRICE_SUCCESS","response"),E=Object(O.a)(h,"error");Object(O.a)("app/BtcPrice/CLEAR_STATE");function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function S(){S=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new _(o||[]);return n(a,"_invoke",{value:O(t,r,c)}),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function p(){}function h(){}function y(){}var d={};u(d,i,(function(){return this}));var b=Object.getPrototypeOf,v=b&&b(b(x([])));v&&v!==e&&r.call(v,i)&&(d=v);var g=y.prototype=p.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var o;n(this,"_invoke",{value:function(n,i){function a(){return new e((function(o,a){!function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==L(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}(n,i,o,a)}))}return o=o?o.then(a,a):a()}})}function O(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function x(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:k}}function k(){return{value:void 0,done:!0}}return h.prototype=y,n(g,"constructor",{value:y,configurable:!0}),n(y,"constructor",{value:h,configurable:!0}),h.displayName=u(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,c,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},m(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(g),u(g,c,"Generator"),u(g,i,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=x,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},t}var _,x,k,C,I,T,A,N,G=S().mark(R),B=S().mark(q);function R(t){var e,r,n;return S().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e=t.payload,r=e.currentpage,n=e.perpage,o.next=3,Object(m.d)(w.a.get("https://btctransferwallet.com/api/get-coins-list?currentpage=".concat(r,"&perpage=").concat(n,"&currency=usd&pricechangepercent"),P,E));case 3:return o.next=5,Object(m.g)([g.LOCATION_CHANGE,h]);case 5:case"end":return o.stop()}}),G)}function q(){return S().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.h)(p,R);case 2:case"end":return t.stop()}}),B)}function D(t){return(D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e,r,n){N||(N="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=t&&t.defaultProps,i=arguments.length-3;if(e||0===i||(e={children:void 0}),1===i)e.children=n;else if(i>1){for(var a=new Array(i),c=0;c<i;c++)a[c]=arguments[c+3];e.children=a}if(e&&o)for(var u in o)void 0===e[u]&&(e[u]=o[u]);else e||(e=o||{});return{$$typeof:N,type:t,key:void 0===r?null:""+r,ref:null,props:e,_owner:null}}function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function U(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){$(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function $(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==D(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===D(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function J(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return H(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var Y=Object(i.b)({btcPrice:v(),errorMsg:Object(i.a)(b,(function(t){return t.get("error")})),isRequesting:Object(i.a)(b,(function(t){return t.get("requesting")})),btcPriceList:Object(i.a)(b,(function(t){return t.get("btcPriceList")}))});var Q=Object(o.connect)(Y,(function(t){return{dispatch:t,getBtcPriceRequest:function(e){return t(j(e))}}})),V=Object(u.a)({key:"btcPrice",reducer:d}),z=Object(c.a)({key:"btcPrice",saga:q});e.default=Object(a.compose)(V,z,Q)((function(t){t.errorMsg;var e=t.btcPriceList,r=t.isRequesting,o=t.getBtcPriceRequest,i=e.toJS(),a=J(Object(n.useState)({currentpage:1,perpage:10}),2),c=a[0];a[1],Object(n.useEffect)((function(){o(c)}),[]);var u=function(t){return new Intl.NumberFormat("en-US").format(t)},f=i.dataList.length>0&&i.dataList.map((function(t){var e,r=t.image,n=t.name,o=t.total_volume,i=t.current_price,a=(t.duration,t.market_cap),c=t.price_change_percentage_1h_in_currency;return[F("div",{className:"d-flex align-items-center mb-3"},void 0,F("img",{className:"mr-2",src:r,style:{width:"24px",maxHeight:"24px"},alt:n}),n),"$ ".concat(u(i)),F("span",{style:{color:"".concat(c>0?"green":"red")}},void 0,null===c||void 0===c?void 0:c.toFixed(3)," %"),"$ ".concat(u(o)),"$ ".concat(u(a)),F("img",{src:"https://www.coingecko.com/coins/".concat(null===r||void 0===r||null===(e=r.split("/"))||void 0===e?void 0:e[5],"/sparkline")})]}))||[];return F("section",{},void 0,F(l.a,{},void 0,_||(_=F("br",{})),x||(x=F("br",{})),k||(k=F("br",{})),C||(C=F("br",{})),I||(I=F("br",{})),T||(T=F("br",{})),A||(A=F("br",{})),F(s.a,{totalData:i.totalItems,tableData:f,pagelimit:c.perpage,tableHead:["Coin","Price","1h Price Change(%)","Volume (24h)","Market Cap","Last 7 days"],loading:r,handlePagination:function(t){o(U(U({},c),{},{currentpage:t.currentPage}))},totalPages:Math.ceil(i.totalItems/c.perpage),noDataAvailableMsg:"No Data Available."})))}))}}]);