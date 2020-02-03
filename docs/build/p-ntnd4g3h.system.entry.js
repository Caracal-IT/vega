var __awaiter=this&&this.__awaiter||function(t,e,r,n){function i(t){return t instanceof r?t:new r((function(e){e(t)}))}return new(r||(r=Promise))((function(r,a){function o(t){try{u(n.next(t))}catch(e){a(e)}}function s(t){try{u(n["throw"](t))}catch(e){a(e)}}function u(t){t.done?r(t.value):i(t.value).then(o,s)}u((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var r={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},n,i,a,o;return o={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function s(t){return function(e){return u([t,e])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(r)try{if(n=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:r.label++;return{value:o[1],done:false};case 5:r.label++;i=o[1];o=[0];continue;case 7:o=r.ops.pop();r.trys.pop();continue;default:if(!(a=r.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){r=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){r.label=o[1];break}if(o[0]===6&&r.label<a[1]){r.label=a[1];a=o;break}if(a&&r.label<a[2]){r.label=a[2];r.ops.push(o);break}if(a[2])r.ops.pop();r.trys.pop();continue}o=e.call(t,r)}catch(s){o=[6,s];i=0}finally{n=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-d4857416.system.js","./p-98e9b4f9.system.js"],(function(t){"use strict";var e,r,n,i,a;return{setters:[function(t){e=t.r;r=t.h;n=t.g;i=t.c},function(t){a=t.A}],execute:function(){var o=t("app_loader",function(){function t(t){e(this,t)}t.prototype.wfMessageHandler=function(t){var e=t.detail;if(e.messageType==="START_LOADING")this.visible=true;if(e.messageType==="END_LOADING")this.visible=false};t.prototype.render=function(){if(this.visible)return r("div",null)};Object.defineProperty(t,"style",{get:function(){return"div{position:fixed;left:0;top:0;min-width:100vw;min-height:100vh;z-index:99999999;background:rgba(0,0,0,.611)}div:after{content:\"Loading...\";position:absolute;display:block;background-color:#fff;width:6rem;height:1.5rem;line-height:1.5rem;text-align:center;font-weight:bolder;font-size:1.2rem;color:#8a2be2;border:1px solid #000;border-radius:5px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}"},enumerable:true,configurable:true});return t}());var s=t("app_menu",function(){function t(t){e(this,t)}t.prototype.render=function(){return r("div",null,r("stencil-route-link",{url:"/"},r("i",{class:"material-icons"},"home"),"Home"),r("stencil-route-link",{url:"/vega/content/login"},r("i",{class:"material-icons"},"lock_open"),"Login"),r("stencil-route-link",{url:"/vega/content/register"},r("i",{class:"material-icons"},"account_box"),"Register"),r("stencil-route-link",{url:"/vega/content/banking"},r("i",{class:"material-icons"},"account_balance"),"Banking"))};Object.defineProperty(t,"style",{get:function(){return"\@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons\");div{height:calc(100% - 5px);padding-top:5px;padding-left:5px;font-size:1.2rem}a{display:block;text-decoration:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;line-height:2rem}"},enumerable:true,configurable:true});return t}());var u=t("app_root",function(){function t(t){e(this,t)}t.prototype.render=function(){return r("div",null,r("app-loader",null),r("header",null,r("h1",null,"Stencil App Starter")),r("aside",null,r("app-menu",null)),r("main",null,r("stencil-router",null,r("stencil-route-switch",{scrollTopOffset:0},r("stencil-route",{url:"/",component:"app-home",exact:true}),r("stencil-route",{url:"/content/:process",component:"app-content"})))))};Object.defineProperty(t,"style",{get:function(){return"div{height:100vh}header{background:#5851ff;height:56px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.26);box-shadow:0 2px 5px 0 rgba(0,0,0,.26)}h1,header{color:#fff}h1{font-size:1.4rem;font-weight:500;padding:0 12px}aside{position:absolute;width:200px;height:calc(100% - 56px);border-right:1px solid #5851ff}aside,main{display:inline-block}main{position:relative;left:200px;width:calc(100% - 220px);padding:10px}"},enumerable:true,configurable:true});return t}());var c="/";var l="./";var f=new RegExp(["(\\\\.)","(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),"g");var h=function(t,e){var r=[];var n=0;var i=0;var a="";var o=e&&e.delimiter||c;var s=e&&e.delimiters||l;var u=false;var h;while((h=f.exec(t))!==null){var d=h[0];var y=h[1];var g=h.index;a+=t.slice(i,g);i=g+d.length;if(y){a+=y[1];u=true;continue}var m="";var b=t[i];var O=h[2];var w=h[3];var T=h[4];var x=h[5];if(!u&&a.length){var P=a.length-1;if(s.indexOf(a[P])>-1){m=a[P];a=a.slice(0,P)}}if(a){r.push(a);a="";u=false}var _=m!==""&&b!==undefined&&b!==m;var E=x==="+"||x==="*";var k=x==="?"||x==="*";var A=m||o;var L=w||T;r.push({name:O||n++,prefix:m,delimiter:A,optional:k,repeat:E,partial:_,pattern:L?p(L):"[^"+v(A)+"]+?"})}if(a||i<t.length){r.push(a+t.substr(i))}return r};var v=function(t){return t.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")};var p=function(t){return t.replace(/([=!:$/()])/g,"\\$1")};var d=function(t){return t&&t.sensitive?"":"i"};var y=function(t,e){if(!e)return t;var r=t.source.match(/\((?!\?)/g);if(r){for(var n=0;n<r.length;n++){e.push({name:n,prefix:null,delimiter:null,optional:false,repeat:false,partial:false,pattern:null})}}return t};var g=function(t,e,r){var n=[];for(var i=0;i<t.length;i++){n.push(O(t[i],e,r).source)}return new RegExp("(?:"+n.join("|")+")",d(r))};var m=function(t,e,r){return b(h(t,r),e,r)};var b=function(t,e,r){r=r||{};var n=r.strict;var i=r.end!==false;var a=v(r.delimiter||c);var o=r.delimiters||l;var s=[].concat(r.endsWith||[]).map(v).concat("$").join("|");var u="";var f=false;for(var h=0;h<t.length;h++){var p=t[h];if(typeof p==="string"){u+=v(p);f=h===t.length-1&&o.indexOf(p[p.length-1])>-1}else{var y=v(p.prefix||"");var g=p.repeat?"(?:"+p.pattern+")(?:"+y+"(?:"+p.pattern+"))*":p.pattern;if(e)e.push(p);if(p.optional){if(p.partial){u+=y+"("+g+")?"}else{u+="(?:"+y+"("+g+"))?"}}else{u+=y+"("+g+")"}}}if(i){if(!n)u+="(?:"+a+")?";u+=s==="$"?"$":"(?="+s+")"}else{if(!n)u+="(?:"+a+"(?="+s+"))?";if(!f)u+="(?="+a+"|"+s+")"}return new RegExp("^"+u,d(r))};var O=function(t,e,r){if(t instanceof RegExp){return y(t,e)}if(Array.isArray(t)){return g(t,e,r)}return m(t,e,r)};var w=function(t,e){return new RegExp("^"+e+"(\\/|\\?|#|$)","i").test(t)};var T=function(t,e){return w(t,e)?t.substr(e.length):t};var x=function(t){return t.charAt(t.length-1)==="/"?t.slice(0,-1):t};var P=function(t){return t.charAt(0)==="/"?t:"/"+t};var _=function(t){return t.charAt(0)==="/"?t.substr(1):t};var E=function(t){var e=t||"/";var r="";var n="";var i=e.indexOf("#");if(i!==-1){n=e.substr(i);e=e.substr(0,i)}var a=e.indexOf("?");if(a!==-1){r=e.substr(a);e=e.substr(0,a)}return{pathname:e,search:r==="?"?"":r,hash:n==="#"?"":n,query:{},key:""}};var k=function(t){var e=t.pathname,r=t.search,n=t.hash;var i=e||"/";if(r&&r!=="?"){i+=r.charAt(0)==="?"?r:"?"+r}if(n&&n!=="#"){i+=n.charAt(0)==="#"?n:"#"+n}return i};var A=function(t){if(!t){return{}}return(/^[?#]/.test(t)?t.slice(1):t).split("&").reduce((function(t,e){var r=e.split("="),n=r[0],i=r[1];t[n]=i?decodeURIComponent(i.replace(/\+/g," ")):"";return t}),{})};var L=function(t){return t.charAt(0)==="/"};var S=function(t){return Math.random().toString(36).substr(2,t)};var j=function(t,e){for(var r=e,n=r+1,i=t.length;n<i;r+=1,n+=1){t[r]=t[n]}t.pop()};var R=function(t,e){if(e===void 0){e=""}var r=e&&e.split("/")||[];var n;var i=0;var a=t&&t.split("/")||[];var o=t&&L(t);var s=e&&L(e);var u=o||s;if(t&&L(t)){r=a}else if(a.length){r.pop();r=r.concat(a)}if(!r.length){return"/"}if(r.length){var c=r[r.length-1];n=c==="."||c===".."||c===""}else{n=false}for(var l=r.length;l>=0;l--){var f=r[l];if(f==="."){j(r,l)}else if(f===".."){j(r,l);i++}else if(i){j(r,l);i--}}if(!u){for(;i--;i){r.unshift("..")}}if(u&&r[0]!==""&&(!r[0]||!L(r[0]))){r.unshift("")}var h=r.join("/");if(n&&h.substr(-1)!=="/"){h+="/"}return h};var U=function(t,e){if(t===e){return true}if(t==null||e==null){return false}if(Array.isArray(t)){return Array.isArray(e)&&t.length===e.length&&t.every((function(t,r){return U(t,e[r])}))}var r=typeof t;var n=typeof e;if(r!==n){return false}if(r==="object"){var i=t.valueOf();var a=e.valueOf();if(i!==t||a!==e){return U(i,a)}var o=Object.keys(t);var s=Object.keys(e);if(o.length!==s.length){return false}return o.every((function(r){return U(t[r],e[r])}))}return false};var C=function(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash===e.hash&&t.key===e.key&&U(t.state,e.state)};var I=function(t,e,r,n){var i;if(typeof t==="string"){i=E(t);if(e!==undefined){i.state=e}}else{i=Object.assign({pathname:""},t);if(i.search&&i.search.charAt(0)!=="?"){i.search="?"+i.search}if(i.hash&&i.hash.charAt(0)!=="#"){i.hash="#"+i.hash}if(e!==undefined&&i.state===undefined){i.state=e}}try{i.pathname=decodeURI(i.pathname)}catch(a){if(a instanceof URIError){throw new URIError('Pathname "'+i.pathname+'" could not be decoded. '+"This is likely caused by an invalid percent-encoding.")}else{throw a}}i.key=r;if(n){if(!i.pathname){i.pathname=n.pathname}else if(i.pathname.charAt(0)!=="/"){i.pathname=R(i.pathname,n.pathname)}}else{if(!i.pathname){i.pathname="/"}}i.query=A(i.search||"");return i};var H=0;var M={};var D=1e4;var N=function(t,e){var r=""+e.end+e.strict;var n=M[r]||(M[r]={});var i=JSON.stringify(t);if(n[i]){return n[i]}var a=[];var o=O(t,a,e);var s={re:o,keys:a};if(H<D){n[i]=s;H+=1}return s};var V=function(t,e){if(e===void 0){e={}}if(typeof e==="string"){e={path:e}}var r=e.path,n=r===void 0?"/":r,i=e.exact,a=i===void 0?false:i,o=e.strict,s=o===void 0?false:o;var u=N(n,{end:a,strict:s}),c=u.re,l=u.keys;var f=c.exec(t);if(!f){return null}var h=f[0],v=f.slice(1);var p=t===h;if(a&&!p){return null}return{path:n,url:n==="/"&&h===""?"/":h,isExact:p,params:l.reduce((function(t,e,r){t[e.name]=v[r];return t}),{})}};var q=function(t,e){if(t==null&&e==null){return true}if(e==null){return false}return t&&e&&t.path===e.path&&t.url===e.url&&U(t.params,e.params)};var Y=t("stencil_route",function(){function t(t){e(this,t);this.group=null;this.match=null;this.componentProps={};this.exact=false;this.scrollOnNextRender=false;this.previousMatch=null}t.prototype.computeMatch=function(t){var e=this.group!=null||this.el.parentElement!=null&&this.el.parentElement.tagName.toLowerCase()==="stencil-route-switch";if(!t||e){return}this.previousMatch=this.match;return this.match=V(t.pathname,{path:this.url,exact:this.exact,strict:true})};t.prototype.loadCompleted=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(e){t={};if(this.history&&this.history.location.hash){t={scrollToId:this.history.location.hash.substr(1)}}else if(this.scrollTopOffset){t={scrollTopOffset:this.scrollTopOffset}}if(typeof this.componentUpdated==="function"){this.componentUpdated(t)}else if(this.match&&!q(this.match,this.previousMatch)&&this.routeViewsUpdated){this.routeViewsUpdated(t)}return[2]}))}))};t.prototype.componentDidUpdate=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.componentDidLoad=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:return[4,this.loadCompleted()];case 1:t.sent();return[2]}}))}))};t.prototype.render=function(){if(!this.match||!this.history){return null}var t=Object.assign({},this.componentProps,{history:this.history,match:this.match});if(this.routeRender){return this.routeRender(Object.assign({},t,{component:this.component}))}if(this.component){var e=this.component;return r(e,Object.assign({},t))}};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});Object.defineProperty(t,"style",{get:function(){return"stencil-route.inactive{display:none}"},enumerable:true,configurable:true});return t}());a.injectProps(Y,["location","history","historyType","routeViewsUpdated"]);var $=function(t,e,r){return r(t.confirm(e))};var B=function(t){return t.metaKey||t.altKey||t.ctrlKey||t.shiftKey};var W=function(t){var e=t.navigator.userAgent;if((e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1){return false}return t.history&&"pushState"in t.history};var X=function(t){return t.userAgent.indexOf("Trident")===-1};var K=function(t){return t.userAgent.indexOf("Firefox")===-1};var F=function(t,e){return e.state===undefined&&t.userAgent.indexOf("CriOS")===-1};var G=function(t,e){var r=t[e];var n="__storage_test__";try{r.setItem(n,n);r.removeItem(n);return true}catch(i){return i instanceof DOMException&&(i.code===22||i.code===1014||i.name==="QuotaExceededError"||i.name==="NS_ERROR_DOM_QUOTA_REACHED")&&r.length!==0}};var J=function(t,e){if(t.charAt(0)=="/"&&e.charAt(e.length-1)=="/"){return e.slice(0,e.length-1)+t}return e+t};var z=t("stencil_route_link",function(){function t(t){e(this,t);this.unsubscribe=function(){return};this.activeClass="link-active";this.exact=false;this.strict=true;this.custom="a";this.match=null}t.prototype.componentWillLoad=function(){this.computeMatch()};t.prototype.computeMatch=function(){if(this.location){this.match=V(this.location.pathname,{path:this.urlMatch||this.url,exact:this.exact,strict:this.strict})}};t.prototype.handleClick=function(t){if(B(t)||!this.history||!this.url||!this.root){return}t.preventDefault();return this.history.push(J(this.url,this.root))};t.prototype.render=function(){var t;var e={class:(t={},t[this.activeClass]=this.match!==null,t),onClick:this.handleClick.bind(this)};if(this.anchorClass){e.class[this.anchorClass]=true}if(this.custom==="a"){e=Object.assign({},e,{href:this.url,title:this.anchorTitle,role:this.anchorRole,tabindex:this.anchorTabIndex,"aria-haspopup":this.ariaHaspopup,id:this.anchorId,"aria-posinset":this.ariaPosinset,"aria-setsize":this.ariaSetsize,"aria-label":this.ariaLabel})}return r(this.custom,Object.assign({},e),r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["computeMatch"]}},enumerable:true,configurable:true});return t}());a.injectProps(z,["history","location","root"]);var Q=function(){return((Math.random()*1e17).toString().match(/.{4}/g)||[]).join("-")};var Z=function(t,e,r){return V(t,{path:e,exact:r,strict:true})};var tt=function(t){return t.tagName==="STENCIL-ROUTE"};var et=t("stencil_route_switch",function(){function t(t){e(this,t);this.group=Q();this.subscribers=[];this.queue=i(this,"queue")}t.prototype.componentWillLoad=function(){if(this.location!=null){this.regenerateSubscribers(this.location)}};t.prototype.regenerateSubscribers=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r;var n=this;return __generator(this,(function(i){if(t==null){return[2]}e=-1;this.subscribers=Array.prototype.slice.call(this.el.children).filter(tt).map((function(r,n){var i=Z(t.pathname,r.url,r.exact);if(i&&e===-1){e=n}return{el:r,match:i}}));if(e===-1){return[2]}if(this.activeIndex===e){this.subscribers[e].el.match=this.subscribers[e].match;return[2]}this.activeIndex=e;r=this.subscribers[this.activeIndex];if(this.scrollTopOffset){r.el.scrollTopOffset=this.scrollTopOffset}r.el.group=this.group;r.el.match=r.match;r.el.componentUpdated=function(t){n.queue.write((function(){n.subscribers.forEach((function(t,e){t.el.componentUpdated=undefined;if(e===n.activeIndex){return t.el.style.display=""}if(n.scrollTopOffset){t.el.scrollTopOffset=n.scrollTopOffset}t.el.group=n.group;t.el.match=null;t.el.style.display="none"}))}));if(n.routeViewsUpdated){n.routeViewsUpdated(Object.assign({scrollTopOffset:n.scrollTopOffset},t))}};return[2]}))}))};t.prototype.render=function(){return r("slot",null)};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{location:["regenerateSubscribers"]}},enumerable:true,configurable:true});return t}());a.injectProps(et,["location","routeViewsUpdated"]);var rt=function(t){var e=[];for(var r=1;r<arguments.length;r++){e[r-1]=arguments[r]}if(!t){console.warn.apply(console,e)}};var nt=function(){var t;var e=[];var r=function(e){rt(t==null,"A history supports only one prompt at a time");t=e;return function(){if(t===e){t=null}}};var n=function(e,r,n,i){if(t!=null){var a=typeof t==="function"?t(e,r):t;if(typeof a==="string"){if(typeof n==="function"){n(a,i)}else{rt(false,"A history needs a getUserConfirmation function in order to use a prompt message");i(true)}}else{i(a!==false)}}else{i(true)}};var i=function(t){var r=true;var n=function(){var e=[];for(var n=0;n<arguments.length;n++){e[n]=arguments[n]}if(r){t.apply(void 0,e)}};e.push(n);return function(){r=false;e=e.filter((function(t){return t!==n}))}};var a=function(){var t=[];for(var r=0;r<arguments.length;r++){t[r]=arguments[r]}e.forEach((function(e){return e.apply(void 0,t)}))};return{setPrompt:r,confirmTransitionTo:n,appendListener:i,notifyListeners:a}};var it=function(t,e){if(e===void 0){e="scrollPositions"}var r=new Map;var n=function(e,n){r.set(e,n);if(G(t,"sessionStorage")){var i=[];r.forEach((function(t,e){i.push([e,t])}));t.sessionStorage.setItem("scrollPositions",JSON.stringify(i))}};var i=function(t){return r.get(t)};var a=function(t){return r.has(t)};var o=function(e){n(e,[t.scrollX,t.scrollY])};if(G(t,"sessionStorage")){var s=t.sessionStorage.getItem(e);r=s?new Map(JSON.parse(s)):r}if("scrollRestoration"in t.history){history.scrollRestoration="manual"}return{set:n,get:i,has:a,capture:o}};var at="popstate";var ot="hashchange";var st=function(t,e){if(e===void 0){e={}}var r=false;var n=t.history;var i=t.location;var a=t.navigator;var o=W(t);var s=!X(a);var u=it(t);var c=e.forceRefresh!=null?e.forceRefresh:false;var l=e.getUserConfirmation!=null?e.getUserConfirmation:$;var f=e.keyLength!=null?e.keyLength:6;var h=e.basename?x(P(e.basename)):"";var v=function(){try{return t.history.state||{}}catch(e){return{}}};var p=function(t){t=t||{};var e=t.key,r=t.state;var n=i.pathname,a=i.search,o=i.hash;var s=n+a+o;rt(!h||w(s,h),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+s+'" to begin with "'+h+'".');if(h){s=T(s,h)}return I(s,r,e||S(f))};var d=nt();var y=function(t){u.capture(q.location.key);Object.assign(q,t);q.location.scrollPosition=u.get(q.location.key);q.length=n.length;d.notifyListeners(q.location,q.action)};var g=function(t){if(!F(a,t)){b(p(t.state))}};var m=function(){b(p(v()))};var b=function(t){if(r){r=false;y()}else{var e="POP";d.confirmTransitionTo(t,e,l,(function(r){if(r){y({action:e,location:t})}else{O(t)}}))}};var O=function(t){var e=q.location;var n=E.indexOf(e.key);var i=E.indexOf(t.key);if(n===-1){n=0}if(i===-1){i=0}var a=n-i;if(a){r=true;C(a)}};var _=p(v());var E=[_.key];var A=0;var L=false;var j=function(t){return h+k(t)};var R=function(t,e){rt(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to push when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="PUSH";var a=I(t,e,S(f),q.location);d.confirmTransitionTo(a,r,l,(function(t){if(!t){return}var e=j(a);var s=a.key,u=a.state;if(o){n.pushState({key:s,state:u},"",e);if(c){i.href=e}else{var l=E.indexOf(q.location.key);var f=E.slice(0,l===-1?0:l+1);f.push(a.key);E=f;y({action:r,location:a})}}else{rt(u===undefined,"Browser history cannot push state in browsers that do not support HTML5 history");i.href=e}}))};var U=function(t,e){rt(!(typeof t==="object"&&t.state!==undefined&&e!==undefined),"You should avoid providing a 2nd state argument to replace when the 1st "+"argument is a location-like object that already has state; it is ignored");var r="REPLACE";var a=I(t,e,S(f),q.location);d.confirmTransitionTo(a,r,l,(function(t){if(!t){return}var e=j(a);var s=a.key,u=a.state;if(o){n.replaceState({key:s,state:u},"",e);if(c){i.replace(e)}else{var l=E.indexOf(q.location.key);if(l!==-1){E[l]=a.key}y({action:r,location:a})}}else{rt(u===undefined,"Browser history cannot replace state in browsers that do not support HTML5 history");i.replace(e)}}))};var C=function(t){n.go(t)};var H=function(){return C(-1)};var M=function(){return C(1)};var D=function(e){A+=e;if(A===1){t.addEventListener(at,g);if(s){t.addEventListener(ot,m)}}else if(A===0){t.removeEventListener(at,g);if(s){t.removeEventListener(ot,m)}}};var N=function(t){if(t===void 0){t=""}var e=d.setPrompt(t);if(!L){D(1);L=true}return function(){if(L){L=false;D(-1)}return e()}};var V=function(t){var e=d.appendListener(t);D(1);return function(){D(-1);e()}};var q={length:n.length,action:"POP",location:_,createHref:j,push:R,replace:U,go:C,goBack:H,goForward:M,block:N,listen:V,win:t};return q};var ut="hashchange";var ct={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+_(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:_,decodePath:P},slash:{encodePath:P,decodePath:P}};var lt=function(t,e){if(e===void 0){e={}}var r=false;var n=null;var i=0;var a=false;var o=t.location;var s=t.history;var u=K(t.navigator);var c=e.keyLength!=null?e.keyLength:6;var l=e.getUserConfirmation,f=l===void 0?$:l,h=e.hashType,v=h===void 0?"slash":h;var p=e.basename?x(P(e.basename)):"";var d=ct[v],y=d.encodePath,g=d.decodePath;var m=function(){var t=o.href;var e=t.indexOf("#");return e===-1?"":t.substring(e+1)};var b=function(t){return o.hash=t};var O=function(t){var e=o.href.indexOf("#");o.replace(o.href.slice(0,e>=0?e:0)+"#"+t)};var _=function(){var t=g(m());rt(!p||w(t,p),"You are attempting to use a basename on a page whose URL path does not begin "+'with the basename. Expected path "'+t+'" to begin with "'+p+'".');if(p){t=T(t,p)}return I(t,undefined,S(c))};var E=nt();var A=function(t){Object.assign(J,t);J.length=s.length;E.notifyListeners(J.location,J.action)};var L=function(){var t=m();var e=y(t);if(t!==e){O(e)}else{var i=_();var a=J.location;if(!r&&C(a,i)){return}if(n===k(i)){return}n=null;j(i)}};var j=function(t){if(r){r=false;A()}else{var e="POP";E.confirmTransitionTo(t,e,f,(function(r){if(r){A({action:e,location:t})}else{R(t)}}))}};var R=function(t){var e=J.location;var n=D.lastIndexOf(k(e));var i=D.lastIndexOf(k(t));if(n===-1){n=0}if(i===-1){i=0}var a=n-i;if(a){r=true;Y(a)}};var U=m();var H=y(U);if(U!==H){O(H)}var M=_();var D=[k(M)];var N=function(t){return"#"+y(p+k(t))};var V=function(t,e){rt(e===undefined,"Hash history cannot push state; it is ignored");var r="PUSH";var i=I(t,undefined,S(c),J.location);E.confirmTransitionTo(i,r,f,(function(t){if(!t){return}var e=k(i);var a=y(p+e);var o=m()!==a;if(o){n=e;b(a);var s=D.lastIndexOf(k(J.location));var u=D.slice(0,s===-1?0:s+1);u.push(e);D=u;A({action:r,location:i})}else{rt(false,"Hash history cannot PUSH the same path; a new entry will not be added to the history stack");A()}}))};var q=function(t,e){rt(e===undefined,"Hash history cannot replace state; it is ignored");var r="REPLACE";var i=I(t,undefined,S(c),J.location);E.confirmTransitionTo(i,r,f,(function(t){if(!t){return}var e=k(i);var a=y(p+e);var o=m()!==a;if(o){n=e;O(a)}var s=D.indexOf(k(J.location));if(s!==-1){D[s]=e}A({action:r,location:i})}))};var Y=function(t){rt(u,"Hash history go(n) causes a full page reload in this browser");s.go(t)};var B=function(){return Y(-1)};var W=function(){return Y(1)};var X=function(t,e){i+=e;if(i===1){t.addEventListener(ut,L)}else if(i===0){t.removeEventListener(ut,L)}};var F=function(e){if(e===void 0){e=""}var r=E.setPrompt(e);if(!a){X(t,1);a=true}return function(){if(a){a=false;X(t,-1)}return r()}};var G=function(e){var r=E.appendListener(e);X(t,1);return function(){X(t,-1);r()}};var J={length:s.length,action:"POP",location:M,createHref:N,push:V,replace:q,go:Y,goBack:B,goForward:W,block:F,listen:G,win:t};return J};var ft=function(t,e){var r=t.pathname.indexOf(e)==0?"/"+t.pathname.slice(e.length):t.pathname;return Object.assign({},t,{pathname:r})};var ht={browser:st,hash:lt};var vt=t("stencil_router",function(){function t(t){var r=this;e(this,t);this.root="/";this.historyType="browser";this.titleSuffix="";this.routeViewsUpdated=function(t){if(t===void 0){t={}}if(r.history&&t.scrollToId&&r.historyType==="browser"){var e=r.history.win.document.getElementById(t.scrollToId);if(e){return e.scrollIntoView()}}r.scrollTo(t.scrollTopOffset||r.scrollTopOffset)};this.isServer=i(this,"isServer");this.queue=i(this,"queue")}t.prototype.componentWillLoad=function(){var t=this;this.history=ht[this.historyType](this.el.ownerDocument.defaultView);this.history.listen((function(e){e=ft(e,t.root);t.location=e}));this.location=ft(this.history.location,this.root)};t.prototype.scrollTo=function(t){var e=this.history;if(t==null||this.isServer||!e){return}if(e.action==="POP"&&Array.isArray(e.location.scrollPosition)){return this.queue.write((function(){if(e&&e.location&&Array.isArray(e.location.scrollPosition)){e.win.scrollTo(e.location.scrollPosition[0],e.location.scrollPosition[1])}}))}return this.queue.write((function(){e.win.scrollTo(0,t)}))};t.prototype.render=function(){if(!this.location||!this.history){return}var t={historyType:this.historyType,location:this.location,titleSuffix:this.titleSuffix,root:this.root,history:this.history,routeViewsUpdated:this.routeViewsUpdated};return r(a.Provider,{state:t},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});return t}())}}}));