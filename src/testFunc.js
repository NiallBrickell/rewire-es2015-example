import { reduce } from 'lodash';

export function testFunction() {
  const test = ['a', 'b', 'c'];
  return reduce(test, (a, b) => a + b, '');
}
