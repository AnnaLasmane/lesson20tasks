let total = 0;
let check = true; // check for condition, true = is perfect, false = not perfect

 for (let i = 1; i <= 500; i++){

   for (let j = 1; j < i; j++) {
     if (i%j === 0)
       total += j;
     }
     if(total === i){
       if (check) {
         console.log('Perfect numbers are: ');
         check = false; //change condition value, when condition is not met for case when no perfect numbers found
       }
       console.log(i);
     }
     total = 0;
   }

 if (check){
   console.log('There are no perfect numbers!');
 }