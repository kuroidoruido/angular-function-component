import { RenderFunction, StatelessComponentConfig, StyleFunction } from './model';
import { isString, isUndefined } from './type-guards';

/* SELECTOR */
function parseSelector(configOrSelector, config) {
  const selector = config ? config.selector : (configOrSelector as string);
  if (isUndefined(selector)) {
    throw Error('You should specify a selector.');
  }
  return selector;
}
/* TEMPLATE */
function parseTemplate(renderFnOrTemplate, config) {
  const template = renderFnOrTemplate
    ? isString(renderFnOrTemplate)
      ? renderFnOrTemplate
      : renderFnOrTemplate()
    : config.template;

  if (isUndefined(template)) {
    throw Error('You should specify a template.');
  }
  return template;
}

/* STYLE */
function parseStyle(styleFnOrStyle, config) {
  return styleFnOrStyle
    ? (isString(styleFnOrStyle)
      ? [styleFnOrStyle]
      : [styleFnOrStyle()])
    : [config.style];
}

/* INPUTS/OUTPUTS */
function parseInputsOutputs(inOut, config) {
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
    return { inputs: sortedInOut[0], outputs: sortedInOut[1] };
  } else {
    const inputs = config.inputs.map(input => (input.startsWith('[') ? input.substring(1, input.length - 1) : input));
    const outputs = config.outputs.map(output =>
      output.startsWith('(') ? output.substring(1, output.length - 1) : output,
    );
    return { inputs, outputs };
  }
}

export interface ParseResult {
  selector: string;
  template: string;
  styles: string[];
  inputs: string[];
  outputs: string[];
}

/* GLOBAL PARSER */
export function parse(
  configOrSelector: StatelessComponentConfig | string,
  inOut?: string[],
  renderFnOrTemplate?: RenderFunction | string,
  styleFnOrStyle?: string | StyleFunction,
): ParseResult {
  const config: StatelessComponentConfig = !isString(configOrSelector) && configOrSelector;

  return {
    selector: parseSelector(configOrSelector, config),
    styles: parseStyle(styleFnOrStyle, config.style),
    template: parseTemplate(renderFnOrTemplate, config),
    ...parseInputsOutputs(inOut, config),
  };
}
