import { Component, Element, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-content',
  styleUrl: 'app-content.css',
  shadow: true
})
export class AppContent {
  @Prop() match: MatchResults;
  @Element() el : HTMLElement;

  componentDidLoad() {
      const urlParams = new URLSearchParams(window.location.search);
      const process = urlParams.get('process');
      const activity = urlParams.get('activity')||"start";
      const sessionId = urlParams.get('sessionId');

      const wf: any = this.el.shadowRoot.querySelector("sirius-wf");

      if(sessionId !== null)
          wf.setAttribute("wf-session-id", sessionId);

      if(process && activity)
        wf.hydrate(process, sessionId, activity);
  }

  render() {
    if (this.match && this.match.params.process) {
      return (
        <sirius-wf
            api-key="da3156ae-fb51-4d09-80da-8f06b2d23504"
            process={this.match.params.process + ".wf.json"}
            base-url="../vega/wf">
        </sirius-wf>
      );
    }
  }
}
