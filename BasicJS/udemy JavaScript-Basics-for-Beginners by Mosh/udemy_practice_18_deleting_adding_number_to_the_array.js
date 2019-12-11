 const numbers = [1, 2, 3, 4];

//  const output = move(numbers, 1, 2);//offset - moves2 right
//  console.log(output);//[ 1, 3, 4, 2 ]

 const output = move(numbers, 1, -2);//offset - moves2 left
 console.log(output);//Invalid offset.

 function move(array, index, offset){
     const position = index + offset;
     if (position >= array.length || position < 0){
         console.error('Invalid offset.');
         return;
     }

     const output = [...array];//clone of original array
     const element = output.splice(index, 1)[0];
     output.splice(position, 0, element);
     return output;
 }
 
