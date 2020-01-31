import{r as t,h as s,c as i}from"./p-d3b2c5b6.js";const e=class{constructor(s){t(this,s)}async analyticsHandler(t){t.path.find(t=>t.hasAttribute&&t.hasAttribute("wf-element"))&&(t.path[0].addEventListener("blur",this.onBlur),e.analyticsService.send("click",t))}onBlur(t){t.target.removeEventListener("blur",this.onBlur),e.analyticsService.send("blur",t)}};e.analyticsService=new class{send(t,s){const i=s.path.find(t=>t.hasAttribute&&t.hasAttribute("wf-element"));if(!i)return;const e=this.createPayload(t,i,s.path);e&&(console.log("ANALYTICS",e),window.postMessage({type:e.type,page:e.page,control:e.control,value:e.value,path:e.wfPath.map(this.getName)},"*"))}getName(t){return t.id?t.id:t.page&&t.page.name?t.page.name:""}createPayload(t,s,i){const e=i.filter(t=>t.nodeName&&-1===t.nodeName.indexOf("document-fragment")),h=e.find(t=>"sirius-page"===t.localName);if(!h)return null;const r=Object.assign({},h.page),n=e.slice(0,e.indexOf(h)+1);return r.name?{type:t,page:r.name,control:s.id,value:s.value,wfPath:n}:null}};const h=class{constructor(s){t(this,s)}async inputHandler(t){if(this.modelService.setModelValue(t.target.id,t.target.value),this.page.isDirty)try{await this.page.validate(this.page.context)}catch(s){}}renderItem(t){return[s(t.tag,Object.assign({"wf-element":!0,data:t,error:t.error,errorMsg:t.errorMessage,onInput:this.inputHandler.bind(this)},t,{context:this.page.context,value:this.modelService.getComponentModelValue(t),caption:this.modelService.getInterpolatedValue(t.caption)})),t.validators?s("span",null,t.errorMessage):null]}render(){if(this.page&&this.page.components)return this.page.components.map(this.renderItem.bind(this))}static get style(){return"input[wf-element][data-error-style=true]{border:1px solid #000}[wf-element]{margin:0 2px}input[wf-element][error=true][data-error-style=true]{border:1px solid var(--error-color,red);background-color:var(--error-bg-color,pink)}span{display:inline-block;color:var(--error-color,red)}"}};class r extends Error{constructor(){super(...arguments),this.type="ValidationError"}}class n{constructor(t,s){this.context=t,this.component=s}static validate(t,s){const i=new n(t,s).validate();return t.container.page=Object.assign({},t.container.page),i}validate(){return this.setErrorState(null),!this.hasValidators()||this.executeValidators()}hasValidators(){return this.component&&this.component.validators&&this.component.validators.length>0}executeValidators(){for(const t of this.component.validators){const s=n.RegisteredValidators.find(s=>s.name===t.name);if(s&&!s.validate(this.context,this.component,t))return!1}return!0}setErrorState(t){this.component.error=t&&t.length>0,this.component.errorMessage=t}}n.RegisteredValidators=[new class extends class{constructor(t){this.name=t}}{validate(t,s,i){const e=t.modelService.getModelValue(s.id);return null!=e&&null!=e&&0!=e.toString().trim().length||(s.error="true",s.errorMessage=i.message,!1)}}("Required")];class c{constructor(){this.type=c.type,this.execute=t=>{t.container.page=null,this.context=t,this.isDirty=!1,this.components.filter(t=>t.validators).forEach(t=>{t.error="false",t.errorMessage=""}),setTimeout(()=>{t.container.page=this},0)},this.validate=t=>new Promise((s,i)=>{const e=this.components.filter(t=>t.validators);let h=!0;for(var c of(this.isDirty=!0,e))h=h&&n.validate(t,c);h?s(!0):i(new r("Validation Failed"))})}static create(t){return Object.assign(new c,t)}}c.type="page-activity";class a{constructor(){this.type=a.type,this.execute=t=>{this.eval(this.expression,t),this.next&&this.next.length>0&&t.wfService.setNextAction(this.next,this)}}static create(t){return Object.assign(new a,t)}eval(t,s){return new Function("context","model",t)(s,s.model)}}a.type="code-activity";class o extends a{constructor(){super(...arguments),this.type=o.type,this.execute=t=>{const s=super.eval(`return ${this.left} ${this.equality} ${this.right};`,t);t.wfService.setNextAction(s?this.trueAction:this.falseAction,this)}}static create(t){return Object.assign(new o,t)}}o.type="decision-activity";class l{constructor(t,s){this.rawUrl=t,this.method=s}get url(){return this.rawUrl}get headers(){return{"Content-Type":"application/json","api-key":this.apiKey}}}class u extends l{constructor(t,s,i){super(t,s),this.modelService=i}get url(){return this.getUrlWithValuesFromModel()}getUrlWithValuesFromModel(){let t=this.rawUrl;return t.match(/{[\w|\.]+}/g).map(this.createValueItem.bind(this)).forEach(s=>t=t.replace(s.key,s.value||"")),t}createValueItem(t){const s=t.substring(1,t.length-1);return{key:t,value:this.modelService.getValue(s,this.modelService.getModel())}}}class d{constructor(){this.type=d.type,this.execute=t=>{const s=new u(this.url,this.method,t.modelService);return t.http.fetch(s,this.mappings).then(()=>t.wfService.setNextAction(this.next,this))}}static create(t){return Object.assign(new d,t)}}d.type="api-activity";class y{constructor(){this.type=y.type,this.execute=t=>{let s=this.value||"";this.value.startsWith("{")&&this.value.endsWith("}")&&(s=t.modelService.getValue(this.value.substring(1,this.value.length-1),t.model)),t.modelService.setModelValue(this.key,s),t.wfService.setNextAction(this.next,this)}}static create(t){return Object.assign(new y,t)}}y.type="assign-activity";class p{constructor(){this.type=p.type,this.execute=t=>t.container.ipc(this.process,this.next)}static create(t){return Object.assign(new p,t)}}p.type="ipc-activity";class w{constructor(){this.type=w.type,this.execute=t=>t.container.completed(t.container.process)}static create(t){return Object.assign(new w,t)}}w.type="completed-activity";class x{constructor(){this.type=x.type,this.execute=t=>{const s=this.UUID();t.container.dehydrate(s),-1===this.url.indexOf("?")?document.location.href=`${this.url}?sessionId=${s}`:document.location.href=`${this.url}&sessionId=${s}`}}static create(t){return Object.assign(new x,t)}UUID(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var s=16*Math.random()|0;return("x"==t?s:3&s|8).toString(16)}))}}x.type="redirect-activity";class g{static linkActivities(t){t.activities.forEach(t=>{const s=g.activities.find(s=>s.type===t.type);s&&s.create&&Object.assign(t,s.create(t))})}}g.activities=[{type:c.type,create:c.create},{type:a.type,create:a.create},{type:o.type,create:o.create},{type:y.type,create:y.create},{type:d.type,create:d.create},{type:p.type,create:p.create},{type:w.type,create:w.create},{type:x.type,create:x.create}];class f{setNextAction(t,s){this.action=t,this.wfChangeHandler&&this.wfChangeHandler(this.action,this.process,s)}setProcess(t){this.process=t,this.wfChangeHandler&&this.wfChangeHandler(this.action,this.process,null)}addActivity(t,s){g.activities.find(s=>s.type===t)||g.activities.push({type:t,create:s})}parse(t){try{const s=JSON.parse(t);return g.linkActivities(s),s}catch(s){return console.error(s),null}}}var O,v,m;!function(t){t.StartLoading="START_LOADING",t.EndLoading="END_LOADING",t.Error="ERROR",t.ValidationError="VALIDATION_ERROR"}(O||(O={}));class b{constructor(t,s,i){this.messageType=t,this.description=s,this.stack=i}}class I{constructor(t,s,i,e,h){this.model=t,this.modelService=s,this.wfService=i,this.http=e,this.container=h}}class j{constructor(t,s,i,e){this.http=t,this.wfService=s,this.modelService=i,this.container=e,this.hasError=!1,this.context=new I({},this.modelService,this.wfService,this.http,this.container)}handle(){this.wfService.wfChangeHandler=this.handleWfChange.bind(this),this.modelService.modelChangedHandler=this.handleModelChanged.bind(this)}handleWfChange(t,s,i){this.hasError=!1,this.currProcess=s,this.currAction=t||"start",this.executeActivity(i)}handleModelChanged(t){this.context.model=t}executeActivity(t){if(!this.hasActivities())return;const s=this.currProcess.activities.find(t=>t.name===this.currAction);this.canExecute(s)&&(this.hasError=!1,this.sendMessage(new b(O.StartLoading,"Loading...")),this.validate(t).then(()=>s.execute(this.context)).then(()=>this.actionExecuted()).catch(t=>this.handleError(t)))}async validate(t){if(this.shouldSkipValidate(t))return!0;const s=this.currProcess.activities.find(t=>t.name===this.lastAction);return s&&s.validate?s.validate(this.context):void 0}shouldSkipValidate(t){return t&&t.data&&t.data.noValidate||this.currAction===this.lastAction}actionExecuted(){this.sendMessage(new b(O.EndLoading)),this.hasError||(this.lastAction=this.currAction)}handleError(t){this.hasError=!0,this.modelService.setModelValue("message",new b(O.EndLoading,t.message)),this.sendMessage(new b(t instanceof r?O.ValidationError:O.Error,t.message,t.stack))}hasActivities(){return this.currProcess&&this.currProcess.activities}canExecute(t){return t&&t.execute}sendMessage(t){this.modelService.setModelValue("message",t),this.context.container.wfMessage.emit(t)}}class S{constructor(){this.model={},this.onInput=this.inputHandler.bind(this)}setModelValue(t,s){this.model=this.merge(this.model,t,s),this.modelChangedHandler&&this.modelChangedHandler(this.model)}getComponentModelValue(t){const s=this.getModel();let i;return t&&t.id&&s&&(i=this.getModelValue(t.id)),void 0===i&&t.value&&(i=t.value,this.setModelValue(t.id,i)),i}getModelValue(t){return this.getValue(t,this.getModel())}getInterpolatedValue(t){if(!t)return t;const s=t.match(/\{\{(?:\w+)\}\}/g);return s&&0!==s.length?s.reduce((t,s)=>this.replaceAll(t,s),t):t}getModel(){return Object.assign({},this.model)}setModel(t){this.model=Object.assign({},t)}getValue(t,s){return t.split(".").reduce((t,s)=>t?t[s]:void 0,s)}replaceAll(t,s){const i=this.getModelValue(s.substring(2,s.length-2));return t.replace(s,i)}inputHandler(t){const s=t.currentTarget.closest("[wf-element]");this.setModelValue(s.id,s.value)}merge(t,s,i){if(!s)return;let e=Object.assign({},t);return s.split(".").reduce((t,s,e,h)=>(t[s]=e==h.length-1?i:Object.assign({},t[s]),t[s]),e),e}}!function(t){t.GET="get",t.POST="post",t.PUT="put",t.DELETE="delete",t.PATCH="patch"}(v||(v={}));class _{constructor(t){this.http=t}load(t){const s=new l(`${this.baseUrl}\\${t}`,v.GET);return s.apiKey=this.apiKey,this.http.fetchData(s)}}!function(t){t.In="in",t.Out="out",t.InOut="inout"}(m||(m={}));class A{constructor(t){this.modelService=t}async fetchData(t,s=null){return this.fetch(t,null,s,!1)}async fetch(t,s=null,i=null,e=!0){const h=await fetch(t.url,this.getConfig(t,s,i)),r=await h.json();return this.modelService&&e?this.setModelValues(r,s):r}getConfig(t,s,i=null){return{method:t.method,mode:"cors",headers:t.headers,redirect:"follow",referrer:"no-referrer",body:i?JSON.stringify(i):this.getBody(t,s)}}getBody(t,s){if(t.method===v.GET||t.method===v.DELETE)return null;let i={};const e=this.modelService.getModel();return s.filter(t=>t.direction===m.Out||t.direction===m.InOut).forEach(t=>Object.assign(i,{[t.client]:this.modelService.getValue(t.client,e)})),JSON.stringify(i)}setModelValues(t,s){if(!s||0===s.length)return Object.keys(t).forEach(s=>this.modelService.setModelValue(s,t[s]));s.filter(t=>t.direction===m.Out||t.direction===m.InOut).forEach(s=>this.modelService.setModelValue(s.client,this.modelService.getValue(s.remote,t)))}}class E{setItem(t,s){sessionStorage.setItem(t,JSON.stringify(s))}getItem(t){const s=sessionStorage.getItem(t);return s?JSON.parse(s):null}clear(){sessionStorage.clear()}}const M=class{constructor(s){t(this,s),this.ipcHistory=[],this.wfMessage=i(this,"wfMessage",7)}async addActivity(t,s){this.wfService.addActivity(t,s)}async goto(t){this.wfService.setNextAction(t,this)}async loadProcess(t,s="start"){this.page=null,this.wfService.setProcess(t),this.goto(s)}async parse(t){return this.wfService.parse(t)}async load(t,s="start"){"object"==typeof t&&(t=JSON.stringify(t));const i=this.wfService.parse(t);if(i)return this.loadProcess(i,s)}async loadUrl(t,s="start"){try{await this.load(await this.wfLoaderHandler.load(t),s),this.process=t}catch(i){}}async hydrate(t,s,i="start"){const e=this.persistance.getItem(`${s}_IPC`)||[],h=this.persistance.getItem(`${s}_MODEL`)||this.modelService.getModel();this.loadUrl(t,i),this.ipcHistory=e,this.modelService.setModel(h)}async dehydrate(t){this.persistance.clear(),this.persistance.setItem(`${t}_IPC`,this.ipcHistory),this.persistance.setItem(`${t}_MODEL`,this.modelService.getModel())}async ipc(t,s=null){try{this.ipcHistory.push(new V(this.process,t,s)),this.persistance.setItem("WF_SIRIUS_IPC",this.ipcHistory),await this.loadUrl(t,"start")}catch(i){}}async completed(t){const s=this.ipcHistory.pop();if(this.persistance.setItem("WF_SIRIUS_IPC",this.ipcHistory),!s||s.process!==t)return this.ipcHistory=[],void this.persistance.setItem("WF_SIRIUS_IPC",this.ipcHistory);try{await this.loadUrl(s.parent,s.next||"start")}catch(i){}}async componentWillLoad(){this.persistance=new E,this.wfService=new f,this.modelService=new S,this.http=new A(this.modelService),this.wfHandler=new j(this.http,this.wfService,this.modelService,this),this.wfHandler.handle(),this.wfLoaderHandler=new _(this.http),this.wfLoaderHandler.apiKey=this.apiKey,this.wfLoaderHandler.baseUrl=this.baseUrl,this.process&&this.loadUrl(this.process)}render(){return s("sirius-page",{page:this.page,modelService:this.modelService})}};class V{constructor(t,s,i){this.parent=t,this.process=s,this.next=i}}export{e as sirius_analytics,h as sirius_page,M as sirius_wf};