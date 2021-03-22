
let primeNum=[];
for (let i = 1; i<= 100; i++){
    let isPrime = false;

    for (let j=2; j<i; j++){
        
        if (i%j===0){
            isPrime = true;
            break;
        }
    }

    if (i > 1 && isPrime == 0){
       primeNum += i + ' '; 
    }
}
console.log(primeNum);
console.log(primeNum.split(' ').length-1);

//
const startNumber = 2;
const endNumber = 100;
let primeNumbers = '';
let primeNumberCount = 0;

for (let numberToCheck = startNumber; numberToCheck <= endNumber; numberToCheck++) {
    let hadDivisor = false;

    for (let i = 2; i < numberToCheck; i++) {
        if (numberToCheck % i === 0) {
            hadDivisor = true;
            break;
        }
    }

    if (!hadDivisor) {
        primeNumbers += `${numberToCheck} `;
        primeNumberCount++;
    }
}

console.log(`Prime nubmers: ${primeNumbers}`);
console.log(`Total prime numbers found: ${primeNumberCount}`);
