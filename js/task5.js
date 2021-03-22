const num = 20;
let prime = true;

for (i = 2; i < num; i++) {
    if (num % i !== 0) {} else {
        prime = false;
    }
}
if (prime) {
    console.log(`Number ${num} is prime` );
} else {
    console.log(`Number ${num} is not prime`);
}
//
const numberToCheck = 7;

let hadDivisor = false;

for (let i = 2; i < numberToCheck; i++) {
    if (numberToCheck % i === 0) {
        hadDivisor = true;
        break;
    }
}

if (hadDivisor) {
    console.log(`${numberToCheck} is not a prime`);
} else {
    console.log(`${numberToCheck} is a prime`);
}