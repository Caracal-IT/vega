'use strict';

const core = require('./core-c2dccf40.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["sirius-page_2.cjs",[[1,"sirius-wf",{"page":[32],"addActivity":[64],"goto":[64],"loadProcess":[64],"parse":[64],"load":[64]}],[1,"sirius-page",{"page":[16],"modelService":[16]}]]]], options);
});
