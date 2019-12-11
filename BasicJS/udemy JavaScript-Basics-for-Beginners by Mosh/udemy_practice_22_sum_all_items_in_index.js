// sum(1, 2, 3, 4)=> 10

// Array.isArray()
// function sum(...items) {
//     if(items.length === 1 && Array.isArray(items[0]))
//     items = [...items[0]];
//     return items.reduce((a, b) => a + b);
// }
// console.log(sum([1, 2, 3, 4]));//10

function Object(...p1) {
    if(p1.length === 1 && Array.isArray(p1[0]))
    p1 = [...p1[0]];
    return p1.reduce((key1, key2) => key1 + key2);
}
console.log(Object([1, 2, 3, 4]));//10