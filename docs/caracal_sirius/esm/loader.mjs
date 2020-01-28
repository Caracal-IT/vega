import { a as patchEsm, b as bootstrapLazy } from './core-c51dcb90.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["sirius-page_2",[[1,"sirius-wf",{"page":[32],"addActivity":[64],"goto":[64],"loadProcess":[64],"parse":[64],"load":[64]}],[1,"sirius-page",{"page":[16],"modelService":[16]}]]]], options);
  });
};

export { defineCustomElements };
