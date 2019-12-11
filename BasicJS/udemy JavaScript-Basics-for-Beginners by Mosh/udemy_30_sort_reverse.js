/*What I learn here:
-----------------------------------------------------
.sort()
make it in order
J will come earlier than j (reference from asccii)

.reverse()

-----------------------------------------------------
 */
// const numbers = [2, 3, 1];
// numbers.sort();//[ 1, 2, 3 ]
// console.log(numbers);

// numbers.reverse();//[ 3, 2, 1 ]
// console.log(numbers);

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' },
];

courses.sort( function(a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    else if (nameA > nameB) return 1;
    return 0;
});
console.log(courses);//[ { id: 2, name: 'JavaScript' }, { id: 1, name: 'Node.js' } ]