/*What I learn here:
-------------------------------------
redius: radius,        =    radius,
draw: function(){}    =    draw(){}
-------------------------------------
 */

//Object-oriented Programming (OOP)

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function(){
//         console.log('draw');
//     }
// };
//circle.draw(); // Method



//Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1)
console.log(circle1); //you'll get..  { radius: 1, draw: [Function: draw] }

const circle2 = createCircle(2)
console.log(circle2); //you'll get.. { radius: 2, draw: [Function: draw] }

