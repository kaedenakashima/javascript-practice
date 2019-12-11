/*What I learn here:
--------------------------------------------------------------------------
The Way to Write for Let Statement

for(let key in Object)
    console.log(key, Objectname[key]); // key1 value1

for (let key of Object.keys(Objectname))
    console.log(key); // ['key1']

for (let entry of Object.entries(Objectname))
    console.log(entry); // ['key1', [Function: key1]]
--------------------------------------------------------------------------
 */
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

for (let key in circle)
    console.log(key, circle[key]);//radius draw

for (let key of Object.keys(circle))
    console.log(key);//[ 'radius', 1 ]

for (let entry of Object.entries(circle))
    console.log(entry);//[ 'draw', [Function: draw] ]

if ('radius' in circle) console.log('yes');//yes


if ('color' in circle) console.log('yes');