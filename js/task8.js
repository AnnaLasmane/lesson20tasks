let num = prompt('Enter a number: ');
let primeNum;
for (i= 1; i< num; i++){
    let check = false;

    for (j=2; j<i; j++){

        if (j%i === 0){
            check = true;
            break;
        }
    }
    if (i > 1 && !check){
        primeNum = i; 
     }
}
console.log(primeNum + " is the last prime number before " + parseInt(num));

//
const endNumber = 50;
let lastPrime = 0;

for (let numberToCheck = 0; numberToCheck <= endNumber; numberToCheck++) {
    let hadDivisor = false;

    for (let i = 2; i < numberToCheck; i++) {
        if (numberToCheck % i === 0) {
            hadDivisor = true;
            break;
        }
    }

    if (!hadDivisor) {
        lastPrime = numberToCheck;
    }
}

console.log(`Last prime number before ${endNumber} was ${lastPrime}`);