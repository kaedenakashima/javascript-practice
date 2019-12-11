/*What I learn here:
-----------------------------------------------------
.join(',')
connect items with ,

.join('-')
combine items with -

.split(' ')
split to each words.

-----------------------------------------------------
 */
const numbers = [1, 2, 3];
for (let number of numbers)
    console.log(number);//123

//Longer ver.    
// numbers.forEach(number =>{
//     console.log(number);
// })

//Shorter ver.
//numbers.forEach(number => console.log(number));//123

//print index next to the number
numbers.forEach((number, index) => console.log(index, number));//0 1   1 3   2 3

const joined = numbers.join(',');//1,2,3
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' ');//[ 'This', 'is', 'my', 'first', 'message' ]
console.log(parts);

const combined = parts.join('-');//This-is-my-first-message
console.log(combined);