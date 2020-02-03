/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';
import {
  Page,
} from './model/Page.model';
import {
  ModelService,
} from './services/model.service';

export namespace Components {
  interface SiriusAnalytics {}
  interface SiriusPage {
    'modelService': ModelService;
    'page': Page;
  }
  interface SiriusWf {
    'addActivity': (type: string, create: any) => Promise<void>;
    'apiKey': string;
    'baseUrl': string;
    'dehydrate': (sessionId: string) => Promise<void>;
    'goto': (activity: string) => Promise<void>;
    'hydrate': (process: string, sessionId: string, activity?: string) => Promise<void>;
    'loadProcess': (processDef: string | object, activity?: string) => Promise<void>;
    'loadUrl': (process: string, activity?: string) => Promise<import("D:/Development/Labs/Ettiene/sirius/src/model/Process.model").Process>;
    'process': string;
    'wfSessionId': string;
  }
}

declare global {


  interface HTMLSiriusAnalyticsElement extends Components.SiriusAnalytics, HTMLStencilElement {}
  var HTMLSiriusAnalyticsElement: {
    prototype: HTMLSiriusAnalyticsElement;
    new (): HTMLSiriusAnalyticsElement;
  };

  interface HTMLSiriusPageElement extends Components.SiriusPage, HTMLStencilElement {}
  var HTMLSiriusPageElement: {
    prototype: HTMLSiriusPageElement;
    new (): HTMLSiriusPageElement;
  };

  interface HTMLSiriusWfElement extends Components.SiriusWf, HTMLStencilElement {}
  var HTMLSiriusWfElement: {
    prototype: HTMLSiriusWfElement;
    new (): HTMLSiriusWfElement;
  };
  interface HTMLElementTagNameMap {
    'sirius-analytics': HTMLSiriusAnalyticsElement;
    'sirius-page': HTMLSiriusPageElement;
    'sirius-wf': HTMLSiriusWfElement;
  }
}

declare namespace LocalJSX {
  interface SiriusAnalytics {}
  interface SiriusPage {
    'modelService'?: ModelService;
    'page'?: Page;
  }
  interface SiriusWf {
    'apiKey'?: string;
    'baseUrl'?: string;
    'onWfMessage'?: (event: CustomEvent<any>) => void;
    'process'?: string;
    'wfSessionId'?: string;
  }

  interface IntrinsicElements {
    'sirius-analytics': SiriusAnalytics;
    'sirius-page': SiriusPage;
    'sirius-wf': SiriusWf;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'sirius-analytics': LocalJSX.SiriusAnalytics & JSXBase.HTMLAttributes<HTMLSiriusAnalyticsElement>;
      'sirius-page': LocalJSX.SiriusPage & JSXBase.HTMLAttributes<HTMLSiriusPageElement>;
      'sirius-wf': LocalJSX.SiriusWf & JSXBase.HTMLAttributes<HTMLSiriusWfElement>;
    }
  }
}


