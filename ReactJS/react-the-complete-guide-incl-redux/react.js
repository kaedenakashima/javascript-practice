/*-------------------------------------------------
Section 1: Getting Started
Section 2: Refreshing Next Generation JavaScript
-------------------------------------------------*/
const myName = 'Katie';
console.log(myName);
const myName2 = 'John';
console.log(myName2);

/*way1*/
// function printMyName(name) {
//   console.log(name);
// }
// printMyName('Katie');

/*way2*/
const printMyName = (name) => {
  console.log('John');
}
printMyName();

/*way1*/
// const multiply = (number) => {
//   return number * 2;
// }
// console.log(multiply(2));

/*way2*/
const multiply = (number) => number * 2;
console.log(multiply(2));

/*way1*/
// class Human {
//     constructor() {
//       this.gender = 'male';
//     }
//     printGender() {
//       console.log(this.gender);
//     }
//   }
  
// class Person extends Human {
//     constructor() {
//       super();
//       this.name = 'Katie';
//       this.gender = 'female';
//     }
//     printMyName() {
//       console.log(this.name);
//     }
// }
  
// const person = new Person();
// person.printMyName();
// person.printGender();

/*way2(ES6/Babel)*/
class Human {
    gender = 'male';
    printGender() {
      console.log(this.gender);
    }
  }
  
class Person extends Human {
    name = 'Katie';
    gender = 'female';
    printMyName() {
      console.log(this.name);
    }
}
  
const person = new Person();
person.printMyName();
person.printGender();

const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

/*spread operator (ES6/Babel)*/
const person = {
  name: 'Katie'
};
const newPerson = {
  ...person,
  age: 27
}
console.log(newPerson);

/*rest operator (ES6/Babel)*/
const filter = (...args) => {
  return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));


/*Array destrucuring*/
// const numbers = [1, 2, 3];
// [num1, num2] = numbers;
// console.log(num1, num2)

// const numbers = [1, 2, 3];
// [num1, , num3] = numbers;
// console.log(num1, num3);

// const number = 1;
// const num2 = number;
// console.log(num2)


// const person = {
//   name: 'Katie'
// }
// const secondPerson = person;
// person.name = 'Peter';
// console.log(secondPerson);


// const person = {
//   name: 'Katie'
// }
// const secondPerson = {
//   ...person
// };
// person.name = 'Peter';
// console.log(secondPerson);

var name = 'Katie';
console.log(name);
var secondName = name;//primitive values
console.log(secondName);
name = 'Chris';
console.log(secondName);

var person = {
  age: 28,
  name: 'Katie',
  hobbies: ['music', 'Dog walking']
};
var thirdPerson = {
  age: 28,
  name: 'Katie',
  hobbies: ['music', 'Dog walking']
};
console.log(person);     
//var secondPerson = person;
var secondPerson = Object.assign({}, person);//merge
console.log(secondPerson); 
var myHobbies = person.hobbies.slice();
person.name = 'Green';//reference values
person.hobbies.push('Reading');
console.log(secondPerson);       
console.log(thirdPerson);
console.log(myHobbies);

/*(ES6/Babel)*/
const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) => {
  return num * 2;
});
console.log(numbers);//[1, 2, 3]
console.log(doubleNumArray);//[2, 4, 6]

/*-------------------------------------------------
Section 3: Understanding the Base Features & Syntax
-------------------------------------------------*/