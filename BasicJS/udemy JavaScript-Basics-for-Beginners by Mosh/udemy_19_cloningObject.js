/*What I learn here:
--------------------------------------------------------------------------
const newObject = {...Object};
--------------------------------------------------------------------------
 */
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// const another = Object.assign({
//     color: 'yellow'
// }, circle);//{ color: 'yellow', radius: 1, draw: [Function: draw] }
const another = {...circle};
console.log(another);//{ radius: 1, draw: [Function: draw] }



