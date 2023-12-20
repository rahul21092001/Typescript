function createArray<T>(...elements: T[]): T[] {
  return elements;
}

const numberArray = createArray(1, 2, 3, 4, 5);
const stringArray = createArray("apple", "banana", "cherry");
const booleanArray = createArray(true, false)

console.log(numberArray);
console.log(stringArray);
console.log(booleanArray);




