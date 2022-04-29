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

console.log(arrowAdd100(700));

//3 Create an arrow function that takes TWO arguments, a string and a single letter.  The function will count the number of times the specified letter occurs in the string. **Not case sensitive
// Examples:
// countLetters('Hello my name is John', 'i') returns 1
// countLetters('Hello my name is John', 'h') returns 2
// countLetters('We love this city a lot, sometimes', 'e') returns 4

const countLetters = function (i) {
    if countLetters(i == "e"){
        console.log(3)
    } else if countLetters(i === "v"){
        console.log(1)
    } else if countLetters(i === "r"){
        console.log(1)
    } else {
        console.log("Invalid")
    };
};

console.log(countLetters(e));


establish a function that can recieve a string and a Number. 
add a count function OR filter out letters that are not the variable.
return the amount of letters in number data type