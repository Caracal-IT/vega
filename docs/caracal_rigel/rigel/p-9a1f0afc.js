let e,t,n=0,l=!1;const r="undefined"!=typeof window?window:{},o=r.document||{head:{}},s={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l)},i=(()=>(o.head.attachShadow+"").indexOf("[native")>-1)(),c=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),a=new WeakMap,u=e=>a.get(e),f=(e,t)=>a.set(t.o=e,t),p=(e,t)=>t in e,m=e=>console.error(e),d=new Map,$=new Map,h=[],w=[],y=[],b=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&s.t?v(_):s.raf(_))},g=(e,t)=>{let n=0,l=0;for(;n<e.length&&(l=performance.now())<t;)try{e[n++](l)}catch(r){m(r)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},_=()=>{n++,(e=>{for(let n=0;n<e.length;n++)try{e[n](performance.now())}catch(t){m(t)}e.length=0})(h);const e=2==(6&s.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;g(w,e),g(y,e),w.length>0&&(y.push(...w),w.length=0),(l=h.length+w.length+y.length>0)?s.raf(_):n=0},v=e=>Promise.resolve().then(e),j=b(w,!0),S={},M=e=>"object"==(e=typeof e)||"function"===e,R=()=>r.CSS&&r.CSS.supports&&r.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_rigel("./p-73bc5e11.js").then(()=>{s.s=r.__stencil_cssshim}),k=()=>{s.s=r.__stencil_cssshim;const e=Array.from(o.querySelectorAll("script")).find(e=>new RegExp("/rigel(\\.esm)?\\.js($|\\?|#)").test(e.src)||"rigel"===e.getAttribute("data-stencil-namespace")),t=e["data-opts"]||{};return"onbeforeload"in e&&!history.scrollRestoration?{then(){}}:(t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,r.location.href)).href,P(t.resourcesUrl,e),window.customElements?Promise.resolve(t):__sc_import_rigel("./p-3b66a627.js").then(()=>t))},P=(e,t)=>{const n=`__sc_import_${"rigel".replace(/\s|-/g,"_")}`;try{r[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const s=new Map;r[n]=l=>{const i=new URL(l,e).href;let c=s.get(i);if(!c){const e=o.createElement("script");e.type="module",e.crossOrigin=t.crossOrigin,e.src=URL.createObjectURL(new Blob([`import * as m from '${i}'; window.${n}.m = m;`],{type:"application/javascript"})),c=new Promise(t=>{e.onload=()=>{t(r[n].m),e.remove()}}),s.set(i,c),o.head.appendChild(e)}return c}}},U=new WeakMap,L=e=>"sc-"+e,O=(e,t,...n)=>{let l=null,r=!1,o=!1,s=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!M(l))&&(l=String(l)),r&&o?s[s.length-1].i+=l:s.push(r?x(null,l):l),o=r)};if(i(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}if("function"==typeof e)return e(t,s,E);const c=x(e,null);return c.u=t,s.length>0&&(c.p=s),c},x=(e,t)=>({t:0,$:e,i:t,h:null,p:null,u:null}),C={},E={forEach:(e,t)=>e.map(A).forEach(t),map:(e,t)=>e.map(A).map(t).map(F)},A=e=>({vattrs:e.u,vchildren:e.p,vkey:e.g,vname:e._,vtag:e.$,vtext:e.i}),F=e=>{const t=x(e.vtag,e.vtext);return t.u=e.vattrs,t.p=e.vchildren,t.g=e.vkey,t._=e.vname,t},T=(e,t,n,l,o,i)=>{if(n===l)return;let c=p(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,r=W(n),o=W(l);t.remove(...r.filter(e=>e&&!o.includes(e))),t.add(...o.filter(e=>e&&!r.includes(e)))}else if(c||"o"!==t[0]||"n"!==t[1]){const r=M(l);if((c||r&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{let r=null==l?"":l;"list"===t?c=!1:null!=n&&e[t]==r||(e[t]=r)}}catch(u){}null==l||!1===l?e.removeAttribute(t):(!c||4&i||o)&&!r&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):p(r,a)?a.slice(2):a[2]+t.slice(3),n&&s.rel(e,t,n,!1),l&&s.ael(e,t,l,!1)},H=/\s/,W=e=>e?e.split(H):[],q=(e,t,n,l)=>{const r=11===t.h.nodeType&&t.h.host?t.h.host:t.h,o=e&&e.u||S,s=t.u||S;for(l in o)l in s||T(r,l,o[l],void 0,n,t.t);for(l in s)T(r,l,o[l],s[l],n,t.t)},B=(t,n,l)=>{let r,s,i=n.p[l],c=0;if(null!==i.i)r=i.h=o.createTextNode(i.i);else if(r=i.h=o.createElement(i.$),q(null,i,!1),null!=e&&r["s-si"]!==e&&r.classList.add(r["s-si"]=e),i.p)for(c=0;c<i.p.length;++c)s=B(t,i,c),s&&r.appendChild(s);return r},N=(e,n,l,r,o,s)=>{let i,c=e;for(c.shadowRoot&&c.tagName===t&&(c=c.shadowRoot);o<=s;++o)r[o]&&(i=B(null,l,o),i&&(r[o].h=i,c.insertBefore(i,n)))},V=(e,t,n,l)=>{for(;t<=n;++t)(l=e[t])&&l.h.remove()},z=(e,t)=>e.$===t.$,D=(e,t)=>{const n=t.h=e.h,l=e.p,r=t.p;null===t.i?(q(e,t,!1),null!==l&&null!==r?((e,t,n,l)=>{let r,o=0,s=0,i=t.length-1,c=t[0],a=t[i],u=l.length-1,f=l[0],p=l[u];for(;o<=i&&s<=u;)null==c?c=t[++o]:null==a?a=t[--i]:null==f?f=l[++s]:null==p?p=l[--u]:z(c,f)?(D(c,f),c=t[++o],f=l[++s]):z(a,p)?(D(a,p),a=t[--i],p=l[--u]):z(c,p)?(D(c,p),e.insertBefore(c.h,a.h.nextSibling),c=t[++o],p=l[--u]):z(a,f)?(D(a,f),e.insertBefore(a.h,c.h),a=t[--i],f=l[++s]):(r=B(t&&t[s],n,s),f=l[++s],r&&c.h.parentNode.insertBefore(r,c.h));o>i?N(e,null==l[u+1]?null:l[u+1].h,n,l,s,u):s>u&&V(t,o,i)})(n,l,t,r):null!==r?(null!==e.i&&(n.textContent=""),N(n,null,t,r,0,r.length-1)):null!==l&&V(l,0,l.length-1)):e.i!==t.i&&(n.data=t.i)},G=(e,t)=>{t&&!e.v&&t["s-p"].push(new Promise(t=>e.v=t))},I=(e,t,n,l)=>{if(t.t|=16,4&t.t)return void(t.t|=512);const r=t.o,o=()=>J(e,t,n,r,l);return G(t,t.j),Y(void 0,()=>j(o))},J=(n,l,r,s,c)=>{const a=n["s-rc"];c&&((e,t)=>{const n=((e,t)=>{let n=L(t.S),l=$.get(n);if(e=11===e.nodeType?e:o,l)if("string"==typeof l){let t,r=U.get(e=e.head||e);r||U.set(e,r=new Set),r.has(n)||(t=o.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link")),r&&r.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n})(i&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t);10&t.t&&(e["s-sc"]=n,e.classList.add(n+"-h"))})(n,r),((n,l,r,o)=>{t=n.tagName;const s=l.M||x(null,null),i=(c=o)&&c.$===C?o:O(null,null,o);var c;r.R&&(i.u=i.u||{},r.R.forEach(([e,t])=>i.u[t]=n[e])),i.$=null,i.t|=4,l.M=i,i.h=s.h=n.shadowRoot||n,e=n["s-sc"],D(s,i)})(n,l,r,K(s)),l.t&=-17,l.t|=2,a&&(a.forEach(e=>e()),n["s-rc"]=void 0);{const e=n["s-p"],t=()=>Q(n,l,r);0===e.length?t():(Promise.all(e).then(t),l.t|=4,e.length=0)}},K=e=>{try{e=e.render()}catch(t){m(t)}return e},Q=(e,t,n)=>{const l=t.j;64&t.t||(t.t|=64,e.classList.add("hydrated"),t.k(e),l||X()),t.v&&(t.v(),t.v=void 0),512&t.t&&v(()=>I(e,t,n,!1)),t.t&=-517},X=()=>{o.documentElement.classList.add("hydrated"),s.t|=2},Y=(e,t)=>e&&e.then?e.then(t):t(),Z=(e,t,n)=>{if(t.P){const l=Object.entries(t.P),r=e.prototype;if(l.forEach(([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(r,e,{get(){return t=e,u(this).U.get(t);var t},set(n){((e,t,n,l)=>{const r=u(this),o=r.L,s=r.U.get(t),i=r.t,c=r.o;var a,f;f=l.P[t][0],(n=null==(a=n)||M(a)?a:4&f?"false"!==a&&(""===a||!!a):2&f?parseFloat(a):1&f?String(a):a)===s||8&i&&void 0!==s||(r.U.set(t,n),c&&2==(18&i)&&I(o,r,l,!1))})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;r.attributeChangedCallback=function(e,t,l){s.jmp(()=>{const t=n.get(e);this[t]=(null!==l||"boolean"!=typeof this[t])&&l})},e.observedAttributes=l.filter(([e,t])=>15&t[0]).map(([e,l])=>{const r=l[1]||e;return n.set(r,e),512&l[0]&&t.R.push([e,r]),r})}}return e},ee=(e,t={})=>{const n=[],l=t.exclude||[],f=o.head,p=r.customElements,h=f.querySelector("meta[charset]"),w=o.createElement("style"),y=[];let b,g=!0;Object.assign(s,t),s.l=new URL(t.resourcesUrl||"./",o.baseURI).href,t.syncQueue&&(s.t|=4),e.forEach(e=>e[1].forEach(t=>{const r={t:t[0],S:t[1],P:t[2],O:t[3]};r.P=t[2],r.R=[],!i&&1&r.t&&(r.t|=8);const o=r.S,f=class extends HTMLElement{constructor(e){super(e),(e=>{const t={t:0,L:e,U:new Map};t.C=new Promise(e=>t.k=e),e["s-p"]=[],e["s-rc"]=[],a.set(e,t)})(e=this),1&r.t&&(i?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){b&&(clearTimeout(b),b=null),g?y.push(this):s.jmp(()=>((e,t)=>{if(0==(1&s.t)){const n=()=>{},l=u(e);if(!(1&l.t)){l.t|=1;{let t=e;for(;t=t.parentNode||t.host;)if(t["s-p"]){G(l,l.j=t);break}}t.P&&Object.entries(t.P).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),v(()=>(async(e,t,n,l,r)=>{if(0==(32&t.t)){t.t|=32;{if((r=(e=>{const t=e.S.replace(/-/g,"_"),n=e.A,l=d.get(n);return l?l[t]:__sc_import_rigel(`./${n}.entry.js`).then(e=>(d.set(n,e),e[t]),m)})(n)).then){const e=()=>{};r=await r,e()}r.isProxied||(Z(r,n,2),r.isProxied=!0);const e=()=>{};t.t|=8;try{new r(t)}catch(i){m(i)}t.t&=-9,e()}const e=L(n.S);if(!$.has(e)&&r.style){const t=()=>{};let l=r.style;8&n.t&&(l=await __sc_import_rigel("./p-affe7c09.js").then(t=>t.scopeCss(l,e,!1))),((e,t,n)=>{let l=$.get(e);c&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,$.set(e,l)})(e,l,!!(1&n.t)),t()}}const o=t.j,s=()=>I(e,t,n,!0);o&&o["s-rc"]?o["s-rc"].push(s):s()})(e,l,t))}n()}})(this,r))}disconnectedCallback(){s.jmp(()=>{})}forceUpdate(){((e,t)=>{{const n=u(e);n.L.isConnected&&2==(18&n.t)&&I(e,n,t,!1)}})(this,r)}componentOnReady(){return u(this).C}};r.A=e[0],l.includes(o)||p.get(o)||(n.push(o),p.define(o,Z(f,r,1)))})),w.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",w.setAttribute("data-styles",""),f.insertBefore(w,h?h.nextSibling:f.firstChild),g=!1,y.length>0?y.forEach(e=>e.connectedCallback()):s.jmp(()=>b=setTimeout(X,30,"timeout"))};export{C as H,R as a,ee as b,O as h,k as p,f as r};