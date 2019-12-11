/*What I learn here:
-----------------------------------------------------
.reduce()
add numbers in index items
Ex. const B = A.reduce((a + b) => {
        return a + b
    }, 100);//100 + all items
    
-----------------------------------------------------
 */
const numbers = [1, -1, 2, 3];

// a = 0, c = 1 => a => 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

//Longer ver
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);

// let sum = 0;
// for (let n of numbers)
//     sum += n;

//Shorter ver
// const sum = numbers.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
// );


console.log(sum);//5
