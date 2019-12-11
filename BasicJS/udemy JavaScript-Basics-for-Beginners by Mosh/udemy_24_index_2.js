/*What I learn here:
-------------------------------------
const Object[
    {key1:value1, key2:value3},    //index0
    {key1:value2, key2:value4},    //index1
];


const newObject = Object.find(function(newObject){
    return newObject.key2 === value3;
)};
console.log(newObject); //   {key1:value1, key2:value3} 


shorter ver.
const newObject = Object.find(newObject =>  newObject.key2 === value3);




const newObject = Object.findIndex(function(newObject){
    return newObject.key2 === value4;
)};
console.log(newObject); // 1


-------------------------------------
 */
const courses = [
    {id: 1, name:'a'},
    {id: 2, name:'b'}
];
//console.log(courses.includes({id:1, name:'a'}))//false





// const course = courses.find(function(course){
//     return course.name === 'a';
// });
// console.log(course)//{ id: 1, name: 'a' }




// const course = courses.findIndex(function(course){
//     return course.name === 'b';
// });
// console.log(course)//1




const course = courses.find(course => course.name === 'a');
console.log(course);//{ id: 1, name: 'a' }