import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
  shadow: true
})
export class AppMenu {
  render() {
      return(
        <div>
          <stencil-route-link url='/'><i class="material-icons">home</i>Home</stencil-route-link>
          <stencil-route-link url='/content/login'><i class="material-icons">lock_open</i>Login</stencil-route-link>
          <stencil-route-link url='/content/register'><i class="material-icons">account_box</i>Register</stencil-route-link>
          <stencil-route-link url='/content/banking'><i class="material-icons">account_balance</i>Banking</stencil-route-link>
        </div>
      );
  }
}
