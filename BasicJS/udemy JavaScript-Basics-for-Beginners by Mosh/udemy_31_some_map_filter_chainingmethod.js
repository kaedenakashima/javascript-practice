/*What I learn here:
-----------------------------------------------------------------------------------------------------
.some()
true/false, if the one of the index items maches to the condition, then it will be true.

.map()
setting for the display. 

.filter()
select items.

.join('')
connect items withought any spaces
-----------------------------------------------------------------------------------------------------
 */
//const numbers = [1, -1, 2, 3];

//every()
//some()

//.some() Longer ver.
// const allPositive = numbers.some(function(apple){
//     return apple >= 0;
// });
// console.log(allPositive); // true

//.some() Shorter Ver.
// console.log( numbers.some( allPositive => {
//     return allPositive >= 0;
// }));



//.filter() Longer ver.
// const filtered = numbers.filter(function(value){
//     return value >= 0;
// });

//.filter() Shorter ver.
// const filtered = numbers.filter(value => value >= 0);
//const filtered = numbers.filter(n => n >= 0);
//console.log(filtered);//[ 1, 2, 3 ]

//const items = filtered.map(n => '<li>' + n + '</li>');
// const html = '<ul>' + items.join('') + '</ul>';
// console.log(html);//<ul><li>1</li><li>2</li><li>3</li></ul>


// const items = filtered.map(n => {
//     return {value: n };
// });

//with one line
//const items = filtered.map(n => ({value:n}));//use () to return
//console.log(items);//[ { value: 1 }, { value: 2 }, { value: 3 } ]



//Chaining Method
// const numbers = [1, -1, 2, 3];

// const items = numbers  
//     .filter(n => n >= 0)
//     .map(n => ({value:n}))
//     .filter(obj => obj.value >1)
//     .map(obj => obj.value);

// console.log(items);//[ 2, 3 ]
