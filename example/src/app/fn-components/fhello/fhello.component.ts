import { css, html, StatelessComponent } from 'angular-function-component';

export const FHelloComponent = StatelessComponent(
  'fc-hello',
  ['[world]', '(toggle)'],
  html`
    <p>Hello, <span (click)="toggle.emit($event)">{{world}}</span>!</p>
  `,
  css`
    p {
      color: red;
    }
  `,
);
