'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-05e63365.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["sirius-analytics_3.cjs",[[1,"sirius-wf",{"wfSessionId":[1537,"wf-session-id"],"baseUrl":[1,"base-url"],"apiKey":[1,"api-key"],"process":[1537],"page":[32],"addActivity":[64],"goto":[64],"loadProcess":[64],"loadUrl":[64],"hydrate":[64],"dehydrate":[64]}],[0,"sirius-analytics",null,[[4,"click","analyticsHandler"],[4,"wfMessage","wfMessage"]]],[1,"sirius-page",{"page":[16],"modelService":[16]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
