/* Variables declarations with types annotation
GOAL: Demonstrate How to annotate a variable

- R1 : We use type annotation to describe what type a value is

- R2 : We cannot reassign variables to a different type

- R3: If we do declaration and initialization on the same line 
we don't need to annotate, TS will infer the type'

-R4 : When we want a var to have a type that can't be inferred we use annotation

- R5: When a function returns the any type and we need to clarify the value 


*/
const account = 5;
const speed = 'fast';

// built-in objects annotation syntax
const now: Date = new Date();
console.log(account);
console.log(speed);
console.log(now);

//Array annotation syntax

const colors: string[] = ['red', 'green', 'yellow'];
const numbers: number[] = [1, 2, 3, 4, 5, 6];
console.log(colors);
console.log(numbers);

// Classes annotation syntax

// class Car {}

const car: Car = new Car();
console.log(car);

//Object literal annotation syntax

const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

console.log(point);

// Functions (variable) annotation syntax
// ----
// what type of arguments f expect
// what type of value the f returns

const logNumber: (num: number) => void = (num: number) => {
  console.log(num);
};
logNumber(3);

// when to use annotations

//1- Function that returns the 'any' type
/* because TS can't predict what we can return 
from a function it returns the type "any"
*/
const json = '{"x":"10", "y":"20}';
const coordinates: { x: number; y: number } = JSON.parse(json);

console.log(coordinates);

//2- When we declare a variable on one line and initialize it later
/*
 */

const words = ['blue', 'reunion', 'glory'];

let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'reunion') {
    foundWord = true;
  }
}
console.log(foundWord);
// 3- variables whose type cannot be inferred

const numbersv2 = [-10, -1, 12];
let aboveZero: boolean | number;

for (let i = 0; i < numbersv2.length; i++) {
  if (numbersv2[i] > 0) {
    aboveZero = numbersv2[i];
  }
}
console.log(aboveZero);
// exo
