'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-e539ec59.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["rigel-button_6.cjs",[[1,"rigel-button",{"caption":[1],"next":[1],"context":[16]}],[1,"rigel-check",{"caption":[1],"checked":[1540]}],[1,"rigel-field",{"caption":[1],"type":[1],"value":[1537],"next":[1],"context":[16]}],[1,"rigel-header",{"caption":[1],"size":[2]}],[1,"rigel-label",{"caption":[1]}],[1,"rigel-radio",{"caption":[1],"group":[1],"checked":[1540]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
