'use strict';

const core = require('./core-3ce3ee59.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["sirius-analytics_3.cjs",[[1,"sirius-wf",{"baseUrl":[1,"base-url"],"apiKey":[1,"api-key"],"process":[1537],"page":[32],"addActivity":[64],"goto":[64],"loadProcess":[64],"parse":[64],"load":[64],"loadUrl":[64],"hydrate":[64],"dehydrate":[64]}],[0,"sirius-analytics",null,[[4,"click","analyticsHandler"]]],[1,"sirius-page",{"page":[16],"modelService":[16]}]]]], options);
});
