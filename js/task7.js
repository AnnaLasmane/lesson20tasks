let num = prompt('enter number: ');
let sum = 1;
for (i = 1; i <= num; i++) {
    sum *= i;
}
console.log('The factorial of given number is ', sum)

//

const number = 5;
let factorialSum = 1;
for (let i = 1; i <= number; i++) {
    factorialSum *= i;
}

console.log(`Input number: ${number}`);
console.log(`Factorial: ${factorialSum}`);