//1 Convert the following function into an arrow function named "arrowMyFunction".
// const myFunction = function (num1, num2) {
//     return num1 + num2;

arrowMyFunction = (num1, num2) => {
    return num1 + num2;
};

console.log(arrowMyFunction(2, 7));

//2 Convert the following function into a one-lined arrow function without a return statement (the return is implicit) . Name the function arrowAdd100
// const add100 = function (money) {
//      return money + 100;
// };

arrowAdd100 = money => money + 100;

arrowAdd100(700);

//3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
// Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4

const countLetters = function (theString, theLetter) {
    let result = 1;
    for (let count = 1; theString < theLetter; count++) {
        result *= base;
    }
    return result;
};

console.log(countLetters("Everything will be okay", e));
// → 1024

const countLetters =