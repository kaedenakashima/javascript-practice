// const numbers = [1, 2, 3, 4, 1];

// function countOccurrences(array, searchElement){
//     // let count = 0;
//     // for (let element of array)
//     //     if (element === searchElement)
//     // return count;
//     return array.reduce((accumulator, current) => {
//         const occurrence = (current === searchElement) ? 1 : 0;
//         console.log(accumulator, current, searchElement)
//         return accumulator + occurrence;
//     }, 0);
// }
// const count = countOccurrences(numbers, 1);
// console.log(count);
// // 0 1 1
// // 1 2 1
// // 1 3 1
// // 1 4 1
// // 1 1 1
// // 2



const Object = [1, 2, 3, 4, 1];

function newObject(parameter1, parameter2){
    // let count = 0;
    // for (let element of parameter1)
    //     if (element === parameter2)
    // return count;
    return parameter1.reduce((parameter3, parameter4) => {
        const key1 = (parameter4 === parameter2) ? 1 : 0;
        console.log(parameter3, parameter4, parameter2)
        return parameter3 + key1;
    }, 0);
}
const key2 = newObject(Object, 1);
console.log(key2);