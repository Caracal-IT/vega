import { Component, h } from '@stencil/core';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <div>
        <app-loader></app-loader>
        <header>
          <h1>Stencil App Starter</h1>
        </header>

        <aside>
          <app-menu></app-menu>
        </aside>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/content/:process' component='app-content' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
