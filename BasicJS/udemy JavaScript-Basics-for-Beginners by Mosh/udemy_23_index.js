/*What I learn here:
-------------------------------------
.indexOf()
shows index number

.includes()
if it includes in the array, you'll get true.

-------------------------------------
 */
const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(1));//0
console.log(numbers.indexOf(1, 2));// index second of 1    3
console.log(numbers.indexOf(-1));//-1
console.log(numbers.lastIndexOf(1));//3

console.log(numbers.indexOf(1) !== -1);//true
console.log(numbers.includes(1))//true

