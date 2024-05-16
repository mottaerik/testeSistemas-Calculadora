function sum(a, b) {
  return a + b;
}

export const OPERATIONS = {
  "+": sum,
  "-": subtract,
  x: multiply,
  "/": divide,
  "=": equal,
  AC: allClear,
};


export function subtract(a: number, b: number) {
  return a - b;
}

export function multiply(a: number, b: number) {
  return a * b;
}

export function divide(a: number, b: number) {
  return a / b;
}

export function equal(_a: number, b: number) {
  return b;
}

export function allClear() {
  return 0;
}

module.exports = sum;
module.exports = subtract;
module.exports = multiply;
module.exports = divide;
module.exports = equal;
module.exports = allClear;