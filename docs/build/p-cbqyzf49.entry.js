import{r as s,h as t,g as e}from"./p-d98e9160.js";const r=class{constructor(t){s(this,t)}componentDidLoad(){const s=new URLSearchParams(window.location.search),t=s.get("process"),e=s.get("activity")||"start",r=s.get("sessionId"),i=this.el.shadowRoot.querySelector("sirius-wf");null!==r&&i.setAttribute("wf-session-id",r),t&&e&&i.hydrate(t,r,e)}render(){if(this.match&&this.match.params.process)return t("sirius-wf",{"api-key":"da3156ae-fb51-4d09-80da-8f06b2d23504",process:this.match.params.process+".wf.json","base-url":"../vega/wf/"})}get el(){return e(this)}static get style(){return":host,sirius-wf{padding:5px}sirius-wf{position:relative;display:block;top:40px;text-align:center;line-height:36px;margin:auto;width:450px;min-height:100px;border:1px solid #000;border-radius:10px}"}};export{r as app_content};