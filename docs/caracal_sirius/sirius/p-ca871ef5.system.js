var __extends=this&&this.__extends||function(){var e=function(r,n){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var n in r)if(r.hasOwnProperty(n))e[n]=r[n]};return e(r,n)};return function(r,n){e(r,n);function t(){this.constructor=r}r.prototype=n===null?Object.create(n):(t.prototype=n.prototype,new t)}}();var __awaiter=this&&this.__awaiter||function(e,r,n,t){function a(e){return e instanceof n?e:new n((function(r){r(e)}))}return new(n||(n=Promise))((function(n,i){function o(e){try{l(t.next(e))}catch(r){i(r)}}function s(e){try{l(t["throw"](e))}catch(r){i(r)}}function l(e){e.done?n(e.value):a(e.value).then(o,s)}l((t=t.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},t,a,i,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(e){return function(r){return l([e,r])}}function l(o){if(t)throw new TypeError("Generator is already executing.");while(n)try{if(t=1,a&&(i=o[0]&2?a["return"]:o[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,o[1])).done)return i;if(a=0,i)o=[o[0]&2,i.value];switch(o[0]){case 0:case 1:i=o;break;case 4:n.label++;return{value:o[1],done:false};case 5:n.label++;a=o[1];o=[0];continue;case 7:o=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(o[0]===6||o[0]===2)){n=0;continue}if(o[0]===3&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(o[0]===6&&n.label<i[1]){n.label=i[1];i=o;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(o);break}if(i[2])n.ops.pop();n.trys.pop();continue}o=r.call(e,n)}catch(s){o=[6,s];a=0}finally{t=i=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register([],(function(e,r){"use strict";return{execute:function(){var n=this;var t="sirius";var a=0;var i=false;var o;var s;var l=false;var f=typeof window!=="undefined"?window:{};var u=f.document||{head:{}};var c={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,n,t){return e.addEventListener(r,n,t)},rel:function(e,r,n,t){return e.removeEventListener(r,n,t)}};var $=function(){return(u.head.attachShadow+"").indexOf("[native")>-1}();var v=new WeakMap;var h=function(e){return v.get(e)};var m=e("r",(function(e,r){return v.set(r.$lazyInstance$=e,r)}));var d=function(e){var r={$flags$:0,$hostElement$:e,$instanceValues$:new Map};{r.$onInstancePromise$=new Promise((function(e){return r.$onInstanceResolve$=e}))}{r.$onReadyPromise$=new Promise((function(e){return r.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return v.set(e,r)};var p=function(e,r){return r in e};var g=function(e){return console.error(e)};var y=new Map;var b=function(e,n,t){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var o=y.get(i);if(o){return o[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{y.set(i,e)}return e[a]}),g)};var w=[];var _=[];var R=[];var k=function(e,r){return function(n){e.push(n);if(!i){i=true;if(r&&c.$flags$&4){P(x)}else{c.raf(x)}}}};var S=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(n){g(n)}}e.length=0};var E=function(e,r){var n=0;var t=0;while(n<e.length&&(t=performance.now())<r){try{e[n++](t)}catch(a){g(a)}}if(n===e.length){e.length=0}else if(n!==0){e.splice(0,n)}};var x=function(){a++;S(w);var e=(c.$flags$&6)===2?performance.now()+10*Math.ceil(a*(1/22)):Infinity;E(_,e);E(R,e);if(_.length>0){R.push.apply(R,_);_.length=0}if(i=w.length+_.length+R.length>0){c.raf(x)}else{a=0}};var P=function(e){return Promise.resolve().then(e)};var j=k(_,true);var C={};var L=function(e){return e!=null};var N=function(e){e=typeof e;return e==="object"||e==="function"};var U=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var O=e("a",(function(){if(!(f.CSS&&f.CSS.supports&&f.CSS.supports("color","var(--c)"))){return r.import("./p-447ccb56.system.js").then((function(){c.$cssShim$=f.__stencil_cssshim;if(c.$cssShim$){return c.$cssShim$.initShim()}}))}return Promise.resolve()}));var A=e("p",(function(){{c.$cssShim$=f.__stencil_cssshim}var e=Array.from(u.querySelectorAll("script")).find((function(e){return new RegExp("/"+t+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===t}));var n=e["data-opts"]||{};var a=r.meta.url;if("onbeforeload"in e&&!history.scrollRestoration&&false){return{then:function(){}}}if(a!==""){n.resourcesUrl=new URL(".",a).href}else{n.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,f.location.href)).href;I(n.resourcesUrl,e);if(!window.customElements){return r.import("./p-7f10eb01.system.js").then((function(){return n}))}}return Promise.resolve(n)}));var I=function(e,r){var n=U(t);try{f[n]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;f[n]=function(t){var i=new URL(t,e).href;var o=a.get(i);if(!o){var s=u.createElement("script");s.type="module";s.crossOrigin=r.crossOrigin;s.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+n+".m = m;"],{type:"application/javascript"}));o=new Promise((function(e){s.onload=function(){e(f[n].m);s.remove()}}));a.set(i,o);u.head.appendChild(s)}return o}}};var B=function(e,r){if(e!=null&&!N(e)){return e}return e};var M="hydrated";var z="http://www.w3.org/1999/xlink";var T=function(e,r){if(r===void 0){r=""}{return function(){return}}};var H=function(e,r){{return function(){return}}};var V=e("h",(function(e,r){var n=[];for(var t=2;t<arguments.length;t++){n[t-2]=arguments[t]}var a=null;var i=null;var o=false;var s=false;var l=[];var f=function(r){for(var n=0;n<r.length;n++){a=r[n];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(o=typeof e!=="function"&&!N(a)){a=String(a)}if(o&&s){l[l.length-1].$text$+=a}else{l.push(o?q(null,a):a)}s=o}}};f(n);if(r){if(r.key){i=r.key}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r,l,G)}var c=q(e,null);c.$attrs$=r;if(l.length>0){c.$children$=l}{c.$key$=i}return c}));var q=function(e,r){var n={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{n.$attrs$=null}{n.$key$=null}return n};var F={};var W=function(e){return e&&e.$tag$===F};var G={forEach:function(e,r){return e.map(Q).forEach(r)},map:function(e,r){return e.map(Q).map(r).map(D)}};var Q=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var D=function(e){var r=q(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var J=function(e,r,n,t,a,i){if(n===t){return}var o=p(e,r);var s=r.toLowerCase();if(r==="class"){var l=e.classList;var u=X(n);var $=X(t);l.remove.apply(l,u.filter((function(e){return e&&!$.includes(e)})));l.add.apply(l,$.filter((function(e){return e&&!u.includes(e)})))}else if(r==="style"){{for(var v in n){if(!t||t[v]==null){if(v.includes("-")){e.style.removeProperty(v)}else{e.style[v]=""}}}}for(var v in t){if(!n||t[v]!==n[v]){if(v.includes("-")){e.style.setProperty(v,t[v])}else{e.style[v]=t[v]}}}}else if(r==="key");else if(r==="ref"){if(t){t(e)}}else if(!o&&r[0]==="o"&&r[1]==="n"){if(r[2]==="-"){r=r.slice(3)}else if(p(f,s)){r=s.slice(2)}else{r=s[2]+r.slice(3)}if(n){c.rel(e,r,n,false)}if(t){c.ael(e,r,t,false)}}else{var h=N(t);if((o||h&&t!==null)&&!a){try{if(!e.tagName.includes("-")){var m=t==null?"":t;if(r==="list"){o=false}else if(n==null||e[r]!=m){e[r]=m}}else{e[r]=t}}catch(g){}}var d=false;{if(s!==(s=s.replace(/^xlink\:?/,""))){r=s;d=true}}if(t==null||t===false){if(d){e.removeAttributeNS(z,r)}else{e.removeAttribute(r)}}else if((!o||i&4||a)&&!h){t=t===true?"":t;if(d){e.setAttributeNS(z,r,t)}else{e.setAttribute(r,t)}}}};var K=/\s/;var X=function(e){return!e?[]:e.split(K)};var Y=function(e,r,n,t){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||C;var o=r.$attrs$||C;{for(t in i){if(!(t in o)){J(a,t,i[t],undefined,n,r.$flags$)}}}for(t in o){J(a,t,i[t],o[t],n,r.$flags$)}};var Z=function(e,r,n,t){var a=r.$children$[n];var i=0;var s;var f;{s=a.$elm$=u.createElement(a.$tag$);{Y(null,a,l)}if(L(o)&&s["s-si"]!==o){s.classList.add(s["s-si"]=o)}if(a.$children$){for(i=0;i<a.$children$.length;++i){f=Z(e,a,i);if(f){s.appendChild(f)}}}}return s};var ee=function(e,r,n,t,a,i){var o=e;var l;if(o.shadowRoot&&o.tagName===s){o=o.shadowRoot}for(;a<=i;++a){if(t[a]){l=Z(null,n,a);if(l){t[a].$elm$=l;o.insertBefore(l,r)}}}};var re=function(e,r,n,t,a){for(;r<=n;++r){if(t=e[r]){a=t.$elm$;ie(t);a.remove()}}};var ne=function(e,r,n,t){var a=0;var i=0;var o=0;var s=0;var l=r.length-1;var f=r[0];var u=r[l];var c=t.length-1;var $=t[0];var v=t[c];var h;var m;while(a<=l&&i<=c){if(f==null){f=r[++a]}else if(u==null){u=r[--l]}else if($==null){$=t[++i]}else if(v==null){v=t[--c]}else if(te(f,$)){ae(f,$);f=r[++a];$=t[++i]}else if(te(u,v)){ae(u,v);u=r[--l];v=t[--c]}else if(te(f,v)){ae(f,v);e.insertBefore(f.$elm$,u.$elm$.nextSibling);f=r[++a];v=t[--c]}else if(te(u,$)){ae(u,$);e.insertBefore(u.$elm$,f.$elm$);u=r[--l];$=t[++i]}else{o=-1;{for(s=a;s<=l;++s){if(r[s]&&r[s].$key$!==null&&r[s].$key$===$.$key$){o=s;break}}}if(o>=0){m=r[o];if(m.$tag$!==$.$tag$){h=Z(r&&r[i],n,o)}else{ae(m,$);r[o]=undefined;h=m.$elm$}$=t[++i]}else{h=Z(r&&r[i],n,i);$=t[++i]}if(h){{f.$elm$.parentNode.insertBefore(h,f.$elm$)}}}}if(a>l){ee(e,t[c+1]==null?null:t[c+1].$elm$,n,t,i,c)}else if(i>c){re(r,a,l)}};var te=function(e,r){if(e.$tag$===r.$tag$){{return e.$key$===r.$key$}}return false};var ae=function(e,r){var n=r.$elm$=e.$elm$;var t=e.$children$;var a=r.$children$;{{{Y(e,r,l)}}if(t!==null&&a!==null){ne(n,t,r,a)}else if(a!==null){ee(n,null,r,a,0,a.length-1)}else if(t!==null){re(t,0,t.length-1)}}};var ie=function(e){{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null);e.$children$&&e.$children$.forEach(ie)}};var oe=function(e,r,n,t){s=e.tagName;var a=r.$vnode$||q(null,null);var i=W(t)?t:V(null,null,t);i.$tag$=null;i.$flags$|=4;r.$vnode$=i;i.$elm$=a.$elm$=e.shadowRoot||e;{o=e["s-sc"]}ae(a,i)};var se=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var le=function(e,r,n,t){{r.$flags$|=16}if(r.$flags$&4){r.$flags$|=512;return}var a=T("scheduleUpdate",n.$tagName$);var i=r.$ancestorComponent$;var o=r.$lazyInstance$;var s=function(){return fe(e,r,n,o)};se(r,i);var l;if(t){{l=he(o,"componentWillLoad")}}a();return me(l,(function(){return j(s)}))};var fe=function(e,r,n,t,a){var i=T("update",n.$tagName$);var o=e["s-rc"];var s=T("render",n.$tagName$);{{oe(e,r,n,ue(t))}}if(c.$cssShim$){c.$cssShim$.updateHost(e)}{r.$flags$&=~16}{r.$flags$|=2}if(o){o.forEach((function(e){return e()}));e["s-rc"]=undefined}s();i();{var l=e["s-p"];var f=function(){return ce(e,r,n)};if(l.length===0){f()}else{Promise.all(l).then(f);r.$flags$|=4;l.length=0}}};var ue=function(e,r){try{e=e.render()}catch(n){g(n)}return e};var ce=function(e,r,n){var t=T("postUpdate",n.$tagName$);var a=r.$ancestorComponent$;if(!(r.$flags$&64)){r.$flags$|=64;{e.classList.add(M)}t();{r.$onReadyResolve$(e);if(!a){ve()}}}else{t()}{r.$onInstanceResolve$(e)}{if(r.$onRenderResolve$){r.$onRenderResolve$();r.$onRenderResolve$=undefined}if(r.$flags$&512){P((function(){return le(e,r,n,false)}))}r.$flags$&=~(4|512)}};var $e=function(e,r){{var n=h(e);var t=n.$hostElement$.isConnected;if(t&&(n.$flags$&(2|16))===2){le(e,n,r,false)}return t}};var ve=function(e){{u.documentElement.classList.add(M)}{c.$flags$|=2}};var he=function(e,r,n){if(e&&e[r]){try{return e[r](n)}catch(t){g(t)}}return undefined};var me=function(e,r){return e&&e.then?e.then(r):r()};var de=function(e,r){return h(e).$instanceValues$.get(r)};var pe=function(e,r,n,t){var a=h(e);var i=a.$hostElement$;var o=a.$instanceValues$.get(r);var s=a.$flags$;var l=a.$lazyInstance$;n=B(n);if(n!==o&&(!(s&8)||o===undefined)){a.$instanceValues$.set(r,n);if(l){if((s&(2|16))===2){le(i,a,t,false)}}}};var ge=function(e,r,n){if(r.$members$){var t=Object.entries(r.$members$);var a=e.prototype;t.forEach((function(e){var t=e[0],i=e[1][0];if(i&31||n&2&&i&32){Object.defineProperty(a,t,{get:function(){return de(this,t)},set:function(e){pe(this,t,e,r)},configurable:true,enumerable:true})}else if(n&1&&i&64){Object.defineProperty(a,t,{value:function(){var e=[];for(var r=0;r<arguments.length;r++){e[r]=arguments[r]}var n=h(this);return n.$onInstancePromise$.then((function(){var r;return(r=n.$lazyInstance$)[t].apply(r,e)}))}})}}))}return e};var ye=function(e,r,t,a,i){return __awaiter(n,void 0,void 0,(function(){var n,a,o,s;return __generator(this,(function(l){switch(l.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=b(t);if(!i.then)return[3,2];n=H();return[4,i];case 1:i=l.sent();n();l.label=2;case 2:if(!i.isProxied){ge(i,t,2);i.isProxied=true}a=T("createInstance",t.$tagName$);{r.$flags$|=8}try{new i(r)}catch(f){g(f)}{r.$flags$&=~8}a();l.label=3;case 3:o=r.$ancestorComponent$;s=function(){return le(e,r,t,true)};if(o&&o["s-rc"]){o["s-rc"].push(s)}else{s()}return[2]}}))}))};var be=function(e,r){if((c.$flags$&1)===0){var n=T("connectedCallback",r.$tagName$);var t=h(e);if(!(t.$flags$&1)){t.$flags$|=1;{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){se(t,t.$ancestorComponent$=a);break}}}if(r.$members$){Object.entries(r.$members$).forEach((function(r){var n=r[0],t=r[1][0];if(t&31&&e.hasOwnProperty(n)){var a=e[n];delete e[n];e[n]=a}}))}{P((function(){return ye(e,t,r)}))}}n()}};var we=function(e){if((c.$flags$&1)===0){var r=h(e);if(c.$cssShim$){c.$cssShim$.removeHost(e)}}};var _e=e("b",(function(e,r){if(r===void 0){r={}}var n=T();var t=[];var a=r.exclude||[];var i=u.head;var o=f.customElements;var s=i.querySelector("meta[charset]");var l=u.createElement("style");var v=[];var m;var p=true;Object.assign(c,r);c.$resourcesUrl$=new URL(r.resourcesUrl||"./",u.baseURI).href;if(r.syncQueue){c.$flags$|=4}e.forEach((function(e){return e[1].forEach((function(r){var n={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{n.$members$=r[2]}if(!$&&n.$flags$&1){n.$flags$|=8}var i=n.$tagName$;var s=function(e){__extends(r,e);function r(r){var t=e.call(this,r)||this;r=t;d(r);if(n.$flags$&1){if($){{r.attachShadow({mode:"open"})}}else if(!("shadowRoot"in r)){r.shadowRoot=r}}return t}r.prototype.connectedCallback=function(){var e=this;if(m){clearTimeout(m);m=null}if(p){v.push(this)}else{c.jmp((function(){return be(e,n)}))}};r.prototype.disconnectedCallback=function(){var e=this;c.jmp((function(){return we(e)}))};r.prototype.forceUpdate=function(){$e(this,n)};r.prototype.componentOnReady=function(){return h(this).$onReadyPromise$};return r}(HTMLElement);n.$lazyBundleIds$=e[0];if(!a.includes(i)&&!o.get(i)){t.push(i);o.define(i,ge(s,n,1))}}))}));l.innerHTML=t+"{visibility:hidden}.hydrated{visibility:inherit}";l.setAttribute("data-styles","");i.insertBefore(l,s?s.nextSibling:i.firstChild);p=false;if(v.length>0){v.forEach((function(e){return e.connectedCallback()}))}else{c.jmp((function(){return m=setTimeout(ve,30,"timeout")}))}n()}));var Re=e("c",(function(e,r,n){var t=ke(e);return{emit:function(e){var a=new CustomEvent(r,{bubbles:!!(n&4),composed:!!(n&2),cancelable:!!(n&1),detail:e});t.dispatchEvent(a);return a}}}));var ke=function(e){return h(e).$hostElement$}}}}));