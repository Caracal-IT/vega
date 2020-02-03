import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://myapp.local/',
      copy: [
        { src: 'workflow', dest: 'wf' },
        { src: '../node_modules/caracal_rigel/dist', dest: '../www/caracal_rigel' },
        { src: '../node_modules/caracal_sirius/dist', dest: '../www/caracal_sirius' }
      ]
    }
    ,
    {
      type: 'www',
      dir: 'docs',
      serviceWorker: null,
      copy: [
        { src: '../www', dest: '' }
      ]
    }

  ]
};
