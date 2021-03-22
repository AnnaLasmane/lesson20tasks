
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
