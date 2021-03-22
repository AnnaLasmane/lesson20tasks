let gcd;
const number1 = prompt('Enter a first positive integer: ');
const number2 = prompt('Enter a second positive integer: ');

for (let i = 1; i <= number1 && i <= number2; i++) {


    if( number1 % i == 0 && number2 % i == 0) {
        gcd = i;
    }
}

console.log(`GCD of ${number1} and ${number2} is ${gcd}.`);

//
const number1 = 25;
const number2 = 15;

let lastCommonDivisor = 0;
for (let divisor = 1; divisor <= number1; divisor++) {
    if (number1 % divisor !== 0) {
        continue;
    }

    if (number2 % divisor === 0) {
        lastCommonDivisor = divisor;
    }
}

console.log(`Last common divisor is: ${lastCommonDivisor}`);