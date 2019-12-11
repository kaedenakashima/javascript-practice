// ---what I learn here------------------
// variableName means object

// let object = {
//     key1:value1,
//     key2:value2
// }
    
// console.log(object.key1);

// and you'll get..
// value1

// -------------------------------------


let person = {
    name: 'Katie',
    age: 27
};
console.log(person.name);
console.log(person.age);
console.log(person);

person.name = 'Apple';
console.log(person);

person['name'] = 'Molly'
console.log(person);

let selection = 'name';
person[selection] = 'Mary';
console.log(person.name);