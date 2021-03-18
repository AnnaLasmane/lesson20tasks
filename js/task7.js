let num = prompt('enter number: ');
let sum = 1;
for (i = 1; i <= num; i++) {
    sum *= i;
}
console.log('The factorial of given number is ', sum)