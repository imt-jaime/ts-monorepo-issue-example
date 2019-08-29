
import { SomeInterface } from 'ts-typelib-example';
import { moduleA } from 'ts-issue-module-a';

export const moduleB = (age: number): SomeInterface => {
  const data = moduleA(age.toString())
  const ageString = data.age;

  const value: SomeInterface = {
    age: parseInt(ageString, 10)
  }
  
  return value;
}
