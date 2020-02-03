import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'app-loader',
  styleUrl: 'app-loader.css',
  shadow: true
})
export class AppLoader {
  @State()
  visible: boolean;

  @Listen('wfMessage', { target: 'document' })
  wfMessageHandler(event: CustomEvent) {
    const message = event.detail;

    if(message.messageType === "START_LOADING")
      this.visible = true;

    if(message.messageType === "END_LOADING")
      this.visible = false;
  }

  render() {
    if(this.visible)
      return <div></div>;
  }
}
