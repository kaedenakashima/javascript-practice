/*What I learn here:
-----------------------------------------------------
adds up all numbers method

function Object(){
    let newObject = 0;
    for (let key2 of arguments)
        newObject += key2;
    return newObject;
}
console.log(Object(1,2,3,4,5,10));
-----------------------------------------------------
 */
function sum(a, b){
    console.log(arguments);
    return a + b;
}
console.log(sum(1,2,3,4,5));//{ '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

function sum(){
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}
console.log(sum(1,2,3,4,5,10));//25



