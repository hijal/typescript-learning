interface ErrorContainer {
  [prop: string]: string | number;
}

let errorBag: ErrorContainer = {};

errorBag.email = "hello@test.com";
errorBag.name = "hello test";
errorBag.age = 123;

console.log("------------------------------");
console.log(errorBag);
console.log("------------------------------");

type numberOrString = number | string;
type numberOrBoolean = number | boolean;

type universal = numberOrString & numberOrBoolean;

function addition(a: number, b: number): number;
function addition(a: string, b: string): string;

function addition(a: numberOrString, b: numberOrString) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addition(1, 5);
