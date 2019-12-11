/*What I learn here:
-------------------------------------
.push() 
add something after the existed array

.unshift() 
add index item before the list

.splice(2, 0, 'A')
insert A in index 2 (abAc) 

-------------------------------------
 */
const numbers = [3, 4];

//End
numbers.push(5, 6);

console.log(numbers);//[ 3, 4, 5, 6 ]

// Beginning
numbers.unshift(1, 2);
console.log(numbers);//[ 1, 2, 3, 4, 5, 6 ]

//Middle
numbers.splice(2, 0, 'a', 'b');//[ 1, 2, 'a', 'b', 3, 4, 5, 6 ]
console.log(numbers);

