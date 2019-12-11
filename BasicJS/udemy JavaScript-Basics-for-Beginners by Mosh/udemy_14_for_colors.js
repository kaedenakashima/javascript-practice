// for
// while 
// do-while

// for in
const person = {
    name: 'Katie',
    age: 27
};

// // Dot Notation
// person.name
// //Bracket Notation
// person['name']

for (let key in person)
    console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];

for(let index in colors)
console.log(index, colors[index]);

// for of
for(let color of colors)
    console.log(color);

let i = 0;
while (i<= 10){
    if (i===5) break;
    if (i % 2 ===0){
        i++;
        continue;
    }
    console.log(i);
    i++;
}