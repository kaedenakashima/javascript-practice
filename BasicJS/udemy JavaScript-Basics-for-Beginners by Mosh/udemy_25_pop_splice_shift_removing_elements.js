/*What I learn here:
-------------------------------------
.pop()
remove last index

.shift()
remove first index item

.splice(1, 2)
remove two items from index[1]


-------------------------------------
 */

 const numbers = [1, 2, 3, 4, 5];
 
//End
 const last = numbers.pop();
 console.log(numbers);//[ 1, 2, 3 ]
 console.log(last);//the number deleted  4

// //Beginning
// const first = numbers.shift()
// console.log(numbers);//[2, 3]
// console.log(first);//the number deleted  1

// Middle
// numbers.splice(1, 2)
// console.log(numbers);//[ 1, 4, 5 ]

