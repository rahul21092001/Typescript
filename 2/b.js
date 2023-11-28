function createArray() {
    var elements = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elements[_i] = arguments[_i];
    }
    return elements;
}
var numberArray = createArray(1, 2, 3, 4, 5);
var stringArray = createArray("apple", "banana", "cherry");
var booleanArray = createArray(true, false);
console.log(numberArray);
console.log(stringArray);
console.log(booleanArray);
