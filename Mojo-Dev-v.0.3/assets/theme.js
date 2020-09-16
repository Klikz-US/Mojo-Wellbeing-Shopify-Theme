/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
/*!
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.3
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
function FastClick(e,t){"use strict";var n;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,!FastClick.notNeeded(e)){for(var i=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],o=this,r=0,s=i.length;r<s;r++)o[i[r]]=function(e,t){return function(){return e.apply(t,arguments)}}(o[i[r]],o);deviceIsAndroid&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,i){var o=Node.prototype.removeEventListener;"click"===t?o.call(e,t,n.hijacked||n,i):o.call(e,t,n,i)},e.addEventListener=function(t,n,i){var o=Node.prototype.addEventListener;"click"===t?o.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),i):o.call(e,t,n,i)}),"function"==typeof e.onclick&&(n=e.onclick,e.addEventListener("click",function(e){n(e)},!1),e.onclick=null)}}!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e,t,n){var i,o,r=(n=n||Z).createElement("script");if(r.text=e,t)for(i in de)(o=t[i]||t.getAttribute&&t.getAttribute(i))&&r.setAttribute(i,o);n.head.appendChild(r).parentNode.removeChild(r)}function i(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?oe[re.call(e)]||"object":typeof e}function o(e){var t=!!e&&"length"in e&&e.length,n=i(e);return!ce(e)&&!pe(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}function r(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function s(e,t,n){return ce(t)?he.grep(e,function(e,i){return!!t.call(e,i,e)!==n}):t.nodeType?he.grep(e,function(e){return e===t!==n}):"string"!=typeof t?he.grep(e,function(e){return-1<ie.call(t,e)!==n}):he.filter(t,e,n)}function a(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function l(e){return e}function u(e){throw e}function c(e,t,n,i){var o;try{e&&ce(o=e.promise)?o.call(e).done(t).fail(n):e&&ce(o=e.then)?o.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}function p(){Z.removeEventListener("DOMContentLoaded",p),e.removeEventListener("load",p),he.ready()}function d(e,t){return t.toUpperCase()}function f(e){return e.replace(Ae,"ms-").replace(Ne,d)}function h(){this.expando=he.expando+h.uid++}function m(e,t,n){var i,o;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(ze,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===(o=n)||"false"!==o&&("null"===o?null:o===+o+""?+o:De.test(o)?JSON.parse(o):o)}catch(e){}Oe.set(e,t,n)}else n=void 0;return n}function g(e,t,n,i){var o,r,s=20,a=i?function(){return i.cur()}:function(){return he.css(e,t,"")},l=a(),u=n&&n[3]||(he.cssNumber[t]?"":"px"),c=e.nodeType&&(he.cssNumber[t]||"px"!==u&&+l)&&Fe.exec(he.css(e,t));if(c&&c[3]!==u){for(l/=2,u=u||c[3],c=+l||1;s--;)he.style(e,t,c+u),(1-r)*(1-(r=a()/l||.5))<=0&&(s=0),c/=r;c*=2,he.style(e,t,c+u),n=n||[]}return n&&(c=+c||+l||0,o=n[1]?c+(n[1]+1)*n[2]:+n[2],i&&(i.unit=u,i.start=c,i.end=o)),o}function v(e,t){for(var n,i,o,r,s,a,l,u=[],c=0,p=e.length;c<p;c++)(i=e[c]).style&&(n=i.style.display,t?("none"===n&&(u[c]=je.get(i,"display")||null,u[c]||(i.style.display="")),""===i.style.display&&qe(i)&&(u[c]=(l=s=r=void 0,s=(o=i).ownerDocument,a=o.nodeName,(l=$e[a])||(r=s.body.appendChild(s.createElement(a)),l=he.css(r,"display"),r.parentNode.removeChild(r),"none"===l&&(l="block"),$e[a]=l)))):"none"!==n&&(u[c]="none",je.set(i,"display",n)));for(c=0;c<p;c++)null!=u[c]&&(e[c].style.display=u[c]);return e}function y(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&r(e,t)?he.merge([e],n):n}function b(e,t){for(var n=0,i=e.length;n<i;n++)je.set(e[n],"globalEval",!t||je.get(t[n],"globalEval"))}function x(e,t,n,o,r){for(var s,a,l,u,c,p,d=t.createDocumentFragment(),f=[],h=0,m=e.length;h<m;h++)if((s=e[h])||0===s)if("object"===i(s))he.merge(f,s.nodeType?[s]:s);else if(Je.test(s)){for(a=a||d.appendChild(t.createElement("div")),l=(Xe.exec(s)||["",""])[1].toLowerCase(),u=Ye[l]||Ye._default,a.innerHTML=u[1]+he.htmlPrefilter(s)+u[2],p=u[0];p--;)a=a.lastChild;he.merge(f,a.childNodes),(a=d.firstChild).textContent=""}else f.push(t.createTextNode(s));for(d.textContent="",h=0;s=f[h++];)if(o&&-1<he.inArray(s,o))r&&r.push(s);else if(c=We(s),a=y(d.appendChild(s),"script"),c&&b(a),n)for(p=0;s=a[p++];)Ue.test(s.type||"")&&n.push(s);return d}function w(){return!0}function C(){return!1}function S(e,t){return e===function(){try{return Z.activeElement}catch(e){}}()==("focus"===t)}function T(e,t,n,i,o,r){var s,a;if("object"==typeof t){for(a in"string"!=typeof n&&(i=i||n,n=void 0),t)T(e,a,n,i,t[a],r);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=C;else if(!o)return e;return 1===r&&(s=o,(o=function(e){return he().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=he.guid++)),e.each(function(){he.event.add(this,t,o,i,n)})}function E(e,t,n){n?(je.set(e,t,!1),he.event.add(e,t,{namespace:!1,handler:function(e){var i,o,r=je.get(this,t);if(1&e.isTrigger&&this[t]){if(r.length)(he.event.special[t]||{}).delegateType&&e.stopPropagation();else if(r=ee.call(arguments),je.set(this,t,r),i=n(this,t),this[t](),r!==(o=je.get(this,t))||i?je.set(this,t,!1):o={},r!==o)return e.stopImmediatePropagation(),e.preventDefault(),o.value}else r.length&&(je.set(this,t,{value:he.event.trigger(he.extend(r[0],he.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===je.get(e,t)&&he.event.add(e,t,w)}function k(e,t){return r(e,"table")&&r(11!==t.nodeType?t:t.firstChild,"tr")&&he(e).children("tbody")[0]||e}function I(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function P(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function A(e,t){var n,i,o,r,s,a,l,u;if(1===t.nodeType){if(je.hasData(e)&&(r=je.access(e),s=je.set(t,r),u=r.events))for(o in delete s.handle,s.events={},u)for(n=0,i=u[o].length;n<i;n++)he.event.add(t,o,u[o][n]);Oe.hasData(e)&&(a=Oe.access(e),l=he.extend({},a),Oe.set(t,l))}}function N(e,t,i,o){t=te.apply([],t);var r,s,a,l,u,c,p=0,d=e.length,f=d-1,h=t[0],m=ce(h);if(m||1<d&&"string"==typeof h&&!ue.checkClone&&it.test(h))return e.each(function(n){var r=e.eq(n);m&&(t[0]=h.call(this,n,r.html())),N(r,t,i,o)});if(d&&(s=(r=x(t,e[0].ownerDocument,!1,e,o)).firstChild,1===r.childNodes.length&&(r=s),s||o)){for(l=(a=he.map(y(r,"script"),I)).length;p<d;p++)u=r,p!==f&&(u=he.clone(u,!0,!0),l&&he.merge(a,y(u,"script"))),i.call(e[p],u,p);if(l)for(c=a[a.length-1].ownerDocument,he.map(a,P),p=0;p<l;p++)u=a[p],Ue.test(u.type||"")&&!je.access(u,"globalEval")&&he.contains(c,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?he._evalUrl&&!u.noModule&&he._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):n(u.textContent.replace(ot,""),u,c))}return e}function L(e,t,n){for(var i,o=t?he.filter(t,e):e,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||he.cleanData(y(i)),i.parentNode&&(n&&We(i)&&b(y(i,"script")),i.parentNode.removeChild(i));return e}function j(e,t,n){var i,o,r,s,a=e.style;return(n=n||st(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||We(e)||(s=he.style(e,t)),!ue.pixelBoxStyles()&&rt.test(s)&&at.test(t)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function O(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}function D(e){return he.cssProps[e]||ct[e]||(e in ut?e:ct[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=lt.length;n--;)if((e=lt[n]+t)in ut)return e}(e)||e)}function z(e,t,n){var i=Fe.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function R(e,t,n,i,o,r){var s="width"===t?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=he.css(e,n+Me[s],!0,o)),i?("content"===n&&(l-=he.css(e,"padding"+Me[s],!0,o)),"margin"!==n&&(l-=he.css(e,"border"+Me[s]+"Width",!0,o))):(l+=he.css(e,"padding"+Me[s],!0,o),"padding"!==n?l+=he.css(e,"border"+Me[s]+"Width",!0,o):a+=he.css(e,"border"+Me[s]+"Width",!0,o));return!i&&0<=r&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-r-l-a-.5))||0),l}function F(e,t,n){var i=st(e),o=(!ue.boxSizingReliable()||n)&&"border-box"===he.css(e,"boxSizing",!1,i),r=o,s=j(e,t,i),a="offset"+t[0].toUpperCase()+t.slice(1);if(rt.test(s)){if(!n)return s;s="auto"}return(!ue.boxSizingReliable()&&o||"auto"===s||!parseFloat(s)&&"inline"===he.css(e,"display",!1,i))&&e.getClientRects().length&&(o="border-box"===he.css(e,"boxSizing",!1,i),(r=a in e)&&(s=e[a])),(s=parseFloat(s)||0)+R(e,t,n||(o?"border":"content"),r,i,s)+"px"}function M(e,t,n,i,o){return new M.prototype.init(e,t,n,i,o)}function _(){gt&&(!1===Z.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(_):e.setTimeout(_,he.fx.interval),he.fx.tick())}function W(){return e.setTimeout(function(){mt=void 0}),mt=Date.now()}function V(e,t){var n,i=0,o={height:e};for(t=t?1:0;i<4;i+=2-t)o["margin"+(n=Me[i])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function q(e,t,n){for(var i,o=(H.tweeners[t]||[]).concat(H.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,t,e))return i}function H(e,t,n){var i,o,r=0,s=H.prefilters.length,a=he.Deferred().always(function(){delete l.elem}),l=function(){if(o)return!1;for(var t=mt||W(),n=Math.max(0,u.startTime+u.duration-t),i=1-(n/u.duration||0),r=0,s=u.tweens.length;r<s;r++)u.tweens[r].run(i);return a.notifyWith(e,[u,i,n]),i<1&&s?n:(s||a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u]),!1)},u=a.promise({elem:e,props:he.extend({},t),opts:he.extend(!0,{specialEasing:{},easing:he.easing._default},n),originalProperties:t,originalOptions:n,startTime:mt||W(),duration:n.duration,tweens:[],createTween:function(t,n){var i=he.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(i),i},stop:function(t){var n=0,i=t?u.tweens.length:0;if(o)return this;for(o=!0;n<i;n++)u.tweens[n].run(1);return t?(a.notifyWith(e,[u,1,0]),a.resolveWith(e,[u,t])):a.rejectWith(e,[u,t]),this}}),c=u.props;for((!function(e,t){var n,i,o,r,s;for(n in e)if(o=t[i=f(n)],r=e[n],Array.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),(s=he.cssHooks[i])&&"expand"in s)for(n in r=s.expand(r),delete e[i],r)n in e||(e[n]=r[n],t[n]=o);else t[i]=o}(c,u.opts.specialEasing));r<s;r++)if(i=H.prefilters[r].call(u,e,c,u.opts))return ce(i.stop)&&(he._queueHooks(u.elem,u.opts.queue).stop=i.stop.bind(i)),i;return he.map(c,q,u),ce(u.opts.start)&&u.opts.start.call(e,u),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always),he.fx.timer(he.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u}function $(e){return(e.match(Ee)||[]).join(" ")}function B(e){return e.getAttribute&&e.getAttribute("class")||""}function X(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(Ee)||[]}function U(e,t,n,o){var r;if(Array.isArray(t))he.each(t,function(t,i){n||Lt.test(e)?o(e,i):U(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,o)});else if(n||"object"!==i(t))o(e,t);else for(r in t)U(e+"["+r+"]",t[r],n,o)}function Y(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,o=0,r=t.toLowerCase().match(Ee)||[];if(ce(n))for(;i=r[o++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function G(e,t,n,i){function o(a){var l;return r[a]=!0,he.each(e[a]||[],function(e,a){var u=a(t,n,i);return"string"!=typeof u||s||r[u]?s?!(l=u):void 0:(t.dataTypes.unshift(u),o(u),!1)}),l}var r={},s=e===qt;return o(t.dataTypes[0])||!r["*"]&&o("*")}function Q(e,t){var n,i,o=he.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i||(i={}))[n]=t[n]);return i&&he.extend(!0,e,i),e}var J=[],Z=e.document,K=Object.getPrototypeOf,ee=J.slice,te=J.concat,ne=J.push,ie=J.indexOf,oe={},re=oe.toString,se=oe.hasOwnProperty,ae=se.toString,le=ae.call(Object),ue={},ce=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},pe=function(e){return null!=e&&e===e.window},de={type:!0,src:!0,nonce:!0,noModule:!0},fe="3.4.1",he=function(e,t){return new he.fn.init(e,t)},me=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;he.fn=he.prototype={jquery:fe,constructor:he,length:0,toArray:function(){return ee.call(this)},get:function(e){return null==e?ee.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=he.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return he.each(this,e)},map:function(e){return this.pushStack(he.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ee.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:ne,sort:J.sort,splice:J.splice},he.extend=he.fn.extend=function(){var e,t,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,u=!1;for("boolean"==typeof s&&(u=s,s=arguments[a]||{},a++),"object"==typeof s||ce(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)i=e[t],"__proto__"!==t&&s!==i&&(u&&i&&(he.isPlainObject(i)||(o=Array.isArray(i)))?(n=s[t],r=o&&!Array.isArray(n)?[]:o||he.isPlainObject(n)?n:{},o=!1,s[t]=he.extend(u,r,i)):void 0!==i&&(s[t]=i));return s},he.extend({expando:"jQuery"+(fe+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==re.call(e)||(t=K(e))&&("function"!=typeof(n=se.call(t,"constructor")&&t.constructor)||ae.call(n)!==le))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){n(e,{nonce:t&&t.nonce})},each:function(e,t){var n,i=0;if(o(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(me,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(o(Object(e))?he.merge(n,"string"==typeof e?[e]:e):ne.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:ie.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;i<n;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){for(var i=[],o=0,r=e.length,s=!n;o<r;o++)!t(e[o],o)!==s&&i.push(e[o]);return i},map:function(e,t,n){var i,r,s=0,a=[];if(o(e))for(i=e.length;s<i;s++)null!=(r=t(e[s],s,n))&&a.push(r);else for(s in e)null!=(r=t(e[s],s,n))&&a.push(r);return te.apply([],a)},guid:1,support:ue}),"function"==typeof Symbol&&(he.fn[Symbol.iterator]=J[Symbol.iterator]),he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){oe["[object "+t+"]"]=t.toLowerCase()});var ge=function(e){function t(e,t,n,i){var o,r,s,a,l,c,d,f=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!i&&((t?t.ownerDocument||t:F)!==A&&P(t),t=t||A,L)){if(11!==h&&(l=me.exec(e)))if(o=l[1]){if(9===h){if(!(s=t.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(f&&(s=f.getElementById(o))&&z(t,s)&&s.id===o)return n.push(s),n}else{if(l[2])return G.apply(n,t.getElementsByTagName(e)),n;if((o=l[3])&&y.getElementsByClassName&&t.getElementsByClassName)return G.apply(n,t.getElementsByClassName(o)),n}if(y.qsa&&!H[e+" "]&&(!j||!j.test(e))&&(1!==h||"object"!==t.nodeName.toLowerCase())){if(d=e,f=t,1===h&&ae.test(e)){for((a=t.getAttribute("id"))?a=a.replace(be,xe):t.setAttribute("id",a=R),r=(c=C(e)).length;r--;)c[r]="#"+a+" "+p(c[r]);d=c.join(","),f=ge.test(e)&&u(t.parentNode)||t}try{return G.apply(n,f.querySelectorAll(d)),n}catch(t){H(e,!0)}finally{a===R&&t.removeAttribute("id")}}}return T(e.replace(oe,"$1"),t,n,i)}function n(){var e=[];return function t(n,i){return e.push(n+" ")>b.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function i(e){return e[R]=!0,e}function o(e){var t=A.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function r(e,t){for(var n=e.split("|"),i=n.length;i--;)b.attrHandle[n[i]]=t}function s(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Ce(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function l(e){return i(function(t){return t=+t,i(function(n,i){for(var o,r=e([],n.length,t),s=r.length;s--;)n[o=r[s]]&&(n[o]=!(i[o]=n[o]))})})}function u(e){return e&&void 0!==e.getElementsByTagName&&e}function c(){}function p(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function d(e,t,n){var i=t.dir,o=t.next,r=o||i,s=n&&"parentNode"===r,a=_++;return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||s)return e(t,n,o);return!1}:function(t,n,l){var u,c,p,d=[M,a];if(l){for(;t=t[i];)if((1===t.nodeType||s)&&e(t,n,l))return!0}else for(;t=t[i];)if(1===t.nodeType||s)if(c=(p=t[R]||(t[R]={}))[t.uniqueID]||(p[t.uniqueID]={}),o&&o===t.nodeName.toLowerCase())t=t[i]||t;else{if((u=c[r])&&u[0]===M&&u[1]===a)return d[2]=u[2];if((c[r]=d)[2]=e(t,n,l))return!0}return!1}}function f(e){return 1<e.length?function(t,n,i){for(var o=e.length;o--;)if(!e[o](t,n,i))return!1;return!0}:e[0]}function h(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,u=null!=t;a<l;a++)(r=e[a])&&(n&&!n(r,i,o)||(s.push(r),u&&t.push(a)));return s}function m(e,n,o,r,s,a){return r&&!r[R]&&(r=m(r)),s&&!s[R]&&(s=m(s,a)),i(function(i,a,l,u){var c,p,d,f=[],m=[],g=a.length,v=i||function(e,n,i){for(var o=0,r=n.length;o<r;o++)t(e,n[o],i);return i}(n||"*",l.nodeType?[l]:l,[]),y=!e||!i&&n?v:h(v,f,e,l,u),b=o?s||(i?e:g||r)?[]:a:y;if(o&&o(y,b,l,u),r)for(c=h(b,m),r(c,[],l,u),p=c.length;p--;)(d=c[p])&&(b[m[p]]=!(y[m[p]]=d));if(i){if(s||e){if(s){for(c=[],p=b.length;p--;)(d=b[p])&&c.push(y[p]=d);s(null,b=[],c,u)}for(p=b.length;p--;)(d=b[p])&&-1<(c=s?J(i,d):f[p])&&(i[c]=!(a[c]=d))}}else b=h(b===a?b.splice(g,b.length):b),s?s(null,a,b,u):G.apply(a,b)})}function g(e){for(var t,n,i,o=e.length,r=b.relative[e[0].type],s=r||b.relative[" "],a=r?1:0,l=d(function(e){return e===t},s,!0),u=d(function(e){return-1<J(t,e)},s,!0),c=[function(e,n,i){var o=!r&&(i||n!==E)||((t=n).nodeType?l(e,n,i):u(e,n,i));return t=null,o}];a<o;a++)if(n=b.relative[e[a].type])c=[d(f(c),n)];else{if((n=b.filter[e[a].type].apply(null,e[a].matches))[R]){for(i=++a;i<o&&!b.relative[e[i].type];i++);return m(1<a&&f(c),1<a&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(oe,"$1"),n,a<i&&g(e.slice(a,i)),i<o&&g(e=e.slice(i)),i<o&&p(e))}c.push(n)}return f(c)}var v,y,b,x,w,C,S,T,E,k,I,P,A,N,L,j,O,D,z,R="sizzle"+1*new Date,F=e.document,M=0,_=0,W=n(),V=n(),q=n(),H=n(),$=function(e,t){return e===t&&(I=!0),0},B={}.hasOwnProperty,X=[],U=X.pop,Y=X.push,G=X.push,Q=X.slice,J=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",ee="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",te="\\["+K+"*("+ee+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ee+"))|)"+K+"*\\]",ne=":("+ee+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+te+")*)|.*)\\)|)",ie=new RegExp(K+"+","g"),oe=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),re=new RegExp("^"+K+"*,"+K+"*"),se=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),ae=new RegExp(K+"|>"),le=new RegExp(ne),ue=new RegExp("^"+ee+"$"),ce={ID:new RegExp("^#("+ee+")"),CLASS:new RegExp("^\\.("+ee+")"),TAG:new RegExp("^("+ee+"|[*])"),ATTR:new RegExp("^"+te),PSEUDO:new RegExp("^"+ne),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},pe=/HTML$/i,de=/^(?:input|select|textarea|button)$/i,fe=/^h\d$/i,he=/^[^{]+\{\s*\[native \w/,me=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ge=/[+~]/,ve=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),ye=function(e,t,n){var i="0x"+t-65536;return i!=i||n?t:i<0?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},be=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,xe=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},we=function(){P()},Ce=d(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{G.apply(X=Q.call(F.childNodes),F.childNodes),X[F.childNodes.length].nodeType}catch(v){G={apply:X.length?function(e,t){Y.apply(e,Q.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}for(v in y=t.support={},w=t.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!pe.test(t||n&&n.nodeName||"HTML")},P=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:F;return i!==A&&9===i.nodeType&&i.documentElement&&(N=(A=i).documentElement,L=!w(A),F!==A&&(n=A.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",we,!1):n.attachEvent&&n.attachEvent("onunload",we)),y.attributes=o(function(e){return e.className="i",!e.getAttribute("className")}),y.getElementsByTagName=o(function(e){return e.appendChild(A.createComment("")),!e.getElementsByTagName("*").length}),y.getElementsByClassName=he.test(A.getElementsByClassName),y.getById=o(function(e){return N.appendChild(e).id=R,!A.getElementsByName||!A.getElementsByName(R).length}),y.getById?(b.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&L){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var t=e.replace(ve,ye);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&L){var n,i,o,r=t.getElementById(e);if(r){if((n=r.getAttributeNode("id"))&&n.value===e)return[r];for(o=t.getElementsByName(e),i=0;r=o[i++];)if((n=r.getAttributeNode("id"))&&n.value===e)return[r]}return[]}}),b.find.TAG=y.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):y.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e);if("*"===e){for(;n=r[o++];)1===n.nodeType&&i.push(n);return i}return r},b.find.CLASS=y.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&L)return t.getElementsByClassName(e)},O=[],j=[],(y.qsa=he.test(A.querySelectorAll))&&(o(function(e){N.appendChild(e).innerHTML="<a id='"+R+"'></a><select id='"+R+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&j.push("[*^$]="+K+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||j.push("\\["+K+"*(?:value|"+Z+")"),e.querySelectorAll("[id~="+R+"-]").length||j.push("~="),e.querySelectorAll(":checked").length||j.push(":checked"),e.querySelectorAll("a#"+R+"+*").length||j.push(".#.+[+~]")}),o(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=A.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&j.push("name"+K+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&j.push(":enabled",":disabled"),N.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&j.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),j.push(",.*:")})),(y.matchesSelector=he.test(D=N.matches||N.webkitMatchesSelector||N.mozMatchesSelector||N.oMatchesSelector||N.msMatchesSelector))&&o(function(e){y.disconnectedMatch=D.call(e,"*"),D.call(e,"[s!='']:x"),O.push("!=",ne)}),j=j.length&&new RegExp(j.join("|")),O=O.length&&new RegExp(O.join("|")),t=he.test(N.compareDocumentPosition),z=t||he.test(N.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},$=t?function(e,t){if(e===t)return I=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!y.sortDetached&&t.compareDocumentPosition(e)===n?e===A||e.ownerDocument===F&&z(F,e)?-1:t===A||t.ownerDocument===F&&z(F,t)?1:k?J(k,e)-J(k,t):0:4&n?-1:1)}:function(e,t){if(e===t)return I=!0,0;var n,i=0,o=e.parentNode,r=t.parentNode,a=[e],l=[t];if(!o||!r)return e===A?-1:t===A?1:o?-1:r?1:k?J(k,e)-J(k,t):0;if(o===r)return s(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;a[i]===l[i];)i++;return i?s(a[i],l[i]):a[i]===F?-1:l[i]===F?1:0}),A},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==A&&P(e),y.matchesSelector&&L&&!H[n+" "]&&(!O||!O.test(n))&&(!j||!j.test(n)))try{var i=D.call(e,n);if(i||y.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(e){H(n,!0)}return 0<t(n,A,null,[e]).length},t.contains=function(e,t){return(e.ownerDocument||e)!==A&&P(e),z(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==A&&P(e);var n=b.attrHandle[t.toLowerCase()],i=n&&B.call(b.attrHandle,t.toLowerCase())?n(e,t,!L):void 0;return void 0!==i?i:y.attributes||!L?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.escape=function(e){return(e+"").replace(be,xe)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,o=0;if(I=!y.detectDuplicates,k=!y.sortStable&&e.slice(0),e.sort($),I){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}return k=null,e},x=t.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=x(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=x(t);return n},(b=t.selectors={cacheLength:50,createPseudo:i,match:ce,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ve,ye),e[3]=(e[3]||e[4]||e[5]||"").replace(ve,ye),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ce.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&le.test(n)&&(t=C(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ve,ye).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=W[e+" "];return t||(t=new RegExp("(^|"+K+")"+e+"("+K+"|$)"))&&W(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(o){var r=t.attr(o,e);return null==r?"!="===n:!n||(r+="","="===n?r===i:"!="===n?r!==i:"^="===n?i&&0===r.indexOf(i):"*="===n?i&&-1<r.indexOf(i):"$="===n?i&&r.slice(-i.length)===i:"~="===n?-1<(" "+r.replace(ie," ")+" ").indexOf(i):"|="===n&&(r===i||r.slice(0,i.length+1)===i+"-"))}},CHILD:function(e,t,n,i,o){var r="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===o?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,d,f,h,m=r!==s?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!l&&!a,b=!1;if(g){if(r){for(;m;){for(d=t;d=d[m];)if(a?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&y){for(b=(f=(u=(c=(p=(d=g)[R]||(d[R]={}))[d.uniqueID]||(p[d.uniqueID]={}))[e]||[])[0]===M&&u[1])&&u[2],d=f&&g.childNodes[f];d=++f&&d&&d[m]||(b=f=0)||h.pop();)if(1===d.nodeType&&++b&&d===t){c[e]=[M,f,b];break}}else if(y&&(b=f=(u=(c=(p=(d=t)[R]||(d[R]={}))[d.uniqueID]||(p[d.uniqueID]={}))[e]||[])[0]===M&&u[1]),!1===b)for(;(d=++f&&d&&d[m]||(b=f=0)||h.pop())&&((a?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++b||(y&&((c=(p=d[R]||(d[R]={}))[d.uniqueID]||(p[d.uniqueID]={}))[e]=[M,b]),d!==t)););return(b-=o)===i||b%i==0&&0<=b/i}}},PSEUDO:function(e,n){var o,r=b.pseudos[e]||b.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return r[R]?r(n):1<r.length?(o=[e,e,"",n],b.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,o=r(e,n),s=o.length;s--;)e[i=J(e,o[s])]=!(t[i]=o[s])}):function(e){return r(e,0,o)}):r}},pseudos:{not:i(function(e){var t=[],n=[],o=S(e.replace(oe,"$1"));return o[R]?i(function(e,t,n,i){for(var r,s=o(e,null,i,[]),a=e.length;a--;)(r=s[a])&&(e[a]=!(t[a]=r))}):function(e,i,r){return t[0]=e,o(t,null,r,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return 0<t(e,n).length}}),contains:i(function(e){return e=e.replace(ve,ye),function(t){return-1<(t.textContent||x(t)).indexOf(e)}}),lang:i(function(e){return ue.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(ve,ye).toLowerCase(),function(t){var n;do{if(n=L?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===N},focus:function(e){return e===A.activeElement&&(!A.hasFocus||A.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:a(!1),disabled:a(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return fe.test(e.nodeName)},input:function(e){return de.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[n<0?n+t:n]}),even:l(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var i=n<0?n+t:t<n?t:n;0<=--i;)e.push(i);return e}),gt:l(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[v]=function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(v);for(v in{submit:!0,reset:!0
})b.pseudos[v]=function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(v);return c.prototype=b.filters=b.pseudos,b.setFilters=new c,C=t.tokenize=function(e,n){var i,o,r,s,a,l,u,c=V[e+" "];if(c)return n?0:c.slice(0);for(a=e,l=[],u=b.preFilter;a;){for(s in i&&!(o=re.exec(a))||(o&&(a=a.slice(o[0].length)||a),l.push(r=[])),i=!1,(o=se.exec(a))&&(i=o.shift(),r.push({value:i,type:o[0].replace(oe," ")}),a=a.slice(i.length)),b.filter)!(o=ce[s].exec(a))||u[s]&&!(o=u[s](o))||(i=o.shift(),r.push({value:i,type:s,matches:o}),a=a.slice(i.length));if(!i)break}return n?a.length:a?t.error(e):V(e,l).slice(0)},S=t.compile=function(e,n){var o,r,s,a,l,u,c=[],p=[],d=q[e+" "];if(!d){for(n||(n=C(e)),o=n.length;o--;)(d=g(n[o]))[R]?c.push(d):p.push(d);(d=q(e,(r=p,a=0<(s=c).length,l=0<r.length,u=function(e,n,i,o,u){var c,p,d,f=0,m="0",g=e&&[],v=[],y=E,x=e||l&&b.find.TAG("*",u),w=M+=null==y?1:Math.random()||.1,C=x.length;for(u&&(E=n===A||n||u);m!==C&&null!=(c=x[m]);m++){if(l&&c){for(p=0,n||c.ownerDocument===A||(P(c),i=!L);d=r[p++];)if(d(c,n||A,i)){o.push(c);break}u&&(M=w)}a&&((c=!d&&c)&&f--,e&&g.push(c))}if(f+=m,a&&m!==f){for(p=0;d=s[p++];)d(g,v,n,i);if(e){if(0<f)for(;m--;)g[m]||v[m]||(v[m]=U.call(o));v=h(v)}G.apply(o,v),u&&!e&&0<v.length&&1<f+s.length&&t.uniqueSort(o)}return u&&(M=w,E=y),g},a?i(u):u))).selector=e}return d},T=t.select=function(e,t,n,i){var o,r,s,a,l,c="function"==typeof e&&e,d=!i&&C(e=c.selector||e);if(n=n||[],1===d.length){if(2<(r=d[0]=d[0].slice(0)).length&&"ID"===(s=r[0]).type&&9===t.nodeType&&L&&b.relative[r[1].type]){if(!(t=(b.find.ID(s.matches[0].replace(ve,ye),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(o=ce.needsContext.test(e)?0:r.length;o--&&(s=r[o],!b.relative[a=s.type]);)if((l=b.find[a])&&(i=l(s.matches[0].replace(ve,ye),ge.test(r[0].type)&&u(t.parentNode)||t))){if(r.splice(o,1),!(e=i.length&&p(r)))return G.apply(n,i),n;break}}return(c||S(e,d))(i,t,!L,n,!t||ge.test(e)&&u(t.parentNode)||t),n},y.sortStable=R.split("").sort($).join("")===R,y.detectDuplicates=!!I,P(),y.sortDetached=o(function(e){return 1&e.compareDocumentPosition(A.createElement("fieldset"))}),o(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||r("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),y.attributes&&o(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||r("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),o(function(e){return null==e.getAttribute("disabled")})||r(Z,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),t}(e);he.find=ge,he.expr=ge.selectors,he.expr[":"]=he.expr.pseudos,he.uniqueSort=he.unique=ge.uniqueSort,he.text=ge.getText,he.isXMLDoc=ge.isXML,he.contains=ge.contains,he.escapeSelector=ge.escape;var ve=function(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&he(e).is(n))break;i.push(e)}return i},ye=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},be=he.expr.match.needsContext,xe=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;he.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?he.find.matchesSelector(i,e)?[i]:[]:he.find.matches(e,he.grep(t,function(e){return 1===e.nodeType}))},he.fn.extend({find:function(e){var t,n,i=this.length,o=this;if("string"!=typeof e)return this.pushStack(he(e).filter(function(){for(t=0;t<i;t++)if(he.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)he.find(e,o[t],n);return 1<i?he.uniqueSort(n):n},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){return!!s(this,"string"==typeof e&&be.test(e)?he(e):e||[],!1).length}});var we,Ce=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(he.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||we,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:Ce.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof he?t[0]:t,he.merge(this,he.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:Z,!0)),xe.test(i[1])&&he.isPlainObject(t))for(i in t)ce(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=Z.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):ce(e)?void 0!==n.ready?n.ready(e):e(he):he.makeArray(e,this)}).prototype=he.fn,we=he(Z);var Se=/^(?:parents|prev(?:Until|All))/,Te={children:!0,contents:!0,next:!0,prev:!0};he.fn.extend({has:function(e){var t=he(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(he.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,o=this.length,r=[],s="string"!=typeof e&&he(e);if(!be.test(e))for(;i<o;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&he.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(1<r.length?he.uniqueSort(r):r)},index:function(e){return e?"string"==typeof e?ie.call(he(e),this[0]):ie.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(he.uniqueSort(he.merge(this.get(),he(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),he.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ve(e,"parentNode")},parentsUntil:function(e,t,n){return ve(e,"parentNode",n)},next:function(e){return a(e,"nextSibling")},prev:function(e){return a(e,"previousSibling")},nextAll:function(e){return ve(e,"nextSibling")},prevAll:function(e){return ve(e,"previousSibling")},nextUntil:function(e,t,n){return ve(e,"nextSibling",n)},prevUntil:function(e,t,n){return ve(e,"previousSibling",n)},siblings:function(e){return ye((e.parentNode||{}).firstChild,e)},children:function(e){return ye(e.firstChild)},contents:function(e){return void 0!==e.contentDocument?e.contentDocument:(r(e,"template")&&(e=e.content||e),he.merge([],e.childNodes))}},function(e,t){he.fn[e]=function(n,i){var o=he.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(o=he.filter(i,o)),1<this.length&&(Te[e]||he.uniqueSort(o),Se.test(e)&&o.reverse()),this.pushStack(o)}});var Ee=/[^\x20\t\r\n\f]+/g;he.Callbacks=function(e){var t,n;e="string"==typeof e?(t=e,n={},he.each(t.match(Ee)||[],function(e,t){n[t]=!0}),n):he.extend({},e);var o,r,s,a,l=[],u=[],c=-1,p=function(){for(a=a||e.once,s=o=!0;u.length;c=-1)for(r=u.shift();++c<l.length;)!1===l[c].apply(r[0],r[1])&&e.stopOnFalse&&(c=l.length,r=!1);e.memory||(r=!1),o=!1,a&&(l=r?[]:"")},d={add:function(){return l&&(r&&!o&&(c=l.length-1,u.push(r)),function t(n){he.each(n,function(n,o){ce(o)?e.unique&&d.has(o)||l.push(o):o&&o.length&&"string"!==i(o)&&t(o)})}(arguments),r&&!o&&p()),this},remove:function(){return he.each(arguments,function(e,t){for(var n;-1<(n=he.inArray(t,l,n));)l.splice(n,1),n<=c&&c--}),this},has:function(e){return e?-1<he.inArray(e,l):0<l.length},empty:function(){return l&&(l=[]),this},disable:function(){return a=u=[],l=r="",this},disabled:function(){return!l},lock:function(){return a=u=[],r||o||(l=r=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),o||p()),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!s}};return d},he.extend({Deferred:function(t){var n=[["notify","progress",he.Callbacks("memory"),he.Callbacks("memory"),2],["resolve","done",he.Callbacks("once memory"),he.Callbacks("once memory"),0,"resolved"],["reject","fail",he.Callbacks("once memory"),he.Callbacks("once memory"),1,"rejected"]],i="pending",o={state:function(){return i},always:function(){return r.done(arguments).fail(arguments),this},catch:function(e){return o.then(null,e)},pipe:function(){var e=arguments;return he.Deferred(function(t){he.each(n,function(n,i){var o=ce(e[i[4]])&&e[i[4]];r[i[1]](function(){var e=o&&o.apply(this,arguments);e&&ce(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[i[0]+"With"](this,o?[e]:arguments)})}),e=null}).promise()},then:function(t,i,o){function r(t,n,i,o){return function(){var a=this,c=arguments,p=function(){var e,p;if(!(t<s)){if((e=i.apply(a,c))===n.promise())throw new TypeError("Thenable self-resolution");p=e&&("object"==typeof e||"function"==typeof e)&&e.then,ce(p)?o?p.call(e,r(s,n,l,o),r(s,n,u,o)):(s++,p.call(e,r(s,n,l,o),r(s,n,u,o),r(s,n,l,n.notifyWith))):(i!==l&&(a=void 0,c=[e]),(o||n.resolveWith)(a,c))}},d=o?p:function(){try{p()}catch(e){he.Deferred.exceptionHook&&he.Deferred.exceptionHook(e,d.stackTrace),s<=t+1&&(i!==u&&(a=void 0,c=[e]),n.rejectWith(a,c))}};t?d():(he.Deferred.getStackHook&&(d.stackTrace=he.Deferred.getStackHook()),e.setTimeout(d))}}var s=0;return he.Deferred(function(e){n[0][3].add(r(0,e,ce(o)?o:l,e.notifyWith)),n[1][3].add(r(0,e,ce(t)?t:l)),n[2][3].add(r(0,e,ce(i)?i:u))}).promise()},promise:function(e){return null!=e?he.extend(e,o):o}},r={};return he.each(n,function(e,t){var s=t[2],a=t[5];o[t[1]]=s.add,a&&s.add(function(){i=a},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),s.add(t[3].fire),r[t[0]]=function(){return r[t[0]+"With"](this===r?void 0:this,arguments),this},r[t[0]+"With"]=s.fireWith}),o.promise(r),t&&t.call(r,r),r},when:function(e){var t=arguments.length,n=t,i=Array(n),o=ee.call(arguments),r=he.Deferred(),s=function(e){return function(n){i[e]=this,o[e]=1<arguments.length?ee.call(arguments):n,--t||r.resolveWith(i,o)}};if(t<=1&&(c(e,r.done(s(n)).resolve,r.reject,!t),"pending"===r.state()||ce(o[n]&&o[n].then)))return r.then();for(;n--;)c(o[n],s(n),r.reject);return r.promise()}});var ke=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;he.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&ke.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},he.readyException=function(t){e.setTimeout(function(){throw t})};var Ie=he.Deferred();he.fn.ready=function(e){return Ie.then(e).catch(function(e){he.readyException(e)}),this},he.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--he.readyWait:he.isReady)||(he.isReady=!0)!==e&&0<--he.readyWait||Ie.resolveWith(Z,[he])}}),he.ready.then=Ie.then,"complete"===Z.readyState||"loading"!==Z.readyState&&!Z.documentElement.doScroll?e.setTimeout(he.ready):(Z.addEventListener("DOMContentLoaded",p),e.addEventListener("load",p));var Pe=function(e,t,n,o,r,s,a){var l=0,u=e.length,c=null==n;if("object"===i(n))for(l in r=!0,n)Pe(e,t,l,n[l],!0,s,a);else if(void 0!==o&&(r=!0,ce(o)||(a=!0),c&&(a?(t.call(e,o),t=null):(c=t,t=function(e,t,n){return c.call(he(e),n)})),t))for(;l<u;l++)t(e[l],n,a?o:o.call(e[l],l,t(e[l],n)));return r?e:c?t.call(e):u?t(e[0],n):s},Ae=/^-ms-/,Ne=/-([a-z])/g,Le=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};h.uid=1,h.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Le(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,o=this.cache(e);if("string"==typeof t)o[f(t)]=n;else for(i in t)o[f(i)]=t[i];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][f(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(f):(t=f(t))in i?[t]:t.match(Ee)||[]).length;for(;n--;)delete i[t[n]]}(void 0===t||he.isEmptyObject(i))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!he.isEmptyObject(t)}};var je=new h,Oe=new h,De=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ze=/[A-Z]/g;he.extend({hasData:function(e){return Oe.hasData(e)||je.hasData(e)},data:function(e,t,n){return Oe.access(e,t,n)},removeData:function(e,t){Oe.remove(e,t)},_data:function(e,t,n){return je.access(e,t,n)},_removeData:function(e,t){je.remove(e,t)}}),he.fn.extend({data:function(e,t){var n,i,o,r=this[0],s=r&&r.attributes;if(void 0===e){if(this.length&&(o=Oe.get(r),1===r.nodeType&&!je.get(r,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&0===(i=s[n].name).indexOf("data-")&&(i=f(i.slice(5)),m(r,i,o[i]));je.set(r,"hasDataAttrs",!0)}return o}return"object"==typeof e?this.each(function(){Oe.set(this,e)}):Pe(this,function(t){var n;if(r&&void 0===t)return void 0!==(n=Oe.get(r,e))?n:void 0!==(n=m(r,e))?n:void 0;this.each(function(){Oe.set(this,e,t)})},null,t,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Oe.remove(this,e)})}}),he.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=je.get(e,t),n&&(!i||Array.isArray(n)?i=je.access(e,t,he.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=he.queue(e,t),i=n.length,o=n.shift(),r=he._queueHooks(e,t);"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,function(){he.dequeue(e,t)},r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return je.get(e,n)||je.access(e,n,{empty:he.Callbacks("once memory").add(function(){je.remove(e,[t+"queue",n])})})}}),he.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?he.queue(this[0],e):void 0===t?this:this.each(function(){var n=he.queue(this,e,t);he._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&he.dequeue(this,e)})},dequeue:function(e){return this.each(function(){he.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,o=he.Deferred(),r=this,s=this.length,a=function(){--i||o.resolveWith(r,[r])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=je.get(r[s],e+"queueHooks"))&&n.empty&&(i++,n.empty.add(a));return a(),o.promise(t)}});var Re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Fe=new RegExp("^(?:([+-])=|)("+Re+")([a-z%]*)$","i"),Me=["Top","Right","Bottom","Left"],_e=Z.documentElement,We=function(e){return he.contains(e.ownerDocument,e)},Ve={composed:!0};_e.getRootNode&&(We=function(e){return he.contains(e.ownerDocument,e)||e.getRootNode(Ve)===e.ownerDocument});var qe=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&We(e)&&"none"===he.css(e,"display")},He=function(e,t,n,i){var o,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];for(r in o=n.apply(e,i||[]),t)e.style[r]=s[r];return o},$e={};he.fn.extend({show:function(){return v(this,!0)},hide:function(){return v(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){qe(this)?he(this).show():he(this).hide()})}});var Be=/^(?:checkbox|radio)$/i,Xe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Ue=/^$|^module$|\/(?:java|ecma)script/i,Ye={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ye.optgroup=Ye.option,Ye.tbody=Ye.tfoot=Ye.colgroup=Ye.caption=Ye.thead,Ye.th=Ye.td;var Ge,Qe,Je=/<|&#?\w+;/;Ge=Z.createDocumentFragment().appendChild(Z.createElement("div")),(Qe=Z.createElement("input")).setAttribute("type","radio"),Qe.setAttribute("checked","checked"),Qe.setAttribute("name","t"),Ge.appendChild(Qe),ue.checkClone=Ge.cloneNode(!0).cloneNode(!0).lastChild.checked,Ge.innerHTML="<textarea>x</textarea>",ue.noCloneChecked=!!Ge.cloneNode(!0).lastChild.defaultValue;var Ze=/^key/,Ke=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,et=/^([^.]*)(?:\.(.+)|)/;he.event={global:{},add:function(e,t,n,i,o){var r,s,a,l,u,c,p,d,f,h,m,g=je.get(e);if(g)for(n.handler&&(n=(r=n).handler,o=r.selector),o&&he.find.matchesSelector(_e,o),n.guid||(n.guid=he.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(t){return void 0!==he&&he.event.triggered!==t.type?he.event.dispatch.apply(e,arguments):void 0}),u=(t=(t||"").match(Ee)||[""]).length;u--;)f=m=(a=et.exec(t[u])||[])[1],h=(a[2]||"").split(".").sort(),f&&(p=he.event.special[f]||{},f=(o?p.delegateType:p.bindType)||f,p=he.event.special[f]||{},c=he.extend({type:f,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&he.expr.match.needsContext.test(o),namespace:h.join(".")},r),(d=l[f])||((d=l[f]=[]).delegateCount=0,p.setup&&!1!==p.setup.call(e,i,h,s)||e.addEventListener&&e.addEventListener(f,s)),p.add&&(p.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),o?d.splice(d.delegateCount++,0,c):d.push(c),he.event.global[f]=!0)},remove:function(e,t,n,i,o){var r,s,a,l,u,c,p,d,f,h,m,g=je.hasData(e)&&je.get(e);if(g&&(l=g.events)){for(u=(t=(t||"").match(Ee)||[""]).length;u--;)if(f=m=(a=et.exec(t[u])||[])[1],h=(a[2]||"").split(".").sort(),f){for(p=he.event.special[f]||{},d=l[f=(i?p.delegateType:p.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=d.length;r--;)c=d[r],!o&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||i&&i!==c.selector&&("**"!==i||!c.selector)||(d.splice(r,1),c.selector&&d.delegateCount--,p.remove&&p.remove.call(e,c));s&&!d.length&&(p.teardown&&!1!==p.teardown.call(e,h,g.handle)||he.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)he.event.remove(e,f+t[u],n,i,!0);he.isEmptyObject(l)&&je.remove(e,"handle events")}},dispatch:function(e){var t,n,i,o,r,s,a=he.event.fix(e),l=new Array(arguments.length),u=(je.get(this,"events")||{})[a.type]||[],c=he.event.special[a.type]||{};for(l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t];if(a.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,a)){for(s=he.event.handlers.call(this,a,u),t=0;(o=s[t++])&&!a.isPropagationStopped();)for(a.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!1!==r.namespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,void 0!==(i=((he.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,l))&&!1===(a.result=i)&&(a.preventDefault(),a.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,i,o,r,s,a=[],l=t.delegateCount,u=e.target;if(l&&u.nodeType&&!("click"===e.type&&1<=e.button))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&("click"!==e.type||!0!==u.disabled)){for(r=[],s={},n=0;n<l;n++)void 0===s[o=(i=t[n]).selector+" "]&&(s[o]=i.needsContext?-1<he(o,this).index(u):he.find(o,this,null,[u]).length),s[o]&&r.push(i);r.length&&a.push({elem:u,handlers:r})}return u=this,l<t.length&&a.push({elem:u,handlers:t.slice(l)}),a},addProp:function(e,t){Object.defineProperty(he.Event.prototype,e,{enumerable:!0,configurable:!0,get:ce(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[he.expando]?e:new he.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return Be.test(t.type)&&t.click&&r(t,"input")&&E(t,"click",w),!1},trigger:function(e){var t=this||e;return Be.test(t.type)&&t.click&&r(t,"input")&&E(t,"click"),!0},_default:function(e){var t=e.target;return Be.test(t.type)&&t.click&&r(t,"input")&&je.get(t,"click")||r(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},he.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},he.Event=function(e,t){if(!(this instanceof he.Event))return new he.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?w:C,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&he.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[he.expando]=!0},he.Event.prototype={constructor:he.Event,isDefaultPrevented:C,isPropagationStopped:C,isImmediatePropagationStopped:C,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=w,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=w,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=w,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},he.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Ze.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ke.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},he.event.addProp),he.each({focus:"focusin",blur:"focusout"},function(e,t){he.event.special[e]={setup:function(){return E(this,e,S),!1},trigger:function(){return E(this,e),!0},delegateType:t}}),he.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){he.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=e.relatedTarget,o=e.handleObj;return i&&(i===this||he.contains(this,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),he.fn.extend({on:function(e,t,n,i){return T(this,e,t,n,i)},one:function(e,t,n,i){return T(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,he(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,t,e[o]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=C),this.each(function(){he.event.remove(this,e,n,t)})}});var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,nt=/<script|<style|<link/i,it=/checked\s*(?:[^=]|=\s*.checked.)/i,ot=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;he.extend({htmlPrefilter:function(e){return e.replace(tt,"<$1></$2>")},clone:function(e,t,n){var i,o,r,s,a,l,u,c=e.cloneNode(!0),p=We(e);if(!(ue.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||he.isXMLDoc(e)))for(s=y(c),i=0,o=(r=y(e)).length;i<o;i++)a=r[i],l=s[i],"input"===(u=l.nodeName.toLowerCase())&&Be.test(a.type)?l.checked=a.checked:"input"!==u&&"textarea"!==u||(l.defaultValue=a.defaultValue);if(t)if(n)for(r=r||y(e),s=s||y(c),i=0,o=r.length;i<o;i++)A(r[i],s[i]);else A(e,c);return 0<(s=y(c,"script")).length&&b(s,!p&&y(e,"script")),c},cleanData:function(e){for(var t,n,i,o=he.event.special,r=0;void 0!==(n=e[r]);r++)if(Le(n)){if(t=n[je.expando]){if(t.events)for(i in t.events)o[i]?he.event.remove(n,i):he.removeEvent(n,i,t.handle);n[je.expando]=void 0}n[Oe.expando]&&(n[Oe.expando]=void 0)}}}),he.fn.extend({detach:function(e){return L(this,e,!0)},remove:function(e){return L(this,e)},text:function(e){return Pe(this,function(e){return void 0===e?he.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return N(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||k(this,e).appendChild(e)})},prepend:function(){return N(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=k(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return N(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return N(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(he.cleanData(y(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return he.clone(this,e,t)})},html:function(e){return Pe(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!nt.test(e)&&!Ye[(Xe.exec(e)||["",""])[1].toLowerCase()]){e=he.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(he.cleanData(y(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return N(this,arguments,function(t){var n=this.parentNode;he.inArray(this,e)<0&&(he.cleanData(y(this)),n&&n.replaceChild(t,this))},e)}}),he.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){he.fn[e]=function(e){for(var n,i=[],o=he(e),r=o.length-1,s=0;s<=r;s++)n=s===r?this:this.clone(!0),he(o[s])[t](n),ne.apply(i,n.get());return this.pushStack(i)}});var rt=new RegExp("^("+Re+")(?!px)[a-z%]+$","i"),st=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},at=new RegExp(Me.join("|"),"i");!function(){function t(){if(u){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",_e.appendChild(l).appendChild(u);var t=e.getComputedStyle(u);i="1%"!==t.top,a=12===n(t.marginLeft),u.style.right="60%",s=36===n(t.right),o=36===n(t.width),u.style.position="absolute",r=12===n(u.offsetWidth/3),_e.removeChild(l),u=null}}function n(e){return Math.round(parseFloat(e))}var i,o,r,s,a,l=Z.createElement("div"),u=Z.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",ue.clearCloneStyle="content-box"===u.style.backgroundClip,he.extend(ue,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),a},scrollboxSize:function(){return t(),r}}))}();var lt=["Webkit","Moz","ms"],ut=Z.createElement("div").style,ct={},pt=/^(none|table(?!-c[ea]).+)/,dt=/^--/,ft={position:"absolute",visibility:"hidden",display:"block"},ht={letterSpacing:"0",fontWeight:"400"};he.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=j(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=f(t),l=dt.test(t),u=e.style;if(l||(t=D(a)),s=he.cssHooks[t]||he.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:u[t];"string"==(r=typeof n)&&(o=Fe.exec(n))&&o[1]&&(n=g(e,t,o),r="number"),null!=n&&n==n&&("number"!==r||l||(n+=o&&o[3]||(he.cssNumber[a]?"":"px")),ue.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?u.setProperty(t,n):u[t]=n))}},css:function(e,t,n,i){var o,r,s,a=f(t);return dt.test(t)||(t=D(a)),(s=he.cssHooks[t]||he.cssHooks[a])&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=j(e,t,i)),"normal"===o&&t in ht&&(o=ht[t]),""===n||n?(r=parseFloat(o),!0===n||isFinite(r)?r||0:o):o}}),he.each(["height","width"],function(e,t){he.cssHooks[t]={get:function(e,n,i){if(n)return!pt.test(he.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?F(e,t,i):He(e,ft,function(){return F(e,t,i)})},set:function(e,n,i){var o,r=st(e),s=!ue.scrollboxSize()&&"absolute"===r.position,a=(s||i)&&"border-box"===he.css(e,"boxSizing",!1,r),l=i?R(e,t,i,a,r):0;return a&&s&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(r[t])-R(e,t,"border",!1,r)-.5)),l&&(o=Fe.exec(n))&&"px"!==(o[3]||"px")&&(e.style[t]=n,n=he.css(e,t)),z(0,n,l)}}}),he.cssHooks.marginLeft=O(ue.reliableMarginLeft,function(e,t){if(t)return(parseFloat(j(e,"marginLeft"))||e.getBoundingClientRect().left-He(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),he.each({margin:"",padding:"",border:"Width"},function(e,t){he.cssHooks[e+t]={expand:function(n){for(var i=0,o={},r="string"==typeof n?n.split(" "):[n];i<4;i++)o[e+Me[i]+t]=r[i]||r[i-2]||r[0];return o}},"margin"!==e&&(he.cssHooks[e+t].set=z)}),he.fn.extend({css:function(e,t){return Pe(this,function(e,t,n){var i,o,r={},s=0;if(Array.isArray(t)){for(i=st(e),o=t.length;s<o;s++)r[t[s]]=he.css(e,t[s],!1,i);return r}return void 0!==n?he.style(e,t,n):he.css(e,t)},e,t,1<arguments.length)}}),((he.Tween=M).prototype={constructor:M,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||he.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(he.cssNumber[n]?"":"px")},cur:function(){var e=M.propHooks[this.prop];return e&&e.get?e.get(this):M.propHooks._default.get(this)},run:function(e){var t,n=M.propHooks[this.prop];return this.options.duration?this.pos=t=he.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):M.propHooks._default.set(this),this}}).init.prototype=M.prototype,(M.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=he.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){he.fx.step[e.prop]?he.fx.step[e.prop](e):1!==e.elem.nodeType||!he.cssHooks[e.prop]&&null==e.elem.style[D(e.prop)]?e.elem[e.prop]=e.now:he.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=M.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},he.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},he.fx=M.prototype.init,he.fx.step={};var mt,gt,vt,yt,bt=/^(?:toggle|show|hide)$/,xt=/queueHooks$/;he.Animation=he.extend(H,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return g(n.elem,e,Fe.exec(t),n),n}]},tweener:function(e,t){ce(e)?(t=e,e=["*"]):e=e.match(Ee);for(var n,i=0,o=e.length;i<o;i++)n=e[i],H.tweeners[n]=H.tweeners[n]||[],H.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,o,r,s,a,l,u,c,p="width"in t||"height"in t,d=this,f={},h=e.style,m=e.nodeType&&qe(e),g=je.get(e,"fxshow");for(i in n.queue||(null==(s=he._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,he.queue(e,"fx").length||s.empty.fire()})})),t)if(o=t[i],bt.test(o)){if(delete t[i],r=r||"toggle"===o,o===(m?"hide":"show")){if("show"!==o||!g||void 0===g[i])continue;m=!0}f[i]=g&&g[i]||he.style(e,i)}if((l=!he.isEmptyObject(t))||!he.isEmptyObject(f))for(i in p&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(u=g&&g.display)&&(u=je.get(e,"display")),"none"===(c=he.css(e,"display"))&&(u?c=u:(v([e],!0),u=e.style.display||u,c=he.css(e,"display"),v([e]))),("inline"===c||"inline-block"===c&&null!=u)&&"none"===he.css(e,"float")&&(l||(d.done(function(){h.display=u}),null==u&&(c=h.display,u="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",d.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),l=!1,f)l||(g?"hidden"in g&&(m=g.hidden):g=je.access(e,"fxshow",{display:u}),r&&(g.hidden=!m),m&&v([e],!0),d.done(function(){for(i in m||v([e]),je.remove(e,"fxshow"),f)he.style(e,i,f[i])})),l=q(m?g[i]:0,i,d),
i in g||(g[i]=l.start,m&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?H.prefilters.unshift(e):H.prefilters.push(e)}}),he.speed=function(e,t,n){var i=e&&"object"==typeof e?he.extend({},e):{complete:n||!n&&t||ce(e)&&e,duration:e,easing:n&&t||t&&!ce(t)&&t};return he.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in he.fx.speeds?i.duration=he.fx.speeds[i.duration]:i.duration=he.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){ce(i.old)&&i.old.call(this),i.queue&&he.dequeue(this,i.queue)},i},he.fn.extend({fadeTo:function(e,t,n,i){return this.filter(qe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var o=he.isEmptyObject(e),r=he.speed(t,n,i),s=function(){var t=H(this,he.extend({},e),r);(o||je.get(this,"finish"))&&t.stop(!0)};return s.finish=s,o||!1===r.queue?this.each(s):this.queue(r.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,o=null!=e&&e+"queueHooks",r=he.timers,s=je.get(this);if(o)s[o]&&s[o].stop&&i(s[o]);else for(o in s)s[o]&&s[o].stop&&xt.test(o)&&i(s[o]);for(o=r.length;o--;)r[o].elem!==this||null!=e&&r[o].queue!==e||(r[o].anim.stop(n),t=!1,r.splice(o,1));!t&&n||he.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=je.get(this),i=n[e+"queue"],o=n[e+"queueHooks"],r=he.timers,s=i?i.length:0;for(n.finish=!0,he.queue(this,e,[]),o&&o.stop&&o.stop.call(this,!0),t=r.length;t--;)r[t].elem===this&&r[t].queue===e&&(r[t].anim.stop(!0),r.splice(t,1));for(t=0;t<s;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),he.each(["toggle","show","hide"],function(e,t){var n=he.fn[t];he.fn[t]=function(e,i,o){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(V(t,!0),e,i,o)}}),he.each({slideDown:V("show"),slideUp:V("hide"),slideToggle:V("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){he.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),he.timers=[],he.fx.tick=function(){var e,t=0,n=he.timers;for(mt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||he.fx.stop(),mt=void 0},he.fx.timer=function(e){he.timers.push(e),he.fx.start()},he.fx.interval=13,he.fx.start=function(){gt||(gt=!0,_())},he.fx.stop=function(){gt=null},he.fx.speeds={slow:600,fast:200,_default:400},he.fn.delay=function(t,n){return t=he.fx&&he.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,i){var o=e.setTimeout(n,t);i.stop=function(){e.clearTimeout(o)}})},vt=Z.createElement("input"),yt=Z.createElement("select").appendChild(Z.createElement("option")),vt.type="checkbox",ue.checkOn=""!==vt.value,ue.optSelected=yt.selected,(vt=Z.createElement("input")).value="t",vt.type="radio",ue.radioValue="t"===vt.value;var wt,Ct=he.expr.attrHandle;he.fn.extend({attr:function(e,t){return Pe(this,he.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){he.removeAttr(this,e)})}}),he.extend({attr:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===e.getAttribute?he.prop(e,t,n):(1===r&&he.isXMLDoc(e)||(o=he.attrHooks[t.toLowerCase()]||(he.expr.match.bool.test(t)?wt:void 0)),void 0!==n?null===n?void he.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):o&&"get"in o&&null!==(i=o.get(e,t))?i:null==(i=he.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!ue.radioValue&&"radio"===t&&r(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,o=t&&t.match(Ee);if(o&&1===e.nodeType)for(;n=o[i++];)e.removeAttribute(n)}}),wt={set:function(e,t,n){return!1===t?he.removeAttr(e,n):e.setAttribute(n,n),n}},he.each(he.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Ct[t]||he.find.attr;Ct[t]=function(e,t,i){var o,r,s=t.toLowerCase();return i||(r=Ct[s],Ct[s]=o,o=null!=n(e,t,i)?s:null,Ct[s]=r),o}});var St=/^(?:input|select|textarea|button)$/i,Tt=/^(?:a|area)$/i;he.fn.extend({prop:function(e,t){return Pe(this,he.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[he.propFix[e]||e]})}}),he.extend({prop:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&he.isXMLDoc(e)||(t=he.propFix[t]||t,o=he.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=he.find.attr(e,"tabindex");return t?parseInt(t,10):St.test(e.nodeName)||Tt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),ue.optSelected||(he.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),he.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){he.propFix[this.toLowerCase()]=this}),he.fn.extend({addClass:function(e){var t,n,i,o,r,s,a,l=0;if(ce(e))return this.each(function(t){he(this).addClass(e.call(this,t,B(this)))});if((t=X(e)).length)for(;n=this[l++];)if(o=B(n),i=1===n.nodeType&&" "+$(o)+" "){for(s=0;r=t[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o!==(a=$(i))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,i,o,r,s,a,l=0;if(ce(e))return this.each(function(t){he(this).removeClass(e.call(this,t,B(this)))});if(!arguments.length)return this.attr("class","");if((t=X(e)).length)for(;n=this[l++];)if(o=B(n),i=1===n.nodeType&&" "+$(o)+" "){for(s=0;r=t[s++];)for(;-1<i.indexOf(" "+r+" ");)i=i.replace(" "+r+" "," ");o!==(a=$(i))&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e,i="string"===n||Array.isArray(e);return"boolean"==typeof t&&i?t?this.addClass(e):this.removeClass(e):ce(e)?this.each(function(n){he(this).toggleClass(e.call(this,n,B(this),t),t)}):this.each(function(){var t,o,r,s;if(i)for(o=0,r=he(this),s=X(e);t=s[o++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else void 0!==e&&"boolean"!==n||((t=B(this))&&je.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":je.get(this,"__className__")||""))})},hasClass:function(e){var t,n,i=0;for(t=" "+e+" ";n=this[i++];)if(1===n.nodeType&&-1<(" "+$(B(n))+" ").indexOf(t))return!0;return!1}});var Et=/\r/g;he.fn.extend({val:function(e){var t,n,i,o=this[0];return arguments.length?(i=ce(e),this.each(function(n){var o;1===this.nodeType&&(null==(o=i?e.call(this,n,he(this).val()):e)?o="":"number"==typeof o?o+="":Array.isArray(o)&&(o=he.map(o,function(e){return null==e?"":e+""})),(t=he.valHooks[this.type]||he.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,o,"value")||(this.value=o))})):o?(t=he.valHooks[o.type]||he.valHooks[o.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(o,"value"))?n:"string"==typeof(n=o.value)?n.replace(Et,""):null==n?"":n:void 0}}),he.extend({valHooks:{option:{get:function(e){var t=he.find.attr(e,"value");return null!=t?t:$(he.text(e))}},select:{get:function(e){var t,n,i,o=e.options,s=e.selectedIndex,a="select-one"===e.type,l=a?null:[],u=a?s+1:o.length;for(i=s<0?u:a?s:0;i<u;i++)if(((n=o[i]).selected||i===s)&&!n.disabled&&(!n.parentNode.disabled||!r(n.parentNode,"optgroup"))){if(t=he(n).val(),a)return t;l.push(t)}return l},set:function(e,t){for(var n,i,o=e.options,r=he.makeArray(t),s=o.length;s--;)((i=o[s]).selected=-1<he.inArray(he.valHooks.option.get(i),r))&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),he.each(["radio","checkbox"],function(){he.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<he.inArray(he(e).val(),t)}},ue.checkOn||(he.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),ue.focusin="onfocusin"in e;var kt=/^(?:focusinfocus|focusoutblur)$/,It=function(e){e.stopPropagation()};he.extend(he.event,{trigger:function(t,n,i,o){var r,s,a,l,u,c,p,d,f=[i||Z],h=se.call(t,"type")?t.type:t,m=se.call(t,"namespace")?t.namespace.split("."):[];if(s=d=a=i=i||Z,3!==i.nodeType&&8!==i.nodeType&&!kt.test(h+he.event.triggered)&&(-1<h.indexOf(".")&&(h=(m=h.split(".")).shift(),m.sort()),u=h.indexOf(":")<0&&"on"+h,(t=t[he.expando]?t:new he.Event(h,"object"==typeof t&&t)).isTrigger=o?2:3,t.namespace=m.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:he.makeArray(n,[t]),p=he.event.special[h]||{},o||!p.trigger||!1!==p.trigger.apply(i,n))){if(!o&&!p.noBubble&&!pe(i)){for(l=p.delegateType||h,kt.test(l+h)||(s=s.parentNode);s;s=s.parentNode)f.push(s),a=s;a===(i.ownerDocument||Z)&&f.push(a.defaultView||a.parentWindow||e)}for(r=0;(s=f[r++])&&!t.isPropagationStopped();)d=s,t.type=1<r?l:p.bindType||h,(c=(je.get(s,"events")||{})[t.type]&&je.get(s,"handle"))&&c.apply(s,n),(c=u&&s[u])&&c.apply&&Le(s)&&(t.result=c.apply(s,n),!1===t.result&&t.preventDefault());return t.type=h,o||t.isDefaultPrevented()||p._default&&!1!==p._default.apply(f.pop(),n)||!Le(i)||u&&ce(i[h])&&!pe(i)&&((a=i[u])&&(i[u]=null),he.event.triggered=h,t.isPropagationStopped()&&d.addEventListener(h,It),i[h](),t.isPropagationStopped()&&d.removeEventListener(h,It),he.event.triggered=void 0,a&&(i[u]=a)),t.result}},simulate:function(e,t,n){var i=he.extend(new he.Event,n,{type:e,isSimulated:!0});he.event.trigger(i,null,t)}}),he.fn.extend({trigger:function(e,t){return this.each(function(){he.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return he.event.trigger(e,t,n,!0)}}),ue.focusin||he.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){he.event.simulate(t,e.target,he.event.fix(e))};he.event.special[t]={setup:function(){var i=this.ownerDocument||this,o=je.access(i,t);o||i.addEventListener(e,n,!0),je.access(i,t,(o||0)+1)},teardown:function(){var i=this.ownerDocument||this,o=je.access(i,t)-1;o?je.access(i,t,o):(i.removeEventListener(e,n,!0),je.remove(i,t))}}});var Pt=e.location,At=Date.now(),Nt=/\?/;he.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(t){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||he.error("Invalid XML: "+t),n};var Lt=/\[\]$/,jt=/\r?\n/g,Ot=/^(?:submit|button|image|reset|file)$/i,Dt=/^(?:input|select|textarea|keygen)/i;he.param=function(e,t){var n,i=[],o=function(e,t){var n=ce(t)?t():t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!he.isPlainObject(e))he.each(e,function(){o(this.name,this.value)});else for(n in e)U(n,e[n],t,o);return i.join("&")},he.fn.extend({serialize:function(){return he.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=he.prop(this,"elements");return e?he.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!he(this).is(":disabled")&&Dt.test(this.nodeName)&&!Ot.test(e)&&(this.checked||!Be.test(e))}).map(function(e,t){var n=he(this).val();return null==n?null:Array.isArray(n)?he.map(n,function(e){return{name:t.name,value:e.replace(jt,"\r\n")}}):{name:t.name,value:n.replace(jt,"\r\n")}}).get()}});var zt=/%20/g,Rt=/#.*$/,Ft=/([?&])_=[^&]*/,Mt=/^(.*?):[ \t]*([^\r\n]*)$/gm,_t=/^(?:GET|HEAD)$/,Wt=/^\/\//,Vt={},qt={},Ht="*/".concat("*"),$t=Z.createElement("a");$t.href=Pt.href,he.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Pt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Pt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ht,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":he.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Q(Q(e,he.ajaxSettings),t):Q(he.ajaxSettings,e)},ajaxPrefilter:Y(Vt),ajaxTransport:Y(qt),ajax:function(t,n){function i(t,n,i,a){var u,d,f,x,w,C=n;c||(c=!0,l&&e.clearTimeout(l),o=void 0,s=a||"",S.readyState=0<t?4:0,u=200<=t&&t<300||304===t,i&&(x=function(e,t,n){for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}s||(s=o)}r=r||s}if(r)return r!==l[0]&&l.unshift(r),n[r]}(h,S,i)),x=function(e,t,n,i){var o,r,s,a,l,u={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)u[s.toLowerCase()]=e.converters[s];for(r=c.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=c.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(s=u[l+" "+r]||u["* "+r]))for(o in u)if((a=o.split(" "))[1]===r&&(s=u[l+" "+a[0]]||u["* "+a[0]])){!0===s?s=u[o]:!0!==u[o]&&(r=a[0],c.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}(h,x,S,u),u?(h.ifModified&&((w=S.getResponseHeader("Last-Modified"))&&(he.lastModified[r]=w),(w=S.getResponseHeader("etag"))&&(he.etag[r]=w)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=x.state,d=x.data,u=!(f=x.error))):(f=C,!t&&C||(C="error",t<0&&(t=0))),S.status=t,S.statusText=(n||C)+"",u?v.resolveWith(m,[d,C,S]):v.rejectWith(m,[S,C,f]),S.statusCode(b),b=void 0,p&&g.trigger(u?"ajaxSuccess":"ajaxError",[S,h,u?d:f]),y.fireWith(m,[S,C]),p&&(g.trigger("ajaxComplete",[S,h]),--he.active||he.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var o,r,s,a,l,u,c,p,d,f,h=he.ajaxSetup({},n),m=h.context||h,g=h.context&&(m.nodeType||m.jquery)?he(m):he.event,v=he.Deferred(),y=he.Callbacks("once memory"),b=h.statusCode||{},x={},w={},C="canceled",S={readyState:0,getResponseHeader:function(e){var t;if(c){if(!a)for(a={};t=Mt.exec(s);)a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?s:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,x[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)S.always(e[S.status]);else for(t in e)b[t]=[b[t],e[t]];return this},abort:function(e){var t=e||C;return o&&o.abort(t),i(0,t),this}};if(v.promise(S),h.url=((t||h.url||Pt.href)+"").replace(Wt,Pt.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Ee)||[""],null==h.crossDomain){u=Z.createElement("a");try{u.href=h.url,u.href=u.href,h.crossDomain=$t.protocol+"//"+$t.host!=u.protocol+"//"+u.host}catch(t){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=he.param(h.data,h.traditional)),G(Vt,h,n,S),c)return S;for(d in(p=he.event&&h.global)&&0==he.active++&&he.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!_t.test(h.type),r=h.url.replace(Rt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(zt,"+")):(f=h.url.slice(r.length),h.data&&(h.processData||"string"==typeof h.data)&&(r+=(Nt.test(r)?"&":"?")+h.data,delete h.data),!1===h.cache&&(r=r.replace(Ft,"$1"),f=(Nt.test(r)?"&":"?")+"_="+At+++f),h.url=r+f),h.ifModified&&(he.lastModified[r]&&S.setRequestHeader("If-Modified-Since",he.lastModified[r]),he.etag[r]&&S.setRequestHeader("If-None-Match",he.etag[r])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&S.setRequestHeader("Content-Type",h.contentType),S.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Ht+"; q=0.01":""):h.accepts["*"]),h.headers)S.setRequestHeader(d,h.headers[d]);if(h.beforeSend&&(!1===h.beforeSend.call(m,S,h)||c))return S.abort();if(C="abort",y.add(h.complete),S.done(h.success),S.fail(h.error),o=G(qt,h,n,S)){if(S.readyState=1,p&&g.trigger("ajaxSend",[S,h]),c)return S;h.async&&0<h.timeout&&(l=e.setTimeout(function(){S.abort("timeout")},h.timeout));try{c=!1,o.send(x,i)}catch(t){if(c)throw t;i(-1,t)}}else i(-1,"No Transport");return S},getJSON:function(e,t,n){return he.get(e,t,n,"json")},getScript:function(e,t){return he.get(e,void 0,t,"script")}}),he.each(["get","post"],function(e,t){he[t]=function(e,n,i,o){return ce(n)&&(o=o||i,i=n,n=void 0),he.ajax(he.extend({url:e,type:t,dataType:o,data:n,success:i},he.isPlainObject(e)&&e))}}),he._evalUrl=function(e,t){return he.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){he.globalEval(e,t)}})},he.fn.extend({wrapAll:function(e){var t;return this[0]&&(ce(e)&&(e=e.call(this[0])),t=he(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return ce(e)?this.each(function(t){he(this).wrapInner(e.call(this,t))}):this.each(function(){var t=he(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ce(e);return this.each(function(n){he(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){he(this).replaceWith(this.childNodes)}),this}}),he.expr.pseudos.hidden=function(e){return!he.expr.pseudos.visible(e)},he.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},he.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},Xt=he.ajaxSettings.xhr();ue.cors=!!Xt&&"withCredentials"in Xt,ue.ajax=Xt=!!Xt,he.ajaxTransport(function(t){var n,i;if(ue.cors||Xt&&!t.crossDomain)return{send:function(o,r){var s,a=t.xhr();if(a.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)a[s]=t.xhrFields[s];for(s in t.mimeType&&a.overrideMimeType&&a.overrideMimeType(t.mimeType),t.crossDomain||o["X-Requested-With"]||(o["X-Requested-With"]="XMLHttpRequest"),o)a.setRequestHeader(s,o[s]);n=function(e){return function(){n&&(n=i=a.onload=a.onerror=a.onabort=a.ontimeout=a.onreadystatechange=null,"abort"===e?a.abort():"error"===e?"number"!=typeof a.status?r(0,"error"):r(a.status,a.statusText):r(Bt[a.status]||a.status,a.statusText,"text"!==(a.responseType||"text")||"string"!=typeof a.responseText?{binary:a.response}:{text:a.responseText},a.getAllResponseHeaders()))}},a.onload=n(),i=a.onerror=a.ontimeout=n("error"),void 0!==a.onabort?a.onabort=i:a.onreadystatechange=function(){4===a.readyState&&e.setTimeout(function(){n&&i()})},n=n("abort");try{a.send(t.hasContent&&t.data||null)}catch(o){if(n)throw o}},abort:function(){n&&n()}}}),he.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),he.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return he.globalEval(e),e}}}),he.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),he.ajaxTransport("script",function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(i,o){t=he("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),Z.head.appendChild(t[0])},abort:function(){n&&n()}}});var Ut,Yt=[],Gt=/(=)\?(?=&|$)|\?\?/;he.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||he.expando+"_"+At++;return this[e]=!0,e}}),he.ajaxPrefilter("json jsonp",function(t,n,i){var o,r,s,a=!1!==t.jsonp&&(Gt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gt.test(t.data)&&"data");if(a||"jsonp"===t.dataTypes[0])return o=t.jsonpCallback=ce(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Gt,"$1"+o):!1!==t.jsonp&&(t.url+=(Nt.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return s||he.error(o+" was not called"),s[0]},t.dataTypes[0]="json",r=e[o],e[o]=function(){s=arguments},i.always(function(){void 0===r?he(e).removeProp(o):e[o]=r,t[o]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(o)),s&&ce(r)&&r(s[0]),s=r=void 0}),"script"}),ue.createHTMLDocument=((Ut=Z.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),he.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(ue.createHTMLDocument?((i=(t=Z.implementation.createHTMLDocument("")).createElement("base")).href=Z.location.href,t.head.appendChild(i)):t=Z),r=!n&&[],(o=xe.exec(e))?[t.createElement(o[1])]:(o=x([e],t,r),r&&r.length&&he(r).remove(),he.merge([],o.childNodes)));var i,o,r},he.fn.load=function(e,t,n){var i,o,r,s=this,a=e.indexOf(" ");return-1<a&&(i=$(e.slice(a)),e=e.slice(0,a)),ce(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),0<s.length&&he.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){r=arguments,s.html(i?he("<div>").append(he.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},he.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){he.fn[t]=function(e){return this.on(t,e)}}),he.expr.pseudos.animated=function(e){return he.grep(he.timers,function(t){return e===t.elem}).length},he.offset={setOffset:function(e,t,n){var i,o,r,s,a,l,u=he.css(e,"position"),c=he(e),p={};"static"===u&&(e.style.position="relative"),a=c.offset(),r=he.css(e,"top"),l=he.css(e,"left"),("absolute"===u||"fixed"===u)&&-1<(r+l).indexOf("auto")?(s=(i=c.position()).top,o=i.left):(s=parseFloat(r)||0,o=parseFloat(l)||0),ce(t)&&(t=t.call(e,n,he.extend({},a))),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+o),"using"in t?t.using.call(e,p):c.css(p)}},he.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){he.offset.setOffset(this,e,t)});var t,n,i=this[0];return i?i.getClientRects().length?(t=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],o={top:0,left:0};if("fixed"===he.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===he.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((o=he(e).offset()).top+=he.css(e,"borderTopWidth",!0),o.left+=he.css(e,"borderLeftWidth",!0))}return{top:t.top-o.top-he.css(i,"marginTop",!0),left:t.left-o.left-he.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===he.css(e,"position");)e=e.offsetParent;return e||_e})}}),he.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;he.fn[e]=function(i){return Pe(this,function(e,i,o){var r;if(pe(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===o)return r?r[t]:e[i];r?r.scrollTo(n?r.pageXOffset:o,n?o:r.pageYOffset):e[i]=o},e,i,arguments.length)}}),he.each(["top","left"],function(e,t){he.cssHooks[t]=O(ue.pixelPosition,function(e,n){if(n)return n=j(e,t),rt.test(n)?he(e).position()[t]+"px":n})}),he.each({Height:"height",Width:"width"},function(e,t){he.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){he.fn[i]=function(o,r){var s=arguments.length&&(n||"boolean"!=typeof o),a=n||(!0===o||!0===r?"margin":"border");return Pe(this,function(t,n,o){var r;return pe(t)?0===i.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===o?he.css(t,n,a):he.style(t,n,o,a)},t,s?o:void 0,s)}})}),he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){he.fn[t]=function(e,n){return 0<arguments.length?this.on(t,null,e,n):this.trigger(t)}}),he.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),he.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),he.proxy=function(e,t){var n,i,o;if("string"==typeof t&&(n=e[t],t=e,e=n),ce(e))return i=ee.call(arguments,2),(o=function(){return e.apply(t||this,i.concat(ee.call(arguments)))}).guid=e.guid=e.guid||he.guid++,o},he.holdReady=function(e){e?he.readyWait++:he.ready(!0)},he.isArray=Array.isArray,he.parseJSON=JSON.parse,he.nodeName=r,he.isFunction=ce,he.isWindow=pe,he.camelCase=f,he.type=i,he.now=Date.now,he.isNumeric=function(e){var t=he.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return he});var Qt=e.jQuery,Jt=e.$;return he.noConflict=function(t){return e.$===he&&(e.$=Jt),t&&e.jQuery===he&&(e.jQuery=Qt),he},t||(e.jQuery=e.$=he),he});var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===e.type||e.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(e.className)},FastClick.prototype.needsFocus=function(e){"use strict";switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},FastClick.prototype.sendClick=function(e,t){"use strict";var n,i;document.activeElement&&document.activeElement!==e&&document.activeElement.blur(),i=t.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(e),!0,!0,window,1,i.screenX,i.screenY,i.clientX,i.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,e.dispatchEvent(n)},FastClick.prototype.determineEventType=function(e){"use strict";return deviceIsAndroid&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(e){"use strict";var t;deviceIsIOS&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},FastClick.prototype.updateScrollParent=function(e){"use strict";var t,n;if(!(t=e.fastClickScrollParent)||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(e){"use strict";return e.nodeType===Node.TEXT_NODE?e.parentNode:e},FastClick.prototype.onTouchStart=function(e){"use strict";var t,n,i;if(e.targetTouches.length>1)return!0;if(t=this.getTargetElementFromEventTarget(e.target),n=e.targetTouches[0],deviceIsIOS){if(i=window.getSelection(),i.rangeCount&&!i.isCollapsed)return!0;if(!deviceIsIOS4){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(t)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=t,this.touchStartX=n.pageX,this.touchStartY=n.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(e){"use strict";var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},FastClick.prototype.onTouchMove=function(e){"use strict";return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},FastClick.prototype.findControl=function(e){"use strict";return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(e){"use strict";var t,n,i,o,r,s=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(r=e.changedTouches[0],s=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||s,s.fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(i=s.tagName.toLowerCase())){if(t=this.findControl(s)){if(this.focus(s),deviceIsAndroid)return!1;s=t}}else if(this.needsFocus(s))return e.timeStamp-n>100||deviceIsIOS&&window.top!==window&&"input"===i?(this.targetElement=null,!1):(this.focus(s),this.sendClick(s,e),deviceIsIOS&&"select"===i||(this.targetElement=null,e.preventDefault()),!1);return!(!deviceIsIOS||deviceIsIOS4||!(o=s.fastClickScrollParent)||o.fastClickLastScrollTop===o.scrollTop)||(this.needsClick(s)||(e.preventDefault(),this.sendClick(s,e)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(e){"use strict";return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},FastClick.prototype.onClick=function(e){"use strict";var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||(t=this.onMouse(e),t||(this.targetElement=null),t)},FastClick.prototype.destroy=function(){"use strict";var e=this.layer;deviceIsAndroid&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(e){"use strict";var t,n,i;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(t=document.querySelector("meta[name=viewport]")))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}
return"none"===e.style.msTouchAction},FastClick.attach=function(e,t){"use strict";return new FastClick(e,t)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick,/*!
 *  jQuery OwlCarousel v1.3.2
 *
 *  Copyright (c) 2013 Bartosz Wojciechowski
 *  http://www.owlgraphic.com/owlcarousel/
 *
 *  Licensed under MIT
 *
 */
"function"!=typeof Object.create&&(Object.create=function(e){function t(){}return t.prototype=e,new t}),function(e,t,n){var i={init:function(t,n){var i=this;i.$elem=e(n),i.options=e.extend({},e.fn.owlCarousel.options,i.$elem.data(),t),i.userOptions=t,i.loadContent()},loadContent:function(){function t(e){var t,n="";if("function"==typeof i.options.jsonSuccess)i.options.jsonSuccess.apply(this,[e]);else{for(t in e.owl)e.owl.hasOwnProperty(t)&&(n+=e.owl[t].item);i.$elem.html(n)}i.logIn()}var n,i=this;"function"==typeof i.options.beforeInit&&i.options.beforeInit.apply(this,[i.$elem]),"string"==typeof i.options.jsonPath?(n=i.options.jsonPath,e.getJSON(n,t)):i.logIn()},logIn:function(){var e=this;e.$elem.data("owl-originalStyles",e.$elem.attr("style")).data("owl-originalClasses",e.$elem.attr("class")),e.$elem.css({opacity:0}),e.orignalItems=e.options.items,e.checkBrowser(),e.wrapperWidth=0,e.checkVisible=null,e.setVars()},setVars:function(){var e=this;if(0===e.$elem.children().length)return!1;e.baseClass(),e.eventTypes(),e.$userItems=e.$elem.children(),e.itemsAmount=e.$userItems.length,e.wrapItems(),e.$owlItems=e.$elem.find(".owl-item"),e.$owlWrapper=e.$elem.find(".owl-wrapper"),e.playDirection="next",e.prevItem=0,e.prevArr=[0],e.currentItem=0,e.customEvents(),e.onStartup()},onStartup:function(){var e=this;e.updateItems(),e.calculateAll(),e.buildControls(),e.updateControls(),e.response(),e.moveEvents(),e.stopOnHover(),e.owlStatus(),!1!==e.options.transitionStyle&&e.transitionTypes(e.options.transitionStyle),!0===e.options.autoPlay&&(e.options.autoPlay=5e3),e.play(),e.$elem.find(".owl-wrapper").css("display","block"),e.$elem.is(":visible")?e.$elem.css("opacity",1):e.watchVisibility(),e.onstartup=!1,e.eachMoveUpdate(),"function"==typeof e.options.afterInit&&e.options.afterInit.apply(this,[e.$elem])},eachMoveUpdate:function(){var e=this;!0===e.options.lazyLoad&&e.lazyLoad(),!0===e.options.autoHeight&&e.autoHeight(),e.onVisibleItems(),"function"==typeof e.options.afterAction&&e.options.afterAction.apply(this,[e.$elem])},updateVars:function(){var e=this;"function"==typeof e.options.beforeUpdate&&e.options.beforeUpdate.apply(this,[e.$elem]),e.watchVisibility(),e.updateItems(),e.calculateAll(),e.updatePosition(),e.updateControls(),e.eachMoveUpdate(),"function"==typeof e.options.afterUpdate&&e.options.afterUpdate.apply(this,[e.$elem])},reload:function(){var e=this;t.setTimeout(function(){e.updateVars()},0)},watchVisibility:function(){var e=this;if(!1!==e.$elem.is(":visible"))return!1;e.$elem.css({opacity:0}),t.clearInterval(e.autoPlayInterval),t.clearInterval(e.checkVisible),e.checkVisible=t.setInterval(function(){e.$elem.is(":visible")&&(e.reload(),e.$elem.animate({opacity:1},200),t.clearInterval(e.checkVisible))},500)},wrapItems:function(){var e=this;e.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'),e.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'),e.wrapperOuter=e.$elem.find(".owl-wrapper-outer"),e.$elem.css("display","block")},baseClass:function(){var e=this,t=e.$elem.hasClass(e.options.baseClass),n=e.$elem.hasClass(e.options.theme);t||e.$elem.addClass(e.options.baseClass),n||e.$elem.addClass(e.options.theme)},updateItems:function(){var t,n,i=this;if(!1===i.options.responsive)return!1;if(!0===i.options.singleItem)return i.options.items=i.orignalItems=1,i.options.itemsCustom=!1,i.options.itemsDesktop=!1,i.options.itemsDesktopSmall=!1,i.options.itemsTablet=!1,i.options.itemsTabletSmall=!1,i.options.itemsMobile=!1,!1;if(t=e(i.options.responsiveBaseWidth).width(),t>(i.options.itemsDesktop[0]||i.orignalItems)&&(i.options.items=i.orignalItems),!1!==i.options.itemsCustom)for(i.options.itemsCustom.sort(function(e,t){return e[0]-t[0]}),n=0;n<i.options.itemsCustom.length;n+=1)i.options.itemsCustom[n][0]<=t&&(i.options.items=i.options.itemsCustom[n][1]);else t<=i.options.itemsDesktop[0]&&!1!==i.options.itemsDesktop&&(i.options.items=i.options.itemsDesktop[1]),t<=i.options.itemsDesktopSmall[0]&&!1!==i.options.itemsDesktopSmall&&(i.options.items=i.options.itemsDesktopSmall[1]),t<=i.options.itemsTablet[0]&&!1!==i.options.itemsTablet&&(i.options.items=i.options.itemsTablet[1]),t<=i.options.itemsTabletSmall[0]&&!1!==i.options.itemsTabletSmall&&(i.options.items=i.options.itemsTabletSmall[1]),t<=i.options.itemsMobile[0]&&!1!==i.options.itemsMobile&&(i.options.items=i.options.itemsMobile[1]);i.options.items>i.itemsAmount&&!0===i.options.itemsScaleUp&&(i.options.items=i.itemsAmount)},response:function(){var n,i,o=this;if(!0!==o.options.responsive)return!1;i=e(t).width(),o.resizer=function(){e(t).width()!==i&&(!1!==o.options.autoPlay&&t.clearInterval(o.autoPlayInterval),t.clearTimeout(n),n=t.setTimeout(function(){i=e(t).width(),o.updateVars()},o.options.responsiveRefreshRate))},e(t).resize(o.resizer)},updatePosition:function(){var e=this;e.jumpTo(e.currentItem),!1!==e.options.autoPlay&&e.checkAp()},appendItemsSizes:function(){var t=this,n=0,i=t.itemsAmount-t.options.items;t.$owlItems.each(function(o){var r=e(this);r.css({width:t.itemWidth}).data("owl-item",Number(o)),o%t.options.items!=0&&o!==i||o>i||(n+=1),r.data("owl-roundPages",n)})},appendWrapperSizes:function(){var e=this,t=e.$owlItems.length*e.itemWidth;e.$owlWrapper.css({width:2*t,left:0}),e.appendItemsSizes()},calculateAll:function(){var e=this;e.calculateWidth(),e.appendWrapperSizes(),e.loops(),e.max()},calculateWidth:function(){var e=this;e.itemWidth=Math.round(e.$elem.width()/e.options.items)},max:function(){var e=this,t=-1*(e.itemsAmount*e.itemWidth-e.options.items*e.itemWidth);return e.options.items>e.itemsAmount?(e.maximumItem=0,t=0,e.maximumPixels=0):(e.maximumItem=e.itemsAmount-e.options.items,e.maximumPixels=t),t},min:function(){return 0},loops:function(){var t,n,i,o=this,r=0,s=0;for(o.positionsInArray=[0],o.pagesInArray=[],t=0;t<o.itemsAmount;t+=1)s+=o.itemWidth,o.positionsInArray.push(-s),!0===o.options.scrollPerPage&&(n=e(o.$owlItems[t]),(i=n.data("owl-roundPages"))!==r&&(o.pagesInArray[r]=o.positionsInArray[t],r=i))},buildControls:function(){var t=this;!0!==t.options.navigation&&!0!==t.options.pagination||(t.owlControls=e('<div class="owl-controls"/>').toggleClass("clickable",!t.browser.isTouch).appendTo(t.$elem)),!0===t.options.pagination&&t.buildPagination(),!0===t.options.navigation&&t.buildButtons()},buildButtons:function(){var t=this,n=e('<div class="owl-buttons"/>');t.owlControls.append(n),t.buttonPrev=e("<div/>",{class:"owl-prev",html:t.options.navigationText[0]||""}),t.buttonNext=e("<div/>",{class:"owl-next",html:t.options.navigationText[1]||""}),n.append(t.buttonPrev).append(t.buttonNext),n.on("touchstart.owlControls mousedown.owlControls",'div[class^="owl"]',function(e){e.preventDefault()}),n.on("touchend.owlControls mouseup.owlControls",'div[class^="owl"]',function(n){n.preventDefault(),e(this).hasClass("owl-next")?t.next():t.prev()})},buildPagination:function(){var t=this;t.paginationWrapper=e('<div class="owl-pagination"/>'),t.owlControls.append(t.paginationWrapper),t.paginationWrapper.on("touchend.owlControls mouseup.owlControls",".owl-page",function(n){n.preventDefault(),Number(e(this).data("owl-page"))!==t.currentItem&&t.goTo(Number(e(this).data("owl-page")),!0)})},updatePagination:function(){var t,n,i,o,r,s,a=this;if(!1===a.options.pagination)return!1;for(a.paginationWrapper.html(""),t=0,n=a.itemsAmount-a.itemsAmount%a.options.items,o=0;o<a.itemsAmount;o+=1)o%a.options.items==0&&(t+=1,n===o&&(i=a.itemsAmount-a.options.items),r=e("<div/>",{class:"owl-page"}),s=e("<span></span>",{text:!0===a.options.paginationNumbers?t:"",class:!0===a.options.paginationNumbers?"owl-numbers":""}),r.append(s),r.data("owl-page",n===o?i:o),r.data("owl-roundPages",t),a.paginationWrapper.append(r));a.checkPagination()},checkPagination:function(){var t=this;if(!1===t.options.pagination)return!1;t.paginationWrapper.find(".owl-page").each(function(){e(this).data("owl-roundPages")===e(t.$owlItems[t.currentItem]).data("owl-roundPages")&&(t.paginationWrapper.find(".owl-page").removeClass("active"),e(this).addClass("active"))})},checkNavigation:function(){var e=this;if(!1===e.options.navigation)return!1;!1===e.options.rewindNav&&(0===e.currentItem&&0===e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.addClass("disabled")):0===e.currentItem&&0!==e.maximumItem?(e.buttonPrev.addClass("disabled"),e.buttonNext.removeClass("disabled")):e.currentItem===e.maximumItem?(e.buttonPrev.removeClass("disabled"),e.buttonNext.addClass("disabled")):0!==e.currentItem&&e.currentItem!==e.maximumItem&&(e.buttonPrev.removeClass("disabled"),e.buttonNext.removeClass("disabled")))},updateControls:function(){var e=this;e.updatePagination(),e.checkNavigation(),e.owlControls&&(e.options.items>=e.itemsAmount?e.owlControls.hide():e.owlControls.show())},destroyControls:function(){var e=this;e.owlControls&&e.owlControls.remove()},next:function(e){var t=this;if(t.isTransition)return!1;if(t.currentItem+=!0===t.options.scrollPerPage?t.options.items:1,t.currentItem>t.maximumItem+(!0===t.options.scrollPerPage?t.options.items-1:0)){if(!0!==t.options.rewindNav)return t.currentItem=t.maximumItem,!1;t.currentItem=0,e="rewind"}t.goTo(t.currentItem,e)},prev:function(e){var t=this;if(t.isTransition)return!1;if(!0===t.options.scrollPerPage&&t.currentItem>0&&t.currentItem<t.options.items?t.currentItem=0:t.currentItem-=!0===t.options.scrollPerPage?t.options.items:1,t.currentItem<0){if(!0!==t.options.rewindNav)return t.currentItem=0,!1;t.currentItem=t.maximumItem,e="rewind"}t.goTo(t.currentItem,e)},goTo:function(e,n,i){var o,r=this;return!r.isTransition&&("function"==typeof r.options.beforeMove&&r.options.beforeMove.apply(this,[r.$elem]),e>=r.maximumItem?e=r.maximumItem:e<=0&&(e=0),r.currentItem=r.owl.currentItem=e,!1!==r.options.transitionStyle&&"drag"!==i&&1===r.options.items&&!0===r.browser.support3d?(r.swapSpeed(0),!0===r.browser.support3d?r.transition3d(r.positionsInArray[e]):r.css2slide(r.positionsInArray[e],1),r.afterGo(),r.singleItemTransition(),!1):(o=r.positionsInArray[e],!0===r.browser.support3d?(r.isCss3Finish=!1,!0===n?(r.swapSpeed("paginationSpeed"),t.setTimeout(function(){r.isCss3Finish=!0},r.options.paginationSpeed)):"rewind"===n?(r.swapSpeed(r.options.rewindSpeed),t.setTimeout(function(){r.isCss3Finish=!0},r.options.rewindSpeed)):(r.swapSpeed("slideSpeed"),t.setTimeout(function(){r.isCss3Finish=!0},r.options.slideSpeed)),r.transition3d(o)):!0===n?r.css2slide(o,r.options.paginationSpeed):"rewind"===n?r.css2slide(o,r.options.rewindSpeed):r.css2slide(o,r.options.slideSpeed),void r.afterGo()))},jumpTo:function(e){var t=this;"function"==typeof t.options.beforeMove&&t.options.beforeMove.apply(this,[t.$elem]),e>=t.maximumItem||-1===e?e=t.maximumItem:e<=0&&(e=0),t.swapSpeed(0),!0===t.browser.support3d?t.transition3d(t.positionsInArray[e]):t.css2slide(t.positionsInArray[e],1),t.currentItem=t.owl.currentItem=e,t.afterGo()},afterGo:function(){var e=this;e.prevArr.push(e.currentItem),e.prevItem=e.owl.prevItem=e.prevArr[e.prevArr.length-2],e.prevArr.shift(0),e.prevItem!==e.currentItem&&(e.checkPagination(),e.checkNavigation(),e.eachMoveUpdate(),!1!==e.options.autoPlay&&e.checkAp()),"function"==typeof e.options.afterMove&&e.prevItem!==e.currentItem&&e.options.afterMove.apply(this,[e.$elem])},stop:function(){var e=this;e.apStatus="stop",t.clearInterval(e.autoPlayInterval)},checkAp:function(){var e=this;"stop"!==e.apStatus&&e.play()},play:function(){var e=this;if(e.apStatus="play",!1===e.options.autoPlay)return!1;t.clearInterval(e.autoPlayInterval),e.autoPlayInterval=t.setInterval(function(){e.next(!0)},e.options.autoPlay)},swapSpeed:function(e){var t=this;"slideSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.slideSpeed)):"paginationSpeed"===e?t.$owlWrapper.css(t.addCssSpeed(t.options.paginationSpeed)):"string"!=typeof e&&t.$owlWrapper.css(t.addCssSpeed(e))},addCssSpeed:function(e){return{"-webkit-transition":"all "+e+"ms ease","-moz-transition":"all "+e+"ms ease","-o-transition":"all "+e+"ms ease",transition:"all "+e+"ms ease"}},removeTransition:function(){return{"-webkit-transition":"","-moz-transition":"","-o-transition":"",transition:""}},doTranslate:function(e){return{"-webkit-transform":"translate3d("+e+"px, 0px, 0px)","-moz-transform":"translate3d("+e+"px, 0px, 0px)","-o-transform":"translate3d("+e+"px, 0px, 0px)","-ms-transform":"translate3d("+e+"px, 0px, 0px)",transform:"translate3d("+e+"px, 0px,0px)"}},transition3d:function(e){var t=this;t.$owlWrapper.css(t.doTranslate(e))},css2move:function(e){this.$owlWrapper.css({left:e})},css2slide:function(e,t){var n=this;n.isCssFinish=!1,n.$owlWrapper.stop(!0,!0).animate({left:e},{duration:t||n.options.slideSpeed,complete:function(){n.isCssFinish=!0}})},checkBrowser:function(){var e,i,o,r,s=this,a="translate3d(0px, 0px, 0px)",l=n.createElement("div");l.style.cssText="  -moz-transform:"+a+"; -ms-transform:"+a+"; -o-transform:"+a+"; -webkit-transform:"+a+"; transform:"+a,e=/translate3d\(0px, 0px, 0px\)/g,i=l.style.cssText.match(e),o=null!==i&&1===i.length,r="ontouchstart"in t||t.navigator.msMaxTouchPoints,s.browser={support3d:o,isTouch:r}},moveEvents:function(){var e=this;!1===e.options.mouseDrag&&!1===e.options.touchDrag||(e.gestures(),e.disabledEvents())},eventTypes:function(){var e=this,t=["s","e","x"];e.ev_types={},!0===e.options.mouseDrag&&!0===e.options.touchDrag?t=["touchstart.owl mousedown.owl","touchmove.owl mousemove.owl","touchend.owl touchcancel.owl mouseup.owl"]:!1===e.options.mouseDrag&&!0===e.options.touchDrag?t=["touchstart.owl","touchmove.owl","touchend.owl touchcancel.owl"]:!0===e.options.mouseDrag&&!1===e.options.touchDrag&&(t=["mousedown.owl","mousemove.owl","mouseup.owl"]),e.ev_types.start=t[0],e.ev_types.move=t[1],e.ev_types.end=t[2]},disabledEvents:function(){var t=this;t.$elem.on("dragstart.owl",function(e){e.preventDefault()}),t.$elem.on("mousedown.disableTextSelect",function(t){return e(t.target).is("input, textarea, select, option")})},gestures:function(){function i(e){if(void 0!==e.touches)return{x:e.touches[0].pageX,y:e.touches[0].pageY};if(void 0===e.touches){if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY};if(void 0===e.pageX)return{x:e.clientX,y:e.clientY}}}function o(t){"on"===t?(e(n).on(l.ev_types.move,s),e(n).on(l.ev_types.end,a)):"off"===t&&(e(n).off(l.ev_types.move),e(n).off(l.ev_types.end))}function r(n){var r,s=n.originalEvent||n||t.event;if(3===s.which)return!1;if(!(l.itemsAmount<=l.options.items)){if(!1===l.isCssFinish&&!l.options.dragBeforeAnimFinish)return!1;if(!1===l.isCss3Finish&&!l.options.dragBeforeAnimFinish)return!1;!1!==l.options.autoPlay&&t.clearInterval(l.autoPlayInterval),!0===l.browser.isTouch||l.$owlWrapper.hasClass("grabbing")||l.$owlWrapper.addClass("grabbing"),l.newPosX=0,l.newRelativeX=0,e(this).css(l.removeTransition()),r=e(this).position(),u.relativePos=r.left,u.offsetX=i(s).x-r.left,u.offsetY=i(s).y-r.top,o("on"),u.sliding=!1,u.targetElement=s.target||s.srcElement}}function s(o){var r,s,a=o.originalEvent||o||t.event;l.newPosX=i(a).x-u.offsetX,l.newPosY=i(a).y-u.offsetY,l.newRelativeX=l.newPosX-u.relativePos,"function"==typeof l.options.startDragging&&!0!==u.dragging&&0!==l.newRelativeX&&(u.dragging=!0,l.options.startDragging.apply(l,[l.$elem])),(l.newRelativeX>8||l.newRelativeX<-8)&&!0===l.browser.isTouch&&(void 0!==a.preventDefault?a.preventDefault():a.returnValue=!1,u.sliding=!0),(l.newPosY>10||l.newPosY<-10)&&!1===u.sliding&&e(n).off("touchmove.owl"),r=function(){return l.newRelativeX/5},s=function(){return l.maximumPixels+l.newRelativeX/5},l.newPosX=Math.max(Math.min(l.newPosX,r()),s()),!0===l.browser.support3d?l.transition3d(l.newPosX):l.css2move(l.newPosX)}function a(n){var i,r,s,a=n.originalEvent||n||t.event;a.target=a.target||a.srcElement,u.dragging=!1,!0!==l.browser.isTouch&&l.$owlWrapper.removeClass("grabbing"),l.newRelativeX<0?l.dragDirection=l.owl.dragDirection="left":l.dragDirection=l.owl.dragDirection="right",0!==l.newRelativeX&&(i=l.getNewPosition(),l.goTo(i,!1,"drag"),u.targetElement===a.target&&!0!==l.browser.isTouch&&(e(a.target).on("click.disable",function(t){t.stopImmediatePropagation(),t.stopPropagation(),t.preventDefault(),e(t.target).off("click.disable")}),r=e._data(a.target,"events").click,s=r.pop(),r.splice(0,0,s))),o("off")}var l=this,u={offsetX:0,offsetY:0,baseElWidth:0,relativePos:0,position:null,minSwipe:null,maxSwipe:null,sliding:null,dargging:null,targetElement:null};l.isCssFinish=!0,l.$elem.on(l.ev_types.start,".owl-wrapper",r)},getNewPosition:function(){var e=this,t=e.closestItem();return t>e.maximumItem?(e.currentItem=e.maximumItem,t=e.maximumItem):e.newPosX>=0&&(t=0,e.currentItem=0),t},closestItem:function(){var t=this,n=!0===t.options.scrollPerPage?t.pagesInArray:t.positionsInArray,i=t.newPosX,o=null;return e.each(n,function(r,s){i-t.itemWidth/20>n[r+1]&&i-t.itemWidth/20<s&&"left"===t.moveDirection()?(o=s,!0===t.options.scrollPerPage?t.currentItem=e.inArray(o,t.positionsInArray):t.currentItem=r):i+t.itemWidth/20<s&&i+t.itemWidth/20>(n[r+1]||n[r]-t.itemWidth)&&"right"===t.moveDirection()&&(!0===t.options.scrollPerPage?(o=n[r+1]||n[n.length-1],t.currentItem=e.inArray(o,t.positionsInArray)):(o=n[r+1],t.currentItem=r+1))}),t.currentItem},moveDirection:function(){var e,t=this;return t.newRelativeX<0?(e="right",t.playDirection="next"):(e="left",t.playDirection="prev"),e},customEvents:function(){var e=this;e.$elem.on("owl.next",function(){e.next()}),e.$elem.on("owl.prev",function(){e.prev()}),e.$elem.on("owl.play",function(t,n){e.options.autoPlay=n,e.play(),e.hoverStatus="play"}),e.$elem.on("owl.stop",function(){e.stop(),e.hoverStatus="stop"}),e.$elem.on("owl.goTo",function(t,n){e.goTo(n)}),e.$elem.on("owl.jumpTo",function(t,n){e.jumpTo(n)})},stopOnHover:function(){var e=this;!0===e.options.stopOnHover&&!0!==e.browser.isTouch&&!1!==e.options.autoPlay&&(e.$elem.on("mouseover",function(){e.stop()}),e.$elem.on("mouseout",function(){"stop"!==e.hoverStatus&&e.play()}))},lazyLoad:function(){var t,n,i,o,r=this;if(!1===r.options.lazyLoad)return!1;for(t=0;t<r.itemsAmount;t+=1)n=e(r.$owlItems[t]),"loaded"!==n.data("owl-loaded")&&(i=n.data("owl-item"),o=n.find(".lazyOwl"),"string"==typeof o.data("src")?(void 0===n.data("owl-loaded")&&(o.hide(),n.addClass("loading").data("owl-loaded","checked")),(!0!==r.options.lazyFollow||i>=r.currentItem)&&i<r.currentItem+r.options.items&&o.length&&r.lazyPreload(n,o)):n.data("owl-loaded","loaded"))},lazyPreload:function(e,n){function i(){e.data("owl-loaded","loaded").removeClass("loading"),n.removeAttr("data-src"),"fade"===s.options.lazyEffect?n.fadeIn(400):n.show(),"function"==typeof s.options.afterLazyLoad&&s.options.afterLazyLoad.apply(this,[s.$elem])}function o(){a+=1,s.completeImg(n.get(0))||!0===r?i():a<=100?t.setTimeout(o,100):i()}var r,s=this,a=0;"DIV"===n.prop("tagName")?(n.css("background-image","url("+n.data("src")+")"),r=!0):n[0].src=n.data("src"),o()},autoHeight:function(){function n(){var n=e(r.$owlItems[r.currentItem]).height();r.wrapperOuter.css("height",n+"px"),r.wrapperOuter.hasClass("autoHeight")||t.setTimeout(function(){r.wrapperOuter.addClass("autoHeight")},0)}function i(){o+=1,r.completeImg(s.get(0))?n():o<=100?t.setTimeout(i,100):r.wrapperOuter.css("height","")}var o,r=this,s=e(r.$owlItems[r.currentItem]).find("img");void 0!==s.get(0)?(o=0,i()):n()},completeImg:function(e){return!!e.complete&&("undefined"===typeof e.naturalWidth||0!==e.naturalWidth)},onVisibleItems:function(){var t,n=this;for(!0===n.options.addClassActive&&n.$owlItems.removeClass("active"),n.visibleItems=[],t=n.currentItem;t<n.currentItem+n.options.items;t+=1)n.visibleItems.push(t),!0===n.options.addClassActive&&e(n.$owlItems[t]).addClass("active");n.owl.visibleItems=n.visibleItems},transitionTypes:function(e){var t=this;t.outClass="owl-"+e+"-out",t.inClass="owl-"+e+"-in"},singleItemTransition:function(){var e=this,t=e.outClass,n=e.inClass,i=e.$owlItems.eq(e.currentItem),o=e.$owlItems.eq(e.prevItem),r=Math.abs(e.positionsInArray[e.currentItem])+e.positionsInArray[e.prevItem],s=Math.abs(e.positionsInArray[e.currentItem])+e.itemWidth/2,a="webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";e.isTransition=!0,e.$owlWrapper.addClass("owl-origin").css({"-webkit-transform-origin":s+"px","-moz-perspective-origin":s+"px","perspective-origin":s+"px"}),o.css(function(e){return{position:"relative",left:e+"px"}}(r)).addClass(t).on(a,function(){e.endPrev=!0,o.off(a),e.clearTransStyle(o,t)}),i.addClass(n).on(a,function(){e.endCurrent=!0,i.off(a),e.clearTransStyle(i,n)})},clearTransStyle:function(e,t){var n=this;e.css({position:"",left:""}).removeClass(t),n.endPrev&&n.endCurrent&&(n.$owlWrapper.removeClass("owl-origin"),n.endPrev=!1,n.endCurrent=!1,n.isTransition=!1)},owlStatus:function(){var e=this;e.owl={userOptions:e.userOptions,baseElement:e.$elem,userItems:e.$userItems,owlItems:e.$owlItems,currentItem:e.currentItem,prevItem:e.prevItem,visibleItems:e.visibleItems,isTouch:e.browser.isTouch,browser:e.browser,dragDirection:e.dragDirection}},clearEvents:function(){var i=this;i.$elem.off(".owl owl mousedown.disableTextSelect"),e(n).off(".owl owl"),e(t).off("resize",i.resizer)},unWrap:function(){var e=this;0!==e.$elem.children().length&&(e.$owlWrapper.unwrap(),e.$userItems.unwrap().unwrap(),e.owlControls&&e.owlControls.remove()),e.clearEvents(),e.$elem.attr("style",e.$elem.data("owl-originalStyles")||"").attr("class",e.$elem.data("owl-originalClasses"))},destroy:function(){var e=this;e.stop(),t.clearInterval(e.checkVisible),e.unWrap(),e.$elem.removeData()},reinit:function(t){var n=this,i=e.extend({},n.userOptions,t);n.unWrap(),n.init(i,n.$elem)},addItem:function(e,t){var n,i=this;return!!e&&(0===i.$elem.children().length?(i.$elem.append(e),i.setVars(),!1):(i.unWrap(),n=void 0===t||-1===t?-1:t,n>=i.$userItems.length||-1===n?i.$userItems.eq(-1).after(e):i.$userItems.eq(n).before(e),void i.setVars()))},removeItem:function(e){var t,n=this;if(0===n.$elem.children().length)return!1;t=void 0===e||-1===e?-1:e,n.unWrap(),n.$userItems.eq(t).remove(),n.setVars()}};e.fn.owlCarousel=function(t){return this.each(function(){if(!0===e(this).data("owl-init"))return!1;e(this).data("owl-init",!0);var n=Object.create(i);n.init(t,this),e.data(this,"owlCarousel",n)})},e.fn.owlCarousel.options={items:5,itemsCustom:!1,itemsDesktop:[1199,4],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsTabletSmall:!1,itemsMobile:[479,1],singleItem:!1,itemsScaleUp:!1,slideSpeed:200,paginationSpeed:800,rewindSpeed:1e3,autoPlay:!1,stopOnHover:!1,navigation:!1,navigationText:["prev","next"],rewindNav:!0,scrollPerPage:!1,pagination:!0,paginationNumbers:!1,responsive:!0,responsiveRefreshRate:200,responsiveBaseWidth:t,baseClass:"owl-carousel",theme:"owl-theme",lazyLoad:!1,lazyFollow:!0,lazyEffect:"fade",autoHeight:!1,jsonPath:!1,jsonSuccess:!1,dragBeforeAnimFinish:!0,mouseDrag:!0,touchDrag:!0,addClassActive:!1,transitionStyle:!1,beforeUpdate:!1,afterUpdate:!1,beforeInit:!1,afterInit:!1,beforeMove:!1,afterMove:!1,afterAction:!1,startDragging:!1,afterLazyLoad:!1}}(jQuery,window,document),/*!
 * Spin.js
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
function(e,t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Spinner=t()}(this,function(){"use strict";function e(e,t){var n,i=document.createElement(e||"div");for(n in t)i[n]=t[n];return i}function t(e){for(var t=1,n=arguments.length;t<n;t++)e.appendChild(arguments[t]);return e}function n(e,t,n,i){var o=["opacity",t,~~(100*e),n,i].join("-"),r=.01+n/i*100,s=Math.max(1-(1-e)/t*(100-r),e),a=l.substring(0,l.indexOf("Animation")).toLowerCase(),u=a&&"-"+a+"-"||"";return c[o]||(p.insertRule("@"+u+"keyframes "+o+"{0%{opacity:"+s+"}"+r+"%{opacity:"+e+"}"+(r+.01)+"%{opacity:1}"+(r+t)%100+"%{opacity:"+e+"}100%{opacity:"+s+"}}",p.cssRules.length),c[o]=1),o}function i(e,t){var n,i,o=e.style;for(t=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<u.length;i++)if(n=u[i]+t,void 0!==o[n])return n;if(void 0!==o[t])return t}function o(e,t){for(var n in t)e.style[i(e,n)||n]=t[n];return e}function r(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)void 0===e[i]&&(e[i]=n[i])}return e}function s(e,t){return"string"==typeof e?e:e[t%e.length]}function a(e){this.opts=r(e||{},a.defaults,d)}var l,u=["webkit","Moz","ms","O"],c={},p=function(){var n=e("style",{type:"text/css"});return t(document.getElementsByTagName("head")[0],n),n.sheet||n.styleSheet}(),d={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};a.defaults={},r(a.prototype,{spin:function(t){this.stop();var n=this,i=n.opts,r=n.el=o(e(0,{className:i.className}),{position:i.position,width:0,zIndex:i.zIndex});i.radius,i.length,i.width;if(o(r,{left:i.left,top:i.top}),t&&t.insertBefore(r,t.firstChild||null),r.setAttribute("role","progressbar"),n.lines(r,n.opts),!l){var s,a=0,u=(i.lines-1)*(1-i.direction)/2,c=i.fps,p=c/i.speed,d=(1-i.opacity)/(p*i.trail/100),f=p/i.lines;!function e(){a++;for(var t=0;t<i.lines;t++)s=Math.max(1-(a+(i.lines-t)*f)%p*d,i.opacity),n.opacity(r,t*i.direction+u,s,i);n.timeout=n.el&&setTimeout(e,~~(1e3/c))}()}return n},stop:function(){var e=this.el;return e&&(clearTimeout(this.timeout),e.parentNode&&e.parentNode.removeChild(e),this.el=void 0),this},lines:function(i,r){function a(t,n){return o(e(),{position:"absolute",width:r.length+r.width+"px",height:r.width+"px",background:t,boxShadow:n,transformOrigin:"left",transform:"rotate("+~~(360/r.lines*c+r.rotate)+"deg) translate("+r.radius+"px,0)",borderRadius:(r.corners*r.width>>1)+"px"})}for(var u,c=0,p=(r.lines-1)*(1-r.direction)/2;c<r.lines;c++)u=o(e(),{position:"absolute",top:1+~(r.width/2)+"px",transform:r.hwaccel?"translate3d(0,0,0)":"",opacity:r.opacity,animation:l&&n(r.opacity,r.trail,p+c*r.direction,r.lines)+" "+1/r.speed+"s linear infinite"}),r.shadow&&t(u,o(a("#000","0 0 4px #000"),{top:"2px"})),t(i,t(u,a(s(r.color,c),"0 0 1px rgba(0,0,0,.1)")));return i},opacity:function(e,t,n){t<e.childNodes.length&&(e.childNodes[t].style.opacity=n)}});var f=o(e("group"),{behavior:"url(#default#VML)"});return!i(f,"transform")&&f.adj?function(){function n(t,n){return e("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',n)}p.addRule(".spin-vml","behavior:url(#default#VML)"),a.prototype.lines=function(e,i){function r(){return o(n("group",{coordsize:c+" "+c,coordorigin:-u+" "+-u}),{width:c,height:c})}function a(e,a,l){t(d,t(o(r(),{rotation:360/i.lines*e+"deg",left:~~a}),t(o(n("roundrect",{arcsize:i.corners}),{width:u,height:i.width,left:i.radius,top:-i.width>>1,filter:l}),n("fill",{color:s(i.color,e),opacity:i.opacity}),n("stroke",{opacity:0}))))}var l,u=i.length+i.width,c=2*u,p=2*-(i.width+i.length)+"px",d=o(r(),{position:"absolute",top:p,left:p});if(i.shadow)for(l=1;l<=i.lines;l++)a(l,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(l=1;l<=i.lines;l++)a(l);return t(e,d)},a.prototype.opacity=function(e,t,n,i){var o=e.firstChild;i=i.shadow&&i.lines||0,o&&t+i<o.childNodes.length&&(o=o.childNodes[t+i],o=o&&o.firstChild,(o=o&&o.firstChild)&&(o.opacity=n))}}():l=i(f,"animation"),a}),/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 */
function(e){if("object"==typeof exports)e(require("jquery"),require("spin"));else if("function"==typeof define&&define.amd)define(["jquery","spin"],e);else{if(!window.Spinner)throw new Error("Spin.js not present");e(window.jQuery,window.Spinner)}}(function(e,t){e.fn.spin=function(n,i){return this.each(function(){var o=e(this),r=o.data();r.spinner&&(r.spinner.stop(),delete r.spinner),!1!==n&&(n=e.extend({color:i||o.css("color")},e.fn.spin.presets[n]||n),r.spinner=new t(n).spin(this))})},e.fn.spin.presets={tiny:{lines:8,length:2,width:2,radius:3},small:{lines:8,length:4,width:3,radius:5},large:{lines:10,length:8,width:4,radius:8}}}),function(e){function t(e){var t=e.length,i=n.type(e);return"function"!==i&&!n.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===i||0===t||"number"==typeof t&&t>0&&t-1 in e))}if(!e.jQuery){var n=function(e,t){return new n.fn.init(e,t)};n.isWindow=function(e){return null!=e&&e==e.window},n.type=function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?o[s.call(e)]||"object":typeof e},n.isArray=Array.isArray||function(e){return"array"===n.type(e)},n.isPlainObject=function(e){var t;if(!e||"object"!==n.type(e)||e.nodeType||n.isWindow(e))return!1;try{if(e.constructor&&!r.call(e,"constructor")&&!r.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||r.call(e,t)},n.each=function(e,n,i){var o=0,r=e.length,s=t(e);if(i){if(s)for(;o<r&&!1!==n.apply(e[o],i);o++);else for(o in e)if(!1===n.apply(e[o],i))break}else if(s)for(;o<r&&!1!==n.call(e[o],o,e[o]);o++);else for(o in e)if(!1===n.call(e[o],o,e[o]))break;return e},n.data=function(e,t,o){if(void 0===o){var r=e[n.expando],s=r&&i[r];if(void 0===t)return s;if(s&&t in s)return s[t]}else if(void 0!==t){var r=e[n.expando]||(e[n.expando]=++n.uuid);return i[r]=i[r]||{},i[r][t]=o,o}},n.removeData=function(e,t){var o=e[n.expando],r=o&&i[o];r&&n.each(t,function(e,t){delete r[t]})},n.extend=function(){var e,t,i,o,r,s,a=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof a&&(c=a,a=arguments[l]||{},l++),"object"!=typeof a&&"function"!==n.type(a)&&(a={}),l===u&&(a=this,l--);l<u;l++)if(null!=(r=arguments[l]))for(o in r)e=a[o],i=r[o],a!==i&&(c&&i&&(n.isPlainObject(i)||(t=n.isArray(i)))?(t?(t=!1,s=e&&n.isArray(e)?e:[]):s=e&&n.isPlainObject(e)?e:{},a[o]=n.extend(c,s,i)):void 0!==i&&(a[o]=i));return a},n.queue=function(e,i,o){if(e){i=(i||"fx")+"queue";var r=n.data(e,i);return o?(!r||n.isArray(o)?r=n.data(e,i,function(e,n){var i=n||[];return null!=e&&(t(Object(e))?function(e,t){for(var n=+t.length,i=0,o=e.length;i<n;)e[o++]=t[i++];if(n!==n)for(;void 0!==t[i];)e[o++]=t[i++];e.length=o}(i,"string"==typeof e?[e]:e):[].push.call(i,e)),i}(o)):r.push(o),r):r||[]}},n.dequeue=function(e,t){n.each(e.nodeType?[e]:e,function(e,i){t=t||"fx";var o=n.queue(i,t),r=o.shift();"inprogress"===r&&(r=o.shift()),r&&("fx"===t&&o.unshift("inprogress"),r.call(i,function(){n.dequeue(i,t)}))})},n.fn=n.prototype={init:function(e){if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){function e(){for(var e=this.offsetParent||document;e&&"html"===!e.nodeType.toLowerCase&&"static"===e.style.position;)e=e.offsetParent;return e||document}var t=this[0],e=e.apply(t),i=this.offset(),o=/^(?:body|html)$/i.test(e.nodeName)?{top:0,left:0}:n(e).offset();return i.top-=parseFloat(t.style.marginTop)||0,i.left-=parseFloat(t.style.marginLeft)||0,e.style&&(o.top+=parseFloat(e.style.borderTopWidth)||0,o.left+=parseFloat(e.style.borderLeftWidth)||0),{top:i.top-o.top,left:i.left-o.left}}};var i={};n.expando="velocity"+(new Date).getTime(),n.uuid=0;for(var o={},r=o.hasOwnProperty,s=o.toString,a="Boolean Number String Function Array Date RegExp Object Error".split(" "),l=0;l<a.length;l++)o["[object "+a[l]+"]"]=a[l].toLowerCase();n.fn.init.prototype=n.fn,e.Velocity={Utilities:n}}}(window),function(e){"object"==typeof module&&"object"==typeof module.exports?module.exports=e():"function"==typeof define&&define.amd?define(e):e()}(function(){return function(e,t,n,i){/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
function o(e){for(var t=-1,n=e?e.length:0,i=[];++t<n;){var o=e[t];o&&i.push(o)}return i}function r(e){return m.isWrapped(e)?e=[].slice.call(e):m.isNode(e)&&(e=[e]),e}function s(e){var t=d.data(e,"velocity");return null===t?i:t}function a(e){return function(t){return Math.round(t*e)*(1/e)}}/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function l(e,n,i,o){function r(e,t){return 1-3*t+3*e}function s(e,t){return 3*t-6*e}function a(e){return 3*e}function l(e,t,n){return((r(t,n)*e+s(t,n))*e+a(t))*e}function u(e,t,n){return 3*r(t,n)*e*e+2*s(t,n)*e+a(t)}function c(t,n){for(var o=0;o<m;++o){var r=u(n,e,i);if(0===r)return n;n-=(l(n,e,i)-t)/r}return n}function p(){for(var t=0;t<b;++t)S[t]=l(t*x,e,i)}function d(t,n,o){var r,s,a=0;do{s=n+(o-n)/2,r=l(s,e,i)-t,r>0?o=s:n=s}while(Math.abs(r)>v&&++a<y);return s}function f(t){for(var n=0,o=1,r=b-1;o!=r&&S[o]<=t;++o)n+=x;--o;var s=(t-S[o])/(S[o+1]-S[o]),a=n+s*x,l=u(a,e,i);return l>=g?c(t,a):0==l?a:d(t,n,n+x)}function h(){T=!0,e==n&&i==o||p()}var m=4,g=.001,v=1e-7,y=10,b=11,x=1/(b-1),w="Float32Array"in t;if(4!==arguments.length)return!1;for(var C=0;C<4;++C)if("number"!=typeof arguments[C]||isNaN(arguments[C])||!isFinite(arguments[C]))return!1;e=Math.min(e,1),i=Math.min(i,1),e=Math.max(e,0),i=Math.max(i,0);var S=w?new Float32Array(b):new Array(b),T=!1,E=function(t){return T||h(),e===n&&i===o?t:0===t?0:1===t?1:l(f(t),n,o)};E.getControlPoints=function(){return[{x:e,y:n},{x:i,y:o}]};var k="generateBezier("+[e,n,i,o]+")";return E.toString=function(){return k},E}function u(e,t){var n=e;return m.isString(e)?b.Easings[e]||(n=!1):n=m.isArray(e)&&1===e.length?a.apply(null,e):m.isArray(e)&&2===e.length?x.apply(null,e.concat([t])):!(!m.isArray(e)||4!==e.length)&&l.apply(null,e),!1===n&&(n=b.Easings[b.defaults.easing]?b.defaults.easing:y),n}function c(e){if(e)for(var t=(new Date).getTime(),n=0,o=b.State.calls.length;n<o;n++)if(b.State.calls[n]){var r=b.State.calls[n],a=r[0],l=r[2],u=r[3],f=!!u;u||(u=b.State.calls[n][3]=t-16);for(var h=Math.min((t-u)/l.duration,1),g=0,v=a.length;g<v;g++){var y=a[g],x=y.element;if(s(x)){var C=!1;if(l.display!==i&&null!==l.display&&"none"!==l.display){if("flex"===l.display){var T=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];d.each(T,function(e,t){w.setPropertyValue(x,"display",t)})}w.setPropertyValue(x,"display",l.display)}l.visibility!==i&&"hidden"!==l.visibility&&w.setPropertyValue(x,"visibility",l.visibility);for(var E in y)if("element"!==E){var k,I=y[E],P=m.isString(I.easing)?b.Easings[I.easing]:I.easing;if(1===h)k=I.endValue;else if(k=I.startValue+(I.endValue-I.startValue)*P(h),!f&&k===I.currentValue)continue;if(I.currentValue=k,w.Hooks.registered[E]){var A=w.Hooks.getRoot(E),N=s(x).rootPropertyValueCache[A];N&&(I.rootPropertyValue=N)}var L=w.setPropertyValue(x,E,I.currentValue+(0===parseFloat(k)?"":I.unitType),I.rootPropertyValue,I.scrollData);w.Hooks.registered[E]&&(w.Normalizations.registered[A]?s(x).rootPropertyValueCache[A]=w.Normalizations.registered[A]("extract",null,L[1]):s(x).rootPropertyValueCache[A]=L[1]),"transform"===L[0]&&(C=!0)}l.mobileHA&&s(x).transformCache.translate3d===i&&(s(x).transformCache.translate3d="(0px, 0px, 0px)",C=!0),C&&w.flushTransformCache(x)}}l.display!==i&&"none"!==l.display&&(b.State.calls[n][2].display=!1),l.visibility!==i&&"hidden"!==l.visibility&&(b.State.calls[n][2].visibility=!1),l.progress&&l.progress.call(r[1],r[1],h,Math.max(0,u+l.duration-t),u),1===h&&p(n)}b.State.isTicking&&S(c)}function p(e,t){if(!b.State.calls[e])return!1;for(var n=b.State.calls[e][0],o=b.State.calls[e][1],r=b.State.calls[e][2],a=b.State.calls[e][4],l=!1,u=0,c=n.length;u<c;u++){var p=n[u].element;if(t||r.loop||("none"===r.display&&w.setPropertyValue(p,"display",r.display),"hidden"===r.visibility&&w.setPropertyValue(p,"visibility",r.visibility)),!0!==r.loop&&(d.queue(p)[1]===i||!/\.velocityQueueEntryFlag/i.test(d.queue(p)[1]))&&s(p)){s(p).isAnimating=!1,s(p).rootPropertyValueCache={};var f=!1;d.each(w.Lists.transforms3D,function(e,t){var n=/^scale/.test(t)?1:0,o=s(p).transformCache[t];s(p).transformCache[t]!==i&&new RegExp("^\\("+n+"[^.]").test(o)&&(f=!0,delete s(p).transformCache[t])}),r.mobileHA&&(f=!0,delete s(p).transformCache.translate3d),f&&w.flushTransformCache(p),w.Values.removeClass(p,"velocity-animating")}if(!t&&r.complete&&!r.loop&&u===c-1)try{r.complete.call(o,o)}catch(e){setTimeout(function(){throw e},1)}a&&!0!==r.loop&&a(o),!0!==r.loop||t||(d.each(s(p).tweensContainer,function(e,t){/^rotate/.test(e)&&360===parseFloat(t.endValue)&&(t.endValue=0,t.startValue=360)}),b(p,"reverse",{loop:!0,delay:r.delay})),!1!==r.queue&&d.dequeue(p,r.queue)}b.State.calls[e]=!1;for(var h=0,m=b.State.calls.length;h<m;h++)if(!1!==b.State.calls[h]){l=!0;break}!1===l&&(b.State.isTicking=!1,delete b.State.calls,b.State.calls=[])}var d,f=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="\x3c!--[if IE "+e+"]><span></span><![endif]--\x3e",t.getElementsByTagName("span").length)return t=null,e}return i}(),h=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n,i=(new Date).getTime();/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
return n=Math.max(0,16-(i-e)),e=i+n,setTimeout(function(){t(i+n)},n)}}(),m={isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},/* Copyright Martin Bohm. MIT License: https://gist.github.com/Tomalak/818a78a226a0738eaade */
isNodeList:function(e){return"object"==typeof e&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e))&&e.length!==i&&(0===e.length||"object"==typeof e[0]&&e[0].nodeType>0)},isWrapped:function(e){return e&&(e.jquery||t.Zepto&&t.Zepto.zepto.isZ(e))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)return!1;return!0}},g=!1;if(e.fn&&e.fn.jquery?(d=e,g=!0):d=t.Velocity.Utilities,f<=8&&!g)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(f<=7)return void(jQuery.fn.velocity=jQuery.fn.animate);var v=400,y="swing",b={State:{isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),prefixElement:n.createElement("div"),prefixMatches:{},scrollAnchor:null,scrollPropertyLeft:null,scrollPropertyTop:null,isTicking:!1,calls:[]},CSS:{},Utilities:d,Redirects:{},Easings:{},Promise:t.Promise,defaults:{queue:"",duration:v,easing:y,begin:i,complete:i,progress:i,display:i,visibility:i,loop:!1,delay:!1,mobileHA:!0,_cacheValues:!0},init:function(e){d.data(e,"velocity",{isSVG:m.isSVG(e),isAnimating:!1,computedStyle:null,tweensContainer:null,rootPropertyValueCache:{},transformCache:{}})},hook:null,mock:!1,version:{major:1,minor:1,patch:0},debug:!1};t.pageYOffset!==i?(b.State.scrollAnchor=t,b.State.scrollPropertyLeft="pageXOffset",b.State.scrollPropertyTop="pageYOffset"):(b.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,b.State.scrollPropertyLeft="scrollLeft",b.State.scrollPropertyTop="scrollTop");/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
       then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
var x=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,i){var o={x:t.x+i.dx*n,v:t.v+i.dv*n,tension:t.tension,friction:t.friction};return{dx:o.v,dv:e(o)}}function n(n,i){var o={dx:n.v,dv:e(n)},r=t(n,.5*i,o),s=t(n,.5*i,r),a=t(n,i,s),l=1/6*(o.dx+2*(r.dx+s.dx)+a.dx),u=1/6*(o.dv+2*(r.dv+s.dv)+a.dv);return n.x=n.x+l*i,n.v=n.v+u*i,n}return function e(t,i,o){var r,s,a,l={x:-1,v:0,tension:null,friction:null},u=[0],c=0;for(t=parseFloat(t)||500,i=parseFloat(i)||20,o=o||null,l.tension=t,l.friction=i,r=null!==o,r?(c=e(t,i),s=c/o*.016):s=.016;;)if(a=n(a||l,s),u.push(1+a.x),c+=16,!(Math.abs(a.x)>1e-4&&Math.abs(a.v)>1e-4))break;return r?function(e){return u[e*(u.length-1)|0]}:c}}();b.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},d.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){b.Easings[t[0]]=l.apply(null,t[1])});var w=b.CSS={RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"]},Hooks:{templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},registered:{},register:function(){for(var e=0;e<w.Lists.colors.length;e++){var t="color"===w.Lists.colors[e]?"0 0 0 1":"255 255 255 1";w.Hooks.templates[w.Lists.colors[e]]=["Red Green Blue Alpha",t]}var n,i,o;if(f)for(n in w.Hooks.templates){i=w.Hooks.templates[n],o=i[0].split(" ");var r=i[1].match(w.RegEx.valueSplit);"Color"===o[0]&&(o.push(o.shift()),r.push(r.shift()),w.Hooks.templates[n]=[o.join(" "),r.join(" ")])}for(n in w.Hooks.templates){i=w.Hooks.templates[n],o=i[0].split(" ");for(var e in o){var s=n+o[e],a=e;w.Hooks.registered[s]=[n,a]}}},getRoot:function(e){var t=w.Hooks.registered[e];return t?t[0]:e},cleanRootPropertyValue:function(e,t){return w.RegEx.valueUnwrap.test(t)&&(t=t.match(w.RegEx.valueUnwrap)[1]),w.Values.isCSSNullValue(t)&&(t=w.Hooks.templates[e][1]),t},extractValue:function(e,t){var n=w.Hooks.registered[e];if(n){var i=n[0],o=n[1];return t=w.Hooks.cleanRootPropertyValue(i,t),t.toString().match(w.RegEx.valueSplit)[o]}return t},injectValue:function(e,t,n){var i=w.Hooks.registered[e];if(i){var o,r=i[0],s=i[1];return n=w.Hooks.cleanRootPropertyValue(r,n),o=n.toString().match(w.RegEx.valueSplit),o[s]=t,o.join(" ")}return n}},Normalizations:{registered:{clip:function(e,t,n){switch(e){case"name":return"clip";case"extract":var i;return w.RegEx.wrappedValueAlreadyExtracted.test(n)?i=n:(i=n.toString().match(w.RegEx.valueUnwrap),i=i?i[1].replace(/,(\s+)?/g," "):n),i;case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return"-webkit-filter";case"extract":var i=parseFloat(n);if(!i&&0!==i){var o=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);i=o?o[1]:0}return i;case"inject":return parseFloat(n)?"blur("+n+")":"none"}},opacity:function(e,t,n){if(f<=8)switch(e){case"name":return"filter";case"extract":var i=n.toString().match(/alpha\(opacity=(.*)\)/i);return n=i?i[1]/100:1;case"inject":return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":case"inject":return n}}},register:function(){f<=9||b.State.isGingerbread||(w.Lists.transformsBase=w.Lists.transformsBase.concat(w.Lists.transforms3D));for(var e=0;e<w.Lists.transformsBase.length;e++)!function(){var t=w.Lists.transformsBase[e];w.Normalizations.registered[t]=function(e,n,o){switch(e){case"name":return"transform";case"extract":return s(n)===i||s(n).transformCache[t]===i?/^scale/i.test(t)?1:0:s(n).transformCache[t].replace(/[()]/g,"");case"inject":var r=!1;switch(t.substr(0,t.length-1)){case"translate":r=!/(%|px|em|rem|vw|vh|\d)$/i.test(o);break;case"scal":case"scale":b.State.isAndroid&&s(n).transformCache[t]===i&&o<1&&(o=1),r=!/(\d)$/i.test(o);break;case"skew":case"rotate":r=!/(deg|\d)$/i.test(o)}return r||(s(n).transformCache[t]="("+o+")"),s(n).transformCache[t]}}}();for(var e=0;e<w.Lists.colors.length;e++)!function(){var t=w.Lists.colors[e];w.Normalizations.registered[t]=function(e,n,o){switch(e){case"name":return t;case"extract":var r;if(w.RegEx.wrappedValueAlreadyExtracted.test(o))r=o;else{var s,a={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/^[A-z]+$/i.test(o)?s=a[o]!==i?a[o]:a.black:w.RegEx.isHex.test(o)?s="rgb("+w.Values.hexToRgb(o).join(" ")+")":/^rgba?\(/i.test(o)||(s=a.black),r=(s||o).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}return f<=8||3!==r.split(" ").length||(r+=" 1"),r;case"inject":return f<=8?4===o.split(" ").length&&(o=o.split(/\s+/).slice(0,3).join(" ")):3===o.split(" ").length&&(o+=" 1"),(f<=8?"rgb":"rgba")+"("+o.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")"}}}()}},Names:{camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";return(f||b.State.isAndroid&&!b.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},prefixCheck:function(e){if(b.State.prefixMatches[e])return[b.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,i=t.length;n<i;n++){var o;if(o=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),m.isString(b.State.prefixElement.style[o]))return b.State.prefixMatches[e]=o,[o,!0]}return[e,!1]}},Values:{/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(n,function(e,t,n,i){return t+t+n+n+i+i}),t=i.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){return 0==e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":"block"},addClass:function(e,t){e.classList?e.classList.add(t):e.className+=(e.className.length?" ":"")+t},removeClass:function(e,t){e.classList?e.classList.remove(t):e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ")}},getPropertyValue:function(e,n,o,r){function a(e,n){function o(){u&&w.setPropertyValue(e,"display","none")}var l=0;if(f<=8)l=d.css(e,n);else{var u=!1;if(/^(width|height)$/.test(n)&&0===w.getPropertyValue(e,"display")&&(u=!0,w.setPropertyValue(e,"display",w.Values.getDisplayType(e))),!r){if("height"===n&&"border-box"!==w.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(w.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(w.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(w.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(w.getPropertyValue(e,"paddingBottom"))||0);return o(),c}if("width"===n&&"border-box"!==w.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var p=e.offsetWidth-(parseFloat(w.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(w.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(w.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(w.getPropertyValue(e,"paddingRight"))||0);return o(),p}}var h;h=s(e)===i?t.getComputedStyle(e,null):s(e).computedStyle?s(e).computedStyle:s(e).computedStyle=t.getComputedStyle(e,null),(f||b.State.isFirefox)&&"borderColor"===n&&(n="borderTopColor"),l=9===f&&"filter"===n?h.getPropertyValue(n):h[n],""!==l&&null!==l||(l=e.style[n]),o()}if("auto"===l&&/^(top|right|bottom|left)$/i.test(n)){var m=a(e,"position");("fixed"===m||"absolute"===m&&/top|left/i.test(n))&&(l=d(e).position()[n]+"px")}return l}var l;if(w.Hooks.registered[n]){var u=n,c=w.Hooks.getRoot(u);o===i&&(o=w.getPropertyValue(e,w.Names.prefixCheck(c)[0])),w.Normalizations.registered[c]&&(o=w.Normalizations.registered[c]("extract",e,o)),l=w.Hooks.extractValue(u,o)}else if(w.Normalizations.registered[n]){var p,h;p=w.Normalizations.registered[n]("name",e),"transform"!==p&&(h=a(e,w.Names.prefixCheck(p)[0]),w.Values.isCSSNullValue(h)&&w.Hooks.templates[n]&&(h=w.Hooks.templates[n][1])),l=w.Normalizations.registered[n]("extract",e,h)}return/^[\d-]/.test(l)||(l=s(e)&&s(e).isSVG&&w.Names.SVGAttribute(n)?/^(height|width)$/i.test(n)?e.getBBox()[n]:e.getAttribute(n):a(e,w.Names.prefixCheck(n)[0])),w.Values.isCSSNullValue(l)&&(l=0),b.debug>=2&&console.log("Get "+n+": "+l),l},setPropertyValue:function(e,n,i,o,r){var a=n;if("scroll"===n)r.container?r.container["scroll"+r.direction]=i:"Left"===r.direction?t.scrollTo(i,r.alternateValue):t.scrollTo(r.alternateValue,i);else if(w.Normalizations.registered[n]&&"transform"===w.Normalizations.registered[n]("name",e))w.Normalizations.registered[n]("inject",e,i),a="transform",i=s(e).transformCache[n];else{if(w.Hooks.registered[n]){var l=n,u=w.Hooks.getRoot(n);o=o||w.getPropertyValue(e,u),i=w.Hooks.injectValue(l,i,o),n=u}if(w.Normalizations.registered[n]&&(i=w.Normalizations.registered[n]("inject",e,i),n=w.Normalizations.registered[n]("name",e)),a=w.Names.prefixCheck(n)[0],f<=8)try{e.style[a]=i}catch(e){b.debug&&console.log("Browser does not support ["+i+"] for ["+a+"]")}else s(e)&&s(e).isSVG&&w.Names.SVGAttribute(n)?e.setAttribute(n,i):e.style[a]=i;b.debug>=2&&console.log("Set "+n+" ("+a+"): "+i)}return[a,i]},flushTransformCache:function(e){function t(t){return parseFloat(w.getPropertyValue(e,t))}var n="";if((f||b.State.isAndroid&&!b.State.isChrome)&&s(e).isSVG){var i={translate:[t("translateX"),t("translateY")],skewX:[t("skewX")],skewY:[t("skewY")],scale:1!==t("scale")?[t("scale"),t("scale")]:[t("scaleX"),t("scaleY")],rotate:[t("rotateZ"),0,0]};d.each(s(e).transformCache,function(e){/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),i[e]&&(n+=e+"("+i[e].join(" ")+") ",delete i[e])})}else{var o,r;d.each(s(e).transformCache,function(t){if(o=s(e).transformCache[t],"transformPerspective"===t)return r=o,!0;9===f&&"rotateZ"===t&&(t="rotate"),n+=t+o+" "}),r&&(n="perspective"+r+" "+n)}w.setPropertyValue(e,"transform",n)}};w.Hooks.register(),w.Normalizations.register(),b.hook=function(e,t,n){var o=i;return e=r(e),d.each(e,function(e,r){if(s(r)===i&&b.init(r),n===i)o===i&&(o=b.CSS.getPropertyValue(r,t));else{var a=b.CSS.setPropertyValue(r,t,n);"transform"===a[0]&&b.CSS.flushTransformCache(r),o=a}}),o};var C=function(){function e(){return l?P.promise||null:f}function a(){function e(e){function f(e,t){var n=i,o=i,r=i;return m.isArray(e)?(n=e[0],!m.isArray(e[1])&&/^[\d-]/.test(e[1])||m.isFunction(e[1])||w.RegEx.isHex.test(e[1])?r=e[1]:(m.isString(e[1])&&!w.RegEx.isHex.test(e[1])||m.isArray(e[1]))&&(o=t?e[1]:u(e[1],l.duration),e[2]!==i&&(r=e[2]))):n=e,t||(o=o||l.easing),m.isFunction(n)&&(n=n.call(a,E,T)),m.isFunction(r)&&(r=r.call(a,E,T)),[n||0,o,r]}function h(e,t){var n,i;return i=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){return n=e,""}),n||(n=w.Values.getUnitType(e)),[i,n]}if(l.begin&&0===E)try{l.begin.call(g,g)}catch(e){setTimeout(function(){throw e},1)}if("scroll"===A){var v,C,S,k=/^x$/i.test(l.axis)?"Left":"Top",I=parseFloat(l.offset)||0;l.container?m.isWrapped(l.container)||m.isNode(l.container)?(l.container=l.container[0]||l.container,v=l.container["scroll"+k],S=v+d(a).position()[k.toLowerCase()]+I):l.container=null:(v=b.State.scrollAnchor[b.State["scrollProperty"+k]],C=b.State.scrollAnchor[b.State["scrollProperty"+("Left"===k?"Top":"Left")]],S=d(a).offset()[k.toLowerCase()]+I),p={scroll:{rootPropertyValue:!1,startValue:v,currentValue:v,endValue:S,unitType:"",easing:l.easing,scrollData:{container:l.container,direction:k,alternateValue:C}},element:a},b.debug&&console.log("tweensContainer (scroll): ",p.scroll,a)}else if("reverse"===A){if(!s(a).tweensContainer)return void d.dequeue(a,l.queue);"none"===s(a).opts.display&&(s(a).opts.display="auto"),"hidden"===s(a).opts.visibility&&(s(a).opts.visibility="visible"),s(a).opts.loop=!1,s(a).opts.begin=null,s(a).opts.complete=null,x.easing||delete l.easing,x.duration||delete l.duration,l=d.extend({},s(a).opts,l);var N=d.extend(!0,{},s(a).tweensContainer);for(var L in N)if("element"!==L){var j=N[L].startValue;N[L].startValue=N[L].currentValue=N[L].endValue,N[L].endValue=j,m.isEmptyObject(x)||(N[L].easing=l.easing),b.debug&&console.log("reverse tweensContainer ("+L+"): "+JSON.stringify(N[L]),a)}p=N}else if("start"===A){var N;s(a).tweensContainer&&!0===s(a).isAnimating&&(N=s(a).tweensContainer),d.each(y,function(e,t){if(RegExp("^"+w.Lists.colors.join("$|^")+"$").test(e)){var n=f(t,!0),o=n[0],r=n[1],s=n[2];if(w.RegEx.isHex.test(o)){for(var a=["Red","Green","Blue"],l=w.Values.hexToRgb(o),u=s?w.Values.hexToRgb(s):i,c=0;c<a.length;c++){var p=[l[c]];r&&p.push(r),u!==i&&p.push(u[c]),y[e+a[c]]=p}delete y[e]}}});for(var O in y){var D=f(y[O]),F=D[0],M=D[1],_=D[2];O=w.Names.camelCase(O);var W=w.Hooks.getRoot(O),V=!1;if(s(a).isSVG||!1!==w.Names.prefixCheck(W)[1]||w.Normalizations.registered[W]!==i){(l.display!==i&&null!==l.display&&"none"!==l.display||l.visibility!==i&&"hidden"!==l.visibility)&&/opacity|filter/.test(O)&&!_&&0!==F&&(_=0),l._cacheValues&&N&&N[O]?(_===i&&(_=N[O].endValue+N[O].unitType),V=s(a).rootPropertyValueCache[W]):w.Hooks.registered[O]?_===i?(V=w.getPropertyValue(a,W),_=w.getPropertyValue(a,O,V)):V=w.Hooks.templates[W][1]:_===i&&(_=w.getPropertyValue(a,O));var q,H,$,B=!1;if(q=h(O,_),_=q[0],$=q[1],q=h(O,F),F=q[0].replace(/^([+-\/*])=/,function(e,t){return B=t,""}),H=q[1],_=parseFloat(_)||0,F=parseFloat(F)||0,"%"===H&&(/^(fontSize|lineHeight)$/.test(O)?(F/=100,H="em"):/^scale/.test(O)?(F/=100,H=""):/(Red|Green|Blue)$/i.test(O)&&(F=F/100*255,H="")),/[\/*]/.test(B))H=$;else if($!==H&&0!==_)if(0===F)H=$;else{r=r||function(){var e={myParent:a.parentNode||n.body,position:w.getPropertyValue(a,"position"),fontSize:w.getPropertyValue(a,"fontSize")},i=e.position===z.lastPosition&&e.myParent===z.lastParent,o=e.fontSize===z.lastFontSize;z.lastParent=e.myParent,z.lastPosition=e.position,z.lastFontSize=e.fontSize;var r={};if(o&&i)r.emToPx=z.lastEmToPx,r.percentToPxWidth=z.lastPercentToPxWidth,r.percentToPxHeight=z.lastPercentToPxHeight;else{var l=s(a).isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");b.init(l),e.myParent.appendChild(l),d.each(["overflow","overflowX","overflowY"],function(e,t){b.CSS.setPropertyValue(l,t,"hidden")}),b.CSS.setPropertyValue(l,"position",e.position),b.CSS.setPropertyValue(l,"fontSize",e.fontSize),b.CSS.setPropertyValue(l,"boxSizing","content-box"),d.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){b.CSS.setPropertyValue(l,t,"100%")}),b.CSS.setPropertyValue(l,"paddingLeft","100em"),r.percentToPxWidth=z.lastPercentToPxWidth=(parseFloat(w.getPropertyValue(l,"width",null,!0))||1)/100,r.percentToPxHeight=z.lastPercentToPxHeight=(parseFloat(w.getPropertyValue(l,"height",null,!0))||1)/100,r.emToPx=z.lastEmToPx=(parseFloat(w.getPropertyValue(l,"paddingLeft"))||1)/100,e.myParent.removeChild(l)}return null===z.remToPx&&(z.remToPx=parseFloat(w.getPropertyValue(n.body,"fontSize"))||16),null===z.vwToPx&&(z.vwToPx=parseFloat(t.innerWidth)/100,z.vhToPx=parseFloat(t.innerHeight)/100),r.remToPx=z.remToPx,r.vwToPx=z.vwToPx,r.vhToPx=z.vhToPx,b.debug>=1&&console.log("Unit ratios: "+JSON.stringify(r),a),r}();var X=/margin|padding|left|right|width|text|word|letter/i.test(O)||/X$/.test(O)||"x"===O?"x":"y";switch($){case"%":_*="x"===X?r.percentToPxWidth:r.percentToPxHeight;break;case"px":break;default:_*=r[$+"ToPx"]}switch(H){case"%":_*=1/("x"===X?r.percentToPxWidth:r.percentToPxHeight);break;case"px":break;default:_*=1/r[H+"ToPx"]}}switch(B){case"+":F=_+F;break;case"-":F=_-F;break;case"*":F*=_;break;case"/":F=_/F}p[O]={rootPropertyValue:V,startValue:_,currentValue:_,endValue:F,unitType:H,easing:M},b.debug&&console.log("tweensContainer ("+O+"): "+JSON.stringify(p[O]),a)}else b.debug&&console.log("Skipping ["+W+"] due to a lack of browser support.")}p.element=a}p.element&&(w.Values.addClass(a,"velocity-animating"),R.push(p),""===l.queue&&(s(a).tweensContainer=p,s(a).opts=l),s(a).isAnimating=!0,E===T-1?(b.State.calls.length>1e4&&(b.State.calls=o(b.State.calls)),b.State.calls.push([R,g,l,null,P.resolver]),!1===b.State.isTicking&&(b.State.isTicking=!0,c())):E++)}var r,a=this,l=d.extend({},b.defaults,x),p={};switch(s(a)===i&&b.init(a),parseFloat(l.delay)&&!1!==l.queue&&d.queue(a,l.queue,function(e){b.velocityQueueEntryFlag=!0,s(a).delayTimer={setTimeout:setTimeout(e,parseFloat(l.delay)),next:e}}),l.duration.toString().toLowerCase()){case"fast":l.duration=200;break;case"normal":l.duration=v;break;case"slow":l.duration=600;break;default:l.duration=parseFloat(l.duration)||1}!1!==b.mock&&(!0===b.mock?l.duration=l.delay=1:(l.duration*=parseFloat(b.mock)||1,l.delay*=parseFloat(b.mock)||1)),l.easing=u(l.easing,l.duration),l.begin&&!m.isFunction(l.begin)&&(l.begin=null),l.progress&&!m.isFunction(l.progress)&&(l.progress=null),l.complete&&!m.isFunction(l.complete)&&(l.complete=null),l.display!==i&&null!==l.display&&(l.display=l.display.toString().toLowerCase(),"auto"===l.display&&(l.display=b.CSS.Values.getDisplayType(a))),l.visibility!==i&&null!==l.visibility&&(l.visibility=l.visibility.toString().toLowerCase()),l.mobileHA=l.mobileHA&&b.State.isMobile&&!b.State.isGingerbread,!1===l.queue?l.delay?setTimeout(e,l.delay):e():d.queue(a,l.queue,function(t,n){if(!0===n)return P.promise&&P.resolver(g),!0;b.velocityQueueEntryFlag=!0,e(t)}),""!==l.queue&&"fx"!==l.queue||"inprogress"===d.queue(a)[0]||d.dequeue(a)}var l,f,h,g,y,x,S=arguments[0]&&(d.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||m.isString(arguments[0].properties));if(m.isWrapped(this)?(l=!1,h=0,g=this,f=this):(l=!0,h=1,g=S?arguments[0].elements:arguments[0]),g=r(g)){S?(y=arguments[0].properties,x=arguments[0].options):(y=arguments[h],x=arguments[h+1]);var T=g.length,E=0;if("stop"!==y&&!d.isPlainObject(x)){var k=h+1;x={};for(var I=k;I<arguments.length;I++)m.isArray(arguments[I])||!/^(fast|normal|slow)$/i.test(arguments[I])&&!/^\d/.test(arguments[I])?m.isString(arguments[I])||m.isArray(arguments[I])?x.easing=arguments[I]:m.isFunction(arguments[I])&&(x.complete=arguments[I]):x.duration=arguments[I]}var P={promise:null,resolver:null,rejecter:null};l&&b.Promise&&(P.promise=new b.Promise(function(e,t){P.resolver=e,P.rejecter=t}));var A;switch(y){case"scroll":A="scroll";break;case"reverse":A="reverse";break;case"stop":d.each(g,function(e,t){s(t)&&s(t).delayTimer&&(clearTimeout(s(t).delayTimer.setTimeout),s(t).delayTimer.next&&s(t).delayTimer.next(),delete s(t).delayTimer)});var N=[];return d.each(b.State.calls,function(e,t){t&&d.each(t[1],function(n,o){var r=m.isString(x)?x:"";if(x!==i&&t[2].queue!==r)return!0;d.each(g,function(t,n){n===o&&(x!==i&&(d.each(d.queue(n,r),function(e,t){m.isFunction(t)&&t(null,!0)}),d.queue(n,r,[])),s(n)&&""===r&&d.each(s(n).tweensContainer,function(e,t){t.endValue=t.currentValue}),N.push(e))})})}),d.each(N,function(e,t){p(t,!0)}),P.promise&&P.resolver(g),e();default:if(!d.isPlainObject(y)||m.isEmptyObject(y)){if(m.isString(y)&&b.Redirects[y]){var L=d.extend({},x),j=L.duration,O=L.delay||0;return!0===L.backwards&&(g=d.extend(!0,[],g).reverse()),d.each(g,function(e,t){parseFloat(L.stagger)?L.delay=O+parseFloat(L.stagger)*e:m.isFunction(L.stagger)&&(L.delay=O+L.stagger.call(t,e,T)),L.drag&&(L.duration=parseFloat(j)||(/^(callout|transition)/.test(y)?1e3:v),L.duration=Math.max(L.duration*(L.backwards?1-e/T:(e+1)/T),.75*L.duration,200)),b.Redirects[y].call(t,t,L||{},e,T,g,P.promise?P:i)}),e()}var D="Velocity: First argument ("+y+") was not a property map, a known action, or a registered redirect. Aborting.";return P.promise?P.rejecter(new Error(D)):console.log(D),e()}A="start"}var z={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},R=[];d.each(g,function(e,t){m.isNode(t)&&a.call(t)});var F,L=d.extend({},b.defaults,x);if(L.loop=parseInt(L.loop),F=2*L.loop-1,L.loop)for(var M=0;M<F;M++){var _={delay:L.delay,progress:L.progress};M===F-1&&(_.display=L.display,_.visibility=L.visibility,_.complete=L.complete),C(g,"reverse",_)}return e()}};b=d.extend(C,b),b.animate=C;var S=t.requestAnimationFrame||h;return b.State.isMobile||n.hidden===i||n.addEventListener("visibilitychange",function(){n.hidden?(S=function(e){return setTimeout(function(){e(!0)},16)},c()):S=t.requestAnimationFrame||h}),e.Velocity=b,e!==t&&(e.fn.velocity=C,e.fn.velocity.defaults=b.defaults),d.each(["Down","Up"],function(e,t){b.Redirects["slide"+t]=function(e,n,o,r,s,a){var l=d.extend({},n),u=l.begin,c=l.complete,p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""},f={};l.display===i&&(l.display="Down"===t?"inline"===b.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),l.begin=function(){u&&u.call(s,s);for(var n in p){f[n]=e.style[n];var i=b.CSS.getPropertyValue(e,n);p[n]="Down"===t?[i,0]:[0,i]}f.overflow=e.style.overflow,e.style.overflow="hidden"},l.complete=function(){for(var t in f)e.style[t]=f[t];c&&c.call(s,s),a&&a.resolver(s)},b(e,p,l)}}),d.each(["In","Out"],function(e,t){b.Redirects["fade"+t]=function(e,n,o,r,s,a){var l=d.extend({},n),u={opacity:"In"===t?1:0},c=l.complete;l.complete=o!==r-1?l.begin=null:function(){c&&c.call(s,s),a&&a.resolver(s)},l.display===i&&(l.display="In"===t?"auto":"none"),b(this,u,l)}}),b}(window.jQuery||window.Zepto||window,window,document)}),function(e){"use strict";e.fn.fitVids=function(t){var n={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var i=document.head||document.getElementsByTagName("head")[0],o=document.createElement("div");o.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',i.appendChild(o.childNodes[1])}return t&&e.extend(n,t),this.each(function(){var t=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];n.customSelector&&t.push(n.customSelector);var i=".fitvidsignore";n.ignore&&(i=i+", "+n.ignore);var o=e(this).find(t.join(","));o=o.not("object object"),o=o.not(i),o.each(function(){var t=e(this);if(!(t.parents(i).length>0||"embed"===this.tagName.toLowerCase()&&t.parent("object").length||t.parent(".fluid-width-video-wrapper").length)){t.css("height")||t.css("width")||!isNaN(t.attr("height"))&&!isNaN(t.attr("width"))||(t.attr("height",9),t.attr("width",16));var n="object"===this.tagName.toLowerCase()||t.attr("height")&&!isNaN(parseInt(t.attr("height"),10))?parseInt(t.attr("height"),10):t.height(),o=isNaN(parseInt(t.attr("width"),10))?t.width():parseInt(t.attr("width"),10),r=n/o;if(!t.attr("name")){var s="fitvid"+e.fn.fitVids._count;t.attr("name",s),e.fn.fitVids._count++}t.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*r+"%"),t.removeAttr("height").removeAttr("width")}})})},e.fn.fitVids._count=0}(window.jQuery||window.Zepto),/*
 *	jQuery dotdotdot 1.6.16
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
function(e,t){function n(e,t,n){var i=e.children(),o=!1;e.empty();for(var s=0,a=i.length;s<a;s++){var l=i.eq(s);if(e.append(l),n&&e.append(n),r(e,t)){l.remove(),o=!0;break}n&&n.detach()}return o}function i(t,n,s,a,l){var u=!1,c=function(e){l&&e[e.is("table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style")?"after":"append"](l)};return t.contents().detach().each(function(){var p=this,d=e(p);if(void 0===p||3==p.nodeType&&0==e.trim(p.data).length)return!0;if(d.is("script, .dotdotdot-keep"))t.append(d);else{if(u)return!0;t.append(d),c(t),r(s,a)&&((u=3==p.nodeType?o(d,n,s,a,l):i(d,n,s,a,l))||(c(e(t.contents().last())),u=!0)),u||l&&l.detach()}}),u}function o(t,n,i,o,a){var c=t[0];if(!c)return!1;var d=u(c),f=-1!==d.indexOf(" ")?" ":"　",h="letter"==o.wrap?"":f,m=d.split(h),g=-1,v=-1,y=0,b=m.length-1;for(o.fallbackToLetter&&0==y&&0==b&&(h="",m=d.split(h),b=m.length-1);y<=b&&(0!=y||0!=b);){var x=Math.floor((y+b)/2);if(x==v)break;v=x,l(c,m.slice(0,v+1).join(h)+o.ellipsis),r(i,o)?(b=v,o.fallbackToLetter&&0==y&&0==b&&(h="",m=m[0].split(h),g=-1,v=-1,y=0,b=m.length-1)):(g=v,y=v)}if(-1==g||1==m.length&&0==m[0].length){var w=t.parent();t.detach();var C=a&&a.closest(w).length?a.length:0;w.contents().length>C?c=p(w.contents().eq(-1-C),n):(c=p(w,n,!0),C||w.detach()),c&&(d=s(u(c),o),l(c,d),C&&a&&e(c).parent().append(a))}else d=s(m.slice(0,g+1).join(h),o),l(c,d);return!0}function r(e,t){return e.innerHeight()>t.maxHeight}function s(t,n){for(;e.inArray(t.slice(-1),n.lastCharacter.remove)>-1;)t=t.slice(0,-1);return e.inArray(t.slice(-1),n.lastCharacter.noEllipsis)<0&&(t+=n.ellipsis),t}function a(e){return{width:e.innerWidth(),height:e.innerHeight()}}function l(e,t){e.innerText?e.innerText=t:e.nodeValue?e.nodeValue=t:e.textContent&&(e.textContent=t)}function u(e){return e.innerText?e.innerText:e.nodeValue?e.nodeValue:e.textContent?e.textContent:""}function c(e){do{e=e.previousSibling}while(e&&1!==e.nodeType&&3!==e.nodeType);return e}function p(t,n,i){var o,r=t&&t[0];if(r){if(!i){if(3===r.nodeType)return r;if(e.trim(t.text()))return p(t.contents().last(),n)}for(o=c(r);!o;){if(t=t.parent(),t.is(n)||!t.length)return!1;o=c(t[0])}if(o)return p(e(o),n)}return!1}function d(t,n){return!!t&&("string"==typeof t?(t=e(t,n),!!t.length&&t):!!t.jquery&&t)}function f(e){for(var t=e.innerHeight(),n=["paddingTop","paddingBottom"],i=0,o=n.length;i<o;i++){var r=parseInt(e.css(n[i]),10);isNaN(r)&&(r=0),t-=r}return t}if(!e.fn.dotdotdot){e.fn.dotdotdot=function(t){if(0==this.length)return e.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){e(this).dotdotdot(t)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(t,a){t.preventDefault(),t.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:f(o),l.maxHeight+=l.tolerance,void 0!==a&&(("string"==typeof a||a instanceof HTMLElement)&&(a=e("<div />").append(a).contents()),a instanceof e&&(s=a)),m=o.wrapInner('<div class="dotdotdot" />').children(),m.contents().detach().end().append(s.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,p=!1;return u.afterElement&&(c=u.afterElement.clone(!0),c.show(),u.afterElement.detach()),r(m,l)&&(p="children"==l.wrap?n(m,l,c):i(m,o,m,l,c)),m.replaceWith(m.contents()),m=null,e.isFunction(l.callback)&&l.callback.call(o[0],p,s),u.isTruncated=p,p}).bind("isTruncated.dot",function(e,t){return e.preventDefault(),e.stopPropagation(),"function"==typeof t&&t.call(o[0],u.isTruncated),u.isTruncated}).bind("originalContent.dot",function(e,t){return e.preventDefault(),e.stopPropagation(),"function"==typeof t&&t.call(o[0],s),s}).bind("destroy.dot",function(e){e.preventDefault(),e.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(s).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var t=e(window),n=t.width(),i=t.height();t.bind("resize.dot"+u.dotId,function(){n==t.width()&&i==t.height()&&l.windowResizeFix||(n=t.width(),i=t.height(),p&&clearInterval(p),p=setTimeout(function(){o.trigger("update.dot")},100))})}else c=a(o),p=setInterval(function(){if(o.is(":visible")){var e=a(o);c.width==e.width&&c.height==e.height||(o.trigger("update.dot"),c=e)}},500);return o},o.unwatch=function(){return e(window).unbind("resize.dot"+u.dotId),p&&clearInterval(p),o};var s=o.contents(),l=e.extend(!0,{},e.fn.dotdotdot.defaults,t),u={},c={},p=null,m=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=e.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=e.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),u.afterElement=d(l.after,o),u.isTruncated=!1,u.dotId=h++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},e.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},e.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","　",",",";",".","!","?"],noEllipsis:[]}},e.fn.dotdotdot.debug=function(e){};var h=1,m=e.fn.html;e.fn.html=function(t){/*
 *	jQuery dotdotdot 1.6.16
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
return void 0!=t&&!e.isFunction(t)&&this.data("dotdotdot")?this.trigger("update",[t]):m.apply(this,arguments)};var g=e.fn.text;e.fn.text=function(t){return void 0!=t&&!e.isFunction(t)&&this.data("dotdotdot")?(t=e("<div />").text(t).html(),this.trigger("update",[t])):g.apply(this,arguments)}}}(jQuery),function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).cssVars=t()}(this,function(){"use strict";function e(){return(e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function t(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function n(e){function t(){return!("<"===(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").trim().charAt(0))}function n(e,t){r.onError(e,s[t],t)}function i(e,t){var n=r.onSuccess(e,s[t],t);e=!1===n?"":n||e,a[t]=e,-1===a.indexOf(null)&&r.onComplete(a)}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={mimeType:o.mimeType||null,onBeforeSend:o.onBeforeSend||Function.prototype,onSuccess:o.onSuccess||Function.prototype,onError:o.onError||Function.prototype,onComplete:o.onComplete||Function.prototype},s=Array.isArray(e)?e:[e],a=Array.apply(null,Array(s.length)).map(function(e){return null}),l=document.createElement("a");s.forEach(function(e,o){if(l.setAttribute("href",e),l.href=String(l.href),Boolean(document.all&&!window.atob)&&l.host.split(":")[0]!==location.host.split(":")[0])if(l.protocol===location.protocol){var s=new XDomainRequest;s.open("GET",e),s.timeout=0,s.onprogress=Function.prototype,s.ontimeout=Function.prototype,s.onload=function(){t(s.responseText)?i(s.responseText,o):n(s,o)},s.onerror=function(e){n(s,o)},setTimeout(function(){s.send()},0)}else console.warn("Internet Explorer 9 Cross-Origin (CORS) requests must use the same protocol (".concat(e,")")),n(null,o);else{var a=new XMLHttpRequest;a.open("GET",e),r.mimeType&&a.overrideMimeType&&a.overrideMimeType(r.mimeType),r.onBeforeSend(a,e,o),a.onreadystatechange=function(){4===a.readyState&&(200===a.status&&t(a.responseText)?i(a.responseText,o):n(a,o))},a.send()}})}function i(e){function t(){if(-1===u.indexOf(null)){var e=u.join("");a.onComplete(e,u,l)}}function i(e,i,o,s){var l=a.onSuccess(e,o,s);!function e(t,i,o,s){var l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:[],c=r(t,o,u);c.rules.length?n(c.absoluteUrls,{onBeforeSend:function(e,t,n){a.onBeforeSend(e,i,t)},onSuccess:function(e,t,n){var o=a.onSuccess(e,i,t),s=r(e=!1===o?"":o||e,t,u);return s.rules.forEach(function(t,n){e=e.replace(t,s.absoluteRules[n])}),e},onError:function(n,r,a){l.push({xhr:n,url:r}),u.push(c.rules[a]),e(t,i,o,s,l,u)},onComplete:function(n){n.forEach(function(e,n){t=t.replace(c.rules[n],e)}),e(t,i,o,s,l,u)}}):s(t,l)}(e=void 0!==l&&!1===Boolean(l)?"":l||e,o,s,function(e,n){null===u[i]&&(n.forEach(function(e){return a.onError(e.xhr,o,e.url)}),!a.filter||a.filter.test(e)?u[i]=e:u[i]="",t())})}function r(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i={};return i.rules=(e.replace(s.cssComments,"").match(s.cssImports)||[]).filter(function(e){return-1===n.indexOf(e)}),i.urls=i.rules.map(function(e){return e.replace(s.cssImports,"$1")}),i.absoluteUrls=i.urls.map(function(e){return o(e,t)}),i.absoluteRules=i.rules.map(function(e,n){var r=i.urls[n],s=o(i.absoluteUrls[n],t);return e.replace(r,s)}),i}var s={cssComments:/\/\*[\s\S]+?\*\//g,cssImports:/(?:@import\s*)(?:url\(\s*)?(?:['"])([^'"]*)(?:['"])(?:\s*\))?(?:[^;]*;)/g},a={rootElement:e.rootElement||document,include:e.include||'style,link[rel="stylesheet"]',exclude:e.exclude||null,filter:e.filter||null,useCSSOM:e.useCSSOM||!1,onBeforeSend:e.onBeforeSend||Function.prototype,onSuccess:e.onSuccess||Function.prototype,onError:e.onError||Function.prototype,onComplete:e.onComplete||Function.prototype},l=Array.apply(null,a.rootElement.querySelectorAll(a.include)).filter(function(e){return t=e,n=a.exclude,!(t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector).call(t,n);var t,n}),u=Array.apply(null,Array(l.length)).map(function(e){return null});l.length?l.forEach(function(e,r){var s=e.getAttribute("href"),l=e.getAttribute("rel"),c="LINK"===e.nodeName&&s&&l&&"stylesheet"===l.toLowerCase(),p="STYLE"===e.nodeName;if(c)n(s,{mimeType:"text/css",onBeforeSend:function(t,n,i){a.onBeforeSend(t,e,n)},onSuccess:function(t,n,a){var l=o(s,location.href);i(t,r,e,l)},onError:function(n,i,o){u[r]="",a.onError(n,e,i),t()}});else if(p){var d=e.textContent;a.useCSSOM&&(d=Array.apply(null,e.sheet.cssRules).map(function(e){return e.cssText}).join("")),i(d,r,e,location.href)}else u[r]="",t()}):a.onComplete("",[])}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),i=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(i),n.body.appendChild(o),i.href=t,o.href=e,o.href}function r(e,t,n){e instanceof RegExp&&(e=s(e,n)),t instanceof RegExp&&(t=s(t,n));var i=a(e,t,n);return i&&{start:i[0],end:i[1],pre:n.slice(0,i[0]),body:n.slice(i[0]+e.length,i[1]),post:n.slice(i[1]+t.length)}}function s(e,t){var n=t.match(e);return n?n[0]:null}function a(e,t,n){var i,o,r,s,a,l=n.indexOf(e),u=n.indexOf(t,l+1),c=l;if(l>=0&&u>0){for(i=[],r=n.length;c>=0&&!a;)c==l?(i.push(c),l=n.indexOf(e,c+1)):1==i.length?a=[i.pop(),u]:((o=i.pop())<r&&(r=o,s=u),u=n.indexOf(t,c+1)),c=l<u&&l>=0?l:u;i.length&&(a=[r,s])}return a}function l(t){function n(e){throw new Error("CSS parse error: ".concat(e))}function i(e){var n=e.exec(t);if(n)return t=t.slice(n[0].length),n}function o(){return i(/^{\s*/)}function r(){return i(/^}/)}function s(){i(/^\s*/)}function a(){if(s(),"/"===t[0]&&"*"===t[1]){for(var e=2;t[e]&&("*"!==t[e]||"/"!==t[e+1]);)e++;if(!t[e])return n("end of comment is missing");var i=t.slice(2,e);return t=t.slice(e+2),{type:"comment",comment:i}}}function l(){for(var e,t=[];e=a();)t.push(e);return v.removeComments?[]:t}function u(){for(s();"}"===t[0];)n("extra closing bracket");var e=i(/^(("(?:\\"|[^"])*"|'(?:\\'|[^'])*'|[^{])+)/);if(e)return e[0].trim().replace(/\/\*([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*\/+/g,"").replace(/"(?:\\"|[^"])*"|'(?:\\'|[^'])*'/g,function(e){return e.replace(/,/g,"‌")}).split(/\s*(?![^(]*\)),\s*/).map(function(e){return e.replace(/\u200C/g,",")})}function c(){i(/^([;\s]*)+/);var e=/\/\*[^*]*\*+([^\/*][^*]*\*+)*\//g,t=i(/^(\*?[-#\/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);if(t){if(t=t[0].trim(),!i(/^:\s*/))return n("property missing ':'");var o=i(/^((?:\/\*.*?\*\/|'(?:\\'|.)*?'|"(?:\\"|.)*?"|\((\s*'(?:\\'|.)*?'|"(?:\\"|.)*?"|[^)]*?)\s*\)|[^};])+)/),r={type:"declaration",property:t.replace(e,""),value:o?o[0].replace(e,"").trim():""};return i(/^[;\s]*/),r}}function p(){if(!o())return n("missing '{'");for(var e,t=l();e=c();)t.push(e),t=t.concat(l());return r()?t:n("missing '}'")}function d(){s();for(var e,t=[];e=i(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/);)t.push(e[1]),i(/^,\s*/);if(t.length)return{type:"keyframe",values:t,declarations:p()}}function h(){if(s(),"@"===t[0]){var e=function(){var e=i(/^@([-\w]+)?keyframes\s*/);if(e){var t=e[1];if(!(e=i(/^([-\w]+)\s*/)))return n("@keyframes missing name");var s,a=e[1];if(!o())return n("@keyframes missing '{'");for(var u=l();s=d();)u.push(s),u=u.concat(l());return r()?{type:"keyframes",name:a,vendor:t,keyframes:u}:n("@keyframes missing '}'")}}()||function(){var e=i(/^@supports *([^{]+)/);if(e)return{type:"supports",supports:e[1].trim(),rules:g()}}()||function(){if(i(/^@host\s*/))return{type:"host",rules:g()}}()||function(){var e=i(/^@media *([^{]+)/);if(e)return{type:"media",media:e[1].trim(),rules:g()}}()||function(){var e=i(/^@custom-media\s+(--[^\s]+)\s*([^{;]+);/);if(e)return{type:"custom-media",name:e[1].trim(),media:e[2].trim()}}()||function(){if(i(/^@page */))return{type:"page",selectors:u()||[],declarations:p()}}()||function(){var e=i(/^@([-\w]+)?document *([^{]+)/);if(e)return{type:"document",document:e[2].trim(),vendor:e[1]?e[1].trim():null,rules:g()}}()||function(){if(i(/^@font-face\s*/))return{type:"font-face",declarations:p()}}()||function(){var e=i(/^@(import|charset|namespace)\s*([^;]+);/);if(e)return{type:e[1],name:e[2].trim()}}();if(e&&v.onlyVars){var a=!1;return a=e.declarations?e.declarations.some(function(e){return/var\(/.test(e.value)}):(e.keyframes||e.rules||[]).some(function(e){return(e.declarations||[]).some(function(e){return/var\(/.test(e.value)})}),a?e:{}}return e}}function m(){if(v.onlyVars){var e=f("{","}",t);if(e){var i=-1!==e.pre.indexOf(":root")&&/--\S*\s*:/.test(e.body),o=/var\(/.test(e.body);if(!i&&!o)return t=t.slice(e.end+1),{}}}var r=u()||[],s=v.onlyVars?p().filter(function(e){var t=r.some(function(e){return-1!==e.indexOf(":root")})&&/^--\S/.test(e.property),n=/var\(/.test(e.value);return t||n}):p();return r.length||n("selector missing"),{type:"rule",selectors:r,declarations:s}}function g(e){if(!e&&!o())return n("missing '{'");for(var i,s=l();t.length&&(e||"}"!==t[0])&&(i=h()||m());)i.type&&s.push(i),s=s.concat(l());return e||r()?s:n("missing '}'")}var v=e({},{onlyVars:!1,removeComments:!1},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{});return{type:"stylesheet",stylesheet:{rules:g(!0),errors:[]}}}function u(t){var n,i,o=e({},{fixNestedCalc:!0,onlyVars:!1,persist:!1,preserve:!1,variables:{},onWarning:function(){}},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}),r=o.persist?g.dom:g.temp=JSON.parse(JSON.stringify(g.dom)),s=l(t,{onlyVars:o.onlyVars});if(s.stylesheet.rules.forEach(function(e){var t=[];if("rule"===e.type&&1===e.selectors.length&&":root"===e.selectors[0]&&(e.declarations.forEach(function(e,n){var i=e.property,o=e.value;i&&0===i.indexOf(h)&&(r[i]=o,t.push(n))}),!o.preserve))for(var n=t.length-1;n>=0;n--)e.declarations.splice(t[n],1)}),Object.keys(g.user).forEach(function(e){r[e]=g.user[e]}),Object.keys(o.variables).length){var a={declarations:[],selectors:[":root"],type:"rule"};Object.keys(o.variables).forEach(function(e){var t="--".concat(e.replace(/^-+/,"")),n=o.variables[e];o.persist&&(g.user[t]=n),r[t]!==n&&(r[t]=n,a.declarations.push({type:"declaration",property:t,value:n}))}),o.preserve&&a.declarations.length&&s.stylesheet.rules.push(a)}return function e(t,n){t.rules.forEach(function(i){i.rules?e(i,n):i.keyframes?i.keyframes.forEach(function(e){"keyframe"===e.type&&n(e.declarations,i)}):i.declarations&&n(i.declarations,t)})}(s.stylesheet,function(e,t){for(var n,i,s,a=0;a<e.length;a++)s=(n=e[a]).value,"declaration"===n.type&&s&&-1!==s.indexOf(m+"(")&&(i=c(s,r,o))!==n.value&&(o.preserve?(e.splice(a,0,{type:n.type,property:n.property,value:i}),a++):n.value=i)}),o.fixNestedCalc&&(n=s.stylesheet.rules,i=/(-[a-z]+-)?calc\(/,n.forEach(function(e){e.declarations&&e.declarations.forEach(function(e){for(var t=e.value,n="";i.test(t);){var o=f("calc(",")",t||"");for(t=t.slice(o.end);i.test(o.body);){var r=f(i,")",o.body);o.body="".concat(r.pre,"(").concat(r.body,")").concat(r.post)}n+="".concat(o.pre,"calc(").concat(o.body),n+=i.test(t)?"":")".concat(o.post)}e.value=n||e.value})})),function(e){function t(e){for(var t="",r=0;r<e.length;r++){var s=e[r];i&&i(s);var a=o[s.type](s);a&&(t+=a,a.length&&s.selectors&&(t+=n))}return t}var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,o={charset:function(e){return"@charset "+e.name+";"},comment:function(e){return 0===e.comment.indexOf("__CSSVARSPONYFILL")?"/*"+e.comment+"*/":""},"custom-media":function(e){return"@custom-media "+e.name+" "+e.media+";"},declaration:function(e){return e.property+":"+e.value+";"},document:function(e){return"@"+(e.vendor||"")+"document "+e.document+"{"+t(e.rules)+"}"},"font-face":function(e){return"@font-face{"+t(e.declarations)+"}"},host:function(e){return"@host{"+t(e.rules)+"}"},import:function(e){return"@import "+e.name+";"},keyframe:function(e){return e.values.join(",")+"{"+t(e.declarations)+"}"},keyframes:function(e){return"@"+(e.vendor||"")+"keyframes "+e.name+"{"+t(e.keyframes)+"}"},media:function(e){return"@media "+e.media+"{"+t(e.rules)+"}"},namespace:function(e){return"@namespace "+e.name+";"},page:function(e){return"@page "+(e.selectors.length?e.selectors.join(", "):"")+"{"+t(e.declarations)+"}"},rule:function(e){var n=e.declarations;if(n.length)return e.selectors.join(",")+"{"+t(n)+"}"},supports:function(e){return"@supports "+e.supports+"{"+t(e.rules)+"}"}};return t(e.stylesheet.rules)}(s)}function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3?arguments[3]:void 0;if(-1===e.indexOf("var("))return e;var o=f("(",")",e),r="CSS transform warning:";return o?"var"===o.pre.slice(-3)?0===o.body.trim().length?(n.onWarning("".concat(r," var() must contain a non-whitespace string")),e):o.pre.slice(0,-3)+function(e){var o=e.split(",")[0].replace(/[\s\n\t]/g,""),s=(e.match(/(?:\s*,\s*){1}(.*)?/)||[])[1],a=t.hasOwnProperty(o)?String(t[o]):void 0,l=a||(s?String(s):void 0),u=i||e;return a||n.onWarning("".concat(r,' variable "').concat(o,'" is undefined')),l&&"undefined"!==l&&l.length>0?c(l,t,n,u):"var(".concat(u,")")}(o.body)+c(o.post,t,n):o.pre+"(".concat(c(o.body,t,n),")")+c(o.post,t,n):(-1!==e.indexOf("var(")&&n.onWarning("".concat(r,' missing closing ")" in the value "').concat(e,'"')),e)}function p(){function n(e,t,n,i){s.silent||console.error("".concat(e,"\n"),t),s.onError(e,t,n,i)}function o(e){s.silent||console.warn(e),s.onWarning(e)}var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e({},x,r),a=v;if(s.exclude="#".concat(a)+(s.exclude?",".concat(s.exclude):""),y)if("loading"!==document.readyState){var l=s.shadowDOM||s.rootElement.shadowRoot||s.rootElement.host;if(b&&s.onlyLegacy){if(s.updateDOM){var c=s.rootElement.host||(s.rootElement===document?document.documentElement:s.rootElement);Object.keys(s.variables).forEach(function(e){var t="--".concat(e.replace(/^-+/,"")),n=s.variables[e];c.style.setProperty(t,n)})}}else l&&!S?i({rootElement:x.rootElement,include:x.include,exclude:s.exclude,onSuccess:function(e,t,n){return(e.match(w.cssRootRules)||[]).join("")||!1},onComplete:function(e,t,n){u(e,{persist:!0}),S=!0,p(s)}}):(s.watch?function(e,t){if(window.MutationObserver){var n=function(e){return"LINK"===e.tagName&&-1!==(e.getAttribute("rel")||"").indexOf("stylesheet")},i=function(e){return"STYLE"===e.tagName&&(!t||e.id!==t)},o=null;C&&C.disconnect(),e.watch=x.watch,(C=new MutationObserver(function(t){var r=!1;t.forEach(function(t){if("attributes"===t.type)r=n(t.target)||i(t.target);else if("childList"===t.type){var s=Array.apply(null,t.addedNodes),a=Array.apply(null,t.removedNodes);r=[].concat(s,a).some(function(e){var t=n(e)&&!e.disabled,o=i(e)&&!e.disabled&&w.cssVars.test(e.textContent);return t||o})}r&&(clearTimeout(o),o=setTimeout(function(){p(e)},1))})})).observe(document.documentElement,{attributes:!0,attributeFilter:["disabled","href"],childList:!0,subtree:!0})}}(s,a):!1===s.watch&&C&&C.disconnect(),i({rootElement:s.rootElement,include:s.include,exclude:s.exclude,filter:s.onlyVars?w.cssVars:null,onBeforeSend:s.onBeforeSend,onSuccess:function(e,t,n){var i=s.onSuccess(e,t,n);return e=void 0!==i&&!1===Boolean(i)?"":i||e,s.updateURLs&&(e.replace(w.cssComments,"").match(w.cssUrls)||[]).forEach(function(t){var i=t.replace(w.cssUrls,"$1"),o=d(i,n);e=e.replace(t,t.replace(i,o))}),e},onError:function(e,t,i){var o=e.responseURL||d(i,location.href),r=e.statusText?"(".concat(e.statusText,")"):"Unspecified Error"+(0===e.status?" (possibly CORS related)":"");n("CSS XHR Error: ".concat(o," ").concat(e.status," ").concat(r),t,e,o)},onComplete:function(i,r,l){var c=null;i=r.map(function(e,t){return w.cssVars.test(e)?e:"/*__CSSVARSPONYFILL-".concat(t,"__*/")}).join("");try{i=u(i,{fixNestedCalc:s.fixNestedCalc,onlyVars:s.onlyVars,persist:s.updateDOM,preserve:s.preserve,variables:s.variables,onWarning:o});var d=w.cssKeyframes.test(i);if(i=i.replace(/\/\*__CSSVARSPONYFILL-(\d+)__\*\//g,function(e,t){return r[t]}),s.updateDOM&&l&&l.length){var f=l[l.length-1];(c=s.rootElement.querySelector("#".concat(a))||document.createElement("style")).setAttribute("id",a),c.textContent!==i&&(c.textContent=i),f.nextSibling!==c&&f.parentNode&&f.parentNode.insertBefore(c,f.nextSibling),d&&function(e){var t=["animation-name","-moz-animation-name","-webkit-animation-name"].filter(function(e){return getComputedStyle(document.body)[e]})[0];if(t){for(var n=e.getElementsByTagName("*"),i=[],o=0,r=n.length;o<r;o++){var s=n[o];"none"!==getComputedStyle(s)[t]&&(s.style[t]+="__CSSVARSPONYFILL-KEYFRAMES__",i.push(s))}document.body.offsetHeight;for(var a=0,l=i.length;a<l;a++){var u=i[a].style;u[t]=u[t].replace("__CSSVARSPONYFILL-KEYFRAMES__","")}}}(s.rootElement)}}catch(e){var h=!1;r.forEach(function(e,t){try{e=u(e,s)}catch(e){var i=l[t-0];h=!0,n(e.message,i)}}),h||n(e.message||e)}if(s.shadowDOM)for(var m,v=[s.rootElement].concat(t(s.rootElement.querySelectorAll("*"))),y=0;m=v[y];++y)m.shadowRoot&&m.shadowRoot.querySelector("style")&&p(e({},s,{rootElement:m.shadowRoot,variables:g.dom}));s.onComplete(i,c,JSON.parse(JSON.stringify(s.updateDOM?g.dom:g.temp)))}}))}else document.addEventListener("DOMContentLoaded",function e(t){p(r),document.removeEventListener("DOMContentLoaded",e)})}function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location.href,n=document.implementation.createHTMLDocument(""),i=n.createElement("base"),o=n.createElement("a");return n.head.appendChild(i),n.body.appendChild(o),i.href=t,o.href=e,o.href}var f=r;r.range=a;var h="--",m="var",g={dom:{},temp:{},user:{}},v="css-vars-ponyfill",y="undefined"!=typeof window,b=y&&window.CSS&&window.CSS.supports&&window.CSS.supports("(--a: 0)"),x={rootElement:y?document:null,include:"style,link[rel=stylesheet]",exclude:"",fixNestedCalc:!0,onlyLegacy:!0,onlyVars:!1,preserve:!1,shadowDOM:!1,silent:!1,updateDOM:!0,updateURLs:!0,variables:{},watch:null,onBeforeSend:function(){},onSuccess:function(){},onWarning:function(){},onError:function(){},onComplete:function(){}},w={cssComments:/\/\*[\s\S]+?\*\//g,cssKeyframes:/@(?:-\w*-)?keyframes/,cssRootRules:/(?::root\s*{\s*[^}]*})/g,cssUrls:/url\((?!['"]?(?:data|http|\/\/):)['"]?([^'")]*)['"]?\)/g,cssVars:/(?:(?::root\s*{\s*[^;]*;*\s*)|(?:var\(\s*))(--[^:)]+)(?:\s*[:)])/},C=null,S=!1;return p}),/*! jQuery UI - v1.12.1 - 2020-02-11
* http://jqueryui.com
* Includes: focusable.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(e){for(var t=e.css("visibility");"inherit"===t;)e=e.parent(),t=e.css("visibility");return"hidden"!==t}e.ui=e.ui||{};e.ui.version="1.12.1";/*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
e.ui.focusable=function(n,i){var o,r,s,a,l,u=n.nodeName.toLowerCase();return"area"===u?(o=n.parentNode,r=o.name,!(!n.href||!r||"map"!==o.nodeName.toLowerCase())&&(s=e("img[usemap='#"+r+"']"),s.length>0&&s.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(u)?(a=!n.disabled)&&(l=e(n).closest("fieldset")[0])&&(a=!l.disabled):a="a"===u?n.href||i:i,a&&e(n).is(":visible")&&t(e(n)))},e.extend(e.expr[":"],{focusable:function(t){return e.ui.focusable(t,null!=e.attr(t,"tabindex"))}});e.ui.focusable}),/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function t(e){return a.raw?e:encodeURIComponent(e)}function n(e){return a.raw?e:decodeURIComponent(e)}function i(e){return t(a.json?JSON.stringify(e):String(e))}function o(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(s," ")),a.json?JSON.parse(e):e}catch(e){}}function r(t,n){var i=a.raw?t:o(t);return e.isFunction(n)?n(i):i}var s=/\+/g,a=e.cookie=function(o,s,l){if(arguments.length>1&&!e.isFunction(s)){if(l=e.extend({},a.defaults,l),"number"==typeof l.expires){var u=l.expires,c=l.expires=new Date;c.setMilliseconds(c.getMilliseconds()+864e5*u)}return document.cookie=[t(o),"=",i(s),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var p=o?void 0:{},d=document.cookie?document.cookie.split("; "):[],f=0,h=d.length;f<h;f++){var m=d[f].split("="),g=n(m.shift()),v=m.join("=");if(o===g){p=r(v,s);break}o||void 0===(v=r(v))||(p[g]=v)}return p};a.defaults={},e.removeCookie=function(t,n){return e.cookie(t,"",e.extend({},n,{expires:-1})),!e.cookie(t)}}),/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */
function(e,t){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(n){return t(e,n)}):"object"==typeof module&&module.exports?module.exports=t(e,require("jquery")):e.jQueryBridget=t(e,e.jQuery)}(window,function(e,t){"use strict";function n(n,r,a){function l(e,t,i){var o,r="$()."+n+'("'+t+'")';return e.each(function(e,l){var u=a.data(l,n);if(!u)return void s(n+" not initialized. Cannot call methods, i.e. "+r);var c=u[t];if(!c||"_"==t.charAt(0))return void s(r+" is not a valid method");var p=c.apply(u,i);o=void 0===o?p:o}),void 0!==o?o:e}function u(e,t){e.each(function(e,i){var o=a.data(i,n);o?(o.option(t),o._init()):(o=new r(i,t),a.data(i,n,o))})}(a=a||t||e.jQuery)&&(r.prototype.option||(r.prototype.option=function(e){a.isPlainObject(e)&&(this.options=a.extend(!0,this.options,e))}),a.fn[n]=function(e){if("string"==typeof e){return l(this,e,o.call(arguments,1))}return u(this,e),this},i(a))}function i(e){!e||e&&e.bridget||(e.bridget=n)}var o=Array.prototype.slice,r=e.console,s=void 0===r?function(){}:function(e){r.error(e)};return i(t||e.jQuery),n}),function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var n=this._events=this._events||{},i=n[e]=n[e]||[];return-1==i.indexOf(t)&&i.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var n=this._onceEvents=this._onceEvents||{};return(n[e]=n[e]||{})[t]=!0,this}},t.off=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){var i=n.indexOf(t);return-1!=i&&n.splice(i,1),this}},t.emitEvent=function(e,t){var n=this._events&&this._events[e];if(n&&n.length){n=n.slice(0),t=t||[];for(var i=this._onceEvents&&this._onceEvents[e],o=0;o<n.length;o++){var r=n[o];i&&i[r]&&(this.off(e,r),delete i[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"function"==typeof define&&define.amd?define("get-size/get-size",t):"object"==typeof module&&module.exports?module.exports=t():e.getSize=t()}(window,function(){"use strict";function e(e){var t=parseFloat(e);return-1==e.indexOf("%")&&!isNaN(t)&&t}function t(){}function n(){for(var e={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},t=0;u>t;t++){e[l[t]]=0}return e}function i(e){var t=getComputedStyle(e);return t||a("Style returned "+t+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),t}function o(){if(!c){c=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var n=document.body||document.documentElement;n.appendChild(t);var o=i(t);s=200==Math.round(e(o.width)),r.isBoxSizeOuter=s,n.removeChild(t)}}function r(t){if(o(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var r=i(t);if("none"==r.display)return n();var a={};a.width=t.offsetWidth,a.height=t.offsetHeight;for(var c=a.isBorderBox="border-box"==r.boxSizing,p=0;u>p;p++){var d=l[p],f=r[d],h=parseFloat(f);a[d]=isNaN(h)?0:h}var m=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,v=a.marginLeft+a.marginRight,y=a.marginTop+a.marginBottom,b=a.borderLeftWidth+a.borderRightWidth,x=a.borderTopWidth+a.borderBottomWidth,w=c&&s,C=e(r.width);!1!==C&&(a.width=C+(w?0:m+b));var S=e(r.height);return!1!==S&&(a.height=S+(w?0:g+x)),a.innerWidth=a.width-(m+b),a.innerHeight=a.height-(g+x),a.outerWidth=a.width+v,a.outerHeight=a.height+y,a}}var s,a="undefined"==typeof console?t:function(e){console.error(e)},l=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=l.length,c=!1;return r}),function(e,t){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",t):"object"==typeof module&&module.exports?module.exports=t():e.matchesSelector=t()}(window,function(){"use strict";var e=function(){var e=window.Element.prototype;if(e.matches)return"matches";if(e.matchesSelector)return"matchesSelector";for(var t=["webkit","moz","ms","o"],n=0;n<t.length;n++){var i=t[n],o=i+"MatchesSelector";if(e[o])return o}}();return function(t,n){return t[e](n)}}),function(e,t){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(n){return t(e,n)}):"object"==typeof module&&module.exports?module.exports=t(e,require("desandro-matches-selector")):e.fizzyUIUtils=t(e,e.matchesSelector)}(window,function(e,t){var n={};n.extend=function(e,t){for(var n in t)e[n]=t[n];return e},n.modulo=function(e,t){return(e%t+t)%t};var i=Array.prototype.slice;n.makeArray=function(e){return Array.isArray(e)?e:null===e||void 0===e?[]:"object"==typeof e&&"number"==typeof e.length?i.call(e):[e]},n.removeFrom=function(e,t){var n=e.indexOf(t);-1!=n&&e.splice(n,1)},n.getParent=function(e,n){for(;e.parentNode&&e!=document.body;)if(e=e.parentNode,t(e,n))return e},n.getQueryElement=function(e){return"string"==typeof e?document.querySelector(e):e},n.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},n.filterFindElements=function(e,i){e=n.makeArray(e);var o=[];return e.forEach(function(e){if(e instanceof HTMLElement){if(!i)return void o.push(e);t(e,i)&&o.push(e);for(var n=e.querySelectorAll(i),r=0;r<n.length;r++)o.push(n[r])}}),o},n.debounceMethod=function(e,t,n){n=n||100;var i=e.prototype[t],o=t+"Timeout";e.prototype[t]=function(){var e=this[o];clearTimeout(e);var t=arguments,r=this;this[o]=setTimeout(function(){i.apply(r,t),delete r[o]},n)}},n.docReady=function(e){var t=document.readyState;"complete"==t||"interactive"==t?setTimeout(e):document.addEventListener("DOMContentLoaded",e)},n.toDashed=function(e){return e.replace(/(.)([A-Z])/g,function(e,t,n){return t+"-"+n}).toLowerCase()};var o=e.console;return n.htmlInit=function(t,i){n.docReady(function(){var r=n.toDashed(i),s="data-"+r,a=document.querySelectorAll("["+s+"]"),l=document.querySelectorAll(".js-"+r),u=n.makeArray(a).concat(n.makeArray(l)),c=s+"-options",p=e.jQuery;u.forEach(function(e){var n,r=e.getAttribute(s)||e.getAttribute(c);try{n=r&&JSON.parse(r)}catch(t){return void(o&&o.error("Error parsing "+s+" on "+e.className+": "+t))}var a=new t(e,n);p&&p.data(e,i,a)})})},n}),function(e,t){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],t):"object"==typeof module&&module.exports?module.exports=t(require("ev-emitter"),require("get-size")):(e.Outlayer={},e.Outlayer.Item=t(e.EvEmitter,e.getSize))}(window,function(e,t){"use strict";function n(e){for(var t in e)return!1;return null,!0}function i(e,t){e&&(this.element=e,this.layout=t,this.position={x:0,y:0},this._create())}var o=document.documentElement.style,r="string"==typeof o.transition?"transition":"WebkitTransition",s="string"==typeof o.transform?"transform":"WebkitTransform",a={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],l={transform:s,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},u=i.prototype=Object.create(e.prototype);u.constructor=i,u._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},u.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},u.getSize=function(){this.size=t(this.element)},u.css=function(e){var t=this.element.style;for(var n in e){t[l[n]||n]=e[n]}},u.getPosition=function(){var e=getComputedStyle(this.element),t=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),i=e[t?"left":"right"],o=e[n?"top":"bottom"],r=parseFloat(i),s=parseFloat(o),a=this.layout.size;-1!=i.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=t?a.paddingLeft:a.paddingRight,s-=n?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},u.layoutPosition=function(){var e=this.layout.size,t={},n=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),o=n?"paddingLeft":"paddingRight",r=n?"left":"right",s=n?"right":"left",a=this.position.x+e[o];t[r]=this.getXValue(a),t[s]="";var l=i?"paddingTop":"paddingBottom",u=i?"top":"bottom",c=i?"bottom":"top",p=this.position.y+e[l];t[u]=this.getYValue(p),t[c]="",this.css(t),this.emitEvent("layout",[this])},u.getXValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!t?e/this.layout.size.width*100+"%":e+"px"},u.getYValue=function(e){var t=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&t?e/this.layout.size.height*100+"%":e+"px"},u._transitionTo=function(e,t){this.getPosition();var n=this.position.x,i=this.position.y,o=e==this.position.x&&t==this.position.y;if(this.setPosition(e,t),o&&!this.isTransitioning)return void this.layoutPosition();var r=e-n,s=t-i,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},u.getTranslate=function(e,t){var n=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop");return e=n?e:-e,t=i?t:-t,"translate3d("+e+"px, "+t+"px, 0)"},u.goTo=function(e,t){this.setPosition(e,t),this.layoutPosition()},u.moveTo=u._transitionTo,u.setPosition=function(e,t){this.position.x=parseFloat(e),this.position.y=parseFloat(t)},u._nonTransition=function(e){this.css(e.to),e.isCleaning&&this._removeStyles(e.to);for(var t in e.onTransitionEnd)e.onTransitionEnd[t].call(this)},u.transition=function(e){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(e);var t=this._transn;for(var n in e.onTransitionEnd)t.onEnd[n]=e.onTransitionEnd[n];for(n in e.to)t.ingProperties[n]=!0,e.isCleaning&&(t.clean[n]=!0);if(e.from){this.css(e.from);this.element.offsetHeight;null}this.enableTransition(e.to),this.css(e.to),this.isTransitioning=!0};var c="opacity,"+function(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}(s);u.enableTransition=function(){if(!this.isTransitioning){var e=this.layout.options.transitionDuration;e="number"==typeof e?e+"ms":e,this.css({transitionProperty:c,transitionDuration:e,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(a,this,!1)}},u.onwebkitTransitionEnd=function(e){this.ontransitionend(e)},u.onotransitionend=function(e){this.ontransitionend(e)};var p={"-webkit-transform":"transform"};u.ontransitionend=function(e){if(e.target===this.element){var t=this._transn,i=p[e.propertyName]||e.propertyName;if(delete t.ingProperties[i],n(t.ingProperties)&&this.disableTransition(),i in t.clean&&(this.element.style[e.propertyName]="",delete t.clean[i]),i in t.onEnd){t.onEnd[i].call(this),delete t.onEnd[i]}this.emitEvent("transitionEnd",[this])}},u.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(a,this,!1),this.isTransitioning=!1},u._removeStyles=function(e){var t={};for(var n in e)t[n]="";this.css(t)};var d={transitionProperty:"",transitionDuration:"",transitionDelay:""};return u.removeTransitionStyles=function(){this.css(d)},u.stagger=function(e){e=isNaN(e)?0:e,this.staggerDelay=e+"ms"},u.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},u.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},u.reveal=function(){delete this.isHidden,this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("visibleStyle")]=this.onRevealTransitionEnd,this.transition({from:e.hiddenStyle,to:e.visibleStyle,isCleaning:!0,onTransitionEnd:t})},u.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},u.getHideRevealTransitionEndProperty=function(e){var t=this.layout.options[e];if(t.opacity)return"opacity";for(var n in t)return n},u.hide=function(){this.isHidden=!0,this.css({display:""});var e=this.layout.options,t={};t[this.getHideRevealTransitionEndProperty("hiddenStyle")]=this.onHideTransitionEnd,this.transition({from:e.visibleStyle,to:e.hiddenStyle,isCleaning:!0,onTransitionEnd:t})},u.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},u.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},i}),function(e,t){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(n,i,o,r){return t(e,n,i,o,r)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):e.Outlayer=t(e,e.EvEmitter,e.getSize,e.fizzyUIUtils,e.Outlayer.Item)}(window,function(e,t,n,i,o){"use strict";function r(e,t){var n=i.getQueryElement(e);if(!n)return void(l&&l.error("Bad element for "+this.constructor.namespace+": "+(n||e)));this.element=n,u&&(this.$element=u(this.element)),this.options=i.extend({},this.constructor.defaults),this.option(t);var o=++p;this.element.outlayerGUID=o,d[o]=this,this._create(),this._getOption("initLayout")&&this.layout()}function s(e){function t(){e.apply(this,arguments)}return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t}function a(e){if("number"==typeof e)return e;var t=e.match(/(^\d*\.?\d*)(\w*)/),n=t&&t[1],i=t&&t[2];return n.length?(n=parseFloat(n))*(h[i]||1):0}var l=e.console,u=e.jQuery,c=function(){},p=0,d={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;i.extend(f,t.prototype),f.option=function(e){i.extend(this.options,e)},f._getOption=function(e){var t=this.constructor.compatOptions[e];return t&&void 0!==this.options[t]?this.options[t]:this.options[e]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),i.extend(this.element.style,this.options.containerStyle),this._getOption("resize")&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(e){for(var t=this._filterFindItemElements(e),n=this.constructor.Item,i=[],o=0;o<t.length;o++){var r=t[o],s=new n(r,this);i.push(s)}return i},f._filterFindItemElements=function(e){return i.filterFindElements(e,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(e){return e.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var e=this._getOption("layoutInstant"),t=void 0!==e?e:!this._isLayoutInited;this.layoutItems(this.items,t),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=n(this.element)},f._getMeasurement=function(e,t){var i,o=this.options[e];o?("string"==typeof o?i=this.element.querySelector(o):o instanceof HTMLElement&&(i=o),this[e]=i?n(i)[t]:o):this[e]=0},f.layoutItems=function(e,t){e=this._getItemsForLayout(e),this._layoutItems(e,t),this._postLayout()},f._getItemsForLayout=function(e){return e.filter(function(e){return!e.isIgnored})},f._layoutItems=function(e,t){if(this._emitCompleteOnItems("layout",e),e&&e.length){var n=[];e.forEach(function(e){var i=this._getItemLayoutPosition(e);i.item=e,i.isInstant=t||e.isLayoutInstant,n.push(i)},this),this._processLayoutQueue(n)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(e){this.updateStagger(),e.forEach(function(e,t){this._positionItem(e.item,e.x,e.y,e.isInstant,t)},this)},f.updateStagger=function(){var e=this.options.stagger;return null===e||void 0===e?void(this.stagger=0):(this.stagger=a(e),this.stagger)},f._positionItem=function(e,t,n,i,o){i?e.goTo(t,n):(e.stagger(o*this.stagger),e.moveTo(t,n))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){if(this._getOption("resizeContainer")){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=c,f._setContainerMeasure=function(e,t){if(void 0!==e){var n=this.size;n.isBorderBox&&(e+=t?n.paddingLeft+n.paddingRight+n.borderLeftWidth+n.borderRightWidth:n.paddingBottom+n.paddingTop+n.borderTopWidth+n.borderBottomWidth),e=Math.max(e,0),this.element.style[t?"width":"height"]=e+"px"}},f._emitCompleteOnItems=function(e,t){function n(){o.dispatchEvent(e+"Complete",null,[t])}function i(){++s==r&&n()}var o=this,r=t.length;if(!t||!r)return void n();var s=0;t.forEach(function(t){t.once(e,i)})},f.dispatchEvent=function(e,t,n){var i=t?[t].concat(n):n;if(this.emitEvent(e,i),u)if(this.$element=this.$element||u(this.element),t){var o=u.Event(t);o.type=e,this.$element.trigger(o,n)}else this.$element.trigger(e,n)},f.ignore=function(e){var t=this.getItem(e);t&&(t.isIgnored=!0)},f.unignore=function(e){var t=this.getItem(e);t&&delete t.isIgnored},f.stamp=function(e){(e=this._find(e))&&(this.stamps=this.stamps.concat(e),e.forEach(this.ignore,this))},f.unstamp=function(e){(e=this._find(e))&&e.forEach(function(e){i.removeFrom(this.stamps,e),this.unignore(e)},this)},f._find=function(e){return e?("string"==typeof e&&(e=this.element.querySelectorAll(e)),e=i.makeArray(e)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var e=this.element.getBoundingClientRect(),t=this.size;this._boundingRect={left:e.left+t.paddingLeft+t.borderLeftWidth,top:e.top+t.paddingTop+t.borderTopWidth,right:e.right-(t.paddingRight+t.borderRightWidth),bottom:e.bottom-(t.paddingBottom+t.borderBottomWidth)}},f._manageStamp=c,f._getElementOffset=function(e){var t=e.getBoundingClientRect(),i=this._boundingRect,o=n(e);return{left:t.left-i.left-o.marginLeft,top:t.top-i.top-o.marginTop,right:i.right-t.right-o.marginRight,bottom:i.bottom-t.bottom-o.marginBottom}},f.handleEvent=i.handleEvent,f.bindResize=function(){e.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){e.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},i.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var e=n(this.element);return this.size&&e&&e.innerWidth!==this.size.innerWidth},f.addItems=function(e){var t=this._itemize(e);return t.length&&(this.items=this.items.concat(t)),t},f.appended=function(e){var t=this.addItems(e);t.length&&(this.layoutItems(t,!0),this.reveal(t))},f.prepended=function(e){var t=this._itemize(e);if(t.length){var n=this.items.slice(0);this.items=t.concat(n),this._resetLayout(),this._manageStamps(),this.layoutItems(t,!0),this.reveal(t),this.layoutItems(n)}},f.reveal=function(e){if(this._emitCompleteOnItems("reveal",e),e&&e.length){var t=this.updateStagger();e.forEach(function(e,n){e.stagger(n*t),e.reveal()})}},f.hide=function(e){if(this._emitCompleteOnItems("hide",e),e&&e.length){var t=this.updateStagger();e.forEach(function(e,n){e.stagger(n*t),e.hide()})}},f.revealItemElements=function(e){var t=this.getItems(e);this.reveal(t)},f.hideItemElements=function(e){var t=this.getItems(e);this.hide(t)},f.getItem=function(e){for(var t=0;t<this.items.length;t++){var n=this.items[t];if(n.element==e)return n}},f.getItems=function(e){e=i.makeArray(e);var t=[];return e.forEach(function(e){var n=this.getItem(e);n&&t.push(n)},this),t},f.remove=function(e){var t=this.getItems(e);this._emitCompleteOnItems("remove",t),t&&t.length&&t.forEach(function(e){e.remove(),i.removeFrom(this.items,e)},this)},f.destroy=function(){var e=this.element.style;e.height="",e.position="",e.width="",this.items.forEach(function(e){e.destroy()}),this.unbindResize();var t=this.element.outlayerGUID;delete d[t],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(e){e=i.getQueryElement(e);var t=e&&e.outlayerGUID;return t&&d[t]},r.create=function(e,t){var n=s(r);return n.defaults=i.extend({},r.defaults),i.extend(n.defaults,t),n.compatOptions=i.extend({},r.compatOptions),n.namespace=e,n.data=r.data,n.Item=s(o),i.htmlInit(n,e),u&&u.bridget&&u.bridget(e,n),n};var h={ms:1,s:1e3};return r.Item=o,r}),function(e,t){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],t):"object"==typeof module&&module.exports?module.exports=t(require("outlayer"),require("get-size")):e.Masonry=t(e.Outlayer,e.getSize)}(window,function(e,t){var n=e.create("masonry");n.compatOptions.fitWidth="isFitWidth";var i=n.prototype;return i._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var e=0;e<this.cols;e++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},i.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var e=this.items[0],n=e&&e.element;this.columnWidth=n&&t(n).outerWidth||this.containerWidth}var i=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/i,s=i-o%i,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},i.getContainerWidth=function(){var e=this._getOption("fitWidth"),n=e?this.element.parentNode:this.element,i=t(n);this.containerWidth=i&&i.innerWidth},i._getItemLayoutPosition=function(e){e.getSize();var t=e.size.outerWidth%this.columnWidth,n=t&&1>t?"round":"ceil",i=Math[n](e.size.outerWidth/this.columnWidth);i=Math.min(i,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](i,e),s={x:this.columnWidth*r.col,y:r.y},a=r.y+e.size.outerHeight,l=i+r.col,u=r.col;l>u;u++)this.colYs[u]=a;return s},i._getTopColPosition=function(e){var t=this._getTopColGroup(e),n=Math.min.apply(Math,t);return{col:t.indexOf(n),y:n}},i._getTopColGroup=function(e){if(2>e)return this.colYs;for(var t=[],n=this.cols+1-e,i=0;n>i;i++)t[i]=this._getColGroupY(i,e);return t},i._getColGroupY=function(e,t){if(2>t)return this.colYs[e];var n=this.colYs.slice(e,e+t);return Math.max.apply(Math,n)},i._getHorizontalColPosition=function(e,t){var n=this.horizontalColIndex%this.cols;n=e>1&&n+e>this.cols?0:n;var i=t.size.outerWidth&&t.size.outerHeight;return this.horizontalColIndex=i?n+e:this.horizontalColIndex,{col:n,y:this._getColGroupY(n,e)}},i._manageStamp=function(e){var n=t(e),i=this._getElementOffset(e),o=this._getOption("originLeft"),r=o?i.left:i.right,s=r+n.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var l=Math.floor(s/this.columnWidth);l-=s%this.columnWidth?0:1,l=Math.min(this.cols-1,l);for(var u=this._getOption("originTop"),c=(u?i.top:i.bottom)+n.outerHeight,p=a;l>=p;p++)this.colYs[p]=Math.max(c,this.colYs[p])},i._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var e={height:this.maxY};return this._getOption("fitWidth")&&(e.width=this._getContainerFitWidth()),e},i._getContainerFitWidth=function(){for(var e=0,t=this.cols;--t&&0===this.colYs[t];)e++;return(this.cols-e)*this.columnWidth-this.gutter},i.needsResizeLayout=function(){var e=this.containerWidth;return this.getContainerWidth(),e!=this.containerWidth},n}),function(e,t,n){function i(e,t){return typeof e===t}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):C?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function r(){var e=t.body;return e||(e=o(C?"svg":"body"),e.fake=!0),e}function s(e,n,i,s){var a,l,u,c,p="modernizr",d=o("div"),f=r();if(parseInt(i,10))for(;i--;)u=o("div"),u.id=s?s[i]:p+(i+1),d.appendChild(u);return a=o("style"),a.type="text/css",a.id="s"+p,(f.fake?f:d).appendChild(a),f.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),d.id=p,f.fake&&(f.style.background="",f.style.overflow="hidden",c=w.style.overflow,w.style.overflow="hidden",w.appendChild(f)),l=n(d,e),f.fake?(f.parentNode.removeChild(f),w.style.overflow=c,w.offsetHeight):d.parentNode.removeChild(d),!!l}function a(e,t){return!!~(""+e).indexOf(t)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return function(){return e.apply(t,arguments)}}function c(e,t,n){var o;for(var r in e)if(e[r]in t)return!1===n?e[r]:(o=t[e[r]],i(o,"function")?u(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(t,n,i){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var r=e.console;if(null!==o)i&&(o=o.getPropertyValue(i));else if(r){var s=r.error?"error":"log";r[s].call(r,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[i];return o}function f(t,i){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),i))return!0;return!1}if("CSSSupportsRule"in e){for(var r=[];o--;)r.push("("+p(t[o])+":"+i+")");return r=r.join(" or "),s("@supports ("+r+") { #modernizr { position: absolute; } }",function(e){return"absolute"==d(e,null,"position")})}return n}function h(e,t,r,s){function u(){p&&(delete A.style,delete A.modElem)}if(s=!i(s,"undefined")&&s,!i(r,"undefined")){var c=f(e,r);if(!i(c,"undefined"))return c}for(var p,d,h,m,g,v=["modernizr","tspan","samp"];!A.style&&v.length;)p=!0,A.modElem=o(v.shift()),A.style=A.modElem.style;for(h=e.length,d=0;h>d;d++)if(m=e[d],g=A.style[m],a(m,"-")&&(m=l(m)),A.style[m]!==n){if(s||i(r,"undefined"))return u(),"pfx"!=t||m;try{A.style[m]=r}catch(e){}if(A.style[m]!=g)return u(),"pfx"!=t||m}return u(),!1}function m(e,t,n,o,r){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+k.join(s+" ")+s).split(" ");return i(t,"string")||i(t,"undefined")?h(a,t,o,r):(a=(e+" "+I.join(s+" ")+s).split(" "),c(a,t,n))}function g(e,t,i){return m(e,n,n,t,i)}var v=[],y=[],b={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){y.push({name:e,fn:t,options:n})},addAsyncTest:function(e){y.push({name:null,fn:e})}},x=function(){};x.prototype=b,x=new x,x.addTest("localstorage",function(){var e="modernizr";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}});var w=t.documentElement,C="svg"===w.nodeName.toLowerCase(),S=b._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];b._prefixes=S;var T=b.testStyles=s;x.addTest("touchevents",function(){var n;if("ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch)n=!0;else{var i=["@media (",S.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");T(i,function(e){n=9===e.offsetTop})}return n});var E="Moz O ms Webkit",k=b._config.usePrefixes?E.split(" "):[];b._cssomPrefixes=k;var I=b._config.usePrefixes?E.toLowerCase().split(" "):[];b._domPrefixes=I;var P={elem:o("modernizr")};x._q.push(function(){delete P.elem});var A={style:P.elem.style};x._q.unshift(function(){delete A.style}),b.testAllProps=m,b.testAllProps=g,x.addTest("cssgridlegacy",g("grid-columns","10px",!0)),x.addTest("cssgrid",g("grid-template-rows","none",!0)),function(){var e,t,n,o,r,s,a;for(var l in y)if(y.hasOwnProperty(l)){if(e=[],t=y[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=i(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)s=e[r],a=s.split("."),1===a.length?x[a[0]]=o:(!x[a[0]]||x[a[0]]instanceof Boolean||(x[a[0]]=new Boolean(x[a[0]])),x[a[0]][a[1]]=o),v.push((o?"":"no-")+a.join("-"))}}(),function(e){var t=w.className,n=x._config.classPrefix||"";if(C&&(t=t.baseVal),x._config.enableJSClass){var i=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(i,"$1"+n+"js$2")}x._config.enableClasses&&(t+=" "+n+e.join(" "+n),C?w.className.baseVal=t:w.className=t)}(v),delete b.addTest,delete b.addAsyncTest;for(var N=0;N<x._q.length;N++)x._q[N]();e.Modernizr=x}(window,document);
(function() {
  var FrameworkAlign,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  FrameworkAlign = (function() {
    function FrameworkAlign(element1, type1) {
      this.element = element1;
      this.type = type1;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.createOverlapDetectors = bind(this.createOverlapDetectors, this);
      this.position = bind(this.position, this);
      this.parent = this.element.parent();
      this.left_side_border;
      this.right_element_width = null;
      this.position();
      this.createOverlapDetectors();
      this.resizeListeners();
    }

    FrameworkAlign.prototype.position = function() {
      if (this.type === 'center-x') {
        return this.element.css({
          'margin-left': -(this.element.outerWidth() / 2)
        });
      }
    };

    FrameworkAlign.prototype.createOverlapDetectors = function() {
      var _this;
      _this = this;
      if (_this.type === 'right') {
        return this.right_element_width = _this.element.outerWidth();
      }
    };

    FrameworkAlign.prototype.checkOverlap = function() {
      var _this, left_element, left_side_border, right_side_border;
      _this = this;
      if (_this.type === 'right') {
        _this.parent.removeClass('overlap');
        left_element = _this.parent.children().eq(_this.element.index() - 1);
        left_side_border = left_element.position().left + left_element.outerWidth();
        right_side_border = _this.parent.outerWidth() - _this.right_element_width;
        if (left_side_border >= right_side_border) {
          return _this.parent.addClass('overlap');
        }
      }
    };

    FrameworkAlign.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      $(window).on('resize.FrameworkAlign', function() {
        return _this.checkOverlap();
      });
      return setTimeout(function() {
        return _this.checkOverlap();
      }, 1);
    };

    return FrameworkAlign;

  })();

  theme.classes.FrameworkAnimation = (function() {
    function FrameworkAnimation() {}

    return FrameworkAnimation;

  })();

  theme.classes.FrameworkArticle = (function() {
    function FrameworkArticle(root) {
      var _this;
      this.root = root;
      this.initializeDisqus = bind(this.initializeDisqus, this);
      this.hideTagInfo = bind(this.hideTagInfo, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.comments_enabled = _this.root.data('comments-enabled');
      _this.disqus_shortname = _this.root.attr('data-disqus-shortname');
      _this.enable_disqus = _this.root.data('enable-disqus');
      _this.no_tags_displayed = _this.root.find('.article--tag').length === 0 ? true : false;
      _this.load();
    }

    FrameworkArticle.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.no_tags_displayed) {
        _this.hideTagInfo();
      }
      if (_this.enable_disqus && _this.comments_enabled) {
        return _this.initializeDisqus();
      }
    };

    FrameworkArticle.prototype.hideTagInfo = function() {
      var _this;
      _this = this;
      return _this.root.find('.article--tag-info').hide();
    };

    FrameworkArticle.prototype.initializeDisqus = function() {
      var _this;
      _this = this;
      return theme.utils.insertScript("https://" + _this.disqus_shortname + ".disqus.com/embed.js");
    };

    return FrameworkArticle;

  })();

  theme.classes.FrameworkBlog = (function() {
    function FrameworkBlog(root) {
      var _this;
      this.root = root;
      this.initMasonry = bind(this.initMasonry, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    FrameworkBlog.prototype.load = function() {
      var _this, is_mobile;
      _this = this;
      _this.eventListeners();
      _this.has_multi_columns = _this.root.attr('data-columns') !== '1';
      is_mobile = theme.utils.mqs.current_window === 'small';
      if (!is_mobile && _this.has_multi_columns) {
        _this.initMasonry();
        return $(window).on('load', function() {
          return _this.initMasonry();
        });
      }
    };

    FrameworkBlog.prototype.eventListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Blog', theme.utils.debounce(100, function() {
        if (_this.has_multi_columns && theme.utils.mqs.current_window !== 'small') {
          return _this.initMasonry();
        } else {
          return $('.blog--list').masonry('destroy');
        }
      }));
    };

    FrameworkBlog.prototype.initMasonry = function() {
      return $('.blog--list').masonry({
        itemSelector: '.blog--list--item',
        percentPosition: true,
        horizontalOrder: true,
        columnWidth: '.blog--list--item'
      });
    };

    return FrameworkBlog;

  })();

  theme.classes.FrameworkCart = (function() {
    function FrameworkCart(root) {
      var _this;
      this.root = root;
      this.renderDynamicCheckoutButtons = bind(this.renderDynamicCheckoutButtons, this);
      this.updateTotals = bind(this.updateTotals, this);
      this.updateAllHasItems = bind(this.updateAllHasItems, this);
      this.addItem = bind(this.addItem, this);
      this.swapInImages = bind(this.swapInImages, this);
      this.getHtml = bind(this.getHtml, this);
      this.updateHtml = bind(this.updateHtml, this);
      this.htmlListener = bind(this.htmlListener, this);
      this.updateAllHtml = bind(this.updateAllHtml, this);
      this.updateNote = bind(this.updateNote, this);
      this.noteTypingListener = bind(this.noteTypingListener, this);
      this.updateQuantity = bind(this.updateQuantity, this);
      this.clearRequests = bind(this.clearRequests, this);
      this.toggleLoadingDisplay = bind(this.toggleLoadingDisplay, this);
      this.initAnimation = bind(this.initAnimation, this);
      this.removeItem = bind(this.removeItem, this);
      this.removeButtonListener = bind(this.removeButtonListener, this);
      this.minusButtonListener = bind(this.minusButtonListener, this);
      this.plusButtonListener = bind(this.plusButtonListener, this);
      this.inputBoxListener = bind(this.inputBoxListener, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.getAjaxUrl = bind(this.getAjaxUrl, this);
      this.getOtherCarts = bind(this.getOtherCarts, this);
      _this = this;
      _this.other_carts = _this.getOtherCarts();
      _this.quantity_request = {};
      _this.quantity_timer = {};
      _this.total_item_count = $('.cart--external--total-items');
      _this.total_price = $('.cart--external--total-price');
      _this.view = _this.root.attr('data-view');
      _this.getAjaxUrl();
      _this.updateTotals();
      _this.htmlListener();
      _this.eventListeners();
      _this.renderDynamicCheckoutButtons();
    }

    FrameworkCart.prototype.getOtherCarts = function() {
      var _this, other_carts;
      _this = this;
      return other_carts = $('[data-js-class="Cart"]').not(_this.root);
    };

    FrameworkCart.prototype.getAjaxUrl = function() {
      var _this;
      _this = this;
      _this.ajax_url = window.location.href;
      _this.ajax_url = _this.ajax_url.replace(window.location.hostname + window.location.pathname, window.location.hostname + theme.urls.cart);
      _this.ajax_url = _this.ajax_url.replace('#', '');
      if (_this.ajax_url.indexOf("?") >= 0) {
        _this.ajax_url = _this.ajax_url + "&";
      } else {
        _this.ajax_url = _this.ajax_url + "?";
      }
      _this.ajax_desktop_url = _this.ajax_url + "view=ajax--desktop";
      return _this.ajax_mobile_url = _this.ajax_url + "view=ajax--mobile";
    };

    FrameworkCart.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.inputBoxListener();
      _this.plusButtonListener();
      _this.minusButtonListener();
      _this.removeButtonListener();
      return _this.noteTypingListener();
    };

    FrameworkCart.prototype.inputBoxListener = function() {
      var _this, input_box;
      _this = this;
      input_box = _this.root.find('.cart--quantity--input');
      input_box.on('keydown', function(event) {
        if ((event.which < 48 || event.which > 57) && event.which !== 8 && event.which !== 37 && event.which !== 39 && event.which !== 9) {
          return event.preventDefault();
        }
      });
      return input_box.on('focusout', function(event) {
        var item_key, quantity;
        item_key = $(this).closest('.cart--item').data('item-key');
        _this.toggleLoadingDisplay(item_key);
        _this.clearRequests(item_key);
        quantity = theme.utils.isNaN(parseInt($(this).val())) ? 1 : parseInt($(this).val());
        if (quantity === 0) {
          return _this.removeItem(item_key);
        } else {
          return _this.updateQuantity(item_key, quantity, 0, function(success) {
            if (success) {
              return _this.updateAllHtml(function() {});
            }
          });
        }
      });
    };

    FrameworkCart.prototype.plusButtonListener = function() {
      var _this, plus_button;
      _this = this;
      plus_button = _this.root.find('.cart--item--quantity .plus');
      return plus_button.on('click', function() {
        var input, item_key, quantity;
        input = $(this).prev('input');
        item_key = $(this).closest('.cart--item').data('item-key');
        quantity = theme.utils.isNaN(parseInt(input.val())) ? 1 : parseInt(input.val()) + 1;
        input.val(quantity);
        _this.toggleLoadingDisplay(item_key);
        _this.clearRequests(item_key);
        _this.updateQuantity(item_key, quantity, 700, function(success) {
          if (success) {
            return _this.updateAllHtml(function() {});
          }
        });
        return false;
      });
    };

    FrameworkCart.prototype.minusButtonListener = function() {
      var _this, minus_button;
      _this = this;
      minus_button = _this.root.find('.cart--item--quantity .minus');
      return minus_button.on('click', function() {
        var input, item_key, quantity;
        input = $(this).siblings('input');
        item_key = $(this).closest('.cart--item').data('item-key');
        quantity = theme.utils.isNaN(parseInt(input.val())) ? 1 : parseInt(input.val()) - 1;
        if (quantity < 1) {
          quantity = 1;
        }
        input.val(quantity);
        _this.toggleLoadingDisplay(item_key);
        _this.clearRequests(item_key);
        _this.updateQuantity(item_key, quantity, 700, function(success) {
          if (success) {
            return _this.updateAllHtml(function() {});
          }
        });
        return false;
      });
    };

    FrameworkCart.prototype.removeButtonListener = function() {
      var _this, remove_button;
      _this = this;
      remove_button = _this.root.find('.cart--item--remove');
      return remove_button.on('click', function() {
        var item_key;
        item_key = $(this).closest('.cart--item').data('item-key');
        _this.toggleLoadingDisplay(item_key);
        _this.clearRequests(item_key);
        _this.removeItem(item_key);
        return false;
      });
    };

    FrameworkCart.prototype.removeItem = function(item_key) {
      var _this;
      _this = this;
      return _this.updateQuantity(item_key, 0, 0, function(success) {
        if (success) {
          return _this.updateAllHtml(function() {});
        }
      });
    };

    FrameworkCart.prototype.initAnimation = function() {
      var _this, animation_root;
      _this = this;
      animation_root = _this.root.find('[data-js-class="FrameworkLoadingAnimation"]');
      return new theme.classes.FrameworkLoadingAnimation(animation_root);
    };

    FrameworkCart.prototype.toggleLoadingDisplay = function(item_key) {
      var _this, checkout_button, input;
      _this = this;
      input = _this.root.find(".cart--item[data-item-key='" + item_key + "'] input");
      input.attr('data-loading', 'true');
      checkout_button = _this.root.find('.cart--checkout-button button');
      checkout_button.attr('disabled', true);
      return _this.root.find('.cart--additional-buttons').css('visibility', 'hidden');
    };

    FrameworkCart.prototype.clearRequests = function(item_key) {
      var _this;
      _this = this;
      if (_this.quantity_request.item_key) {
        _this.quantity_request.item_key.abort();
      }
      if (_this.quantity_timer.item_key) {
        return clearTimeout(_this.quantity_timer.item_key);
      }
    };

    FrameworkCart.prototype.updateQuantity = function(item_key, quantity, time_out, callback) {
      var _this, ajaxQuantity;
      _this = this;
      ajaxQuantity = function() {
        return _this.quantity_request.item_key = $.ajax({
          type: "POST",
          url: "/cart/change.js",
          dataType: "json",
          data: "quantity=" + quantity + "&id=" + item_key
        }).done(function(data, textStatus, jqXHR) {
          callback(true);
          return _this.updateTotals();
        }).fail(function(jqXHR, textStatus) {
          if (jqXHR.responseText) {
            console.log('Error - ajax update quantity', JSON.parse(jqXHR.responseText).description);
          }
          return callback(false);
        });
      };
      return _this.quantity_timer.item_key = setTimeout(ajaxQuantity, time_out);
    };

    FrameworkCart.prototype.noteTypingListener = function() {
      var _this, note_textbox;
      _this = this;
      note_textbox = _this.root.find('.cart--notes--textarea');
      return note_textbox.on('input', function() {
        if (_this.note_request) {
          _this.note_request.abort();
        }
        if (_this.note_timer) {
          clearTimeout(_this.note_timer);
        }
        return _this.updateNote($(this).val());
      });
    };

    FrameworkCart.prototype.updateNote = function(note) {
      var _this, ajaxNote;
      _this = this;
      ajaxNote = function() {
        return _this.note_request = $.ajax({
          type: "POST",
          url: "/cart/update.js",
          dataType: "json",
          data: {
            note: note
          }
        }).done(function() {
          return _this.other_carts.trigger('update-html');
        }).fail(function(jqXHR, textStatus) {
          if (jqXHR.responseText) {
            return console.log('Error - ajax update note', JSON.parse(jqXHR.responseText).description);
          }
        });
      };
      return _this.note_timer = setTimeout(ajaxNote, 350);
    };

    FrameworkCart.prototype.updateAllHtml = function(update_all_html_done) {
      var _this;
      _this = this;
      _this.updateHtml(update_all_html_done);
      return _this.other_carts.trigger('update-html');
    };

    FrameworkCart.prototype.htmlListener = function() {
      var _this;
      _this = this;
      return _this.root.on('update-html', function() {
        return _this.updateHtml(function() {});
      });
    };

    FrameworkCart.prototype.updateHtml = function(update_all_html_done) {
      var _this;
      _this = this;
      return _this.getHtml(_this.view, function(new_html) {
        var new_form, old_form;
        old_form = _this.root.find('.cart--form');
        new_form = new_html.find('.cart--form');
        new_form = _this.swapInImages(old_form, new_form);
        old_form.replaceWith(new_form);
        _this.eventListeners();
        _this.initAnimation();
        update_all_html_done();
        return $(window).trigger('theme.cart.update-complete');
      });
    };

    FrameworkCart.prototype.getHtml = function(view, callback) {
      var _this, url;
      _this = this;
      url = _this.ajax_desktop_url;
      if (view === 'mobile') {
        url = _this.ajax_mobile_url;
      }
      return $.ajax({
        url: url,
        type: "GET",
        dataType: "html"
      }).done(function(data) {
        var cart_html;
        cart_html = $($.parseHTML(data));
        callback(cart_html);
      }).fail(function(jqxhr, textStatus, error) {
        console.log("search.json Request Failed: " + textStatus + ", " + error);
        callback(false);
      });
    };

    FrameworkCart.prototype.swapInImages = function(old_html, new_html) {
      var _this, new_items;
      _this = this;
      new_items = new_html.find('.cart--item');
      new_items.each(function() {
        var new_image, new_instance, old_image, old_item, variant_id;
        variant_id = $(this).attr('data-variant-id');
        new_image = $(this).find('.cart--item--image');
        new_instance = new_html.find("[data-variant-id='" + variant_id + "'] .cart--item--image").index(new_image);
        old_item = old_html.find("[data-variant-id='" + variant_id + "']").eq(new_instance);
        if (old_item.length > 0) {
          old_image = old_item.find('.cart--item--image');
          return new_image.replaceWith(old_image);
        }
      });
      return new_html;
    };

    FrameworkCart.prototype.addItem = function(form, callback) {
      var _this;
      _this = this;
      return $.ajax({
        type: "POST",
        url: "/cart/add.js",
        dataType: "json",
        data: form.serialize()
      }).done(function(data, textStatus, jqXHR) {
        callback(true);
        _this.updateAllHasItems(1, true);
        return _this.updateTotals();
      }).fail(function(jqXHR, textStatus) {
        console.log('Error - ajax update quantity', JSON.parse(jqXHR.responseText).description);
        return callback(false, JSON.parse(jqXHR.responseText).description);
      });
    };

    FrameworkCart.prototype.updateAllHasItems = function(item_count, force_true) {
      var _this, has_items;
      if (force_true == null) {
        force_true = false;
      }
      _this = this;
      has_items = false;
      if (item_count > 0 || force_true) {
        has_items = true;
      }
      _this.root.attr('data-has-items', has_items);
      return _this.other_carts.attr('data-has-items', has_items);
    };

    FrameworkCart.prototype.updateTotals = function() {
      var _this;
      _this = this;
      return $.ajax({
        type: "GET",
        url: "/cart.js",
        dataType: "json"
      }).done(function(data, textStatus, jqXHR) {
        var count, total_price;
        total_price = theme.utils.formatMoney(data.total_price);
        count = data.item_count;
        _this.updateAllHasItems(count);
        _this.total_price.html(total_price);
        _this.total_item_count.text(count);
        return _this.updateTotalsComplete(count);
      }).fail(function(jqXHR, textStatus) {
        return console.log('Error - ajax updating totals', JSON.parse(jqXHR.responseText).description);
      });
    };

    FrameworkCart.prototype.renderDynamicCheckoutButtons = function() {
      var _this;
      _this = this;
      if (window.location.pathname === theme.urls.cart) {
        $('.off-canvas--right-sidebar .cart--additional-buttons').remove();
        if (theme.utils.mqs.current_window === 'small') {
          return $('[data-view="desktop"] .cart--additional-buttons').remove();
        }
      }
    };

    return FrameworkCart;

  })();

  theme.classes.FrameworkDisclosure = (function() {
    function FrameworkDisclosure(root) {
      var _this;
      this.root = root;
      this.optionChangeCallback = bind(this.optionChangeCallback, this);
      this.configureFormDisplay = bind(this.configureFormDisplay, this);
      this.toggleFormDisplay = bind(this.toggleFormDisplay, this);
      this.setOptionOnClick = bind(this.setOptionOnClick, this);
      this.hideFormWhenFocusOut = bind(this.hideFormWhenFocusOut, this);
      this.showFormWhenClick = bind(this.showFormWhenClick, this);
      this.resizeListener = bind(this.resizeListener, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.current_option = _this.root.find('.disclosure--current-option');
      _this.form = _this.root.find('.disclosure--form');
      _this.input = _this.root.find('[data-item="disclosure"]');
      _this.links = _this.root.find('.disclosure--option-link');
      _this.toggle = _this.root.find('.disclosure--toggle');
      _this.type = _this.root.attr('data-type');
      _this.toggle_and_form_gap = 8;
      _this.window_and_form_gap = 32;
      _this.form_space_needed = _this.form.height() + _this.toggle_and_form_gap + _this.window_and_form_gap;
      _this.load();
    }

    FrameworkDisclosure.prototype.load = function() {
      var _this;
      _this = this;
      _this.resizeListener();
      _this.showFormWhenClick();
      _this.hideFormWhenFocusOut();
      _this.setOptionOnClick();
      _this.configureFormDisplay();
      if (_this.type === 'url-redirect' || _this.type === 'localization') {
        return _this.optionChangeCallback();
      }
    };

    FrameworkDisclosure.prototype.resizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize', theme.utils.debounce(100, function() {
        return _this.configureFormDisplay();
      }));
    };

    FrameworkDisclosure.prototype.showFormWhenClick = function() {
      var _this;
      _this = this;
      return _this.toggle.on('click keydown', function(event) {
        var aria_expanded;
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        aria_expanded = $(this).attr('aria-expanded') === 'true';
        return _this.toggleFormDisplay(!aria_expanded);
      });
    };

    FrameworkDisclosure.prototype.hideFormWhenFocusOut = function() {
      var _this;
      _this = this;
      _this.toggle.on('focusout', function(event) {
        var form_lost_focus;
        form_lost_focus = _this.root.has(event.relatedTarget).length === 0;
        if (form_lost_focus) {
          return _this.toggleFormDisplay(false);
        }
      });
      _this.form.on('focusout', function(event) {
        var child_in_focus, is_visible;
        child_in_focus = $(this).has(event.relatedTarget).length > 0;
        is_visible = _this.toggle.attr('aria-expanded') === 'true';
        if (is_visible && !child_in_focus) {
          return _this.toggleFormDisplay(false);
        }
      });
      return _this.root.on('keydown', function(event) {
        if (event.key !== "Escape") {
          return;
        }
        _this.toggleFormDisplay(false);
        return _this.toggle.focus();
      });
    };

    FrameworkDisclosure.prototype.setOptionOnClick = function() {
      var _this;
      _this = this;
      return _this.links.on('click keydown', function(event) {
        var option_selected_name, option_selected_value;
        if (event.key === 'Enter') {
          _this.toggle.focus();
        } else if (event.type === 'keydown') {
          return;
        }
        option_selected_value = $(this).attr('data-value');
        option_selected_name = $(this).text();
        _this.toggleFormDisplay(false);
        _this.current_option.text(option_selected_name);
        _this.links.attr('aria-current', false);
        $(this).attr('aria-current', true);
        _this.input.val(option_selected_value);
        return _this.input.trigger('change');
      });
    };

    FrameworkDisclosure.prototype.toggleFormDisplay = function(open_form) {
      var _this;
      _this = this;
      return _this.toggle.attr('aria-expanded', open_form);
    };

    FrameworkDisclosure.prototype.configureFormDisplay = function() {
      var _this, clearance_height, close_to_bottom, close_to_top, distance_from_bottom, distance_from_top, height_of_canvas, height_of_toggle, max_form_height;
      _this = this;
      height_of_toggle = _this.toggle.outerHeight();
      clearance_height = height_of_toggle + _this.toggle_and_form_gap;
      height_of_canvas = _this.root.closest('[class^=off-canvas]').height();
      distance_from_top = _this.root.offset().top;
      distance_from_bottom = height_of_canvas - distance_from_top - height_of_toggle;
      close_to_bottom = (_this.form_space_needed > distance_from_bottom) && (distance_from_bottom < distance_from_top);
      close_to_top = (_this.form_space_needed > distance_from_top) && (distance_from_bottom > distance_from_top);
      max_form_height = $(window).height() - clearance_height - _this.window_and_form_gap;
      if (close_to_bottom) {
        max_form_height -= distance_from_bottom;
      } else if (close_to_top) {
        max_form_height -= distance_from_top;
      }
      _this.form.css('max-height', max_form_height + "px");
      if (close_to_bottom) {
        return _this.form.css('top', "-" + (_this.form.height() + _this.toggle_and_form_gap) + "px");
      } else {
        return _this.form.css('top', clearance_height + "px");
      }
    };

    FrameworkDisclosure.prototype.optionChangeCallback = function() {
      var _this;
      _this = this;
      return _this.input.on('change', function() {
        if (_this.type === 'url-redirect') {
          return window.location.href = $(this).val();
        } else if (_this.type === 'localization') {
          return $(this).closest('form').submit();
        }
      });
    };

    return FrameworkDisclosure;

  })();

  theme.classes.FrameworkFeaturedCollections = (function() {
    function FrameworkFeaturedCollections(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-collections--body');
      _this.items = _this.root.find('.featured-collections--item');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedCollections.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-collections--image');
    };

    FrameworkFeaturedCollections.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedCollections', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedCollections;

  })();

  theme.classes.FrameworkFeaturedGrid = (function() {
    function FrameworkFeaturedGrid(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.item_container = _this.root.find('.featured-grid--body');
      _this.items = _this.root.find('.featured-grid--item');
      _this.text_position = _this.root.data('text-position');
      _this.matchImageHeights();
      _this.resizeListeners();
    }

    FrameworkFeaturedGrid.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      _this.items.find('.featured-grid--item--image, .placeholder--root').css('height', 'auto');
      if (_this.text_position === 'center' && theme.utils.mqs.current_window !== 'small') {
        return;
      }
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.featured-grid--item--image');
    };

    FrameworkFeaturedGrid.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FeaturedGrid', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkFeaturedGrid;

  })();

  theme.classes.FrameworkFeaturedProduct = (function() {
    function FrameworkFeaturedProduct(root) {
      var _this;
      this.root = root;
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.thumbNavigation = bind(this.thumbNavigation, this);
      this.addProductComplete = bind(this.addProductComplete, this);
      this.addToCartListener = bind(this.addToCartListener, this);
      this.updateVariantImage = bind(this.updateVariantImage, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.updateVariantOnOptionChange = bind(this.updateVariantOnOptionChange, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.add_button = _this.root.find('.featured-product--add-to-cart');
      _this.cart_form = _this.root.find('.featured-product--cart-form > form');
      _this.compare_price = _this.root.find('.featured-product--compare-price');
      _this.main_images = _this.root.find('.featured-product--media');
      _this.onboarding = _this.root.data('onboarding');
      _this.option_inputs = _this.root.find('[data-item="disclosure"], [data-item="radio"]');
      _this.price = _this.root.find('.featured-product--actual-price');
      _this.price_wrapper = _this.root.find('.featured-product--price-wrapper');
      _this.smart_payment_buttons = _this.root.find('.featured-product--smart-payment-buttons');
      _this.thumbs = _this.root.find('.featured-product--thumb');
      _this.unavailable_variant = _this.root.find('.featured-product--unavailable-variant');
      _this.variants = JSON.parse(_this.root.find('.featured-product--json').text()).variants;
      _this.variant_listbox = _this.root.find('.featured-product--variant-select');
      _this.variant_sold_out = _this.root.find('.featured-product--sold-out--variant');
      _this.load();
    }

    FrameworkFeaturedProduct.prototype.load = function() {
      var _this;
      _this = this;
      _this.addToCartListener();
      _this.thumbNavigation();
      if (_this.onboarding === false) {
        if (_this.variants.length > 1) {
          return _this.updateVariantOnOptionChange();
        }
      }
    };

    FrameworkFeaturedProduct.prototype.updateVariantOnOptionChange = function() {
      var _this;
      _this = this;
      return _this.option_inputs.on('change', function() {
        var current_options, i, len, options, ref, variant, variant_title;
        current_options = _this.root.find('[data-item="disclosure"], [data-item="radio"]:checked');
        options = [];
        current_options.each(function() {
          return options.push($(this).val().trim());
        });
        variant_title = options.join(' / ');
        ref = _this.variants;
        for (i = 0, len = ref.length; i < len; i++) {
          variant = ref[i];
          if (variant.title === variant_title) {
            return _this.variantSelected(variant);
          }
        }
        return _this.variantSelected(false);
      });
    };

    FrameworkFeaturedProduct.prototype.variantSelected = function(variant) {
      var _this, product_sold_out, variant_compare_price, variant_price;
      _this = this;
      product_sold_out = false;
      if (_this.root.find('.featured-product--sold-out--product').length) {
        product_sold_out = true;
      }
      _this.variant_sold_out.hide();
      _this.unavailable_variant.hide();
      _this.add_button.hide();
      _this.price_wrapper.hide();
      _this.variant_listbox.find('option[selected]').removeAttr('selected');
      if (!variant) {
        _this.unavailable_variant.show();
        _this.smart_payment_buttons.hide();
        return false;
      } else if (variant && variant.available) {
        _this.price_wrapper.show();
        _this.add_button.show();
        _this.smart_payment_buttons.show();
        _this.variant_listbox.find("option[value='" + variant.id + "']").attr('selected', '');
      } else if (product_sold_out) {
        _this.variant_sold_out.hide();
        _this.add_button.hide();
        _this.smart_payment_buttons.hide();
      } else {
        _this.variant_sold_out.show();
        _this.smart_payment_buttons.hide();
      }
      variant_price = theme.utils.formatMoney(variant.price);
      _this.price.text(variant_price);
      if (variant.compare_at_price > variant.price) {
        variant_compare_price = theme.utils.formatMoney(variant.compare_at_price);
        _this.compare_price.text(variant_compare_price);
        _this.compare_price.show();
      } else {
        _this.compare_price.hide();
      }
      if (variant.featured_media) {
        return _this.updateVariantImage(variant.featured_media.id);
      }
    };

    FrameworkFeaturedProduct.prototype.updateVariantImage = function(variant_id) {
      var _this, variant_image;
      _this = this;
      _this.main_images.attr('data-active', 'false');
      variant_image = _this.main_images.filter("[data-id='" + variant_id + "']");
      return variant_image.attr('data-active', 'true');
    };

    FrameworkFeaturedProduct.prototype.addToCartListener = function() {
      var _this;
      _this = this;
      if (_this.cart_form.length > 0 && theme.settings.cart_type === 'drawer') {
        return _this.cart_form.on('submit', function() {
          _this.cart_form.find('.error').remove();
          _this.add_button.attr('data-loading', 'true');
          theme.partials.Cart.addItem($(this), function(success, error) {
            if (success) {
              return theme.partials.Cart.updateAllHtml(function() {
                return _this.addProductComplete();
              });
            } else {
              _this.cart_form.append("<div class='featured-product--error error'>" + error + "</div>");
              return _this.add_button.attr('data-loading', 'false');
            }
          });
          return false;
        });
      }
    };

    FrameworkFeaturedProduct.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.add_button.attr('data-loading', 'false');
      return $('[data-off-canvas--open="right-sidebar"]').first().trigger('click');
    };

    FrameworkFeaturedProduct.prototype.thumbNavigation = function() {
      var _this;
      _this = this;
      return _this.thumbs.on('keypress click', function(event) {
        var clicked_id, clicked_media, current_media;
        if (theme.utils.a11yClick(event)) {
          current_media = _this.root.find('.featured-product--media[data-active="true"] > *');
          current_media.trigger('pause-media');
          clicked_id = $(this).attr('data-id');
          clicked_media = _this.root.find(".featured-product--media[data-id='" + clicked_id + "'] > *:not(.a11y--focus-trigger)");
          _this.updateVariantImage(clicked_id);
          if (theme.utils.mqs.current_window !== 'small') {
            clicked_media.trigger('play-media');
          }
          if (clicked_media.parent().attr('data-media-type') !== 'image') {
            return clicked_media.focus();
          }
        }
      });
    };

    FrameworkFeaturedProduct.prototype.updateVariantImage = function(variant_id) {
      var _this, variant_image, variant_thumb;
      _this = this;
      _this.main_images.attr('data-active', 'false');
      variant_image = _this.main_images.filter("[data-id='" + variant_id + "']");
      variant_image.attr('data-active', 'true');
      _this.thumbs.attr('data-active', 'false');
      variant_thumb = _this.thumbs.filter("[data-id='" + variant_id + "']");
      return variant_thumb.attr('data-active', 'true');
    };

    return FrameworkFeaturedProduct;

  })();

  theme.classes.FrameworkFeaturedVideo = (function() {
    function FrameworkFeaturedVideo(root) {
      var _this;
      this.root = root;
      this.hideThumbnail = bind(this.hideThumbnail, this);
      this.playButtonListener = bind(this.playButtonListener, this);
      this.disablePlayerFocus = bind(this.disablePlayerFocus, this);
      this.vimeoEvents = bind(this.vimeoEvents, this);
      this.insertVimeoPlayer = bind(this.insertVimeoPlayer, this);
      this.youtubeEvents = bind(this.youtubeEvents, this);
      this.youtubeReady = bind(this.youtubeReady, this);
      this.insertYoutubePlayer = bind(this.insertYoutubePlayer, this);
      this.insertAPIScript = bind(this.insertAPIScript, this);
      this.playerInit = bind(this.playerInit, this);
      this.checkAPIScriptExists = bind(this.checkAPIScriptExists, this);
      _this = this;
      _this.play_buttons = _this.root.find('.feature-video--play svg, .feature-video--play-mobile svg');
      _this.section_id = _this.root.data('sectionId');
      _this.thumbnail = _this.root.data('thumbnail');
      _this.video_type = _this.root.data('videoType');
      _this.video_id = _this.root.data('videoId');
      _this.vimeoVars = {
        id: _this.video_id,
        autopause: 0,
        playsinline: 0,
        title: 0
      };
      _this.youtubeVars = {};
      if (_this.thumbnail) {
        _this.playButtonListener();
      } else {
        _this.checkAPIScriptExists();
      }
    }

    FrameworkFeaturedVideo.prototype.checkAPIScriptExists = function() {
      var _this;
      _this = this;
      if (_this.video_type === 'vimeo') {
        if (theme.utils.vimeoScriptAdded) {
          return _this.playerInit();
        } else {
          return _this.insertAPIScript('https://player.vimeo.com/api/player.js');
        }
      } else {
        if (theme.utils.youtubeScriptAdded) {
          return _this.playerInit();
        } else {
          return _this.insertAPIScript('https://www.youtube.com/iframe_api');
        }
      }
    };

    FrameworkFeaturedVideo.prototype.playerInit = function() {
      var _this;
      _this = this;
      if (_this.video_type === 'vimeo') {
        if (_this.thumbnail) {
          return _this.insertVimeoPlayer();
        } else {
          $(window).on('load', function() {
            return _this.insertVimeoPlayer();
          });
          return _this.root.on('theme:section:load', function() {
            return _this.insertVimeoPlayer();
          });
        }
      } else {
        if (_this.thumbnail) {
          return _this.insertYoutubePlayer();
        } else {
          $(window).on('load', function() {
            return _this.insertYoutubePlayer();
          });
          return _this.root.on('theme:section:load', function() {
            return _this.insertYoutubePlayer();
          });
        }
      }
    };

    FrameworkFeaturedVideo.prototype.insertAPIScript = function(api_url) {
      var _this, script_tag;
      _this = this;
      script_tag = document.createElement('script');
      script_tag.src = api_url;
      if (_this.video_type === 'vimeo') {
        theme.utils.vimeoScriptAdded = true;
        script_tag.onload = function() {
          return _this.insertVimeoPlayer();
        };
      } else {
        theme.utils.youtubeScriptAdded = true;
        $(window).on('theme.utils.youtubeAPIReady', function() {
          return _this.insertYoutubePlayer();
        });
      }
      return document.body.appendChild(script_tag);
    };

    FrameworkFeaturedVideo.prototype.insertYoutubePlayer = function() {
      var _this;
      _this = this;
      if (!_this.thumbnail) {
        _this.youtubeVars.enablejsapi = 1;
        _this.youtubeVars.origin = window.location.href;
        _this.youtubeVars.playsinline = 1;
        _this.youtubeVars.fs = 0;
        _this.youtubeVars.loop = 1;
        _this.youtubeVars.playlist = _this.video_id;
      }
      return _this.player = new YT.Player("player-" + _this.section_id, {
        videoId: _this.video_id,
        playerVars: _this.youtubeVars,
        events: {
          'onReady': _this.youtubeReady,
          'onStateChange': _this.youtubeEvents
        }
      });
    };

    FrameworkFeaturedVideo.prototype.youtubeReady = function() {
      var _this;
      _this = this;
      if (!_this.thumbnail) {
        _this.player.mute();
        _this.disablePlayerFocus();
      }
      return _this.player.playVideo();
    };

    FrameworkFeaturedVideo.prototype.youtubeEvents = function(event) {
      var YTP, _this, remains;
      _this = this;
      YTP = event.target;
      if (_this.thumbnail) {
        if (event.data === 0) {
          YTP.seekTo(0);
          return YTP.pauseVideo();
        }
      } else {
        if (event.data === 1) {
          remains = YTP.getDuration() - YTP.getCurrentTime();
          if (_this.rewindTO) {
            clearTimeout(_this.rewindTO);
          }
          return _this.rewindTO = setTimeout(function() {
            YTP.seekTo(0);
          }, (remains - 0.1) * 1000);
        }
      }
    };

    FrameworkFeaturedVideo.prototype.insertVimeoPlayer = function() {
      var _this;
      _this = this;
      if (!_this.thumbnail) {
        _this.vimeoVars.playsinline = 1;
        _this.vimeoVars.muted = 1;
        _this.vimeoVars.background = 1;
        _this.vimeoVars.loop = 1;
      }
      _this.player = new Vimeo.Player("player-" + _this.section_id, _this.vimeoVars);
      if (_this.thumbnail) {
        _this.vimeoEvents();
      } else {
        _this.disablePlayerFocus();
      }
      return _this.player.play();
    };

    FrameworkFeaturedVideo.prototype.vimeoEvents = function() {
      var _this;
      _this = this;
      _this.player.getDuration().then(function(duration) {
        return _this.player.addCuePoint(duration - 0.3, {});
      });
      return _this.player.on('cuepoint', function() {
        _this.player.setCurrentTime(0);
        return _this.player.pause();
      });
    };

    FrameworkFeaturedVideo.prototype.disablePlayerFocus = function() {
      var _this;
      _this = this;
      return $("#player-" + _this.section_id).attr('tabindex', '-1');
    };

    FrameworkFeaturedVideo.prototype.playButtonListener = function() {
      var _this;
      _this = this;
      _this.play_buttons.attr('tabindex', '0');
      return _this.play_buttons.on('click keydown', function(event) {
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        _this.checkAPIScriptExists();
        return _this.hideThumbnail();
      });
    };

    FrameworkFeaturedVideo.prototype.hideThumbnail = function() {
      var _this;
      _this = this;
      return setTimeout(function() {
        return _this.root.find('.feature-video--header, .feature-video--thumbnail, .feature-video--play-mobile').hide();
      }, 350);
    };

    return FrameworkFeaturedVideo;

  })();

  theme.classes.FrameworkFeedbackBar = (function() {
    function FrameworkFeedbackBar(root) {
      var _this;
      this.root = root;
      this.load = bind(this.load, this);
      _this = this;
      _this.messages = _this.root.find('.feedback-bar--message span');
      _this.load();
    }

    FrameworkFeedbackBar.prototype.load = function() {
      var _this, anchor_tag, message, message_elem;
      _this = this;
      _this.messages.hide();
      anchor_tag = window.location.hash.substr(1);
      message = anchor_tag.replace('feedback-bar--', '');
      message_elem = _this.messages.filter("[data-feedback-bar--message='" + message + "']");
      if (message_elem.length) {
        message_elem.show();
        setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'true');
        }, 200);
        return setTimeout(function() {
          return _this.root.attr('data-feedback-bar--open', 'false');
        }, 3000);
      }
    };

    return FrameworkFeedbackBar;

  })();

  theme.classes.FrameworkFooter = (function() {
    function FrameworkFooter(root) {
      var _this;
      this.root = root;
      this.stickyFooter = bind(this.stickyFooter, this);
      this.addListeners = bind(this.addListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    FrameworkFooter.prototype.load = function() {
      var _this;
      _this = this;
      _this.addListeners();
      return _this.stickyFooter();
    };

    FrameworkFooter.prototype.addListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize', function() {
        return _this.stickyFooter();
      });
    };

    FrameworkFooter.prototype.stickyFooter = function() {
      var _this, total_content_height;
      _this = this;
      total_content_height = $('.header--root').outerHeight() + $('.main-content').outerHeight() + _this.root.outerHeight();
      if ($(window).outerHeight() > total_content_height) {
        return $('.main-content').css({
          'min-height': $(window).outerHeight() - $('.header--root').outerHeight() - _this.root.outerHeight()
        });
      }
    };

    return FrameworkFooter;

  })();

  theme.classes.FrameworkLoadingAnimation = (function() {
    function FrameworkLoadingAnimation(root) {
      var _this;
      this.root = root;
      _this = this;
      if (_this.root.hasClass('tiny')) {
        _this.root.spin('tiny');
      } else {
        _this.root.spin('small');
      }
    }

    return FrameworkLoadingAnimation;

  })();

  theme.classes.FrameworkMap = (function() {
    function FrameworkMap(root) {
      var _this;
      this.root = root;
      this.buildStyles = bind(this.buildStyles, this);
      this.buildMap = bind(this.buildMap, this);
      this.geolocate = bind(this.geolocate, this);
      this.loadMapsApi = bind(this.loadMapsApi, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.api_status = null;
      _this.map_instance = null;
      _this.key = _this.root.data('api-key');
      _this.address = _this.root.data('address');
      _this.theme = _this.root.data('theme');
      _this.styles = null;
      _this.container = _this.root.find('.map--google-maps');
      _this.center = null;
      _this.load();
    }

    FrameworkMap.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.container.length > 0) {
        return _this.loadMapsApi();
      }
    };

    FrameworkMap.prototype.loadMapsApi = function() {
      var _this, other_map_loading_checker;
      _this = this;
      if (theme.utils.google_map_api_status === 'loading') {
        return other_map_loading_checker = setInterval(function() {
          if (theme.utils.google_map_api_status === 'loaded') {
            _this.geolocate();
            return clearInterval(other_map_loading_checker);
          }
        }, 100);
      } else if (typeof window.google === 'undefined') {
        theme.utils.google_map_api_status = 'loading';
        return $.getScript("https://maps.googleapis.com/maps/api/js?key=" + _this.key).then(function() {
          _this.geolocate();
          return theme.utils.google_map_api_status = 'loaded';
        });
      } else {
        return _this.geolocate();
      }
    };

    FrameworkMap.prototype.geolocate = function() {
      var _this, geocoder;
      _this = this;
      geocoder = new google.maps.Geocoder;
      return geocoder.geocode({
        address: _this.address
      }, function(results, status) {
        if (status === 'OK') {
          _this.center = results[0].geometry.location;
          _this.buildStyles();
          return _this.buildMap();
        } else {
          return console.log('couldn\'t convert address with geocoder');
        }
      });
    };

    FrameworkMap.prototype.buildMap = function() {
      var _this, center, map, mapOptions, marker;
      _this = this;
      mapOptions = {
        zoom: 15,
        center: _this.center,
        disableDefaultUI: true,
        zoomControl: true,
        scrollwheel: false,
        styles: _this.styles
      };
      map = new google.maps.Map(_this.container[0], mapOptions);
      center = map.getCenter();
      marker = new google.maps.Marker({
        map: map,
        position: map.getCenter()
      });
      return _this.map_instance = google.maps.event.addDomListener(window, 'resize', theme.utils.debounce(500, function() {
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
      }));
    };

    FrameworkMap.prototype.buildStyles = function() {
      var _this;
      _this = this;
      if (_this.theme === 'grayscale') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#f5f5f5"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#ffffff"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#dadada"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#e5e5e5"
              }
            ]
          }, {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#eeeeee"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#c9c9c9"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }
        ];
      } else if (_this.theme === 'dark') {
        return _this.styles = [
          {
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "elementType": "labels.icon",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#212121"
              }
            ]
          }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#9e9e9e"
              }
            ]
          }, {
            "featureType": "administrative.land_parcel",
            "stylers": [
              {
                "visibility": "off"
              }
            ]
          }, {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#bdbdbd"
              }
            ]
          }, {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#181818"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "poi.park",
            "elementType": "labels.text.stroke",
            "stylers": [
              {
                "color": "#1b1b1b"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
              {
                "color": "#2c2c2c"
              }
            ]
          }, {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#8a8a8a"
              }
            ]
          }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#373737"
              }
            ]
          }, {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#3c3c3c"
              }
            ]
          }, {
            "featureType": "road.highway.controlled_access",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#4e4e4e"
              }
            ]
          }, {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#616161"
              }
            ]
          }, {
            "featureType": "transit",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#757575"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
              {
                "color": "#000000"
              }
            ]
          }, {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
              {
                "color": "#3d3d3d"
              }
            ]
          }
        ];
      }
    };

    return FrameworkMap;

  })();

  theme.classes.FrameworkMediaQueries = (function() {
    function FrameworkMediaQueries() {
      this.screenSizeListener = bind(this.screenSizeListener, this);
      this.getScreenSize = bind(this.getScreenSize, this);
      this.medium_screen = 768;
      this.large_screen = 1024;
      this.current_window = null;
      this.getScreenSize();
      this.screenSizeListener();
    }

    FrameworkMediaQueries.prototype.getScreenSize = function() {
      var _this, previous_window;
      _this = this;
      previous_window = _this.current_window;
      if (window.matchMedia("only screen and (min-width: " + _this.large_screen + "px)").matches) {
        if (_this.current_window !== 'large') {
          _this.current_window = 'large';
        }
      } else if (window.matchMedia("only screen and (min-width: " + _this.medium_screen + "px)").matches) {
        if (_this.current_window !== 'medium') {
          _this.current_window = 'medium';
        }
      } else {
        if (_this.current_window !== 'small') {
          _this.current_window = 'small';
        }
      }
      if (_this.current_window !== previous_window) {
        return $(window).trigger('theme.utils.mqs.updated');
      }
    };

    FrameworkMediaQueries.prototype.screenSizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize', function() {
        return _this.getScreenSize();
      });
    };

    return FrameworkMediaQueries;

  })();

  theme.classes.FrameworkModal = (function() {
    function FrameworkModal(root) {
      var _this;
      this.root = root;
      _this = this;
      _this.fullscreen = _this.root.data('modal--fullscreen') ? true : false;
      if (_this.root.data('modal--custom-close')) {
        _this.custom_close_button = _this.root.data('modal--custom-close');
      } else {
        _this.custom_close_button = '';
      }
      _this.force_view = _this.root.data('force-view');
      _this.view = _this.root.data('modal--view');
      _this.nested_links = _this.root.find('.modal--root .modal--link');
      _this.nested_content = _this.root.find('.modal--root .modal--content');
      _this.links = _this.root.find('.modal--link').not(_this.nested_links);
      _this.content = _this.root.find('.modal--content').not(_this.nested_content);
      _this.window = $('.modal--window');
      _this.window_container = _this.window.find('.modal--container');
      _this.mask = _this.window.find('.modal--mask');
      _this.close_button = _this.window.find('.modal--close');
      _this.next_button = _this.window.find('.modal--next');
      _this.prev_button = _this.window.find('.modal--prev');
      _this.slider = null;
      _this.slides = null;
      _this.main_content_window = $('.off-canvas--main-content');
      _this.openListeners();
      _this.modal_state = 'closed';
      _this.nav_lock = false;
    }

    FrameworkModal.prototype.openListeners = function() {
      var _this;
      _this = this;
      return _this.links.on('keypress.FrameworkModal, click.FrameworkModal, quick-open', function(event) {
        var clicked_item;
        if (event.type === 'keypress' && theme.utils.a11yClick(event) === false) {
          return false;
        }
        clicked_item = $(this);
        _this.links.each(function(index) {
          if ($(this).is(clicked_item)) {
            if (event.type === 'quick-open') {
              return _this.open(index, true);
            } else {
              return _this.open(index);
            }
          }
        });
        return false;
      });
    };

    FrameworkModal.prototype.open = function(index, quick_open) {
      var _this, scrolled_position;
      if (quick_open == null) {
        quick_open = false;
      }
      _this = this;
      if (_this.modal_state === 'closed') {
        _this.modal_state = 'opened';
        $('html').addClass('modal-open');
        _this.window.attr('data-modal--fullscreen', _this.fullscreen);
        _this.window.attr('data-modal--custom-close', _this.custom_close_button);
        _this.window.attr('data-modal--view', _this.view);
        _this.closeListeners();
        _this.positionListeners();
        scrolled_position = $(window).scrollTop();
        _this.main_content_window.css({
          position: 'fixed',
          top: -scrolled_position
        });
        _this.moveContentToWindow();
        if (_this.slides.length > 1) {
          _this.next_button.show();
          _this.prev_button.show();
          _this.prevListeners();
          _this.nextListeners();
        }
        _this.window.show();
        _this.window_container.show();
        _this.renderVideo(_this.slides.eq(index));
        if (quick_open) {
          _this.slides.eq(index).addClass('active');
          return _this.position();
        } else {
          _this.mask.fadeIn();
          return _this.loadModal(_this.slides.eq(index), function() {
            return setTimeout(function() {
              return _this.window_container.find('input[type="text"]').focus();
            }, 0);
          });
        }
      }
    };

    FrameworkModal.prototype.moveContentToWindow = function(index) {
      var _this, content;
      _this = this;
      content = _this.root.find('.modal--content').not(_this.nested_content);
      _this.window_container.append(content);
      return _this.slides = _this.window_container.find('.modal--content');
    };

    FrameworkModal.prototype.detectImageSlide = function(slide) {
      var _this;
      return _this = this;
    };

    FrameworkModal.prototype.renderVideo = function(slide) {
      var _this, id, iframe, src_url, type, video;
      _this = this;
      video = slide.find('.responsive-video').first();
      src_url = video.data('video');
      type = _this.extractVideoType(src_url);
      id = _this.extractVideoId(src_url, type);
      iframe = _this.createIframe(type, id);
      if (type === 'vimeo') {
        video.addClass('vimeo');
      }
      if (type === 'kickstarter') {
        video.addClass('kickstarter');
      }
      return video.append(iframe);
    };

    FrameworkModal.prototype.extractVideoType = function(src_url) {
      var _this, matches, re;
      _this = this;
      re = /\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9_\-]+)/i;
      matches = re.exec(src_url);
      if (matches) {
        return 'youtube';
      }
      re = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
      matches = re.exec(src_url);
      if (matches) {
        return 'vimeo';
      }
      re = /^.*(kickstarter)\.com/g;
      matches = re.exec(src_url);
      if (matches) {
        return 'kickstarter';
      }
      return false;
    };

    FrameworkModal.prototype.extractVideoId = function(src_url, type) {
      var _this, match, regExp;
      _this = this;
      if (type === 'youtube') {
        regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        match = src_url.match(regExp);
        if (match && match[2].length === 11) {
          return match[2];
        }
      } else if (type === "vimeo") {
        regExp = /^.*(vimeo)\.com\/(?:watch\?v=)?(.*?)(?:\z|$|&)/;
        match = src_url.match(regExp);
        if (match) {
          return match[2];
        }
      } else if (type === "kickstarter") {
        regExp = /(?:kickstarter\.com\/projects\/)(.*)(|\?)/;
        match = src_url.match(regExp);
        if (match) {
          return match[1];
        }
      }
    };

    FrameworkModal.prototype.createIframe = function(type, id) {
      var _this;
      _this = this;
      if (type === "youtube") {
        return "<iframe src='//www.youtube.com/embed/" + id + "?autoplay=1' frameborder='0' allowfullwidth></iframe>";
      } else if (type === "vimeo") {
        return "<iframe src='//player.vimeo.com/video/" + id + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1?' frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>";
      } else if (type === "kickstarter") {
        return "<iframe src='//www.kickstarter.com/projects/" + id + "/widget/video.html' frameborder='0' webkitallowfullwidth mozallowfullwidth allowfullwidth></iframe>";
      }
    };

    FrameworkModal.prototype.removeVideos = function() {
      var _this;
      _this = this;
      return _this.slides.find('.responsive-video').each(function() {
        if ($(this).data('video')) {
          return $(this).find('iframe').remove();
        }
      });
    };

    FrameworkModal.prototype.loadModal = function(modal, callback) {
      var _this;
      _this = this;
      modal.addClass('active');
      _this.position();
      if (callback) {
        callback();
      }
      return _this.nav_lock = false;
    };

    FrameworkModal.prototype.position = function() {
      var _this, active_modal, entire_modal_height, modal_height, modal_width;
      _this = this;
      if (_this.window_container != null) {
        active_modal = _this.content.filter('.active');
        _this.window_container.attr('style', '');
        _this.positionVideoColumns(active_modal);
        _this.detectImageSlide(active_modal);
        _this.window.removeClass('fixed');
        modal_height = active_modal.outerHeight();
        modal_width = active_modal.outerWidth();
        entire_modal_height = modal_height + parseInt(_this.window.css('padding-top')) + parseInt(_this.window.css('padding-bottom'));
        if (_this.fullscreen) {
          return;
        }
        if (active_modal.hasClass('type--image')) {
          entire_modal_height = modal_height;
        }
        if ($(window).height() >= entire_modal_height && _this.force_view !== 'absolute') {
          return _this.window.addClass('fixed');
        } else {
          $("html, body").animate({
            scrollTop: 0
          }, '0');
          $('body,html').on('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal', function(event) {
            if (event.which > 0 || event.type === "mousewheel" || event.type === "touchmove") {
              return $("html,body").stop();
            }
          });
          return _this.window.removeClass('fixed');
        }
      }
    };

    FrameworkModal.prototype.positionVideoColumns = function(modal) {
      var _this, column_one, column_two, height_one, height_two;
      _this = this;
      if (modal.find('.responsive-video').length > 0) {
        column_one = modal.find('.fw--blocks > div').eq(0);
        column_two = modal.find('.fw--blocks > div').eq(1);
        column_one.css({
          width: ''
        });
        column_two.css({
          width: ''
        });
        height_one = column_one.outerHeight();
        height_two = column_two.outerHeight();
        if (height_one < height_two) {
          column_one.css({
            width: '100%'
          });
          return column_two.css({
            width: '100%'
          });
        }
      }
    };

    FrameworkModal.prototype.positionListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.FrameworkModal', function() {
        return _this.position();
      });
    };

    FrameworkModal.prototype.nextListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(event) {
        if (event.keyCode === 39) {
          return _this.next();
        }
      });
      return _this.next_button.on('click.FrameworkModal', function() {
        return _this.next();
      });
    };

    FrameworkModal.prototype.next = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if ((index + 1) === _this.slides.length) {
          active_slide = _this.slides.eq(0);
        } else {
          active_slide = _this.slides.eq(index + 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.prevListeners = function() {
      var _this;
      _this = this;
      $(document).on('keydown.FrameworkModal', function(event) {
        if (event.keyCode === 37) {
          return _this.prev();
        }
      });
      return _this.prev_button.on('click.FrameworkModal', function() {
        return _this.prev();
      });
    };

    FrameworkModal.prototype.prev = function() {
      var _this, active_slide, index;
      _this = this;
      if (!_this.nav_lock) {
        _this.nav_lock = true;
        index = _this.slides.filter('.active').index();
        _this.slides.removeClass('active');
        _this.removeVideos();
        if (index === 0) {
          active_slide = _this.slides.eq(_this.slides.length - 1);
        } else {
          active_slide = _this.slides.eq(index - 1);
        }
        _this.renderVideo(active_slide);
        return _this.loadModal(active_slide);
      }
    };

    FrameworkModal.prototype.closeListeners = function() {
      var _this;
      _this = this;
      _this.root.on('quick-close', function() {
        return _this.close(true);
      });
      $(document).on('keydown.FrameworkModal', function(event) {
        if (event.keyCode === 27) {
          return _this.close();
        }
      });
      _this.mask.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.window_container.on('click.FrameworkModal', function() {
        return _this.close();
      });
      _this.content.on('click.FrameworkModal', function(event) {
        return event.stopPropagation();
      });
      return _this.close_button.on('click.FrameworkModal', function() {
        return _this.close();
      });
    };

    FrameworkModal.prototype.close = function(quick_close) {
      var _this, scrolled_position;
      if (quick_close == null) {
        quick_close = false;
      }
      _this = this;
      scrolled_position = parseInt(_this.main_content_window.css('top')) * -1;
      _this.root.trigger('modalClosed');
      _this.main_content_window.css({
        top: '0',
        position: 'relative'
      });
      $(window).scrollTop(scrolled_position);
      _this.putBackContent();
      _this.next_button.hide();
      _this.prev_button.hide();
      _this.window.hide();
      if (quick_close) {
        _this.mask.hide();
        this.window_container.empty();
        _this.modal_state = 'closed';
      } else {
        _this.mask.fadeOut(function() {
          _this.window_container.empty();
          return _this.modal_state = 'closed';
        });
      }
      $('html').removeClass('modal-open');
      _this.removeListeners();
      return $(window).trigger('FrameworkModal.afterClose');
    };

    FrameworkModal.prototype.putBackContent = function() {
      var _this;
      _this = this;
      _this.removeVideos();
      return _this.slides.removeClass('active').appendTo(_this.root);
    };

    FrameworkModal.prototype.removeListeners = function() {
      var _this;
      _this = this;
      $(document).off('keydown.FrameworkModal');
      $(window).off('resize.FrameworkModal');
      $('body,html').off('DOMMouseScroll.FrameworkModal mousewheel.FrameworkModal touchmove.FrameworkModal');
      _this.next_button.off('click.FrameworkModal');
      _this.prev_button.off('click.FrameworkModal');
      _this.close_button.off('click.FrameworkModal');
      _this.mask.off('click.FrameworkModal');
      return _this.window_container.off('click.FrameworkModal');
    };

    return FrameworkModal;

  })();

  theme.classes.FrameworkOffCanvas = (function() {
    function FrameworkOffCanvas(root) {
      var _this;
      this.root = root;
      this.touchListener = bind(this.touchListener, this);
      this.closeRight = bind(this.closeRight, this);
      this.closeLeft = bind(this.closeLeft, this);
      this.fadeInOverlay = bind(this.fadeInOverlay, this);
      this.openRight = bind(this.openRight, this);
      this.openLeft = bind(this.openLeft, this);
      this.toggle = bind(this.toggle, this);
      this.closeWithEscKey = bind(this.closeWithEscKey, this);
      this.closeWhenFocusOut = bind(this.closeWhenFocusOut, this);
      this.disableFocusItems = bind(this.disableFocusItems, this);
      this.toggleListeners = bind(this.toggleListeners, this);
      this.viewPortHeightListener = bind(this.viewPortHeightListener, this);
      this.setViewPortHeight = bind(this.setViewPortHeight, this);
      this.setState = bind(this.setState, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.viewport = $('.off-canvas--viewport');
      _this.left_sidebar = $('.off-canvas--left-sidebar');
      _this.right_sidebar = $('.off-canvas--right-sidebar');
      _this.focus_triggers = $('.off-canvas--focus-trigger');
      _this.main_content = $('.off-canvas--main-content');
      _this.overlay = $('.off-canvas--overlay');
      _this.state = 'closed';
      _this.load();
    }

    FrameworkOffCanvas.prototype.load = function() {
      var _this;
      _this = this;
      _this.close = $('.off-canvas--close');
      _this.triggers = $('.off-canvas--open');
      _this.setViewPortHeight();
      _this.viewPortHeightListener();
      _this.toggleListeners();
      _this.touchListener();
      _this.disableFocusItems();
      _this.closeWhenFocusOut();
      return _this.closeWithEscKey();
    };

    FrameworkOffCanvas.prototype.unload = function() {
      var _this;
      _this = this;
      _this.triggers.off('click');
      _this.overlay.add(_this.close).off('click');
      $(document).off('touchstart.OffCanvas');
      return $(document).off('touchend.OffCanvas');
    };

    FrameworkOffCanvas.prototype.setState = function(state) {
      var _this;
      _this = this;
      _this.state = state;
      return _this.root.attr('data-off-canvas--state', state);
    };

    FrameworkOffCanvas.prototype.setViewPortHeight = function() {
      var _this;
      _this = this;
      return _this.viewport.css({
        'min-height': $(window).height()
      });
    };

    FrameworkOffCanvas.prototype.viewPortHeightListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize', function() {
        return _this.setViewPortHeight();
      });
    };

    FrameworkOffCanvas.prototype.toggleListeners = function() {
      var _this;
      _this = this;
      _this.triggers.on('click keydown', function(event) {
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        if ($(this).data('off-canvas--open') === 'left-sidebar') {
          _this.toggle('left-sidebar');
        } else if ($(this).data('off-canvas--open') === 'right-sidebar') {
          _this.toggle('right-sidebar');
        }
        return false;
      });
      return _this.overlay.add(_this.close).on('click', function() {
        if (_this.state === 'left-open') {
          return _this.toggle('left-sidebar');
        } else if (_this.state === 'right-open') {
          return _this.toggle('right-sidebar');
        }
      });
    };

    FrameworkOffCanvas.prototype.disableFocusItems = function() {
      var _this;
      _this = this;
      return $(window).on('load', function() {
        _this.left_sidebar.find(':focusable').attr('tabindex', '-1');
        _this.right_sidebar.find(':focusable').attr('tabindex', '-1');
        return _this.right_sidebar.find('.cart--additional-buttons').css('visibility', 'hidden');
      });
    };

    FrameworkOffCanvas.prototype.closeWhenFocusOut = function() {
      var _this;
      _this = this;
      return _this.focus_triggers.on('focus', function() {
        if (_this.state === 'left-open') {
          return _this.closeLeft();
        } else if (_this.state === 'right-open') {
          return _this.closeRight();
        }
      });
    };

    FrameworkOffCanvas.prototype.closeWithEscKey = function() {
      var _this;
      _this = this;
      return $(window).on('keydown', function(event) {
        if (event.key !== 'Escape') {
          return;
        }
        if (_this.state === 'left-open') {
          return _this.closeLeft();
        } else if (_this.state === 'right-open') {
          return _this.closeRight();
        }
      });
    };

    FrameworkOffCanvas.prototype.toggle = function(element) {
      var _this;
      _this = this;
      if (element === 'left-sidebar' && _this.state === 'closed') {
        return _this.openLeft();
      } else if (element === 'left-sidebar' && _this.state === 'left-open') {
        return _this.closeLeft();
      } else if (element === 'right-sidebar' && _this.state === 'closed') {
        return _this.openRight();
      } else if (element === 'right-sidebar' && _this.state === 'right-open') {
        return _this.closeRight();
      }
    };

    FrameworkOffCanvas.prototype.openLeft = function() {
      var _this;
      _this = this;
      _this.setState('left-open');
      _this.left_sidebar.find('[tabindex="-1"]').not('[data-item="hidden-text"] a').attr('tabindex', '0');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.left_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          _this.left_sidebar.css('position', 'relative');
          return _this.left_sidebar.find(':focusable:eq(1)').focus();
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.openRight = function() {
      var _this;
      _this = this;
      _this.setState('right-open');
      _this.right_sidebar.find('[tabindex="-1"]:not(input)').attr('tabindex', '0');
      _this.right_sidebar.find('.cart--additional-buttons').css('visibility', 'unset');
      _this.main_content.css({
        position: 'fixed',
        top: -($(window).scrollTop())
      });
      _this.right_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          _this.right_sidebar.css('position', 'relative');
          return _this.right_sidebar.find(':focusable:eq(1)').focus();
        }
      });
      return _this.fadeInOverlay();
    };

    FrameworkOffCanvas.prototype.fadeInOverlay = function() {
      var _this;
      _this = this;
      _this.overlay.show();
      return _this.overlay.velocity({
        opacity: '0.3'
      });
    };

    FrameworkOffCanvas.prototype.closeLeft = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'left-open') {
        return false;
      }
      _this.setState('closed');
      _this.left_sidebar.find('[tabindex="0"]').attr('tabindex', '-1');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.left_sidebar.velocity({
        translateX: ['-100%', 0]
      }, {
        complete: function() {
          _this.left_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      _this.overlay.velocity('fadeOut');
      return $("[data-off-canvas--open='left-sidebar']").focus();
    };

    FrameworkOffCanvas.prototype.closeRight = function() {
      var _this, scrolled_position;
      _this = this;
      if (_this.state !== 'right-open') {
        return false;
      }
      _this.setState('closed');
      _this.right_sidebar.find(':focusable').attr('tabindex', '-1');
      _this.right_sidebar.find('.cart--additional-buttons').css('visibility', 'hidden');
      scrolled_position = parseInt(_this.main_content.css('top')) * -1;
      _this.right_sidebar.velocity({
        translateX: [0, '-100%']
      }, {
        complete: function() {
          _this.right_sidebar.css({
            position: 'absolute'
          });
          _this.main_content.css({
            position: 'relative',
            top: 'initial'
          });
          return $(window).scrollTop(scrolled_position);
        }
      });
      return _this.overlay.velocity('fadeOut');
    };

    FrameworkOffCanvas.prototype.touchListener = function() {
      var _this, position;
      _this = this;
      if (!Modernizr.touchevents) {
        return false;
      }
      position = {
        start: {},
        end: {}
      };
      $(document).on('touchstart.OffCanvas', function(event) {
        position.start.x = event.originalEvent.touches[0].clientX;
        position.start.y = event.originalEvent.touches[0].clientY;
      });
      return $(document).on('touchend.OffCanvas', function(event) {
        position.end.x = event.originalEvent.changedTouches[0].clientX;
        position.end.y = event.originalEvent.changedTouches[0].clientY;
        if (Math.abs(position.start.y - position.end.y) > 30) {
          return false;
        }
        if (position.start.x > position.end.x + 5) {
          return _this.closeLeft();
        } else if (position.start.x < position.end.x - 5) {
          return _this.closeRight();
        }
      });
    };

    return FrameworkOffCanvas;

  })();

  theme.classes.FrameworkPasswordPage = (function() {
    function FrameworkPasswordPage(root) {
      var _this;
      this.root = root;
      this.disableSidebars = bind(this.disableSidebars, this);
      this.cancelLoginListener = bind(this.cancelLoginListener, this);
      this.loginFormListener = bind(this.loginFormListener, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.login_form = _this.root.find('.password--login-form');
      _this.login_cancel = _this.root.find('.password--cancel');
      _this.login_link = _this.root.find('.password--login-link');
      _this.signup_form = _this.root.find('.password--main > *');
      _this.load();
    }

    FrameworkPasswordPage.prototype.load = function() {
      var _this;
      _this = this;
      _this.loginFormListener();
      _this.cancelLoginListener();
      return _this.disableSidebars();
    };

    FrameworkPasswordPage.prototype.loginFormListener = function() {
      var _this;
      _this = this;
      return _this.login_link.on('click keydown', function(event) {
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        $(this).css('visibility', 'hidden');
        _this.signup_form.hide();
        _this.login_form.css('visibility', 'visible');
        return _this.login_form.find('input[type="password"]').focus();
      });
    };

    FrameworkPasswordPage.prototype.cancelLoginListener = function() {
      var _this;
      _this = this;
      return _this.login_cancel.on('click keydown', function(event) {
        if (event.type === 'keydown' && event.key !== 'Enter') {
          return;
        }
        _this.signup_form.fadeIn();
        _this.login_form.css('visibility', 'hidden');
        return _this.login_link.css('visibility', 'visible');
      });
    };

    FrameworkPasswordPage.prototype.disableSidebars = function() {
      var _this;
      _this = this;
      return $('.off-canvas--left-sidebar, .off-canvas--right-sidebar').hide();
    };

    return FrameworkPasswordPage;

  })();

  theme.classes.FrameworkProductModel = (function() {
    function FrameworkProductModel(root) {
      var _this;
      this.root = root;
      this.loadModel = bind(this.loadModel, this);
      this.loadAssets = bind(this.loadAssets, this);
      this.eventListeners = bind(this.eventListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.view = _this.root.data('view');
      _this.key = _this.root.closest('[data-id]').data('id');
      _this.cdn = 'https://cdn.shopify.com/shopifycloud/model-viewer-ui/assets/v1.0/model-viewer-ui';
      _this.load();
    }

    FrameworkProductModel.prototype.load = function() {
      var _this;
      _this = this;
      _this.eventListeners();
      if (theme.utils.modelScriptAdded) {
        return;
      }
      theme.utils.modelScriptAdded = true;
      return _this.loadAssets();
    };

    FrameworkProductModel.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.root.on('model-ready', function() {
        return _this.loadModel();
      });
      _this.root.on('theme:section:load', function() {
        return _this.loadModel();
      });
      _this.root.on('pause-media', function() {
        if (_this.model) {
          return _this.model.pause();
        }
      });
      _this.root.on('play-media', function() {
        if (_this.model) {
          return _this.model.play();
        }
      });
      return $(window).on('resize.ProductModel', theme.utils.debounce(250, function() {
        $('.product-model--root').trigger('pause-media');
        return $('.product-model--root').trigger('model-ready');
      }));
    };

    FrameworkProductModel.prototype.loadAssets = function() {
      var _this;
      _this = this;
      theme.utils.insertStylesheet(_this.cdn + ".css");
      return theme.utils.insertScript(_this.cdn + ".en.js", function() {
        return $('.product-model--root').trigger('model-ready');
      });
    };

    FrameworkProductModel.prototype.loadModel = function() {
      var _this;
      _this = this;
      if (_this.model) {
        return;
      }
      if (theme.utils.mqs.current_window === 'small' && _this.view === 'desktop') {
        return;
      } else if (theme.utils.mqs.current_window !== 'small' && _this.view === 'mobile') {
        return;
      }
      return _this.model = new Shopify.ModelViewerUI(_this.root.find('model-viewer'));
    };

    return FrameworkProductModel;

  })();

  theme.classes.FrameworkProductRecommendations = (function() {
    function FrameworkProductRecommendations(root) {
      var _this;
      this.root = root;
      this.loadHoverImages = bind(this.loadHoverImages, this);
      this.checkIfEmpty = bind(this.checkIfEmpty, this);
      this.loadProducts = bind(this.loadProducts, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.loadProducts();
      _this.resizeListeners();
    }

    FrameworkProductRecommendations.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      _this.item_container = _this.root.find('.product-recommendations--body');
      _this.items = _this.root.find('.product--root');
      return theme.utils.matchImageHeights(_this.item_container, _this.items, '.product--image-wrapper');
    };

    FrameworkProductRecommendations.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    FrameworkProductRecommendations.prototype.loadProducts = function() {
      var _this, maxProducts, productId, productRecommendations, request, requestUrl;
      _this = this;
      productRecommendations = document.getElementsByClassName("product-recommendations--root")[0];
      productId = productRecommendations.dataset.productId;
      maxProducts = productRecommendations.dataset.maxProducts;
      requestUrl = theme.urls.product_recommendations + "?section_id=framework--product-recommendations&limit=" + maxProducts + "&product_id=" + productId;
      request = new XMLHttpRequest();
      request.open("GET", requestUrl);
      request.onload = function() {
        var container;
        if (request.status >= 200 && request.status < 300) {
          container = document.createElement("div");
          container.innerHTML = request.response;
          productRecommendations.innerHTML = container.querySelector(".product-recommendations--root").innerHTML;
          _this.matchImageHeights();
          _this.checkIfEmpty();
          return _this.loadHoverImages();
        }
      };
      return request.send();
    };

    FrameworkProductRecommendations.prototype.checkIfEmpty = function() {
      var _this, empty;
      _this = this;
      empty = $('.product--root').length > 0 ? false : true;
      return $('.product-recommendations--root').attr('data-empty', empty);
    };

    FrameworkProductRecommendations.prototype.loadHoverImages = function() {
      var _this;
      _this = this;
      return $('.product--root[data-hover-image="true"]').each(function() {
        var product;
        product = $(this);
        return theme.utils.imagesLoaded(product, function() {
          return product.attr('data-hover-image', 'loaded');
        });
      });
    };

    return FrameworkProductRecommendations;

  })();

  theme.classes.FrameworkProductVideo = (function() {
    function FrameworkProductVideo(root) {
      var _this;
      this.root = root;
      this.skipVideo = bind(this.skipVideo, this);
      this.loadYoutubeVideo = bind(this.loadYoutubeVideo, this);
      this.loadPlyrVideo = bind(this.loadPlyrVideo, this);
      this.loadYoutubeAsset = bind(this.loadYoutubeAsset, this);
      this.loadPlyrAssets = bind(this.loadPlyrAssets, this);
      this.resizeListener = bind(this.resizeListener, this);
      this.youtubeListeners = bind(this.youtubeListeners, this);
      this.plyrListeners = bind(this.plyrListeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.view = _this.root.data('view');
      _this.type = _this.root.data('type');
      _this.loop_enabled = _this.root.data('loop-enabled');
      _this.load();
    }

    FrameworkProductVideo.prototype.load = function() {
      var _this;
      _this = this;
      _this.resizeListener();
      if (_this.type === 'youtube') {
        _this.id = _this.root.find('.product-video').attr('id');
        _this.video_id = _this.root.data('video-id');
        _this.youtubeListeners();
        return _this.loadYoutubeAsset();
      } else {
        _this.plyr_cdn = 'https://cdn.shopify.com/shopifycloud/shopify-plyr/v1.0/shopify-plyr';
        _this.plyrListeners();
        return _this.loadPlyrAssets();
      }
    };

    FrameworkProductVideo.prototype.plyrListeners = function() {
      var _this;
      _this = this;
      _this.root.on('plyr-video-ready', function() {
        return _this.loadPlyrVideo();
      });
      _this.root.on('theme:section:load', function() {
        return _this.loadPlyrVideo();
      });
      _this.root.on('pause-media', function() {
        if (_this.video) {
          return _this.video.pause();
        }
      });
      return _this.root.on('play-media', function() {
        if (_this.video) {
          return _this.video.play();
        }
      });
    };

    FrameworkProductVideo.prototype.youtubeListeners = function() {
      var _this;
      _this = this;
      $(window).on('theme.utils.youtubeAPIReady', function() {
        return _this.loadYoutubeVideo();
      });
      return _this.root.on('theme:section:load', function() {
        return _this.loadYoutubeVideo();
      });
    };

    FrameworkProductVideo.prototype.resizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('resize.ProductVideo', theme.utils.debounce(250, function() {
        $('.product-video--root').trigger('pause-media');
        $('.product-video--root').trigger('plyr-video-ready');
        return $('.product-video--root').trigger('theme.utils.youtubeAPIReady');
      }));
    };

    FrameworkProductVideo.prototype.loadPlyrAssets = function() {
      var _this;
      _this = this;
      if (theme.utils.plyrScriptAdded) {
        return;
      }
      theme.utils.plyrScriptAdded = true;
      theme.utils.insertStylesheet(_this.plyr_cdn + ".css");
      return theme.utils.insertScript(_this.plyr_cdn + ".en.js", function() {
        return $('.product-video--root').trigger('plyr-video-ready');
      });
    };

    FrameworkProductVideo.prototype.loadYoutubeAsset = function() {
      var _this;
      _this = this;
      if (theme.utils.youtubeScriptAdded) {
        return;
      }
      theme.utils.youtubeScriptAdded = true;
      return theme.utils.insertScript('https://www.youtube.com/iframe_api');
    };

    FrameworkProductVideo.prototype.loadPlyrVideo = function() {
      var _this;
      _this = this;
      if (_this.video) {
        return;
      }
      if (_this.skipVideo()) {
        return;
      }
      return _this.video = new Shopify.Plyr(_this.root.find('video'), {
        iconUrl: _this.plyr_cdn + ".svg",
        loop: {
          active: _this.loop_enabled
        }
      });
    };

    FrameworkProductVideo.prototype.loadYoutubeVideo = function() {
      var _this;
      _this = this;
      if (_this.video) {
        return;
      }
      if (_this.skipVideo()) {
        return;
      }
      return _this.video = new YT.Player(_this.id, {
        videoId: _this.video_id,
        events: {
          onReady: function(event) {
            _this.root.on('pause-media', function() {
              return event.target.pauseVideo();
            });
            return _this.root.on('play-media', function() {
              return event.target.playVideo();
            });
          },
          onStateChange: function(event) {
            if (event.data === 0 && _this.loop_enabled) {
              event.target.seekTo(0);
            }
            if (event.data === 1) {
              return $('.product-media--featured > *').not(_this.root).trigger('pause-media');
            }
          }
        }
      });
    };

    FrameworkProductVideo.prototype.skipVideo = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small' && _this.view === 'desktop') {
        return true;
      } else if (theme.utils.mqs.current_window !== 'small' && _this.view === 'mobile') {
        return true;
      } else {
        return false;
      }
    };

    return FrameworkProductVideo;

  })();

  theme.classes.FrameworkProduct = (function() {
    function FrameworkProduct(root) {
      var _this;
      this.root = root;
      this.modalCloseListener = bind(this.modalCloseListener, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.getActiveImageId = bind(this.getActiveImageId, this);
      this.imageZoom = bind(this.imageZoom, this);
      this.updateVariantMedia = bind(this.updateVariantMedia, this);
      this.thumbNavigation = bind(this.thumbNavigation, this);
      this.addProductComplete = bind(this.addProductComplete, this);
      this.addToCartListener = bind(this.addToCartListener, this);
      this.updatePrices = bind(this.updatePrices, this);
      this.enableStockForm = bind(this.enableStockForm, this);
      this.enableCartButtons = bind(this.enableCartButtons, this);
      this.variantSelected = bind(this.variantSelected, this);
      this.updateHistoryState = bind(this.updateHistoryState, this);
      this.optionChangeListener = bind(this.optionChangeListener, this);
      this.updateLowInStock = bind(this.updateLowInStock, this);
      this.sizeChart = bind(this.sizeChart, this);
      this.getProductJson = bind(this.getProductJson, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.form_root = _this.root.find('.product-form--root');
      _this.handle = _this.form_root.attr('data-handle');
      _this.thumbs_root = _this.root.find('.product-media--root[data-view="thumbs"]');
      _this.featured_root = _this.root.find('.product-media--root[data-view="featured"]').not('[data-media-size="mobile"]');
      _this.magnify = _this.featured_root.data('magnify');
      _this.main_media = _this.featured_root.find('.product-media--featured');
      _this.media_container = _this.featured_root.closest('.product-media--wrapper');
      _this.thumbs = _this.thumbs_root.find('.product-media--thumb');
      _this.zoom_enabled = _this.featured_root.data('zoom-enabled');
      _this.zoom_images = _this.featured_root.find('.product-media--zoom-image');
      _this.enable_callback = _this.form_root.data('enable-callback');
      _this.add_to_cart_button = _this.form_root.find('.product-form--add-to-cart');
      _this.button_container = _this.form_root.find('.product-form--button-container');
      _this.button_text = _this.form_root.find('.product-form--text').text();
      _this.button_text_container = _this.form_root.find('.product-form--text');
      _this.compare_price = _this.form_root.find('.product-form--compare-price');
      _this.form = _this.form_root.find('.product-form--container');
      _this.low_stock_container = _this.form_root.find(".product-form--low-stock");
      _this.low_stock_threshold = _this.form_root.data('low-stock-amount');
      _this.price = _this.form_root.find('.product-form--price');
      _this.show_low_in_stock = _this.low_stock_threshold === void 0 ? false : true;
      _this.reference_unit = _this.form_root.find('.product-form--reference-unit');
      _this.reference_value = _this.form_root.find('.product-form--reference-value');
      _this.size_chart_enabled = _this.form_root.data('size-chart-enabled');
      _this.size_chart_option = _this.form_root.attr('data-size-chart-option');
      _this.smart_payment_buttons = _this.form_root.find('.product-form--smart-payment-buttons');
      _this.sold_out = _this.form_root.data('sold-out');
      _this.unavailable_container = _this.form_root.find('.product-form--unavailable');
      _this.unavailable_button = _this.unavailable_container.find('[type="submit"]');
      _this.unit_price_container = _this.form_root.find('.product-form--unit-price-container');
      _this.unit_price = _this.form_root.find('.product-form--unit-price');
      _this.variant_container = _this.form_root.find('.product-form--variants');
      _this.variant_listbox = _this.form_root.find('.product-form--variant-select');
      _this.first_variant_id = parseInt(_this.variant_listbox.find('[selected]').val());
      _this.option_inputs = _this.variant_container.find('[data-item="disclosure"], [data-item="radio"]');
      _this.load();
    }

    FrameworkProduct.prototype.load = function() {
      var _this;
      _this = this;
      if (_this.zoom_enabled) {
        _this.imageZoom();
        _this.resizeListeners();
        _this.modalCloseListener();
      }
      if (_this.thumbs) {
        _this.thumbNavigation();
      }
      if (_this.sold_out) {
        return _this.variantSelected(false);
      } else {
        if (_this.show_low_in_stock) {
          _this.updateLowInStock(_this.first_variant_id);
        }
        if (_this.handle) {
          _this.getProductJson();
        }
        if (theme.settings.cart_type === 'drawer') {
          return _this.addToCartListener();
        }
      }
    };

    FrameworkProduct.prototype.getProductJson = function() {
      var _this;
      _this = this;
      return $.ajax({
        url: "/products/" + _this.handle + ".js",
        type: "GET",
        dataType: "json"
      }).done(function(product_json) {
        if (product_json.variants.length > 1) {
          _this.optionChangeListener(product_json.variants);
          if (_this.size_chart_enabled) {
            return _this.sizeChart(product_json.options);
          }
        }
      }).fail(function(jqxhr, textStatus, error) {
        return console.log("product.json Request Failed: " + textStatus + ", " + error);
      });
    };

    FrameworkProduct.prototype.sizeChart = function(variant_options) {
      var _this;
      _this = this;
      _this.form_root.find('.disclosure--root, .radios--header').each(function(index) {
        if (variant_options[index].name.toLowerCase() === _this.size_chart_option.toLowerCase()) {
          $(this).append("<div class='product-form--modal-link' data-item='block-link'> <a class='modal--link' href='#'> " + theme.translations.size_chart_label + " </a> </div>");
          return false;
        }
      });
      return new theme.classes.FrameworkModal(_this.form_root.find('[data-js-class="FrameworkModal"]'));
    };

    FrameworkProduct.prototype.updateLowInStock = function(variant_id) {
      var _this, message, quantity;
      _this = this;
      quantity = _this.variant_listbox.find("[value='" + variant_id + "']").data('inventory-quantity');
      if (quantity > _this.low_stock_threshold || quantity === void 0) {
        return;
      } else if (quantity === 1) {
        message = theme.translations.low_in_stock.one;
      } else if (quantity > 1) {
        message = theme.translations.low_in_stock.other;
        message = message.replace(/\d+/, quantity);
      }
      return _this.low_stock_container.text(message).show();
    };

    FrameworkProduct.prototype.optionChangeListener = function(variants) {
      var _this, updateVariant;
      _this = this;
      updateVariant = function(variant) {
        if (_this.enable_callback) {
          _this.updateHistoryState(variant.id);
          return selectCallback(variant);
        } else {
          return _this.variantSelected(variant);
        }
      };
      return _this.option_inputs.on('change', function() {
        var current_options, i, len, options, variant, variant_title;
        current_options = _this.variant_container.find('[data-item="disclosure"], [data-item="radio"]:checked');
        options = [];
        current_options.each(function() {
          return options.push($(this).val().trim());
        });
        variant_title = options.join(' / ');
        for (i = 0, len = variants.length; i < len; i++) {
          variant = variants[i];
          if (variant.title === variant_title) {
            updateVariant(variant);
            return;
          }
        }
        return updateVariant(false);
      });
    };

    FrameworkProduct.prototype.updateHistoryState = function(variant_id) {
      var _this, new_variant_url;
      _this = this;
      new_variant_url = window.location.protocol + "//" + window.location.host + window.location.pathname;
      if (variant_id) {
        new_variant_url += "?variant=" + variant_id;
      }
      return window.history.replaceState({
        path: new_variant_url
      }, '', new_variant_url);
    };

    FrameworkProduct.prototype.variantSelected = function(variant) {
      var _this;
      _this = this;
      _this.form.find('.product-form--error').remove();
      _this.low_stock_container.hide();
      _this.variant_listbox.find('option[selected]').removeAttr('selected');
      if (variant && variant.available) {
        _this.variant_listbox.find("option[value='" + variant.id + "']").attr('selected', '');
        _this.enableCartButtons(true);
        _this.enableStockForm(false);
        _this.updatePrices(variant);
        if (_this.show_low_in_stock) {
          _this.updateLowInStock(variant.id);
        }
      } else {
        _this.enableCartButtons(false);
        _this.enableStockForm(true);
      }
      if (variant.featured_media) {
        return _this.updateVariantMedia(variant.featured_media.id);
      }
    };

    FrameworkProduct.prototype.enableCartButtons = function(enable) {
      var _this;
      _this = this;
      _this.add_to_cart_button.attr('disabled', !enable);
      if (enable) {
        _this.button_text_container.text(_this.button_text);
        return _this.smart_payment_buttons.show();
      } else {
        _this.button_text_container.text(theme.translations.sold_out);
        return _this.smart_payment_buttons.hide();
      }
    };

    FrameworkProduct.prototype.enableStockForm = function(enable) {
      var _this;
      _this = this;
      _this.unavailable_button.prop("disabled", !enable);
      if (enable) {
        return _this.unavailable_container.show();
      } else {
        return _this.unavailable_container.hide();
      }
    };

    FrameworkProduct.prototype.updatePrices = function(variant) {
      var _this, compare_price, unit_price, variant_price;
      _this = this;
      variant_price = theme.utils.formatMoney(variant.price);
      _this.price.html(variant_price);
      if (variant.compare_at_price > variant.price) {
        compare_price = theme.utils.formatMoney(variant.compare_at_price);
        _this.compare_price.html(compare_price);
        _this.compare_price.show();
      } else {
        _this.compare_price.hide();
      }
      if (variant.unit_price_measurement) {
        unit_price = theme.utils.formatMoney(variant.unit_price);
        _this.unit_price.html(unit_price);
        _this.reference_unit.html(variant.unit_price_measurement.reference_unit);
        if (variant.unit_price_measurement.reference_value === 1) {
          _this.reference_value.hide();
        } else {
          _this.reference_value.html(variant.unit_price_measurement.reference_value);
          _this.reference_value.show();
        }
        return _this.unit_price_container.show();
      } else {
        return _this.unit_price_container.hide();
      }
    };

    FrameworkProduct.prototype.addToCartListener = function() {
      var _this;
      _this = this;
      if (_this.form.length > 0 && theme.settings.cart_type === 'drawer') {
        return _this.form.on('submit', function() {
          _this.form.find('.product-form--error').remove();
          _this.button_container.attr('data-loading', 'true');
          theme.partials.Cart.addItem($(this), function(success, error) {
            if (success) {
              return theme.partials.Cart.updateAllHtml(function() {
                return _this.addProductComplete();
              });
            } else {
              _this.form.append("<div class='product-form--error' data-item='paragraph'> " + error + " </div>");
              return _this.button_container.attr('data-loading', 'false');
            }
          });
          return false;
        });
      }
    };

    FrameworkProduct.prototype.addProductComplete = function() {
      var _this;
      _this = this;
      _this.button_container.attr('data-loading', 'false');
      return $('[data-off-canvas--open="right-sidebar"]').first().trigger('click');
    };

    FrameworkProduct.prototype.thumbNavigation = function() {
      var _this;
      _this = this;
      return _this.thumbs.on('keypress click', function(event) {
        var clicked_id, clicked_media, current_media;
        if (theme.utils.a11yClick(event)) {
          current_media = _this.root.find('.product-media--featured[data-active="true"] > *');
          current_media.trigger('pause-media');
          clicked_id = $(this).attr('data-id');
          clicked_media = _this.root.find(".product-media--featured[data-id='" + clicked_id + "'] > *");
          _this.updateVariantMedia(clicked_id);
          if (theme.utils.mqs.current_window !== 'small') {
            clicked_media.trigger('play-media');
          }
          if (clicked_media.parent().attr('data-media-type') !== 'image') {
            return clicked_media.focus();
          }
        }
      });
    };

    FrameworkProduct.prototype.updateVariantMedia = function(variant_id) {
      var _this, variant_image, variant_thumb;
      _this = this;
      _this.main_media.attr('data-active', 'false');
      variant_image = _this.main_media.filter("[data-id='" + variant_id + "']");
      variant_image.attr('data-active', 'true');
      _this.thumbs.attr('data-active', 'false');
      variant_thumb = _this.thumbs.filter("[data-id='" + variant_id + "']");
      variant_thumb.attr('data-active', 'true');
      if (_this.zoom_enabled) {
        return _this.imageZoom();
      }
    };

    FrameworkProduct.prototype.imageZoom = function() {
      var _this, active_zoom_image, left_position, top_position, wrapper_height, wrapper_width, x_ratio, y_ratio;
      _this = this;
      if (_this.main_media.length < 1 || theme.utils.mqs.current_window === 'small') {
        return;
      }
      active_zoom_image = _this.zoom_images.filter("[data-id='" + (_this.getActiveImageId()) + "']");
      active_zoom_image.css('display', 'none');
      _this.media_container.off('mouseenter.Product.imageZoom');
      _this.media_container.off('mouseleave.Product.imageZoom');
      if (active_zoom_image.length > 0) {
        _this.media_container.attr('data-media-type', 'image');
        wrapper_width = _this.media_container.width();
        wrapper_height = _this.media_container.height();
        active_zoom_image.css('width', wrapper_width * _this.magnify);
        active_zoom_image.find('.image--root').css('width', wrapper_width * _this.magnify);
        active_zoom_image.find('img').addClass('lazypreload');
        top_position = _this.media_container.offset().top;
        left_position = _this.media_container.offset().left;
        x_ratio = (wrapper_width * _this.magnify - wrapper_width) / wrapper_width;
        y_ratio = (wrapper_height * _this.magnify - wrapper_height) / wrapper_height;
        _this.media_container.on('mouseenter.Product.imageZoom', function() {
          return active_zoom_image.css('display', 'block');
        });
        _this.media_container.on('mouseleave.Product.imageZoom', function() {
          return active_zoom_image.css('display', 'none');
        });
        return _this.media_container.on('mousemove', function(event) {
          var relative_left, relative_top;
          relative_left = event.pageX - left_position;
          relative_top = event.pageY - top_position;
          return active_zoom_image.css({
            'left': relative_left * -x_ratio,
            'top': relative_top * -y_ratio
          });
        });
      } else {
        return _this.media_container.attr('data-media-type', '');
      }
    };

    FrameworkProduct.prototype.getActiveImageId = function() {
      var _this, active_image, active_image_id;
      _this = this;
      active_image = _this.main_media.filter('[data-active="true"]');
      return active_image_id = active_image.attr('data-id');
    };

    FrameworkProduct.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Product', theme.utils.debounce(100, function() {
        return _this.imageZoom();
      }));
    };

    FrameworkProduct.prototype.modalCloseListener = function() {
      var _this;
      _this = this;
      return $(window).on('FrameworkModal.afterClose', function() {
        return _this.imageZoom();
      });
    };

    return FrameworkProduct;

  })();

  theme.classes.FrameworkRadios = (function() {
    function FrameworkRadios(root) {
      var _this;
      this.root = root;
      this.setSwatchAppearance = bind(this.setSwatchAppearance, this);
      this.updateLabelOnChange = bind(this.updateLabelOnChange, this);
      this.preventFormSubmitOnEnter = bind(this.preventFormSubmitOnEnter, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.current_value = _this.root.find('.radios--option-current');
      _this.inputs = _this.root.find('[data-item="radio"]');
      _this.is_swatches = _this.root.data('is-swatches');
      _this.load();
    }

    FrameworkRadios.prototype.load = function() {
      var _this;
      _this = this;
      _this.preventFormSubmitOnEnter();
      if (_this.is_swatches) {
        _this.updateLabelOnChange();
        return _this.setSwatchAppearance();
      }
    };

    FrameworkRadios.prototype.preventFormSubmitOnEnter = function() {
      var _this;
      _this = this;
      return _this.inputs.on('keydown', function(event) {
        if (event.key === 'Enter') {
          return event.preventDefault();
        }
      });
    };

    FrameworkRadios.prototype.updateLabelOnChange = function() {
      var _this;
      _this = this;
      return _this.inputs.on('change', function() {
        return _this.current_value.text($(this).val());
      });
    };

    FrameworkRadios.prototype.setSwatchAppearance = function() {
      var _this;
      _this = this;
      return _this.inputs.each(function() {
        var swatch, swatch_color;
        swatch = $(this).siblings('.radios--swatch-button');
        swatch_color = $(this).val().toLowerCase().replace(/\s+/g, '');
        if (theme.swatches[swatch_color] === void 0) {
          return swatch.css('background-color', swatch_color);
        } else if (theme.swatches[swatch_color].indexOf('cdn.shopify.com') > -1) {
          return swatch.css('background-image', "url(" + theme.swatches[swatch_color] + ")");
        } else {
          return swatch.css('background-color', theme.swatches[swatch_color]);
        }
      });
    };

    return FrameworkRadios;

  })();

  theme.classes.FrameworkSearch = (function() {
    function FrameworkSearch(root) {
      var _this;
      this.root = root;
      this.resizeListeners = bind(this.resizeListeners, this);
      this.matchImageHeights = bind(this.matchImageHeights, this);
      this.getResults = bind(this.getResults, this);
      this.listenForKeyEntered = bind(this.listenForKeyEntered, this);
      this.getSearchUrl = bind(this.getSearchUrl, this);
      this.searchLinks = bind(this.searchLinks, this);
      this.loadSpinners = bind(this.loadSpinners, this);
      this.onOpen = bind(this.onOpen, this);
      _this = this;
      _this.articles = _this.root.find('.search--articles');
      _this.form = _this.root.find('form');
      _this.icon = _this.root.find('.search--icon');
      _this.loading = _this.root.find('.search--loading');
      _this.no_results = _this.root.find('.search--no-results');
      _this.products = _this.root.find('.search--products');
      _this.results = _this.root.find('.search--results');
      _this.text_box = _this.root.find('.search--textbox');
      _this.toggle_link = _this.root.find('.search--toggle');
      _this.show_articles = _this.root.data('show-articles');
      _this.show_pages = _this.root.data('show-pages');
      _this.view = _this.root.data('view');
      _this.ajax_request = null;
      _this.search_term = null;
      _this.search_url = null;
      _this.close_results_timer = null;
      _this.typing_timer = null;
      _this.article_page_combination = "";
      _this.offCanvas = theme.partials.OffCanvas;
      if (_this.show_articles && _this.show_pages) {
        _this.article_page_combination = 'article,page';
      } else if (_this.show_articles) {
        _this.article_page_combination = 'article';
      } else if (_this.show_pages) {
        _this.article_page_combination = 'page';
      }
      if (_this.view === 'modal') {
        _this.searchLinks();
        _this.getSearchUrl();
        _this.listenForKeyEntered();
        _this.loadSpinners();
      }
      _this.resizeListeners();
      _this.matchImageHeights();
    }

    FrameworkSearch.prototype.onOpen = function() {
      var _this, temp_val;
      _this = this;
      _this.text_box.focus();
      temp_val = _this.text_box.val();
      _this.text_box.val('');
      _this.text_box.val(temp_val);
      return _this.text_box.trigger('keyup');
    };

    FrameworkSearch.prototype.loadSpinners = function() {
      var _this, spinner;
      _this = this;
      spinner = _this.loading.find('.animation');
      if (spinner.hasClass('tiny')) {
        return spinner.spin('tiny');
      } else {
        return spinner.spin('small');
      }
    };

    FrameworkSearch.prototype.searchLinks = function() {
      var _this;
      _this = this;
      $(".off-canvas--main-content a[href='" + theme.urls.search + "']").on('click', function() {
        $('[data-trigger="search-modal"]').trigger('click');
        _this.onOpen();
        return false;
      });
      $(".off-canvas--right-sidebar a[href='" + theme.urls.search + "']").on('click', function() {
        _this.offCanvas.closeRight();
        setTimeout(function() {
          $('[data-trigger="search-modal"]').trigger('click');
          return _this.onOpen();
        }, 450);
        return false;
      });
      return $(".off-canvas--left-sidebar a[href='" + theme.urls.search + "']").on('click', function() {
        _this.offCanvas.closeLeft();
        setTimeout(function() {
          $('[data-trigger="search-modal"]').trigger('click');
          return _this.onOpen();
        }, 450);
        return false;
      });
    };

    FrameworkSearch.prototype.getSearchUrl = function() {
      var _this;
      _this = this;
      _this.search_url = window.location.href;
      _this.search_url = _this.search_url.replace(window.location.hostname + window.location.pathname, window.location.hostname + theme.urls.search);
      _this.search_url = _this.search_url.replace('#', '');
      if (_this.search_url.indexOf("?") >= 0) {
        return _this.search_url = _this.search_url + "&";
      } else {
        return _this.search_url = _this.search_url + "?";
      }
    };

    FrameworkSearch.prototype.listenForKeyEntered = function() {
      var _this;
      _this = this;
      return _this.text_box.attr("autocomplete", "off").on("keyup paste", function(event) {
        var term;
        clearTimeout(_this.typing_timer);
        term = $(this).val();
        if (term.length < 2 && event.type !== 'paste') {
          _this.products.empty();
          _this.articles.empty();
          _this.loading.hide();
          _this.icon.show();
          return false;
        }
        _this.loading.show();
        _this.icon.hide();
        return _this.typing_timer = setTimeout(function() {
          var url;
          clearTimeout(_this.typing_timer);
          url = _this.search_url + "view=ajax-product&type=product&q=" + term + "*";
          _this.getResults(url, term, 'product');
          if (_this.show_articles || _this.show_pages) {
            url = _this.search_url + "view=ajax-article-page&type=" + _this.article_page_combination + "&q=" + term + "*";
            return _this.getResults(url, term, 'article');
          }
        }, 750);
      });
    };

    FrameworkSearch.prototype.getResults = function(url, term, type) {
      var _this;
      _this = this;
      _this.products.empty();
      _this.articles.empty();
      $.ajax({
        url: url,
        type: "GET",
        dataType: "html",
        success: function(data) {
          _this.loading.hide();
          _this.icon.show();
          if (type === 'product') {
            _this.products.empty();
            _this.products.append(data);
            return _this.matchImageHeights();
          } else if (type === 'article') {
            _this.articles.empty();
            return _this.articles.append(data);
          }
        },
        error: function(jqxhr, textStatus, error) {
          return console.log("search.json Request Failed: " + textStatus + ", " + error);
        }
      });
    };

    FrameworkSearch.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.products, _this.products.find('.product--root'), '.product--image-wrapper');
    };

    FrameworkSearch.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.Search', theme.utils.debounce(100, function() {
        return _this.matchImageHeights();
      }));
    };

    return FrameworkSearch;

  })();

  theme.classes.FrameworkSections = (function() {
    function FrameworkSections() {
      this.deselectBlock = bind(this.deselectBlock, this);
      this.selectBlock = bind(this.selectBlock, this);
      this.deselectSection = bind(this.deselectSection, this);
      this.selectSection = bind(this.selectSection, this);
      this.unload = bind(this.unload, this);
      this.load = bind(this.load, this);
      this.getActiveBlock = bind(this.getActiveBlock, this);
      this.getActiveSection = bind(this.getActiveSection, this);
      this.listeners = bind(this.listeners, this);
      var _this;
      _this = this;
      _this.listeners();
    }

    FrameworkSections.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.load();
      _this.unload();
      _this.selectSection();
      _this.deselectSection();
      _this.selectBlock();
      return _this.deselectBlock();
    };

    FrameworkSections.prototype.getActiveSection = function(event) {
      var _this, active_section;
      _this = this;
      active_section = $(event.target).find('[data-section-id]');
      return active_section;
    };

    FrameworkSections.prototype.getActiveBlock = function(event) {
      var _this, active_block;
      _this = this;
      active_block = $(event.target);
      return active_block;
    };

    FrameworkSections.prototype.load = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:load', function(event) {
        var active_section;
        theme.utils.loadJsClasses();
        active_section = _this.getActiveSection(event);
        active_section.triggerHandler("theme:section:load");
        return active_section.find('[data-js-class]').each(function() {
          return $(this).triggerHandler("theme:section:load");
        });
      });
    };

    FrameworkSections.prototype.unload = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:unload', function(event) {
        var active_section;
        active_section = _this.getActiveSection(event);
        active_section.triggerHandler("theme:section:unload");
        return active_section.find('[data-js-loaded="true"]').each(function() {
          return $(this).triggerHandler("theme:section:unload");
        });
      });
    };

    FrameworkSections.prototype.selectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:select', function(event) {
        var active_section;
        active_section = _this.getActiveSection(event);
        return active_section.triggerHandler("theme:section:select");
      });
    };

    FrameworkSections.prototype.deselectSection = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:section:deselect', function(event) {
        var active_section;
        active_section = _this.getActiveSection(event);
        return active_section.triggerHandler('theme:section:deselect');
      });
    };

    FrameworkSections.prototype.selectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:select', function(event) {
        var active_block;
        active_block = _this.getActiveBlock(event);
        return active_block.triggerHandler('theme:block:select');
      });
    };

    FrameworkSections.prototype.deselectBlock = function() {
      var _this;
      _this = this;
      return $(document).on('shopify:block:deselect', function(event) {
        var active_block;
        active_block = _this.getActiveBlock(event);
        return active_block.triggerHandler('theme:block:deselect');
      });
    };

    return FrameworkSections;

  })();

  theme.classes.FrameworkServiceList = (function() {
    function FrameworkServiceList(root) {
      var _this;
      this.root = root;
      this.balanceColumns = bind(this.balanceColumns, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.section_id = _this.root.data('section-id');
      _this.block_list = _this.root.find('.service-list--blocks');
      _this.blocks = _this.root.find('li');
      _this.blocks_container = _this.root.find('.service-list--container');
      _this.headers = _this.root.find('.service-list--block-header');
      _this.single_column = _this.root.find('.service-list--single-column');
      _this.left_column = _this.root.find('.service-list--left-column');
      _this.right_column = _this.root.find('.service-list--right-column');
      _this.load();
    }

    FrameworkServiceList.prototype.load = function() {
      var _this;
      _this = this;
      return _this.balanceColumns();
    };

    FrameworkServiceList.prototype.balanceColumns = function() {
      var _this, assignLoopList, isTypeHeader, loop_list, offset, thresholdBreached, with_multiple_headers;
      _this = this;
      offset = _this.root.data('service-list--show-descriptions') === true ? 75 : 0;
      with_multiple_headers = _this.block_list.length > 1 ? true : false;
      isTypeHeader = function(item) {
        return item.hasClass('service-list--block-header');
      };
      thresholdBreached = function() {
        var left_column_height, right_column_height, single_column_height;
        single_column_height = _this.single_column.outerHeight();
        left_column_height = _this.left_column.outerHeight();
        right_column_height = _this.right_column.outerHeight();
        return left_column_height >= parseFloat(right_column_height + single_column_height - offset);
      };
      assignLoopList = function() {
        if (with_multiple_headers) {
          _this.root.attr('data-service-list--has-headers', true);
          return _this.block_list;
        } else {
          _this.left_column.append('<ul class="service-list--blocks"></ul>');
          return _this.blocks;
        }
      };
      loop_list = assignLoopList();
      return loop_list.each(function(index) {
        if (thresholdBreached()) {
          _this.single_column.find('.service-list--blocks').appendTo(_this.right_column);
          return;
        } else {
          if (with_multiple_headers) {
            $(this).appendTo(_this.left_column);
          } else {
            if (isTypeHeader($(this))) {
              $(this).find('.service-list--block-header--text').prependTo(_this.blocks_container);
              $(this).remove();
            } else {
              $(this).appendTo(_this.left_column.find('.service-list--blocks'));
            }
          }
        }
        if (index === loop_list.length - 1 && _this.right_column.is(':empty') && _this.headers.length > 1) {
          return _this.left_column.find('.service-list--blocks').last().appendTo(_this.right_column);
        }
      });
    };

    return FrameworkServiceList;

  })();

  theme.classes.FrameworkSlider = (function() {
    function FrameworkSlider(container1) {
      this.container = container1;
      this.eventListeners = bind(this.eventListeners, this);
      this.pauseMedia = bind(this.pauseMedia, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.updateContextMenu = bind(this.updateContextMenu, this);
      this.autoplay = bind(this.autoplay, this);
      this.formatPaginationNumbers = bind(this.formatPaginationNumbers, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.createSlider = bind(this.createSlider, this);
      this.autoplay_enabled = this.container.data('autoplay') ? true : false;
      this.navigation = this.container.data('navigation') ? true : false;
      this.pagination_numbers = this.container.data('pagination-numbers') ? true : false;
      this.autoplay_frequency = 3000;
      this.slide_length = this.container.children().length;
      this.active_index = 0;
      this.news_panel = this.container.data('news-panel') ? true : false;
      this.createSlider();
      this.eventListeners();
      this.owl = this.container.data('owlCarousel');
    }

    FrameworkSlider.prototype.createSlider = function() {
      var _this, slider;
      _this = this;
      slider = this.container.owlCarousel({
        singleItem: true,
        navigation: _this.navigation,
        navigationText: false,
        pagination: _this.container.data('pagination') ? true : false,
        paginationNumbers: _this.pagination_numbers,
        scrollPerPageNav: true,
        slideSpeed: 800,
        autoHeight: false,
        autoPlay: _this.autoplay(),
        afterInit: function() {
          return $(window).trigger('slider.ready');
        },
        afterAction: function() {
          _this.active_index = _this.getActiveIndex();
          _this.alignPlayButton();
          _this.updateContextMenu(_this.active_index);
          _this.formatPaginationNumbers();
          return _this.pauseMedia();
        }
      });
      if (_this.navigation) {
        slider.find('.owl-prev').html('<svg class="icon--root icon--chevron-left" viewBox="0 0 12 20"> <path d="M2.648 10l8.613-8.614L9.99.114.102 10l9.887 9.886 1.272-1.272z" fill-rule="nonzero" /> </svg>');
        slider.find('.owl-next').html('<svg class="icon--root icon--chevron-right" viewBox="0 0 12 20"> <path d="M8.716 10L.102 18.614l1.273 1.272L11.261 10 1.375.114.102 1.386z" fill-rule="nonzero" /> </svg>');
      }
      return slider;
    };

    FrameworkSlider.prototype.getActiveIndex = function() {
      return this.container.find('.owl-pagination .owl-page.active').index();
    };

    FrameworkSlider.prototype.formatPaginationNumbers = function() {
      return this.container.find('.owl-page.active .owl-numbers').text((this.active_index + 1) + "/" + this.slide_length);
    };

    FrameworkSlider.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    FrameworkSlider.prototype.updateContextMenu = function(index) {
      var context_navigation, type_class;
      if (this.news_panel) {
        type_class = "." + (this.container.find('.slide').eq(index).data('feed-type'));
        context_navigation = this.container.closest('.template--index--news').find('.context-navigation');
        context_navigation.find('.item').hide();
        return context_navigation.find(type_class).show();
      }
    };

    FrameworkSlider.prototype.alignPlayButton = function() {
      var play_button, play_button_height, slide, slide_height, video_offset;
      slide = this.container.find('.owl-item').eq(this.active_index);
      play_button = slide.find('.play-button');
      if (play_button.length === 0) {
        return;
      }
      play_button.css('visibility', 'hidden');
      if ($('body').hasClass('transparent-menu') && $('.header--root').css('position') === 'absolute') {
        slide_height = slide.outerHeight();
        play_button_height = play_button.outerHeight();
        video_offset = (slide_height - play_button_height) / 2;
        play_button.css({
          'margin-top': 0,
          'top': video_offset
        });
      } else {
        play_button.css({
          'margin-top': '-40px',
          'top': '50%'
        });
      }
      return play_button.css('visibility', 'visible');
    };

    FrameworkSlider.prototype.pauseMedia = function() {
      var _this;
      _this = this;
      return _this.container.find('.product-video--root, .product-model--root').trigger('pause-media');
    };

    FrameworkSlider.prototype.eventListeners = function() {
      var _this;
      _this = this;
      this.container.find(".play-button").on('click', function() {
        var video_modal;
        video_modal = new VideoModal($(this).closest('.video'));
        video_modal.open();
        _this.owl.stop();
        return false;
      });
      return this.container.find('.owl-pagination .owl-page, .skip-to-next').on('click', function() {
        _this.owl.next();
        return false;
      });
    };

    return FrameworkSlider;

  })();

  theme.classes.FrameworkStickyColumn = (function() {
    function FrameworkStickyColumn(container1, column_a, column_b) {
      this.container = container1;
      this.column_a = column_a;
      this.column_b = column_b;
      this.Listeners = bind(this.Listeners, this);
      this.setColumnPosition = bind(this.setColumnPosition, this);
      this.getAlignment = bind(this.getAlignment, this);
      this.getState = bind(this.getState, this);
      this.resetLargerColumn = bind(this.resetLargerColumn, this);
      this.getSmallerColumn = bind(this.getSmallerColumn, this);
      this.heightsHaveChanged = bind(this.heightsHaveChanged, this);
      this.setHeights = bind(this.setHeights, this);
      this.loadColumns = bind(this.loadColumns, this);
      if (Modernizr.touchevents) {
        return false;
      }
      this.current_state = 'auto';
      this.column_a_height = 0;
      this.column_b_height = 0;
      this.loadColumns();
    }

    FrameworkStickyColumn.prototype.loadColumns = function() {
      var _this;
      _this = this;
      return theme.utils.imagesLoaded(_this.container, function() {
        _this.Listeners();
        return _this.setColumnPosition();
      });
    };

    FrameworkStickyColumn.prototype.setHeights = function() {
      this.column_a_height = this.column_a.outerHeight();
      return this.column_b_height = this.column_b.outerHeight();
    };

    FrameworkStickyColumn.prototype.heightsHaveChanged = function() {
      if (this.column_a.outerHeight() !== this.column_a_height) {
        this.setHeights();
        return true;
      }
      if (this.column_b.outerHeight() !== this.column_b_height) {
        this.setHeights();
        return true;
      }
      return false;
    };

    FrameworkStickyColumn.prototype.getSmallerColumn = function() {
      if (this.column_a_height < this.column_b_height) {
        return this.column_a;
      } else {
        return this.column_b;
      }
    };

    FrameworkStickyColumn.prototype.resetLargerColumn = function() {
      if (this.column_a_height > this.column_b_height) {
        return this.column_a.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else {
        return this.column_b.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      }
    };

    FrameworkStickyColumn.prototype.getState = function(scroll_pos, window_height, column) {
      var column_height, height_for_bottom, overflowing_column, state;
      state = 'auto';
      if (theme.utils.mqs.current_window === 'small') {
        return 'auto';
      }
      column_height = column.outerHeight();
      if (window_height > column_height) {
        overflowing_column = true;
      }
      if (scroll_pos < this.container.offset().top) {
        state = 'auto';
      }
      if (overflowing_column) {
        height_for_bottom = column_height;
      } else {
        height_for_bottom = window_height;
      }
      if ((scroll_pos + height_for_bottom) > (this.container.offset().top + this.container.outerHeight())) {
        state = 'absolute-bottom';
      } else if (scroll_pos > this.container.offset().top && overflowing_column) {
        state = 'fixed-top';
      } else if (window_height < column_height && (scroll_pos + window_height) > (this.container.offset().top + column.outerHeight())) {
        state = 'fixed-bottom';
      }
      return state;
    };

    FrameworkStickyColumn.prototype.getAlignment = function(column) {
      if (column.hasClass('column-a')) {
        return 'left';
      } else if (column.hasClass('column-b')) {
        return 'right';
      }
    };

    FrameworkStickyColumn.prototype.setColumnPosition = function() {
      var _this, align, column, state;
      _this = this;
      _this.setHeights();
      column = _this.getSmallerColumn();
      state = _this.getState($(window).scrollTop(), $(window).height(), column);
      align = _this.getAlignment(column);
      if (state === 'auto' && this.current_state !== 'auto') {
        this.current_state = 'auto';
        column.css({
          'position': 'relative',
          'top': 'auto',
          'bottom': 'auto'
        });
      } else if (state === 'fixed-bottom' && this.current_state !== 'fixed-bottom') {
        this.current_state = 'fixed-bottom';
        column.css({
          'position': 'fixed',
          'top': 'auto',
          'bottom': 0
        });
      } else if (state === 'fixed-top' && this.current_state !== 'fixed-top') {
        this.current_state = 'fixed-top';
        column.css({
          'position': 'fixed',
          'top': 0,
          'bottom': 'auto'
        });
      } else if (state === 'absolute-bottom' && this.current_state !== 'absolute-bottom') {
        this.current_state = 'absolute-bottom';
        column.css({
          'position': 'absolute',
          'top': 'auto',
          'bottom': 0
        });
      }
      if (align === 'right') {
        return column.css({
          'right': 0
        });
      }
    };

    FrameworkStickyColumn.prototype.Listeners = function() {
      var _this;
      _this = this;
      $(window).on('scroll', function() {
        return _this.setColumnPosition();
      });
      setInterval(function() {
        if (_this.heightsHaveChanged()) {
          _this.resetLargerColumn();
          return _this.setColumnPosition();
        }
      }, 250);
      return $(window).on('resize', function() {
        _this.resetLargerColumn();
        return _this.setColumnPosition();
      });
    };

    return FrameworkStickyColumn;

  })();

  theme.classes.FrameworkTabOrder = (function() {
    function FrameworkTabOrder(mobile_order, desktop_order) {
      var _this;
      this.mobile_order = mobile_order;
      this.desktop_order = desktop_order;
      this.resizeListener = bind(this.resizeListener, this);
      this.disableFocus = bind(this.disableFocus, this);
      this.enableCustomFocus = bind(this.enableCustomFocus, this);
      this.updateOrderList = bind(this.updateOrderList, this);
      this.detectTabDirection = bind(this.detectTabDirection, this);
      this.getElementList = bind(this.getElementList, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.tab_forwards = null;
      _this.mobile_order_elements = _this.getElementList(_this.mobile_order);
      _this.desktop_order_elements = _this.getElementList(_this.desktop_order);
      _this.load();
    }

    FrameworkTabOrder.prototype.load = function() {
      var _this;
      _this = this;
      _this.detectTabDirection();
      _this.updateOrderList();
      _this.enableCustomFocus();
      return _this.resizeListener();
    };

    FrameworkTabOrder.prototype.getElementList = function(order_list) {
      var _this, order_list_elements;
      _this = this;
      if (order_list) {
        order_list_elements = [];
        order_list.forEach(function(container_class) {
          if ($(container_class).length > 0) {
            return order_list_elements.push($(container_class).first());
          }
        });
        return order_list_elements;
      } else {
        return false;
      }
    };

    FrameworkTabOrder.prototype.detectTabDirection = function() {
      var _this;
      _this = this;
      return $(document).on("keydown", function(event) {
        _this.tab_forwards = true;
        if (event.which === 9 && event.shiftKey) {
          _this.tab_forwards = false;
        }
        return true;
      });
    };

    FrameworkTabOrder.prototype.updateOrderList = function() {
      var _this;
      _this = this;
      if (theme.utils.mqs.current_window === 'small') {
        _this.current_order_elements = _this.mobile_order_elements;
        return _this.previous_order_elements = _this.desktop_order_elements;
      } else {
        _this.current_order_elements = _this.desktop_order_elements;
        return _this.previous_order_elements = _this.mobile_order_elements;
      }
    };

    FrameworkTabOrder.prototype.enableCustomFocus = function() {
      var _this;
      _this = this;
      if (!_this.current_order_elements) {
        return;
      }
      return _this.current_order_elements.forEach(function(element, index) {
        return element.on('focusout', function(event) {
          var lost_focus, move_to;
          if (!theme.utils.tabbing) {
            return;
          }
          lost_focus = $(this).has(event.relatedTarget).length === 0;
          if (lost_focus && _this.tab_forwards) {
            if ((index + 1) < _this.current_order_elements.length) {
              move_to = _this.current_order_elements[index + 1];
              return move_to.find(':focusable').first().focus();
            }
          } else if (lost_focus) {
            if ((index - 1) >= 0) {
              move_to = _this.current_order_elements[index - 1];
              return move_to.find(':focusable').last().focus();
            }
          }
        });
      });
    };

    FrameworkTabOrder.prototype.disableFocus = function() {
      var _this;
      _this = this;
      if (!_this.previous_order_elements) {
        return;
      }
      return _this.previous_order_elements.forEach(function(element, index) {
        return element.off('focusout');
      });
    };

    FrameworkTabOrder.prototype.resizeListener = function() {
      var _this;
      _this = this;
      return $(window).on('theme.utils.mqs.updated', function() {
        _this.updateOrderList();
        _this.enableCustomFocus();
        return _this.disableFocus();
      });
    };

    return FrameworkTabOrder;

  })();

  theme.classes.FrameworkUtils = (function() {
    function FrameworkUtils() {
      this.loadJsClasses = bind(this.loadJsClasses, this);
      this.detectTabbing = bind(this.detectTabbing, this);
      var _this;
      _this = this;
      _this.google_map_api_status = null;
      _this.mqs = new theme.classes.FrameworkMediaQueries();
      _this.detectTabbing();
      cssVars();
    }

    FrameworkUtils.prototype.a11yClick = function(event) {
      var code;
      if (event.type === 'click') {
        return true;
      } else if (event.type === 'keypress') {
        code = event.charCode || event.keyCode;
        if (code === 32) {
          event.preventDefault();
        }
        if (code === 32 || code === 13) {
          return true;
        }
      }
      return false;
    };

    FrameworkUtils.prototype.detectTabbing = function() {
      var _this;
      _this = this;
      $(window).on('click load', function() {
        _this.tabbing = false;
        return $('body').attr('data-tabbing', _this.tabbing);
      });
      return $(window).on('keydown', function(event) {
        if (event.which === 9 || event.which === 37 || event.which === 38 || event.which === 39 || event.which === 40 || event.which === 27) {
          _this.tabbing = true;
          return $('body').attr('data-tabbing', _this.tabbing);
        }
      });
    };

    FrameworkUtils.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkUtils.prototype.imagesLoaded = function(selector, callback) {
      var count, images_length;
      count = 0;
      images_length = selector.find('img[data-sizes="auto"]').length;
      if (images_length < 1) {
        callback();
        return;
      }
      return selector.on('lazybeforeunveil', function(event) {
        return $(event.target).on('load', function() {
          count++;
          if (count === images_length) {
            return callback();
          }
        });
      });
    };

    FrameworkUtils.prototype.loadJsClasses = function() {
      var _this;
      _this = this;
      return $('[data-js-class]').each(function() {
        var js_class, partial_class;
        js_class = $(this).attr('data-js-class');
        if ($(this).attr('data-js-loaded') !== 'true') {
          partial_class = theme.classes[js_class];
          if (typeof partial_class !== "undefined") {
            theme.partials[js_class] = new partial_class($(this));
            return $(this).attr('data-js-loaded', 'true');
          }
        }
      });
    };

    FrameworkUtils.prototype.matchImageHeights = function(container, items, image_class) {
      var _this, greatest_image_height, items_per_row, row_items;
      _this = this;
      items_per_row = Math.round(container.width() / items.first().outerWidth());
      greatest_image_height = 0;
      row_items = $();
      items.find(image_class).css('height', 'auto');
      items.find('.placeholder--root').css('height', 'auto');
      return items.each(function(index) {
        var this_height;
        if ($(this).find('.image--root').length > 0) {
          this_height = $(this).find(image_class + " .image--root").outerHeight();
        } else {
          this_height = $(this).find('.placeholder--root').outerHeight();
        }
        row_items = row_items.add($(this));
        if (this_height > greatest_image_height) {
          greatest_image_height = this_height;
        }
        if (index % items_per_row === items_per_row - 1 || index + 1 === items.length) {
          row_items.find(image_class + ", .placeholder--root").height(greatest_image_height);
          greatest_image_height = 0;
          return row_items = $();
        }
      });
    };

    FrameworkUtils.prototype.insertStylesheet = function(src) {
      var _this, stylesheet;
      _this = this;
      stylesheet = document.createElement('link');
      stylesheet.rel = 'stylesheet';
      stylesheet.href = src;
      return document.head.appendChild(stylesheet);
    };

    FrameworkUtils.prototype.insertScript = function(src, callback) {
      var _this, script;
      _this = this;
      script = document.createElement('script');
      script.src = src;
      if (callback) {
        script.onload = callback;
      }
      return document.body.appendChild(script);
    };

    FrameworkUtils.prototype.formatMoney = function(raw_amount) {
      var _this, formatWithSeperators, formatted_amount, money_format, regex;
      _this = this;
      regex = /\{\{\s*(\w+)\s*\}\}/;
      money_format = theme.shop.money_format.match(regex)[1];
      formatWithSeperators = function(amount_in_cents, decimal_places, swap_seperators) {
        var amount_components, cents, cents_seperator, dollars, thousand_seperator;
        thousand_seperator = swap_seperators ? '.' : ',';
        cents_seperator = swap_seperators ? ',' : '.';
        amount_components = (amount_in_cents / 100).toFixed(decimal_places).split('.');
        cents = amount_components[1] ? cents_seperator + amount_components[1] : '';
        dollars = amount_components[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousand_seperator);
        return dollars + cents;
      };
      switch (money_format) {
        case 'amount':
          formatted_amount = formatWithSeperators(raw_amount, 2, false);
          break;
        case 'amount_no_decimals':
          formatted_amount = formatWithSeperators(raw_amount, 0, false);
          break;
        case 'amount_with_comma_separator':
          formatted_amount = formatWithSeperators(raw_amount, 2, true);
          break;
        case 'amount_no_decimals_with_comma_separator':
          formatted_amount = formatWithSeperators(raw_amount, 0, true);
      }
      return theme.shop.money_format.replace(regex, formatted_amount);
    };

    FrameworkUtils.prototype.isNaN = function(num) {
      var _this;
      _this = this;
      return num !== num;
    };

    return FrameworkUtils;

  })();

  theme.classes.FrameworkXMenu = (function() {
    function FrameworkXMenu(root) {
      var _this;
      this.root = root;
      this.slideUp = bind(this.slideUp, this);
      this.slideDown = bind(this.slideDown, this);
      this.arrangeMegaNav = bind(this.arrangeMegaNav, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.checkOverlap = bind(this.checkOverlap, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.debugging = false;
      _this.state = 'closed';
      _this.parent_links = _this.root.find('.x-menu--level-1--link > a');
      _this.sub_menu_links = _this.root.find('.x-menu--level-1--link:not([data-x-menu--depth="1"]) > a');
      _this.sub_menu_items = _this.sub_menu_links.parent().find('ul a');
      _this.parents_with_sub_menu = _this.sub_menu_links.parent();
      _this.overlap_parent = _this.root.data('x-menu--overlap-parent');
      _this.load();
    }

    FrameworkXMenu.prototype.load = function() {
      var _this;
      _this = this;
      _this.arrangeMegaNav();
      _this.listeners();
      _this.checkOverlap();
      return _this.resizeListeners();
    };

    FrameworkXMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.parents_with_sub_menu.on('mouseenter.XMenu', function() {
        return _this.slideDown($(this).find('> a'));
      });
      _this.parents_with_sub_menu.on('mouseleave.XMenu', function() {
        return _this.slideUp();
      });
      _this.parent_links.on('focus', function() {
        return _this.slideUp();
      });
      _this.sub_menu_links.on('focus', function() {
        return _this.slideDown($(this));
      });
      return _this.sub_menu_links.on('touchstart.XMenu', function(event) {
        event.preventDefault();
        if ($(this).parent().attr('data-x-menu--open') === 'true') {
          return _this.slideUp();
        } else {
          return _this.slideDown($(this));
        }
      });
    };

    FrameworkXMenu.prototype.checkOverlap = function() {
      var _this, center_index, center_item, center_item_left_edge, center_item_right_edge, center_item_width, container, container_width, first_center_child, last_center_child, left_break_point, left_item, right_item, right_item_edge;
      _this = this;
      if (Modernizr.touchevents && theme.utils.mqs.current_window !== 'large') {
        _this.root.attr('data-x-menu--overlap', 'true');
        return false;
      }
      _this.root.attr('data-x-menu--overlap', 'false');
      center_item = _this.root;
      if (_this.overlap_parent === 1) {
        center_item = center_item.parent();
      } else if (_this.overlap_parent === 2) {
        center_item = center_item.parent().parent();
      }
      container = center_item.parent();
      center_index = center_item.index();
      left_item = false;
      if (center_index > 1) {
        left_item = container.children().eq(center_index - 1);
      }
      right_item = false;
      if (center_index + 1 < container.children().length) {
        right_item = container.children().eq(center_index + 1);
      }
      container_width = container.width();
      center_item_width = _this.root.outerWidth();
      if (left_item) {
        first_center_child = center_item.find('> :first-child');
        center_item_left_edge = first_center_child.offset().left - 1;
        left_break_point = (container_width - center_item_width) / 2;
        if (left_edge >= center_item_left_edge) {
          _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
      if (right_item) {
        last_center_child = center_item.find('> :last-child');
        center_item_right_edge = last_center_child.outerWidth() + last_center_child.offset().left + 1;
        right_item_edge = right_item.offset().left;
        if (center_item_right_edge >= right_item_edge) {
          return _this.root.attr('data-x-menu--overlap', 'true');
        }
      }
    };

    FrameworkXMenu.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.XMenu', _this.debounce(100, function() {
        return _this.checkOverlap();
      }));
    };

    FrameworkXMenu.prototype.debounce = function(delay, fn) {
      var timeoutId;
      timeoutId = void 0;
      return function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(fn.bind(this), delay, arguments);
      };
    };

    FrameworkXMenu.prototype.arrangeMegaNav = function() {
      var _this, mega_navs;
      _this = this;
      if (_this.parents_with_sub_menu.length === 0) {
        return false;
      }
      mega_navs = _this.root.find('[data-x-menu--depth="3"] .x-menu--level-2--container');
      return mega_navs.each(function() {
        var container, single_parents, single_parents_container;
        container = $(this);
        single_parents = container.find('[data-x-menu--single-parent="true"]');
        if (single_parents.length > 0) {
          single_parents_container = $('<div class="x-menu--single-parents"></div>').insertAfter(container.find('.x-menu--bg'));
          return single_parents_container.append('<ul>').find('ul').append(single_parents);
        }
      });
    };

    FrameworkXMenu.prototype.slideDown = function(link, delay) {
      var _this, display_type, link_wrapper, menu_height, sub_menu;
      if (delay == null) {
        delay = false;
      }
      _this = this;
      clearTimeout(_this.timer);
      link_wrapper = link.parent();
      if (link_wrapper.attr('data-x-menu--open') === 'true' || _this.state === 'closing') {
        return false;
      }
      _this.slideUp(false);
      if (delay && delay !== 'complete') {
        _this.timer = setTimeout(function() {
          return _this.slideDown(link, 'complete');
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.icon--chevron-up').show();
        link.closest('.x-menu--level-1--link').find('.icon--chevron-down').hide();
        link.closest('.x-menu--level-1--link').find('.icon--minus').show();
        link.closest('.x-menu--level-1--link').find('.icon--plus').hide();
        _this.state = 'open';
        link_wrapper.attr('data-x-menu--open', 'true');
        link.attr('aria-expanded', 'true');
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        display_type = 'block';
        if (link_wrapper.attr('data-x-menu--depth') === "3") {
          display_type = 'flex';
        }
        sub_menu.velocity('stop');
        sub_menu.css({
          height: 'auto',
          display: display_type
        });
        sub_menu.find('.x-menu--level-2--list').css({
          display: display_type
        });
        menu_height = sub_menu.outerHeight();
        sub_menu.css({
          height: 0,
          opacity: 1
        });
        sub_menu.velocity({
          height: [menu_height, 0]
        }, {
          queue: false,
          duration: 600,
          easing: "easeOutExpo"
        });
      }
    };

    FrameworkXMenu.prototype.slideUp = function(delay) {
      var _this, link, link_wrapper, sub_menu;
      if (delay == null) {
        delay = 300;
      }
      _this = this;
      if (_this.debugging) {
        return false;
      }
      link_wrapper = _this.parents_with_sub_menu.filter('[data-x-menu--open="true"]');
      link = link_wrapper.find('> a');
      if (link_wrapper.attr('data-x-menu--open') === 'false') {
        return false;
      }
      if (delay) {
        return _this.timer = setTimeout(function() {
          return _this.slideUp(false);
        }, delay);
      } else {
        link.closest('.x-menu--level-1--link').find('.icon--chevron-up').hide();
        link.closest('.x-menu--level-1--link').find('.icon--chevron-down').show();
        link.closest('.x-menu--level-1--link').find('.icon--minus').hide();
        link.closest('.x-menu--level-1--link').find('.icon--plus').show();
        sub_menu = link.closest('.x-menu--level-1--link').find('.x-menu--level-2--container');
        link_wrapper.attr('data-x-menu--open', 'false');
        link.attr('aria-expanded', 'false');
        return sub_menu.velocity({
          opacity: 0
        }, {
          begin: function() {
            return _this.state = 'closing';
          },
          complete: function() {
            sub_menu.css({
              'display': 'none'
            });
            return _this.state = 'closed';
          },
          duration: 200
        });
      }
    };

    return FrameworkXMenu;

  })();

  theme.classes.FrameworkYMenu = (function() {
    function FrameworkYMenu(root) {
      var _this;
      this.root = root;
      this.slideRight = bind(this.slideRight, this);
      this.slideLeft = bind(this.slideLeft, this);
      this.adjustHeight = bind(this.adjustHeight, this);
      this.listeners = bind(this.listeners, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.state = 'closed';
      _this.sub_menu_links = _this.root.find('.icon--chevron-right--small').parent();
      _this.back_links = _this.root.find('.y-menu--back-link a');
      _this.regular_links = _this.root.find('.y-menu--level-1--link > a:not([data-submenu="true"]), .y-menu--level-2--link > a:not([data-submenu="true"]), .y-menu--level-3--link > a:not([data-submenu="true"])');
      _this.timer = null;
      _this.load();
    }

    FrameworkYMenu.prototype.load = function() {
      var _this;
      _this = this;
      return _this.listeners();
    };

    FrameworkYMenu.prototype.listeners = function() {
      var _this;
      _this = this;
      _this.regular_links.on('click', function() {
        var href;
        href = $(this).attr('href');
        if (href.indexOf('#') !== -1) {
          if (theme.partials.OffCanvas.state === 'left-open') {
            theme.partials.OffCanvas.closeLeft();
          } else if (theme.partials.OffCanvas.state === 'right-open') {
            theme.partials.OffCanvas.closeRight();
          }
          setTimeout(function() {
            return window.location.href = href;
          }, 450);
        }
      });
      _this.sub_menu_links.on('click', function() {
        _this.slideLeft($(this));
        return false;
      });
      return _this.back_links.on('click', function() {
        _this.slideRight($(this));
        return false;
      });
    };

    FrameworkYMenu.prototype.adjustHeight = function(open_list) {
      var _this, current_height, open_list_height;
      _this = this;
      _this.root.css({
        height: 'auto'
      });
      current_height = _this.root.outerHeight();
      open_list_height = open_list.outerHeight();
      if (open_list.css('position') === 'absolute') {
        open_list.css('position', 'relative');
        open_list_height = open_list.outerHeight();
        open_list.css('position', 'absolute');
      }
      return _this.root.velocity({
        height: open_list_height
      });
    };

    FrameworkYMenu.prototype.slideLeft = function(link) {
      var _this, sub_menu;
      _this = this;
      sub_menu = link.closest('li').find('ul').first();
      sub_menu.css({
        display: 'block'
      });
      _this.adjustHeight(sub_menu);
      return sub_menu.velocity({
        translateX: ['-100%', 0]
      });
    };

    FrameworkYMenu.prototype.slideRight = function(link) {
      var _this, container, parent_container;
      _this = this;
      container = link.closest('ul');
      parent_container = container.parent().closest('ul');
      _this.adjustHeight(parent_container);
      return container.velocity({
        translateX: [0, '-100%']
      });
    };

    return FrameworkYMenu;

  })();

  theme.classes.Article = (function(superClass) {
    extend(Article, superClass);

    function Article() {
      return Article.__super__.constructor.apply(this, arguments);
    }

    return Article;

  })(theme.classes.FrameworkArticle);

  theme.classes.Blog = (function(superClass) {
    extend(Blog, superClass);

    function Blog() {
      return Blog.__super__.constructor.apply(this, arguments);
    }

    return Blog;

  })(theme.classes.FrameworkBlog);

  theme.classes.Cart = (function(superClass) {
    extend(Cart, superClass);

    function Cart() {
      this.updateTotalsComplete = bind(this.updateTotalsComplete, this);
      return Cart.__super__.constructor.apply(this, arguments);
    }

    Cart.prototype.updateTotalsComplete = function(count) {
      var _this;
      _this = this;
      if (count > 0) {
        _this.total_item_count.css('display', 'inline-block');
        return _this.total_item_count.parent().show();
      } else {
        _this.total_item_count.not('.header--mobile-cart-count').hide();
        return _this.total_item_count.not('.header--mobile-cart-count').parent().hide();
      }
    };

    return Cart;

  })(theme.classes.FrameworkCart);

  theme.classes.Disclosure = (function(superClass) {
    extend(Disclosure, superClass);

    function Disclosure() {
      return Disclosure.__super__.constructor.apply(this, arguments);
    }

    return Disclosure;

  })(theme.classes.FrameworkDisclosure);

  theme.classes.FeaturedVideo = (function(superClass) {
    extend(FeaturedVideo, superClass);

    function FeaturedVideo() {
      return FeaturedVideo.__super__.constructor.apply(this, arguments);
    }

    return FeaturedVideo;

  })(theme.classes.FrameworkFeaturedVideo);

  theme.classes.Footer = (function(superClass) {
    extend(Footer, superClass);

    function Footer() {
      return Footer.__super__.constructor.apply(this, arguments);
    }

    return Footer;

  })(theme.classes.FrameworkFooter);

  theme.classes.Slideshow = (function() {
    function Slideshow(root) {
      var _this, slide_parent;
      this.root = root;
      this.eventListeners = bind(this.eventListeners, this);
      this.alignPlayButton = bind(this.alignPlayButton, this);
      this.alignCaption = bind(this.alignCaption, this);
      this.isFirstSlider = bind(this.isFirstSlider, this);
      this.getActiveIndex = bind(this.getActiveIndex, this);
      this.autoplay = bind(this.autoplay, this);
      this.createSlider = bind(this.createSlider, this);
      _this = this;
      this.el = _this.root.find('.slides');
      slide_parent = this.el.closest('.slider');
      this.autoplay_enabled = slide_parent.data('autoplay');
      if (slide_parent.find('.slide').length < 2) {
        this.autoplay_enabled = false;
      }
      this.autoplay_frequency = slide_parent.data('rotateFrequency');
      this.transition_style = slide_parent.data('transitionStyle');
      this.createSlider();
      this.owl = $(".owl-carousel").data('owlCarousel');
    }

    Slideshow.prototype.createSlider = function() {
      var slider, slider_options;
      slider = this;
      slider_options = {
        singleItem: true,
        navigation: false,
        paginationNumbers: false,
        scrollPerPageNav: true,
        slideSpeed: 800,
        pagination: true,
        autoHeight: true,
        autoPlay: slider.autoplay(),
        afterInit: function() {
          return slider.eventListeners();
        },
        afterAction: function() {
          slider.alignCaption();
          return slider.alignPlayButton();
        }
      };
      if (this.transition_style !== 'default') {
        slider_options['transitionStyle'] = this.transition_style;
      }
      return slider.el.owlCarousel(slider_options);
    };

    Slideshow.prototype.autoplay = function() {
      if (this.autoplay_enabled) {
        return this.autoplay_frequency;
      }
      return false;
    };

    Slideshow.prototype.getActiveIndex = function() {
      return this.el.find('.owl-pagination .owl-page.active').index();
    };

    Slideshow.prototype.isFirstSlider = function() {
      var current_section_id, first_section, first_section_id;
      first_section = $('.index-sections').children('div:first');
      first_section_id = first_section.find('.slider').data('sectionId');
      current_section_id = this.el.closest('.slider').data('sectionId');
      if (first_section.hasClass('section--slideshow')) {
        return current_section_id === first_section_id;
      }
      return false;
    };

    Slideshow.prototype.alignCaption = function() {
      var caption, caption_height, caption_width, left_offset, middle_top, slide, slide_height, slide_padding, slide_width, top_offset;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      caption = slide.find('.caption');
      caption.css('visibility', 'hidden');
      caption_height = caption.outerHeight();
      caption_width = caption.outerWidth();
      slide_padding = 30;
      slide_height = slide.outerHeight();
      slide_width = slide.outerWidth();
      top_offset = 0;
      if (caption.hasClass('top')) {
        caption.css('top', top_offset + slide_padding);
      } else if (caption.hasClass('middle')) {
        middle_top = top_offset + (slide_height - top_offset - caption_height) / 2;
        caption.css('top', middle_top);
      }
      if (caption.hasClass('center')) {
        left_offset = (slide_width - caption_width) / 2;
        caption.css('left', left_offset);
      }
      return caption.css('visibility', 'visible');
    };

    Slideshow.prototype.alignPlayButton = function() {
      var play_button, slide;
      slide = this.el.find('.owl-item').eq(this.getActiveIndex());
      play_button = slide.find('.play-button');
      play_button.css('visibility', 'hidden');
      play_button.css({
        'margin-top': '-40px',
        'top': '50%'
      });
      return play_button.css('visibility', 'visible');
    };

    Slideshow.prototype.eventListeners = function() {
      var slider;
      slider = this;
      return this.el.find('.owl-pagination .owl-page').on('click', function() {
        return slider.owl.stop();
      });
    };

    return Slideshow;

  })();

  theme.classes.Header = (function() {
    function Header(root) {
      var _this;
      this.root = root;
      this.moveYMenu = bind(this.moveYMenu, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.load();
    }

    Header.prototype.load = function() {
      var _this;
      _this = this;
      _this.moveYMenu();
      if ($('.modal.window').css('display') === 'block') {
        $('.modal.window .close').trigger('click');
      }
      return _this.root.on('theme:section:load', function() {
        theme.partials.OffCanvas.unload();
        return theme.partials.OffCanvas.load();
      });
    };

    Header.prototype.moveYMenu = function() {
      var _this;
      _this = this;
      $('.mobile-nav--menu').empty();
      return $('.y-menu').appendTo('.mobile-nav--menu');
    };

    return Header;

  })();

  theme.classes.OffCanvas = (function(superClass) {
    extend(OffCanvas, superClass);

    function OffCanvas(root) {
      this.root = root;
      this.closeRight = bind(this.closeRight, this);
      OffCanvas.__super__.constructor.apply(this, arguments);
    }

    OffCanvas.prototype.closeRight = function() {
      var _this;
      _this = _this;
      OffCanvas.__super__.closeRight.apply(this, arguments);
      return $("[data-off-canvas--open='right-sidebar'], [data-off-canvas--open='right-sidebar'] a").focus();
    };

    return OffCanvas;

  })(theme.classes.FrameworkOffCanvas);

  theme.classes.PasswordPage = (function(superClass) {
    extend(PasswordPage, superClass);

    function PasswordPage() {
      return PasswordPage.__super__.constructor.apply(this, arguments);
    }

    return PasswordPage;

  })(theme.classes.FrameworkPasswordPage);

  theme.classes.Popup = (function() {
    function Popup(root) {
      var _this;
      this.root = root;
      _this = this;
      _this.container = _this.root.find('.popup--container');
      _this.open_link = $('.popup--open');
      _this.close_link = _this.root.find('.popup--close');
      _this.show_again_after = _this.root.data('show-again-after');
      _this.mode = _this.root.data('mode');
      _this.newsletter_form = _this.root.find('#contact_form');
      _this.body = $('body');
      _this.eventListeners();
      _this.autoPopup();
    }

    Popup.prototype.eventListeners = function() {
      var _this;
      _this = this;
      _this.open_link.on('keypress.Popup, click.Popup', function() {
        if (_this.body.hasClass('popup--opened')) {
          _this.close();
        } else {
          _this.open();
        }
        return false;
      });
      _this.close_link.on('keypress.Popup, click.Popup', function() {
        _this.close();
        return false;
      });
      return _this.newsletter_form.on('submit', function(event) {
        var form, form_dom;
        form_dom = this;
        form = $(this);
        form.find('.error, .success').remove();
        event.preventDefault();
        if (form.find('input[type="email"]').val().length === 0) {
          form.prepend("<p class='error'>" + theme.translations.mailing_list_email_blank + "</p>");
          return false;
        } else {
          form.find('input[type="email"], input[type="submit"]').hide();
          form.prepend("<p class='success'>" + theme.translations.mailing_list_success_message + "</p>").show();
          setTimeout(function() {
            return form_dom.submit();
          }, 500);
        }
        return false;
      });
    };

    Popup.prototype.open = function(source) {
      var _this;
      _this = this;
      _this.container.removeClass('popup--closed');
      _this.container.velocity({
        translateY: [0, _this.container.outerHeight()]
      }, {
        duration: 300
      });
      _this.body.addClass('popup--opened');
      return setTimeout(function() {
        return _this.body.css('padding-bottom', _this.container.outerHeight());
      }, 300);
    };

    Popup.prototype.delayUntilValidScrollPosition = function() {
      var _this;
      _this = this;
      return $(window).on("DOMMouseScroll.Popup mousewheel.Popup touchmove.Popup scroll.Popup touchmove.Popup", function() {
        var header_offset, scroll_top;
        header_offset = $('.header').offset().top;
        scroll_top = $(window).scrollTop();
        if (scroll_top > header_offset) {
          _this.open();
          return $(window).off("DOMMouseScroll.Popup mousewheel.Popup touchmove.Popup scroll.Popup touchmove.Popup");
        }
      });
    };

    Popup.prototype.close = function() {
      var _this;
      _this = this;
      _this.body.removeClass('popup--opened');
      _this.body.velocity({
        paddingBottom: 0
      }, {
        duration: 300
      });
      return _this.container.velocity({
        translateY: [_this.container.outerHeight(), 0]
      }, {
        duration: 300,
        complete: function() {
          return _this.container.addClass('popup--closed');
        }
      });
    };

    Popup.prototype.autoPopup = function() {
      var _this;
      _this = this;
      if (_this.mode === 'manual') {
        return;
      }
      if (!Modernizr.localstorage || _this.mode === 'test') {
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      } else if (localStorage['troop-themes'] === void 0) {
        _this.setResetTime();
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      } else if (_this.readyToReset()) {
        _this.setResetTime();
        return setTimeout(function() {
          return _this.open('auto');
        }, 1000);
      }
    };

    Popup.prototype.readyToReset = function() {
      var _this, expires, now, troop_local_storage;
      _this = this;
      troop_local_storage = JSON.parse(localStorage['troop-themes']);
      expires = troop_local_storage.popup_expires;
      now = new Date().getTime();
      if (parseFloat(expires - now) <= 0) {
        _this.setResetTime();
        return true;
      }
      return false;
    };

    Popup.prototype.setResetTime = function() {
      var _this, date, expires, object, seconds_from_now;
      _this = this;
      date = new Date();
      seconds_from_now = 1000 * 60 * 60 * 24 * _this.show_again_after;
      expires = date.setTime(date.getTime() + seconds_from_now);
      object = {
        popup_expires: expires
      };
      localStorage['troop-themes'] = JSON.stringify(object);
      return _this;
    };

    return Popup;

  })();

  theme.classes.ProductModel = (function(superClass) {
    extend(ProductModel, superClass);

    function ProductModel() {
      return ProductModel.__super__.constructor.apply(this, arguments);
    }

    return ProductModel;

  })(theme.classes.FrameworkProductModel);

  theme.classes.ProductRecommendations = (function(superClass) {
    extend(ProductRecommendations, superClass);

    function ProductRecommendations() {
      return ProductRecommendations.__super__.constructor.apply(this, arguments);
    }

    return ProductRecommendations;

  })(theme.classes.FrameworkProductRecommendations);

  theme.classes.ProductVideo = (function(superClass) {
    extend(ProductVideo, superClass);

    function ProductVideo() {
      return ProductVideo.__super__.constructor.apply(this, arguments);
    }

    return ProductVideo;

  })(theme.classes.FrameworkProductVideo);

  theme.classes.Product = (function(superClass) {
    extend(Product, superClass);

    function Product(root) {
      var _this;
      this.root = root;
      this.pauseOtherMedia = bind(this.pauseOtherMedia, this);
      this.reorderModalImages = bind(this.reorderModalImages, this);
      this.updateVariantMedia = bind(this.updateVariantMedia, this);
      this.swapMedia = bind(this.swapMedia, this);
      this.resizeListeners = bind(this.resizeListeners, this);
      this.copyLink = bind(this.copyLink, this);
      this.balanceColumns = bind(this.balanceColumns, this);
      this.indexContentBlocks = bind(this.indexContentBlocks, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.copy_link = _this.root.find('.social-share--item-copy');
      _this.copy_text = _this.root.find('.social-share--copy-text');
      Product.__super__.constructor.apply(this, arguments);
    }

    Product.prototype.load = function() {
      var _this;
      _this = this;
      Product.__super__.load.apply(this, arguments);
      _this.indexContentBlocks();
      _this.copyLink();
      _this.balanceColumns();
      _this.resizeListeners();
      _this.reorderModalImages();
      return _this.pauseOtherMedia();
    };

    Product.prototype.indexContentBlocks = function() {
      var _this, content_blocks;
      _this = this;
      content_blocks = _this.root.find('.product-page--description, .product-page--media-variant');
      return content_blocks.each(function(index) {
        return $(this).attr('data-block-index', index);
      });
    };

    Product.prototype.balanceColumns = function() {
      var _this, content_blocks, image_count, left_side, right_side, single_column;
      _this = this;
      single_column = _this.root.find('.product-page--single-column');
      content_blocks = _this.root.find('.product-page--description, .product-page--media-variant');
      left_side = _this.root.find('.product-page--column-left');
      right_side = _this.root.find('.product-page--column-right');
      image_count = _this.root.find('.product-page--media-variant').length;
      if (content_blocks.find('iframe').length && theme.utils.mqs.current_window !== 'small' && left_side.children().length) {
        return false;
      }
      content_blocks.sort(function(a, b) {
        return +a.getAttribute('data-block-index') - +b.getAttribute('data-block-index');
      }).appendTo(single_column);
      single_column.show();
      left_side.hide();
      right_side.hide();
      if (image_count > 0 && theme.utils.mqs.current_window !== 'small') {
        content_blocks.each(function(index) {
          var left_height, right_height;
          left_height = left_side.outerHeight();
          right_height = right_side.outerHeight();
          if (left_height <= right_height) {
            return $(this).appendTo(left_side);
          } else {
            return $(this).appendTo(right_side);
          }
        });
        single_column.hide();
        left_side.show();
        return right_side.show();
      }
    };

    Product.prototype.copyLink = function() {
      var _this;
      _this = this;
      _this.copy_link.on('click', function(event) {
        event.preventDefault();
        navigator.clipboard.writeText(window.location.href);
        return _this.copy_text.show();
      });
      return _this.copy_link.on('focusout', function(event) {
        return _this.copy_text.hide();
      });
    };

    Product.prototype.resizeListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.TemplateProduct', function() {
        return _this.balanceColumns();
      });
    };

    Product.prototype.swapMedia = function(media_1, media_2) {
      var _this, media_1_clone, media_2_clone;
      _this = this;
      media_1_clone = media_1.clone();
      media_2_clone = media_2.clone();
      media_1.replaceWith(media_2_clone);
      return media_2.replaceWith(media_1_clone);
    };

    Product.prototype.updateVariantMedia = function(variant_media_id) {
      var _this, featured_media, modal_images, new_featured_media, new_first_modal_image, other_media;
      _this = this;
      featured_media = _this.root.find('.product-page--featured-media .product-media--featured');
      other_media = _this.root.find('.product-media--featured');
      modal_images = _this.root.find('.product-page--modal-image');
      if (variant_media_id && variant_media_id !== featured_media.data('id')) {
        new_featured_media = other_media.filter("[data-id='" + variant_media_id + "']");
        new_first_modal_image = modal_images.filter("[data-id='" + variant_media_id + "']");
        _this.swapMedia(featured_media, new_featured_media);
        _this.swapMedia(modal_images.first(), new_first_modal_image);
        _this.balanceColumns();
        _this.reorderModalImages();
      }
    };

    Product.prototype.reorderModalImages = function() {
      var _this, modal_images, modal_wrapper, product_images;
      _this = this;
      modal_images = _this.root.find('.product-page--modal-image');
      modal_wrapper = _this.root.find('.product-page--modal-wrapper');
      product_images = _this.root.find('.product-media--featured[data-media-type="image"]');
      return product_images.each(function() {
        var modal_content, product_id;
        product_id = $(this).attr('data-id');
        modal_content = modal_images.filter("[data-id='" + product_id + "']").closest('.modal--content');
        return modal_wrapper.append(modal_content);
      });
    };

    Product.prototype.pauseOtherMedia = function() {
      var _this;
      _this = this;
      return _this.root.find('.product-media--featured > *').on('click', function() {
        return _this.root.find('.product-media--featured > *').not(this).trigger('pause-media');
      });
    };

    return Product;

  })(theme.classes.FrameworkProduct);

  theme.classes.Radios = (function(superClass) {
    extend(Radios, superClass);

    function Radios() {
      return Radios.__super__.constructor.apply(this, arguments);
    }

    return Radios;

  })(theme.classes.FrameworkRadios);

  theme.classes.Sections = (function(superClass) {
    extend(Sections, superClass);

    function Sections() {
      return Sections.__super__.constructor.apply(this, arguments);
    }

    return Sections;

  })(theme.classes.FrameworkSections);

  theme.classes.ServiceList = (function(superClass) {
    extend(ServiceList, superClass);

    function ServiceList() {
      return ServiceList.__super__.constructor.apply(this, arguments);
    }

    return ServiceList;

  })(theme.classes.FrameworkServiceList);

  theme.classes.XMenu = (function(superClass) {
    extend(XMenu, superClass);

    function XMenu(root) {
      var _this;
      this.root = root;
      this.checkOverlap = bind(this.checkOverlap, this);
      this.alignSubmenus = bind(this.alignSubmenus, this);
      this.load = bind(this.load, this);
      _this = this;
      _this.cart_count = $('.header--cart-count');
      _this.hide_when_overlapping = $('.layout--header .layout--login, .layout--header .popup--open, .layout--header .cart-link, .layout--header .header--search');
      XMenu.__super__.constructor.apply(this, arguments);
    }

    XMenu.prototype.load = function() {
      var _this;
      _this = this;
      XMenu.__super__.load.apply(this, arguments);
      return _this.alignSubmenus();
    };

    XMenu.prototype.alignSubmenus = function() {
      var _this, logo, logo_offset, sub_menus;
      _this = this;
      logo = $('.layout--header .fw--logo');
      logo_offset = logo.outerWidth();
      sub_menus = _this.root.find('[data-x-menu--depth="3"] .x-menu--level-2--container');
      return sub_menus.each(function() {
        return $(this).css({
          left: logo_offset,
          width: "calc(100% - " + logo_offset + "px)"
        });
      });
    };

    XMenu.prototype.checkOverlap = function() {
      var _this, header;
      _this = this;
      header = $('.layout--header');
      _this.cart_count.attr('data-menu-overlap', 'false');
      header.attr('data-menu-overlap', 'false');
      _this.hide_when_overlapping.css({
        display: 'inline-block'
      });
      XMenu.__super__.checkOverlap.apply(this, arguments);
      if (_this.root.attr('data-x-menu--overlap') === 'true') {
        header.attr('data-menu-overlap', 'true');
        _this.hide_when_overlapping.hide();
        if (parseInt(_this.cart_count.find('.count').text()) > 0) {
          return _this.cart_count.attr('data-menu-overlap', 'true');
        }
      }
    };

    return XMenu;

  })(theme.classes.FrameworkXMenu);

  theme.classes.CollectionPage = (function() {
    function CollectionPage(root) {
      var _this;
      this.root = root;
      this.matchImageHeights = bind(this.matchImageHeights, this);
      _this = this;
      _this.product_grid = _this.root.find('.collection--product-grid');
      _this.items = _this.root.find('.product--root');
      _this.load();
    }

    CollectionPage.prototype.load = function() {
      var _this;
      _this = this;
      _this.eventListeners();
      return _this.matchImageHeights();
    };

    CollectionPage.prototype.eventListeners = function() {
      var _this;
      _this = this;
      return $(window).on('resize.CollectionPage', function() {
        return _this.matchImageHeights();
      });
    };

    CollectionPage.prototype.matchImageHeights = function() {
      var _this;
      _this = this;
      return theme.utils.matchImageHeights(_this.product_grid, _this.items, '.product--image-wrapper');
    };

    return CollectionPage;

  })();

  jQuery(function($) {
    theme.sections = new theme.classes.Sections();
    theme.utils = new theme.classes.FrameworkUtils();
    $('a').each(function() {
      var _this;
      _this = $(this);
      if (this.host === location.host) {
        return _this.attr('target', '_self');
      } else {
        return _this.attr('target', '_blank').attr('rel', 'noopener');
      }
    });
    $('.fw--align--right').each(function() {
      return new FrameworkAlign($(this), 'right');
    });
    $('.partial--popup #mc-embedded-subscribe-form').on('submit', function(event) {
      $('.modal .close').click();
      return true;
    });
    $('.partial--popup #contact_form').on('submit', function(event) {
      var form, modal, wrapper;
      form = this;
      modal = $(this).closest('.partial--popup');
      modal.find('.error, .success').remove();
      wrapper = modal.find('.wrapper');
      event.preventDefault();
      if (modal.find('[type="email"]').val().length === 0) {
        return false;
      } else {
        wrapper.find('*').remove().end().prepend("<p class='success'>" + theme.translations.mailing_list_success_message + "</p>").show();
        setTimeout(function() {
          return form.submit();
        }, 500);
      }
      return false;
    });
    if ($('body').hasClass('template--search')) {
      $(document).on('shopify:section:load', function() {
        return checkLogoHeight();
      });
    }
    $('[data-item="hidden-text"]').find(':focusable').attr('tabindex', '-1');
    theme.utils.loadJsClasses();
    $('#admin_bar_iframe').on('load', function() {
      var iframe;
      iframe = $('#admin_bar_iframe').contents();
      if (iframe.find('#storefront-bar-minimized').css('display') === 'none') {
        return setTimeout(function() {
          return $('html').css('padding-top', '40px');
        }, 10);
      }
    });
    $('html').addClass('after-js-loaded');
    return setTimeout(function() {
      return $(".owl-carousel").each(function() {
        return $(this).data('owlCarousel').calculateAll();
      });
    }, 0);
  });

}).call(this);
