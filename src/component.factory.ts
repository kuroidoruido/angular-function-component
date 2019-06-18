import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

function createClass(outputs) {
  return class StatelessComponentClass {
    constructor() {
      outputs.forEach(output => {
        this[output] = new EventEmitter<any>();
      });
    }
  };
}

function generateInputs(clazz, inputs) {
  inputs.forEach(input => {
    Input()(clazz.prototype, input);
  });
}

function generateOutputs(clazz, outputs) {
  outputs.forEach(output => {
    Output()(clazz.prototype, output);
  });
}

export interface ComponentConfig {
  selector: string;
  template: string;
  styles: string[];
  inputs: string[];
  outputs: string[];
}

export function createNewComponent({ selector, inputs, outputs, template, styles }: ComponentConfig) {
  const clazz = createClass(outputs);
  generateInputs(clazz, inputs);
  generateOutputs(clazz, outputs);

  return Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector,
    styles,
    template,
  })(clazz);
}
