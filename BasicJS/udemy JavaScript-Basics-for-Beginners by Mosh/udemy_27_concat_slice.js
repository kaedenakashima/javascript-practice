/*What I learn here:
-------------------------------------
.concat()
ex.  const newObject = Object1.concat(Object2);
add Object2 to Object1

.slice(2) //[ 3, 4, 5, 6 ]
delete two index from the front

.slice(2, 4)//[3, 4]
from index2 and index(4-1)

-------------------------------------
 */
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
const slice = combined.slice(2, 4);
console.log(combined);//[ 1, 2, 3, 4, 5, 6 ]
console.log(slice);//[ 3, 4 ]


const first = [{ id: 1 }];
const second = [4, 5, 6];
const combined = first.concat(second);
const slice = combined.slice(2, 4);
console.log(combined);//[ { id: 1 }, 4, 5, 6 ]
console.log(slice);//[ 5, 6 ]