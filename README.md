# angular-function-component

A tiny package to create angular component as functions.

**Disclaimer:** This is a very experimental library. You might not use it in production for now.

## Goal of this project

The goal of this project is to experiment a new way to make stateless component without using class nor multiple files nor angular cli.

## Simple sample

### Vanilla Angular

- hello.component.ts
```typescript
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloComponent {

  constructor() { }
}
```

- hello.component.html
```html
<p>Hello, world!</p>
```

- hello.component.css
```css
p {
    color: red;
}
```

### With angular-function-component


- hello.component.ts
```typescript
import { css, html, StatelessComponent } from 'angular-function-component';

export const HelloComponent = StatelessComponent(
    'fc-hello', html`<p>Hello</p>`, css`p{color: red;}`);
```

## Q&A

### How to have completion and coloration on html and css?

As we use html and css template tag like lit-element or others libraries/frameworks, we can find some editor/IDE extensions to doing it.

For VSCode/VSCodium, you can install these:
- html : https://marketplace.visualstudio.com/items?itemName=bierner.lit-html
- css : https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components

### Does html or css template tag create weird things?

html and css tags are just alias to String.raw that do pretty nothing on the string. The only goal to create these alias is to have editor's coloration and completion.

More details about String.raw can be found here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw

### Does this lib create not standard components?

No. This lib aims to only wrap standard angular things to let us write component without the full syntax when it is not needed.

## TODO

- [x] let us create simple component
- [ ] let us create component with input properties
- [ ] let us create component with output properties (or emit event)
- [ ] publish to npm
