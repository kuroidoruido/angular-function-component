export interface StatelessComponentConfig {
  selector: string;
  template?: string;
  style?: string;
  inOut?: string[];
  inputs?: string[];
  outputs?: string[];
}

export type RenderFunction = () => string;

export type StyleFunction = () => string;
