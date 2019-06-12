import { ChangeDetectionStrategy, Component } from '@angular/core';

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
}

type RenderFunction = () => string;

export function StatelessComponent(config: StatelessComponentConfig);
export function StatelessComponent(config: StatelessComponentConfig, renderFn: RenderFunction);
export function StatelessComponent(config: StatelessComponentConfig, template: string);
export function StatelessComponent(selector: string, renderFn: RenderFunction);
export function StatelessComponent(selector: string, renderFn: RenderFunction, styles: string);
export function StatelessComponent(selector: string, template: string);
export function StatelessComponent(selector: string, template: string, styles: string);

export function StatelessComponent(
  configOrSelector: StatelessComponentConfig | string,
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

  return Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector,
    styles,
    template,
  })(class StatelessComponentClass {});
}
