let value = 1234;
let sum = 0;

while (value) {
    
    sum += value % 10; //find the last digit by performing mod operation
    value = Math.floor(value / 10); //always takes the lowest integer value of 10% of number
}

console.log(sum);