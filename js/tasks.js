
//task1 // first 10 n numbers

let input = 1;
while (input <= 10) {
 console.log(input);
 input++;
}
//task2 // sum of first 10 n
let total = 0;

for (let i = 1; i <=10; i ++){
     total += i;
}
console.log(total);

//task 3 // sum of numbers like (3) = 6 // 1+2+3=6

function numberSum(N) {
    let total = 0;
      for(let i = 1; i <= N; i++){
        total += i;
      }
      return total;
  }
  const someTotal = numberSum(7); 
  console.log(someTotal);

  ////

  


//task 4
const sum = (accumulator, currentValue) => accumulator + currentValue;

function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
  }
  
  function sumDivisions(n){
    arr = range(n-1, startAt=1).filter(x => n % x == 0)
    return arr.reduce(sum, 0);
  }
  
function is_perfect_number(n){
  return sumDivisions(n) == n
}

range(1000, 1).forEach(function(x){
  if(is_perfect_number(x)){
    console.log(x);
  }
})


    // task5
    function test_prime(n)
{
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(13));




var start = 1;
var end = 1000;
var i = 1;
var total1 = 0;
var flag = 0;

for(start = start; start <= end; start++)
{
 for(i = 1; i < start; i++)
 {
  if(start % i == 0)
   total1 += i;
 }
 if((total1 == start) && (start != 0))
 {
  if(flag < 1)  
  {
   document.write("Perfect numbers are: ");
   
  }
  document.write(start +", ");
 }
 total1 = 0;
}


