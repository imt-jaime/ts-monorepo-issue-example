import { SomeInterface } from 'ts-typelib-example';

export const moduleA = (age: string): SomeInterface => {
  const value: SomeInterface = {
    age
  };

  return value;
}