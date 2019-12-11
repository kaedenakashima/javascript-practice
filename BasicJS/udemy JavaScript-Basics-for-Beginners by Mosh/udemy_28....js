/*What I learn here:
-----------------------------------------------------
... 
You can put '...' before the object name of the array.

-----------------------------------------------------
 */
const first = [1, 2, 3];
const second = [4, 5, 6];

//const combined = first.concat(second);
const combined = [...first, 'a', ...second, 'b'];

//const copy = combined.slice();
const copy = [...combined];

console.log(combined);//[ 1, 2, 3, 'a', 4, 5, 6, 'b' ]
console.log(copy);//[ 1, 2, 3, 4, 5, 6 ]//[ 1, 2, 3, 'a', 4, 5, 6, 'b' ]