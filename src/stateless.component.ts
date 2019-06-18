import { createNewComponent } from './component.factory';
import { RenderFunction, StatelessComponentConfig, StyleFunction } from './model';
import { parse } from './parsers';

/**
 * Creates a StatelessComponent using only a config object.
 *
 * @param config a StatelessComponentConfig.
 *
 * Exemple:
 * const myComp = StatelessComponent({
 *  selector: 'my-comp',
 *  inputs: ['who'],
 *  outputs: ['onWhoClick'],
 *  template: html`<p>Hello, <span (click)="onWhoClick.emit($event)">{{who}}</span>!</p>`,
 *  style: css`p {color: red;}`,
 * });
 */
export function StatelessComponent(config: StatelessComponentConfig);

/**
 * Creates a StatelessComponent using a config object, a array of input/output and a render function.
 *
 * @param config a StatelessComponentConfig.
 * @param inOut an array of inputs and outputs.
 * @param renderFn a function which return a template.
 *
 * Exemple:
 * const myComp = StatelessComponent({
 *    selector: 'my-comp',
 *    style: css`p {color: red;}`,
 *  },
 *  ['[who]', '(onWhoClick)'],
 *  () => html`<p>Hello, <span (click)="onWhoClick.emit($event)">{{who}}</span>!</p>`,
 * );
 */
export function StatelessComponent(config: StatelessComponentConfig, inOut: string[], renderFn: RenderFunction);

/**
 * Creates a StatelessComponent using a config object, a array of input/output and a string template.
 *
 * @param config a StatelessComponentConfig.
 * @param inOut an array of inputs and outputs.
 * @param template a string template.
 *
 * Exemple:
 * const myComp = StatelessComponent({
 *    selector: 'my-comp',
 *    style: css`p {color: red;}`,
 *  },
 *  ['[who]', '(onWhoClick)'],
 *  html`<p>Hello, <span (click)="onWhoClick.emit($event)">{{who}}</span>!</p>`,
 * );
 */
export function StatelessComponent(config: StatelessComponentConfig, inOut: string[], template: string);

/**
 * Creates a StatelessComponent using a selector, a array of input/output and a render function.
 *
 * @param selector a string selector.
 * @param inOut an array of inputs and outputs.
 * @param renderFn a function which returns a template.
 *
 * Exemple:
 * const myComp = StatelessComponent(
 *  'my-comp',,
 *  ['[who]', '(onWhoClick)'],
 *  () => html`<p>Hello, <span (click)="onWhoClick.emit($event)">{{who}}</span>!</p>`,
 * );
 */
export function StatelessComponent(selector: string, inOut: string[], renderFn: RenderFunction);

/**
 * Creates a StatelessComponent using a selector, a array of input/output, a render function and a style function.
 *
 * @param selector a string selector.
 * @param inOut an array of inputs and outputs.
 * @param renderFn a function which returns a template.
 * @param styleFn a function which returns a string stylesheet.
 *
 * Exemple:
 * const myComp = StatelessComponent(
 *  'my-comp',,
 *  ['[who]', '(onWhoClick)'],
 *  () => html`<p>Hello, <span (click)="onWhoClick.emit($event)">{{who}}</span>!</p>`,
 *  () => css`p{color: red;}`,
 * );
 */
export function StatelessComponent(selector: string, inOut: string[], renderFn: RenderFunction, styleFn: StyleFunction);
/**
 * Creates a StatelessComponent using a selector, a array of input/output and a string template.
 *
 * @param selector a string selector.
 * @param inOut an array of inputs and outputs.
 * @param template a string template.
 *
 * Exemple:
 * const myComp = StatelessComponent(
 *  'my-comp',,
 *  ['[who]', '(onWhoClick)'],
 *  html`<p>Hello, <span (click)="onWhoClick.emit($event)">{{who}}</span>!</p>`,
 * );
 */
export function StatelessComponent(selector: string, inOut: string[], template: string);

/**
 * Creates a StatelessComponent using a selector, a array of input/output, a string template and a string stylesheet.
 *
 * @param selector a string selector.
 * @param inOut an array of inputs and outputs.
 * @param template a string template.
 * @param style a string stylesheet.
 *
 * Exemple:
 * const myComp = StatelessComponent(
 *  'my-comp',,
 *  ['[who]', '(onWhoClick)'],
 *  html`<p>Hello, <span (click)="onWhoClick.emit($event)">{{who}}</span>!</p>`,
 *  css`p{color: red;}`,
 * );
 */
export function StatelessComponent(selector: string, inOut: string[], template: string, style: string);

export function StatelessComponent(
  configOrSelector: StatelessComponentConfig | string,
  inOut?: string[],
  renderFnOrTemplate?: RenderFunction | string,
  styleFnOrStyle?: string | StyleFunction,
) {
  return createNewComponent(parse(configOrSelector, inOut, renderFnOrTemplate, styleFnOrStyle));
}
