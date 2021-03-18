// let perfect =
// for (i=1; i<=500, i++){

// }

let start = 1;
let end = 500;
let i = 1;
let total = 0;
let flag = 0;

for(start = start; start <= end; start++)
{
 for(i = 1; i < start; i++)
 {
  if(start % i == 0)
   total += i;
 }
 if((total == start) && (start != 0))
 {
  if(flag < 1)  
  {
   console.log("Perfect numbers are: ");
   flag = 1;
  }
  console.log(start);
 }
 total = 0;
}

if(flag == 0)
 document.write("There in no perfect number");