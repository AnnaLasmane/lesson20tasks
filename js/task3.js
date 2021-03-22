// let num = 7;
let num = prompt('Enter a number: ');
let sum = 0;
for (let i = 1; i<=num; i++){
    sum+=i;
}
console.log(sum);

//
const nTermNumber = 7;

let naturalNumbers = '';
let sum = 0;
for (let i = 1; i <= nTermNumber; i++) {
    naturalNumbers += `${i} `;
    sum += i;
}

console.log('Natural numbers: ', naturalNumbers);
console.log('Sum: ', sum);