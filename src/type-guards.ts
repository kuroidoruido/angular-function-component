export function isString(x: unknown): x is string {
  return typeof x === 'string' || Object.prototype.toString.call(x) === '[object String]';
}

export function isUndefined(x: unknown): x is undefined {
  return typeof x === 'undefined';
}

export function isDefined<T>(x: T | null | undefined): x is T {
  return typeof x !== 'undefined';
}
