/*What I learn here:
-------------------------------------
To delete arrays, you can write
Object.length = 0;
-------------------------------------
 */

let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1 
//numbers = [];
// console.log(numbers);//[]
// console.log(another);//[1, 2, 3, 4]

// Solution 2 (recomended to use solution2)
// numbers.length = 0;
// console.log(numbers);//[]
// console.log(another);//[]

// Solution 3
// numbers.splice(0, numbers.length); //remove all items from index[0]
// console.log(numbers);//[]
// console.log(another);//[]

// Solution 4
while (numbers.length > 0)
    numbers.pop();   //remove all items from last index
console.log(numbers);//[]
console.log(another);//[]