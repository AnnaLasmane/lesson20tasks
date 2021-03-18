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
