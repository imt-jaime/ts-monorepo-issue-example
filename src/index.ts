import { moduleB } from 'ts-issue-module-b';
// import { SomeInterface } from 'ts-typelib-example'; // this line makes no sense

const valueB = moduleB(3);

// Print A and B Values
// console.debug(valueA, valueB);

export {
  valueB
}