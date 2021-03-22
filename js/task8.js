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