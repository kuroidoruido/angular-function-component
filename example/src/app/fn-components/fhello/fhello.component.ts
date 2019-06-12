import { css, html, StatelessComponent } from 'angular-function-component';

export const FHelloComponent = StatelessComponent('fc-hello', html`<p>Hello</p>`, css`p{color: red;}`);
