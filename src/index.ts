import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Template tag for css coloration and completion.
 *
 * Example:
 * css`
 * p {
 *  color: red;
 * }
 * `;
 */
export const css = String.raw;
/**
 * Template tag for html coloration and completion.
 *
 * Example:
 * html`
 * <p>Hello, world!</p>
 * `;
 */
export const html = String.raw;

export interface StatelessComponentConfig {
  selector: string;
  template?: string;
  style?: string;
  inOut?: string[];
  inputs?: string[];
  outputs?: string[];
}

type RenderFunction = () => string;

export function StatelessComponent(config: StatelessComponentConfig);
export function StatelessComponent(config: StatelessComponentConfig, inOut: string[], renderFn: RenderFunction);
export function StatelessComponent(config: StatelessComponentConfig, inOut: string[], template: string);
export function StatelessComponent(selector: string, inOut: string[], renderFn: RenderFunction);
export function StatelessComponent(selector: string, inOut: string[], renderFn: RenderFunction, styles: string);
export function StatelessComponent(selector: string, inOut: string[], template: string);
export function StatelessComponent(selector: string, inOut: string[], template: string, styles: string);

export function StatelessComponent(
  configOrSelector: StatelessComponentConfig | string,
  inOut?: string[],
  renderFnOrTemplate?: RenderFunction | string,
  style?: string,
) {
  const config: StatelessComponentConfig =
    typeof configOrSelector !== 'string' && (configOrSelector as StatelessComponentConfig);

  // SELECTOR
  const selector = config ? config.selector : (configOrSelector as string);
  if (typeof selector === 'undefined') {
    throw Error('You should specify a selector.');
  }
  // INPUT/OUTPUT
  let inputs;
  let outputs;
  if (inOut || config.inOut) {
    const tmpInOut = config.inOut || inOut || [];
    const sortedInOut = tmpInOut
      .reduce(
        (acc, cur) => {
          if (cur.startsWith('[')) {
            return [[...acc[0], cur], acc[1]];
          } else {
            return [acc[0], [...acc[1], cur]];
          }
        },
        [[], []],
      )
      .map(arr => arr.map(inOutElt => inOutElt.substring(1, inOutElt.length - 1)));
    inputs = sortedInOut[0];
    outputs = sortedInOut[1];
  } else {
    inputs = config.inputs.map(input => (input.startsWith('[') ? input.substring(1, input.length - 1) : input));
    outputs = config.outputs.map(output => (output.startsWith('(') ? output.substring(1, output.length - 1) : output));
  }
  // TEMPLATE
  const template = renderFnOrTemplate
    ? typeof renderFnOrTemplate === 'string'
      ? renderFnOrTemplate
      : renderFnOrTemplate()
    : config.template;
  if (typeof template === 'undefined') {
    throw Error('You should specify a template.');
  }
  // STYLE
  const styles = style ? [style] : config.style && [config.style];

  const clazz = class StatelessComponentClass {
    constructor() {
      inputs.forEach(input => {
        this[input] = void 0;
      });
      outputs.forEach(output => {
        this[output] = new EventEmitter<any>();
      });
    }
  };

  inputs.forEach(input => {
    Input()(clazz.prototype, input);
  });
  outputs.forEach(output => {
    Output()(clazz.prototype, output);
  });

  return Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector,
    styles,
    template,
  })(clazz);
}
